import{D as i,j as r}from"./index-2e6015fe.js";import{C as a}from"./Card-89e3a3b1.js";import{u as l}from"./useQuery-126fcc4d.js";import{c as m,u}from"./useToast-38e41910.js";import{C as c,S as p,I as t}from"./ContainerDetail-1512c851.js";const y="/operating-system",f=async s=>{try{return(await m("".concat(y,"/personalComputerId/").concat(s))).data}catch(e){throw e}},g=s=>{const{setLoading:e}=i(),{errorToast:o}=u();return l({queryKey:["operating-system",{personalComputerId:s}],queryFn:()=>f(s),onError:async n=>{o(n),e(!1)},onSettled:async()=>{e(!1)},refetchOnWindowFocus:!1,retry:!1})},C=({personalComputerId:s})=>{const{data:e}=g(s);return r.jsx(a,{title:"Operating System",headerColor:"light",children:r.jsx(c,{children:r.jsxs(p,{children:[r.jsx(t,{title:"Operating System Name",value:e==null?void 0:e.name}),r.jsx(t,{title:"Build Number",value:e==null?void 0:e.buildNumber}),r.jsx(t,{title:"Version",value:e==null?void 0:e.version}),r.jsx(t,{title:"Serial Number",value:e==null?void 0:e.serialNumber})]})})})};export{C as default};