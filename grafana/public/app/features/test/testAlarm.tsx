import React from 'react'

// const getContent = useCallback(() => {
//   if (loading) {
//     return;
//   }

//   if (!identifier && !canCreateGrafanaRules && !canCreateCloudRules) {
//     return <AlertWarning title="Cannot create rules">Sorry! You are not allowed to create rules.</AlertWarning>;
//   }

//   if (identifier && !canEditRules(identifier.ruleSourceName)) {
//     return <AlertWarning title="Cannot edit rules">Sorry! You are not allowed to edit rules.</AlertWarning>;
//   }

//   if (identifier) {
//     return <ExistingRuleEditor key={id} identifier={identifier} />;
//   }

//   if (copyFromIdentifier) {
//     return <CloneRuleEditor sourceRuleId={copyFromIdentifier} />;
//   }

//   return <AlertRuleForm />;
// }, [canCreateCloudRules, canCreateGrafanaRules, canEditRules, copyFromIdentifier, id, identifier, loading]);


export default function testAlarm() {
  return (
    <div>testAlarm</div>
  )
}
