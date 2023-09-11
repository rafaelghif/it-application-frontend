System.register(["./index-legacy-7e6fb237.js","./Card-legacy-3e7c8f1d.js","./useQuery-legacy-d96a72de.js","./useToast-legacy-423e2167.js","./software-service-legacy-b7684cfd.js","./Modal-legacy-c2854f43.js","./date-fns-legacy-e5d7c49a.js"],(function(e,t){"use strict";var n,a,l,i,s,r,o,c,d,u,v,x,j,p,y,h,m,f,D,b,g,S,I,T,k,P;return{setters:[e=>{n=e.D,a=e.Q,l=e.r,i=e.j,s=e.H,r=e.L,o=e.X,c=e.Y,d=e.$,u=e.R,v=e.N,x=e._,j=e.S,p=e.T,y=e.U,h=e.V,m=e.W,f=e.I},e=>{D=e.C},e=>{b=e.u},e=>{g=e.u,S=e.b},e=>{I=e.g,T=e.u},e=>{k=e.M},e=>{P=e.a}],execute:function(){const q=({isOpen:e,data:t,onDidDismiss:x})=>{const[j,p]=l.useState({}),{mutate:y}=(()=>{const e=a(),{setLoading:t}=n(),{successToast:l,errorToast:i}=g();return S({mutationFn:e=>T(e),onMutate:()=>{t(!0)},onError:async e=>{t(!1),i(e)},onSuccess:async t=>{l(t),e.invalidateQueries({queryKey:["softwares"]})},onSettled:()=>{t(!1)}})})(),h=(e,t)=>{p((n=>({...n,[e]:t})))};return l.useEffect((()=>{p((e=>({...e,id:null==t?void 0:t.id,name:null==t?void 0:t.name,version:null==t?void 0:t.version,licenseType:null==t?void 0:t.licenseType,startDate:null==t?void 0:t.startDate,expireDate:null==t?void 0:t.expireDate,remark:null==t?void 0:t.remark,inActive:null==t?void 0:t.inActive})))}),[t]),i.jsx(k,{title:"Update Software",isOpen:e,onDidDismiss:x,children:i.jsxs("form",{onSubmit:e=>{e.preventDefault(),y(j),x()},children:[i.jsx(s,{children:i.jsx(r,{type:"text",label:"Name",labelPlacement:"floating",value:null==j?void 0:j.name,onIonInput:e=>h("name",e.detail.value),required:!0})}),i.jsx(s,{children:i.jsx(r,{type:"text",label:"Version",labelPlacement:"floating",value:null==j?void 0:j.version,onIonInput:e=>h("version",e.detail.value),required:!0})}),i.jsx(s,{children:i.jsxs(o,{label:"License Type",labelPlacement:"floating",value:null==j?void 0:j.licenseType,onIonChange:e=>{return t=e.detail.value,void p((e=>({...e,licenseType:t,startDate:"",expireDate:""})));var t},children:[i.jsx(c,{value:"Subscription",children:"Subscription"}),i.jsx(c,{value:"Perpetual",children:"Perpetual"})]})}),i.jsx(s,{children:i.jsx(r,{type:"date",label:"Start Date / Purchase Date",labelPlacement:"floating",value:null==j?void 0:j.startDate,onIonInput:e=>{return t=e.detail.value,void("Subscription"===j.licenseType?p((e=>({...e,startDate:t,expireDate:P(t,1)}))):p((e=>({...e,startDate:t}))));var t},required:!0})}),i.jsx(s,{hidden:"Perpetual"===(null==j?void 0:j.licenseType),children:i.jsx(r,{type:"date",label:"Expire Date",labelPlacement:"floating",value:null==j?void 0:j.expireDate,onIonInput:e=>h("expireDate",e.detail.value)})}),i.jsx(s,{children:i.jsx(d,{label:"Remark",labelPlacement:"floating",value:null==j?void 0:j.remark,onIonInput:e=>h("remark",e.detail.value),required:!0})}),i.jsx(s,{children:i.jsx(u,{checked:null==j?void 0:j.inActive,onIonChange:e=>h("inActive",e.detail.checked),children:"InActive"})}),i.jsx(v,{type:"submit",expand:"block",children:"Submit"})]})})},w=l.lazy((()=>x((()=>t.import("./TableSoftware-legacy-d397efbf.js")),void 0)));e("default",(()=>{const{data:e,isLoading:t,refetch:a}=(()=>{const{setLoading:e}=n(),{errorToast:t}=g();return b({queryKey:["softwares"],queryFn:()=>I(),onError:async n=>{t(n),e(!1)},onSettled:async()=>{e(!1)},refetchOnWindowFocus:!1,retry:!1})})(),[s,r]=l.useState(),[o,c]=l.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx(j,{slot:"fixed",onIonRefresh:async e=>{a(),e.detail.complete()},children:i.jsx(p,{})}),i.jsx(y,{children:i.jsx(h,{children:i.jsx(m,{children:i.jsx(D,{title:"Data Softwares",children:t?i.jsx(f,{name:"crescent"}):i.jsx(l.Suspense,{fallback:i.jsx(f,{name:"crescent"}),children:i.jsx(w,{data:e,handleClickBtnEdit:e=>(e=>{r(e),c(!0)})(e)})})})})})}),i.jsx(q,{data:s,isOpen:o,onDidDismiss:()=>c(!1)})]})}))}}}));
