(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8367:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(3035)}])},3035:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(4924),s=r(6042);function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=r(5893),c=r(7294),u=r(9534),d=function(e){var t=e.label,r=e.name,n=e.value,l=e.handleChange,i=(0,u.Z)(e,["label","name","value","handleChange"]);return(0,o.jsx)("div",{children:(0,o.jsx)("input",a((0,s.Z)({value:n,name:r,onChange:l},i),{className:"bg-gray-100 focus:outline-none rounded-md h-[41px] mb-[20px] w-full px-[15px]",placeholder:t,required:!0}))})},m=r(7731),x=r(6542),p=r(3820),f=r(9473),h=r(11);var g=function(e){var t=e.icon,r=void 0===t?"M4.5 12.75l6 6 9-13.5":t,n=e.message,s=e.color;return(0,o.jsxs)("div",{className:"flex items-center z-10",children:[(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6  ".concat(s),children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:r})}),(0,o.jsx)("p",{className:s,children:n})]})},v=r(2920);r(3261),r(3509);function b(){var e=i((0,c.useState)({}),2),t=e[0],r=e[1],l=i((0,c.useState)({}),2),u=l[0],b=l[1],j=(0,f.I0)(),y=function(e){var t={};e.firstname||(t.firstname="Firstname is required"),e.email||(t.email="Email is required"),e.message||(t.message="Message is required"),Object.keys(t).length>0?b(t):j((0,h.Wx)(e)).then((function(e){r({firstname:"",email:"",message:""}),b({firstname:"",email:"",message:""}),(0,v.Am)((0,o.jsx)(g,{message:"Message sent successfully!",color:"text-green-700"}))}))},w=function(e){r(a((0,s.Z)({},t),(0,n.Z)({},e.target.name,e.target.value)))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"bg-[#d8aa6e] md:pb-[70px] about",children:[(0,o.jsx)(x.Z,{}),(0,o.jsxs)("div",{className:"py-[40px]",children:[(0,o.jsx)("div",{className:"pt-[130px] md:pt-[180px] text-center text-5xl about ",children:p.fd[0].heading}),(0,o.jsxs)("div",{className:"bg-none lg:bg-[#76a641] my-14 mx-auto max-w-5xl h-[600px] flex items-center",children:[(0,o.jsx)("div",{className:"hidden lg:flex md:items-center md:justify-center md:p-10",children:(0,o.jsx)("img",{className:"",src:p.fd[0].img,alt:"contact-us"})}),(0,o.jsx)("div",{className:"mx-auto bg-white md:w-[573px] lg:rounded-tl-[51px] lg:rounded-bl-[51px] lg:rounded-tr-[0px] lg:rounded-br-[0px] rounded-3xl h-full items-center flex",children:(0,o.jsx)("div",{className:"sm:px-[120px] px-[30px] items-center text-center m-auto",children:(0,o.jsxs)("div",{className:"",children:[(0,o.jsx)("img",{className:"w-[150px] m-auto pb-[20px]",src:p.fd[0].logo,alt:"contact-us"}),(0,o.jsx)("div",{className:"text-3xl pb-[20px]",children:p.fd[0].tittle}),(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(t)},children:[(0,o.jsx)(d,{label:"Enter Full Name",name:"firstname",handleChange:w,value:t.firstname,type:"text"}),(0,o.jsx)("p",{className:"",children:u.firstname}),(0,o.jsx)(d,{label:"Enter Email Address",name:"email",handleChange:w,value:t.email,type:"email"}),(0,o.jsx)("p",{className:"",children:u.email}),(0,o.jsxs)("div",{className:"rounded-md m-auto mb-[20px]",children:[(0,o.jsx)("textarea",{className:"border h-[100px] w-full py-[10px] px-[15px] rounded-md bg-gray-100 focus:outline-none ",name:"message",id:"",cols:"48",rows:"3",type:"text",placeholder:"Enter Your Messgae",onChange:w,value:t.message}),(0,o.jsx)("p",{className:"",children:u.message})]}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{className:"outline outline-slate-200 outline-1 hover:bg-[#699BF7] hover:text-white h-[41px] rounded-md text-sm w-full",type:"submit",children:p.fd[0].btn})})]})]})})})]})]})]}),(0,o.jsx)(m.Z,{})]})}},6542:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893),s=(r(7294),r(1664)),a=r.n(s),l=r(9470),i=r.n(l),o=r(3820),c=r(9473);function u(){(0,c.I0)();return(0,n.jsx)("div",{className:' bg-[url("/images/menugreen.png")] w-[100%] bg-cover md:mt-[-40px] md:h-[210px] bg-no-repeat fixed z-10',children:(0,n.jsxs)("div",{className:"flex md:justify-between mx-[60px] justify-center items-center md:mt-[2.5%]",children:[(0,n.jsx)(i(),{bottom:!0,children:(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)("img",{className:"md:w-[300px] w-[200px]",src:o._O[7].logo,alt:"about-img"})})}),(0,n.jsx)(i(),{bottom:!0,children:(0,n.jsx)("div",{className:"menus hidden md:block cursor-pointer hover:text-black",children:(0,n.jsxs)("ul",{className:"flex gap-12 text-[28px] font-extrabold text-yellow-400",children:[(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)("li",{className:"hover:text-white hover:scale-125 transition duration-500 ease-in-out ",children:o._O[7].link1})}),(0,n.jsx)(a(),{href:"/aboutus",children:(0,n.jsx)("li",{className:"hover:text-white hover:scale-125 transition duration-500 ease-in-out",children:o._O[7].link2})}),(0,n.jsx)(a(),{href:"/contact",children:(0,n.jsx)("li",{className:"hover:text-white hover:scale-125 transition duration-500 ease-in-out",children:o._O[7].link3})})]})})})]})})}},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(s),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},l.apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r};function o(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),o(e.child))}))}function c(e){return function(t){return n.createElement(u,l({attr:l({},e.attr)},t),o(e.child))}}function u(e){var t=function(t){var r,s=e.attr,a=e.size,o=e.title,c=i(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,c,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(s)}}},function(e){e.O(0,[445,874,168,731,774,888,179],(function(){return t=8367,e(e.s=t);var t}));var t=e.O();_N_E=t}]);