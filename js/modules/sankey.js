/*
  Highcharts JS v6.0.0 (2017-10-04)
 Sankey diagram module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:k(Highcharts)})(function(k){(function(g){var k=g.defined,d=g.each,w=g.extend,x=g.seriesType,y=g.pick,r=g.Point;x("sankey","column",{colorByPoint:!0,curveFactor:.33,dataLabels:{enabled:!0,backgroundColor:"none",crop:!1,nodeFormat:"{point.name}",format:"",inside:!0},nodeWidth:20,nodePadding:10,showInLegend:!1,states:{hover:{linkOpacity:1}},tooltip:{followPointer:!0,headerFormat:'\x3cspan class\x3d"highcharts-header"\x3e{series.name}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:"{point.fromNode.name} \u2192 {point.toNode.name}: \x3cb\x3e{point.weight}\x3c/b\x3e\x3cbr/\x3e",nodeFormat:"{point.name}: \x3cb\x3e{point.sum}\x3c/b\x3e\x3cbr/\x3e"}},{isCartesian:!1,forceDL:!0,createNode:function(c){function a(a,b){return g.find(a,function(a){return a.id===b})}var b=a(this.nodes,c),e;b||(e=this.options.nodes&&a(this.options.nodes,c),b=(new r).init(this,w({className:"highcharts-node",isNode:!0,id:c,y:1},e)),b.linksTo=[],b.linksFrom=[],b.formatPrefix="node",b.name=b.name||
b.id,b.getSum=function(){var a=0,c=0;d(b.linksTo,function(c){a+=c.weight});d(b.linksFrom,function(a){c+=a.weight});return Math.max(a,c)},b.offset=function(a,c){for(var f=0,e=0;e<b[c].length;e++){if(b[c][e]===a)return f;f+=b[c][e].weight}},b.hasShape=function(){var a=0;d(b.linksTo,function(c){c.outgoing&&a++});return!b.linksTo.length||a!==b.linksTo.length},this.nodes.push(b));return b},createNodeColumn:function(){var c=this.chart,a=[],b=this.options.nodePadding;a.sum=function(){var a=0;d(this,function(c){a+=
c.getSum()});return a};a.offset=function(c,f){for(var e=0,d=0;d<a.length;d++){if(a[d]===c)return e;e+=a[d].getSum()*f+b}};a.top=function(e){for(var f=0,d=0;d<a.length;d++)0<d&&(f+=b),f+=a[d].getSum()*e;return(c.plotSizeY-f)/2};return a},createNodeColumns:function(){var c=[];d(this.nodes,function(a){var b=0,d,f;if(0===a.linksTo.length)a.column=0;else{for(d=0;d<a.linksTo.length;d++)f=a.linksTo[0],f.fromNode.column>b&&(b=f.fromNode.column);a.column=b+1}c[a.column]||(c[a.column]=this.createNodeColumn());
c[a.column].push(a)},this);return c},generatePoints:function(){var c={};g.Series.prototype.generatePoints.call(this);this.nodes||(this.nodes=[]);this.colorCounter=0;d(this.nodes,function(a){a.linksFrom.length=0;a.linksTo.length=0});d(this.points,function(a){k(a.from)&&(c[a.from]||(c[a.from]=this.createNode(a.from)),c[a.from].linksFrom.push(a),a.fromNode=c[a.from],a.colorIndex=y(a.options.colorIndex,c[a.from].colorIndex));k(a.to)&&(c[a.to]||(c[a.to]=this.createNode(a.to)),c[a.to].linksTo.push(a),a.toNode=
c[a.to]);a.name=a.name||a.id},this)},translate:function(){this.processedXData||this.processData();this.generatePoints();this.nodeColumns=this.createNodeColumns();var c=this.chart,a=c.inverted,b=this.options,e=0,f=b.nodeWidth,g=this.nodeColumns,k=(c.plotSizeX-f)/(g.length-1),t=(a?-k:k)*b.curveFactor,m=Infinity;d(this.nodeColumns,function(a){m=Math.min(m,(c.plotSizeY-(a.length-1)*b.nodePadding)/a.sum())});d(this.nodeColumns,function(b){d(b,function(l){var r=l.getSum(),u=r*m,v=b.top(m)+b.offset(l,m),
n=a?c.plotSizeX-e:e;l.sum=r;l.shapeType="rect";l.shapeArgs=a?{x:n-f,y:c.plotSizeY-v-u,width:f,height:u}:{x:n,y:v,width:f,height:u};l.shapeArgs.display=l.hasShape()?"":"none";l.plotY=1;d(l.linksFrom,function(b){var d=b.weight*m,e=l.offset(b,"linksFrom")*m,e=v+e,h=b.toNode,p=g[h.column].top(m)+h.offset(b,"linksTo")*m+g[h.column].offset(h,m),q=f,h=h.column*k,r=b.outgoing;a&&(e=c.plotSizeY-e,p=c.plotSizeY-p,h=c.plotSizeX-h,q=-q,d=-d);b.shapeType="path";b.shapeArgs={d:["M",n+q,e,"C",n+q+t,e,h-t,p,h,p,
"L",h+(r?q:0),p+d/2,"L",h,p+d,"C",h-t,p+d,n+q+t,e+d,n+q,e+d,"z"]};b.dlBox={x:n+(h-n+q)/2,y:e+(p-e)/2,height:d,width:0};b.y=b.plotY=1;b.color||(b.color=l.color)})});e+=k},this)},render:function(){var c=this.points;this.points=this.points.concat(this.nodes);g.seriesTypes.column.prototype.render.call(this);this.points=c},animate:g.Series.prototype.animate},{getClassName:function(){return"highcharts-link "+r.prototype.getClassName.call(this)},isValid:function(){return this.isNode||"number"===typeof this.weight}})})(k)});
