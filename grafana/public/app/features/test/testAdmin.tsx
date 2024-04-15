import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import TestAlarm from './testAlarm'
import TestGenerator from './testGenerator'
import ServerList from './components/serverList';

interface Rack {
  id: number;
  rackInfo: string;
  dashboards: string;
}

export default function TestAdmin() {
  const [rackData, setRackData] = useState<Rack[]>([])
  const [selectedRack, setSelectedRack] = useState<number>(-1);
  const [openAddServer, setOpenAddServer] = useState<boolean>(false);

  useEffect(() => {
    fetchRackData()
  }, [])

  const fetchRackData = async () => {
    try {
      const rackRes = await axios.get('http://127.0.0.1:5000/racks');
      console.log(rackRes)
      setRackData(rackRes.data)
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
    }
  }

  const createRack = async () => {
    try{
      await axios.post('http://127.0.0.1:5000/createRack',{rackInfo:['1','123']})
      fetchRackData()
    } catch (error) {
      console.error(error)
    }
  } 
  
  const selectRack = (rackId: number) => {
    setSelectedRack(rackId);
  }
  

  return (
    <div>
      <div style={{ width: '60%', height: '800px', border: "3px solid #ffffff", position: 'relative' }}>
        <p>3D Fab</p>
        {rackData.map((rack:Rack) => (
          <li key={rack.id} onClick={() => selectRack(rack.id)}>{rack.id}번째 랙입니다.</li>
        ))}
        <button onClick={createRack}>Rack 생성</button>
        {selectedRack !== -1 && <ServerList selectedRack={selectedRack} setOpenAddServer={setOpenAddServer} />}
        {openAddServer && <TestGenerator selectedRack={selectedRack} />}
      </div>
    </div>
  )
}