!function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(){return f("")}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n,e){t.classList[e?"add":"remove"](n)}let g;function $(t){g=t}function b(){if(!g)throw Error("Function called outside component initialization");return g}function y(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const v=[],w=[],k=[],x=[],E=Promise.resolve();let _=!1;function C(){_||(_=!0,E.then(O))}function L(t){k.push(t)}let S=!1;const j=new Set;function O(){if(!S){S=!0;do{for(let t=0;t<v.length;t+=1){const n=v[t];$(n),D(n.$$)}for($(null),v.length=0;w.length;)w.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];j.has(n)||(j.add(n),n())}k.length=0}while(v.length);for(;x.length;)x.pop()();_=!1,S=!1,j.clear()}}function D(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const A=new Set;let M;function R(){M={r:0,c:[],p:M}}function T(){M.r||s(M.c),M=M.p}function q(t,n){t&&t.i&&(A.delete(t),t.i(n))}function N(t,n,e,o){if(t&&t.o){if(A.has(t))return;A.add(t),M.c.push((()=>{A.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function I(t,n){const e={},o={},s={$$scope:1};let r=t.length;for(;r--;){const c=t[r],i=n[r];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)s[t]||(e[t]=i[t],s[t]=1);t[r]=i}else for(const t in c)s[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function V(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function H(t,n,o){const{fragment:c,on_mount:i,on_destroy:l,after_update:u}=t.$$;c&&c.m(n,o),L((()=>{const n=i.map(e).filter(r);l?l.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(L)}function P(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function B(n,e,r,c,i,l,a=[-1]){const f=g;$(n);const d=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:a,skip_bound:!1};let h=!1;if(d.ctx=r?r(n,e.props||{},((t,e,...o)=>{const s=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),h&&function(t,n){-1===t.$$.dirty[0]&&(v.push(t),C(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],d.update(),h=!0,s(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();e.intro&&q(n.$$.fragment),H(n,e.target,e.anchor),O()}$(f)}class Y{$destroy(){P(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&0!==Object.keys(t).length&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function z(n){let e,o,s;return{c(){e=a("header"),e.innerHTML='<img src="/assets/cutie.png" class="svelte-kd6w7o"/> \n  <h3 class="svelte-kd6w7o">Stormy Dev</h3> \n  <nav><a href="#/" class="svelte-kd6w7o">Home</a> \n    <a href="#/software" class="svelte-kd6w7o">Software</a></nav>',o=d(),s=a("div"),p(e,"class","svelte-kd6w7o"),m(e,"scrolled",n[0]),p(s,"id","placeholder"),p(s,"class","svelte-kd6w7o")},m(t,n){l(t,e,n),l(t,o,n),l(t,s,n)},p(t,[n]){1&n&&m(e,"scrolled",t[0])},i:t,o:t,d(t){t&&u(e),t&&u(o),t&&u(s)}}}function F(t,n,e){let o=!1,s=0;return document.addEventListener("scroll",(()=>{let t=document.documentElement.scrollTop;e(0,o=t-s>0),s=t})),[o]}class G extends Y{constructor(t){super(),B(this,t,F,z,c,{})}}function U(n){let e;return{c(){e=a("main"),e.innerHTML='<div class="svelte-13aqts2"></div> \n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 84 1440 204"><path fill="#f44" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,181.3C672,149,768,75,864,85.3C960,96,1056,192,1152,218.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>',p(e,"class","svelte-13aqts2")},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}class J extends Y{constructor(t){super(),B(this,t,null,U,c,{})}}const X=[];function Z(t,n){return{subscribe:K(t,n).subscribe}}function K(n,e=t){let o;const s=[];function r(t){if(c(n,t)&&(n=t,o)){const t=!X.length;for(let t=0;t<s.length;t+=1){const e=s[t];e[1](),X.push(e,n)}if(t){for(let t=0;t<X.length;t+=2)X[t][0](X[t+1]);X.length=0}}}return{set:r,update:function(t){r(t(n))},subscribe:function(c,i=t){const l=[c,i];return s.push(l),1===s.length&&(o=e(r)||t),c(n),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}function Q(n,e,o){const c=!Array.isArray(n),i=c?[n]:n,l=e.length<2;return Z(o,(n=>{let o=!1;const u=[];let a=0,f=t;const d=()=>{if(a)return;f();const o=e(c?u[0]:u,n);l?n(o):f=r(o)?o:t},h=i.map(((n,e)=>function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,(t=>{u[e]=t,a&=~(1<<e),o&&d()}),(()=>{a|=1<<e}))));return o=!0,d(),function(){s(h),f()}}))}function tt(t){let e,o,s;const r=[t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[7])),{c(){e&&W(e.$$.fragment),o=h()},m(t,n){e&&H(e,t,n),l(t,o,n),s=!0},p(t,n){const s=4&n?I(r,[V(t[2])]):{};if(c!==(c=t[0])){if(e){R();const t=e;N(t.$$.fragment,1,0,(()=>{P(t,1)})),T()}c?(e=new c(i()),e.$on("routeEvent",t[7]),W(e.$$.fragment),q(e.$$.fragment,1),H(e,o.parentNode,o)):e=null}else c&&e.$set(s)},i(t){s||(e&&q(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&u(o),e&&P(e,t)}}}function nt(t){let e,o,s;const r=[{params:t[1]},t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[6])),{c(){e&&W(e.$$.fragment),o=h()},m(t,n){e&&H(e,t,n),l(t,o,n),s=!0},p(t,n){const s=6&n?I(r,[2&n&&{params:t[1]},4&n&&V(t[2])]):{};if(c!==(c=t[0])){if(e){R();const t=e;N(t.$$.fragment,1,0,(()=>{P(t,1)})),T()}c?(e=new c(i()),e.$on("routeEvent",t[6]),W(e.$$.fragment),q(e.$$.fragment,1),H(e,o.parentNode,o)):e=null}else c&&e.$set(s)},i(t){s||(e&&q(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&u(o),e&&P(e,t)}}}function et(t){let n,e,o,s;const r=[nt,tt],c=[];function i(t,n){return t[1]?0:1}return n=i(t),e=c[n]=r[n](t),{c(){e.c(),o=h()},m(t,e){c[n].m(t,e),l(t,o,e),s=!0},p(t,[s]){let l=n;n=i(t),n===l?c[n].p(t,s):(R(),N(c[l],1,1,(()=>{c[l]=null})),T(),e=c[n],e?e.p(t,s):(e=c[n]=r[n](t),e.c()),q(e,1),e.m(o.parentNode,o))},i(t){s||(q(e),s=!0)},o(t){N(e),s=!1},d(t){c[n].d(t),t&&u(o)}}}function ot(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const st=Z(null,(function(t){t(ot());const n=()=>{t(ot())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));function rt(t,n,e){let{routes:o={}}=n,{prefix:s=""}=n,{restoreScrollState:r=!1}=n;class c{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,s,r,c=[],i="",l=t.split("/");for(l[0]||l.shift();s=l.shift();)"*"===(e=s[0])?(c.push("wild"),i+="/(.*)"):":"===e?(o=s.indexOf("?",1),r=s.indexOf(".",1),c.push(s.substring(1,~o?o:~r?r:s.length)),i+=~o&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(i+=(~o?"?":"")+"\\"+s.substring(r))):i+="/"+s;return{keys:c,pattern:RegExp("^"+i+"/?$","i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(s)if("string"==typeof s){if(!t.startsWith(s))return null;t=t.substr(s.length)||"/"}else if(s instanceof RegExp){const n=t.match(s);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const i=[];o instanceof Map?o.forEach(((t,n)=>{i.push(new c(n,t))})):Object.keys(o).forEach((t=>{i.push(new c(t,o[t]))}));let l=null,u=null,a={};const f=function(){const t=b();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const s=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,s)}))}}}();async function d(t,n){await(C(),E),f(t,n)}let h=null;var p;r&&(window.addEventListener("popstate",(t=>{h=t.state&&t.state.scrollY?t.state:null})),p=()=>{h?window.scrollTo(h.scrollX,h.scrollY):window.scrollTo(0,0)},b().$$.after_update.push(p));let m=null,g=null;return st.subscribe((async t=>{m=t;let n=0;for(;n<i.length;){const o=i[n].match(t.location);if(!o){n++;continue}const s={route:i[n].path,location:t.location,querystring:t.querystring,userData:i[n].userData};if(!await i[n].checkConditions(s))return e(0,l=null),g=null,void d("conditionsFailed",s);d("routeLoading",Object.assign({},s));const r=i[n].component;if(g!=r){r.loading?(e(0,l=r.loading),g=r,e(1,u=r.loadingParams),e(2,a={}),d("routeLoaded",Object.assign({},s,{component:l,name:l.name}))):(e(0,l=null),g=null);const n=await r();if(t!=m)return;e(0,l=n&&n.default||n),g=r}return e(1,u=o&&"object"==typeof o&&Object.keys(o).length?o:null),e(2,a=i[n].props),void d("routeLoaded",Object.assign({},s,{component:l,name:l.name}))}e(0,l=null),g=null})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,s=t.prefix),"restoreScrollState"in t&&e(5,r=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=r?"manual":"auto")},[l,u,a,o,s,r,function(n){y(t,n)},function(n){y(t,n)}]}Q(st,(t=>t.location)),Q(st,(t=>t.querystring));class ct extends Y{constructor(t){super(),B(this,t,rt,et,c,{routes:3,prefix:4,restoreScrollState:5})}}function it(n){let e,o,s;return{c(){e=a("h1"),e.textContent="Owen's Website",o=d(),s=a("article"),s.innerHTML='<h4 class="svelte-1ykt7ud">About Me:</h4> \n    <ul><li class="svelte-1ykt7ud">16</li> \n      <li class="svelte-1ykt7ud">Wisconsin</li></ul> \n\n    <h4 class="svelte-1ykt7ud">Languages:</h4> \n    <ul><li class="svelte-1ykt7ud">Rust</li> \n      <li class="svelte-1ykt7ud">C#</li> \n      <li class="svelte-1ykt7ud">Vlang</li></ul> \n\n    <h4 class="svelte-1ykt7ud">Socials:</h4> \n    <ul><li class="svelte-1ykt7ud"><a href="https://discord.gg/43ChvVf">Discord</a></li> \n      <li class="svelte-1ykt7ud"><a href="https://github.com/Stormbreaker187">Github</a></li> \n      <li class="svelte-1ykt7ud"><a href="http://twitch.tv/stormbreaker187">Twitch</a></li> \n      <li class="svelte-1ykt7ud"><a href="https://youtube.com/stormbreaker187">Youtube</a></li> \n      <li class="svelte-1ykt7ud"><a href="https://twitter.com/stormbreaker187">Twitter</a></li> \n      <li class="svelte-1ykt7ud"><a href="https://instagram.com/stormbreaker187">Instagram</a></li> \n      <li class="svelte-1ykt7ud"><a href="https://soundcloud.com/stormbreaker187">Soundcloud</a></li></ul> \n\n    <h4 class="svelte-1ykt7ud">Website Visits</h4> \n    <ul><a href="https://www.webfreecounter.com/" target="_blank"><img src="https://www.cutercounter.com/hits.php?id=hmvxkffpc&amp;nd=8&amp;style=39" border="0" alt="Counter"/></a></ul>',p(s,"class","svelte-1ykt7ud")},m(t,n){l(t,e,n),l(t,o,n),l(t,s,n)},p:t,i:t,o:t,d(t){t&&u(e),t&&u(o),t&&u(s)}}}class lt extends Y{constructor(t){super(),B(this,t,null,it,c,{})}}function ut(t,n,e){const o=t.slice();return o[1]=n[e][0],o[2]=n[e][1],o[3]=n[e][2],o}function at(n){let e,o,s,r,c,h,m,g,$=n[1]+"",b=n[2]+"";return{c(){e=a("a"),o=a("section"),s=a("h3"),r=f($),c=d(),h=a("p"),m=f(b),g=d(),p(o,"class","svelte-1uneucn"),p(e,"href",n[3]),p(e,"class","svelte-1uneucn")},m(t,n){l(t,e,n),i(e,o),i(o,s),i(s,r),i(o,c),i(o,h),i(h,m),i(o,g)},p:t,d(t){t&&u(e)}}}function ft(n){let e,o,s,r=n[0],c=[];for(let t=0;t<r.length;t+=1)c[t]=at(ut(n,r,t));return{c(){e=a("h1"),e.textContent="Software",o=d();for(let t=0;t<c.length;t+=1)c[t].c();s=h()},m(t,n){l(t,e,n),l(t,o,n);for(let e=0;e<c.length;e+=1)c[e].m(t,n);l(t,s,n)},p(t,[n]){if(1&n){let e;for(r=t[0],e=0;e<r.length;e+=1){const o=ut(t,r,e);c[e]?c[e].p(o,n):(c[e]=at(o),c[e].c(),c[e].m(s.parentNode,s))}for(;e<c.length;e+=1)c[e].d(1);c.length=r.length}},i:t,o:t,d(t){t&&u(e),t&&u(o),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(c,t),t&&u(s)}}}function dt(t){return[[["Eclipse","Windows Jailbreak Client","https://cdn.discordapp.com/attachments/787175116877463586/813178074883031060/Eclipse.exe"],["MediaDL","Batch GUI Video Ripper","https://cdn.discordapp.com/attachments/787175116877463586/813177830237536346/MediaDL.bat"],["VRCrack","Description","https://e621.net"],["Dusk","Description","https://e621.net"],["Phantom","Description","https://e621.net"]]]}class ht extends Y{constructor(t){super(),B(this,t,dt,ft,c,{})}}function pt(n){let e,o,s,r,c,i,f;return e=new G({}),s=new J({}),i=new ct({props:{routes:{"/":lt,"/software":ht}}}),{c(){W(e.$$.fragment),o=d(),W(s.$$.fragment),r=d(),c=a("main"),W(i.$$.fragment),p(c,"class","svelte-1nr3zc0")},m(t,n){H(e,t,n),l(t,o,n),H(s,t,n),l(t,r,n),l(t,c,n),H(i,c,null),f=!0},p:t,i(t){f||(q(e.$$.fragment,t),q(s.$$.fragment,t),q(i.$$.fragment,t),f=!0)},o(t){N(e.$$.fragment,t),N(s.$$.fragment,t),N(i.$$.fragment,t),f=!1},d(t){P(e,t),t&&u(o),P(s,t),t&&u(r),t&&u(c),P(i)}}}new class extends Y{constructor(t){super(),B(this,t,null,pt,c,{})}}({target:document.body})}();
