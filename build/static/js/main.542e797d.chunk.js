(this["webpackJsonpreact-practice-movie"]=this["webpackJsonpreact-practice-movie"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/image.e2705afd.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/image.e2705afd.jpg"},29:function(e,t,a){e.exports=a(54)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=(a(34),a(35),a(36),a(9));a(37);function s(){return r.a.createElement("ul",{className:"nav nav-pills my-1",id:"pills-tab"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{to:"/main",className:"nav-link",id:"pills-home-tab","data-toggle":"pill"},"Main")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{className:"nav-link",id:"pills-profile-tab","data-toggle":"pill",to:"/popular"},"Popular")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{className:"nav-link",id:"pills-contact-tab","data-toggle":"pill",to:"/top"},"Top Rated")))}function i(e){return r.a.createElement("nav",{className:"navbar navbar-light bg-light justify-content-between flex-nowrap"},r.a.createElement(s,null))}var u=a(7),m=a.n(u),f=a(3),p=a(10),d=a(2);a(43),a(44);function v(e){var t=e.title,a=e.overview,n=e.poster,c=e.pathTo;return r.a.createElement("div",{className:"card col-3 mb-5",style:{width:300}},r.a.createElement(o.b,{to:c},r.a.createElement("img",{src:n,className:"card-img-top",alt:"sorry"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement("p",{className:"card-text"},a),r.a.createElement(o.b,{to:c,className:"btn btn-primary"},"Read more...")))}var b="https://api.themoviedb.org/3/",E="844dba0bfd8f3a4f3799f6130ef9e335",g=function(e){return"".concat(b,"search/movie?api_key=").concat(E,"&query=").concat(e)},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"".concat(b,"movie/popular?api_key=").concat(E,"&page=").concat(e)},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"".concat(b,"movie/top_rated?api_key=").concat(E,"&page=").concat(e)},O=function(e){return"".concat(b,"movie/").concat(e,"/videos?api_key=").concat(E)},N=a(26),x=a.n(N);function y(e){var t=e.slice(0,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:150,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:190;return Math.floor(e+Math.random()*(t-e))}()),a=t.lastIndexOf(".");return t.slice(0,a)+"...."}function w(e){var t=e.results,a=e.path,n=[];return t.map((function(e){if(n.find((function(t){return t===e.id})))return"";n.push(e.id);var t=e.poster_path?"".concat("http://image.tmdb.org/t/p/").concat("w500").concat(e.poster_path):x.a,c=e.overview.length>150?y(e.overview):e.overview;return r.a.createElement(v,{title:e.title,key:e.id,overview:c,poster:t,pathTo:"".concat(a).concat(e.id)})}))}a(45);function k(e,t){localStorage.setItem(e,JSON.stringify(t))}function S(e){var t=JSON.parse(localStorage.getItem(e));return null!=t&&t}a(46);function P(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}a(47);var T=function(){window.scrollTo({top:0,behavior:"smooth"})};function R(){return r.a.createElement("div",{className:"arrow",onClick:T})}var _=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(1),o=Object(d.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)(!0),v=Object(d.a)(u,2),b=v[0],E=v[1],g=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h(s));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,k("POPULAR",{results:[].concat(Object(f.a)(a),Object(f.a)(n.results)),page:s+1,loading:!1}),c([].concat(Object(f.a)(a),Object(f.a)(n.results))),i(s+1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(S("POPULAR")){var e=S("POPULAR");c(e.results),i(e.page),E(!1)}else g(),E(!1)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-1 mx-auto"},"Popular"),b?r.a.createElement(P,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card-deck row justify-content-center my-5"},r.a.createElement(w,{results:a,path:"/"}))),r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement("button",{className:"btn btn-info mx-auto center",onClick:g},"Load more.."))))};a(48);var C=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(1),o=Object(d.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)(!0),v=Object(d.a)(u,2),b=v[0],E=v[1],g=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j(s));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,k("TOP",{results:[].concat(Object(f.a)(a),Object(f.a)(n.results)),page:s+1,loading:!1}),c([].concat(Object(f.a)(a),Object(f.a)(n.results))),i(s+1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(S("TOP")){var e=S("TOP");c(e.results),i(e.page),E(!1)}else g(),E(!1)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-1 mx-auto"},"Top Rated"),b?r.a.createElement(P,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card-deck row justify-content-center my-5"},r.a.createElement(w,{results:a,path:"/"}))),r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement("button",{className:"btn btn-info mx-auto center",onClick:g},"Load more.."))))},L=(a(49),a(27)),F=a.n(L),I=a(18);var M=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(d.a)(o,2),i=s[0],u=s[1],v=Object(n.useState)(["success","warning","danger","primary","info","secondary","dark"]),g=Object(d.a)(v,1)[0],h=Object(n.useState)([]),j=Object(d.a)(h,2),N=j[0],x=j[1];Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(m.a.mark((function e(){var t,n,r,c,o,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(b,"movie/").concat(a,"?api_key=").concat(E),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.next=9,fetch(O(a));case 9:return c=e.sent,e.next=12,c.json();case 12:o=e.sent,s=o.results[0]?o.results[0].key:"7R1N-8SoqcM",k(a,{results:r,trailer:s}),l(r),u(s);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var a=e.match.params.movie,n=S(a);n?(l(n.results),u(n.trailer)):function(){t.apply(this,arguments)}()}),[e.match.params.movie]),Object(n.useEffect)((function(){var e=[];if(c.genres){for(var t=function(t){var n=Math.round(6*Math.random());e.some((function(e){return n===e}))?t--:e.push(n),a=t},a=0;a<c.genres.length;a++)t(a);var n=c.genres.map((function(t,a){return r.a.createElement(I.b,{draggableId:a+t.name,index:a,key:a},(function(n){return r.a.createElement("span",Object.assign({},n.draggableProps,n.dragHandleProps,{ref:n.innerRef,key:a,className:"badge badge-pill badge-".concat(g[e[a]])}),t.name)}))}));x(n)}}),[g,c]);var y=function(){return Math.round(c.vote_average)};return r.a.createElement("div",{className:"container row new-row"},i?r.a.createElement("img",{src:c.poster_path?"".concat("http://image.tmdb.org/t/p/").concat("w780").concat(c.poster_path):F.a,className:"rounded col-xl-4 offset-md-1",alt:"movie-post"}):r.a.createElement(P,null),r.a.createElement("div",{className:"col-xl-4 offset-xl-1"},r.a.createElement("h1",null,c.title),r.a.createElement("hr",null),r.a.createElement("strong",null," Description: "),r.a.createElement("p",null,c.overview||"loading.."),r.a.createElement("hr",null),r.a.createElement(I.a,{onDragEnd:function(e){var t=e.destination,a=e.source;if(t&&t.index!==a.index){var n=Object(f.a)(N),r=n[a.index];n.splice(a.index,1),n.splice(t.index,0,r),x(n)}}},r.a.createElement("div",null,r.a.createElement("strong",null,"Generes: "),N.length?"":"loading...",r.a.createElement(I.c,{droppableId:"droppable",direction:"horizontal"},(function(e){return r.a.createElement("span",Object.assign({ref:e.innerRef},e.droppableProps),N,e.placeholder)})))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("strong",null,"Rate: "),r.a.createElement("i",null,y()||"?","/10")),function(){for(var e=y()||0,t=[],a=0;a<10;a++)t[a]=r.a.createElement("span",{key:a,className:"fa fa-star".concat(a<e?" checked":"")});return t}(),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("strong",null," Trailer: ")),r.a.createElement("div",{className:"trailer"},i?r.a.createElement("iframe",{frameBorder:"0",allowFullScreen:"1",title:"YouTube video player",src:"https://www.youtube.com/embed/".concat(i,"?controls=1")}):"loading...")))},A=a(11);a(51),a(52);function D(e){var t=e.handlerLoading,a=e.handlerGoUp,n=e.leftData,c=e.data;return void 0===c||c?n()?r.a.createElement("button",{className:"btn btn-info mx-auto center",onClick:t},"Load more.."):r.a.createElement("button",{className:"btn btn-danger mx-auto center",onClick:a},"Thats all, go to up? "):""}var U;a(53);function H(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("h1",{className:"display-1"},"not found"))}var J=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(1),o=Object(d.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)(void 0),v=Object(d.a)(u,2),b=v[0],E=v[1],h=Object(n.useState)(0),j=Object(d.a)(h,2),O=j[0],N=j[1];Object(n.useEffect)((function(){var e=S("SEARCH");e&&(E(e.results),N(e.allPages),c(e.inputValue))}),[]);var x=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,r,c,l,o,u,p=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=p.length>1&&void 0!==p[1]&&p[1])){e.next=13;break}return n="".concat(g(t),"&page=").concat(a),e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,E([].concat(Object(f.a)(b),Object(f.a)(c.results))),i(s+1),e.next=23;break;case 13:return e.next=15,fetch(g(t));case 15:return l=e.sent,e.next=18,l.json();case 18:o=e.sent,u={results:Object(f.a)(o.results),allPages:o.total_pages,inputValue:t},E(u.results),N(u.allPages),k("SEARCH",u);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form-inline order-0 center",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",value:a,placeholder:"search film","aria-label":"Search",onChange:function(e){var t=e.target;if(c(t.value),clearTimeout(U),""===t.value)return E(void 0),N(0),i(1),void localStorage.removeItem("SEARCH");U=setTimeout(x.bind(null,t.value),500)}})),b?r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card-deck row justify-content-center my-5"},b.length>0?r.a.createElement(w,{results:b,path:"/"}):r.a.createElement(H,null))):"",b?r.a.createElement(D,{handlerLoading:function(){x(a,s+1)},handlerGoUp:function(){window.scrollTo({top:0,behavior:"smooth"})},leftData:function(){return O>s},data:b.length}):"")};function G(){return r.a.createElement("div",null,r.a.createElement(J,null))}var q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement(A.d,null,r.a.createElement(A.b,{path:"/main",exact:!0,component:G}),r.a.createElement(A.b,{path:"/popular/",component:_}),r.a.createElement(A.b,{path:"/top",component:C}),r.a.createElement(A.b,{path:"/:movie",component:M}),r.a.createElement(A.a,{to:"/main"})))};l.a.render(r.a.createElement(o.a,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.542e797d.chunk.js.map