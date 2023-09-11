System.register([],(function(e,t){"use strict";return{execute:function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){a(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===t(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}var i={};function o(){return i}function u(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function s(e){a(1,arguments);var t=r(e);return t.setHours(0,0,0,0),t}var d=864e5;function l(e,t){return a(2,arguments),function(e,t){a(2,arguments);var i=r(e),o=n(t);if(isNaN(o))return new Date(NaN);if(!o)return i;var u=i.getDate(),s=new Date(i.getTime());return s.setMonth(i.getMonth()+o+1,0),u>=s.getDate()?s:(i.setFullYear(s.getFullYear(),s.getMonth(),u),i)}(e,12*n(t))}var c=6e4,m=36e5;function h(e){if(a(1,arguments),!function(e){return a(1,arguments),e instanceof Date||"object"===t(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var n=r(e);return!isNaN(Number(n))}function f(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function g(e,t){a(2,arguments);var n=r(e),i=r(t),o=f(n,i),l=Math.abs(function(e,t){a(2,arguments);var n=s(e),r=s(t),i=n.getTime()-u(n),o=r.getTime()-u(r);return Math.round((i-o)/d)}(n,i));n.setDate(n.getDate()-o*l);var c=o*(l-Number(f(n,i)===-o));return 0===c?0:c}function v(e,t){return a(2,arguments),function(e,t){a(2,arguments);var i=r(e).getTime(),o=n(t);return new Date(i+o)}(e,-n(t))}function w(e){a(1,arguments);var t=r(e),n=t.getUTCDay(),i=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-i),t.setUTCHours(0,0,0,0),t}function b(e){a(1,arguments);var t=r(e),n=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var o=w(i),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var s=w(u);return t.getTime()>=o.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function y(e){a(1,arguments);var t=r(e),n=w(t).getTime()-function(e){a(1,arguments);var t=b(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),w(n)}(t).getTime();return Math.round(n/6048e5)+1}function p(e,t){var i,u,s,d,l,c,m,h;a(1,arguments);var f=o(),g=n(null!==(i=null!==(u=null!==(s=null!==(d=null==t?void 0:t.weekStartsOn)&&void 0!==d?d:null==t||null===(l=t.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==s?s:f.weekStartsOn)&&void 0!==u?u:null===(m=f.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==i?i:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=r(e),w=v.getUTCDay(),b=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-b),v.setUTCHours(0,0,0,0),v}function M(e,t){var i,u,s,d,l,c,m,h;a(1,arguments);var f=r(e),g=f.getUTCFullYear(),v=o(),w=n(null!==(i=null!==(u=null!==(s=null!==(d=null==t?void 0:t.firstWeekContainsDate)&&void 0!==d?d:null==t||null===(l=t.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==s?s:v.firstWeekContainsDate)&&void 0!==u?u:null===(m=v.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==i?i:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(g+1,0,w),b.setUTCHours(0,0,0,0);var y=p(b,t),M=new Date(0);M.setUTCFullYear(g,0,w),M.setUTCHours(0,0,0,0);var T=p(M,t);return f.getTime()>=y.getTime()?g+1:f.getTime()>=T.getTime()?g:g-1}function T(e,t){a(1,arguments);var i=r(e),u=p(i,t).getTime()-function(e,t){var r,i,u,s,d,l,c,m;a(1,arguments);var h=o(),f=n(null!==(r=null!==(i=null!==(u=null!==(s=null==t?void 0:t.firstWeekContainsDate)&&void 0!==s?s:null==t||null===(d=t.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==u?u:h.firstWeekContainsDate)&&void 0!==i?i:null===(c=h.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==r?r:1),g=M(e,t),v=new Date(0);return v.setUTCFullYear(g,0,f),v.setUTCHours(0,0,0,0),p(v,t)}(i,t).getTime();return Math.round(u/6048e5)+1}function k(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}const D={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return k("yy"===t?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):k(n+1,2)},d:function(e,t){return k(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return k(e.getUTCHours()%12||12,t.length)},H:function(e,t){return k(e.getUTCHours(),t.length)},m:function(e,t){return k(e.getUTCMinutes(),t.length)},s:function(e,t){return k(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds();return k(Math.floor(a*Math.pow(10,n-3)),t.length)}};var C="midnight",S="noon",P="morning",N="afternoon",W="evening",U="night",x={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return D.y(e,t)},Y:function(e,t,n,a){var r=M(e,a),i=r>0?r:1-r;return"YY"===t?k(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):k(i,t.length)},R:function(e,t){return k(b(e),t.length)},u:function(e,t){return k(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return k(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return k(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return D.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return k(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var r=T(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):k(r,t.length)},I:function(e,t,n){var a=y(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):k(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):D.d(e,t)},D:function(e,t,n){var i=function(e){a(1,arguments);var t=r(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=n-t.getTime();return Math.floor(i/864e5)+1}(e);return"Do"===t?n.ordinalNumber(i,{unit:"dayOfYear"}):k(i,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return k(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return k(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return k(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?S:0===r?C:r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?W:r>=12?N:r>=4?P:U,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return D.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):D.H(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):k(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):k(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):D.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):D.s(e,t)},S:function(e,t){return D.S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return j(r);case"XXXX":case"XX":return H(r);default:return H(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return j(r);case"xxxx":case"xx":return H(r);default:return H(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Y(r,":");default:return"GMT"+H(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Y(r,":");default:return"GMT"+H(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return k(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return k((a._originalDate||e).getTime(),t.length)}};function Y(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=t||"";return n+String(r)+o+k(i,2)}function j(e,t){return e%60==0?(e>0?"-":"+")+k(Math.abs(e)/60,2):H(e,t)}function H(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+k(Math.floor(r/60),2)+n+k(r%60,2)}const E=x;var O=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},F=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},q={p:F,P:function(e,t){var n,a=e.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return O(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",O(r,t)).replace("{{time}}",F(i,t))}};const A=q;var z=["D","DD"],X=["YY","YYYY"];function J(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var L={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const R=function(e,t,n){var a,r=L[e];return a="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function K(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var Q={date:K({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:K({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:K({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},G={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function B(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=null!=n&&n.width?String(n.width):r;a=e.formattingValues[i]||e.formattingValues[r]}else{var o=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[u]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function I(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;var o,u=i[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(s,(function(e){return e.test(u)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(s,(function(e){return e.test(u)}));return o=e.valueCallback?e.valueCallback(d):d,{value:o=n.valueCallback?n.valueCallback(o):o,rest:t.slice(u.length)}}}function Z(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.match(e.matchPattern);if(!a)return null;var r=a[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:o=n.valueCallback?n.valueCallback(o):o,rest:t.slice(r.length)}}}const $={code:"en-US",formatDistance:R,formatLong:Q,formatRelative:function(e,t,n,a){return G[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:B({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:B({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:B({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:B({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:B({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Z({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:I({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:I({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:I({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:I({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:I({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var _=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ee=/^'([^]*?)'?$/,te=/''/g,ne=/[a-zA-Z]/;function ae(e,t,i){var s,d,l,c,m,f,g,w,b,y,p,M,T,k,D,C,S,P;a(2,arguments);var N=String(t),W=o(),U=null!==(s=null!==(d=null==i?void 0:i.locale)&&void 0!==d?d:W.locale)&&void 0!==s?s:$,x=n(null!==(l=null!==(c=null!==(m=null!==(f=null==i?void 0:i.firstWeekContainsDate)&&void 0!==f?f:null==i||null===(g=i.locale)||void 0===g||null===(w=g.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==m?m:W.firstWeekContainsDate)&&void 0!==c?c:null===(b=W.locale)||void 0===b||null===(y=b.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==l?l:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Y=n(null!==(p=null!==(M=null!==(T=null!==(k=null==i?void 0:i.weekStartsOn)&&void 0!==k?k:null==i||null===(D=i.locale)||void 0===D||null===(C=D.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==T?T:W.weekStartsOn)&&void 0!==M?M:null===(S=W.locale)||void 0===S||null===(P=S.options)||void 0===P?void 0:P.weekStartsOn)&&void 0!==p?p:0);if(!(Y>=0&&Y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var j=r(e);if(!h(j))throw new RangeError("Invalid time value");var H=v(j,u(j)),O={firstWeekContainsDate:x,weekStartsOn:Y,locale:U,_originalDate:j};return N.match(V).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,A[t])(e,U.formatLong):e})).join("").match(_).map((function(n){if("''"===n)return"'";var a,r,o=n[0];if("'"===o)return(r=(a=n).match(ee))?r[1].replace(te,"'"):a;var u,s=E[o];if(s)return null!=i&&i.useAdditionalWeekYearTokens||(u=n,-1===X.indexOf(u))||J(n,t,String(e)),null!=i&&i.useAdditionalDayOfYearTokens||!function(e){return-1!==z.indexOf(e)}(n)||J(n,t,String(e)),s(H,n,U.localize,O);if(o.match(ne))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return n})).join("")}function re(e,t){var r;a(1,arguments);var i=n(null!==(r=null==t?void 0:t.additionalDigits)&&void 0!==r?r:2);if(2!==i&&1!==i&&0!==i)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,u=function(e){var t,n={},a=e.split(ie.dateTimeDelimiter);if(a.length>2)return n;if(/:/.test(a[0])?t=a[0]:(n.date=a[0],t=a[1],ie.timeZoneDelimiter.test(n.date)&&(n.date=e.split(ie.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var r=ie.timezone.exec(t);r?(n.time=t.replace(r[1],""),n.timezone=r[1]):n.time=t}return n}(e);if(u.date){var s=function(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),a=e.match(n);if(!a)return{year:NaN,restDateString:""};var r=a[1]?parseInt(a[1]):null,i=a[2]?parseInt(a[2]):null;return{year:null===i?r:100*i,restDateString:e.slice((a[1]||a[2]).length)}}(u.date,i);o=function(e,t){if(null===t)return new Date(NaN);var n=e.match(oe);if(!n)return new Date(NaN);var a=!!n[4],r=de(n[1]),i=de(n[2])-1,o=de(n[3]),u=de(n[4]),s=de(n[5])-1;if(a)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,s)?function(e,t,n){var a=new Date(0);a.setUTCFullYear(e,0,4);var r=a.getUTCDay()||7,i=7*(t-1)+n+1-r;return a.setUTCDate(a.getUTCDate()+i),a}(t,u,s):new Date(NaN);var d=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(ce[t]||(me(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(me(e)?366:365)}(t,r)?(d.setUTCFullYear(t,i,Math.max(r,o)),d):new Date(NaN)}(s.restDateString,s.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var d,l=o.getTime(),h=0;if(u.time&&(h=function(e){var t=e.match(ue);if(!t)return NaN;var n=le(t[1]),a=le(t[2]),r=le(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,a,r)?n*m+a*c+1e3*r:NaN}(u.time),isNaN(h)))return new Date(NaN);if(!u.timezone){var f=new Date(l+h),g=new Date(0);return g.setFullYear(f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate()),g.setHours(f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds(),f.getUTCMilliseconds()),g}return d=function(e){if("Z"===e)return 0;var t=e.match(se);if(!t)return 0;var n="+"===t[1]?-1:1,a=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,r)?n*(a*m+r*c):NaN}(u.timezone),isNaN(d)?new Date(NaN):new Date(l+h+d)}var ie={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},oe=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ue=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,se=/^([+-])(\d{2})(?::?(\d{2}))?$/;function de(e){return e?parseInt(e):1}function le(e){return e&&parseFloat(e.replace(",","."))||0}var ce=[31,null,31,30,31,30,31,31,30,31,30,31];function me(e){return e%400==0||e%4==0&&e%100!=0}var he={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXWeeks:{one:"sekitar 1 minggu",other:"sekitar {{count}} minggu"},xWeeks:{one:"1 minggu",other:"{{count}} minggu"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};const fe=function(e,t,n){var a,r=he[e];return a="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"dalam waktu "+a:a+" yang lalu":a};var ge={date:K({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"d/M/yyyy"},defaultWidth:"full"}),time:K({formats:{full:"HH.mm.ss",long:"HH.mm.ss",medium:"HH.mm",short:"HH.mm"},defaultWidth:"full"}),dateTime:K({formats:{full:"{{date}} 'pukul' {{time}}",long:"{{date}} 'pukul' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},ve={lastWeek:"eeee 'lalu pukul' p",yesterday:"'Kemarin pukul' p",today:"'Hari ini pukul' p",tomorrow:"'Besok pukul' p",nextWeek:"eeee 'pukul' p",other:"P"};const we={code:"id",formatDistance:fe,formatLong:ge,formatRelative:function(e,t,n,a){return ve[e]},localize:{ordinalNumber:function(e,t){return"ke-"+Number(e)},era:B({values:{narrow:["SM","M"],abbreviated:["SM","M"],wide:["Sebelum Masehi","Masehi"]},defaultWidth:"wide"}),quarter:B({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["Kuartal ke-1","Kuartal ke-2","Kuartal ke-3","Kuartal ke-4"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:B({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agt","Sep","Okt","Nov","Des"],wide:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},defaultWidth:"wide"}),day:B({values:{narrow:["M","S","S","R","K","J","S"],short:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],abbreviated:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],wide:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},defaultWidth:"wide"}),dayPeriod:B({values:{narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Z({matchPattern:/^ke-(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:I({matchPatterns:{narrow:/^(sm|m)/i,abbreviated:/^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i,wide:/^(sebelum masehi|sebelum era umum|masehi|era umum)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^(m|e)/i]},defaultParseWidth:"any"}),quarter:I({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K-?\s[1234]/i,wide:/^Kuartal ke-?\s?[1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:I({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i,wide:/^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^ap/i,/^me/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:I({matchPatterns:{narrow:/^[srkjm]/i,short:/^(min|sen|sel|rab|kam|jum|sab)/i,abbreviated:/^(min|sen|sel|rab|kam|jum|sab)/i,wide:/^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^m/i,/^s/i,/^s/i,/^r/i,/^k/i,/^j/i,/^s/i],any:[/^m/i,/^sen/i,/^sel/i,/^r/i,/^k/i,/^j/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:I({matchPatterns:{narrow:/^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i,any:/^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^pm/i,midnight:/^tengah m/i,noon:/^tengah h/i,morning:/pagi/i,afternoon:/siang/i,evening:/sore/i,night:/malam/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};e("f",(e=>ae(re(e),"yyyy-MM-dd HH:mm",{locale:we}))),e("a",((e,t)=>e?ae(l(re(e),t),"yyyy-MM-dd",{locale:we}):e)),e("b",(e=>function(e,t){a(2,arguments);var n=r(e),i=r(t);return n.getTime()>i.getTime()}(new Date,re(e)))),e("i",((e,t)=>{const n=new Date,a=re(e);return Math.abs(g(n,a))<=t}))}}}));
