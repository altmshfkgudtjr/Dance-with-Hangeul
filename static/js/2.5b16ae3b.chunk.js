(this["webpackJsonpdance-with-hangeul"]=this["webpackJsonpdance-with-hangeul"]||[]).push([[2],{78:function(t,a,e){"use strict";e.r(a);var i=e(0),c=e(19),n=e(9),o=e(21),r=e(28),s=e(12),h=e(22),u=e(23),l=e(51),f=function(t){Object(h.a)(e,t);var a=Object(u.a)(e);function e(t){var i;return Object(n.a)(this,e),(i=a.call(this,t)).text="\ub8e9",i.subText=Math.random()>.9?["\uc8fc","\ub8e9","\uc8fc"]:["\uc8fc"],i.acc_value=1,i.gravityValue=t.gravity,i}return Object(o.a)(e,[{key:"draw",value:function(){var t=this;this.gravity(),this.move(),this.detectBottom(0),Object(r.a)(Object(s.a)(e.prototype),"draw",this).call(this,(function(){t.subText.forEach((function(a,e){t.ctx.fillText(a,0,-t.fontSize*(e+1))}))}))}},{key:"destory",value:function(){var t=this;Object(r.a)(Object(s.a)(e.prototype),"destory",this).call(this,(function(){t.fontSize=t.fontSize*(t.life/60)}))}},{key:"scaleOut",value:function(){}},{key:"detect",value:function(t){var a=this.x-t.x,e=this.y-t.y;if(1.2*Math.sqrt(Math.pow(a,2)+Math.pow(e,2))<this.fontSize/2+t.fontSize/2){var i=Math.atan2(e,a);this.x_acc=Math.sin(i+Math.PI/2)*this.crush_acc,this.y_acc=Math.cos(i-Math.PI/2)*this.crush_acc}}}]),e}(e(52).a),b=e(13),v=function(t){Object(h.a)(e,t);var a=Object(u.a)(e);function e(){return Object(n.a)(this,e),a.apply(this,arguments)}return Object(o.a)(e,[{key:"init",value:function(){Object(r.a)(Object(s.a)(e.prototype),"init",this).call(this),this.HangulClass=f,this.maxObjectCount=50,this.maxCooltime=2,this.width<1e3?this.maxCooltime=8:this.maxCooltime=2}},{key:"start",value:function(){var t=this;this.animation=requestAnimationFrame((function a(){t.createObject(),t.removeObject(),t.drawBackground(),t.drawObject(),t.animation=requestAnimationFrame(a)}))}},{key:"getParams",value:function(){var t,a=Object(r.a)(Object(s.a)(e.prototype),"getParams",this).call(this);t=Object(b.c)(10,20);var i=this.width<1e3?2:5,n=this.width<1e3?.2:2,o=this.width<1e3?135:80;return Object(c.a)(Object(c.a)({},a),{},{fontSize:t,x:Object(b.c)(t/2,window.innerWidth-t/2),y:0,y_acc:i,life:o,gravity:n,rectSum:this.rectSum})}}]),e}(l.a),j=e(1);a.default=function(t){var a=t.color,e=t.backgroundColor,c=t.fontFamily,n=Object(i.useRef)(null);return Object(i.useEffect)((function(){var t=n.current,i=new v({canvas:t,color:a,backgroundColor:e,fontFamily:c});return i.init(),i.start(),function(){i.stop()}}),[a,e,c]),Object(j.jsx)("canvas",{ref:n})}}}]);