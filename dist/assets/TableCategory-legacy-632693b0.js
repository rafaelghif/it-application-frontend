System.register(["./index-legacy-4a49ef7b.js","./Table-legacy-0048f9fc.js","./date-fns-legacy-e5d7c49a.js","./Card-legacy-04ea13b8.js","./useQuery-legacy-b83d013a.js","./useToast-legacy-d54321d9.js","./Modal-legacy-cc912185.js"],(function(e,t){"use strict";var a,n,s,r,i,l,o,d,c,u,y,g,m,x,j,h,b,p,v,I,C,f,S,D,w,A;return{setters:[e=>{a=e.D,n=e.Q,s=e.r,r=e.j,i=e.H,l=e.L,o=e.N,d=e.R,c=e._,u=e.S,y=e.T,g=e.U,m=e.V,x=e.W,j=e.I,h=e.aj},e=>{b=e.T},e=>{p=e.f},e=>{v=e.C},e=>{I=e.u},e=>{C=e.c,f=e.a,S=e.d,D=e.u,w=e.b},e=>{A=e.M}],execute:function(){const T="/sub-category",k=e=>{const{setLoading:t}=a(),{errorToast:n}=D();return I({queryKey:["sub-categories",{categoryId:e}],queryFn:()=>(async e=>{try{return(await C(`${T}/categoryId/${e}`)).data}catch(t){throw t}})(e),onError:async e=>{n(e),t(!1)},onSettled:async()=>{t(!1)},refetchOnWindowFocus:!1,retry:!1})},q=e=>{const t=n(),{setLoading:s}=a(),{successToast:r,errorToast:i}=D();return w({mutationFn:e=>(async e=>{try{return(await f(`${T}/`,e)).message}catch(t){throw t}})(e),onMutate:()=>{s(!0)},onError:async e=>{s(!1),i(e)},onSuccess:async a=>{r(a),t.invalidateQueries({queryKey:["sub-categories",{categoryId:e}]})},onSettled:()=>{s(!1)}})},E=({isOpen:e,categoryId:t="",onDidDismiss:a})=>{const[n,d]=s.useState({name:"",CategoryId:t}),{mutate:c}=q(t),u=(e,t)=>{d((a=>({...a,[e]:t})))};return s.useEffect((()=>{d((e=>({...e,CategoryId:t})))}),[t]),r.jsx(A,{title:"Create Sub Category",isOpen:e,onDidDismiss:a,children:r.jsxs("form",{onSubmit:e=>{e.preventDefault(),c(n),d((e=>({...e,name:""}))),a()},children:[r.jsx(i,{children:r.jsx(l,{type:"text",label:"Category Id",labelPlacement:"floating",value:n.CategoryId,onIonInput:e=>u("CategoryId",e.detail.value),disabled:!0,required:!0})}),r.jsx(i,{children:r.jsx(l,{type:"text",label:"Name",labelPlacement:"floating",value:n.name,onIonInput:e=>u("name",e.detail.value),required:!0})}),r.jsx(o,{type:"submit",expand:"block",children:"Submit"})]})})},O=e=>{const t=n(),{setLoading:s}=a(),{successToast:r,errorToast:i}=D();return w({mutationFn:e=>(async e=>{try{return(await S(`${T}/`,e)).message}catch(t){throw t}})(e),onMutate:()=>{s(!0)},onError:async e=>{s(!1),i(e)},onSuccess:async a=>{r(a),t.invalidateQueries({queryKey:["sub-categories",{categoryId:e}]})},onSettled:()=>{s(!1)}})},N=({isOpen:e,data:t,onDidDismiss:a})=>{const[n,c]=s.useState({}),{mutate:u}=O((null==t?void 0:t.CategoryId)||""),y=(e,t)=>{c((a=>({...a,[e]:t})))};return s.useEffect((()=>{c((e=>({...e,id:null==t?void 0:t.id,name:null==t?void 0:t.name,inActive:null==t?void 0:t.inActive,CategoryId:null==t?void 0:t.CategoryId})))}),[t]),r.jsx(A,{title:"Update Sub Category",isOpen:e,onDidDismiss:a,children:r.jsxs("form",{onSubmit:e=>{e.preventDefault(),u(n),a()},children:[r.jsx(i,{children:r.jsx(l,{type:"text",label:"Id",labelPlacement:"floating",value:null==n?void 0:n.id,onIonInput:e=>y("id",e.detail.value),required:!0,disabled:!0})}),r.jsx(i,{children:r.jsx(l,{type:"text",label:"Category Id",labelPlacement:"floating",value:null==n?void 0:n.CategoryId,onIonInput:e=>y("CategoryId",e.detail.value),required:!0,disabled:!0})}),r.jsx(i,{children:r.jsx(l,{type:"text",label:"Name",labelPlacement:"floating",value:null==n?void 0:n.name,onIonInput:e=>y("name",e.detail.value),required:!0})}),r.jsx(i,{children:r.jsx(d,{checked:null==n?void 0:n.inActive,onIonChange:e=>y("inActive",e.detail.checked),children:"InActive"})}),r.jsx(o,{type:"submit",expand:"block",children:"Submit"})]})})},P=s.lazy((()=>c((()=>t.import("./TableSubCategory-legacy-ee705b98.js")),void 0))),F=({data:e})=>{const{data:t,isLoading:a,refetch:n}=k(e.id),[i,l]=s.useState(),[d,c]=s.useState(!1),[h,b]=s.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(u,{slot:"fixed",onIonRefresh:async e=>{n(),e.detail.complete()},children:r.jsx(y,{})}),r.jsx(g,{children:r.jsxs(m,{children:[r.jsx(x,{size:"12",children:r.jsx(o,{fill:"clear",onClick:()=>c(!0),className:"float-right",children:"Create Sub Category"})}),r.jsx(x,{children:r.jsx(v,{title:`Data Category ${e.name}`,headerColor:"light",children:a?r.jsx(j,{name:"crescent"}):r.jsx(s.Suspense,{fallback:r.jsx(j,{name:"crescent"}),children:r.jsx(P,{data:t,handleClickBtnEdit:e=>(e=>{l(e),b(!0)})(e)})})})})]})}),r.jsx(E,{categoryId:e.id,isOpen:d,onDidDismiss:()=>c(!1)}),r.jsx(N,{data:i,isOpen:h,onDidDismiss:()=>b(!1)})]})};e("default",(({data:e=[],handleClickBtnEdit:t})=>{const a=s.useMemo((()=>[{name:"Name",selector:e=>e.name,sortable:!0,grow:2,wrap:!0},{name:"Status",cell:e=>r.jsx(h,{color:e.inActive?"danger":"success",children:e.inActive?"InActive":"Active"}),sortable:!0},{name:"Update By",selector:e=>e.updatedBy,sortable:!0},{name:"Update At",selector:e=>p(e.updatedAt),sortable:!0,wrap:!0},{name:"Edit",cell:e=>r.jsx(o,{fill:"clear",color:"warning",onClick:()=>{t(e)},children:"Edit"}),center:!0}]),[t]);return r.jsx(b,{columns:a,data:e,responsive:!0,pagination:!0,striped:!0,highlightOnHover:!0,expandableRows:!0,expandableRowsComponent:F})}))}}}));