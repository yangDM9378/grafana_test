import React, { useEffect } from 'react';
import axios from 'axios';

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
}

export default function TestAlertHistory() {
  // const [data, setData] = useState<Record<string,Annotation[]>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('테스트 시작');
        const response = await axios.get('http://localhost:3000/api/annotations');
        const annotationData: Annotation[] = response.data
        // const groupedData: Record<string, Annotation[]> = {};
        annotationData.forEach(alertingData => {
          if (alertingData.newState == 'Alerting') {
            const date  = new Date(alertingData.created)
            console.log(date)
          }
        })
        // const filteredData = annotationData.filter((item) => item.newState == 'Alerting');
        // setData(filteredData);
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  // const test = () => {
  //   console.log(data)
  // }

  return (
    <div>

      {/* <button onClick={test}>1111</button> */}
    </div>
  );
}