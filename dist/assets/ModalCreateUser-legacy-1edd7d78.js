System.register(["./index-legacy-7e6fb237.js","./Modal-legacy-c2854f43.js","./useToast-legacy-423e2167.js","./user-service-legacy-659e98c4.js"],(function(e,a){"use strict";var l,s,n,t,r,i,d,o,c,u,m,p,j,x,b;return{setters:[e=>{l=e.Q,s=e.D,n=e.r,t=e._,r=e.j,i=e.H,d=e.L,o=e.X,c=e.Y,u=e.I,m=e.N},e=>{p=e.M},e=>{j=e.u,x=e.b},e=>{b=e.c}],execute:function(){const v=n.lazy((()=>t((()=>a.import("./SelectDepartment-legacy-3e8e7892.js")),void 0)));e("default",(({isOpen:e,onDidDismiss:a})=>{const[t,I]=n.useState({badgeId:"",password:"",email:"",name:"",role:"Basic",DepartmentId:""}),{mutate:g}=(()=>{const e=l(),{setLoading:a}=s(),{successToast:n,errorToast:t}=j();return x({mutationFn:e=>b(e),onMutate:()=>{a(!0)},onError:async e=>{a(!1),t(e)},onSuccess:async a=>{n(a),e.invalidateQueries({queryKey:["users"]})},onSettled:()=>{a(!1)}})})(),y=(e,a)=>{I((l=>({...l,[e]:a})))};return r.jsx(p,{title:"Create User",isOpen:e,onDidDismiss:a,children:r.jsxs("form",{onSubmit:e=>{e.preventDefault(),g(t),I({badgeId:"",password:"",email:"",name:"",role:"Basic",DepartmentId:""}),a()},children:[r.jsx(i,{children:r.jsx(d,{type:"text",label:"Badge Id",labelPlacement:"floating",value:t.badgeId,onIonInput:e=>y("badgeId",e.detail.value),required:!0})}),r.jsx(i,{children:r.jsx(d,{type:"password",label:"Password",labelPlacement:"floating",value:t.password,onIonInput:e=>y("password",e.detail.value),required:!0})}),r.jsx(i,{children:r.jsx(d,{type:"email",label:"Email",labelPlacement:"floating",value:t.email,onIonInput:e=>y("email",e.detail.value)})}),r.jsx(i,{children:r.jsx(d,{type:"text",label:"Name",labelPlacement:"floating",value:t.name,onIonInput:e=>y("name",e.detail.value),required:!0})}),r.jsx(i,{children:r.jsxs(o,{value:t.role,onIonChange:e=>y("role",e.detail.value),label:"Role",labelPlacement:"stacked",children:[r.jsx(c,{value:"Basic",children:"Basic"}),r.jsx(c,{value:"Admin",children:"Admin"}),r.jsx(c,{value:"Super User",children:"Super User"})]})}),r.jsx(n.Suspense,{fallback:r.jsx(u,{name:"crescent"}),children:r.jsx(v,{value:t.DepartmentId,onChange:e=>y("DepartmentId",e)})}),r.jsx(m,{type:"submit",expand:"block",children:"Submit"})]})})}))}}}));
