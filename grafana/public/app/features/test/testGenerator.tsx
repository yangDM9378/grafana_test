import React, { useState } from 'react';
import axios from 'axios'
import datasourceWindowPrometheus from './jsonFile/datasource-winodw-prometheus-test.json'

export default function testGenerator() {
  const [formData, setFormData] = useState({ ip: '', servername: '', assetNum: '' })
  // const selectTemplate = 'window'
  const handleInputChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(formData)
    try {
      const folderReqData = {
        "uid": "",
        "title": formData.ip
      }
      const folderCreateResponse = await axios.post('http://localhost:3000/api/folders', folderReqData);
      const newFolderUid = folderCreateResponse.data.uid
      console.log(newFolderUid)
      const newdataSourceData = { ...datasourceWindowPrometheus, name: `${formData.ip}-window`, url: `${formData.ip}:${datasourceWindowPrometheus.url}` }
      console.log(newdataSourceData)
      const DatasourceCreateResponse = await axios.post('http://localhost:3000/api/datasources/', newdataSourceData)
      console.log(DatasourceCreateResponse)
    } catch (error) {
      console.error('Error createing folder', error);
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>ip 입력:
          <input type="text" name='ip' value={formData.ip} onChange={handleInputChange} />
        </label>
        <br />
        <label>서버명 입력:
          <input type="text" name='servername' value={formData.servername} onChange={handleInputChange} />
        </label>
        <label>자산명 입력:
          <input type="text" name='assetNum' value={formData.assetNum} onChange={handleInputChange} />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

