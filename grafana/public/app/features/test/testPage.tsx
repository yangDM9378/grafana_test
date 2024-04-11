import React from 'react'
// import Test3dFab from './test3dFab'
// import TestAlarm from './testAlarm'
import TestAlertHisory from './testAlertHistory'
import RefactoringAlertHistory from './refactoringTestAlertHistory'
import TestGenerator from './testGenerator'

export default function TestPage() {
  const param = window.location.pathname;
  const child = param.split('/')[2];

  return (
    <div>
      {/* <TestAlarm/>
      <Test3dFab/> */}
      {(child === 'alarmhistory' && (<TestAlertHisory />))}
      {(child === 'refactoringalerthistory' && (<RefactoringAlertHistory />))}
      {(child === 'generator') && <TestGenerator />}
    </div>
  )
}