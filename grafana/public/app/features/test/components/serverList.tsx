import React from 'react';

interface ServerListProps {
  selectedRack: number;
  setOpenAddServer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ServerList({ selectedRack, setOpenAddServer }: ServerListProps) {
  
  const handleAddServerClick = () => {
    console.log('클릭중?')
    setOpenAddServer(true);
  };

  return (
    <div style={{ position: 'absolute', top: '0', right: '0', width: '200px', height: '200px', border: '3px solid yellow' }}>
      <h1>ServerList</h1>
      <div>{selectedRack}번째 Rack</div>

      <button onClick={handleAddServerClick}>서버 추가하기</button>
    </div>
  );
}

