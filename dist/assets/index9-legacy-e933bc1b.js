System.register(["./index-legacy-4a49ef7b.js"],(function(e,t){"use strict";var o,n;return{setters:[e=>{o=e.o,n=e.p}],execute:function(){e("startTapClick",(e=>{let l,u,v,f=10*-d,p=0;const m=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),L=new WeakMap,h=e=>{f=o(e),g(e)},w=()=>{v&&clearTimeout(v),v=void 0,l&&(R(!1),l=void 0)},E=e=>{l||T(t(e),e)},g=e=>{T(void 0,e)},T=(e,t)=>{if(e&&e===l)return;v&&clearTimeout(v),v=void 0;const{x:o,y:i}=n(t);if(l){if(L.has(l))throw new Error("internal error");l.classList.contains(a)||y(l,o,i),R(!0)}if(e){const t=L.get(e);t&&(clearTimeout(t),L.delete(e)),e.classList.remove(a);const n=()=>{y(e,o,i),v=void 0};s(e)?n():v=setTimeout(n,r)}l=e},y=(e,t,o)=>{if(p=Date.now(),e.classList.add(a),!m)return;const n=i(e);null!==n&&(b(),u=n.addRipple(t,o))},b=()=>{void 0!==u&&(u.then((e=>e())),u=void 0)},R=e=>{b();const t=l;if(!t)return;const o=c-Date.now()+p;if(e&&o>0&&!s(t)){const e=setTimeout((()=>{t.classList.remove(a),L.delete(t)}),c);L.set(t,e)}else t.classList.remove(a)},S=document;S.addEventListener("ionGestureCaptured",w),S.addEventListener("touchstart",(e=>{f=o(e),E(e)}),!0),S.addEventListener("touchcancel",h,!0),S.addEventListener("touchend",h,!0),S.addEventListener("pointercancel",w,!0),S.addEventListener("mousedown",(e=>{if(2===e.button)return;const t=o(e)-d;f<t&&E(e)}),!0),S.addEventListener("mouseup",(e=>{const t=o(e)-d;f<t&&g(e)}),!0)}));
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
const t=e=>{if(void 0===e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}}},s=e=>e.classList.contains("ion-activatable-instant"),i=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},a="ion-activated",r=100,c=150,d=2500}}}));