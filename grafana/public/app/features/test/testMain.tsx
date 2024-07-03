import React, { useState } from 'react';
import ServerInfoTable from './components/serverInfoTable';

export default function TestMain() {
  const [selectedServer, _setSelectedServer] = useState<number>(-1);

  return (
    <div>
      <div>PSK / Main Page</div>
      {selectedServer === -1 ? (
        <div>
          <ServerInfoTable />
        </div>
      ) : (
        <div>
          11111
        </div>
      )}
    </div>
  );
}