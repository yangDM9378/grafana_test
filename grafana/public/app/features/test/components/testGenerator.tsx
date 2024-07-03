import React, { useState } from 'react';
import axios from 'axios'
import { createFolder } from 'app/features/manage-dashboards/state/actions';
import datasourceTest from '../jsonFile/datasource-test.json'
import dashboardImportTest from '../jsonFile/dashboard-import-test.json';

interface FormData {
  ip: string;
  servername: string;
  assetNum: string;
}
interface TemplateData {
  os: string[];
  db: string[];
  app: string[];
  [key: string]: string[]; // 인덱스 시그니처 추가
}

interface TestGeneratorProps {
  selectedRack: number;
}

export default function testGenerator({ selectedRack }:TestGeneratorProps) {
  const [formData, setFormData] = useState<FormData>({ ip: '', servername: '', assetNum: '' })
  const [templatesData, setTemplatesData] = useState<TemplateData>({ os: [], db: [], app: [] })

  const handleFormDataChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleTemplateDataChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name, value } = event.currentTarget;
    const updatedList = templatesData[name].filter((item: string) => item !== value);
    if (updatedList.length === templatesData[name].length) {
      updatedList.push(value);
    }
    setTemplatesData({
      ...templatesData,
      [name]: updatedList
    });
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log('formData', formData)
    console.log('templatesData', templatesData)
    // const templates = Object.values(templatesData).flat()
    try {
      const folderReqData = {
        "uid": "",
        "title": formData.ip,
      }

      // folder 생성
      const folderCreateResponse = await createFolder(folderReqData);
      // const folderCreateResponse = await axios.post('http://localhost:3000/api/folders', folderReqData);
      console.log(folderCreateResponse)
      
      
      // promethus data source 생성
      
      const newPromethuesDatasource = { ...datasourceTest.prometheus, name: `${formData.ip}-promethues`, url: `http://${formData.ip}:${datasourceTest.prometheus.url}` }
      const promethuesDatasourceRes = await axios.post('http://localhost:3000/api/datasources/', newPromethuesDatasource)
      console.log(promethuesDatasourceRes)
      
      // // zabbix data source 생성
      // const newZabbixDatasource = {
      //   ...datasourceTest.zabbix,
      //   name: `${formData.ip}-zabbix`,
      //   url: `http://${formData.ip}/${datasourceTest.zabbix.url}`,
      //   jsonData: {
      //     username: 'Admin',
      //     password: 'zabbix'
      //   },
      // };
      // const zabbixDatasourceRes = await axios.post('http://localhost:3000/api/datasources/', newZabbixDatasource)
      // console.log(zabbixDatasourceRes)


      // dashboard Import
      dashboardImportTest.dashboard.title = formData.servername;
      const dashboardData = { ...dashboardImportTest, folderUid: folderCreateResponse.uid }
      const dashboardCreateResponse = await axios.post('http://localhost:3000/api/dashboards/import', dashboardData)
      console.log(dashboardCreateResponse)
      // const newDashboardUId = dashboardCreateResponse.data.uid
      // addServer(selectedRack, newDashboardUId) 
      console.log(dashboardCreateResponse)
      const newDashboardId = dashboardCreateResponse.data.dashboardId
      addServer(selectedRack, newDashboardId) 
    } catch (error) {
      console.error('Error createing folder', error);
    }
  }

  const addServer = async (selectedRack: number, newDashboardId:number) => {
    try {
      console.log('--------------',newDashboardId)
      await axios.post(`http://127.0.0.1:5000/racks/${selectedRack}/servers`, {
        newDashboardId});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style= {{border: '3px solid yellow' }}>
      <form onSubmit={handleSubmit}>
        <label>ip 입력:
          <input type="text" name='ip' value={formData.ip} onChange={handleFormDataChange} />
        </label>
        <br />
        <label>서버명 입력:
          <input type="text" name='servername' value={formData.servername} onChange={handleFormDataChange} />
        </label>
        <br />
        <label>OS Template 선택:
          <button type="button" name='os' value='window' onClick={handleTemplateDataChange}>Window</button>
          <button type="button" name='os' value='linux' onClick={handleTemplateDataChange}>Linux</button>
        </label>
        <br />
        <label>DB Template 선택:
          <button type="button" name='db' value='oracle' onClick={handleTemplateDataChange}>Oracle</button>
          <button type="button" name='db' value='mssql' onClick={handleTemplateDataChange}>MSSQL</button>
          <button type="button" name='db' value='mysql' onClick={handleTemplateDataChange}>Mysql</button>
          <button type="button" name='db' value='hana' onClick={handleTemplateDataChange}>HANADB</button>
        </label>
        <br />
        <label>APP Template 선택:
          <button type="button" name='app' value='iis' onClick={handleTemplateDataChange}>IIS</button>
          <button type="button" name='app' value='tomcat' onClick={handleTemplateDataChange}>TOMCAT</button>
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
