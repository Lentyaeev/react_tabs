(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){"use strict";c.r(e);var n=c(3),i=c.n(n),a=c(4),s=c(1),d=(c(9),c(10),c(0)),b=function(t){var e,c=t.tabs,n=t.selectedTab,i=t.onTabSelected,a=c.some((function(t){return t.id===n}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:c.map((function(t,e){return Object(d.jsx)("li",{className:t.id===n||!a&&!e?"is-active":"",children:Object(d.jsx)("a",{href:"#".concat(t.id),onClick:function(e){e.preventDefault(),n!==t.id&&i(t)},children:t.title})},t.id)}))})}),Object(d.jsx)("div",{className:"block","data-cy":"tab-content",children:null===(e=c.find((function(t){return t.id===n})))||void 0===e?void 0:e.content})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var t=Object(s.useState)(l[0]),e=Object(a.a)(t,2),c=e[0],n=e[1];return Object(d.jsxs)("div",{className:"section",children:[Object(d.jsxs)("h1",{className:"title",children:["Selected tab is\xa0",c.title]}),Object(d.jsx)(b,{tabs:l,selectedTab:c.id,onTabSelected:n})]})};i.a.render(Object(d.jsx)(o,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3b59de1f.chunk.js.map