(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{8408:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/twog_hhc_categories",function(){return r(5328)}])},5328:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return v},default:function(){return b}});var o=r(5893),n=r(7294),i=r(7731),a=r(9470),s=r.n(a),l=r(9473),d=r(3327),c=r.n(d),u=r(3820);function x(){var e,t,r=(0,l.v9)((function(e){return e.Products})).productData;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"pb-[60px] ",children:(0,o.jsx)("div",{className:"grid grid-col md:grid-cols-2 md:px-[20px] lg:grid-cols-5 md:gap-9 items-center justify-items-center pt-[50px]",children:(0,o.jsx)(c(),{top:!0,children:r&&(null===(e=r[1])||void 0===e||null===(t=e.product_images)||void 0===t?void 0:t.map((function(e,t){return(0,o.jsxs)("div",{className:"mt-[2px] about ",children:[(0,o.jsxs)("div",{className:"card max-w-[300px] hover:scale-110 ease-in-out duration-700 transition shadow-black ",children:[(0,o.jsx)("img",{src:e.image,alt:"about-img"}),(0,o.jsx)("p",{className:"mt-[15px] font-bold text-[14px] md:text-[16px] text-black text-center ",children:e.title})]}),(0,o.jsx)("a",{href:e.cos,target:"_blank",children:(0,o.jsx)("div",{className:"flex justify-center py-[5px]",children:(0,o.jsx)("button",{className:"px-6 py-[4px] bg-green-500 text-white text-[17px] rounded-md font-medium",children:"cos"})})})]},t)})))})})})})}var m=r(1664),f=r.n(m);function p(){(0,l.I0)();return(0,o.jsx)("div",{className:' bg-[url("/images/menudarkgreen.png")] w-[100%] md:mt-[-40px] bg-cover md:h-[210px] bg-no-repeat fixed z-10',children:(0,o.jsxs)("div",{className:"flex justify-between mx-[60px] items-center md:mt-[2.5%]",children:[(0,o.jsx)(s(),{bottom:!0,children:(0,o.jsx)(f(),{href:"/",children:(0,o.jsx)("img",{className:"md:w-[300px] w-[200px]",src:u._O[7].logo,alt:"about-img"})})}),(0,o.jsx)(s(),{bottom:!0,children:(0,o.jsx)("div",{className:"menus hidden md:block cursor-pointer hover:text-black",children:(0,o.jsxs)("ul",{className:"flex gap-12 text-[28px] font-extrabold text-yellow-400",children:[(0,o.jsx)(f(),{href:"/",children:(0,o.jsx)("li",{className:"hover:text-white hover:scale-125 transition duration-500 ease-in-out ",children:u._O[7].link1})}),(0,o.jsx)(f(),{href:"/aboutus",children:(0,o.jsx)("li",{className:"hover:text-white hover:scale-125 transition duration-500 ease-in-out",children:u._O[7].link2})}),(0,o.jsx)(f(),{href:"/contact",children:(0,o.jsx)("li",{className:"hover:text-white hover:scale-125 transition duration-500 ease-in-out",children:u._O[7].link3})})]})})})]})})}r(3509);var h=r(4899),v=!0;function b(){var e,t,r=(0,l.v9)((function(e){return e.Products})).productData,a=r&&JSON.stringify(null===(e=r[1])||void 0===e?void 0:e.background_image),d=(0,l.I0)();return(0,n.useEffect)((function(){d((0,h.C9)())}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(p,{}),(0,o.jsx)("div",{className:"",children:(0,o.jsxs)("div",{className:" w-[100%] bg-cover ",style:{backgroundImage:"url(".concat(a,")")},children:[(0,o.jsx)(s(),{top:!0,children:(0,o.jsx)("div",{className:"flex justify-center pt-[100px] md:pt-[180px]",children:r&&(0,o.jsx)("img",{className:"xl:max-w-[250px] lg:max-w-[210px] md:max-w-[150px] sm:max-w-[150px] max-w-[150px] ",src:null===(t=r[1])||void 0===t?void 0:t.title_image,alt:"about-img"})})}),(0,o.jsx)("div",{className:"max-w-[1280px] mx-auto",children:(0,o.jsx)(x,{})})]})}),(0,o.jsx)(i.Z,{})]})}},3327:function(e,t,r){"use strict";function o(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function n(e,t){var r=t.left,o=t.right,n=t.up,i=t.down,a=t.top,s=t.bottom,l=t.big,d=t.mirror,u=t.opposite,m=(r?1:0)|(o?2:0)|(a||i?4:0)|(s||n?8:0)|(d?16:0)|(u?32:0)|(e?64:0)|(l?128:0);if(x.hasOwnProperty(m))return x[m];var f=r||o||n||i||a||s,p=void 0,h=void 0;if(f){if(!d!=!(e&&u)){var v=[o,r,s,a,i,n];r=v[0],o=v[1],a=v[2],s=v[3],n=v[4],i=v[5]}var b=l?"2000px":"100%";p=r?"-"+b:o?b:"0",h=i||a?"-"+b:n||s?b:"0"}return x[m]=(0,c.animation)((e?"to":"from")+" {"+(f?" transform: translate3d("+p+", "+h+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),x[m]}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,r=(e.out,e.forever),i=e.timeout,a=e.duration,s=void 0===a?c.defaults.duration:a,l=e.delay,u=void 0===l?c.defaults.delay:l,x=e.count,m=void 0===x?c.defaults.count:x,f=o(e,["children","out","forever","timeout","duration","delay","count"]),p={make:n,duration:void 0===i?s:i,delay:u,forever:r,count:m,style:{animationFillMode:"both"},reverse:f.left};return(0,d.default)(f,p,p,t)}Object.defineProperty(t,"__esModule",{value:!0});var a,s=r(5697),l=r(2580),d=(a=l)&&a.__esModule?a:{default:a},c=r(1017),u={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},x={};i.propTypes=u,t.default=i,e.exports=t.default}},function(e){e.O(0,[445,874,224,731,774,888,179],(function(){return t=8408,e(e.s=t);var t}));var t=e.O();_N_E=t}]);