function mht(e){var t="";if(16==e.length)for(var n=0;4>n;n++)t+="<span style='font-family: monospace'>["+e[4*n+0].toFixed(4)+","+e[4*n+1].toFixed(4)+","+e[4*n+2].toFixed(4)+","+e[4*n+3].toFixed(4)+"]</span><br>";else{if(9!=e.length)return e.toString();for(var n=0;3>n;n++)t+="<span style='font-family: monospace'>["+e[3*n+0].toFixed(4)+","+e[3*n+1].toFixed(4)+","+e[3*n+2].toFixed(4)+"]</font><br>"}return t}function makeLookAt(e,t,n,s,r,i,l,h,o){var m=$V([e,t,n]),a=$V([s,r,i]),u=$V([l,h,o]),f=m.subtract(a).toUnitVector(),c=u.cross(f).toUnitVector(),p=f.cross(c).toUnitVector(),g=$M([[c.e(1),c.e(2),c.e(3),0],[p.e(1),p.e(2),p.e(3),0],[f.e(1),f.e(2),f.e(3),0],[0,0,0,1]]),v=$M([[1,0,0,-e],[0,1,0,-t],[0,0,1,-n],[0,0,0,1]]);return g.x(v)}function makeOrtho(e,t,n,s,r,i){var l=-(t+e)/(t-e),h=-(s+n)/(s-n),o=-(i+r)/(i-r);return $M([[2/(t-e),0,0,l],[0,2/(s-n),0,h],[0,0,-2/(i-r),o],[0,0,0,1]])}function makePerspective(e,t,n,s){var r=n*Math.tan(e*Math.PI/360),i=-r,l=i*t,h=r*t;return makeFrustum(l,h,i,r,n,s)}function makeFrustum(e,t,n,s,r,i){var l=2*r/(t-e),h=2*r/(s-n),o=(t+e)/(t-e),m=(s+n)/(s-n),a=-(i+r)/(i-r),u=-2*i*r/(i-r);return $M([[l,0,o,0],[0,h,m,0],[0,0,a,u],[0,0,-1,0]])}function makeOrtho(e,t,n,s,r,i){var l=-(t+e)/(t-e),h=-(s+n)/(s-n),o=-(i+r)/(i-r);return $M([[2/(t-e),0,0,l],[0,2/(s-n),0,h],[0,0,-2/(i-r),o],[0,0,0,1]])}Matrix.Translation=function(e){if(2==e.elements.length){var t=Matrix.I(3);return t.elements[2][0]=e.elements[0],t.elements[2][1]=e.elements[1],t}if(3==e.elements.length){var t=Matrix.I(4);return t.elements[0][3]=e.elements[0],t.elements[1][3]=e.elements[1],t.elements[2][3]=e.elements[2],t}throw"Invalid length for Translation"},Matrix.prototype.flatten=function(){var e=[];if(0==this.elements.length)return[];for(var t=0;t<this.elements[0].length;t++)for(var n=0;n<this.elements.length;n++)e.push(this.elements[n][t]);return e},Matrix.prototype.ensure4x4=function(){if(4==this.elements.length&&4==this.elements[0].length)return this;if(this.elements.length>4||this.elements[0].length>4)return null;for(var e=0;e<this.elements.length;e++)for(var t=this.elements[e].length;4>t;t++)this.elements[e].push(e==t?1:0);for(var e=this.elements.length;4>e;e++)0==e?this.elements.push([1,0,0,0]):1==e?this.elements.push([0,1,0,0]):2==e?this.elements.push([0,0,1,0]):3==e&&this.elements.push([0,0,0,1]);return this},Matrix.prototype.make3x3=function(){return 4!=this.elements.length||4!=this.elements[0].length?null:Matrix.create([[this.elements[0][0],this.elements[0][1],this.elements[0][2]],[this.elements[1][0],this.elements[1][1],this.elements[1][2]],[this.elements[2][0],this.elements[2][1],this.elements[2][2]]])},Vector.prototype.flatten=function(){return this.elements};