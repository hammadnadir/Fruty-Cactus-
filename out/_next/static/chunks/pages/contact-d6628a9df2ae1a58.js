(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8367:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(570)}])},570:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return j}});var s=n(7568),r=n(4924),a=n(6042);function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var l=n(655),c=n(5893),o=n(7294),u=n(9534),d=function(e){var t=e.label,n=e.name,s=e.value,r=e.handleChange,l=(0,u.Z)(e,["label","name","value","handleChange"]);return(0,c.jsx)("div",{children:(0,c.jsx)("input",i((0,a.Z)({value:s,name:n,onChange:r},l),{className:"bg-gray-100 focus:outline-none rounded-md h-[41px] mb-[20px] w-full px-[15px]",placeholder:t,required:!0}))})},m=n(7731),x=n(6542),h=n(9473),p=n(11);var f=function(e){var t=e.icon,n=void 0===t?"M4.5 12.75l6 6 9-13.5":t,s=e.message,r=e.color;return(0,c.jsxs)("div",{className:"flex items-center z-10",children:[(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6  ".concat(r),children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:n})}),"\xa0\xa0\xa0\xa0",(0,c.jsx)("p",{className:r,children:s})]})},v=n(2920),g=!0;function j(){var e,t,n,u,g,j=(0,o.useState)({}),b=j[0],w=j[1],N=(0,o.useState)({}),y=N[0],O=N[1],_=(0,h.I0)(),k=function(e){var t={};e.firstname||(t.firstname="Firstname is required"),e.email||(t.email="Email is required"),e.message||(t.message="Message is required"),Object.keys(t).length>0?O(t):_((0,p.Wx)(e)).then((function(e){w({firstname:"",email:"",message:""}),O({firstname:"",email:"",message:""}),(0,v.Am)((0,c.jsx)(f,{message:"Message sent successfully!",color:"text-green-700"}))}))},E=function(e){w(i((0,a.Z)({},b),(0,r.Z)({},e.target.name,e.target.value)))},P=(0,o.useState)([]),C=P[0],S=P[1],Z=function(){var e=(0,s.Z)((function(){var e;return(0,l.__generator)(this,(function(t){switch(t.label){case 0:return[4,fetch("http://dev.biztekapps.com:8051/api/contact")];case 1:return[4,(e=t.sent()).json()];case 2:return S.apply(void 0,[t.sent()]),console.log(e),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){Z()}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"bg-[#d8aa6e] md:pb-[70px] about",children:[(0,c.jsx)(x.Z,{}),(0,c.jsxs)("div",{className:"py-[40px]",children:[(0,c.jsx)("div",{className:"pt-[130px] md:pt-[180px] text-center text-5xl about ",children:null===(e=C[0])||void 0===e?void 0:e.title}),(0,c.jsxs)("div",{className:"bg-none lg:bg-[#76a641] my-14 mx-auto max-w-5xl h-[600px] flex items-center",children:[(0,c.jsx)("div",{className:"hidden lg:flex md:items-center md:justify-center md:p-10",children:(0,c.jsx)("img",{className:"",src:null===(t=C[0])||void 0===t?void 0:t.image,alt:"contact-us"})}),(0,c.jsx)("div",{className:"mx-auto bg-white md:w-[573px] lg:rounded-tl-[51px] lg:rounded-bl-[51px] lg:rounded-tr-[0px] lg:rounded-br-[0px] rounded-3xl h-full items-center flex",children:(0,c.jsx)("div",{className:"sm:px-[120px] px-[30px] items-center text-center m-auto",children:(0,c.jsxs)("div",{className:"",children:[(0,c.jsx)("img",{className:"w-[150px] m-auto pb-[20px]",src:null===(n=C[0])||void 0===n?void 0:n.logo,alt:"contact-us"}),(0,c.jsx)("div",{className:"text-3xl pb-[20px]",children:null===(u=C[0])||void 0===u?void 0:u.form_title}),(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k(b)},children:[(0,c.jsx)(d,{label:"Enter Full Name",name:"firstname",handleChange:E,value:b.firstname,type:"text"}),(0,c.jsx)("p",{className:"",children:y.firstname}),(0,c.jsx)(d,{label:"Enter Email Address",name:"email",handleChange:E,value:b.email,type:"email"}),(0,c.jsx)("p",{className:"",children:y.email}),(0,c.jsxs)("div",{className:"rounded-md m-auto mb-[20px]",children:[(0,c.jsx)("textarea",{className:"border h-[100px] w-full py-[10px] px-[15px] rounded-md bg-gray-100 focus:outline-none ",name:"message",id:"",cols:"48",rows:"3",type:"text",placeholder:"Enter Your Messgae",onChange:E,value:b.message}),(0,c.jsx)("p",{className:"",children:y.message})]}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{className:"outline outline-slate-200 outline-1 hover:bg-[#699BF7] hover:text-white h-[41px] rounded-md text-sm w-full",type:"submit",children:null===(g=C[0])||void 0===g?void 0:g.button_name})})]})]})})})]})]})]}),(0,c.jsx)(m.Z,{})]})}},6542:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var s=n(5893),r=(n(7294),n(1664)),a=n.n(r),i=n(9470),l=n.n(i),c=n(3820),o=n(9473);function u(){(0,o.I0)();return(0,s.jsx)("div",{className:' bg-[url("/images/menugreen.png")] w-[100%] bg-cover md:mt-[-40px] md:h-[210px] bg-no-repeat fixed z-10',children:(0,s.jsxs)("div",{className:"flex md:justify-between mx-[60px] justify-center items-center md:mt-[2.5%]",children:[(0,s.jsx)(l(),{bottom:!0,children:(0,s.jsx)(a(),{href:"/",children:(0,s.jsx)("img",{className:"md:w-[300px] w-[200px]",src:c._O[7].logo,alt:"about-img"})})}),(0,s.jsx)(l(),{bottom:!0,children:(0,s.jsx)("div",{className:"menus hidden md:block cursor-pointer hover:text-black",children:(0,s.jsxs)("ul",{className:"flex gap-12 text-[28px] font-extrabold text-yellow-400",children:[(0,s.jsx)(a(),{href:"/",children:(0,s.jsx)("li",{className:"hover:text-white hover:scale-125 transition duration-500 ease-in-out ",children:c._O[7].link1})}),(0,s.jsx)(a(),{href:"/aboutus",children:(0,s.jsx)("li",{className:"hover:text-white hover:scale-125 transition duration-500 ease-in-out",children:c._O[7].link2})}),(0,s.jsx)(a(),{href:"/contact",children:(0,s.jsx)("li",{className:"hover:text-white hover:scale-125 transition duration-500 ease-in-out",children:c._O[7].link3})})]})})})]})})}}},function(e){e.O(0,[445,874,224,731,774,888,179],(function(){return t=8367,e(e.s=t);var t}));var t=e.O();_N_E=t}]);