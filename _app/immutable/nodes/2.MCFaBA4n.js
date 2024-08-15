import{s as D,n as $}from"../chunks/scheduler.CtbWrGNo.js";import{S as F,i as P,e as v,c as b,a as w,d as h,o as g,g as d,y as J,t as T,s as M,b as k,f as j,h as y,j as C,z as W,A as z,B as H,C as K,u as A,v as I,w as S,D as X,k as q,l as L,x as B}from"../chunks/index.CEBRpjt4.js";function O(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function N(a){return Object.entries(a)}function Z(a){const e={},r={};for(const[t,n]of N(a))n!==""?(e[t]=parseInt(n),isNaN(e[t])&&(r[t]=`Must be a valid ${t}`)):r[t]="This field is required";return(e.day<1||e.day>31)&&(r.day="Must be a valid day"),(e.month<1||e.month>12)&&(r.month="Must be a valid month"),e.year>new Date().getFullYear()&&(r.year="Must be in the past"),Object.keys(r).length!==0?{errors:r}:{values:e}}function x(a,e,r){const t=new Date(a,e-1,r),n={};return t.getFullYear()===a&&t.getMonth()===e-1&&t.getDate()===r?{birthday:t}:(n.day="Must be a valid date",{errors:n})}function ee(a){const e=new Date().getTime(),r=a.getTime(),t={};if(r>e)return t.year="Must be in the past",{errors:t};const n=new Date(e-r);return{years:n.getFullYear()-1970,months:n.getMonth()+1,days:n.getDate()}}function R(a,e,r){const t=a.slice();return t[2]=e[r][0],t[3]=e[r][1],t}function U(a){let e,r,t=a[3]+"",n,l,s=a[2]+"",o;return{c(){e=v("p"),r=v("span"),n=T(t),l=M(),o=T(s)},l(u){e=b(u,"P",{});var c=w(e);r=b(c,"SPAN",{});var i=w(r);n=k(i,t),i.forEach(h),l=j(c),o=k(c,s),c.forEach(h)},m(u,c){d(u,e,c),y(e,r),y(r,n),y(e,l),y(e,o)},p(u,c){c&1&&t!==(t=u[3]+"")&&C(n,t),c&1&&s!==(s=u[2]+"")&&C(o,s)},d(u){u&&h(e)}}}function te(a){let e,r=O(N(a[0])),t=[];for(let n=0;n<r.length;n+=1)t[n]=U(R(a,r,n));return{c(){e=v("section");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=b(n,"SECTION",{class:!0});var l=w(e);for(let s=0;s<t.length;s+=1)t[s].l(l);l.forEach(h),this.h()},h(){g(e,"class","output svelte-9yctgf")},m(n,l){d(n,e,l);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(n,[l]){if(l&1){r=O(N(n[0]));let s;for(s=0;s<r.length;s+=1){const o=R(n,r,s);t[s]?t[s].p(o,l):(t[s]=U(o),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=r.length}},i:$,o:$,d(n){n&&h(e),J(t,n)}}}function ne(a,e,r){let t,{data:n}=e;return a.$$set=l=>{"data"in l&&r(1,n=l.data)},a.$$.update=()=>{a.$$.dirty&2&&r(0,t={years:`${n.years??"--"}`,months:`${n.months??"--"}`,days:`${n.days??"--"}`})},[t,n]}class se extends F{constructor(e){super(),P(this,e,ne,te,D,{data:1})}}function re(a){let e,r='<button type="submit" class="svelte-34qs0"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44" class="svelte-34qs0"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"></path></g></svg></button>';return{c(){e=v("section"),e.innerHTML=r,this.h()},l(t){e=b(t,"SECTION",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-pz8b5k"&&(e.innerHTML=r),this.h()},h(){g(e,"class","control svelte-34qs0")},m(t,n){d(t,e,n)},p:$,i:$,o:$,d(t){t&&h(e)}}}class ae extends F{constructor(e){super(),P(this,e,null,re,D,{})}}function V(a,e,r){const t=a.slice();return t[4]=e[r][0],t[5]=e,t[6]=r,t}function G(a){let e,r=a[4]+"",t,n,l,s,o,u,c,i=a[1][a[4]]+"",f,_,E;function Q(){a[3].call(s,a[4])}return{c(){e=v("label"),t=T(r),l=M(),s=v("input"),u=M(),c=v("span"),f=T(i),this.h()},l(p){e=b(p,"LABEL",{for:!0});var m=w(e);t=k(m,r),m.forEach(h),l=j(p),s=b(p,"INPUT",{id:!0,type:!0,class:!0}),u=j(p),c=b(p,"SPAN",{class:!0});var Y=w(c);f=k(Y,i),Y.forEach(h),this.h()},h(){g(e,"for",n=a[4]),g(s,"id",o=a[4]),g(s,"type","text"),g(s,"class","svelte-1j9cwlk"),g(c,"class","svelte-1j9cwlk")},m(p,m){d(p,e,m),y(e,t),d(p,l,m),d(p,s,m),H(s,a[0][a[4]]),d(p,u,m),d(p,c,m),y(c,f),_||(E=K(s,"input",Q),_=!0)},p(p,m){a=p,m&1&&r!==(r=a[4]+"")&&C(t,r),m&1&&n!==(n=a[4])&&g(e,"for",n),m&1&&o!==(o=a[4])&&g(s,"id",o),m&1&&s.value!==a[0][a[4]]&&H(s,a[0][a[4]]),m&3&&i!==(i=a[1][a[4]]+"")&&C(f,i)},d(p){p&&(h(e),h(l),h(s),h(u),h(c)),_=!1,E()}}}function le(a){let e,r=O(N(a[0])),t=[];for(let n=0;n<r.length;n+=1)t[n]=G(V(a,r,n));return{c(){e=v("section");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=b(n,"SECTION",{class:!0});var l=w(e);for(let s=0;s<t.length;s+=1)t[s].l(l);l.forEach(h),this.h()},h(){g(e,"class","inputs error svelte-1j9cwlk"),z(e,"error",a[2])},m(n,l){d(n,e,l);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(n,[l]){if(l&3){r=O(N(n[0]));let s;for(s=0;s<r.length;s+=1){const o=V(n,r,s);t[s]?t[s].p(o,l):(t[s]=G(o),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=r.length}l&4&&z(e,"error",n[2])},i:$,o:$,d(n){n&&h(e),J(t,n)}}}function oe(a,e,r){let t,{inputs:n}=e,{errors:l}=e;function s(o){n[o]=this.value,r(0,n)}return a.$$set=o=>{"inputs"in o&&r(0,n=o.inputs),"errors"in o&&r(1,l=o.errors)},a.$$.update=()=>{a.$$.dirty&2&&r(2,t=Object.values(l).join("")!=="")},[n,l,t,s]}class ie extends F{constructor(e){super(),P(this,e,oe,le,D,{inputs:0,errors:1})}}function ue(a){let e,r,t,n,l,s,o,u,c;return r=new ie({props:{inputs:a[2],errors:a[0]}}),n=new ae({}),s=new se({props:{data:a[1]}}),{c(){e=v("form"),A(r.$$.fragment),t=M(),A(n.$$.fragment),l=M(),A(s.$$.fragment),this.h()},l(i){e=b(i,"FORM",{class:!0});var f=w(e);I(r.$$.fragment,f),t=j(f),I(n.$$.fragment,f),l=j(f),I(s.$$.fragment,f),f.forEach(h),this.h()},h(){g(e,"class","calculator svelte-2fa2gn")},m(i,f){d(i,e,f),S(r,e,null),y(e,t),S(n,e,null),y(e,l),S(s,e,null),o=!0,u||(c=K(e,"submit",X(a[3])),u=!0)},p(i,[f]){const _={};f&1&&(_.errors=i[0]),r.$set(_);const E={};f&2&&(E.data=i[1]),s.$set(E)},i(i){o||(q(r.$$.fragment,i),q(n.$$.fragment,i),q(s.$$.fragment,i),o=!0)},o(i){L(r.$$.fragment,i),L(n.$$.fragment,i),L(s.$$.fragment,i),o=!1},d(i){i&&h(e),B(r),B(n),B(s),u=!1,c()}}}function ce(a,e,r){const t={day:"",month:"",year:""};let n={year:"",month:"",day:""},l={};function s(u){return r(0,n={...n,...u}),Object.values(n).join("")!==""}function o(){r(0,n={year:"",month:"",day:""}),r(1,l={});const{values:u,errors:c}=Z(t);if(s(c))return;const{birthday:i,errors:f}=x(u.year,u.month,u.day);if(s(f))return;const _=ee(i);s(_.errors)||r(1,l={..._})}return[n,l,t,o]}class pe extends F{constructor(e){super(),P(this,e,ce,ue,D,{})}}export{pe as component};
