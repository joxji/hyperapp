!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd||n(e.hyperapp={})}(this,function(e){"use strict";function n(e,n){for(var r,t=[],o=[],i=arguments.length;i-- >2;)t.push(arguments[i]);for(;t.length;)if(Array.isArray(r=t.pop()))for(i=r.length;i--;)t.push(r[i]);else null==r||!0===r||!1===r||o.push("number"==typeof r?r+="":r);return"string"==typeof e?{type:e,props:n||{},children:o}:e(n||{},o)}e.h=n,e.app=function(e,r){function t(e,r){return e&&n(e.tagName.toLowerCase(),{},r.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:t(e,r)}))}function o(e,n){for(var r in n)e[r]=n[r];return e}function i(e,n){return o(o({},e),n)}function u(e,n,r){var t={};return 0===e.length?n:(t[e[0]]=1<e.length?u(e.slice(1),n,r[e[0]]):n,i(r,t))}function p(e,n){for(var r=0;r<e.length;r++)n=n[e[r]];return n}function l(e){return"function"==typeof e}function f(e,n,r,t){for(var o in r)l(r[o])?function(r,o){n[r]=function(r){return e=p(t,b),l(r=o(r))&&l(r=r(e))&&(r=r(n)),r&&r!==e&&!r.then&&y(b=u(t,i(e,r),b)),r}}(o,r[o]):f(e[o]||(e[o]={}),n[o]={},r[o],t.concat(o))}function c(e){if(e&&e.props)return e.props.key}function s(e,n,r,t){if("key"===n);else if("style"===n)for(var o in i(t,r=r||{}))e.style[o]=null==r[o]?"":r[o];else if("namespace"!==n){try{e[n]=null==r?"":r}catch(e){}l(r)||(null==r||!1===r?e.removeAttribute(n):e.setAttribute(n,r))}}function a(e,n){if("string"==typeof e)var r=document.createTextNode(e);else{n=k[e.type]||e.props.namespace||n||k.xhtml,r=document.createElementNS(n,e.type),e.props.oncreate&&x.push(function(){e.props.oncreate(r)});for(var t=0;t<e.children.length;t++)r.appendChild(a(e.children[t],n));for(var t in e.props)s(r,t,e.props[t])}return r}function h(e,n,r){function t(){e.removeChild(n)}r&&r.onremove?r.onremove(n,t):t()}function d(e,n,r,t,o,u){if(r===t);else if(null==r)n=e.insertBefore(a(t,o),n);else if(null!=t.type&&t.type===r.type){!function(e,n,r){for(var t in i(n,r)){var o=r[t],u="value"===t||"checked"===t?e[t]:n[t];o!==u&&s(e,t,o,u)}r.onupdate&&x.push(function(){r.onupdate(e,n)})}(n,r.props,t.props),o=n.namespaceURI||k.xhtml;for(var p=t.children.length,l=r.children.length,f={},v=[],y={},m=0;m<l;m++){var g=v[m]=n.childNodes[m];null!=(C=c(b=r.children[m]))&&(f[C]=[g,b])}m=0;for(var w=0;w<p;){g=v[m];var b=r.children[m],N=t.children[w];if(y[C=c(b)])m++;else{var A=c(N),B=f[A]||[];null==A?(null==C&&(d(n,g,b,N,o),w++),m++):(C===A?(d(n,B[0],B[1],N,o),m++):B[0]?(n.insertBefore(B[0],g),d(n,B[0],B[1],N,o)):d(n,g,null,N,o),w++,y[A]=N)}}for(;m<l;){var C;null==(C=c(b=r.children[m]))&&h(n,v[m],b.props),m++}for(var m in f){var T=(B=f[m])[1];y[T.props.key]||h(n,B[0],T.props)}}else n&&t!==n.nodeValue&&("string"==typeof t&&"string"==typeof r?n.nodeValue=t:(n=e.insertBefore(a(t,o),u=n),h(e,u,r.props)));return n}function v(n){for(m=!m,l(n=e.view(b))&&(n=n(N)),m||(g=d(r,g,w,w=n));n=x.pop();)n()}function y(){e.view&&!m&&setTimeout(v,m=!m)}var m,g=(r=r||document.body).children[0],w=t(g,[].map),x=[],b=e.state||{},N={},k={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml"};return y(f(b,N,e.actions,[])),N}});
//# sourceMappingURL=hyperapp.js.map