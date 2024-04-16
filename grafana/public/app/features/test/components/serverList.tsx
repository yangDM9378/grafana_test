import React, {useState, useEffect} from 'react';
import axios from 'axios'

interface ServerListProps {
  selectedRack: number;
  setOpenAddServer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ServerList({ selectedRack, setOpenAddServer }: ServerListProps) {
  const [rackServer, setRackServer] = useState<{ dashboard: any, meta: any }[]>([]);

  useEffect(() => {
    fetchRackServer()
  },[selectedRack])

  const fetchRackServer = async () => {
    try {
      const rackServerRes = await axios.get(`http://127.0.0.1:5000/racks/${selectedRack}/servers`)
      const serversData = [];
      for (const server_uid of rackServerRes.data) {
        const serverDataRes = await axios.get(`http://localhost:3000/api/dashboards/uid/${server_uid}`);
        serversData.push(serverDataRes.data);
      }
      setRackServer(serversData)
    } catch (error) {
      console.log()
    }
  }

  const handleAddServerClick = () => {
    console.log('클릭중?')
    setOpenAddServer(true);
  };

  return (
    <div style={{ position: 'absolute', top: '0', right: '0', width: '200px', height: '200px', border: '3px solid yellow' }}>
      <h1>ServerList</h1>
      <div>{selectedRack}번째 Rack</div>
      {rackServer.map((server:any, idx:number) => (
        <li key={idx}>server id는 {server}</li>
      ))}
      <button onClick={handleAddServerClick}>서버 추가하기</button>
    </div>
  );
}

