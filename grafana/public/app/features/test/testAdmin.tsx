import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import TestAlarm from './testAlarm'
import TestGenerator from './components/testGenerator';
import AlertConfig from './components/alertConfig'

interface Rack {
  id: number;
  rackInfo: string;
  dashboards: string;
}

interface DashboardStatusMap {
  [dashboardUid:string] : boolean;
}

export default function TestAdmin() {
  const [rackData, setRackData] = useState<Rack[]>([])
  const [selectedRack, setSelectedRack] = useState<number>(-1);
  const [openAddServer, setOpenAddServer] = useState<boolean>(false);
  const [openAlertConfig, setOpenAlertConfig] = useState<boolean>(false);
  const [rackServerData, setRackServerData] = useState<{ dashboard: any, meta: any }[]>([]);
  const [selectDashboardUid, setSelectDashboardUid] = useState<string>('')
  const [selectFolderUid, setSelectFolderUid] = useState<string>('')
  const [dashboardStatusMap, setDashboardStatusMap] = useState<DashboardStatusMap>({});
  
  useEffect(() => {
    fetchRackData()
    fetchDashboardStatus();
    // const interval = setInterval(() => {
    //   fetchDashboardStatus();
    // }, 5000);
  
    // return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    fetchRackServer()
    setOpenAddServer(false)
  },[selectedRack])

  const fetchRackData = async () => {
    try {
      const rackRes = await axios.get('http://127.0.0.1:5000/racks');
      setRackData(rackRes.data)
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
    }
  }

  const createRack = async () => {
    try{
      await axios.post('http://127.0.0.1:5000//racks/create',{rackInfo:['1','123']})
      fetchRackData()
    } catch (error) {
      console.error(error)
    }
  } 

  const delRack = async (rackId: number) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/racks/${rackId}/delete`);
      fetchRackData();
    } catch (error) {
      console.error(error);
    }
  };


  const selectRack = (rackId: number) => {
    setSelectedRack(rackId);
  }

  const fetchRackServer = async () => {
    if (selectedRack !== -1) {
      try {
        const rackServerRes = await axios.get(`http://127.0.0.1:5000/racks/${selectedRack}/servers`)
        const serversData = [];
        for (const server_uid of rackServerRes.data) {
          console.log(server_uid.uid)
          const serverDataRes = await axios.get(`http://localhost:3000/api/dashboards/uid/${server_uid.uid}`);
          serversData.push(serverDataRes.data);
        }
        setRackServerData(serversData)
      } catch (error) {
        console.error(error);
      }
    }
  }

  const fetchDashboardStatus = async () => {
    try {
      console.log('통신중')
      const dashboardStatusRes = await axios.get(`http://127.0.0.1:5000/alarm/status`);
      setDashboardStatusMap(dashboardStatusRes.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleAddServerClick = () => {
    setOpenAddServer(true);
  };

  const handleServerClick = (dashboardUid: string, folderUid:string) => {
    setSelectDashboardUid(dashboardUid)
    setSelectFolderUid(folderUid)
    setOpenAlertConfig(true);
    setOpenAddServer(false);
    setSelectedRack(-1);
  }

  return (
    <div>
      <div style={{height: '800px', border: "3px solid #ffffff", position: 'relative' }}>
        <p>Admin Page</p>
        {rackData.map((rack:Rack) => (
          <div key={rack.id}>
            <li onClick={() => selectRack(rack.id)}>{rack.id}번째 랙입니다.</li>
            <button onClick={() => delRack(rack.id)}>rack 삭제</button>
          </div>
        ))}
        <button onClick={createRack}>Rack 생성</button>
        <div style={{ position: 'absolute', top: '0', right: '0', border: '3px solid yellow', display:'flex' }}>
          {openAddServer && <TestGenerator selectedRack={selectedRack} />}
          {selectedRack !== -1 && (
            <div>
              <h1>ServerList</h1>
              <div>{selectedRack}번째 Rack</div>
              {rackServerData.map((rackServer:any, index:number) => (
                <div key={index} style={{border: '3px solid blue'}} onClick={() => handleServerClick(rackServer.dashboard.uid,rackServer.meta.folderUid)}>
                  <div>dashboard uid : {rackServer.dashboard.uid}</div>
                  <div>dashboard title : {rackServer.dashboard.title}</div>
                  <div>folder title : {rackServer.meta.folderTitle}</div>
                  <div>folder uid : {rackServer.meta.folderUid}</div>
                  <div>url :{rackServer.meta.url}</div>
                  {dashboardStatusMap[rackServer.dashboard.uid] === true ? (
                      <div>Alerting</div>
                    ) : (
                      <div>No Alerting</div>
                    )}
                </div>
              )
              )}
              <button onClick={handleAddServerClick}>서버 추가하기</button>
            </div>
          )}
        </div>
        <div style={{ position: 'absolute', top: '0', right: '0', border: '3px solid yellow', display:'flex' }}>
          {openAlertConfig && <AlertConfig selectDashboardUId={selectDashboardUid} selectFolderUid={selectFolderUid}/>}
        </div>
      </div>
      
    </div>
  )
}