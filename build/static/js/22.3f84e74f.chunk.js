"use strict";(self.webpackChunkcalculadora_windows=self.webpackChunkcalculadora_windows||[]).push([[22],{5022:function(n,t,e){e.r(t),e.d(t,{createSwipeBackGesture:function(){return u}});var r=e(1811),a=e(9507),i=e(7909),u=function(n,t,e,u,c){var o=n.ownerDocument.defaultView,s=(0,a.i)(n),d=function(n){return s?-n.deltaX:n.deltaX};return(0,i.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(n){return function(n){var t=n.startX;return s?t>=o.innerWidth-50:t<=50}(n)&&t()},onStart:e,onMove:function(n){var t=d(n)/o.innerWidth;u(t)},onEnd:function(n){var t=d(n),e=o.innerWidth,a=t/e,i=function(n){return s?-n.velocityX:n.velocityX}(n),u=i>=0&&(i>.2||t>e/2),f=(u?1-a:a)*e,l=0;if(f>5){var h=f/Math.abs(i);l=Math.min(h,540)}c(u,a<=0?.01:(0,r.j)(0,a,.9999),l)}})}}}]);
//# sourceMappingURL=22.3f84e74f.chunk.js.map