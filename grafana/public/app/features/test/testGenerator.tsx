import React, { useState } from 'react';
import axios from 'axios'

export default function testGenerator() {
  const [formData, setFormData] = useState({ ip: '', servername: '', assetNum: '' })

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
      console.log(folderCreateResponse)
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

