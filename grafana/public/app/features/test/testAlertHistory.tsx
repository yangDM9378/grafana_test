import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Icon} from '@grafana/ui';

interface Annotation {
  alertId: number;
  alertName: string;
  avatarUrl: string;
  created: number;
  dashboardId: number;
  dashboardUID: string;
  data: Record<string, any>;
  email: string;
  id: number;
  login: string;
  newState: string;
  panelId: number;
  prevState: string;
  tags: string[];
  text: string;
  time: number;
  timeEnd: number;
  updated: number;
  userId: number;
  alertingTime: string;
  // currentValue: number;
  alertingIP: string;
  alertingServerName: string;
}

interface RelativeTimeRange {
  from: number;
  to: number;
}

interface QueryModel {
  editorMode: string;
  expr: string;
  hide: boolean;
  intervalMs: number;
  legendFormat: string;
  maxDataPoints: number;
  range: boolean;
  refId: string;
  conditions?: {
    evaluator: {
      params: any[];
      type: string;
    };
    operator: {
      type: string;
    };
    query: {
      params: string[];
    };
    reducer: {
      params: any[];
      type: string;
    };
    type: string;
  }[];
  reducer?: string;
  type: string;
}

interface Data {
  refId: string;
  queryType: string;
  relativeTimeRange: RelativeTimeRange;
  datasourceUid: string;
  model: QueryModel;
}

interface Rule {
  id: number;
  uid: string;
  orgID: number;
  folderUID: string;
  ruleGroup: string;
  title: string;
  condition: string;
  data: Data[];
  updated: string;
  noDataState: string;
  execErrState: string;
  for: string;
  isPaused: boolean;
}

export default function TestAlertHistory() {
  const [data, setData] = useState<Record<string,Annotation[]>>({});
  const [alertRuleData, setAlertRuleData] = useState<Rule[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const alertRuleResponse = await axios.get('http://localhost:3000/api/v1/provisioning/alert-rules');
        setAlertRuleData(alertRuleResponse.data);
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
      }

        const response = await axios.get('http://localhost:3000/api/annotations');
        const annotationData: Annotation[] = response.data;
        const groupData: Record<string, Annotation[]> = {};
        annotationData.forEach(alertingData => {
          if (alertingData.newState == 'Alerting') {
            // 시간 00:00:00 표현
            const date  = new Date(alertingData.created);
            const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
            const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
            const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            const alertingTime = `${hours}:${minutes}:${seconds}`;
            alertingData.alertingTime = alertingTime;
            const dayKey = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
          
            // 서버명 IP 넣기
            const alertingServerName = alertingData.text.match(/grafana_folder=([^,]+),/)
            const ServerName = alertingServerName ? alertingServerName[1] : ''; 
            const alertingIP = alertingData.text.match(/instance=([^,]+),/)
            const IP = alertingIP ? alertingIP[1] : '';
            alertingData.alertingServerName = ServerName
            alertingData.alertingIP = IP
            // // 알람 발생시의 데이터
            // alertingData.currentValue = alertingData.data.values.B;
  
            if (!groupData[dayKey]) {
              groupData[dayKey] = [];
            }
            groupData[dayKey].push(alertingData);
          }
        });
        setData(groupData);
    };
    fetchData();
  }, []);


  return (
    <div style= {{margin: "30px"}}>
      <div style= {{display: "flex", flexDirection: "row", alignItems:"center"}}>
        <Icon name="bell" size="xxxl" style={{ color: 'red'}}></Icon>
        <div style={{ fontSize: '34px', fontWeight: 'bold', color: '#ffffff', marginLeft: '28px' }}>Alarm History</div>
      </div>
      {Object.keys(data).map((day, index) => (
        <div key={index} style={{ backgroundColor: "#000000", margin: '30px 0px', padding: '20px 40px', borderRadius: '20px' }}>
        <div style={{ fontSize: '21px', fontWeight: 'bold', color: '#ffffff', marginBottom:'10px' }}>{day}</div>
          {data[day].map((alertingData: Annotation) => {
          const matchedRule = alertRuleData.filter((rule: Rule) => {
            return rule.id === alertingData.alertId;
          });
          const MetricMatch = matchedRule[0].data[0].model?.expr.match(/^[^{]*/)
          const MetricText = MetricMatch ? MetricMatch[0]: ''
          const referenceValue = matchedRule[0].data[2].model?.conditions?.[0].evaluator.params?.[0]
          const conditionType = matchedRule[0].data[2].model?.conditions?.[0].evaluator.type
          let conditionText = '규칙이 잘못됨'
          if (conditionType === 'lt') {
            conditionText = '낮'
          } else {
            conditionText = '높'
          }
          const alertHistoryText = `Metric ${MetricText}이 기준값 ${referenceValue}보다 ${conditionText}습니다.`
          console.log()
          return (
            <div key={alertingData.id} style={{ backgroundColor: "#FA3246",  border: "3px solid #ffffff", display: "flex", justifyContent:'space-between', padding: "10px 15px"}}>
              <div style={{ display: "flex", flexDirection: "column"}}>
                <span style={{ fontSize: '21px', fontWeight: 'bold', color: '#ffffff' }}>{alertHistoryText}</span>
                {/* <div>{matchedRule[0].title}</div> */}
                <span style={{ fontSize: '13px', color: '#ffffff' }}>{alertingData.alertingServerName} / {alertingData.alertingIP}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end"}}>
                <span style={{fontSize: '13px',  color: '#ffffff' }}>{day}</span>
                <span style={{fontSize: '13px',  color: '#ffffff' }}>{alertingData.alertingTime}</span>
              </div>
            </div>
          )}

          )}
        </div>
      ))}
    </div>
  );
}