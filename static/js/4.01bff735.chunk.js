(this["webpackJsonpdance-with-hangeul"]=this["webpackJsonpdance-with-hangeul"]||[]).push([[4],{80:function(t,i,e){"use strict";e.r(i);var a=e(0),s=e(19),c=e(9),h=e(21),n=e(28),o=e(13),r=e(22),f=e(23),m=e(51),u=e(52),l=e(10),b=function(t){Object(r.a)(e,t);var i=Object(f.a)(e);function e(t){var a;return Object(c.a)(this,e),(a=i.call(this,t)).text="\uaed1\ucda9",a.gravityValue=1,a.default_x_acc=t.default_x_acc,a.default_y_acc=t.default_y_acc,a.bottom=t.bottom,a.m11=1,a.m12=0,a.m21=0,a.m22=1,a.frame=0,a.frame1=12,a.frame2=20,a}return Object(h.a)(e,[{key:"draw",value:function(){if(this.frame+=1,this.frame<this.frame1){var t=1-(this.frame1-this.frame)/this.frame1,i=Object(l.b)(t);this.m11=1+.5*i,this.m22=1-.5*i,this.x_acc=0,this.y_acc=0}else if(this.frame===this.frame1)this.x_acc=this.default_x_acc,this.y_acc=this.default_y_acc;else if(this.frame<this.frame2){var e=1-(this.frame2-this.frame)/(this.frame2-this.frame1),a=Object(l.b)(e);this.m11=1.5-.5*a,this.m22=.5+.5*a}else this.y===this.bottom&&(this.frame=0);this.gravity(),this.detectBottom(),this.move(),this.ctx.save(),this.ctx.fillStyle=this.color,this.ctx.textAlign="center",this.ctx.textBaseline="bottom",this.ctx.font="".concat(this.fontSize,"px ").concat(this.fontFamily),this.ctx.rotate(this.rotate*Math.PI/180),this.ctx.globalAlpha=this.opacity,this.ctx.setTransform(this.m11,this.m12,this.m21,this.m22,this.x+this.fontSize,this.y+this.fontSize/2),this.ctx.fillText(this.text,0,0),this.ctx.restore(),this.destory()}},{key:"drawPadding",value:function(){this.ctx.fillRect(this.fontSize,-1*this.fontSize,this.fontSize,this.fontSize)}},{key:"destory",value:function(){Object(n.a)(Object(o.a)(e.prototype),"destory",this).call(this),(this.x>window.innerWidth+this.fontSize||this.x<3*-this.fontSize)&&(this.life=-1)}},{key:"detectBottom",value:function(){this.y+this.y_acc>this.bottom&&(this.y=this.bottom,this.y_acc=0)}}]),e}(u.a),x=function(t){Object(r.a)(e,t);var i=Object(f.a)(e);function e(t){var a;return Object(c.a)(this,e),(a=i.call(this,t)).maxObjectCount=3,a.maxCooltime=40,a.count=0,a}return Object(h.a)(e,[{key:"init",value:function(){this.canvas.style.letterSpacing="-10px",this.ctx=this.canvas.getContext("2d"),this.ctx.save(),this.canvas.width=this.width,this.canvas.height=this.height}},{key:"start",value:function(){var t=this;this.animation=requestAnimationFrame((function i(){t.createObject(),t.removeObject(),t.drawBackground(),t.drawObject(),t.animation=requestAnimationFrame(i)}))}},{key:"createObject",value:function(){this.cooltime+=1,this.cooltime<this.maxCooltime||this.objects.length>=this.maxObjectCount||(this.objects.push(new b(this.getKkeongParams())),this.cooltime=0,this.count+=1)}},{key:"getKkeongParams",value:function(){var t,i,a,c,h,r,f=Object(n.a)(Object(o.a)(e.prototype),"getParams",this).call(this);return this.count%3==0?(i=2*-(t=150*this.rectSum),a=r=window.innerHeight-t/2,c=9,h=-25):this.count%3==1?(t=100*this.rectSum,r=.7*window.innerHeight-t/2,i=this.width,a=r,c=-6,h=-20):this.count%3==2&&(i=2*-(t=50*this.rectSum),a=r=.3*window.innerHeight-t/2,c=3,h=-16),Object(s.a)(Object(s.a)({},f),{},{fontSize:t,x:i,y:a,default_x_acc:c,default_y_acc:h,bottom:r,life:3e3})}},{key:"getChungParams",value:function(){var t=Object(n.a)(Object(o.a)(e.prototype),"getParams",this).call(this),i=150*this.rectSum;return Object(s.a)(Object(s.a)({},t),{},{fontSize:i,x:i-10,y:window.innerHeight-i/2,life:1e3})}}]),e}(m.a),y=e(1);i.default=function(t){var i=t.color,e=t.backgroundColor,s=t.fontFamily,c=Object(a.useRef)(null);return Object(a.useEffect)((function(){var t=c.current,a=new x({canvas:t,color:i,backgroundColor:e,fontFamily:s});a.init(),a.start()}),[i,e,s]),Object(y.jsx)("canvas",{ref:c})}}}]);