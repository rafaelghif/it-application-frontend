import{Q as b,D as d,r as x,j as a,H as i,L as l,N as f}from"./index-371e0479.js";import{M as v}from"./Modal-05a5b31d.js";import{u as I,b as j}from"./useToast-7daec343.js";import{c as y}from"./department-service-ba2cf26f.js";const h=()=>{const s=b(),{setLoading:n}=d(),{successToast:r,errorToast:o}=I();return j({mutationFn:e=>y(e),onMutate:()=>{n(!0)},onError:async e=>{n(!1),o(e)},onSuccess:async e=>{r(e),s.invalidateQueries({queryKey:["departments"]})},onSettled:()=>{n(!1)}})},g=({isOpen:s,onDidDismiss:n})=>{const[r,o]=x.useState({name:"",abbreviation:""}),{mutate:e}=h(),u=(t,c)=>{o(p=>({...p,[t]:c}))},m=t=>{t.preventDefault(),e(r),o({name:"",abbreviation:""}),n()};return a.jsx(v,{title:"Create Department",isOpen:s,onDidDismiss:n,children:a.jsxs("form",{onSubmit:m,children:[a.jsx(i,{children:a.jsx(l,{type:"text",label:"Name",labelPlacement:"floating",value:r.name,onIonInput:t=>u("name",t.detail.value),required:!0})}),a.jsx(i,{children:a.jsx(l,{type:"text",label:"Abbreviation",labelPlacement:"floating",value:r.abbreviation,onIonInput:t=>u("abbreviation",t.detail.value),required:!0})}),a.jsx(f,{type:"submit",expand:"block",children:"Submit"})]})})};export{g as default};
