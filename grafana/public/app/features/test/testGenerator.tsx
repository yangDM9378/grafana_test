import React, { useState } from 'react';
import axios from 'axios'
import { createFolder } from 'app/features/manage-dashboards/state/actions';
import { createDataSource } from 'app/features/datasources/api'
import dashboardImportTest from './jsonFile/dashboard-import-test.json';

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

export default function testGenerator() {
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
    const templates = Object.values(templatesData).flat()
    try {
      const folderReqData = {
        "uid": "",
        "title": formData.ip,
      }
      const folderCreateResponse = await createFolder(folderReqData);
      // const folderCreateResponse = await axios.post('http://localhost:3000/api/folders', folderReqData);
      console.log(folderCreateResponse)

      const datasourceReqData = {
        "name": "",
        "type": "prometheus",
        "url": "9090",
        "access": "proxy",
        "basicAuth": false
      }
      const newdataSourceData = { ...datasourceReqData, name: `${formData.ip}-window`, url: `http://${formData.ip}:${datasourceReqData.url}` }
      const DatasourceCreateResponse = await createDataSource(newdataSourceData)
      // const DatasourceCreateResponse = await axios.post('http://localhost:3000/api/datasources/', datasourceReqData)
      console.log(DatasourceCreateResponse)

      console.log(templates)
      dashboardImportTest.dashboard.title = formData.servername;
      const dashboardData = { ...dashboardImportTest, folderUid: folderCreateResponse.uid }
      const DashboardCreateResponse = await axios.post('http://localhost:3000/api/dashboards/import', dashboardData)
      console.log(DashboardCreateResponse)
    } catch (error) {
      console.error('Error createing folder', error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>ip 입력:
          <input type="text" name='ip' value={formData.ip} onChange={handleFormDataChange} />
        </label>
        <br />
        <label>서버명 입력:
          <input type="text" name='servername' value={formData.servername} onChange={handleFormDataChange} />
        </label>
        <br />
        <label>자산명 입력:
          <input type="text" name='assetNum' value={formData.assetNum} onChange={handleFormDataChange} />
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
