import{D as o,j as s,H as l,X as c,Y as n}from"./index-2e6015fe.js";import{u as i}from"./useQuery-126fcc4d.js";import{u as m}from"./useToast-38e41910.js";import{a as u}from"./department-service-cd71fa07.js";const p=()=>{const{setLoading:r}=o(),{errorToast:a}=m();return i({queryKey:["active-departments"],queryFn:()=>u(),onError:async e=>{a(e),r(!1)},onSettled:async()=>{r(!1)},refetchOnWindowFocus:!1,retry:!1})},h=({value:r="",onChange:a})=>{const{data:e}=p();return s.jsx(l,{children:s.jsxs(c,{label:"Department",labelPlacement:"floating",value:r,onIonChange:t=>a(t.detail.value),children:[s.jsx(n,{value:"",children:"Select Department"}),e==null?void 0:e.map(t=>s.jsx(n,{value:t.id,children:t.name},"department-".concat(t.id)))]})})};export{h as default};