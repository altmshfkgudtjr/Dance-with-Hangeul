(this["webpackJsonpdance-with-hangeul"]=this["webpackJsonpdance-with-hangeul"]||[]).push([[4],{20:function(t,e,n){"use strict";function i(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}n.d(e,"a",(function(){return i}))},23:function(t,e,n){"use strict";var i=function(t){return t.constructor.toString().slice(9).startsWith("FormData")};e.a=function(t,e,n,c,a){var r={},s=!(!n||!i(n)),o=null;return o="GET"===e?{method:"GET",headers:r}:{method:e,headers:s?{}:Object.assign(r,{"Content-Type":"application/json",Accept:"application/json"}),body:s?n:JSON.stringify(n)},fetch(t,o).then((function(t){switch(Math.floor(t.status/100)){case 4:case 5:return Promise.reject(t.json())}return t.json()})).then((function(t){return"function"===typeof c&&c(t),t})).catch((function(t){return"function"===typeof a&&a(t),t}))}},24:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(13),c=n(18),a=n(19),r=n(53),s=function(t){Object(c.a)(n,t);var e=Object(a.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).name=c.constructor.name,c}return n}(Object(r.a)(Error)),o=function(t){Object(c.a)(n,t);var e=Object(a.a)(n);function n(t,c){Object(i.a)(this,n);var a=c||"";return e.call(this,"".concat(t,"\n\n").concat(a))}return n}(s)},28:function(t,e,n){"use strict";var i,c,a,r,s,o,l,h,u,f,d,m,b,j,p=n(2),y=n(3),x={fadeIn:Object(y.c)(i||(i=Object(p.a)(["\n\tfrom { opacity: 0; }\n\tto { opacity: 1;}\n"]))),fadeOut:Object(y.c)(c||(c=Object(p.a)(["\n\tfrom { opacity: 1; }\n\tto { opacity: 0; }\n"]))),fadeInTop:Object(y.c)(a||(a=Object(p.a)(["\n\tfrom { opacity: 0; transform: translateY(-3rem); }\n\tto { opacity: 1; transform: translateY(0); }\n"]))),fadeOutTop:Object(y.c)(r||(r=Object(p.a)(["\n\tfrom { opacity: 1; transform: translateY(0); }\n\tto { opacity: 0; transform: translateY(-3rem); }\n"]))),fadeInBottom:Object(y.c)(s||(s=Object(p.a)(["\n\tfrom { opacity: 0; transform: translateY(3rem); }\n\tto { opacity: 1; transform: translateY(0); }\n"]))),fadeOutBottom:Object(y.c)(o||(o=Object(p.a)(["\n\tfrom { opacity: 1; transform: translateY(0); }\n\tto { opacity: 0; transform: translateY(3rem); }\n"]))),fadeInLeft:Object(y.c)(l||(l=Object(p.a)(["\n\tfrom { opacity: 0; transform: translateX(-3rem); }\n\tto { opacity: 1; transform: translateX(0); }\n"]))),fadeOutLeft:Object(y.c)(h||(h=Object(p.a)(["\n\tfrom { opacity: 1; transform: translateX(0); }\n\tto { opacity: 0; transform: translateX(-3rem); }\n"]))),fadeInRight:Object(y.c)(u||(u=Object(p.a)(["\n\tfrom { opacity: 0; transform: translateX(3rem); }\n\tto { opacity: 1; transform: translateX(0); }\n"]))),fadeOutRight:Object(y.c)(f||(f=Object(p.a)(["\n\tfrom { opacity: 1; transform: translateX(0); }\n\tto { opacity: 0; transform: translateX(3rem); }\n"]))),zoomIn:Object(y.c)(d||(d=Object(p.a)(["\n\tfrom { opacity: 0; transform: scale(.5, .5); }\n\tto { opacity: 1; transform: scale(1, 1); }\n"]))),zoomOut:Object(y.c)(m||(m=Object(p.a)(["\n\tfrom { opacity: 1; transform: scale(1, 1); }\n\tto { opacity: 0; transform: scale(.5, .5); }\n"]))),tooltip:Object(y.c)(b||(b=Object(p.a)(["\n\t0% { opacity: 0; }\n\t49% { opacity: 0; }\n\t50% { opacity: 1; } \n\t100% { opacity: 1; }\n"]))),spin:Object(y.c)(j||(j=Object(p.a)(["\n\tfrom { transform: rotate(0deg); }\n\tto { transform: rotate()(360deg); }\n"])))};e.a=x},29:function(t,e,n){"use strict";var i=function(t){return"\n\t@media (max-width: ".concat(t,"px)\n")},c={xlarge:i(1600),large:i(1440),medium:i(1200),small:i(702),xsmall:i(350),custom:i};e.a=c},33:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return h}));var i=n(10),c=n.n(i),a=n(22),r=n(9),s=n(23),o=n(24),l=Object(r.b)("template/getTemplates",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var i,a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.dispatch,t.next=3,Object(s.a)("/storage/templates.json","GET").then((function(t){return t.documents})).catch((function(t){throw new o.a("getTemplates Error",t)}));case 3:a=t.sent,r=a.reduce((function(t,e){return t[e.consonant]||(t[e.consonant]=[]),t[e.consonant].push(e),t}),{}),i(d(r));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),h=Object(r.b)("template/setRandomTemplate",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var i,a,r,s,o,l,h,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=n.getState,a=n.dispatch,r=i().template.templates,s=[],o=0,l=Object.keys(r);o<l.length;o++)h=l[o],s=s.concat(r[h]);return(u=s[Math.floor(Math.random()*s.length)])&&a(m(u)),t.abrupt("return",u);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),u=Object(r.c)({name:"template",initialState:{selectedTemplate:{id:"",name:"",consonant:"",pronunciation:"",info:{ko:"",en:""},themes:[]},selectedTheme:{},templates:{"\u3131":[],"\u3134":[],"\u3137":[],"\u3139":[],"\u3141":[],"\u3142":[],"\u3145":[],"\u3147":[],"\u3148":[],"\u314a":[],"\u314b":[],"\u314c":[],"\u314d":[],"\u314e":[]},defaultThemes:[]},reducers:{updateTemplates:function(t,e){t.templates=Object.assign(t.templates,e.payload)},updateSelectedTemplate:function(t,e){t.selectedTemplate=e.payload},clearSelectedTemplate:function(t){t.selectedTemplate={}},updateSelectedTheme:function(t,e){t.selectedTheme=e.payload},clearSelectedTheme:function(t){t.selectedTheme={}}}}),f=u.actions,d=f.updateTemplates,m=f.updateSelectedTemplate;f.clearSelectedTemplate,f.updateSelectedTheme,f.clearSelectedTheme,e.a=u.reducer},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(13),c=n(17),a=n(20),r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(i.a)(this,t),this.canvas=e.canvas,this.backgroundColor=e.backgroundColor?e.backgroundColor:"#000",this.color=e.color?e.color:"#fff",this.objects=[],this.maxObjectCount=e.objectCount?e.objectCount:10,this.maxCooltime=e.cooltime?e.cooltime:60,this.cooltime=0,this.width=e.width?e.width:window.innerWidth,this.height=e.height?e.height:window.innerHeight,this.rectSum=this.width+this.height}return Object(c.a)(t,[{key:"init",value:function(){this.ctx=this.canvas.getContext("2d"),this.ctx.save(),this.canvas.width=this.width,this.canvas.height=this.height}},{key:"stop",value:function(){cancelAnimationFrame(this.animation)}},{key:"reset",value:function(){this.ctx.restore()}},{key:"getColor",value:function(){if(Array.isArray(this.color)){var t=Object(a.a)(0,this.color.length);return this.color[t]}return this.color}},{key:"getParams",value:function(){return{ctx:this.ctx,text:"\u3147",fontSize:10,fontFamily:"Nanum Myeongjo",color:this.getColor(),x:100,y:100,x_acc:0,life:300,finLife:60,crush_acc:1}}},{key:"createObject",value:function(){this.cooltime+=1,this.cooltime<this.maxCooltime||this.objects.length>=this.maxObjectCount||(this.objects.push(new this.HangulClass(this.getParams())),this.cooltime=0)}},{key:"createObjects",value:function(){var t=this;(this.cooltime+=1,this.cooltime<this.maxCooltime)||(this.objects.length>=this.maxObjectCount||(this.getParams().forEach((function(e){t.objects.push(new t.HangulClass(e))})),this.cooltime=0))}},{key:"drawBackground",value:function(){this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight),this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight)}},{key:"detectObjects",value:function(){for(var t=0,e=1,n=this.objects.length;t<n-1;)t!==e&&this.objects[t].detect(this.objects[e]),(e+=1)>=n&&(e=t+1,t+=1)}},{key:"drawObject",value:function(){this.objects.forEach((function(t){t.draw()}))}},{key:"removeObject",value:function(){this.objects=this.objects.filter((function(t){return-1!==t.life}))}}]),t}()},46:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(13),c=n(17),a=n(20),r=function(){function t(e){Object(i.a)(this,t),this.ctx=e.ctx,this.groupId=e.groupId,this.text=e.text,this.fontSize=e.fontSize,this.fontFamily=e.fontFamily,this.color=e.color,this.opacity=e.opacity,this.rotate=e.rotate,this.x=e.x,this.y=e.y,this.x_acc=e.x_acc,this.y_acc=e.y_acc,this.crush_acc=e.crush_acc,this.maxLife=e.life,this.life=e.life,this.finLife=e.finLife,this.isWall=e.isWall,this.isDetect=e.isDetect,this.isGravity=e.isGravity,this.isFadeIn=e.isFadeIn,this.isVibe=e.isVibe,this.isRotateDie=e.isRotateDie,this.init()}return Object(c.a)(t,[{key:"init",value:function(){this.paddingVisiable=!1,this.fontSize=this.fontSize?this.fontSize:Object(a.a)(500,500),this.x=this.x?this.x:Object(a.a)(this.fontSize/2,window.innerWidth-this.fontSize/2),this.y=this.y?this.y:0,this.y_acc=this.y_acc?this.y_acc:0,this.x_acc=this.x_acc?this.x_acc:0,this.life=this.life?this.life:300}},{key:"draw",value:function(){this.isGravity&&this.gravity(),this.isVibe&&this.vibe(),this.move(),this.ctx.save(),this.paddingVisiable&&(this.ctx.fillStyle="#666",this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.fontSize/2,0,2*Math.PI),this.ctx.fill()),this.ctx.globalAlpha=this.opacity,this.ctx.fillStyle=this.color,this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.font="".concat(this.fontSize,"px ").concat(this.fontFamily),this.ctx.translate(this.x,this.y),this.ctx.rotate(this.rotate*Math.PI/180),this.isFadeIn&&this.fadeIn(),this.ctx.fillText(this.text,0,0),this.ctx.restore(),this.destory()}},{key:"drawPadding",value:function(){this.ctx.save(),this.ctx.fillStyle="#666",this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.fontSize/2,0,2*Math.PI),this.ctx.fill(),this.ctx.restore()}},{key:"gravity",value:function(){(window.innerHeight>this.y+this.fontSize/2||this.y_acc<-1)&&(this.y_acc+=1,this.y+=this.y_acc,this.y+this.fontSize/2>=window.innerHeight&&(this.y=window.innerHeight-this.fontSize/2,this.y_acc=-.5*this.y_acc))}},{key:"move",value:function(){this.x_acc>0?(this.x_acc-=.5,this.x_acc<1&&(this.x_acc=0),this.x+=this.x_acc,this.x+this.fontSize/2>window.innerWidth&&this.isWall&&(this.x=window.innerWidth-this.fontSize/2,this.x_acc*=-.5)):this.x_acc<0&&(this.x_acc+=.5,this.x_acc>-1&&(this.x_acc=0),this.x+=this.x_acc,this.x<this.fontSize/2&&this.isWall&&(this.x=this.fontSize/2,this.x_acc*=-.5)),this.y_acc>0?(this.y_acc-=.5,this.y_acc<1&&(this.y_acc=0),this.y+=this.y_acc,this.y+this.fontSize/2>window.innerHeight&&this.isWall&&(this.y=window.innerHeight-this.fontSize/2,this.y_acc*=-.5)):this.y_acc<0&&(this.y_acc+=.5,this.y_acc>-1&&(this.y_acc=0),this.y+=this.y_acc,this.y<this.fontSize/2&&this.isWall&&(this.y=this.fontSize/2,this.y_acc*=-.5))}},{key:"destory",value:function(t){this.life>=0&&(this.life-=1,this.life<this.finLife&&this.life>=0&&t())}},{key:"scaleOut",value:function(){this.fontSize=this.fontSize/60,this.opacity=this.life/60}},{key:"fadeIn",value:function(){var t=(this.maxLife-this.life)/20;t>1&&(this.isFadeIn=!1),this.opacity=t}},{key:"die",value:function(t){this.life>t&&(this.life=t)}}]),t}()},47:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n(37),a=n(13),r=n(17),s=n(36),o=n(16),l=n(18),h=n(19),u=n(45),f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this,t)).text="\ud1b5",i.acc_value=1,i}return Object(r.a)(n,[{key:"draw",value:function(){this.gravity(),this.move(),this.ctx.save(),this.ctx.fillStyle=this.color,this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.font="".concat(this.fontSize,"px ").concat(this.fontFamily),this.ctx.translate(this.x,this.y),this.ctx.fillText(this.text,0,0),this.ctx.restore(),this.destory()}},{key:"gravity",value:function(){var t=window.innerHeight,e=this.fontSize/2;(t>this.y+e||this.y_acc<-1)&&(this.y_acc+=this.acc_value,this.y+=this.y_acc,this.y+e>=t&&(this.y=t-e,this.y_acc=this.y_acc*(-3/4)))}},{key:"move",value:function(){this.x_acc>0?(this.x_acc-=this.acc_value/5,this.x_acc<1&&(this.x_acc=0),this.x+=this.x_acc,this.x+this.fontSize/2>window.innerWidth&&(this.x=window.innerWidth-this.fontSize/2,this.x_acc*=-3/4)):this.x_acc<0&&(this.x_acc+=this.acc_value/5,this.x_acc>-1&&(this.x_acc=0),this.x+=this.x_acc,this.x<this.fontSize/2&&(this.x=this.fontSize/2,this.x_acc*=-3/4))}},{key:"destory",value:function(){this.life>=0&&(this.life-=1,this.life<60&&this.life>=0?this.scaleOut():this.life>this.maxLife&&(this.life=-1))}},{key:"scaleOut",value:function(){this.fontSize=this.fontSize*(this.life/60)}},{key:"detect",value:function(t){var e=this.x-t.x,n=this.y-t.y;if(1.2*Math.sqrt(Math.pow(e,2)+Math.pow(n,2))<this.fontSize/2+t.fontSize/2){var i=Math.atan2(n,e);this.x_acc=Math.sin(i+Math.PI/2)*this.crush_acc,this.y_acc=Math.cos(i-Math.PI/2)*this.crush_acc,t.x_acc=Math.sin(i+Math.PI/2)*-t.crush_acc,t.y_acc=Math.cos(i-Math.PI/2)*-t.crush_acc}}}]),n}(n(46).a),d=n(20),m=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"init",value:function(){Object(s.a)(Object(o.a)(n.prototype),"init",this).call(this),this.HangulClass=f,this.ctx.globalAlpha=1,this.ctx.fillStyle="#fff"}},{key:"start",value:function(){var t=this;this.animation=requestAnimationFrame((function e(){t.createObject(),t.detectObjects(),t.removeObject(),t.drawBackground(),t.drawObject(),t.animation=requestAnimationFrame(e)}))}},{key:"getParams",value:function(){var t=Object(s.a)(Object(o.a)(n.prototype),"getParams",this).call(this);return Object(c.a)(Object(c.a)({},t),{},{ctx:this.ctx,text:"\ud1b5",fontSize:Object(d.a)(500,150),x:Object(d.a)(this.fontSize/2,window.innerWidth-this.fontSize/2),y:0,y_acc:10,crush_acc:20,life:300})}}]),n}(u.a),b=n(1);e.default=function(t){var e=t.color,n=t.backgroundColor,c=t.fontFamily,a=Object(i.useRef)(null);return Object(i.useEffect)((function(){var t=a.current,i=new m({canvas:t,color:e,backgroundColor:n,fontFamily:c});i.init(),i.start()}),[e,n,c]),Object(b.jsx)("canvas",{ref:a})}},48:function(t,e,n){"use strict";var i=n(7),c=n(0),a=n(1),r=function(t){var e=t.delay,n=t.setIsPending,i=t.setIsFullfilled;return Object(c.useEffect)((function(){return n(!0),i(!1),function(){return i(!0)}}),[e,n,i]),null},s=function(t,e,n){return Object(a.jsx)(c.Suspense,{fallback:e,children:Object(a.jsx)("div",{style:{display:t?"none":"block"},children:n})})};e.a=function(t){var e=t.delay,n=Object(c.useState)(!0),o=Object(i.a)(n,2),l=o[0],h=o[1],u=Object(c.useState)(!1),f=Object(i.a)(u,2),d=f[0],m=f[1],b=Object(c.useRef)(Object(a.jsx)(r,{delay:e,setIsPending:h,setIsFullfilled:m})),j=Object(c.useCallback)((function(t){var e=t.children;return s(l,b.current,e)}),[l]);return Object(c.useEffect)((function(){if(d){var t=window.setTimeout((function(){return h(!1)}),e);return function(){return window.clearTimeout(t)}}}),[d,e]),Object(c.useEffect)((function(){b.current&&(b.current=Object(a.jsx)(r,{delay:e,setIsPending:h,setIsFullfilled:m}))}),[e]),{isPending:l,isFullfilled:d,DelayedSuspense:j}}},49:function(t,e,n){"use strict";var i,c=n(2),a=n(3).b.div(i||(i=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n"])));e.a=a},67:function(t,e,n){"use strict";n.r(e);var i,c,a,r,s,o,l,h,u,f,d,m,b,j,p,y=n(31),x=n.n(y),O=n(30),v=n(25),g=n(26),w=function(t){t&&t instanceof Function&&n.e(7).then(n.bind(null,72)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),i(t),c(t),a(t),r(t)}))},k=n(7),_=n(6),S=n(0),T=n(2),z=n(3),C=Object(z.c)(i||(i=Object(T.a)(["\n\t0% { opacity: 0; }\n\t80% { opacity: 0; }\n\t100% { opacity: 1; }\n"]))),F=Object(z.c)(c||(c=Object(T.a)(["\n\t0% { transform: translateX(0) scale(1); }\n\t60% { transform: translateX(-64px) scale(0.5); }\n\t100% { transform: translateX(-64px) scale(0.5); }\n"]))),I=z.b.div(a||(a=Object(T.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 80px;\n  height: 80px;\n  animation: 2s "," ",";\n  animation-fill-mode: forwards;\n  z-index: 1;\n\n  &::before {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 100%;\n    background: ",";\n    border-radius: 16px;\n    animation: "," ",";\n    z-index: -1;\n  }\n"])),F,(function(t){var e=t.time;return"".concat(e,"ms")}),(function(t){var e=t.color;return"linear-gradient(135deg, ".concat(e+"aa"," 25%, 60%, ").concat(e+"ff","),\n\t\t\tlinear-gradient(to right, white, white)")}),(function(t){var e=t.time;return"".concat(e,"ms")}),C),E=function(){return"\n\t-webkit-touch-callout: none;\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n"},M=function(){return"\n\tcubic-bezier(0.25, 0.1, 0.25, 1);\n"},P=n(1),B=Object(z.c)(r||(r=Object(T.a)(["\n\t0% { opacity: 0; transform: translateY(calc(-100vh / 2)); }\n\t33% { opacity: 0.33; transform: translateY(calc(-100vh / 3)); }\n\t66% { opacity: 0.66; transform: translateY(calc(-100vh / 6)); }\n\t100% { opacity: 1; transform: translateY(calc(0)); }\n"]))),L=z.b.svg(o||(o=Object(T.a)(["\n  width: 30px;\n  height: 30px;\n  transition: 0.2s ",";\n  animation: "," ",";\n\n  & > ellipse {\n    fill: none;\n    stroke: #ffffff;\n    stroke-width: 4;\n    transition: 0.2s ",";\n    animation: "," ",";\n  }\n"])),M,(function(t){var e=t.time;return"".concat(e/5*4,"ms")}),B,M,(function(t){var e=t.time;return"".concat(e,"ms")}),(function(t){return function(t){return Object(z.c)(s||(s=Object(T.a)(["\n\t0% { stroke: ","; }\n\t80% { stroke: ","; }\n\t85% { stroke: #ffffff }\n"])),t,t)}(t.color)})),Y=function(t){var e=t.time,n=t.color;return Object(P.jsx)(L,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",time:e,color:n,children:Object(P.jsx)("ellipse",{id:"svg_circle","data-name":"svg_circle",cx:"15",cy:"15",rx:"12",ry:"12",strokeMiterlimit:"10"})})},W=Object(z.c)(l||(l=Object(T.a)(["\n\t0% { opacity: 0; transform: translateY(calc(-100vh / 2)); }\n\t33% { opacity: 0; transform: translateY(calc(-100vh / 3 + 6px)); }\n\t66% { opacity: 0.5; transform: translateY(calc(-100vh / 6)); }\n\t100% { opacity: 1; transform: translateY(calc(0)); }\n"]))),A=z.b.svg(u||(u=Object(T.a)(["\n  transition: 0.2s ",";\n  animation: "," ",";\n\n  & > path {\n    fill: none;\n    stroke: #ffffff;\n    stroke-width: 3;\n    transition: 0.2s ",";\n    animation: "," ",";\n  }\n"])),M,(function(t){var e=t.time;return"".concat(e/5*4,"ms")}),W,M,(function(t){var e=t.time;return"".concat(e,"ms")}),(function(t){return function(t){return Object(z.c)(h||(h=Object(T.a)(["\n\t0% { stroke: ","; }\n\t80% { stroke: ","; }\n\t85% { stroke: #ffffff }\n"])),t,t)}(t.color)})),H=function(t){var e=t.time,n=t.color;return Object(P.jsx)(A,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"6",viewBox:"0 0 24 6",time:e,color:n,children:Object(P.jsx)("path",{id:"svg_circle_1","data-name":"svg_circle_1",d:"M1021.781,526.761a23.963,23.963,0,0,1,20.007,0",transform:"translate(-1019.792 -523.073)",strokeLinecap:"round",strokeLinejoin:"round"})})},D=Object(z.c)(f||(f=Object(T.a)(["\n\t0% { opacity: 0; transform: translateY(calc(-100vh / 2)); }\n\t33% { opacity: 0; transform: translateY(calc(-100vh / 3)); }\n\t66% { opacity: 0; transform: translateY(calc(-100vh / 6 + 6px)); }\n\t100% { opacity: 1; transform: translateY(calc(0)); }\n"]))),X=z.b.svg(m||(m=Object(T.a)(["\n  transition: 0.2s ",";\n  animation: "," ",";\n\n  & > path {\n    fill: none;\n    stroke: #ffffff;\n    stroke-width: 3;\n    transition: 0.2s ",";\n    animation: "," ",";\n  }\n"])),M,(function(t){var e=t.time;return"".concat(e/5*4,"ms")}),D,M,(function(t){var e=t.time;return"".concat(e,"ms")}),(function(t){return function(t){return Object(z.c)(d||(d=Object(T.a)(["\n\t0% { stroke: ","; }\n\t80% { stroke: ","; }\n\t85% { stroke: #ffffff }\n"])),t,t)}(t.color)})),R=function(t){var e=t.time,n=t.color;return Object(P.jsx)(X,{xmlns:"http://www.w3.org/2000/svg",width:"15.028",height:"7",viewBox:"0 0 15.028 7",time:e,color:n,children:Object(P.jsx)("path",{id:"svg_circle_2","data-name":"svg_circle_2",d:"M1024.781,518.761a25.508,25.508,0,0,1,11.432,0",transform:"translate(-1022.983 -516.612)",strokeLinecap:"round",strokeLinejoin:"round"})})},G=Object(z.c)(b||(b=Object(T.a)(["\n\tfrom { opacity: 0; transform: translateX(0) }\n\tto { opacity: 1; transform: translateX(26px) }\n"]))),q=z.b.div(j||(j=Object(T.a)(["\n  position: absolute;\n  font-size: 21px;\n  font-weight: 600;\n  animation: 2s "," ",";\n  animation-fill-mode: forwards;\n  opacity: 0;\n  z-index: 0;\n  ",";\n"])),G,(function(t){var e=t.time;return"".concat(e,"ms")}),E),V=function(t){var e=t.time,n=void 0===e?5e3:e,i=t.color;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(I,{time:n,color:i,children:[Object(P.jsx)(R,{time:n,color:i}),Object(P.jsx)(H,{time:n,color:i}),Object(P.jsx)(Y,{time:n,color:i})]}),Object(P.jsx)(q,{time:n,children:"\ud55c\uae00\ub85c \ucda4\ucd94\ub2e4"})]})},N=n(29),Q=z.b.div(p||(p=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 1000px;\n\n  "," {\n    width: 86vw;\n  }\n\n  "," {\n    width: 96vw;\n  }\n"])),N.a.medium,N.a.small);n.p;n.p;n.p;n.p;n.p;n.p;n.p;var J,Z;n.p;function K(){return(K=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function U(t,e){if(null==t)return{};var n,i,c=function(t,e){if(null==t)return{};var n,i,c={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function $(t,e){var n=t.title,i=t.titleId,c=U(t,["title","titleId"]);return S.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",ref:e,"aria-labelledby":i},c),n?S.createElement("title",{id:i},n):null,J||(J=S.createElement("defs",null,S.createElement("style",null,".cls-1{fill:none;opacity:0.4;}.cls-2{isolation:isolate;}"))),Z||(Z=S.createElement("g",{id:"\\uB808\\uC774\\uC5B4_2","data-name":"\\uB808\\uC774\\uC5B4 2"},S.createElement("g",{id:"\\uB808\\uC774\\uC5B4_1-2","data-name":"\\uB808\\uC774\\uC5B4 1"},S.createElement("rect",{className:"cls-1",width:48,height:48}),S.createElement("path",{id:"Icon_ionic-ios-mail-open","data-name":"Icon ionic-ios-mail-open",className:"cls-2",d:"M41.63,19.88,27.5,5.47a4.9,4.9,0,0,0-6.93-.06l-.07.06S6.79,19.45,6.37,19.89a3.59,3.59,0,0,0-.94,2.33V41.14A2.87,2.87,0,0,0,8.29,44H39.71a2.87,2.87,0,0,0,2.86-2.86v-19A3.44,3.44,0,0,0,41.63,19.88ZM39.9,23.66l-7.24,7.56a.18.18,0,0,0,0,.25h0l6.72,7.16a1.16,1.16,0,0,1,0,1.64h0a1.16,1.16,0,0,1-1.64,0L24.26,25.88a.36.36,0,0,0-.5,0l0,0L10.28,40.26a1.16,1.16,0,0,1-1.65-1.64h0l6.73-7.16a.2.2,0,0,0,0-.25L8.09,23.65a2,2,0,0,1,.48-2.83,2,2,0,0,1,1-.37h29a2.12,2.12,0,0,1,1.7,2.45A2.09,2.09,0,0,1,39.9,23.66Z"})))))}var tt,et,nt,it,ct,at,rt,st=S.forwardRef($),ot=(n.p,n(28)),lt=Object(z.b)(st)(tt||(tt=Object(T.a)(["\n  width: 32px;\n  height: 32px;\n  opacity: 0.8;\n  animation: 2s ",";\n"])),ot.a.fadeInBottom),ht=z.b.blockquote(et||(et=Object(T.a)(["\n  display: block;\n  margin-block-start: auto;\n  margin-block-end: auto;\n  margin-inline-start: auto;\n  margin-inline-end: auto;\n  margin-top: 100px;\n  text-align: center;\n  word-break: keep-all;\n  transition: 0.3s ",";\n\n  "," {\n    margin-top: 60px;\n    display: none;\n\n    &:nth-child(2) {\n      display: block;\n    }\n  }\n"])),M,N.a.medium),ut=function(){var t=Object(v.c)((function(t){return t.common.quotes})),e=Object(S.useState)({ko:"",en:""}),n=Object(k.a)(e,2),i=n[0],c=n[1];return Object(S.useEffect)((function(){var e=t[Math.floor(Math.random()*t.length)];e&&c({ko:e.ko?e.ko:"\u2018\ud55c\uae00\ub85c \ucda4\ucd94\ub2e4\u2019\ub294 \ud55c\uae00\uc758 \uc544\ub984\ub2e4\uc6c0\uc744 \uc2dc\uac01\uc801\uc73c\ub85c \ud45c\ud604\ud569\ub2c8\ub2e4.",en:e.en?e.en:"\u2018Dance with Hangeul\u2019 visually expresses the beauty of Hangeul."})}),[t,c]),Object(P.jsxs)(Q,{children:[Object(P.jsx)(lt,{}),Object(P.jsx)(ht,{children:i.ko}),Object(P.jsx)(ht,{children:i.en})]})},ft=z.b.div(nt||(nt=Object(T.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: ",";\n  animation-fill-mode: forwards;\n  background-color: rgba(0, 0, 0, 0);\n"])),(function(t){var e=t.time;return t.isClose?Object(z.a)(it||(it=Object(T.a)(["\n          ","ms ","\n        "])),e,ot.a.fadeOut):Object(z.a)(ct||(ct=Object(T.a)(["\n          ","ms ","\n        "])),e,ot.a.fadeIn)})),dt=n(10),mt=n.n(dt),bt=n(22),jt=n(9),pt=n(23),yt=n(24),xt=Object(jt.b)("common/getQuotes",function(){var t=Object(bt.a)(mt.a.mark((function t(e,n){var i,c;return mt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.dispatch,t.next=3,Object(pt.a)("/storage/hanguelQuotes.json","GET").then((function(t){return t.documents})).catch((function(t){throw new yt.a("getQuotes Error",t)}));case 3:c=t.sent,i(vt(c));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),Ot=Object(jt.c)({name:"common",initialState:{quotes:[]},reducers:{updateQuotes:function(t,e){t.quotes=e.payload}}}),vt=Ot.actions.updateQuotes,gt=Ot.reducer,wt=Object(jt.b)("theme/getThemes",function(){var t=Object(bt.a)(mt.a.mark((function t(e,n){var i,c,a;return mt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.dispatch,t.next=3,Object(pt.a)("/storage/themes.json","GET").then((function(t){return t.documents})).catch((function(t){throw new yt.a("getThemes Error",t)}));case 3:c=t.sent,a=c.reduce((function(t,e){return t[e.id]=e,t}),{}),i(St(a));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),kt=(Object(jt.b)("theme/getDefaultThemes",function(){var t=Object(bt.a)(mt.a.mark((function t(e,n){var i,c;return mt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.dispatch,t.next=3,Object(pt.a)("/storage/defaultThemes.json","GET").then((function(t){return t.documents})).catch((function(t){throw new yt.a("getDefaultThemes Error",t)}));case 3:c=t.sent,i(Tt(c));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),Object(jt.c)({name:"theme",initialState:{themes:{},defaultThemes:[]},reducers:{updateThemes:function(t,e){t.themes=e.payload},updateDefaultThemes:function(t,e){t.defaultThemes=e.payload}}})),_t=kt.actions,St=_t.updateThemes,Tt=_t.updateDefaultThemes,zt=kt.reducer,Ct=n(33),Ft={white:"#ffffff",black:"#000000",gray0:"#f7f6f3",gray1:"#eeeceb",gray2:"#dedddb",gray3:"#cbc5c2",gray4:"#bab1ad",gray5:"#8c8582",gray6:"#5d5957",gray7:"#2f2c2b",gray8:"#1c1b1a",red0:"#fcebec",red1:"#f6cdd1",red2:"#ee9aa2",red3:"#e56874",red4:"#dc3545",red5:"#bb2d3b",red6:"#9a2530",red7:"#6e1b23",red8:"#58151c",orange0:"#fff5e6",orange1:"#ffe5bf",orange2:"#ffcc80",orange3:"#ffb240",orange4:"#ff9800",orange5:"#d98100",orange6:"#b36a00",orange7:"#804c00",orange8:"#663d00",yellow0:"#fff9e6",yellow1:"#fff0c1",yellow2:"#ffe083",yellow3:"#ffd145",yellow4:"#ffc107",yellow5:"#bf9105",yellow6:"#806104",yellow7:"#403002",yellow8:"#261d01",teal0:"#e7f8f3",teal1:"#c4ede1",teal2:"#89dcc3",teal3:"#4dcaa4",teal4:"#12b886",teal5:"#33a880",teal6:"#0d815e",teal7:"#095c43",teal8:"#074a36",blue0:"#e6f2ff",blue1:"#bfdeff",blue2:"#80bdff",blue3:"#409cff",blue4:"#007bff",blue5:"#005cbf",blue6:"#003e80",blue7:"#001f40",blue8:"#001226",purple0:"#",purple1:"#",purple2:"#",purple3:"#D1B7FF",purple4:"#C9AAFF",purple5:"#",purple6:"#",purple7:"#",purple8:"#"},It=function(t){var e=t.time,n=void 0===e?5e3:e,i=t.isFullfilled,c=1e3,a=Object(v.b)(),r=Object(S.useState)(!1),s=Object(k.a)(r,2),o=s[0],l=s[1],h=Object(S.useState)(!1),u=Object(k.a)(h,2),f=u[0],d=u[1];return Object(S.useEffect)((function(){a(xt()),a(wt()),a(Object(Ct.b)())}),[a]),Object(S.useEffect)((function(){var t=window.setTimeout((function(){return l(!0)}),n+2e3);return function(){return window.clearTimeout(t)}}),[n,l]),Object(S.useEffect)((function(){if(o){var t=window.setTimeout((function(){return d(!0)}),c);return function(){return window.clearTimeout(t)}}}),[o,d]),Object(P.jsxs)(P.Fragment,{children:[!f&&Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(ft,{isClose:o,time:c,children:Object(P.jsx)(V,{time:n,color:Ft.purple4})})}),f&&Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(ft,{isClose:i,time:c,children:Object(P.jsx)(ut,{time:n})})})]})},Et=n(48),Mt=Object(S.lazy)((function(){return Promise.all([n.e(3).then(n.bind(null,73)),new Promise((function(t){return setTimeout(t,12e3)}))]).then((function(t){return Object(k.a)(t,1)[0]}))})),Pt=function(){var t=Object(Et.a)({delay:1e3}),e=t.isPending,n=t.isFullfilled,i=t.DelayedSuspense;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(g.a,{children:Object(P.jsx)("title",{children:"\ud55c\uae00\ub85c \ucda4\ucd94\ub2e4"})}),e&&Object(P.jsx)(It,{time:4e3,isFullfilled:n}),Object(P.jsx)(i,{children:Object(P.jsx)(Mt,{})})]})},Bt=n(49),Lt=n(47),Yt=function(){return Object(P.jsx)(Bt.a,{children:Object(P.jsx)(Lt.default,{})})};var Wt=z.b.div(at||(at=Object(T.a)(["\n  position: relative;\n  width: 100%;\n  margin-top: 40vh;\n  font-size: 3rem;\n  color: #444;\n  font-weight: 600;\n  text-align: center;\n"]))),At=z.b.button(rt||(rt=Object(T.a)(["\n  position: relative;\n  display: block;\n  width: 100px;\n  height: 30px;\n  font-size: 0.8rem;\n  line-height: 26px;\n  margin: 15px auto;\n  border-radius: 4px;\n  border: 1px solid ",";\n  text-align: center;\n  cursor: pointer;\n  transition: 0.2s ",";\n  ","\n\n  &:hover,\n\t&:active {\n    background-color: ",";\n    color: white;\n  }\n"])),Ft.gray4,M,E,Ft.gray7),Ht=function(){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(g.a,{children:Object(P.jsx)("title",{children:"\ud55c\uae00\ub85c \ucda4\ucd94\ub2e4 - 404"})}),Object(P.jsx)(Wt,{children:"\uc5b4\ub77c. \uc798\ubabb \ub4e4\uc5b4\uc624\uc168\ub124\uc694?"}),Object(P.jsx)(O.b,{to:"/",children:Object(P.jsx)(At,{children:"\ub3cc\uc544\uac00\uae30"})})]})};var Dt=function(){var t=Object(S.useState)(!1),e=Object(k.a)(t,2),n=e[0],i=e[1];return Object(S.useEffect)((function(){document.addEventListener("mousedown",(function(){return i(!0)})),document.addEventListener("keydown",(function(){return i(!1)}))}),[]),[n]},Xt=function(){var t=Dt(),e=Object(k.a)(t,1)[0];return Object(P.jsx)("div",{className:e?"mousedown":"",children:Object(P.jsxs)(_.c,{children:[Object(P.jsx)(_.a,{path:"/",component:Pt,exact:!0}),Object(P.jsx)(_.a,{path:"/lab",component:Yt}),Object(P.jsx)(_.a,{path:"*",component:Ht})]})})},Rt=n(15),Gt=Object(Rt.b)({template:Ct.a,theme:zt,common:gt}),qt=Object(jt.a)({reducer:Gt});x.a.render(Object(P.jsx)(O.a,{children:Object(P.jsx)(v.a,{store:qt,children:Object(P.jsx)(g.b,{children:Object(P.jsx)(Xt,{})})})}),document.getElementById("root")),w()}},[[67,5,6]]]);