System.register(["./useToast-legacy-d54321d9.js"],(function(t,a){"use strict";var e,r,c;return{setters:[t=>{e=t.c,r=t.a,c=t.d}],execute:function(){const a="/phone";t("g",(async t=>{try{return(await e(`${a}/?search=${t}`)).data}catch(r){throw r}})),t("c",(async t=>{try{return(await r(`${a}/`,t)).message}catch(e){throw e}})),t("u",(async t=>{try{return(await c(`${a}/`,t)).message}catch(e){throw e}}))}}}));