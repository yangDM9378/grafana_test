"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6545],{19794:(e,t,s)=>{s.d(t,{Mo:()=>a});var i=s(82897),r=s(88246),n=s(27843);const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const s=e.values;switch(e.type){case n.fS.number:return f(s,t);case n.fS.string:return p(s,t);case n.fS.boolean:return m(s,t);case n.fS.time:return d(s,t);default:return g(t)}},o=(e,t)=>e&&t?(0,i.isNumber)(e)&&(0,i.isNumber)(t)?l(e,t):(0,r.CQ)(e).isBefore(t)?-1:(0,r.CQ)(t).isBefore(e)?1:0:c(e,t),l=(e,t)=>e-t,u=(e,t)=>e&&t?e.localeCompare(t):c(e,t),h=(e,t)=>c(e,t),c=(e,t)=>!e&&t?1:e&&!t?-1:0,d=(e,t)=>(s,i)=>{const r=e.get(s),n=e.get(i);return t?o(n,r):o(r,n)},m=(e,t)=>(s,i)=>{const r=e.get(s),n=e.get(i);return t?h(n,r):h(r,n)},f=(e,t)=>(s,i)=>{const r=e.get(s),n=e.get(i);return t?l(n,r):l(r,n)},p=(e,t)=>(s,i)=>{const r=e.get(s),n=e.get(i);return t?u(n,r):u(r,n)},g=e=>(t,s)=>e?l(s,t):l(t,s)},49594:(e,t,s)=>{s.d(t,{N:()=>l});var i=s(27843),r=s(31919);const n={id:r.mi.byType,name:"Field Type",description:"match based on the field type",defaultOptions:i.fS.number,get:e=>(t,s,i)=>e===t.type,getOptionsDisplayText:e=>`Field type: ${e}`},a={id:r.mi.numeric,name:"Numeric Fields",description:"Fields with type number",get:()=>n.get(i.fS.number),getOptionsDisplayText:()=>"Numeric Fields"},o={id:r.mi.time,name:"Time Fields",description:"Fields with type time",get:()=>n.get(i.fS.time),getOptionsDisplayText:()=>"Time Fields"};function l(){return[n,a,o]}},31919:(e,t,s)=>{let i,r,n,a;s.d(t,{E4:()=>n,Ff:()=>i,mE:()=>a,mi:()=>r}),function(e){e.anyMatch="anyMatch",e.allMatch="allMatch",e.invertMatch="invertMatch",e.alwaysMatch="alwaysMatch",e.neverMatch="neverMatch"}(i||(i={})),function(e){e.numeric="numeric",e.time="time",e.first="first",e.firstTimeField="firstTimeField",e.byType="byType",e.byName="byName",e.byNames="byNames",e.byRegexp="byRegexp",e.byRegexpOrNames="byRegexpOrNames",e.byFrameRefID="byFrameRefID"}(r||(r={})),function(e){e.byName="byName",e.byRefId="byRefId",e.byIndex="byIndex",e.byLabel="byLabel"}(n||(n={})),function(e){e.regex="regex",e.isNull="isNull",e.isNotNull="isNotNull",e.greater="greater",e.greaterOrEqual="greaterOrEqual",e.lower="lower",e.lowerOrEqual="lowerOrEqual",e.equal="equal",e.notEqual="notEqual",e.between="between"}(a||(a={}))},90484:(e,t,s)=>{s.d(t,{n:()=>n});var i=s(56949);const r={id:s(31919).E4.byRefId,name:"Query refId",description:"match the refId",defaultOptions:"A",get:e=>{const t=(0,i.jO)(e);return e=>t.test(e.refId||"")},getOptionsDisplayText:e=>`RefID: ${e}`};function n(){return[r]}},61382:(e,t,s)=>{s.d(t,{z:()=>o});var i=s(27843),r=s(31919);const n={id:r.mi.first,name:"First Field",description:"The first field in the frame",get:e=>(e,t,s)=>e===t.fields[0],getOptionsDisplayText:()=>"First field"},a={id:r.mi.firstTimeField,name:"First time field",description:"The first field of type time in a frame",get:e=>(e,t,s)=>e.type===i.fS.time&&e===t.fields.find((e=>e.type===i.fS.time)),getOptionsDisplayText:()=>"First time field"};function o(){return[n,a]}},71114:(e,t,s)=>{s.d(t,{T:()=>a});var i=s(31919);const r={id:i.mE.equal,name:"Is equal",description:"Match where value for given field is equal to options value.",get:e=>(t,s)=>s.values.get(t)==e.value,getOptionsDisplayText:()=>"Matches all rows where field is null.",isApplicable:()=>!0,getDefaultOptions:()=>({value:""})},n={id:i.mE.notEqual,name:"Is not equal",description:"Match where value for given field is not equal to options value.",get:e=>(t,s)=>s.values.get(t)!=e.value,getOptionsDisplayText:()=>"Matches all rows where field is not null.",isApplicable:()=>!0,getDefaultOptions:()=>({value:""})},a=()=>[r,n]},95691:(e,t,s)=>{s.d(t,{a:()=>a});var i=s(31919);const r={id:i.mE.isNull,name:"Is null",description:"Match where value for given field is null.",get:()=>(e,t)=>null==t.values.get(e),getOptionsDisplayText:()=>"Matches all rows where field is null.",isApplicable:()=>!0,getDefaultOptions:()=>({})},n={id:i.mE.isNotNull,name:"Is not null",description:"Match where value for given field is not null.",get:()=>(e,t)=>null!=t.values.get(e),getOptionsDisplayText:()=>"Matches all rows where field is not null.",isApplicable:()=>!0,getDefaultOptions:()=>({})},a=()=>[r,n]},61574:(e,t,s)=>{s.d(t,{H:()=>u});var i=s(27843),r=s(31919);const n={id:r.mE.greater,name:"Is greater",description:"Match when field value is greater than option.",get:e=>(t,s)=>{const i=s.values.get(t);return!isNaN(i)&&i>e.value},getOptionsDisplayText:e=>`Matches all rows where field value is greater than: ${e.value}.`,isApplicable:e=>e.type===i.fS.number,getDefaultOptions:()=>({value:0})},a={id:r.mE.greaterOrEqual,name:"Is greater or equal",description:"Match when field value is greater than or equal to option.",get:e=>(t,s)=>{const i=s.values.get(t);return!isNaN(i)&&i>=e.value},getOptionsDisplayText:e=>`Matches all rows where field value is greater than or equal to: ${e.value}.`,isApplicable:e=>e.type===i.fS.number,getDefaultOptions:()=>({value:0})},o={id:r.mE.lower,name:"Is lower",description:"Match when field value is lower than option.",get:e=>(t,s)=>{const i=s.values.get(t);return!isNaN(i)&&i<e.value},getOptionsDisplayText:e=>`Matches all rows where field value is lower than: ${e.value}.`,isApplicable:e=>e.type===i.fS.number,getDefaultOptions:()=>({value:0})},l={id:r.mE.lowerOrEqual,name:"Is lower or equal",description:"Match when field value is lower or equal than option.",get:e=>(t,s)=>{const i=s.values.get(t);return!isNaN(i)&&i<=e.value},getOptionsDisplayText:e=>`Matches all rows where field value is lower or equal than: ${e.value}.`,isApplicable:e=>e.type===i.fS.number,getDefaultOptions:()=>({value:0})},u=()=>[n,a,o,l]},6318:(e,t,s)=>{s.d(t,{G:()=>n});var i=s(27843);const r={id:s(31919).mE.between,name:"Is between",description:"Match when field value is between given option values.",get:e=>(t,s)=>{const i=s.values.get(t);return!isNaN(i)&&(i>e.from&&i<e.to)},getOptionsDisplayText:e=>`Matches all rows where field value is between ${e.from} and ${e.to}.`,isApplicable:e=>e.type===i.fS.number,getDefaultOptions:()=>({from:0,to:100})},n=()=>[r]},24758:(e,t,s)=>{s.d(t,{G:()=>r});const i={id:s(31919).mE.regex,name:"Regex",description:"Match when field value is matching regex.",get:e=>{const t=new RegExp(e.value);return(e,s)=>{const i=s.values.get(e);return t.test(i)}},getOptionsDisplayText:e=>`Matches all rows where field value is matching regex: ${e.value}`,isApplicable:()=>!0,getDefaultOptions:()=>({value:".*"})},r=()=>[i]},20410:(e,t,s)=>{let i;s.d(t,{W:()=>i}),function(e){e.append="append",e.reduce="reduce",e.order="order",e.organize="organize",e.rename="rename",e.calculateField="calculateField",e.seriesToColumns="seriesToColumns",e.seriesToRows="seriesToRows",e.merge="merge",e.concatenate="concatenate",e.labelsToFields="labelsToFields",e.filterFields="filterFields",e.filterFieldsByName="filterFieldsByName",e.filterFrames="filterFrames",e.filterByRefId="filterByRefId",e.renameByRegex="renameByRegex",e.filterByValue="filterByValue",e.noop="noop",e.ensureColumns="ensureColumns",e.groupBy="groupBy",e.sortBy="sortBy",e.histogram="histogram",e.configFromData="configFromData",e.rowsToFields="rowsToFields",e.prepareTimeSeries="prepareTimeSeries",e.convertFieldType="convertFieldType",e.fieldLookup="fieldLookup",e.heatmap="heatmap",e.spatial="spatial",e.joinByField="joinByField",e.joinByLabels="joinByLabels",e.extractFields="extractFields",e.groupingToMatrix="groupingToMatrix",e.limit="limit",e.partitionByValues="partitionByValues"}(i||(i={}))},2238:(e,t,s)=>{s.d(t,{B:()=>n});var i=s(15546);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class n{constructor(e){r(this,"ordered",[]),r(this,"byId",new Map),r(this,"initialized",!1),r(this,"setInit",(e=>{if(this.initialized)throw new Error("Registry already initialized");this.init=e})),this.init=e,this.init=e}getIfExists(e){if(this.initialized||this.initialize(),e)return this.byId.get(e)}initialize(){if(this.init)for(const e of this.init())this.register(e);this.sort(),this.initialized=!0}get(e){const t=this.getIfExists(e);if(!t)throw new Error(`"${e}" not found in: ${this.list().map((e=>e.id))}`);return t}selectOptions(e,t){this.initialized||this.initialize();const s={options:[],current:[]},r={};if(e)for(const t of e)r[t]={};for(const e of this.ordered){if(e.excludeFromPicker)continue;if(t&&!t(e))continue;const n={value:e.id,label:e.name,description:e.description};e.state===i.BV.alpha&&(n.label+=" (alpha)"),s.options.push(n),r[e.id]&&(r[e.id]=n)}return e&&(s.current=Object.values(r)),s}list(e){if(this.initialized||this.initialize(),e){const t=[];for(const s of e){const e=this.getIfExists(s);e&&t.push(e)}return t}return this.ordered}isEmpty(){return this.initialized||this.initialize(),0===this.ordered.length}register(e){if(this.byId.has(e.id))throw new Error("Duplicate Key:"+e.id);if(this.byId.set(e.id,e),this.ordered.push(e),e.aliasIds)for(const t of e.aliasIds)this.byId.has(t)||this.byId.set(t,e);this.initialized&&this.sort()}sort(){}}},94582:(e,t,s)=>{s.d(t,{G:()=>r});var i=s(7716);class r extends i.G{constructor(e){var t,s,i;super(),i=void 0,(s="buffer")in(t=this)?Object.defineProperty(t,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[s]=i,this.buffer=e||[]}get length(){return this.buffer.length}add(e){this.buffer.push(e)}get(e){return this.buffer[e]}set(e,t){this.buffer[e]=t}reverse(){this.buffer.reverse()}toArray(){return this.buffer}toJSON(){return this.buffer}}},21131:(e,t,s)=>{s.d(t,{o:()=>r});var i=s(83126);class r{constructor(e,t){this.source=e,this.order=t}get length(){return this.source.length}get(e){return this.source.get(this.order[e])}toArray(){return(0,i.n)(this)}toJSON(){return(0,i.n)(this)}getOrderArray(){return this.order}}},83126:(e,t,s)=>{function i(e){const t=Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.get(s);return t}s.d(t,{n:()=>i})},75386:(e,t,s)=>{function i(e){const t=e||{};if(!t.message){var s,i,r;if("string"==typeof e||e instanceof String)return{message:e};let n="Query error";t.message?n=t.message:t.data&&t.data.message&&"Query data error"!==(null===(s=t.data)||void 0===s?void 0:s.message)?n=t.data.message:"Query data error"===(null==t||null===(i=t.data)||void 0===i?void 0:i.message)&&null!=t&&null!==(r=t.data)&&void 0!==r&&r.error||t.data&&t.data.error?n=t.data.error:t.status&&(n=`Query error: ${t.status} ${t.statusText}`),t.message=n}return t}s.d(t,{P:()=>i})},65100:(e,t,s)=>{s.d(t,{R:()=>F});var i=s(91499),r=s(44962),n=s(9489),a=s(63479),o=s(22543),l=s(98251),u=s(46060),h=s(16527),c=s(2101),d=s(28173),m=s(75386),f=s(36551),p=s(88113);function g(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var b;!function(e){e[e.Error=0]="Error",e[e.NewValuesSameSchema=1]="NewValuesSameSchema",e[e.ChangedSchema=2]="ChangedSchema"}(b||(b={}));const v=(e,t)=>e.filter((e=>e.type===t));class y{constructor(e){g(this,"frameBuffer",void 0),g(this,"liveEventsSubscription",void 0),g(this,"stream",new h.t(1)),g(this,"shutdownTimeoutId",void 0),g(this,"shutdown",(()=>{this.stream.complete(),this.liveEventsSubscription.unsubscribe(),this.deps.onShutdown()})),g(this,"shutdownIfNoSubscribers",(()=>{this.stream.observed||this.shutdown()})),g(this,"onError",(e=>{console.log("LiveQuery [error]",{err:e},this.deps.channelId),this.stream.next({type:b.Error,error:(0,m.P)(e)}),this.shutdown()})),g(this,"onComplete",(()=>{console.log("LiveQuery [complete]",this.deps.channelId),this.shutdown()})),g(this,"onNext",(e=>{if((0,o.RL)(e))return void this.process(e.message);const t=(0,o.se)(e);t&&e.error?this.stream.next({type:b.Error,error:Object.assign({},(0,m.P)(e.error),{message:`Streaming channel error: ${e.error.message}`})}):t&&(e.state===o.yS.Connected||e.state===o.yS.Pending)&&e.message&&this.process(e.message)})),g(this,"process",(e=>{this.frameBuffer.push(e).schemaChanged?this.stream.next({type:b.ChangedSchema}):this.stream.next({type:b.NewValuesSameSchema,values:this.frameBuffer.getValuesFromLastPacket()})})),g(this,"resizeBuffer",(e=>{e&&this.frameBuffer.needsResizing(e)&&this.frameBuffer.resize(e)})),g(this,"prepareInternalStreamForNewSubscription",(e=>{!this.frameBuffer.hasAtLeastOnePacket()&&e.frame&&this.process(e.frame)})),g(this,"clearShutdownTimeout",(()=>{this.shutdownTimeoutId&&(clearTimeout(this.shutdownTimeoutId),this.shutdownTimeoutId=void 0)})),g(this,"get",((e,t)=>{var s,i;this.clearShutdownTimeout();const r=(0,f._A)(e.buffer);this.resizeBuffer(r),this.prepareInternalStreamForNewSubscription(e);const n=(null==e||null===(s=e.buffer)||void 0===s?void 0:s.action)===l.T0.Replace,a=null===(i=e.filter)||void 0===i?void 0:i.fields,o=(null==a?void 0:a.length)?e=>{let{name:t}=e;return a.includes(t)}:void 0;let h;const m=(e,s)=>(h=o?this.frameBuffer.getMatchingFieldIndexes(o):void 0,n?s?{key:t,state:d.Gu.Error,data:[{type:p.g0.FullFrame,frame:this.frameBuffer.serialize(o,r,{maxLength:0})}],error:s}:e.length?{key:t,state:d.Gu.Streaming,data:[{type:p.g0.FullFrame,frame:this.frameBuffer.serialize(o,r,{maxLength:this.frameBuffer.packetInfo.length})}],error:s}:(console.warn(`expected to find at least one non error message ${e.map((e=>{let{type:t}=e;return t}))}`),{key:t,state:d.Gu.Streaming,data:[{type:p.g0.FullFrame,frame:this.frameBuffer.serialize(o,r,{maxLength:0})}],error:s}):{key:t,state:s?d.Gu.Error:d.Gu.Streaming,data:[{type:p.g0.FullFrame,frame:this.frameBuffer.serialize(o,r)}],error:s}),g=e=>{const s=e.length?e[e.length-1]:void 0,i=n&&s?s.values:(r=e,{values:r.reduce(((e,t)=>{let{values:s}=t;for(let t=0;t<s.length;t++){e[t]||(e[t]=[]);for(let i=0;i<s[t].length;i++)e[t].push(s[t][i])}return e}),[]),type:b.NewValuesSameSchema}).values;var r;const a=h?i.filter(((e,t)=>h.includes(t))):i;return{key:t,state:d.Gu.Streaming,data:[{type:p.g0.NewValuesSameSchema,values:a}]}};let y=!0;const S=this.stream.pipe((w=this.deps.subscriberReadiness,e=>new u.y((t=>{let s=[],i=!0;const r=()=>{t.next(s),s=[]},n=w.subscribe({next:e=>{i=e,i&&s.length&&r()}}),a=e.subscribe({next(e){i?s.length?r():t.next([e]):s.push(e)},error(e){t.error(e)},complete(){t.complete()}});return()=>{a.unsubscribe(),n.unsubscribe()}}))),(0,c.U)(((e,t)=>{const s=v(e,b.Error),i=s.length?s[s.length-1].error:void 0;if(y)return y=!1,m(e,i);if(s.length)return m(e,i);if(e.some((e=>e.type===b.ChangedSchema)))return m(e,void 0);const r=v(e,b.NewValuesSameSchema);return r.length!==e.length&&console.warn(`unsupported message type ${e.map((e=>{let{type:t}=e;return t}))}`),g(r)})));var w;return new u.y((e=>{const t=S.subscribe({next:t=>{e.next(t)},error:t=>{e.error(t)},complete:()=>{e.complete()}});return()=>{t.unsubscribe(),this.stream.observed||(this.clearShutdownTimeout(),this.shutdownTimeoutId=setTimeout(this.shutdownIfNoSubscribers,this.deps.shutdownDelayInMs))}}))})),this.deps=e,this.frameBuffer=f.Av.empty(e.defaultStreamingFrameOptions),this.liveEventsSubscription=e.liveEventsObservable.subscribe({error:this.onError,complete:this.onComplete,next:this.onNext})}}var S=s(96209);function w(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class x{constructor(e,t){w(this,"currentStatus",void 0),w(this,"opened",Date.now()),w(this,"id",void 0),w(this,"addr",void 0),w(this,"stream",new S.x),w(this,"lastMessageWithSchema",void 0),w(this,"subscription",void 0),w(this,"shutdownCallback",void 0),w(this,"initalized",void 0),w(this,"disconnectIfNoListeners",(()=>{0===this.stream.observers.length&&this.disconnect()})),this.id=e,this.addr=t,this.currentStatus={type:o.FU.Status,id:e,timestamp:this.opened,state:o.yS.Pending},(0,o.nU)(t)||(this.currentStatus.state=o.yS.Invalid,this.currentStatus.error="invalid channel address")}initalize(){if(this.initalized)throw new Error("Channel already initalized: "+this.id);this.initalized=!0,this.subscription.on("publication",(e=>{try{e.data&&(e.data.schema&&(this.lastMessageWithSchema=e.data),this.stream.next({type:o.FU.Message,message:e.data})),this.currentStatus.error&&(this.currentStatus.timestamp=Date.now(),delete this.currentStatus.error,this.sendStatus())}catch(e){console.log("publish error",this.addr,e),this.currentStatus.error=e,this.currentStatus.timestamp=Date.now(),this.sendStatus()}})).on("error",(e=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.error=e.error.message,this.sendStatus()})).on("subscribed",(e=>{var t;this.currentStatus.timestamp=Date.now(),this.currentStatus.state=o.yS.Connected,delete this.currentStatus.error,null!==(t=e.data)&&void 0!==t&&t.schema&&(this.lastMessageWithSchema=e.data),this.sendStatus(e.data)})).on("unsubscribed",(()=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.state=o.yS.Disconnected,this.sendStatus()})).on("subscribing",(()=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.state=o.yS.Connecting,this.sendStatus()})).on("join",(e=>{this.stream.next({type:o.FU.Join,user:e.info.user})})).on("leave",(e=>{this.stream.next({type:o.FU.Leave,user:e.info.user})}))}sendStatus(e){const t=Object.assign({},this.currentStatus);e&&(t.message=e),this.stream.next(t)}getStream(){return new u.y((e=>{var t;const s=Object.assign({},this.currentStatus);var i;null!==(t=this.lastMessageWithSchema)&&void 0!==t&&t.schema&&(s.message={schema:null===(i=this.lastMessageWithSchema)||void 0===i?void 0:i.schema});e.next(Object.assign({},this.currentStatus,{message:this.lastMessageWithSchema}));const r=this.stream.subscribe(e);return()=>{r.unsubscribe();0===this.stream.observers.length&&setTimeout(this.disconnectIfNoListeners,250)}}))}async getPresence(){return this.subscription?this.subscription.presence().then((e=>({users:Object.keys(e.clients)}))):Promise.reject("not subscribed")}disconnect(){this.currentStatus.state=o.yS.Shutdown,this.currentStatus.timestamp=Date.now(),this.subscription&&(this.subscription.unsubscribe(),this.subscription.removeAllListeners(),this.subscription=void 0),this.stream.complete(),this.stream.next(Object.assign({},this.currentStatus)),this.stream.complete(),this.shutdownCallback&&this.shutdownCallback()}shutdownWithError(e){this.currentStatus.error=e,this.sendStatus(),this.disconnect()}}function I(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const O={maxLength:100,maxDelta:1/0,action:l.T0.Append};class F{constructor(e){I(this,"open",new Map),I(this,"liveDataStreamByChannelId",{}),I(this,"centrifuge",void 0),I(this,"connectionState",void 0),I(this,"connectionBlocker",void 0),I(this,"dataStreamSubscriberReadiness",void 0),I(this,"onConnect",(e=>{this.connectionState.next(!0)})),I(this,"onDisconnect",(e=>{this.connectionState.next(!1)})),I(this,"onServerSideMessage",(e=>{console.log("Publication from server-side channel",e)})),I(this,"getConnectionState",(()=>this.connectionState.asObservable())),I(this,"getStream",(e=>this.getChannel(e).getStream())),I(this,"createSubscriptionKey",(e=>{var t;return null!==(t=e.key)&&void 0!==t?t:"xstr/"+T++})),I(this,"getLiveDataStream",(e=>{const t=(0,o.Aj)(e.addr),s=this.liveDataStreamByChannelId[t];if(s)return s;const i=this.getChannel(e.addr);return this.liveDataStreamByChannelId[t]=new y({channelId:t,onShutdown:()=>{delete this.liveDataStreamByChannelId[t]},liveEventsObservable:i.getStream(),subscriberReadiness:this.dataStreamSubscriberReadiness,defaultStreamingFrameOptions:O,shutdownDelayInMs:5e3}),this.liveDataStreamByChannelId[t]})),I(this,"getDataStream",(e=>{const t=this.createSubscriptionKey(e);return this.getLiveDataStream(e).get(e,t)})),I(this,"getQueryData",(async e=>(this.centrifuge.state!==i.State.Connected&&await this.connectionBlocker,this.centrifuge.rpc("grafana.query",e.body)))),I(this,"getPresence",(e=>this.getChannel(e).getPresence())),this.deps=e,this.dataStreamSubscriberReadiness=e.dataStreamSubscriberReadiness.pipe((0,r.B)(),(0,n.O)(!0));let t=`${e.appUrl.replace(/^http/,"ws")}/api/live/ws`;const s=e.grafanaAuthToken;null!==s&&""!==s&&(t+="?auth_token="+s),this.centrifuge=new i.Centrifuge(t,{timeout:3e4}),e.liveEnabled&&""!==e.orgRole&&this.centrifuge.connect(),this.connectionState=new a.X(this.centrifuge.state===i.State.Connected),this.connectionBlocker=new Promise((e=>{if(this.centrifuge.state===i.State.Connected)return e();const t=()=>{e(),this.centrifuge.removeListener("connected",t)};this.centrifuge.addListener("connected",t)})),this.centrifuge.on("connected",this.onConnect),this.centrifuge.on("connecting",this.onDisconnect),this.centrifuge.on("disconnected",this.onDisconnect),this.centrifuge.on("publication",this.onServerSideMessage)}getChannel(e){const t=`${this.deps.orgId}/${e.scope}/${e.namespace}/${e.path}`;let s=this.open.get(t);return null!=s?s:(s=new x(t,e),s.currentStatus.state===o.yS.Invalid||(s.shutdownCallback=()=>{this.open.delete(t),this.centrifuge.removeSubscription(this.centrifuge.getSubscription(t))},this.open.set(t,s),this.initChannel(s).catch((e=>{s&&(s.currentStatus.state=o.yS.Invalid,s.shutdownWithError(e)),this.open.delete(t)}))),s)}async initChannel(e){this.centrifuge.state!==i.State.Connected&&await this.connectionBlocker;const t=this.centrifuge.newSubscription(e.id,{data:e.addr.data});e.subscription=t,e.initalize(),t.subscribe()}}let T=0},58936:(e,t,s)=>{var i=s(79702),r=s(97709);const n={canHandle:e=>e&&e instanceof r.Lv,serialize(e){const t=i.sj(e),{port1:s,port2:r}=new MessageChannel;return i.Jj(t,s),[r,[r]]},deserialize:e=>(e.start(),i.Ud(e))};i.Y6.set("SubscriberHandler",n)},30012:(e,t,s)=>{function i(e,t){return e.replace(/\{\{\s*(.+?)\s*\}\}/g,((e,s)=>t[s]?t[s]:s))}s.d(t,{W:()=>i})}}]);
//# sourceMappingURL=6545.f9aa4039f5d79d9fa18b.js.map