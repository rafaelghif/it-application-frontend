import{r as s,j as t,aj as n,N as i}from"./index-2e6015fe.js";import{T as l}from"./Table-31cc959a.js";import{f as u}from"./date-fns-2338d0ca.js";const d=({data:a=[],handleClickBtnEdit:r})=>{const o=s.useMemo(()=>[{name:"Name",selector:e=>e.name,sortable:!0,grow:2,wrap:!0},{name:"Status",cell:e=>t.jsx(n,{color:e.inActive?"danger":"success",children:e.inActive?"InActive":"Active"}),sortable:!0},{name:"Update By",selector:e=>e.updatedBy,sortable:!0},{name:"Update At",selector:e=>u(e.updatedAt),sortable:!0,wrap:!0},{name:"Edit",cell:e=>t.jsx(i,{fill:"clear",color:"warning",onClick:()=>{r(e)},children:"Edit"}),center:!0}],[r]);return t.jsx(l,{columns:o,data:a,responsive:!0,pagination:!0,striped:!0,highlightOnHover:!0})};export{d as default};