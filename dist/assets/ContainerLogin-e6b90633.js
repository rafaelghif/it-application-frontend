import{C as j,D as I,E as f,F as g,G as y,r as w,j as e,H as u,c as p,J as S,L as m,M as v,N}from"./index-2e6015fe.js";import{a as k,u as D,b as U,s as E}from"./useToast-38e41910.js";const L="/authentication",T=async t=>{try{return await k("".concat(L,"/"),t)}catch(n){throw n}},P=()=>{const t=j(),{setLoading:n}=I(),{errorToast:o,successToast:r}=D(),{setUser:l}=f(),{loginUser:i}=g(),{setDepartment:c}=y();return U({mutationFn:s=>T(s),onMutate:()=>{n(!0)},onError:async s=>{o(s)},onSuccess:async s=>{const{data:a,message:d}=s,{user:x,department:h,token:b}=a;E(b),l(x),c(h),r(d),i()},onSettled:(s,a)=>{n(!1),a===null&&t.replace("/dashboard")}})},F=()=>{const[t,n]=w.useState({badgeId:"",password:""}),{mutate:o}=P(),r=(s,a)=>{n(d=>({...d,[s]:a}))},l=s=>{s.key==="Enter"&&c()},i=s=>{s.preventDefault(),c()},c=()=>{o(t)};return e.jsx("div",{className:"flex items-center justify-center w-screen h-screen",children:e.jsxs("div",{className:"w-11/12 p-5 rounded shadow-lg md:w-1/2 lg:w-1/3 dark:bg-[#181818]",children:[e.jsx("div",{className:"mb-4 text-center",children:e.jsx("span",{className:"text-xl font-bold",children:"IT Application"})}),e.jsx("div",{className:"",children:e.jsxs("form",{onSubmit:i,children:[e.jsxs(u,{children:[e.jsx(p,{icon:S,slot:"start"}),e.jsx(m,{type:"text",label:"Username",labelPlacement:"floating",value:t.badgeId,onIonInput:s=>r("badgeId",s.detail.value)})]}),e.jsxs(u,{children:[e.jsx(p,{icon:v,slot:"start"}),e.jsx(m,{type:"password",label:"Password",labelPlacement:"floating",value:t.password,onIonInput:s=>r("password",s.detail.value),onKeyUp:l})]}),e.jsx(N,{type:"submit",expand:"block",children:"Submit"})]})})]})})};export{F as default};