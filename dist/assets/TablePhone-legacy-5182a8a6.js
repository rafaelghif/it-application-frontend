System.register(["./index-legacy-4a49ef7b.js","./Table-legacy-0048f9fc.js","./date-fns-legacy-e5d7c49a.js"],(function(e,t){"use strict";var a,r,n,s,l,o;return{setters:[e=>{a=e.r,r=e.j,n=e.aj,s=e.N},e=>{l=e.T},e=>{o=e.f}],execute:function(){e("default",(({data:e=[],handleClickBtnEdit:t})=>{const c=a.useMemo((()=>[{name:"UserName",selector:e=>e.name,sortable:!0,grow:2,wrap:!0},{name:"Ext No.",selector:e=>e.extNo,sortable:!0,wrap:!0},{name:"Speed Dial No",selector:e=>e.speedDialNo,sortable:!0,wrap:!0},{name:"Department",selector:e=>e.Department.abbreviation,sortable:!0,wrap:!0,grow:2},{name:"Status",cell:e=>r.jsx(n,{color:e.inActive?"danger":"success",children:e.inActive?"InActive":"Active"}),sortable:!0},{name:"Update By",selector:e=>e.updatedBy,sortable:!0},{name:"Update At",selector:e=>o(e.updatedAt),sortable:!0,wrap:!0},{name:"Edit",cell:e=>r.jsx(s,{fill:"clear",color:"warning",onClick:()=>{t(e)},children:"Edit"}),center:!0}]),[t]);return r.jsx(l,{columns:c,data:e,responsive:!0,pagination:!0,striped:!0,highlightOnHover:!0})}))}}}));