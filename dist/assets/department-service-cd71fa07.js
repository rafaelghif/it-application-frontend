import{c as s,a as o,d as n}from"./useToast-38e41910.js";const t="/department",p=async()=>{try{return(await s("".concat(t,"/"))).data}catch(r){throw r}},i=async()=>{try{return(await s("".concat(t,"/active"))).data}catch(r){throw r}},m=async r=>{try{return(await o("".concat(t,"/"),r)).message}catch(e){throw e}},h=async r=>{try{return(await n("".concat(t,"/"),r)).message}catch(e){throw e}};export{i as a,m as c,p as g,h as u};