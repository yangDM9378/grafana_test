import React from 'react'
import TestAlertHisory from './testAlertHistory'
import RefactoringAlertHistory from './refactoringTestAlertHistory'
import TestAdmin from './testAdmin'

export default function TestPage() {
  const param = window.location.pathname;
  const child = param.split('/')[2];

  return (
    <div>
      {(child === 'alarmhistory' && (<TestAlertHisory />))}
      {(child === 'refactoringalerthistory' && (<RefactoringAlertHistory />))}
      {(child === 'admin' && (<TestAdmin />))}
    </div>
  )
}