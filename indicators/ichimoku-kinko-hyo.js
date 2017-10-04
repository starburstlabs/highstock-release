/*
  Highcharts JS v6.0.0 (2017-10-04)

 Indicator series type for Highstock

 (c) 2010-2017 Sebastian Bochan

 License: www.highcharts.com/license
*/
(function(n){"object"===typeof module&&module.exports?module.exports=n:n(Highcharts)})(function(n){(function(l){function n(a){return a.reduce(function(a,b){return Math.max(a,b[1])},-Infinity)}function B(a){return a.reduce(function(a,b){return Math.min(a,b[2])},Infinity)}function x(a){return{high:n(a),low:B(a)}}function C(a){var c,b,h,f,g;w(a.series,function(a){if(a.xData)for(f=a.xData,g=b=a.xIncrement?1:f.length-1;0<g;g--)if(h=f[g]-f[g-1],c===t||h<c)c=h});return c}var t,D=l.seriesType,w=l.each,y=
l.merge,z=l.color,E=l.isArray,A=l.defined,v=l.seriesTypes.sma;D("ikh","sma",{name:"IKH (52, 26, 9)",params:{period:26,periodTenkan:9,periodSenkouSpanB:52},marker:{enabled:!1},tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eTENKAN SEN: {point.tenkanSen:.3f}\x3cbr/\x3eKIJUN SEN: {point.kijunSen:.3f}\x3cbr/\x3eCHIKOU SPAN: {point.chikouSpan:.3f}\x3cbr/\x3eSENKOU SPAN A: {point.senkouSpanA:.3f}\x3cbr/\x3eSENKOU SPAN B: {point.senkouSpanB:.3f}\x3cbr/\x3e'},
tenkanLine:{styles:{lineWidth:1,lineColor:void 0}},kijunLine:{styles:{lineWidth:1,lineColor:void 0}},chikouLine:{styles:{lineWidth:1,lineColor:void 0}},senkouSpanA:{styles:{lineWidth:1,lineColor:void 0}},senkouSpanB:{styles:{lineWidth:1,lineColor:void 0}},senkouSpan:{styles:{fill:"rgba(255, 0, 0, 0.5)"}},dataGrouping:{approximation:"averages"}},{pointArrayMap:["tenkanSen","kijunSen","chikouSpan","senkouSpanA","senkouSpanB"],pointValKey:"tenkanSen",init:function(){v.prototype.init.apply(this,arguments);
this.options=y({tenkanLine:{styles:{lineColor:this.color}},kijunLine:{styles:{lineColor:this.color}},chikouLine:{styles:{lineColor:this.color}},senkouSpanA:{styles:{lineColor:this.color,fill:z(this.color).setOpacity(.5).get()}},senkouSpanB:{styles:{lineColor:this.color,fill:z(this.color).setOpacity(.5).get()}},senkouSpan:{styles:{fill:z(this.color).setOpacity(.2).get()}}},this.options)},toYData:function(a){return[a.tenkanSen,a.kijunSen,a.chikouSpan,a.senkouSpanA,a.senkouSpanB]},translate:function(){var a=
this;v.prototype.translate.apply(a);w(a.points,function(c){w(a.pointArrayMap,function(b){A(c[b])&&(c["plot"+b]=a.yAxis.toPixels(c[b],!0),c.plotY=c["plot"+b],c.tooltipPos=[c.plotX,c["plot"+b]],c.isNull=!1)})})},drawGraph:function(){for(var a=this,c=a.points,b=c.length,h=a.options,f=a.graph,g=a.color,l={options:{gapSize:h.gapSize}},e=a.pointArrayMap.length,m=[[],[],[],[],[],[]],p,q,k;b--;)for(q=c[b],k=0;k<e;k++)p=a.pointArrayMap[k],A(q[p])&&m[k].push({plotX:q.plotX,plotY:q["plot"+p],isNull:!1});w("tenkanLine kijunLine chikouLine senkouSpanA senkouSpanB senkouSpan".split(" "),
function(b,c){a.points=m[c];a.options=y(h[b].styles,l);a.graph=a["graph"+b];a.nextPoints=m[c-1];5===c?(a.points=m[c-1],a.options=y(h[b].styles,l),a.graph=a["graph"+b],a.nextPoints=m[c-2],a.fillGraph=!0,a.color=a.options.fill):(a.fillGraph=!1,a.color=g);v.prototype.drawGraph.call(a);a["graph"+b]=a.graph});delete a.nextPoints;delete a.fillGraph;a.points=c;a.options=h;a.graph=f},getGraphPath:function(a){var c,b,h=[];a=a||this.points;if(this.fillGraph&&this.nextPoints){b=v.prototype.getGraphPath.call(this,
this.nextPoints);b[0]="L";c=v.prototype.getGraphPath.call(this,a);b=b.slice(0,c.length);for(var f=b.length-1;0<f;f-=3)h.push(b[f-2],b[f-1],b[f]);c=c.concat(h)}else c=v.prototype.getGraphPath.apply(this,arguments);return c},getValues:function(a,c){var b=c.period,h=c.periodTenkan;c=c.periodSenkouSpanB;var f=a.xData,g=a.yData,l=g&&g.length||0;a=C(a.xAxis);var e=[],m=[],p,q,k,r,u,d,n;if(f.length<=b||!E(g[0])||4!==g[0].length)return!1;p=f[0]-b*a;for(d=0;d<b;d++)m.push(p+d*a);for(d=0;d<l;d++)d>=h&&(k=g.slice(d-
h,d),k=x(k),k=(k.high+k.low)/2),d>=b&&(r=g.slice(d-b,d),r=x(r),r=(r.high+r.low)/2,n=(k+r)/2),d>=c&&(u=g.slice(d-c,d),u=x(u),u=(u.high+u.low)/2),p=g[d][0],q=f[d],e[d]===t&&(e[d]=[]),e[d+b]===t&&(e[d+b]=[]),e[d+b][0]=k,e[d+b][1]=r,e[d+b][2]=t,d>=b?e[d-b][2]=p:(e[d+b][3]=t,e[d+b][4]=t),e[d+2*b]===t&&(e[d+2*b]=[]),e[d+2*b][3]=n,e[d+2*b][4]=u,m.push(q);for(d=1;d<=b;d++)m.push(q+d*a);return{values:e,xData:m,yData:e}}})})(n)});
