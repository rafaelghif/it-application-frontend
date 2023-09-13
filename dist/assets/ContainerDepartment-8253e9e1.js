import{Q as j,D as h,r as c,j as e,H as u,L as m,R as f,N as v,_ as y,S,T as g,U as C,V as E,W as R,I as x}from"./index-2e6015fe.js";import{C as _}from"./Card-89e3a3b1.js";import{M as k}from"./Modal-e69a7e9c.js";import{u as b,b as q}from"./useToast-38e41910.js";import{u as A,g as D}from"./department-service-cd71fa07.js";import{u as M}from"./useQuery-126fcc4d.js";const T=()=>{const o=j(),{setLoading:t}=h(),{successToast:i,errorToast:n}=b();return q({mutationFn:r=>A(r),onMutate:()=>{t(!0)},onError:async r=>{t(!1),n(r)},onSuccess:async r=>{i(r),o.invalidateQueries({queryKey:["departments"]})},onSettled:()=>{t(!1)}})},L=({isOpen:o,data:t,onDidDismiss:i})=>{const[n,r]=c.useState({}),{mutate:d}=T(),a=(s,l)=>{r(I=>({...I,[s]:l}))},p=s=>{s.preventDefault(),d(n),i()};return c.useEffect(()=>{r(s=>({...s,id:t==null?void 0:t.id,name:t==null?void 0:t.name,abbreviation:t==null?void 0:t.abbreviation,inActive:t==null?void 0:t.inActive}))},[t]),e.jsx(k,{title:"Update Department",isOpen:o,onDidDismiss:i,children:e.jsxs("form",{onSubmit:p,children:[e.jsx(u,{children:e.jsx(m,{type:"text",label:"Id",labelPlacement:"floating",value:n==null?void 0:n.id,onIonInput:s=>a("id",s.detail.value),required:!0,disabled:!0})}),e.jsx(u,{children:e.jsx(m,{type:"text",label:"Name",labelPlacement:"floating",value:n==null?void 0:n.name,onIonInput:s=>a("name",s.detail.value),required:!0})}),e.jsx(u,{children:e.jsx(m,{type:"text",label:"Abbreviation",labelPlacement:"floating",value:n==null?void 0:n.abbreviation,onIonInput:s=>a("abbreviation",s.detail.value),required:!0})}),e.jsx(u,{children:e.jsx(f,{checked:n==null?void 0:n.inActive,onIonChange:s=>a("inActive",s.detail.checked),children:"InActive"})}),e.jsx(v,{type:"submit",expand:"block",children:"Submit"})]})})},U=()=>{const{setLoading:o}=h(),{errorToast:t}=b();return M({queryKey:["departments"],queryFn:()=>D(),onError:async i=>{t(i),o(!1)},onSettled:async()=>{o(!1)},refetchOnWindowFocus:!1,retry:!1})},F=c.lazy(()=>y(()=>import("./TableDepartment-89eab049.js"),["assets/TableDepartment-89eab049.js","assets/index-2e6015fe.js","assets/index-30953d8c.css","assets/Table-31cc959a.js","assets/date-fns-2338d0ca.js","assets/Card-89e3a3b1.js","assets/useQuery-126fcc4d.js","assets/useToast-38e41910.js","assets/location-service-03175e0c.js","assets/Modal-e69a7e9c.js"])),K=()=>{const{data:o,isLoading:t,refetch:i}=U(),[n,r]=c.useState(),[d,a]=c.useState(!1),p=l=>{r(l),a(!0)},s=async l=>{i(),l.detail.complete()};return e.jsxs(e.Fragment,{children:[e.jsx(S,{slot:"fixed",onIonRefresh:s,children:e.jsx(g,{})}),e.jsx(C,{children:e.jsx(E,{children:e.jsx(R,{children:e.jsx(_,{title:"Data Department",children:t?e.jsx(x,{name:"crescent"}):e.jsx(c.Suspense,{fallback:e.jsx(x,{name:"crescent"}),children:e.jsx(F,{data:o,handleClickBtnEdit:l=>p(l)})})})})})}),e.jsx(L,{data:n,isOpen:d,onDidDismiss:()=>a(!1)})]})};export{K as default};