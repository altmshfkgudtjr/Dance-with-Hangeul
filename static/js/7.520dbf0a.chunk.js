(this["webpackJsonpdance-with-hangeul"]=this["webpackJsonpdance-with-hangeul"]||[]).push([[7],{83:function(t,e,a){"use strict";a.r(e);var i=a(0),c=a(19),n=a(9),s=a(21),r=a(28),o=a(12),u=a(22),h=a(23),l=a(51),b=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).gravityValue=2,i.acc_value=2,i.x_acc=0,i.y_acc=45,i.rotate_acc=t.rotate_acc,i.vibeValue=1,i}return Object(s.a)(a,[{key:"draw",value:function(){this.life<this.finLife&&(this.gravity(),this.rotate+=this.rotate_acc),this.airResistance(),this.vibe(),this.move(),Object(r.a)(Object(o.a)(a.prototype),"draw",this).call(this,(function(){}))}},{key:"gravity",value:function(){this.y_acc+=this.gravityValue}},{key:"airResistance",value:function(){this.x_acc*=.95,this.y_acc*=.9}},{key:"move",value:function(){Math.abs(this.x_acc)>2&&(this.x+=this.x_acc),Math.abs(this.y_acc)>this.gravityValue&&(this.y+=this.y_acc)}},{key:"destory",value:function(){Object(r.a)(Object(o.a)(a.prototype),"destory",this).call(this,(function(){}))}},{key:"vibe",value:function(){this.life<this.maxLife-60&&this.life>this.finLife&&(this.x+=this.vibeValue,this.vibeValue*=-1.01,this.vibeValue>5&&(this.vibeValue=10))}}]),a}(a(52).a),f=a(13),v=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).HangulClass=b,i.maxObjectCount=45,i.maxCooltime=10,i}return Object(s.a)(a,[{key:"init",value:function(){Object(r.a)(Object(o.a)(a.prototype),"init",this).call(this),this.ctx.globalAlpha=1,this.ctx.fillStyle="#fff"}},{key:"start",value:function(){var t=this;this.animation=requestAnimationFrame((function e(){t.createObjects(),t.removeObject(),t.drawBackground(),t.drawObject(),t.animation=requestAnimationFrame(e)}))}},{key:"getParams",value:function(){var t=[],e=Object(r.a)(Object(o.a)(a.prototype),"getParams",this).call(this),i=100;i*=this.rectSum;var n,s,u,h=window.innerWidth/2-8*(i-10)/2,l=Object(c.a)(Object(c.a)({},e),{},{fontSize:i,x:h,y:0,life:700});for(s=0;s<5;s++)for(n=0;n<9;n++)u=s%2===0?500-42*s-5*n+Object(f.c)(-5,5):500-42*s-5*(9-n)+Object(f.c)(-5,5),t.push(Object(c.a)(Object(c.a)({},l),{},{text:n%3===0?"\uc640":"\ub974",x:h+(i-10)*n,y:0-(i-0)*s,line:s,finLife:u,rotate:Object(f.c)(-20,20),rotate_acc:Object(f.c)(-5,5)}));return t}}]),a}(l.a),j=a(1);e.default=function(t){var e=t.color,a=t.backgroundColor,c=t.fontFamily,n=Object(i.useRef)(null);return Object(i.useEffect)((function(){var t=n.current,i=new v({canvas:t,color:e,backgroundColor:a,fontFamily:c});return i.init(),i.start(),function(){i.stop()}}),[e,a,c]),Object(j.jsx)("canvas",{ref:n})}}}]);