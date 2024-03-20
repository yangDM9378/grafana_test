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
  currentValue: number;
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
  const [alertRuleData, setAlertRuleData] = useState<Record<string, Rule[]>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/annotations');
        const annotationData: Annotation[] = response.data
        const groupData: Record<string, Annotation[]> = {};
        annotationData.forEach(alertingData => {
          if (alertingData.newState == 'Alerting') {
            // 시간 00:00:00 표현
            const date  = new Date(alertingData.created)
            const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
            const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
            const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            const alertingTime = `${hours}:${minutes}:${seconds}`;
            alertingData.alertingTime = alertingTime;
            const dayKey = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
          
            // 알람 발생시의 데이터
            alertingData.currentValue = alertingData.data.values.B

            // 알람 내역 가져오기
            // const alertRuleResponse = await axios.get('http://localhost:3000/api/')

            
            if (!groupData[dayKey]) {
              groupData[dayKey] = []
            }
            groupData[dayKey].push(alertingData)
          }
        })
        setData(groupData);
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
      }
    };
    
    const fetchAlertRuleData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/provisioning/alert-rules');
        const alertRuleData: Record<string, Rule[]> = response.data
        setAlertRuleData(response.data);
        console.log(alertRuleData)
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
      }
    };
    fetchData();
    fetchAlertRuleData()
  }, []);


  return (
    <div>
      <Icon name="bell" size="xxxl" style={{ color: 'red' }}></Icon>
      <h1>Alarm History</h1>
      {Object.keys(data).map((day, index) => (
        <div key={index}>
          <h2>{day}</h2>
          {data[day].map((alertingData: Annotation) => 
            <div key={alertingData.id}>
              <div>{alertingData.alertId}</div>
              <div>{alertingData.text}</div>
              <div>{alertingData.alertingTime}</div>
              <div>{alertingData.currentValue}</div>
            </div>
          )}
        </div>
      ))}
      {alertRuleData}
    </div>
  );
}