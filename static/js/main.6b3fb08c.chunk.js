(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(2),l=a.n(s),o=a(3),r=a(4),i=a(6),b=a(5),d=(a(12),a(13),function(t){var e=t.selectedTabId,a=t.tabs,n=t.onTabSelected;return c.a.createElement("div",{className:"tabs"},c.a.createElement("ul",{className:"tabs__list"},a.map((function(t){return c.a.createElement("li",{key:t.id,className:"tabs__item"},c.a.createElement("button",{type:"button",className:"tabs__button",onClick:function(){return n(t.id)}},t.title))}))),c.a.createElement("div",{className:"tabs__content"},a.find((function(t){return t.id===e})).content))}),u=[{id:"tab-1",title:"Home",content:"Some text 1"},{id:"tab-2",title:"About",content:"Some text 2"},{id:"tab-3",title:"Contacts",content:"Some text 3"}],m=function(t){Object(i.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={tabs:[].concat(u),selectedTabId:u[0].id},t.onTabSelected=function(e){t.setState({selectedTabId:e})},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this.state,e=t.tabs,a=t.selectedTabId;return c.a.createElement("div",{className:"app"},c.a.createElement("h1",{className:"app__title"},"Selected tab is: ".concat(a)),c.a.createElement(d,{selectedTabId:a,tabs:e,onTabSelected:this.onTabSelected}))}}]),a}(c.a.Component);l.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.6b3fb08c.chunk.js.map