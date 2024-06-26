import React from 'react';
import axios from 'axios'
import alertRuleTest from '../jsonFile/alert-rule-test.json';


interface AlertConfigProps {
  selectDashboardUId: string;
  selectFolderUid: string;
}

export default function AlertConfig({ selectDashboardUId, selectFolderUid }: AlertConfigProps) {

  const addAlertRule = () => {
    createAlertRuleApi()
  }

  const createAlertRuleApi = async () => {
    try {
      alertRuleTest.dashboardUId = selectDashboardUId
      alertRuleTest.folderUId = selectFolderUid
      console.log(alertRuleTest)
      const alertRuleRes = await axios.post('http://localhost:3000/api/v1/provisioning/alert-rules',
        alertRuleTest, 
        {
          headers: 
          {
          'Authorization': `Bearer `,
        }
      })
      await axios.put(`http://127.0.0.1:5000/alarm/${alertRuleRes.data.id}/dashboardId`, {
        selectDashboardUId});
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Server Info</h1>
      <div>(서버이름)</div>
      <div>(템플릿 정보)</div>
      <h2>알람 Setting</h2>
      <div>(템플릿 선택)</div>
      <div>(메트릭 선택)</div>
      <div>(조건 선택)</div>
      <div>(기준값 작성)</div>
      <button onClick={addAlertRule}>알람 추가</button>

    </div>
  );
}

