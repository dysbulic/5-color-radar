(this["webpackJsonp5-color-radar"]=this["webpackJsonp5-color-radar"]||[]).push([[0],{101:function(e,t,n){},103:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(76),i=n.n(s),o=n(124),a=(n(95),n(60)),l=n(9),j=n(15),u=n(62),h=n(2),d=function(){var e=Object(j.a)();return Object(h.jsx)(a.a,{history:e,basename:"/",children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/:answers",exact:!1,component:u.a}),Object(h.jsx)(l.a,{path:"/",component:u.a})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,125)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(d,{})})}),document.getElementById("root")),b()},62:function(e,t,n){"use strict";(function(e){var c=n(13),r=n(30),s=n.n(r),i=n(77),o=n(6),a=n(78),l=n(0),j=n(40),u=n(39),h=n(68),d=n(87),b=n(23),x=n(67),O=n(112),f=n(113),p=n(114),m=n(115),g=n(9),v=n(85),k=(n(103),n(2)),y={W:"white",U:"blue",R:"red",B:"black",G:"green"},w={W:"Justice",U:"Wisdom",R:"Chaos",B:"Ambition",G:"Balance"},S={get:function(e,t){return t in e?e[t]:0}},C={0:-2,1:-1,2:0,3:1,4:2,5:null,6:void 0};t.a=function(e){var t,n=e.history,r=Object(l.useState)(),M=Object(o.a)(r,2),A=M[0],F=M[1],P=Object(l.useState)(),B=Object(o.a)(P,2),I=B[0],N=B[1],D=Object(l.useState)(0),E=Object(o.a)(D,2),W=E[0],q=E[1],H=Object(l.useState)(!0),J=Object(o.a)(H,2),R=J[0],G=J[1],L=Object(g.g)().answers,T=void 0===L?"":L,Q=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/Jerdle-code/color-pie-test/main/readable_questions.txt");case 2:return t=e.sent,e.t0=a,e.next=6,t.text();case 6:e.t1=e.sent,n=e.t0.load.call(e.t0,e.t1),console.info(T),T.split("").forEach((function(e,t){n[t].response=C[parseInt(e,36)]})),q(Math.min(/6/.test(T)?T.indexOf("6"):T.length,n.length)),F(n),c=new Proxy({},S),n.forEach((function(e){c[e.low]+=2,c[e.high]+=2})),N(c);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e){F((function(t){var r=Object(c.a)(t);r[W].response=e;var s=r.map((function(e){return Object.entries(C).find((function(t){var n=Object(o.a)(t,2);n[0];return n[1]===e.response}))[0]})).join("").replace(/6+$/g,"");return n.push(s),r})),q(W+1)};if(Object(l.useEffect)((function(){return Q()}),[]),!A)return Object(k.jsxs)(j.a,{align:"center",pt:10,children:[Object(k.jsx)(u.a,{children:"Loading Statements\u2026"}),Object(k.jsx)(h.a,{})]});if(!I)return Object(k.jsxs)(j.a,{align:"center",pt:10,children:[Object(k.jsx)(u.a,{children:"Processing Statements\u2026"}),Object(k.jsx)(h.a,{})]});var V=new Proxy({},S);A.forEach((function(e){void 0!==e.response&&(e.response<0?V[e.low]+=Math.abs(e.response):e.response>0?V[e.high]+=Math.abs(e.response):null===e.response||0===e.response&&(V[e.low]+=1,V[e.high]+=1))}));var X={};return Object.keys(y).forEach((function(e){var t;return X[e]=(null!==(t=V[e])&&void 0!==t?t:0)/I[e]})),Object(k.jsxs)(j.a,{className:!R&&"imageOnly",children:[Object(k.jsx)(d.a,{as:"nav",children:A.map((function(e,t){return Object(k.jsx)("span",{className:[W===t?"current":null,void 0!==e.response?"done":"unanswered","".concat(e.low).concat(e.high),void 0!==e.response?"res".concat(e.response):null].join(" "),title:"Question #".concat(t+1,": ").concat(A[t].question),onClick:function(){return q(t)}},t)}))},"head"),Object(k.jsx)(u.a,{id:"statements",children:Object(k.jsxs)(d.a,{justify:"center",align:"center",flexDir:"column",children:[Object(k.jsx)(u.a,{maxW:["10rem","40rem"],minH:"3rem",children:A[W]&&Object(k.jsx)("q",{children:null===(t=A[W])||void 0===t?void 0:t.question})}),A[W]&&Object(k.jsxs)(j.a,{pt:5,children:[Object(k.jsx)(u.a,{id:"colors",minH:3,borderRadius:10,className:"".concat(A[W].low).concat(A[W].high)}),Object(k.jsxs)(j.a,{direction:["column","row"],children:[Object(k.jsx)(b.a,{isActive:-2===A[W].response,colorScheme:"red",onClick:function(){return U(-2)},children:"Strongly Disagree"}),Object(k.jsx)(b.a,{isActive:-1===A[W].response,colorScheme:"pink",onClick:function(){return U(-1)},children:"Disagree"}),Object(k.jsx)(b.a,{isActive:0===A[W].response,colorScheme:"blue",onClick:function(){return U(0)},children:"Ambivalent"}),Object(k.jsx)(b.a,{isActive:1===A[W].response,colorScheme:"teal",onClick:function(){return U(1)},children:"Agree"}),Object(k.jsx)(b.a,{isActive:2===A[W].response,colorScheme:"green",onClick:function(){return U(2)},children:"Strongly Agree"})]})]}),Object(k.jsxs)(x.a,{pt:5,children:[Object(k.jsx)(b.a,{isDisabled:0===W,colorScheme:"purple",leftIcon:Object(k.jsx)(O.a,{}),onClick:function(){return q(W-1)},children:"Back"}),Object(k.jsx)(b.a,{index:W,isDisabled:W>=A.length,colorScheme:"purple",rightIcon:Object(k.jsx)(f.a,{}),onClick:function(){return U(null)},children:"No Opinion"})]})]})}),Object(k.jsx)(b.a,{id:"qVis",title:"".concat(R?"Hide":"Show"," Questions"),maxH:"1rem",minW:"50%",margin:"auto",onClick:function(){return G((function(e){return!e}))},children:R?Object(k.jsx)(p.a,{}):Object(k.jsx)(m.a,{})}),Object(k.jsx)(v.a,{colors:y,attrs:w,scores:X},"chart")]})}}).call(this,n(96).Buffer)},85:function(e,t,n){"use strict";var c=n(6),r=n(13),s=n(30),i=n.n(s),o=i.a.mark(a);function a(){var e,t,n,c,r=arguments;return i.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:e=r.length>0&&void 0!==r[0]?r[0]:0,t=r.length>1&&void 0!==r[1]?r[1]:1,n=r.length>2&&void 0!==r[2]?r[2]:0,c=0;case 4:if(!(c<e)){s.next=9;break}case 5:return s.next=7,n+c++*t;case 7:s.next=4;break;case 9:case"end":return s.stop()}}),o)}n(101);var l=n(2);t.a=function(e){var t=e.colors,n=e.attrs,s=e.scores,i=Object.keys(t).length,o=100,j=2*Math.PI/i,u=Math.PI/2,h=Object(r.a)(a(i,j,u)),d=Object.keys(t).reduce((function(e,t,n){return e[t]=h[n],e}),{});return Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"100%",height:"100%",viewBox:"-110 -110 220 220",version:"1.1",id:"5-color-radar",children:[Object(l.jsx)("title",{children:"Magic: The Gathering Five Color Personality Radar Chart"}),Object(l.jsxs)("g",{transform:"translate(0, ".concat((o-o*Math.cos(j/2))/2,")"),children:[Object(r.a)(a(10,1,1)).map((function(e){var r=10===e,s=10*e,i=Object.entries(d).map((function(e){var t=Object(c.a)(e,2),n=t[0],r=t[1];return{x:s*Math.cos(r),y:s*-Math.sin(r),key:n}})),o=.7;return Object(l.jsxs)(l.Fragment,{children:[r&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("path",{id:"web",d:i.map((function(e){return"M0,0l".concat(e.x,",").concat(e.y)})).join("")},"web"),i.map((function(e,c){return Object(l.jsxs)("g",{id:n[e.key],children:[Object(l.jsx)("circle",{cx:o*e.x,cy:o*e.y,r:40,mask:'url("#surround")',fill:Object.values(t)[c],children:Object(l.jsx)("title",{children:n[e.key]})}),Object(l.jsx)("circle",{cx:o*e.x,cy:o*e.y,r:40,mask:'url("#outside")',fill:"none",stroke:"black",strokeWidth:5,children:Object(l.jsx)("title",{children:n[e.key]})})]},n[e.key])}))]}),Object(l.jsx)("g",{id:"poly".concat(e),children:r?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("defs",{children:[Object(l.jsx)("polygon",{id:"outer",points:i.map((function(e){return"".concat(e.x,",").concat(e.y)})).join(" ")}),Object(l.jsx)("mask",{id:"surround",children:Object(l.jsx)("use",{id:"surrmask",href:"#outer"})}),Object(l.jsx)("mask",{id:"outside",children:Object(l.jsx)("use",{id:"outmask",href:"#outer"})})]}),Object(l.jsx)("use",{href:"#outer",className:"ring"})]}):Object(l.jsx)("polygon",{className:"ring ",points:i.map((function(e){return"".concat(e.x,",").concat(e.y)})).join(" ")})},"poly".concat(e))]})})),function(){var e=Object.entries(s).map((function(e,t){var n=Object(c.a)(e,2),r=n[0],s=n[1]*o;return{x:s*Math.cos(d[r]),y:s*-Math.sin(d[r]),key:r}}));return Object(l.jsxs)("g",{children:[Object(l.jsxs)("defs",{children:[Object(l.jsx)("polygon",{id:"spread",points:e.map((function(e){return"".concat(e.x,",").concat(e.y)})).join(" ")}),Object(l.jsx)("clipPath",{id:"spreadclip",children:Object(l.jsx)("use",{href:"#spread",transform:"translate(".concat(o,",").concat(o,")")})})]},"defs"),Object(l.jsx)("foreignObject",{x:-100,y:-100,width:200,height:200,children:Object(l.jsx)("div",{id:"coloredspread"},"coloredspread")},"foreign"),Object(l.jsx)("use",{href:"#spread",fill:"none",stroke:"black"},"use"),e.map((function(e,c){return Object(l.jsx)("circle",{cx:e.x,cy:e.y,r:2.5,className:"point",style:{fill:t[e.key]},children:Object(l.jsx)("title",{children:"".concat(n[e.key],": ").concat((100*s[e.key]).toFixed(1),"%")})},e.key)}))]})}()]})]})}},95:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.2f92913e.chunk.js.map