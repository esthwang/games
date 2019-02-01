(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{123:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",a="week",o="month",s="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,d=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},h={padStart:l,padZoneStr:function(t){var e=Math.abs(t),n=Math.floor(e/60),r=e%60;return(t<=0?"+":"-")+l(n,2,"0")+":"+l(r,2,"0")},monthDiff:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,"months"),i=e-r<0,a=t.clone().add(n+(i?-1:1),"months");return Number(-(n+(e-r)/(i?r-a:a-r)))},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(u){return{M:o,y:s,w:a,d:i,h:r,m:n,s:e,ms:t}[u]||String(u||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},f="en",m={};m[f]=c;var p=function(t){return t instanceof w},$=function(t,e,n){var r;if(!t)return null;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i}return n||(f=r),r},y=function(t,e){if(p(t))return t.clone();var n=e||{};return n.date=t,new w(n)},g=function(t,e){return y(t,{locale:e.$L})},v=h;v.parseLocale=$,v.isDayjs=p,v.wrapper=g;var w=function(){function c(t){this.parse(t)}var l=c.prototype;return l.parse=function(t){var e,n;this.$d=null===(e=t.date)?new Date(NaN):v.isUndefined(e)?new Date:e instanceof Date?e:"string"==typeof e&&/.*[^Z]$/i.test(e)&&(n=e.match(u))?new Date(n[1],n[2]-1,n[3]||1,n[5]||0,n[6]||0,n[7]||0,n[8]||0):new Date(e),this.init(t)},l.init=function(t){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds(),this.$L=this.$L||$(t.locale,null,!0)||f},l.$utils=function(){return v},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return y(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<y(t)},l.year=function(){return this.$y},l.month=function(){return this.$M},l.day=function(){return this.$W},l.date=function(){return this.$D},l.hour=function(){return this.$H},l.minute=function(){return this.$m},l.second=function(){return this.$s},l.millisecond=function(){return this.$ms},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,u){var d=this,c=!!v.isUndefined(u)||u,l=function(t,e){var n=g(new Date(d.$y,e,t),d);return c?n:n.endOf(i)},h=function(t,e){return g(d.toDate()[t].apply(d.toDate(),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),d)};switch(v.prettyUnit(t)){case s:return c?l(1,0):l(31,11);case o:return c?l(1,this.$M):l(0,this.$M+1);case a:return l(c?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case i:case"date":return h("setHours",0);case r:return h("setMinutes",1);case n:return h("setSeconds",2);case e:return h("setMilliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(a,u){var d,c=v.prettyUnit(a),l=(d={},d[i]="setDate",d.date="setDate",d[o]="setMonth",d[s]="setFullYear",d[r]="setHours",d[n]="setMinutes",d[e]="setSeconds",d[t]="setMilliseconds",d)[c],h=c===i?this.$D+(u-this.$W):u;return this.$d[l]&&this.$d[l](h),this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.add=function(t,u){var d,c=this;t=Number(t);var l=v.prettyUnit(u),h=function(e,n){var r=c.set("date",1).set(e,n+t);return r.set("date",Math.min(c.$D,r.daysInMonth()))},f=function(e){var n=new Date(c.$d);return n.setDate(n.getDate()+e*t),g(n,c)};if(l===o)return h(o,this.$M);if(l===s)return h(s,this.$y);if(l===i)return f(1);if(l===a)return f(7);var m=(d={},d[n]=6e4,d[r]=36e5,d[e]=1e3,d)[l]||1,p=this.valueOf()+t*m;return g(p,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this,n=t||"YYYY-MM-DDTHH:mm:ssZ",r=v.padZoneStr(this.$d.getTimezoneOffset()),i=this.$locale(),a=i.weekdays,o=i.months,s=function(t,e,n,r){return t&&t[e]||n[e].substr(0,r)},u=function(t){return 0===e.$H?12:v.padStart(e.$H<13?e.$H:e.$H-12,"hh"===t?2:1,"0")};return n.replace(d,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):{YY:String(e.$y).slice(-2),YYYY:String(e.$y),M:String(e.$M+1),MM:v.padStart(e.$M+1,2,"0"),MMM:s(i.monthsShort,e.$M,o,3),MMMM:o[e.$M],D:String(e.$D),DD:v.padStart(e.$D,2,"0"),d:String(e.$W),dd:s(i.weekdaysMin,e.$W,a,2),ddd:s(i.weekdaysShort,e.$W,a,3),dddd:a[e.$W],H:String(e.$H),HH:v.padStart(e.$H,2,"0"),h:u(t),hh:u(t),a:e.$H<12?"am":"pm",A:e.$H<12?"AM":"PM",m:String(e.$m),mm:v.padStart(e.$m,2,"0"),s:String(e.$s),ss:v.padStart(e.$s,2,"0"),SSS:v.padStart(e.$ms,3,"0"),Z:r}[t]||r.replace(":","")})},l.diff=function(t,u,d){var c,l=v.prettyUnit(u),h=y(t),f=this-h,m=v.monthDiff(this,h);return m=(c={},c[s]=m/12,c[o]=m,c.quarter=m/3,c[a]=f/6048e5,c[i]=f/864e5,c[r]=f/36e5,c[n]=f/6e4,c[e]=f/1e3,c)[l]||f,d?m:v.absFloor(m)},l.daysInMonth=function(){return this.endOf(o).$D},l.$locale=function(){return m[this.$L]},l.locale=function(t,e){var n=this.clone();return n.$L=$(t,e,!0),n},l.clone=function(){return g(this.toDate(),this)},l.toDate=function(){return new Date(this.$d)},l.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},l.toJSON=function(){return this.toISOString()},l.toISOString=function(){return this.$d.toISOString()},l.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},l.toString=function(){return this.$d.toUTCString()},c}();return y.extend=function(t,e){return t(e,w,y),y},y.locale=$,y.isDayjs=p,y.unix=function(t){return y(1e3*t)},y.en=m[f],y}()},124:function(t,e,n){t.exports=n(233)},126:function(t,e,n){t.exports=n(42)},231:function(t,e,n){__NEXT_REGISTER_PAGE("/crossword",function(){return t.exports=n(232),{page:t.exports.default}})},232:function(t,e,n){"use strict";n.r(e);var r=n(33),i=n.n(r),a=n(123),o=n.n(a),s=n(124),u=n.n(s),d=n(55),c=n(56),l=n(0),h=n.n(l),f=n(1),m=n(6),p=n(15),$=n(57),y=n(126);function g(t,e,n,r,i,a,o){try{var s=t[a](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,i)}var v=u()(function(){return n.e(10).then(n.t.bind(null,128,7))},{ssr:!1,loadableGenerated:{webpack:function(){return[128]},modules:["@chicagomaroon/react-crossword"]}}),w=f.d.div.withConfig({displayName:"crossword__HeaderContainer",componentId:"hidaya-0"})(["padding-top:4rem;padding-bottom:1rem;border-bottom:1px solid ",";margin-bottom:1.5rem;@media (max-width:800px){margin-bottom:0;}"],function(t){return t.theme.colors.brightness_80}),S=f.d.h1.withConfig({displayName:"crossword__Title",componentId:"hidaya-1"})(["display:inline;@media (max-width:800px){display:block;margin-bottom:0;margin-top:0;}"]),b=f.d.h2.withConfig({displayName:"crossword__Timestamp",componentId:"hidaya-2"})(["font-weight:normal;font-size:1.3rem;color:",";margin-bottom:0;"],function(t){return t.theme.colors.primary}),M=f.d.h2.withConfig({displayName:"crossword__Byline",componentId:"hidaya-3"})(["display:inline;font-weight:normal;font-size:1rem;margin-top:24px;margin-bottom:0;float:right;@media (max-width:800px){display:inline-block;float:left;margin-top:0;}"]),D=f.d.span.withConfig({displayName:"crossword__Person",componentId:"hidaya-4"})(["font-weight:bold;text-transform:uppercase;"]);var H=Object(y.withRouter)(function(t){return h.a.createElement(h.a.Fragment,null,h.a.createElement(c.a,null),h.a.createElement(w,null,h.a.createElement(p.b,null,h.a.createElement(m.b,{fluid:!0},h.a.createElement(m.c,null,h.a.createElement(m.a,{xs:12},h.a.createElement(b,null,o()(t.data.date).format("MMM. D, YYYY")),h.a.createElement(S,null,t.data.name),h.a.createElement(M,null,function(t){var e=[];e.push(h.a.createElement(h.a.Fragment,null,"By"));for(var n=0;n<t.length;n++)if(n!==t.length-1){var r="";t.length>2&&(r+=","),n===t.length-2&&(r+=" and "),e.push(h.a.createElement(h.a.Fragment,null,h.a.createElement(D,null," ",t[n]),r))}else e.push(h.a.createElement(D,null," ",t[n]));return e}(t.data.byline))))))),h.a.createElement(p.b,null,h.a.createElement(m.b,{fluid:!0},h.a.createElement(m.c,null,h.a.createElement(m.a,{xs:12},h.a.createElement(v,{data:t.data}))))),h.a.createElement(d.a,null))});H.getInitialProps=function(){var t,e=(t=i.a.mark(function t(e){var r,a,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.req,r=e.query,t.next=3,n.e(2).then(n.t.bind(null,257,3));case 3:return a=t.sent,t.next=6,n(237)("./".concat(a[r.id]));case 6:return void 0!==(o=t.sent)&&Object($.a)("/crosswords/".concat(r.id)),t.abrupt("return",{data:o});case 9:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(t){g(a,r,i,o,s,"next",t)}function s(t){g(a,r,i,o,s,"throw",t)}o(void 0)})});return function(t){return e.apply(this,arguments)}}(),e.default=H},233:function(t,e,n){"use strict";var r=n(5);Object.defineProperty(e,"__esModule",{value:!0}),e.noSSR=c,e.default=function(t,e){var n=u.default,r={loading:function(t){t.error,t.isLoading;return s.default.createElement(l,null)}};"function"==typeof t.then?r.loader=function(){return t}:"function"==typeof t?r.loader=t:"object"===(0,o.default)(t)&&(r=(0,a.default)({},r,t));r=(0,a.default)({},r,e),t.render&&(r.render=function(e,n){return t.render(n,e)});if(t.modules){n=u.default.Map;var d={},h=t.modules();(0,i.default)(h).forEach(function(t){var e=h[t];"function"!=typeof e.then?d[t]=e:d[t]=function(){return e.then(function(t){return t.default||t})}}),r.loader=d}r.loadableGenerated&&delete(r=(0,a.default)({},r,r.loadableGenerated)).loadableGenerated;if("boolean"==typeof r.ssr){if(!r.ssr)return delete r.ssr,c(n,r);delete r.ssr}return n(r)};var i=r(n(74)),a=r(n(36)),o=r(n(43)),s=r(n(0)),u=r(n(119)),d="undefined"==typeof window;function c(t,e){return delete e.webpack,delete e.modules,d?function(){return s.default.createElement(e.loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}:t(e)}function l(){return s.default.createElement("p",null,"loading...")}},237:function(t,e,n){var r={"./2018-12-30 Test 1":[129,3],"./2018-12-30 Test 1.json":[129,3],"./2019-02-01 Blizzard":[130,4],"./2019-02-01 Blizzard.json":[130,4]};function i(t){var e=r[t];return e?n.e(e[1]).then(function(){var t=e[0];return n.t(t,3)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}i.keys=function(){return Object.keys(r)},i.id=237,t.exports=i}},[[231,1,0]]]);