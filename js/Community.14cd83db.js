"use strict";(self.webpackChunkreact_template_h5=self.webpackChunkreact_template_h5||[]).push([[778],{25677:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var a=n(95266),r=n(67294),c=(n(41539),n(54747),n(28222)),o=n.n(c),l=n(80222),i=n.n(l),u=n(14418),m=n.n(u),f=n(8446),s=n.n(f),v=n(66870),d=n.n(v),p=n(29747),h=n.n(p),b=n(96718),E=n.n(b),g=n(73126),y=n(44845),N=n(39022),j=n.n(N),C=n(71649),k=n(82737),O=n.n(k),Z=(n(39714),n(74916),Object.prototype.toString);function w(e){return"[object Object]"===Z.call(e)}function x(e){return"[object String]"===Z.call(e)}var S=n(25108);function _(){for(var e=arguments,t=arguments.length,n=[],a=function(){var t,a=r<0||e.length<=r?void 0:e[r];if(!a)return"continue";x(a)?n.push(a):(t=a,"[object Array]"===Z.call(t)?n=j()(n).call(n,a):w(a)?o()(a).forEach((function(e){a[e]&&n.push(e)})):S.error(!0,"arguments must be one of string/array/object."))},r=0;r<t;r++)a();return(0,C.Z)(new(O())(n)).join(" ")}var P=n(67294);function F(e,t){var n=o()(e);if(i()){var a=i()(e);t&&(a=m()(a).call(a,(function(t){return s()(e,t).enumerable}))),n.push.apply(n,a)}return n}var G={getPopupContainer:function(){return document.body},size:"default",renderEmpty:function(e){return P.createElement("div",null,"none")}};var M=(0,r.createContext)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){(0,y.Z)(e,t,n[t])})):d()?h()(e,d()(n)):F(Object(n)).forEach((function(t){E()(e,t,s()(n,t))}))}return e}({getPrefixCls:function(e,t){var n;return j()(n="".concat(t||"arco","-")).call(n,e)}},G));function R(e,t){var n=o()(e);if(i()){var a=i()(e);t&&(a=m()(a).call(a,(function(t){return s()(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,y.Z)(e,t,n[t])})):d()?h()(e,d()(n)):R(Object(n)).forEach((function(t){E()(e,t,s()(n,t))}))}return e}({},e);return t.forEach((function(e){e in n&&delete n[e]})),n}function A(e,t){var n=o()(e);if(i()){var a=i()(e);t&&(a=m()(a).call(a,(function(t){return s()(e,t).enumerable}))),n.push.apply(n,a)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,y.Z)(e,t,n[t])})):d()?h()(e,d()(n)):A(Object(n)).forEach((function(t){E()(e,t,s()(n,t))}))}return e}var q=n(11882),B=n.n(q);var D=n(67294);function H(e,t){var n=o()(e);if(i()){var a=i()(e);t&&(a=m()(a).call(a,(function(t){return s()(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,y.Z)(e,t,n[t])})):d()?h()(e,d()(n)):H(Object(n)).forEach((function(t){E()(e,t,s()(n,t))}))}return e}var J={datetime:"left",actions:"left"},K={align:"left"};function L(e,t){var n,a,c,l,i,u,m=(0,r.useContext)(M),f=m.getPrefixCls,s=m.componentConfig,v=m.rtl,d=function(e,t,n){var a=e._ignorePropsFromGlobal,c=(0,r.useMemo)((function(){return W(W({},t),a?{}:n)}),[t,n,a]);return(0,r.useMemo)((function(){var t=z(e,["_ignorePropsFromGlobal"]);for(var n in c)void 0===t[n]&&(t[n]=c[n]);return t}),[e,c])}(e,K,null==s?void 0:s.Comment),p=f("comment"),h=d.actions,b=d.author,E=d.avatar,N=d.content,C=d.datetime,k=I(I({},J),w(d.align)?d.align:{datetime:d.align,actions:d.align});return D.createElement("div",(0,g.Z)({ref:t,className:_("".concat(p),(0,y.Z)({},"".concat(p,"-rtl"),v),d.className),style:d.style},(u={},(i=d)&&o()(i).forEach((function(e){var t=String(e);0===B()(t).call(t,"data-")&&(u[t]=i[t]),0===B()(t).call(t,"aria-")&&(u[t]=i[t])})),u)),E&&D.createElement("div",{className:_("".concat(p,"-avatar"))},x(E)?D.createElement("img",{src:E,alt:"comment-avatar"}):E),D.createElement("div",{className:"".concat(p,"-inner")},D.createElement("div",{className:"".concat(p,"-inner-content")},(b||C)&&D.createElement("div",{className:j()(n=j()(a="".concat(p,"-title ")).call(a,p,"-title-align-")).call(n,k.datetime)},b&&D.createElement("span",{className:"".concat(p,"-author")},b),C&&D.createElement("span",{className:"".concat(p,"-datetime")},C)),N&&D.createElement("div",{className:"".concat(p,"-content")},N),h&&D.createElement("div",{className:j()(c=j()(l="".concat(p,"-actions ")).call(l,p,"-actions-align-")).call(c,k.actions)},h)),d.children&&D.createElement("div",{className:"".concat(p,"-inner-comment")},d.children)))}var Q=(0,r.forwardRef)(L);Q.displayName="Comment";var T=Q,U=n(67294),V=function(){var e=(0,r.useState)(!1),t=(0,a.Z)(e,2),n=t[0],c=t[1],o=(0,r.useState)(!1),l=(0,a.Z)(o,2),i=l[0],u=l[1],m=[U.createElement("button",{className:"custom-comment-action",key:"heart",onClick:function(){return c(!n)}},n?U.createElement("div",{style:{color:"#f53f3f"}},"like"):U.createElement("div",null,"like"),83+(n?1:0)),U.createElement("button",{className:"custom-comment-action",key:"star",onClick:function(){return u(!i)}},i?U.createElement("div",{style:{color:"#ffb400"}},"star"):U.createElement("div",null,"star"),3+(i?1:0)),U.createElement("button",{className:"custom-comment-action",key:"reply"},"Reply")];return U.createElement(T,{actions:m,author:"Socrates",className:"com-main",avatar:U.createElement("img",{style:{maxWidth:"100%",height:"200px"},alt:"avatar",src:"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"}),content:U.createElement("div",null,"Community"),datetime:"1 hour"})}}}]);