function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,i,o,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,u=setTimeout(T,t),l?y(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function T(){var e=v();if(S(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-f);return s?m(n,o-(e-c)):n}(e))}function h(e){return u=void 0,p&&r?y(e):(r=i=void 0,a)}function w(){var e=v(),n=S(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(T,t),y(f)}return void 0===u&&(u=setTimeout(T,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=i=u=void 0},w.flush=function(){return void 0===u?a:h(v())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form input"),S=document.querySelector(".feedback-form textarea"),T={email:"",message:""};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(j.value=e.email||"",S.value=e.message||"")}(),y.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),y.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify({email:j.value,message:S.value}))}),500));
//# sourceMappingURL=03-feedback.852b700b.js.map
