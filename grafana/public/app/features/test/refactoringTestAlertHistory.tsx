import React, { useEffect, useState } from 'react';
import axios from 'axios';


interface AlarmHistory {
  Date: string;
  Message: string;
  Time: string;
  AlarmTitle: string;
}



export default function RefactoringAlertHistory() {

  const [alarmHistoryData, setAlarmHistoryData] = useState<{ [date: string]: AlarmHistory[] }>({});


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<{ [key: string]: AlarmHistory[] }>('http://127.0.0.1:5000/alarmhistory');
        setAlarmHistoryData(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, []);


  return (
    <div>
      <h1>Alarm history</h1>
      {Object.keys(alarmHistoryData).map(date => (
        <div key={date}>
          <h2>{date}</h2>
          {alarmHistoryData[date].map((alarmData,idx) => (
            <li key={idx}>
              <p>Alarm Rule Title: {alarmData.AlarmTitle}</p>
              <p>Message: {alarmData.Message}</p>
              <p>Date: {alarmData.Date}</p>
              <p>Time: {alarmData.Time}</p>
            </li>
          ))}
        </div>
      ))}
    </div>
  );
}