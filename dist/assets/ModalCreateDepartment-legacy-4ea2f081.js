System.register(["./index-legacy-4a49ef7b.js","./Modal-legacy-cc912185.js","./useToast-legacy-d54321d9.js","./department-service-legacy-3fbe6868.js"],(function(e,t){"use strict";var n,a,s,i,r,l,o,u,c,d,b;return{setters:[e=>{n=e.Q,a=e.D,s=e.r,i=e.j,r=e.H,l=e.L,o=e.N},e=>{u=e.M},e=>{c=e.u,d=e.b},e=>{b=e.c}],execute:function(){e("default",(({isOpen:e,onDidDismiss:t})=>{const[m,v]=s.useState({name:"",abbreviation:""}),{mutate:y}=(()=>{const e=n(),{setLoading:t}=a(),{successToast:s,errorToast:i}=c();return d({mutationFn:e=>b(e),onMutate:()=>{t(!0)},onError:async e=>{t(!1),i(e)},onSuccess:async t=>{s(t),e.invalidateQueries({queryKey:["departments"]})},onSettled:()=>{t(!1)}})})(),j=(e,t)=>{v((n=>({...n,[e]:t})))};return i.jsx(u,{title:"Create Department",isOpen:e,onDidDismiss:t,children:i.jsxs("form",{onSubmit:e=>{e.preventDefault(),y(m),v({name:"",abbreviation:""}),t()},children:[i.jsx(r,{children:i.jsx(l,{type:"text",label:"Name",labelPlacement:"floating",value:m.name,onIonInput:e=>j("name",e.detail.value),required:!0})}),i.jsx(r,{children:i.jsx(l,{type:"text",label:"Abbreviation",labelPlacement:"floating",value:m.abbreviation,onIonInput:e=>j("abbreviation",e.detail.value),required:!0})}),i.jsx(o,{type:"submit",expand:"block",children:"Submit"})]})})}))}}}));