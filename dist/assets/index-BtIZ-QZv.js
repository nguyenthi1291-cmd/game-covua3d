(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ca="170",Fi={ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dh=0,Oa=1,fh=2,hl=1,ul=2,vn=3,zn=0,Le=1,Ce=2,Fn=0,si=1,dr=2,Ba=3,za=4,ph=5,Qn=100,mh=101,gh=102,_h=103,vh=104,xh=200,Mh=201,yh=202,Sh=203,po=204,mo=205,Eh=206,bh=207,wh=208,Th=209,Ah=210,Ch=211,Rh=212,Ph=213,Lh=214,go=0,_o=1,vo=2,Vi=3,xo=4,Mo=5,yo=6,So=7,dl=0,Dh=1,Ih=2,On=0,Uh=1,Nh=2,Fh=3,fl=4,Oh=5,Bh=6,zh=7,pl=300,Hi=301,Gi=302,Eo=303,bo=304,xr=306,fr=1e3,ni=1001,wo=1002,en=1003,kh=1004,Cs=1005,an=1006,Ar=1007,ii=1008,Sn=1009,ml=1010,gl=1011,ps=1012,la=1013,oi=1014,xn=1015,Ms=1016,ha=1017,ua=1018,Wi=1020,_l=35902,vl=1021,xl=1022,Qe=1023,Ml=1024,yl=1025,Oi=1026,Xi=1027,Sl=1028,da=1029,El=1030,fa=1031,pa=1033,rr=33776,or=33777,ar=33778,cr=33779,To=35840,Ao=35841,Co=35842,Ro=35843,Po=36196,Lo=37492,Do=37496,Io=37808,Uo=37809,No=37810,Fo=37811,Oo=37812,Bo=37813,zo=37814,ko=37815,Vo=37816,Ho=37817,Go=37818,Wo=37819,Xo=37820,qo=37821,lr=36492,Yo=36494,$o=36495,bl=36283,Ko=36284,Zo=36285,jo=36286,Vh=3200,Hh=3201,wl=0,Gh=1,Un="",Fe="srgb",Yi="srgb-linear",Mr="linear",ne="srgb",mi=7680,ka=519,Wh=512,Xh=513,qh=514,Tl=515,Yh=516,$h=517,Kh=518,Zh=519,Va=35044,Ha="300 es",Mn=2e3,pr=2001;class ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ga=1234567;const as=Math.PI/180,ms=180/Math.PI;function di(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function ma(i,t){return(i%t+t)%t}function jh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jh(i,t,e){return i!==t?(e-i)/(t-i):0}function cs(i,t,e){return(1-e)*i+e*t}function Qh(i,t,e,n){return cs(i,t,1-Math.exp(-e*n))}function tu(i,t=1){return t-Math.abs(ma(i,t*2)-t)}function eu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function iu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function su(i,t){return i+Math.random()*(t-i)}function ru(i){return i*(.5-Math.random())}function ou(i){i!==void 0&&(Ga=i);let t=Ga+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function au(i){return i*as}function cu(i){return i*ms}function lu(i){return(i&i-1)===0&&i!==0}function hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function du(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),p=o((t-n)/2),m=r((n-t)/2),u=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*f,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*u,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*u,a*l);break;case"ZYZ":i.set(c*u,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Li(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Al={DEG2RAD:as,RAD2DEG:ms,generateUUID:di,clamp:Ee,euclideanModulo:ma,mapLinear:jh,inverseLerp:Jh,lerp:cs,damp:Qh,pingpong:tu,smoothstep:eu,smootherstep:nu,randInt:iu,randFloat:su,randFloatSpread:ru,seededRandom:ou,degToRad:au,radToDeg:cu,isPowerOfTwo:lu,ceilPowerOfTwo:hu,floorPowerOfTwo:uu,setQuaternionFromProperEuler:du,normalize:Re,denormalize:Li};class tt{constructor(t=0,e=0){tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],p=n[2],m=n[5],u=n[8],_=s[0],g=s[3],d=s[6],S=s[1],x=s[4],v=s[7],D=s[2],T=s[5],C=s[8];return r[0]=o*_+a*S+c*D,r[3]=o*g+a*x+c*T,r[6]=o*d+a*v+c*C,r[1]=l*_+h*S+f*D,r[4]=l*g+h*x+f*T,r[7]=l*d+h*v+f*C,r[2]=p*_+m*S+u*D,r[5]=p*g+m*x+u*T,r[8]=p*d+m*v+u*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,p=a*c-h*r,m=l*r-o*c,u=e*f+n*p+s*m;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/u;return t[0]=f*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=p*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Cr.makeScale(t,e)),this}rotate(t){return this.premultiply(Cr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cr=new kt;function Cl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fu(){const i=mr("canvas");return i.style.display="block",i}const Wa={};function rs(i){i in Wa||(Wa[i]=!0,console.warn(i))}function pu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function mu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?Mr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xa=[.64,.33,.3,.6,.15,.06],qa=[.2126,.7152,.0722],Ya=[.3127,.329],$a=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ka=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Yi]:{primaries:Xa,whitePoint:Ya,transfer:Mr,toXYZ:$a,fromXYZ:Ka,luminanceCoefficients:qa,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:Xa,whitePoint:Ya,transfer:ne,toXYZ:$a,fromXYZ:Ka,luminanceCoefficients:qa,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});let gi;class _u{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gi===void 0&&(gi=mr("canvas")),gi.width=t.width,gi.height=t.height;const n=gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vu=0;class Rl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rr(s[o].image)):r.push(Rr(s[o]))}else r=Rr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Rr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_u.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xu=0;class De extends ui{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=ni,s=ni,r=an,o=ii,a=Qe,c=Sn,l=De.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=di(),this.name="",this.source=new Rl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=pl;De.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,s=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],p=c[1],m=c[5],u=c[9],_=c[2],g=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(u-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(u+g)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(m+1)/2,D=(d+1)/2,T=(h+p)/4,C=(f+_)/4,P=(u+g)/4;return x>v&&x>D?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=C/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=P/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=C/r,s=P/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-u)*(g-u)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(g-u)/S,this.y=(f-_)/S,this.z=(p-h)/S,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mu extends ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Mu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pl extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yu extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const p=r[o+0],m=r[o+1],u=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=u,t[e+3]=_;return}if(f!==_||c!==p||l!==m||h!==u){let g=1-a;const d=c*p+l*m+h*u+f*_,S=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const D=Math.sqrt(x),T=Math.atan2(D,d*S);g=Math.sin(g*T)/D,a=Math.sin(a*T)/D}const v=a*S;if(c=c*g+p*v,l=l*g+m*v,h=h*g+u*v,f=f*g+_*v,g===1-a){const D=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=D,l*=D,h*=D,f*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],p=r[o+1],m=r[o+2],u=r[o+3];return t[e]=a*u+h*f+c*m-l*p,t[e+1]=c*u+h*p+l*f-a*m,t[e+2]=l*u+h*m+a*p-c*f,t[e+3]=h*u-a*f-c*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),p=c(n/2),m=c(s/2),u=c(r/2);switch(o){case"XYZ":this._x=p*h*f+l*m*u,this._y=l*m*f-p*h*u,this._z=l*h*u+p*m*f,this._w=l*h*f-p*m*u;break;case"YXZ":this._x=p*h*f+l*m*u,this._y=l*m*f-p*h*u,this._z=l*h*u-p*m*f,this._w=l*h*f+p*m*u;break;case"ZXY":this._x=p*h*f-l*m*u,this._y=l*m*f+p*h*u,this._z=l*h*u+p*m*f,this._w=l*h*f-p*m*u;break;case"ZYX":this._x=p*h*f-l*m*u,this._y=l*m*f+p*h*u,this._z=l*h*u-p*m*f,this._w=l*h*f+p*m*u;break;case"YZX":this._x=p*h*f+l*m*u,this._y=l*m*f+p*h*u,this._z=l*h*u-p*m*f,this._w=l*h*f-p*m*u;break;case"XZY":this._x=p*h*f-l*m*u,this._y=l*m*f-p*h*u,this._z=l*h*u+p*m*f,this._w=l*h*f+p*m*u;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],p=n+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Za.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Za.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pr.copy(this).projectOnVector(t),this.sub(Pr)}reflect(t){return this.sub(Pr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pr=new R,Za=new ci;class ys{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ye):Ye.fromBufferAttribute(r,o),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(t.matrixWorld),this.union(Rs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Ps.subVectors(this.max,ji),_i.subVectors(t.a,ji),vi.subVectors(t.b,ji),xi.subVectors(t.c,ji),wn.subVectors(vi,_i),Tn.subVectors(xi,vi),qn.subVectors(_i,xi);let e=[0,-wn.z,wn.y,0,-Tn.z,Tn.y,0,-qn.z,qn.y,wn.z,0,-wn.x,Tn.z,0,-Tn.x,qn.z,0,-qn.x,-wn.y,wn.x,0,-Tn.y,Tn.x,0,-qn.y,qn.x,0];return!Lr(e,_i,vi,xi,Ps)||(e=[1,0,0,0,1,0,0,0,1],!Lr(e,_i,vi,xi,Ps))?!1:(Ls.crossVectors(wn,Tn),e=[Ls.x,Ls.y,Ls.z],Lr(e,_i,vi,xi,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new R,new R,new R,new R,new R,new R,new R,new R],Ye=new R,Rs=new ys,_i=new R,vi=new R,xi=new R,wn=new R,Tn=new R,qn=new R,ji=new R,Ps=new R,Ls=new R,Yn=new R;function Lr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Yn.fromArray(i,r);const a=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),c=t.dot(Yn),l=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Su=new ys,Ji=new R,Dr=new R;class Ss{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Su.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Dr)),this.expandByPoint(Ji.copy(t.center).sub(Dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new R,Ir=new R,Ds=new R,An=new R,Ur=new R,Is=new R,Nr=new R;class Es{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ir.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Ir);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ds),a=An.dot(this.direction),c=-An.dot(Ds),l=An.lengthSq(),h=Math.abs(1-o*o);let f,p,m,u;if(h>0)if(f=o*c-a,p=o*a-c,u=r*h,f>=0)if(p>=-u)if(p<=u){const _=1/h;f*=_,p*=_,m=f*(f+o*p+2*a)+p*(o*f+p+2*c)+l}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p<=-u?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l):p<=u?(f=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ir).addScaledVector(Ds,p),m}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){Ur.subVectors(e,t),Is.subVectors(n,t),Nr.crossVectors(Ur,Is);let o=this.direction.dot(Nr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,t);const c=a*this.direction.dot(Is.crossVectors(An,Is));if(c<0)return null;const l=a*this.direction.dot(Ur.cross(An));if(l<0||c+l>o)return null;const h=-a*An.dot(Nr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,o,a,c,l,h,f,p,m,u,_,g){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,f,p,m,u,_,g)}set(t,e,n,s,r,o,a,c,l,h,f,p,m,u,_,g){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=p,d[3]=m,d[7]=u,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const p=o*h,m=o*f,u=a*h,_=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=m+u*l,e[5]=p-_*l,e[9]=-a*c,e[2]=_-p*l,e[6]=u+m*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,m=c*f,u=l*h,_=l*f;e[0]=p+_*a,e[4]=u*a-m,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=m*a-u,e[6]=_+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,m=c*f,u=l*h,_=l*f;e[0]=p-_*a,e[4]=-o*f,e[8]=u+m*a,e[1]=m+u*a,e[5]=o*h,e[9]=_-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,m=o*f,u=a*h,_=a*f;e[0]=c*h,e[4]=u*l-m,e[8]=p*l+_,e[1]=c*f,e[5]=_*l+p,e[9]=m*l-u,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,m=o*l,u=a*c,_=a*l;e[0]=c*h,e[4]=_-p*f,e[8]=u*f+m,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*f+u,e[10]=p-_*f}else if(t.order==="XZY"){const p=o*c,m=o*l,u=a*c,_=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=p*f+_,e[5]=o*h,e[9]=m*f-u,e[2]=u*f-m,e[6]=a*h,e[10]=_*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Eu,t,bu)}lookAt(t,e,n){const s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Cn.crossVectors(n,Be),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Cn.crossVectors(n,Be)),Cn.normalize(),Us.crossVectors(Be,Cn),s[0]=Cn.x,s[4]=Us.x,s[8]=Be.x,s[1]=Cn.y,s[5]=Us.y,s[9]=Be.y,s[2]=Cn.z,s[6]=Us.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],p=n[9],m=n[13],u=n[2],_=n[6],g=n[10],d=n[14],S=n[3],x=n[7],v=n[11],D=n[15],T=s[0],C=s[4],P=s[8],b=s[12],M=s[1],L=s[5],k=s[9],O=s[13],V=s[2],K=s[6],H=s[10],nt=s[14],G=s[3],lt=s[7],gt=s[11],St=s[15];return r[0]=o*T+a*M+c*V+l*G,r[4]=o*C+a*L+c*K+l*lt,r[8]=o*P+a*k+c*H+l*gt,r[12]=o*b+a*O+c*nt+l*St,r[1]=h*T+f*M+p*V+m*G,r[5]=h*C+f*L+p*K+m*lt,r[9]=h*P+f*k+p*H+m*gt,r[13]=h*b+f*O+p*nt+m*St,r[2]=u*T+_*M+g*V+d*G,r[6]=u*C+_*L+g*K+d*lt,r[10]=u*P+_*k+g*H+d*gt,r[14]=u*b+_*O+g*nt+d*St,r[3]=S*T+x*M+v*V+D*G,r[7]=S*C+x*L+v*K+D*lt,r[11]=S*P+x*k+v*H+D*gt,r[15]=S*b+x*O+v*nt+D*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],p=t[10],m=t[14],u=t[3],_=t[7],g=t[11],d=t[15];return u*(+r*c*f-s*l*f-r*a*p+n*l*p+s*a*m-n*c*m)+_*(+e*c*m-e*l*p+r*o*p-s*o*m+s*l*h-r*c*h)+g*(+e*l*f-e*a*m-r*o*f+n*o*m+r*a*h-n*l*h)+d*(-s*a*h-e*c*f+e*a*p+s*o*f-n*o*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],p=t[10],m=t[11],u=t[12],_=t[13],g=t[14],d=t[15],S=f*g*l-_*p*l+_*c*m-a*g*m-f*c*d+a*p*d,x=u*p*l-h*g*l-u*c*m+o*g*m+h*c*d-o*p*d,v=h*_*l-u*f*l+u*a*m-o*_*m-h*a*d+o*f*d,D=u*f*c-h*_*c-u*a*p+o*_*p+h*a*g-o*f*g,T=e*S+n*x+s*v+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=S*C,t[1]=(_*p*r-f*g*r-_*s*m+n*g*m+f*s*d-n*p*d)*C,t[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*d+n*c*d)*C,t[3]=(f*c*r-a*p*r-f*s*l+n*p*l+a*s*m-n*c*m)*C,t[4]=x*C,t[5]=(h*g*r-u*p*r+u*s*m-e*g*m-h*s*d+e*p*d)*C,t[6]=(u*c*r-o*g*r-u*s*l+e*g*l+o*s*d-e*c*d)*C,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*m+e*c*m)*C,t[8]=v*C,t[9]=(u*f*r-h*_*r-u*n*m+e*_*m+h*n*d-e*f*d)*C,t[10]=(o*_*r-u*a*r+u*n*l-e*_*l-o*n*d+e*a*d)*C,t[11]=(h*a*r-o*f*r-h*n*l+e*f*l+o*n*m-e*a*m)*C,t[12]=D*C,t[13]=(h*_*s-u*f*s+u*n*p-e*_*p-h*n*g+e*f*g)*C,t[14]=(u*a*s-o*_*s-u*n*c+e*_*c+o*n*g-e*a*g)*C,t[15]=(o*f*s-h*a*s+h*n*c-e*f*c-o*n*p+e*a*p)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,p=r*l,m=r*h,u=r*f,_=o*h,g=o*f,d=a*f,S=c*l,x=c*h,v=c*f,D=n.x,T=n.y,C=n.z;return s[0]=(1-(_+d))*D,s[1]=(m+v)*D,s[2]=(u-x)*D,s[3]=0,s[4]=(m-v)*T,s[5]=(1-(p+d))*T,s[6]=(g+S)*T,s[7]=0,s[8]=(u+x)*C,s[9]=(g-S)*C,s[10]=(1-(p+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const o=Mi.set(s[4],s[5],s[6]).length(),a=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$e.copy(this);const l=1/r,h=1/o,f=1/a;return $e.elements[0]*=l,$e.elements[1]*=l,$e.elements[2]*=l,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=f,$e.elements[9]*=f,$e.elements[10]*=f,e.setFromRotationMatrix($e),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Mn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s);let m,u;if(a===Mn)m=-(o+r)/(o-r),u=-2*o*r/(o-r);else if(a===pr)m=-o/(o-r),u=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=u,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Mn){const c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(o-r),p=(e+t)*l,m=(n+s)*h;let u,_;if(a===Mn)u=(o+r)*f,_=-2*f;else if(a===pr)u=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-u,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new R,$e=new re,Eu=new R(0,0,0),bu=new R(1,1,1),Cn=new R,Us=new R,Be=new R,ja=new re,Ja=new ci;class ln{constructor(t=0,e=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ja.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ja,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ja.setFromEuler(this),this.setFromQuaternion(Ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class ga{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wu=0;const Qa=new R,yi=new ci,mn=new re,Ns=new R,Qi=new R,Tu=new R,Au=new ci,tc=new R(1,0,0),ec=new R(0,1,0),nc=new R(0,0,1),ic={type:"added"},Cu={type:"removed"},Si={type:"childadded",child:null},Fr={type:"childremoved",child:null};class ge extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new R,e=new ln,n=new ci,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new kt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return Qa.copy(t).applyQuaternion(this.quaternion),this.position.add(Qa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ns.copy(t):Ns.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Qi,Ns,this.up):mn.lookAt(Ns,Qi,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(mn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),Si.child=t,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cu),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,Tu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Au,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),p=o(t.skeletons),m=o(t.animations),u=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),u.length>0&&(n.nodes=u)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new R(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new R,gn=new R,Or=new R,_n=new R,Ei=new R,bi=new R,sc=new R,Br=new R,zr=new R,kr=new R,Vr=new se,Hr=new se,Gr=new se;class Je{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),gn.subVectors(n,e),Or.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(gn),c=Ke.dot(Or),l=gn.dot(gn),h=gn.dot(Or),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(l*c-a*h)*p,u=(o*h-a*c)*p;return r.set(1-m-u,u,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_n.x),c.addScaledVector(o,_n.y),c.addScaledVector(a,_n.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Vr.setScalar(0),Hr.setScalar(0),Gr.setScalar(0),Vr.fromBufferAttribute(t,e),Hr.fromBufferAttribute(t,n),Gr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Vr,r.x),o.addScaledVector(Hr,r.y),o.addScaledVector(Gr,r.z),o}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),gn.subVectors(t,e),Ke.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Ke.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ei.subVectors(s,n),bi.subVectors(r,n),Br.subVectors(t,n);const c=Ei.dot(Br),l=bi.dot(Br);if(c<=0&&l<=0)return e.copy(n);zr.subVectors(t,s);const h=Ei.dot(zr),f=bi.dot(zr);if(h>=0&&f<=h)return e.copy(s);const p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ei,o);kr.subVectors(t,r);const m=Ei.dot(kr),u=bi.dot(kr);if(u>=0&&m<=u)return e.copy(r);const _=m*l-c*u;if(_<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(bi,a);const g=h*u-m*f;if(g<=0&&f-h>=0&&m-u>=0)return sc.subVectors(r,s),a=(f-h)/(f-h+(m-u)),e.copy(s).addScaledVector(sc,a);const d=1/(g+_+p);return o=_*d,a=p*d,e.copy(n).addScaledVector(Ei,o).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Wr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=ma(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wr(o,r,t+1/3),this.g=Wr(o,r,t),this.b=Wr(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=Ll[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Yt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ee(Ae.r*255,0,255))*65536+Math.round(Ee(Ae.g*255,0,255))*256+Math.round(Ee(Ae.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,s=Ae.g,r=Ae.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Fe){Yt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,s=Ae.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Fs);const n=cs(Rn.h,Fs.h,e),s=cs(Rn.s,Fs.s,e),r=cs(Rn.l,Fs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Gt;Gt.NAMES=Ll;let Ru=0;class fi extends ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=di(),this.name="",this.blending=si,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==po&&(n.blendSrc=this.blendSrc),this.blendDst!==mo&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cn extends fi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new R,Os=new tt;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Va&&(t.usage=this.usage),t}}class Dl extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Il extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pu=0;const He=new re,Xr=new ge,wi=new R,ze=new ys,ts=new ys,ye=new R;class be extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cl(t)?Il:Dl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return Xr.lookAt(t),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(ze.min,ts.min),ze.expandByPoint(ye),ye.addVectors(ze.max,ts.max),ze.expandByPoint(ye)):(ze.expandByPoint(ts.min),ze.expandByPoint(ts.max))}ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ye.fromBufferAttribute(a,l),c&&(wi.fromBufferAttribute(t,l),ye.add(wi)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new R,c[P]=new R;const l=new R,h=new R,f=new R,p=new tt,m=new tt,u=new tt,_=new R,g=new R;function d(P,b,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),p.fromBufferAttribute(r,P),m.fromBufferAttribute(r,b),u.fromBufferAttribute(r,M),h.sub(l),f.sub(l),m.sub(p),u.sub(p);const L=1/(m.x*u.y-u.x*m.y);isFinite(L)&&(_.copy(h).multiplyScalar(u.y).addScaledVector(f,-m.y).multiplyScalar(L),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-u.x).multiplyScalar(L),a[P].add(_),a[b].add(_),a[M].add(_),c[P].add(g),c[b].add(g),c[M].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,b=S.length;P<b;++P){const M=S[P],L=M.start,k=M.count;for(let O=L,V=L+k;O<V;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new R,v=new R,D=new R,T=new R;function C(P){D.fromBufferAttribute(s,P),T.copy(D);const b=a[P];x.copy(b),x.sub(D.multiplyScalar(D.dot(b))).normalize(),v.crossVectors(T,b);const L=v.dot(c[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,L)}for(let P=0,b=S.length;P<b;++P){const M=S[P],L=M.start,k=M.count;for(let O=L,V=L+k;O<V;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,f=new R;if(t)for(let p=0,m=t.count;p<m;p+=3){const u=t.getX(p+0),_=t.getX(p+1),g=t.getX(p+2);s.fromBufferAttribute(e,u),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,u),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(u,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,p=new l.constructor(c.length*h);let m=0,u=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let d=0;d<h;d++)p[u++]=l[m++]}return new We(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){const p=l[h],m=t(p,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){const m=l[f];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new re,$n=new Es,Bs=new Ss,oc=new R,zs=new R,ks=new R,Vs=new R,qr=new R,Hs=new R,ac=new R,Gs=new R;class he extends ge{constructor(t=new be,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Hs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],f=r[c];h!==0&&(qr.fromBufferAttribute(f,t),o?Hs.addScaledVector(qr,h):Hs.addScaledVector(qr.sub(e),h))}e.add(Hs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(r),$n.copy(t.ray).recast(t.near),!(Bs.containsPoint($n.origin)===!1&&($n.intersectSphere(Bs,oc)===null||$n.origin.distanceToSquared(oc)>(t.far-t.near)**2))&&(rc.copy(r).invert(),$n.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let u=0,_=p.length;u<_;u++){const g=p[u],d=o[g.materialIndex],S=Math.max(g.start,m.start),x=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let v=S,D=x;v<D;v+=3){const T=a.getX(v),C=a.getX(v+1),P=a.getX(v+2);s=Ws(this,d,t,n,l,h,f,T,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const u=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let g=u,d=_;g<d;g+=3){const S=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);s=Ws(this,o,t,n,l,h,f,S,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let u=0,_=p.length;u<_;u++){const g=p[u],d=o[g.materialIndex],S=Math.max(g.start,m.start),x=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let v=S,D=x;v<D;v+=3){const T=v,C=v+1,P=v+2;s=Ws(this,d,t,n,l,h,f,T,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const u=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let g=u,d=_;g<d;g+=3){const S=g,x=g+1,v=g+2;s=Ws(this,o,t,n,l,h,f,S,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Lu(i,t,e,n,s,r,o,a){let c;if(t.side===Le?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===zn,a),c===null)return null;Gs.copy(a),Gs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Gs);return l<e.near||l>e.far?null:{distance:l,point:Gs.clone(),object:i}}function Ws(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,zs),i.getVertexPosition(c,ks),i.getVertexPosition(l,Vs);const h=Lu(i,t,e,n,zs,ks,Vs,ac);if(h){const f=new R;Je.getBarycoord(ac,zs,ks,Vs,f),s&&(h.uv=Je.getInterpolatedAttribute(s,a,c,l,f,new tt)),r&&(h.uv1=Je.getInterpolatedAttribute(r,a,c,l,f,new tt)),o&&(h.normal=Je.getInterpolatedAttribute(o,a,c,l,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new R,materialIndex:0};Je.getNormal(zs,ks,Vs,p.normal),h.face=p,h.barycoord=f}return h}class kn extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],f=[];let p=0,m=0;u("z","y","x",-1,-1,n,e,t,o,r,0),u("z","y","x",1,-1,n,e,-t,o,r,1),u("x","z","y",1,1,t,n,e,s,o,2),u("x","z","y",1,-1,t,n,-e,s,o,3),u("x","y","z",1,-1,t,e,n,s,r,4),u("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(f,2));function u(_,g,d,S,x,v,D,T,C,P,b){const M=v/C,L=D/P,k=v/2,O=D/2,V=T/2,K=C+1,H=P+1;let nt=0,G=0;const lt=new R;for(let gt=0;gt<H;gt++){const St=gt*L-O;for(let Ot=0;Ot<K;Ot++){const Kt=Ot*M-k;lt[_]=Kt*S,lt[g]=St*x,lt[d]=V,l.push(lt.x,lt.y,lt.z),lt[_]=0,lt[g]=0,lt[d]=T>0?1:-1,h.push(lt.x,lt.y,lt.z),f.push(Ot/C),f.push(1-gt/P),nt+=1}}for(let gt=0;gt<P;gt++)for(let St=0;St<C;St++){const Ot=p+St+K*gt,Kt=p+St+K*(gt+1),Y=p+(St+1)+K*(gt+1),st=p+(St+1)+K*gt;c.push(Ot,Kt,st),c.push(Kt,Y,st),G+=6}a.addGroup(m,G,b),m+=G,p+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){const t={};for(let e=0;e<i.length;e++){const n=qi(i[e]);for(const s in n)t[s]=n[s]}return t}function Du(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ul(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Iu={clone:qi,merge:Pe};var Uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends fi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uu,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Du(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Nl extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new R,cc=new tt,lc=new tt;class ke extends Nl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,cc,lc),e.subVectors(lc,cc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(as*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,Ai=1;class Fu extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(Ti,Ai,t,e);s.layers=this.layers,this.add(s);const r=new ke(Ti,Ai,t,e);r.layers=this.layers,this.add(r);const o=new ke(Ti,Ai,t,e);o.layers=this.layers,this.add(o);const a=new ke(Ti,Ai,t,e);a.layers=this.layers,this.add(a);const c=new ke(Ti,Ai,t,e);c.layers=this.layers,this.add(c);const l=new ke(Ti,Ai,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),u=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,p,m),t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Fl extends De{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ou extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new kn(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Fn});r.uniforms.tEquirect.value=e;const o=new he(s,r),a=e.minFilter;return e.minFilter===ii&&(e.minFilter=an),new Fu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Yr=new R,Bu=new R,zu=new kt;class Dn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Yr.subVectors(n,e).cross(Bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Yr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zu.getNormalMatrix(t),s=this.coplanarPoint(Yr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new Ss,Xs=new R;class _a{constructor(t=new Dn,e=new Dn,n=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],p=s[7],m=s[8],u=s[9],_=s[10],g=s[11],d=s[12],S=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,p-l,g-m,v-d).normalize(),n[1].setComponents(c+r,p+l,g+m,v+d).normalize(),n[2].setComponents(c+o,p+h,g+u,v+S).normalize(),n[3].setComponents(c-o,p-h,g-u,v-S).normalize(),n[4].setComponents(c-a,p-f,g-_,v-x).normalize(),e===Mn)n[5].setComponents(c+a,p+f,g+_,v+x).normalize();else if(e===pr)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Xs.x=s.normal.x>0?t.max.x:t.min.x,Xs.y=s.normal.y>0?t.max.y:t.min.y,Xs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ol(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ku(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,f=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((m,u)=>m.start-u.start);let p=0;for(let m=1;m<f.length;m++){const u=f[p],_=f[m];_.start<=u.start+u.count+1?u.count=Math.max(u.count,_.start+_.count-u.start):(++p,f[p]=_)}f.length=p+1;for(let m=0,u=f.length;m<u;m++){const _=f[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Hn extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=t/a,p=e/c,m=[],u=[],_=[],g=[];for(let d=0;d<h;d++){const S=d*p-o;for(let x=0;x<l;x++){const v=x*f-r;u.push(v,-S,0),_.push(0,0,1),g.push(x/a),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<a;S++){const x=S+l*d,v=S+l*(d+1),D=S+1+l*(d+1),T=S+1+l*d;m.push(x,v,T),m.push(v,D,T)}this.setIndex(m),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ku=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,td=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ud=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_d="gl_FragColor = linearToOutputTexel( gl_FragColor );",vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,of=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,If=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ff=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$f=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Vu,alphahash_pars_fragment:Hu,alphamap_fragment:Gu,alphamap_pars_fragment:Wu,alphatest_fragment:Xu,alphatest_pars_fragment:qu,aomap_fragment:Yu,aomap_pars_fragment:$u,batching_pars_vertex:Ku,batching_vertex:Zu,begin_vertex:ju,beginnormal_vertex:Ju,bsdfs:Qu,iridescence_fragment:td,bumpmap_pars_fragment:ed,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:sd,clipping_planes_vertex:rd,color_fragment:od,color_pars_fragment:ad,color_pars_vertex:cd,color_vertex:ld,common:hd,cube_uv_reflection_fragment:ud,defaultnormal_vertex:dd,displacementmap_pars_vertex:fd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:gd,colorspace_fragment:_d,colorspace_pars_fragment:vd,envmap_fragment:xd,envmap_common_pars_fragment:Md,envmap_pars_fragment:yd,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Id,envmap_vertex:Ed,fog_vertex:bd,fog_pars_vertex:wd,fog_fragment:Td,fog_pars_fragment:Ad,gradientmap_pars_fragment:Cd,lightmap_pars_fragment:Rd,lights_lambert_fragment:Pd,lights_lambert_pars_fragment:Ld,lights_pars_begin:Dd,lights_toon_fragment:Ud,lights_toon_pars_fragment:Nd,lights_phong_fragment:Fd,lights_phong_pars_fragment:Od,lights_physical_fragment:Bd,lights_physical_pars_fragment:zd,lights_fragment_begin:kd,lights_fragment_maps:Vd,lights_fragment_end:Hd,logdepthbuf_fragment:Gd,logdepthbuf_pars_fragment:Wd,logdepthbuf_pars_vertex:Xd,logdepthbuf_vertex:qd,map_fragment:Yd,map_pars_fragment:$d,map_particle_fragment:Kd,map_particle_pars_fragment:Zd,metalnessmap_fragment:jd,metalnessmap_pars_fragment:Jd,morphinstance_vertex:Qd,morphcolor_vertex:tf,morphnormal_vertex:ef,morphtarget_pars_vertex:nf,morphtarget_vertex:sf,normal_fragment_begin:rf,normal_fragment_maps:of,normal_pars_fragment:af,normal_pars_vertex:cf,normal_vertex:lf,normalmap_pars_fragment:hf,clearcoat_normal_fragment_begin:uf,clearcoat_normal_fragment_maps:df,clearcoat_pars_fragment:ff,iridescence_pars_fragment:pf,opaque_fragment:mf,packing:gf,premultiplied_alpha_fragment:_f,project_vertex:vf,dithering_fragment:xf,dithering_pars_fragment:Mf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:Ef,shadowmap_pars_vertex:bf,shadowmap_vertex:wf,shadowmask_pars_fragment:Tf,skinbase_vertex:Af,skinning_pars_vertex:Cf,skinning_vertex:Rf,skinnormal_vertex:Pf,specularmap_fragment:Lf,specularmap_pars_fragment:Df,tonemapping_fragment:If,tonemapping_pars_fragment:Uf,transmission_fragment:Nf,transmission_pars_fragment:Ff,uv_pars_fragment:Of,uv_pars_vertex:Bf,uv_vertex:zf,worldpos_vertex:kf,background_vert:Vf,background_frag:Hf,backgroundCube_vert:Gf,backgroundCube_frag:Wf,cube_vert:Xf,cube_frag:qf,depth_vert:Yf,depth_frag:$f,distanceRGBA_vert:Kf,distanceRGBA_frag:Zf,equirect_vert:jf,equirect_frag:Jf,linedashed_vert:Qf,linedashed_frag:tp,meshbasic_vert:ep,meshbasic_frag:np,meshlambert_vert:ip,meshlambert_frag:sp,meshmatcap_vert:rp,meshmatcap_frag:op,meshnormal_vert:ap,meshnormal_frag:cp,meshphong_vert:lp,meshphong_frag:hp,meshphysical_vert:up,meshphysical_frag:dp,meshtoon_vert:fp,meshtoon_frag:pp,points_vert:mp,points_frag:gp,shadow_vert:_p,shadow_frag:vp,sprite_vert:xp,sprite_frag:Mp},ht={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},rn={basic:{uniforms:Pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Pe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Pe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Pe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Pe([ht.points,ht.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Pe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Pe([ht.common,ht.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Pe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Pe([ht.sprite,ht.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Pe([ht.common,ht.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Pe([ht.lights,ht.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};rn.physical={uniforms:Pe([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const qs={r:0,b:0,g:0},Zn=new ln,yp=new re;function Sp(i,t,e,n,s,r,o){const a=new Gt(0);let c=r===!0?0:1,l,h,f=null,p=0,m=null;function u(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1;const v=u(S);v===null?d(a,c):v&&v.isColor&&(d(v,1),x=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,x){const v=u(x);v&&(v.isCubeTexture||v.mapping===xr)?(h===void 0&&(h=new he(new kn(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:qi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zn.copy(x.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler(Zn)),h.material.toneMapped=Yt.getTransfer(v.colorSpace)!==ne,(f!==v||p!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,p=v.version,m=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new he(new Hn(2,2),new Vn({name:"BackgroundMaterial",uniforms:qi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,p=v.version,m=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function d(S,x){S.getRGB(qs,Ul(i)),n.buffers.color.setClear(qs.r,qs.g,qs.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,d(a,c)},render:_,addToRenderList:g}}function Ep(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(M,L,k,O,V){let K=!1;const H=f(O,k,L);r!==H&&(r=H,l(r.object)),K=m(M,O,k,V),K&&u(M,O,k,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(M,L,k,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,L,k){const O=k.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let K=V[L.id];K===void 0&&(K={},V[L.id]=K);let H=K[O];return H===void 0&&(H=p(c()),K[O]=H),H}function p(M){const L=[],k=[],O=[];for(let V=0;V<e;V++)L[V]=0,k[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,L,k,O){const V=r.attributes,K=L.attributes;let H=0;const nt=k.getAttributes();for(const G in nt)if(nt[G].location>=0){const gt=V[G];let St=K[G];if(St===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(St=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(St=M.instanceColor)),gt===void 0||gt.attribute!==St||St&&gt.data!==St.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function u(M,L,k,O){const V={},K=L.attributes;let H=0;const nt=k.getAttributes();for(const G in nt)if(nt[G].location>=0){let gt=K[G];gt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor));const St={};St.attribute=gt,gt&&gt.data&&(St.data=gt.data),V[G]=St,H++}r.attributes=V,r.attributesNum=H,r.index=O}function _(){const M=r.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function g(M){d(M,0)}function d(M,L){const k=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;k[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),V[M]!==L&&(i.vertexAttribDivisor(M,L),V[M]=L)}function S(){const M=r.newAttributes,L=r.enabledAttributes;for(let k=0,O=L.length;k<O;k++)L[k]!==M[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function x(M,L,k,O,V,K,H){H===!0?i.vertexAttribIPointer(M,L,k,V,K):i.vertexAttribPointer(M,L,k,O,V,K)}function v(M,L,k,O){_();const V=O.attributes,K=k.getAttributes(),H=L.defaultAttributeValues;for(const nt in K){const G=K[nt];if(G.location>=0){let lt=V[nt];if(lt===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),lt!==void 0){const gt=lt.normalized,St=lt.itemSize,Ot=t.get(lt);if(Ot===void 0)continue;const Kt=Ot.buffer,Y=Ot.type,st=Ot.bytesPerElement,Et=Y===i.INT||Y===i.UNSIGNED_INT||lt.gpuType===la;if(lt.isInterleavedBufferAttribute){const at=lt.data,Pt=at.stride,Nt=lt.offset;if(at.isInstancedInterleavedBuffer){for(let It=0;It<G.locationSize;It++)d(G.location+It,at.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let It=0;It<G.locationSize;It++)g(G.location+It);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let It=0;It<G.locationSize;It++)x(G.location+It,St/G.locationSize,Y,gt,Pt*st,(Nt+St/G.locationSize*It)*st,Et)}else{if(lt.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)d(G.location+at,lt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let at=0;at<G.locationSize;at++)g(G.location+at);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let at=0;at<G.locationSize;at++)x(G.location+at,St/G.locationSize,Y,gt,St*st,St/G.locationSize*at*st,Et)}}else if(H!==void 0){const gt=H[nt];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(G.location,gt);break;case 3:i.vertexAttrib3fv(G.location,gt);break;case 4:i.vertexAttrib4fv(G.location,gt);break;default:i.vertexAttrib1fv(G.location,gt)}}}}S()}function D(){P();for(const M in n){const L=n[M];for(const k in L){const O=L[k];for(const V in O)h(O[V].object),delete O[V];delete L[k]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const k in L){const O=L[k];for(const V in O)h(O[V].object),delete O[V];delete L[k]}delete n[M.id]}function C(M){for(const L in n){const k=n[L];if(k[M.id]===void 0)continue;const O=k[M.id];for(const V in O)h(O[V].object),delete O[V];delete k[M.id]}}function P(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function bp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let m=0;for(let u=0;u<f;u++)m+=h[u];e.update(m,n,1)}function c(l,h,f,p){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<l.length;u++)o(l[u],h[u],p[u]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,f);let u=0;for(let _=0;_<f;_++)u+=h[_]*p[_];e.update(u,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Qe&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==xn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=u>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:u,maxTextureSize:_,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:D,maxSamples:T}}function Tp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Dn,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,m){const u=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!s||u===null||u.length===0||r&&!g)r?h(null):l();else{const S=r?0:n,x=S*4;let v=d.clippingState||null;c.value=v,v=h(u,p,x,m);for(let D=0;D!==x;++D)v[D]=e[D];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,p,m,u){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=c.value,u!==!0||g===null){const d=m+_*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,v=m;x!==_;++x,v+=4)o.copy(f[x]).applyMatrix4(S,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Ap(i){let t=new WeakMap;function e(o,a){return a===Eo?o.mapping=Hi:a===bo&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Eo||a===bo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ou(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Bl extends Nl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ui=4,hc=[.125,.215,.35,.446,.526,.582],ti=20,$r=new Bl,uc=new Gt;let Kr=null,Zr=0,jr=0,Jr=!1;const Jn=(1+Math.sqrt(5))/2,Ci=1/Jn,dc=[new R(-Jn,Ci,0),new R(Jn,Ci,0),new R(-Ci,0,Jn),new R(Ci,0,Jn),new R(0,Jn,-Ci),new R(0,Jn,Ci),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Kr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kr,Zr,jr),this._renderer.xr.enabled=Jr,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Ms,format:Qe,colorSpace:Yi,depthBuffer:!1},s=fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(r)),this._blurMaterial=Rp(r,t,e)}return s}_compileMaterial(t){const e=new he(this._lodPlanes[0],t);this._renderer.compile(e,$r)}_sceneToCubeUV(t,e,n,s){const a=new ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(uc),h.toneMapping=On,h.autoClear=!1;const m=new cn({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),u=new he(new kn,m);let _=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,_=!0):(m.color.copy(uc),_=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):S===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const x=this._cubeSize;Ys(s,S*x,d>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(u,a),h.render(t,a)}u.geometry.dispose(),u.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Hi||t.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new he(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ys(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,$r)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dc[(s-r-1)%dc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new he(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,u=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ti-1),_=r/u,g=isFinite(r)?1+Math.floor(h*_):ti;g>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ti}`);const d=[];let S=0;for(let C=0;C<ti;++C){const P=C/_,b=Math.exp(-P*P/2);d.push(b),C===0?S+=b:C<g&&(S+=2*b)}for(let C=0;C<d.length;C++)d[C]=d[C]/S;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=u,p.mipInt.value=x-n;const v=this._sizeLods[s],D=3*v*(s>x-Ui?s-x+Ui:0),T=4*(this._cubeSize-v);Ys(e,D,T,3*v,2*v),c.setRenderTarget(e),c.render(f,$r)}}function Cp(i){const t=[],e=[],n=[];let s=i;const r=i-Ui+1+hc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ui?c=hc[o-i+Ui-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,u=6,_=3,g=2,d=1,S=new Float32Array(_*u*m),x=new Float32Array(g*u*m),v=new Float32Array(d*u*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,P=T>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];S.set(b,_*u*T),x.set(p,g*u*T);const M=[T,T,T,T,T,T];v.set(M,d*u*T)}const D=new be;D.setAttribute("position",new We(S,_)),D.setAttribute("uv",new We(x,g)),D.setAttribute("faceIndex",new We(v,d)),t.push(D),s>Ui&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fc(i,t,e){const n=new ai(i,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rp(i,t,e){const n=new Float32Array(ti),s=new R(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function pc(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function mc(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Eo||c===bo,h=c===Hi||c===Gi;if(l||h){let f=t.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Jo(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Jo(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Lp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dp(i,t,e,n){const s={},r=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const u in p.attributes)t.remove(p.attributes[u]);for(const u in p.morphAttributes){const _=p.morphAttributes[u];for(let g=0,d=_.length;g<d;g++)t.remove(_[g])}p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const u in p)t.update(p[u],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const u in m){const _=m[u];for(let g=0,d=_.length;g<d;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(f){const p=[],m=f.index,u=f.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let x=0,v=S.length;x<v;x+=3){const D=S[x+0],T=S[x+1],C=S[x+2];p.push(D,T,T,C,C,D)}}else if(u!==void 0){const S=u.array;_=u.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const D=x+0,T=x+1,C=x+2;p.push(D,T,T,C,C,D)}}else return;const g=new(Cl(p)?Il:Dl)(p,1);g.version=_;const d=r.get(f);d&&t.remove(d),r.set(f,g)}function h(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Ip(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,m){i.drawElements(n,m,r,p*o),e.update(m,n,1)}function l(p,m,u){u!==0&&(i.drawElementsInstanced(n,m,r,p*o,u),e.update(m,n,u))}function h(p,m,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,u);let g=0;for(let d=0;d<u;d++)g+=m[d];e.update(g,n,1)}function f(p,m,u,_){if(u===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<p.length;d++)l(p[d]/o,m[d],_[d]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,_,0,u);let d=0;for(let S=0;S<u;S++)d+=m[S]*_[S];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Up(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Np(i,t,e){const n=new WeakMap,s=new se;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==f){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();const m=a.morphAttributes.position!==void 0,u=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),u===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,D=1;v>t.maxTextureSize&&(D=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*D*4*f),C=new Pl(T,v,D,f);C.type=xn,C.needsUpdate=!0;const P=x*4;for(let M=0;M<f;M++){const L=g[M],k=d[M],O=S[M],V=v*D*4*M;for(let K=0;K<L.count;K++){const H=K*P;m===!0&&(s.fromBufferAttribute(L,K),T[V+H+0]=s.x,T[V+H+1]=s.y,T[V+H+2]=s.z,T[V+H+3]=0),u===!0&&(s.fromBufferAttribute(k,K),T[V+H+4]=s.x,T[V+H+5]=s.y,T[V+H+6]=s.z,T[V+H+7]=0),_===!0&&(s.fromBufferAttribute(O,K),T[V+H+8]=s.x,T[V+H+9]=s.y,T[V+H+10]=s.z,T[V+H+11]=O.itemSize===4?s.w:1)}}p={count:f,texture:C,size:new tt(v,D)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];const u=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",u),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Fp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class zl extends De{constructor(t,e,n,s,r,o,a,c,l,h=Oi){if(h!==Oi&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Oi&&(n=oi),n===void 0&&h===Xi&&(n=Wi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const kl=new De,gc=new zl(1,1),Vl=new Pl,Hl=new yu,Gl=new Fl,_c=[],vc=[],xc=new Float32Array(16),Mc=new Float32Array(9),yc=new Float32Array(4);function $i(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=_c[s];if(r===void 0&&(r=new Float32Array(s),_c[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yr(i,t){let e=vc[t];e===void 0&&(e=new Int32Array(t),vc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Op(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;yc.set(n),i.uniformMatrix2fv(this.addr,!1,yc),Me(e,n)}}function Hp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Mc.set(n),i.uniformMatrix3fv(this.addr,!1,Mc),Me(e,n)}}function Gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;xc.set(n),i.uniformMatrix4fv(this.addr,!1,xc),Me(e,n)}}function Wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function $p(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function Jp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gc.compareFunction=Tl,r=gc):r=kl,e.setTexture2D(t||r,s)}function Qp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hl,s)}function tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gl,s)}function em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vl,s)}function nm(i){switch(i){case 5126:return Op;case 35664:return Bp;case 35665:return zp;case 35666:return kp;case 35674:return Vp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return $p;case 36294:return Kp;case 36295:return Zp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}function im(i,t){i.uniform1fv(this.addr,t)}function sm(i,t){const e=$i(t,this.size,2);i.uniform2fv(this.addr,e)}function rm(i,t){const e=$i(t,this.size,3);i.uniform3fv(this.addr,e)}function om(i,t){const e=$i(t,this.size,4);i.uniform4fv(this.addr,e)}function am(i,t){const e=$i(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cm(i,t){const e=$i(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lm(i,t){const e=$i(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hm(i,t){i.uniform1iv(this.addr,t)}function um(i,t){i.uniform2iv(this.addr,t)}function dm(i,t){i.uniform3iv(this.addr,t)}function fm(i,t){i.uniform4iv(this.addr,t)}function pm(i,t){i.uniform1uiv(this.addr,t)}function mm(i,t){i.uniform2uiv(this.addr,t)}function gm(i,t){i.uniform3uiv(this.addr,t)}function _m(i,t){i.uniform4uiv(this.addr,t)}function vm(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||kl,r[o])}function xm(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hl,r[o])}function Mm(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gl,r[o])}function ym(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vl,r[o])}function Sm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return om;case 35674:return am;case 35675:return cm;case 35676:return lm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return ym}}class Em{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nm(e.type)}}class bm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sm(e.type)}}class wm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function Sc(i,t){i.seq.push(t),i.map[t.id]=t}function Tm(i,t,e){const n=i.name,s=n.length;for(Qr.lastIndex=0;;){const r=Qr.exec(n),o=Qr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Sc(e,l===void 0?new Em(a,i,t):new bm(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new wm(a),Sc(e,f)),e=f}}}class hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Tm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ec(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Am=37297;let Cm=0;function Rm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const bc=new kt;function Pm(i){Yt._getMatrix(bc,Yt.workingColorSpace,i);const t=`mat3( ${bc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Mr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Rm(i.getShaderSource(t),o)}else return s}function Lm(i,t){const e=Pm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Dm(i,t){let e;switch(t){case Uh:e="Linear";break;case Nh:e="Reinhard";break;case Fh:e="Cineon";break;case fl:e="ACESFilmic";break;case Bh:e="AgX";break;case zh:e="Neutral";break;case Oh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $s=new R;function Im(){Yt.getLuminanceCoefficients($s);const i=$s.x.toFixed(4),t=$s.y.toFixed(4),e=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function Nm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function os(i){return i!==""}function Tc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ac(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(i){return i.replace(Om,zm)}const Bm=new Map;function zm(i,t){let e=Ht[t];if(e===void 0){const n=Bm.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qo(e)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(i){return i.replace(km,Vm)}function Vm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ul?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Gi:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Xm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dl:t="ENVMAP_BLENDING_MULTIPLY";break;case Dh:t="ENVMAP_BLENDING_MIX";break;case Ih:t="ENVMAP_BLENDING_ADD";break}return t}function qm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ym(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Hm(e),l=Gm(e),h=Wm(e),f=Xm(e),p=qm(e),m=Um(e),u=Nm(r),_=s.createProgram();let g,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(os).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(os).join(`
`),d.length>0&&(d+=`
`)):(g=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),d=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Ht.tonemapping_pars_fragment:"",e.toneMapping!==On?Dm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Lm("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),o=Qo(o),o=Tc(o,e),o=Ac(o,e),a=Qo(a),a=Tc(a,e),a=Ac(a,e),o=Cc(o),a=Cc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=S+g+o,v=S+d+a,D=Ec(s,s.VERTEX_SHADER,x),T=Ec(s,s.FRAGMENT_SHADER,v);s.attachShader(_,D),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(D).trim(),V=s.getShaderInfoLog(T).trim();let K=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,T);else{const nt=wc(s,D,"vertex"),G=wc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+nt+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||V==="")&&(H=!1);H&&(L.diagnostics={runnable:K,programLog:k,vertexShader:{log:O,prefix:g},fragmentShader:{log:V,prefix:d}})}s.deleteShader(D),s.deleteShader(T),P=new hr(s,_),b=Fm(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Am)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let $m=0;class Km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zm(t),e.set(t,n)),n}}class Zm{constructor(t){this.id=$m++,this.code=t,this.usedTimes=0}}function jm(i,t,e,n,s,r,o){const a=new ga,c=new Km,l=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,M,L,k,O){const V=k.fog,K=O.geometry,H=b.isMeshStandardMaterial?k.environment:null,nt=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),G=nt&&nt.mapping===xr?nt.image.height:null,lt=u[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,St=gt!==void 0?gt.length:0;let Ot=0;K.morphAttributes.position!==void 0&&(Ot=1),K.morphAttributes.normal!==void 0&&(Ot=2),K.morphAttributes.color!==void 0&&(Ot=3);let Kt,Y,st,Et;if(lt){const ee=rn[lt];Kt=ee.vertexShader,Y=ee.fragmentShader}else Kt=b.vertexShader,Y=b.fragmentShader,c.update(b),st=c.getVertexShaderID(b),Et=c.getFragmentShaderID(b);const at=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Nt=O.isInstancedMesh===!0,It=O.isBatchedMesh===!0,qt=!!b.map,j=!!b.matcap,it=!!nt,A=!!b.aoMap,Ct=!!b.lightMap,Q=!!b.bumpMap,xt=!!b.normalMap,ct=!!b.displacementMap,Lt=!!b.emissiveMap,_t=!!b.metalnessMap,w=!!b.roughnessMap,y=b.anisotropy>0,F=b.clearcoat>0,X=b.dispersion>0,J=b.iridescence>0,q=b.sheen>0,bt=b.transmission>0,ut=y&&!!b.anisotropyMap,vt=F&&!!b.clearcoatMap,Wt=F&&!!b.clearcoatNormalMap,et=F&&!!b.clearcoatRoughnessMap,Mt=J&&!!b.iridescenceMap,Dt=J&&!!b.iridescenceThicknessMap,Ut=q&&!!b.sheenColorMap,yt=q&&!!b.sheenRoughnessMap,Xt=!!b.specularMap,Vt=!!b.specularColorMap,oe=!!b.specularIntensityMap,I=bt&&!!b.transmissionMap,dt=bt&&!!b.thicknessMap,W=!!b.gradientMap,Z=!!b.alphaMap,mt=b.alphaTest>0,ft=!!b.alphaHash,Bt=!!b.extensions;let de=On;b.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(de=i.toneMapping);const we={shaderID:lt,shaderType:b.type,shaderName:b.name,vertexShader:Kt,fragmentShader:Y,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:Et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:It,batchingColor:It&&O._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&O.instanceColor!==null,instancingMorph:Nt&&O.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Yi,alphaToCoverage:!!b.alphaToCoverage,map:qt,matcap:j,envMap:it,envMapMode:it&&nt.mapping,envMapCubeUVHeight:G,aoMap:A,lightMap:Ct,bumpMap:Q,normalMap:xt,displacementMap:p&&ct,emissiveMap:Lt,normalMapObjectSpace:xt&&b.normalMapType===Gh,normalMapTangentSpace:xt&&b.normalMapType===wl,metalnessMap:_t,roughnessMap:w,anisotropy:y,anisotropyMap:ut,clearcoat:F,clearcoatMap:vt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:et,dispersion:X,iridescence:J,iridescenceMap:Mt,iridescenceThicknessMap:Dt,sheen:q,sheenColorMap:Ut,sheenRoughnessMap:yt,specularMap:Xt,specularColorMap:Vt,specularIntensityMap:oe,transmission:bt,transmissionMap:I,thicknessMap:dt,gradientMap:W,opaque:b.transparent===!1&&b.blending===si&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:mt,alphaHash:ft,combine:b.combine,mapUv:qt&&_(b.map.channel),aoMapUv:A&&_(b.aoMap.channel),lightMapUv:Ct&&_(b.lightMap.channel),bumpMapUv:Q&&_(b.bumpMap.channel),normalMapUv:xt&&_(b.normalMap.channel),displacementMapUv:ct&&_(b.displacementMap.channel),emissiveMapUv:Lt&&_(b.emissiveMap.channel),metalnessMapUv:_t&&_(b.metalnessMap.channel),roughnessMapUv:w&&_(b.roughnessMap.channel),anisotropyMapUv:ut&&_(b.anisotropyMap.channel),clearcoatMapUv:vt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(b.sheenRoughnessMap.channel),specularMapUv:Xt&&_(b.specularMap.channel),specularColorMapUv:Vt&&_(b.specularColorMap.channel),specularIntensityMapUv:oe&&_(b.specularIntensityMap.channel),transmissionMapUv:I&&_(b.transmissionMap.channel),thicknessMapUv:dt&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(xt||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(qt||Z),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pt,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:qt&&b.map.isVideoTexture===!0&&Yt.getTransfer(b.map.colorSpace)===ne,decodeVideoTextureEmissive:Lt&&b.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(b.emissiveMap.colorSpace)===ne,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ce,flipSided:b.side===Le,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&b.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function d(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(S(M,b),x(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function S(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const M=u[b.type];let L;if(M){const k=rn[M];L=Iu.clone(k.uniforms)}else L=b.uniforms;return L}function D(b,M){let L;for(let k=0,O=h.length;k<O;k++){const V=h[k];if(V.cacheKey===M){L=V,++L.usedTimes;break}}return L===void 0&&(L=new Ym(i,M,b,r),h.push(L)),L}function T(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function C(b){c.remove(b)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:v,acquireProgram:D,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:P}}function Jm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,p,m,u,_,g){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:m,groupOrder:u,renderOrder:f.renderOrder,z:_,group:g},i[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=m,d.groupOrder=u,d.renderOrder=f.renderOrder,d.z=_,d.group=g),t++,d}function a(f,p,m,u,_,g){const d=o(f,p,m,u,_,g);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function c(f,p,m,u,_,g){const d=o(f,p,m,u,_,g);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function l(f,p){e.length>1&&e.sort(f||Qm),n.length>1&&n.sort(p||Pc),s.length>1&&s.sort(p||Pc)}function h(){for(let f=t,p=i.length;f<p;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function t0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Lc,i.set(n,[o])):s>=r.length?(o=new Lc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function e0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Gt};break;case"SpotLight":e={position:new R,direction:new R,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function n0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let i0=0;function s0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r0(i){const t=new e0,e=n0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new re,o=new re;function a(l){let h=0,f=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,u=0,_=0,g=0,d=0,S=0,x=0,v=0,D=0,T=0,C=0;l.sort(s0);for(let b=0,M=l.length;b<M;b++){const L=l[b],k=L.color,O=L.intensity,V=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*O,f+=k.g*O,p+=k.b*O;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],O);C++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const nt=L.shadow,G=e.get(L);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=H,m++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(k).multiplyScalar(O),H.distance=V,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;const nt=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,nt.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=nt.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=K,v++}_++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(k).multiplyScalar(O),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=H,g++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const nt=L.shadow,G=e.get(L);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,G.shadowCameraNear=nt.camera.near,G.shadowCameraFar=nt.camera.far,n.pointShadow[u]=G,n.pointShadowMap[u]=K,n.pointShadowMatrix[u]=L.shadow.matrix,x++}n.point[u]=H,u++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(O),H.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[d]=H,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==m||P.pointLength!==u||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==d||P.numDirectionalShadows!==S||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==D||P.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=g,n.point.length=u,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.directionalLength=m,P.pointLength=u,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=d,P.numDirectionalShadows=S,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=D,P.numLightProbes=C,n.version=i0++)}function c(l,h){let f=0,p=0,m=0,u=0,_=0;const g=h.matrixWorldInverse;for(let d=0,S=l.length;d<S;d++){const x=l[d];if(x.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(x.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(x.isRectAreaLight){const v=n.rectArea[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),u++}else if(x.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),p++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Dc(i){const t=new r0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function o0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Dc(i),t.set(s,[a])):r>=o.length?(a=new Dc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class a0 extends fi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class c0 extends fi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u0(i,t,e){let n=new _a;const s=new tt,r=new tt,o=new se,a=new a0({depthPacking:Hh}),c=new c0,l={},h=e.maxTextureSize,f={[zn]:Le,[Le]:zn,[Ce]:Ce},p=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:l0,fragmentShader:h0}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const u=new be;u.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new he(u,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let d=this.type;this.render=function(T,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Fn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=d!==vn&&this.type===vn,V=d===vn&&this.type!==vn;for(let K=0,H=T.length;K<H;K++){const nt=T[K],G=nt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const lt=G.getFrameExtents();if(s.multiply(lt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,G.mapSize.y=r.y)),G.map===null||O===!0||V===!0){const St=this.type!==vn?{minFilter:en,magFilter:en}:{};G.map!==null&&G.map.dispose(),G.map=new ai(s.x,s.y,St),G.map.texture.name=nt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const gt=G.getViewportCount();for(let St=0;St<gt;St++){const Ot=G.getViewport(St);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),k.viewport(o),G.updateMatrices(nt,St),n=G.getFrustum(),v(C,P,G.camera,nt,this.type)}G.isPointLightShadow!==!0&&this.type===vn&&S(G,P),G.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(b,M,L)};function S(T,C){const P=t.update(_);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ai(s.x,s.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,P,p,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,P,m,_,null)}function x(T,C,P,b){let M=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=M.uuid,O=C.uuid;let V=l[k];V===void 0&&(V={},l[k]=V);let K=V[O];K===void 0&&(K=M.clone(),V[O]=K,C.addEventListener("dispose",D)),M=K}if(M.visible=C.visible,M.wireframe=C.wireframe,b===vn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=P}return M}function v(T,C,P,b,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===vn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const O=t.update(T),V=T.material;if(Array.isArray(V)){const K=O.groups;for(let H=0,nt=K.length;H<nt;H++){const G=K[H],lt=V[G.materialIndex];if(lt&&lt.visible){const gt=x(T,lt,b,M);T.onBeforeShadow(i,T,C,P,O,gt,G),i.renderBufferDirect(P,null,O,gt,T,G),T.onAfterShadow(i,T,C,P,O,gt,G)}}}else if(V.visible){const K=x(T,V,b,M);T.onBeforeShadow(i,T,C,P,O,K,null),i.renderBufferDirect(P,null,O,K,T,null),T.onAfterShadow(i,T,C,P,O,K,null)}}const k=T.children;for(let O=0,V=k.length;O<V;O++)v(k[O],C,P,b,M)}function D(T){T.target.removeEventListener("dispose",D);for(const P in l){const b=l[P],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const d0={[go]:_o,[vo]:yo,[xo]:So,[Vi]:Mo,[_o]:go,[yo]:vo,[So]:xo,[Mo]:Vi};function f0(i,t){function e(){let I=!1;const dt=new se;let W=null;const Z=new se(0,0,0,0);return{setMask:function(mt){W!==mt&&!I&&(i.colorMask(mt,mt,mt,mt),W=mt)},setLocked:function(mt){I=mt},setClear:function(mt,ft,Bt,de,we){we===!0&&(mt*=de,ft*=de,Bt*=de),dt.set(mt,ft,Bt,de),Z.equals(dt)===!1&&(i.clearColor(mt,ft,Bt,de),Z.copy(dt))},reset:function(){I=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,dt=!1,W=null,Z=null,mt=null;return{setReversed:function(ft){if(dt!==ft){const Bt=t.get("EXT_clip_control");dt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const de=mt;mt=null,this.setClear(de)}dt=ft},getReversed:function(){return dt},setTest:function(ft){ft?at(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(ft){W!==ft&&!I&&(i.depthMask(ft),W=ft)},setFunc:function(ft){if(dt&&(ft=d0[ft]),Z!==ft){switch(ft){case go:i.depthFunc(i.NEVER);break;case _o:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case xo:i.depthFunc(i.EQUAL);break;case Mo:i.depthFunc(i.GEQUAL);break;case yo:i.depthFunc(i.GREATER);break;case So:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ft}},setLocked:function(ft){I=ft},setClear:function(ft){mt!==ft&&(dt&&(ft=1-ft),i.clearDepth(ft),mt=ft)},reset:function(){I=!1,W=null,Z=null,mt=null,dt=!1}}}function s(){let I=!1,dt=null,W=null,Z=null,mt=null,ft=null,Bt=null,de=null,we=null;return{setTest:function(ee){I||(ee?at(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(ee){dt!==ee&&!I&&(i.stencilMask(ee),dt=ee)},setFunc:function(ee,Xe,un){(W!==ee||Z!==Xe||mt!==un)&&(i.stencilFunc(ee,Xe,un),W=ee,Z=Xe,mt=un)},setOp:function(ee,Xe,un){(ft!==ee||Bt!==Xe||de!==un)&&(i.stencilOp(ee,Xe,un),ft=ee,Bt=Xe,de=un)},setLocked:function(ee){I=ee},setClear:function(ee){we!==ee&&(i.clearStencil(ee),we=ee)},reset:function(){I=!1,dt=null,W=null,Z=null,mt=null,ft=null,Bt=null,de=null,we=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},f={},p=new WeakMap,m=[],u=null,_=!1,g=null,d=null,S=null,x=null,v=null,D=null,T=null,C=new Gt(0,0,0),P=0,b=!1,M=null,L=null,k=null,O=null,V=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,nt=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=nt>=1):G.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=nt>=2);let lt=null,gt={};const St=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Kt=new se().fromArray(St),Y=new se().fromArray(Ot);function st(I,dt,W,Z){const mt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(I,ft),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<W;Bt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(dt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return ft}const Et={};Et[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(Vi),Q(!1),xt(Oa),at(i.CULL_FACE),A(Fn);function at(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Pt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Nt(I,dt){return f[I]!==dt?(i.bindFramebuffer(I,dt),f[I]=dt,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=dt),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function It(I,dt){let W=m,Z=!1;if(I){W=p.get(dt),W===void 0&&(W=[],p.set(dt,W));const mt=I.textures;if(W.length!==mt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Bt=mt.length;ft<Bt;ft++)W[ft]=i.COLOR_ATTACHMENT0+ft;W.length=mt.length,Z=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Z=!0);Z&&i.drawBuffers(W)}function qt(I){return u!==I?(i.useProgram(I),u=I,!0):!1}const j={[Qn]:i.FUNC_ADD,[mh]:i.FUNC_SUBTRACT,[gh]:i.FUNC_REVERSE_SUBTRACT};j[_h]=i.MIN,j[vh]=i.MAX;const it={[xh]:i.ZERO,[Mh]:i.ONE,[yh]:i.SRC_COLOR,[po]:i.SRC_ALPHA,[Ah]:i.SRC_ALPHA_SATURATE,[wh]:i.DST_COLOR,[Eh]:i.DST_ALPHA,[Sh]:i.ONE_MINUS_SRC_COLOR,[mo]:i.ONE_MINUS_SRC_ALPHA,[Th]:i.ONE_MINUS_DST_COLOR,[bh]:i.ONE_MINUS_DST_ALPHA,[Ch]:i.CONSTANT_COLOR,[Rh]:i.ONE_MINUS_CONSTANT_COLOR,[Ph]:i.CONSTANT_ALPHA,[Lh]:i.ONE_MINUS_CONSTANT_ALPHA};function A(I,dt,W,Z,mt,ft,Bt,de,we,ee){if(I===Fn){_===!0&&(Pt(i.BLEND),_=!1);return}if(_===!1&&(at(i.BLEND),_=!0),I!==ph){if(I!==g||ee!==b){if((d!==Qn||v!==Qn)&&(i.blendEquation(i.FUNC_ADD),d=Qn,v=Qn),ee)switch(I){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFunc(i.ONE,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case za:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case za:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,x=null,D=null,T=null,C.set(0,0,0),P=0,g=I,b=ee}return}mt=mt||dt,ft=ft||W,Bt=Bt||Z,(dt!==d||mt!==v)&&(i.blendEquationSeparate(j[dt],j[mt]),d=dt,v=mt),(W!==S||Z!==x||ft!==D||Bt!==T)&&(i.blendFuncSeparate(it[W],it[Z],it[ft],it[Bt]),S=W,x=Z,D=ft,T=Bt),(de.equals(C)===!1||we!==P)&&(i.blendColor(de.r,de.g,de.b,we),C.copy(de),P=we),g=I,b=!1}function Ct(I,dt){I.side===Ce?Pt(i.CULL_FACE):at(i.CULL_FACE);let W=I.side===Le;dt&&(W=!W),Q(W),I.blending===si&&I.transparent===!1?A(Fn):A(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Lt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function xt(I){I!==dh?(at(i.CULL_FACE),I!==L&&(I===Oa?i.cullFace(i.BACK):I===fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),L=I}function ct(I){I!==k&&(H&&i.lineWidth(I),k=I)}function Lt(I,dt,W){I?(at(i.POLYGON_OFFSET_FILL),(O!==dt||V!==W)&&(i.polygonOffset(dt,W),O=dt,V=W)):Pt(i.POLYGON_OFFSET_FILL)}function _t(I){I?at(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function w(I){I===void 0&&(I=i.TEXTURE0+K-1),lt!==I&&(i.activeTexture(I),lt=I)}function y(I,dt,W){W===void 0&&(lt===null?W=i.TEXTURE0+K-1:W=lt);let Z=gt[W];Z===void 0&&(Z={type:void 0,texture:void 0},gt[W]=Z),(Z.type!==I||Z.texture!==dt)&&(lt!==W&&(i.activeTexture(W),lt=W),i.bindTexture(I,dt||Et[I]),Z.type=I,Z.texture=dt)}function F(){const I=gt[lt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(I){Kt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Kt.copy(I))}function yt(I){Y.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Xt(I,dt){let W=l.get(dt);W===void 0&&(W=new WeakMap,l.set(dt,W));let Z=W.get(I);Z===void 0&&(Z=i.getUniformBlockIndex(dt,I.name),W.set(I,Z))}function Vt(I,dt){const Z=l.get(dt).get(I);c.get(dt)!==Z&&(i.uniformBlockBinding(dt,Z,I.__bindingPointIndex),c.set(dt,Z))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},lt=null,gt={},f={},p=new WeakMap,m=[],u=null,_=!1,g=null,d=null,S=null,x=null,v=null,D=null,T=null,C=new Gt(0,0,0),P=0,b=!1,M=null,L=null,k=null,O=null,V=null,Kt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Pt,bindFramebuffer:Nt,drawBuffers:It,useProgram:qt,setBlending:A,setMaterial:Ct,setFlipSided:Q,setCullFace:xt,setLineWidth:ct,setPolygonOffset:Lt,setScissorTest:_t,activeTexture:w,bindTexture:y,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:J,texImage2D:Mt,texImage3D:Dt,updateUBOMapping:Xt,uniformBlockBinding:Vt,texStorage2D:Wt,texStorage3D:et,texSubImage2D:q,texSubImage3D:bt,compressedTexSubImage2D:ut,compressedTexSubImage3D:vt,scissor:Ut,viewport:yt,reset:oe}}function Ic(i,t,e,n){const s=p0(n);switch(e){case vl:return i*t;case Ml:return i*t;case yl:return i*t*2;case Sl:return i*t/s.components*s.byteLength;case da:return i*t/s.components*s.byteLength;case El:return i*t*2/s.components*s.byteLength;case fa:return i*t*2/s.components*s.byteLength;case xl:return i*t*3/s.components*s.byteLength;case Qe:return i*t*4/s.components*s.byteLength;case pa:return i*t*4/s.components*s.byteLength;case rr:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ar:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:case Ro:return Math.max(i,16)*Math.max(t,8)/4;case To:case Co:return Math.max(i,8)*Math.max(t,8)/2;case Po:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lr:case Yo:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bl:case Ko:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zo:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function p0(i){switch(i){case Sn:case ml:return{byteLength:1,components:1};case ps:case gl:case Ms:return{byteLength:2,components:1};case ha:case ua:return{byteLength:2,components:4};case oi:case la:case xn:return{byteLength:4,components:1};case _l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function m0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new tt,h=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(w,y){return m?new OffscreenCanvas(w,y):mr("canvas")}function _(w,y,F){let X=1;const J=_t(w);if((J.width>F||J.height>F)&&(X=F/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(X*J.width),bt=Math.floor(X*J.height);f===void 0&&(f=u(q,bt));const ut=y?u(q,bt):f;return ut.width=q,ut.height=bt,ut.getContext("2d").drawImage(w,0,0,q,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+bt+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function g(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,y,F,X,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=y;if(y===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),y===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),y===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),y===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),y===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),y===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),y===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),y===i.RGBA){const bt=J?Mr:Yt.getTransfer(X);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=bt===ne?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(w,y){let F;return w?y===null||y===oi||y===Wi?F=i.DEPTH24_STENCIL8:y===xn?F=i.DEPTH32F_STENCIL8:y===ps&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===oi||y===Wi?F=i.DEPTH_COMPONENT24:y===xn?F=i.DEPTH_COMPONENT32F:y===ps&&(F=i.DEPTH_COMPONENT16),F}function D(w,y){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==en&&w.minFilter!==an?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function T(w){const y=w.target;y.removeEventListener("dispose",T),P(y),y.isVideoTexture&&h.delete(y)}function C(w){const y=w.target;y.removeEventListener("dispose",C),M(y)}function P(w){const y=n.get(w);if(y.__webglInit===void 0)return;const F=w.source,X=p.get(F);if(X){const J=X[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(w),Object.keys(X).length===0&&p.delete(F)}n.remove(w)}function b(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const F=w.source,X=p.get(F);delete X[y.__cacheKey],o.memory.textures--}function M(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let J=0;J<y.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(y.__webglFramebuffer[X][J]);else i.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)i.deleteFramebuffer(y.__webglFramebuffer[X]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=w.textures;for(let X=0,J=F.length;X<J;X++){const q=n.get(F[X]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[X])}n.remove(w)}let L=0;function k(){L=0}function O(){const w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function V(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function K(w,y){const F=n.get(w);if(w.isVideoTexture&&ct(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,w,y);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+y)}function H(w,y){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Y(F,w,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+y)}function nt(w,y){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Y(F,w,y);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+y)}function G(w,y){const F=n.get(w);if(w.version>0&&F.__version!==w.version){st(F,w,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+y)}const lt={[fr]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},gt={[en]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Ar]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},St={[Wh]:i.NEVER,[Zh]:i.ALWAYS,[Xh]:i.LESS,[Tl]:i.LEQUAL,[qh]:i.EQUAL,[Kh]:i.GEQUAL,[Yh]:i.GREATER,[$h]:i.NOTEQUAL};function Ot(w,y){if(y.type===xn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===an||y.magFilter===Ar||y.magFilter===Cs||y.magFilter===ii||y.minFilter===an||y.minFilter===Ar||y.minFilter===Cs||y.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,lt[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,lt[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,lt[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,gt[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,St[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===en||y.minFilter!==Cs&&y.minFilter!==ii||y.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Kt(w,y){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",T));const X=y.source;let J=p.get(X);J===void 0&&(J={},p.set(X,J));const q=V(y);if(q!==w.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[q].usedTimes++;const bt=J[w.__cacheKey];bt!==void 0&&(J[w.__cacheKey].usedTimes--,bt.usedTimes===0&&b(y)),w.__cacheKey=q,w.__webglTexture=J[q].texture}return F}function Y(w,y,F){let X=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=i.TEXTURE_3D);const J=Kt(w,y),q=y.source;e.bindTexture(X,w.__webglTexture,i.TEXTURE0+F);const bt=n.get(q);if(q.version!==bt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const ut=Yt.getPrimaries(Yt.workingColorSpace),vt=y.colorSpace===Un?null:Yt.getPrimaries(y.colorSpace),Wt=y.colorSpace===Un||ut===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let et=_(y.image,!1,s.maxTextureSize);et=Lt(y,et);const Mt=r.convert(y.format,y.colorSpace),Dt=r.convert(y.type);let Ut=x(y.internalFormat,Mt,Dt,y.colorSpace,y.isVideoTexture);Ot(X,y);let yt;const Xt=y.mipmaps,Vt=y.isVideoTexture!==!0,oe=bt.__version===void 0||J===!0,I=q.dataReady,dt=D(y,et);if(y.isDepthTexture)Ut=v(y.format===Xi,y.type),oe&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Ut,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Ut,et.width,et.height,0,Mt,Dt,null));else if(y.isDataTexture)if(Xt.length>0){Vt&&oe&&e.texStorage2D(i.TEXTURE_2D,dt,Ut,Xt[0].width,Xt[0].height);for(let W=0,Z=Xt.length;W<Z;W++)yt=Xt[W],Vt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,yt.width,yt.height,Mt,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,W,Ut,yt.width,yt.height,0,Mt,Dt,yt.data);y.generateMipmaps=!1}else Vt?(oe&&e.texStorage2D(i.TEXTURE_2D,dt,Ut,et.width,et.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,Mt,Dt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,et.width,et.height,0,Mt,Dt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Vt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ut,Xt[0].width,Xt[0].height,et.depth);for(let W=0,Z=Xt.length;W<Z;W++)if(yt=Xt[W],y.format!==Qe)if(Mt!==null)if(Vt){if(I)if(y.layerUpdates.size>0){const mt=Ic(yt.width,yt.height,y.format,y.type);for(const ft of y.layerUpdates){const Bt=yt.data.subarray(ft*mt/yt.data.BYTES_PER_ELEMENT,(ft+1)*mt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ft,yt.width,yt.height,1,Mt,Bt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,et.depth,Mt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ut,yt.width,yt.height,et.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,et.depth,Mt,Dt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Ut,yt.width,yt.height,et.depth,0,Mt,Dt,yt.data)}else{Vt&&oe&&e.texStorage2D(i.TEXTURE_2D,dt,Ut,Xt[0].width,Xt[0].height);for(let W=0,Z=Xt.length;W<Z;W++)yt=Xt[W],y.format!==Qe?Mt!==null?Vt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,yt.width,yt.height,Mt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Ut,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,yt.width,yt.height,Mt,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,W,Ut,yt.width,yt.height,0,Mt,Dt,yt.data)}else if(y.isDataArrayTexture)if(Vt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ut,et.width,et.height,et.depth),I)if(y.layerUpdates.size>0){const W=Ic(et.width,et.height,y.format,y.type);for(const Z of y.layerUpdates){const mt=et.data.subarray(Z*W/et.data.BYTES_PER_ELEMENT,(Z+1)*W/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,Mt,Dt,mt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Mt,Dt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,et.width,et.height,et.depth,0,Mt,Dt,et.data);else if(y.isData3DTexture)Vt?(oe&&e.texStorage3D(i.TEXTURE_3D,dt,Ut,et.width,et.height,et.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Mt,Dt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,et.width,et.height,et.depth,0,Mt,Dt,et.data);else if(y.isFramebufferTexture){if(oe)if(Vt)e.texStorage2D(i.TEXTURE_2D,dt,Ut,et.width,et.height);else{let W=et.width,Z=et.height;for(let mt=0;mt<dt;mt++)e.texImage2D(i.TEXTURE_2D,mt,Ut,W,Z,0,Mt,Dt,null),W>>=1,Z>>=1}}else if(Xt.length>0){if(Vt&&oe){const W=_t(Xt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Ut,W.width,W.height)}for(let W=0,Z=Xt.length;W<Z;W++)yt=Xt[W],Vt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Mt,Dt,yt):e.texImage2D(i.TEXTURE_2D,W,Ut,Mt,Dt,yt);y.generateMipmaps=!1}else if(Vt){if(oe){const W=_t(et);e.texStorage2D(i.TEXTURE_2D,dt,Ut,W.width,W.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Dt,et)}else e.texImage2D(i.TEXTURE_2D,0,Ut,Mt,Dt,et);g(y)&&d(X),bt.__version=q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function st(w,y,F){if(y.image.length!==6)return;const X=Kt(w,y),J=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);const q=n.get(J);if(J.version!==q.__version||X===!0){e.activeTexture(i.TEXTURE0+F);const bt=Yt.getPrimaries(Yt.workingColorSpace),ut=y.colorSpace===Un?null:Yt.getPrimaries(y.colorSpace),vt=y.colorSpace===Un||bt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Wt=y.isCompressedTexture||y.image[0].isCompressedTexture,et=y.image[0]&&y.image[0].isDataTexture,Mt=[];for(let Z=0;Z<6;Z++)!Wt&&!et?Mt[Z]=_(y.image[Z],!0,s.maxCubemapSize):Mt[Z]=et?y.image[Z].image:y.image[Z],Mt[Z]=Lt(y,Mt[Z]);const Dt=Mt[0],Ut=r.convert(y.format,y.colorSpace),yt=r.convert(y.type),Xt=x(y.internalFormat,Ut,yt,y.colorSpace),Vt=y.isVideoTexture!==!0,oe=q.__version===void 0||X===!0,I=J.dataReady;let dt=D(y,Dt);Ot(i.TEXTURE_CUBE_MAP,y);let W;if(Wt){Vt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Xt,Dt.width,Dt.height);for(let Z=0;Z<6;Z++){W=Mt[Z].mipmaps;for(let mt=0;mt<W.length;mt++){const ft=W[mt];y.format!==Qe?Ut!==null?Vt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,ft.width,ft.height,Ut,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,Xt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,ft.width,ft.height,Ut,yt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,Xt,ft.width,ft.height,0,Ut,yt,ft.data)}}}else{if(W=y.mipmaps,Vt&&oe){W.length>0&&dt++;const Z=_t(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Xt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Mt[Z].width,Mt[Z].height,Ut,yt,Mt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,Mt[Z].width,Mt[Z].height,0,Ut,yt,Mt[Z].data);for(let mt=0;mt<W.length;mt++){const Bt=W[mt].image[Z].image;Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,Bt.width,Bt.height,Ut,yt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,Xt,Bt.width,Bt.height,0,Ut,yt,Bt.data)}}else{Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ut,yt,Mt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,Ut,yt,Mt[Z]);for(let mt=0;mt<W.length;mt++){const ft=W[mt];Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,Ut,yt,ft.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,Xt,Ut,yt,ft.image[Z])}}}g(y)&&d(i.TEXTURE_CUBE_MAP),q.__version=J.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Et(w,y,F,X,J,q){const bt=r.convert(F.format,F.colorSpace),ut=r.convert(F.type),vt=x(F.internalFormat,bt,ut,F.colorSpace),Wt=n.get(y),et=n.get(F);if(et.__renderTarget=y,!Wt.__hasExternalTextures){const Mt=Math.max(1,y.width>>q),Dt=Math.max(1,y.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,q,vt,Mt,Dt,y.depth,0,bt,ut,null):e.texImage2D(J,q,vt,Mt,Dt,0,bt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),xt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,et.__webglTexture,0,Q(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,et.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(w,y,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){const X=y.depthTexture,J=X&&X.isDepthTexture?X.type:null,q=v(y.stencilBuffer,J),bt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Q(y);xt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,q,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,w)}else{const X=y.textures;for(let J=0;J<X.length;J++){const q=X[J],bt=r.convert(q.format,q.colorSpace),ut=r.convert(q.type),vt=x(q.internalFormat,bt,ut,q.colorSpace),Wt=Q(y);F&&xt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,vt,y.width,y.height):xt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,vt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,vt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const J=X.__webglTexture,q=Q(y);if(y.depthTexture.format===Oi)xt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(y.depthTexture.format===Xi)xt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Nt(w){const y=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=X}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pt(y.__webglFramebuffer,w)}else if(F){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=i.createRenderbuffer(),at(y.__webglDepthbuffer[X],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),at(y.__webglDepthbuffer,w,!1);else{const X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(w,y,F){const X=n.get(w);y!==void 0&&Et(X.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Nt(w)}function qt(w){const y=w.texture,F=n.get(w),X=n.get(y);w.addEventListener("dispose",C);const J=w.textures,q=w.isWebGLCubeRenderTarget===!0,bt=J.length>1;if(bt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=y.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ut]=[];for(let vt=0;vt<y.mipmaps.length;vt++)F.__webglFramebuffer[ut][vt]=i.createFramebuffer()}else F.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)F.__webglFramebuffer[ut]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ut=0,vt=J.length;ut<vt;ut++){const Wt=n.get(J[ut]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&xt(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<J.length;ut++){const vt=J[ut];F.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);const Wt=r.convert(vt.format,vt.colorSpace),et=r.convert(vt.type),Mt=x(vt.internalFormat,Wt,et,vt.colorSpace,w.isXRRenderTarget===!0),Dt=Q(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Mt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),at(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)Et(F.__webglFramebuffer[ut][vt],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,vt);else Et(F.__webglFramebuffer[ut],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);g(y)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ut=0,vt=J.length;ut<vt;ut++){const Wt=J[ut],et=n.get(Wt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Ot(i.TEXTURE_2D,Wt),Et(F.__webglFramebuffer,w,Wt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),g(Wt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,X.__webglTexture),Ot(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)Et(F.__webglFramebuffer[vt],w,y,i.COLOR_ATTACHMENT0,ut,vt);else Et(F.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,ut,0);g(y)&&d(ut),e.unbindTexture()}w.depthBuffer&&Nt(w)}function j(w){const y=w.textures;for(let F=0,X=y.length;F<X;F++){const J=y[F];if(g(J)){const q=S(w),bt=n.get(J).__webglTexture;e.bindTexture(q,bt),d(q),e.unbindTexture()}}}const it=[],A=[];function Ct(w){if(w.samples>0){if(xt(w)===!1){const y=w.textures,F=w.width,X=w.height;let J=i.COLOR_BUFFER_BIT;const q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(w),ut=y.length>1;if(ut)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);const Wt=n.get(y[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,F,X,0,0,F,X,J,i.NEAREST),c===!0&&(it.length=0,A.length=0,it.push(i.COLOR_ATTACHMENT0+vt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(it.push(q),A.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);const Wt=n.get(y[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Q(w){return Math.min(s.maxSamples,w.samples)}function xt(w){const y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ct(w){const y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Lt(w,y){const F=w.colorSpace,X=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Yi&&F!==Un&&(Yt.getTransfer(F)===ne?(X!==Qe||J!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function _t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=H,this.setTexture3D=nt,this.setTextureCube=G,this.rebindTextures=It,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=xt}function g0(i,t){function e(n,s=Un){let r;const o=Yt.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_l)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ml)return i.BYTE;if(n===gl)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===la)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===Ms)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===xl)return i.RGB;if(n===Qe)return i.RGBA;if(n===Ml)return i.LUMINANCE;if(n===yl)return i.LUMINANCE_ALPHA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===Sl)return i.RED;if(n===da)return i.RED_INTEGER;if(n===El)return i.RG;if(n===fa)return i.RG_INTEGER;if(n===pa)return i.RGBA_INTEGER;if(n===rr||n===or||n===ar||n===cr)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===Ao||n===Co||n===Ro)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Lo||n===Do)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Lo)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Io||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===qo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Io)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===No)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ho)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Go)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lr||n===Yo||n===$o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lr)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bl||n===Ko||n===Zo||n===jo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class _0 extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v0={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),d=this._getHandJoint(l,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,u=.005;l.inputState.pinching&&p>m+u?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-u&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const x0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vn({vertexShader:x0,fragmentShader:M0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S0 extends ui{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,p=null,m=null,u=null;const _=new y0,g=e.getContextAttributes();let d=null,S=null;const x=[],v=[],D=new tt;let T=null;const C=new ke;C.viewport=new se;const P=new ke;P.viewport=new se;const b=[C,P],M=new _0;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let st=x[Y];return st===void 0&&(st=new to,x[Y]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Y){let st=x[Y];return st===void 0&&(st=new to,x[Y]=st),st.getGripSpace()},this.getHand=function(Y){let st=x[Y];return st===void 0&&(st=new to,x[Y]=st),st.getHandSpace()};function O(Y){const st=v.indexOf(Y.inputSource);if(st===-1)return;const Et=x[st];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,l||o),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<x.length;Y++){const st=v[Y];st!==null&&(v[Y]=null,x[Y].disconnect(st))}L=null,k=null,_.reset(),t.setRenderTarget(d),m=null,p=null,f=null,s=null,S=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return u},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ai(m.framebufferWidth,m.framebufferHeight,{format:Qe,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,Et=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?Xi:Oi,Et=g.stencil?Wi:oi);const Pt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};f=new XRWebGLBinding(s,e),p=f.createProjectionLayer(Pt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new ai(p.textureWidth,p.textureHeight,{format:Qe,type:Sn,depthTexture:new zl(p.textureWidth,p.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Y){for(let st=0;st<Y.removed.length;st++){const Et=Y.removed[st],at=v.indexOf(Et);at>=0&&(v[at]=null,x[at].disconnect(Et))}for(let st=0;st<Y.added.length;st++){const Et=Y.added[st];let at=v.indexOf(Et);if(at===-1){for(let Nt=0;Nt<x.length;Nt++)if(Nt>=v.length){v.push(Et),at=Nt;break}else if(v[Nt]===null){v[Nt]=Et,at=Nt;break}if(at===-1)break}const Pt=x[at];Pt&&Pt.connect(Et)}}const H=new R,nt=new R;function G(Y,st,Et){H.setFromMatrixPosition(st.matrixWorld),nt.setFromMatrixPosition(Et.matrixWorld);const at=H.distanceTo(nt),Pt=st.projectionMatrix.elements,Nt=Et.projectionMatrix.elements,It=Pt[14]/(Pt[10]-1),qt=Pt[14]/(Pt[10]+1),j=(Pt[9]+1)/Pt[5],it=(Pt[9]-1)/Pt[5],A=(Pt[8]-1)/Pt[0],Ct=(Nt[8]+1)/Nt[0],Q=It*A,xt=It*Ct,ct=at/(-A+Ct),Lt=ct*-A;if(st.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Lt),Y.translateZ(ct),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pt[10]===-1)Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const _t=It+ct,w=qt+ct,y=Q-Lt,F=xt+(at-Lt),X=j*qt/w*_t,J=it*qt/w*_t;Y.projectionMatrix.makePerspective(y,F,X,J,_t,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function lt(Y,st){st===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(st.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let st=Y.near,Et=Y.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),M.near=P.near=C.near=st,M.far=P.far=C.far=Et,(L!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),C.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const at=Y.parent,Pt=M.cameras;lt(M,at);for(let Nt=0;Nt<Pt.length;Nt++)lt(Pt[Nt],at);Pt.length===2?G(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),gt(Y,M,at)};function gt(Y,st,Et){Et===null?Y.matrix.copy(st.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(st.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ms*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(Y){c=Y,p!==null&&(p.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let St=null;function Ot(Y,st){if(h=st.getViewerPose(l||o),u=st,h!==null){const Et=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let at=!1;Et.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Nt=0;Nt<Et.length;Nt++){const It=Et[Nt];let qt=null;if(m!==null)qt=m.getViewport(It);else{const it=f.getViewSubImage(p,It);qt=it.viewport,Nt===0&&(t.setRenderTargetTextures(S,it.colorTexture,p.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(S))}let j=b[Nt];j===void 0&&(j=new ke,j.layers.enable(Nt),j.viewport=new se,b[Nt]=j),j.matrix.fromArray(It.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(It.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(qt.x,qt.y,qt.width,qt.height),Nt===0&&(M.matrix.copy(j.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(j)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Nt=f.getDepthInformation(Et[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,s.renderState)}}for(let Et=0;Et<x.length;Et++){const at=v[Et],Pt=x[Et];at!==null&&Pt!==void 0&&Pt.update(at,st,l||o)}St&&St(Y,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),u=null}const Kt=new Ol;Kt.setAnimationLoop(Ot),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}}const jn=new ln,E0=new re;function b0(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Ul(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,S,x,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),f(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),p(g,d),d.isMeshPhysicalMaterial&&m(g,d,v)):d.isMeshMatcapMaterial?(r(g,d),u(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),_(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?c(g,d,S,x):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Le&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Le&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const S=t.get(d),x=S.envMap,v=S.envMapRotation;x&&(g.envMap.value=x,jn.copy(v),jn.x*=-1,jn.y*=-1,jn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),g.envMapRotation.value.setFromMatrix4(E0.makeRotationFromEuler(jn)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,S,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*S,g.scale.value=x*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,S){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Le&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function u(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){const S=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function l(S,x){let v=s[S.id];v===void 0&&(u(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",g));const D=x.program;n.updateUBOMapping(S,D);const T=t.render.frame;r[S.id]!==T&&(p(S),r[S.id]=T)}function h(S){const x=f();S.__bindingPointIndex=x;const v=i.createBuffer(),D=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const x=s[S.id],v=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,C=v.length;T<C;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,M=P.length;b<M;b++){const L=P[b];if(m(L,T,b,D)===!0){const k=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let K=0;K<O.length;K++){const H=O[K],nt=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,k+V,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,V),V+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,x,v,D){const T=S.value,C=x+"_"+v;if(D[C]===void 0)return typeof T=="number"||typeof T=="boolean"?D[C]=T:D[C]=T.clone(),!0;{const P=D[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return D[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function u(S){const x=S.uniforms;let v=0;const D=16;for(let C=0,P=x.length;C<P;C++){const b=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,L=b.length;M<L;M++){const k=b[M],O=Array.isArray(k.value)?k.value:[k.value];for(let V=0,K=O.length;V<K;V++){const H=O[V],nt=_(H),G=v%D,lt=G%nt.boundary,gt=G+lt;v+=lt,gt!==0&&D-gt<nt.storage&&(v+=D-gt),k.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=nt.storage}}}const T=v%D;return T>0&&(v+=D-T),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function g(S){const x=S.target;x.removeEventListener("dispose",g);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class T0{constructor(t={}){const{canvas:e=fu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const u=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=On,this.toneMappingExposure=1;const v=this;let D=!1,T=0,C=0,P=null,b=-1,M=null;const L=new se,k=new se;let O=null;const V=new Gt(0);let K=0,H=e.width,nt=e.height,G=1,lt=null,gt=null;const St=new se(0,0,H,nt),Ot=new se(0,0,H,nt);let Kt=!1;const Y=new _a;let st=!1,Et=!1;const at=new re,Pt=new re,Nt=new R,It=new se,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function it(){return P===null?G:1}let A=n;function Ct(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ca}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),A===null){const U="webgl2";if(A=Ct(U,E),A===null)throw Ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,xt,ct,Lt,_t,w,y,F,X,J,q,bt,ut,vt,Wt,et,Mt,Dt,Ut,yt,Xt,Vt,oe,I;function dt(){Q=new Lp(A),Q.init(),Vt=new g0(A,Q),xt=new wp(A,Q,t,Vt),ct=new f0(A,Q),xt.reverseDepthBuffer&&p&&ct.buffers.depth.setReversed(!0),Lt=new Up(A),_t=new Jm,w=new m0(A,Q,ct,_t,xt,Vt,Lt),y=new Ap(v),F=new Pp(v),X=new ku(A),oe=new Ep(A,X),J=new Dp(A,X,Lt,oe),q=new Fp(A,J,X,Lt),Ut=new Np(A,xt,w),et=new Tp(_t),bt=new jm(v,y,F,Q,xt,oe,et),ut=new b0(v,_t),vt=new t0,Wt=new o0(Q),Dt=new Sp(v,y,F,ct,q,m,c),Mt=new u0(v,q,xt),I=new w0(A,Lt,xt,ct),yt=new bp(A,Q,Lt),Xt=new Ip(A,Q,Lt),Lt.programs=bt.programs,v.capabilities=xt,v.extensions=Q,v.properties=_t,v.renderLists=vt,v.shadowMap=Mt,v.state=ct,v.info=Lt}dt();const W=new S0(v,A);this.xr=W,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(H,nt,!1))},this.getSize=function(E){return E.set(H,nt)},this.setSize=function(E,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,nt=U,e.width=Math.floor(E*G),e.height=Math.floor(U*G),B===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(H*G,nt*G).floor()},this.setDrawingBufferSize=function(E,U,B){H=E,nt=U,G=B,e.width=Math.floor(E*B),e.height=Math.floor(U*B),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(St)},this.setViewport=function(E,U,B,z){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,U,B,z),ct.viewport(L.copy(St).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Ot)},this.setScissor=function(E,U,B,z){E.isVector4?Ot.set(E.x,E.y,E.z,E.w):Ot.set(E,U,B,z),ct.scissor(k.copy(Ot).multiplyScalar(G).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(E){ct.setScissorTest(Kt=E)},this.setOpaqueSort=function(E){lt=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(E=!0,U=!0,B=!0){let z=0;if(E){let N=!1;if(P!==null){const rt=P.texture.format;N=rt===pa||rt===fa||rt===da}if(N){const rt=P.texture.type,pt=rt===Sn||rt===oi||rt===ps||rt===Wi||rt===ha||rt===ua,wt=Dt.getClearColor(),Tt=Dt.getClearAlpha(),Ft=wt.r,zt=wt.g,At=wt.b;pt?(u[0]=Ft,u[1]=zt,u[2]=At,u[3]=Tt,A.clearBufferuiv(A.COLOR,0,u)):(_[0]=Ft,_[1]=zt,_[2]=At,_[3]=Tt,A.clearBufferiv(A.COLOR,0,_))}else z|=A.COLOR_BUFFER_BIT}U&&(z|=A.DEPTH_BUFFER_BIT),B&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),vt.dispose(),Wt.dispose(),_t.dispose(),y.dispose(),F.dispose(),q.dispose(),oe.dispose(),I.dispose(),bt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Ra),W.removeEventListener("sessionend",Pa),Xn.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=Lt.autoReset,U=Mt.enabled,B=Mt.autoUpdate,z=Mt.needsUpdate,N=Mt.type;dt(),Lt.autoReset=E,Mt.enabled=U,Mt.autoUpdate=B,Mt.needsUpdate=z,Mt.type=N}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Bt(E){const U=E.target;U.removeEventListener("dispose",Bt),de(U)}function de(E){we(E),_t.remove(E)}function we(E){const U=_t.get(E).programs;U!==void 0&&(U.forEach(function(B){bt.releaseProgram(B)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,B,z,N,rt){U===null&&(U=qt);const pt=N.isMesh&&N.matrixWorld.determinant()<0,wt=lh(E,U,B,z,N);ct.setMaterial(z,pt);let Tt=B.index,Ft=1;if(z.wireframe===!0){if(Tt=J.getWireframeAttribute(B),Tt===void 0)return;Ft=2}const zt=B.drawRange,At=B.attributes.position;let $t=zt.start*Ft,ae=(zt.start+zt.count)*Ft;rt!==null&&($t=Math.max($t,rt.start*Ft),ae=Math.min(ae,(rt.start+rt.count)*Ft)),Tt!==null?($t=Math.max($t,0),ae=Math.min(ae,Tt.count)):At!=null&&($t=Math.max($t,0),ae=Math.min(ae,At.count));const ce=ae-$t;if(ce<0||ce===1/0)return;oe.setup(N,z,wt,B,Tt);let Ie,Zt=yt;if(Tt!==null&&(Ie=X.get(Tt),Zt=Xt,Zt.setIndex(Ie)),N.isMesh)z.wireframe===!0?(ct.setLineWidth(z.wireframeLinewidth*it()),Zt.setMode(A.LINES)):Zt.setMode(A.TRIANGLES);else if(N.isLine){let Rt=z.linewidth;Rt===void 0&&(Rt=1),ct.setLineWidth(Rt*it()),N.isLineSegments?Zt.setMode(A.LINES):N.isLineLoop?Zt.setMode(A.LINE_LOOP):Zt.setMode(A.LINE_STRIP)}else N.isPoints?Zt.setMode(A.POINTS):N.isSprite&&Zt.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Rt=N._multiDrawStarts,dn=N._multiDrawCounts,jt=N._multiDrawCount,qe=Tt?X.get(Tt).bytesPerElement:1,pi=_t.get(z).currentProgram.getUniforms();for(let Oe=0;Oe<jt;Oe++)pi.setValue(A,"_gl_DrawID",Oe),Zt.render(Rt[Oe]/qe,dn[Oe])}else if(N.isInstancedMesh)Zt.renderInstances($t,ce,N.count);else if(B.isInstancedBufferGeometry){const Rt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,dn=Math.min(B.instanceCount,Rt);Zt.renderInstances($t,ce,dn)}else Zt.render($t,ce)};function ee(E,U,B){E.transparent===!0&&E.side===Ce&&E.forceSinglePass===!1?(E.side=Le,E.needsUpdate=!0,As(E,U,B),E.side=zn,E.needsUpdate=!0,As(E,U,B),E.side=Ce):As(E,U,B)}this.compile=function(E,U,B=null){B===null&&(B=E),d=Wt.get(B),d.init(U),x.push(d),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),E!==B&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const z=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const rt=N.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){const wt=rt[pt];ee(wt,B,N),z.add(wt)}else ee(rt,B,N),z.add(rt)}),x.pop(),d=null,z},this.compileAsync=function(E,U,B=null){const z=this.compile(E,U,B);return new Promise(N=>{function rt(){if(z.forEach(function(pt){_t.get(pt).currentProgram.isReady()&&z.delete(pt)}),z.size===0){N(E);return}setTimeout(rt,10)}Q.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Xe=null;function un(E){Xe&&Xe(E)}function Ra(){Xn.stop()}function Pa(){Xn.start()}const Xn=new Ol;Xn.setAnimationLoop(un),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(E){Xe=E,W.setAnimationLoop(E),E===null?Xn.stop():Xn.start()},W.addEventListener("sessionstart",Ra),W.addEventListener("sessionend",Pa),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,P),d=Wt.get(E,x.length),d.init(U),x.push(d),Pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Pt),Et=this.localClippingEnabled,st=et.init(this.clippingPlanes,Et),g=vt.get(E,S.length),g.init(),S.push(g),W.enabled===!0&&W.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&Tr(rt,U,-1/0,v.sortObjects)}Tr(E,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(lt,gt),j=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,j&&Dt.addToRenderList(g,E),this.info.render.frame++,st===!0&&et.beginShadows();const B=d.state.shadowsArray;Mt.render(B,E,U),st===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=g.opaque,N=g.transmissive;if(d.setupLights(),U.isArrayCamera){const rt=U.cameras;if(N.length>0)for(let pt=0,wt=rt.length;pt<wt;pt++){const Tt=rt[pt];Da(z,N,E,Tt)}j&&Dt.render(E);for(let pt=0,wt=rt.length;pt<wt;pt++){const Tt=rt[pt];La(g,E,Tt,Tt.viewport)}}else N.length>0&&Da(z,N,E,U),j&&Dt.render(E),La(g,E,U);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,U),oe.resetDefaultState(),b=-1,M=null,x.pop(),x.length>0?(d=x[x.length-1],st===!0&&et.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Tr(E,U,B,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){z&&It.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pt);const pt=q.update(E),wt=E.material;wt.visible&&g.push(E,pt,wt,B,It.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const pt=q.update(E),wt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),It.copy(E.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),It.copy(pt.boundingSphere.center)),It.applyMatrix4(E.matrixWorld).applyMatrix4(Pt)),Array.isArray(wt)){const Tt=pt.groups;for(let Ft=0,zt=Tt.length;Ft<zt;Ft++){const At=Tt[Ft],$t=wt[At.materialIndex];$t&&$t.visible&&g.push(E,pt,$t,B,It.z,At)}}else wt.visible&&g.push(E,pt,wt,B,It.z,null)}}const rt=E.children;for(let pt=0,wt=rt.length;pt<wt;pt++)Tr(rt[pt],U,B,z)}function La(E,U,B,z){const N=E.opaque,rt=E.transmissive,pt=E.transparent;d.setupLightsView(B),st===!0&&et.setGlobalState(v.clippingPlanes,B),z&&ct.viewport(L.copy(z)),N.length>0&&Ts(N,U,B),rt.length>0&&Ts(rt,U,B),pt.length>0&&Ts(pt,U,B),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Da(E,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new ai(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Ms:Sn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const rt=d.state.transmissionRenderTarget[z.id],pt=z.viewport||L;rt.setSize(pt.z,pt.w);const wt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(V),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),j&&Dt.render(B);const Tt=v.toneMapping;v.toneMapping=On;const Ft=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),st===!0&&et.setGlobalState(v.clippingPlanes,z),Ts(E,B,z),w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let At=0,$t=U.length;At<$t;At++){const ae=U[At],ce=ae.object,Ie=ae.geometry,Zt=ae.material,Rt=ae.group;if(Zt.side===Ce&&ce.layers.test(z.layers)){const dn=Zt.side;Zt.side=Le,Zt.needsUpdate=!0,Ia(ce,B,z,Ie,Zt,Rt),Zt.side=dn,Zt.needsUpdate=!0,zt=!0}}zt===!0&&(w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt))}v.setRenderTarget(wt),v.setClearColor(V,K),Ft!==void 0&&(z.viewport=Ft),v.toneMapping=Tt}function Ts(E,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,rt=E.length;N<rt;N++){const pt=E[N],wt=pt.object,Tt=pt.geometry,Ft=z===null?pt.material:z,zt=pt.group;wt.layers.test(B.layers)&&Ia(wt,U,B,Tt,Ft,zt)}}function Ia(E,U,B,z,N,rt){E.onBeforeRender(v,U,B,z,N,rt),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,U,B,z,E,rt),N.transparent===!0&&N.side===Ce&&N.forceSinglePass===!1?(N.side=Le,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,E,rt),N.side=zn,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,E,rt),N.side=Ce):v.renderBufferDirect(B,U,z,N,E,rt),E.onAfterRender(v,U,B,z,N,rt)}function As(E,U,B){U.isScene!==!0&&(U=qt);const z=_t.get(E),N=d.state.lights,rt=d.state.shadowsArray,pt=N.state.version,wt=bt.getParameters(E,N.state,rt,U,B),Tt=bt.getProgramCacheKey(wt);let Ft=z.programs;z.environment=E.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(E.isMeshStandardMaterial?F:y).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ft===void 0&&(E.addEventListener("dispose",Bt),Ft=new Map,z.programs=Ft);let zt=Ft.get(Tt);if(zt!==void 0){if(z.currentProgram===zt&&z.lightsStateVersion===pt)return Na(E,wt),zt}else wt.uniforms=bt.getUniforms(E),E.onBeforeCompile(wt,v),zt=bt.acquireProgram(wt,Tt),Ft.set(Tt,zt),z.uniforms=wt.uniforms;const At=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=et.uniform),Na(E,wt),z.needsLights=uh(E),z.lightsStateVersion=pt,z.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=zt,z.uniformsList=null,zt}function Ua(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=hr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Na(E,U){const B=_t.get(E);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function lh(E,U,B,z,N){U.isScene!==!0&&(U=qt),w.resetTextureUnits();const rt=U.fog,pt=z.isMeshStandardMaterial?U.environment:null,wt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Yi,Tt=(z.isMeshStandardMaterial?F:y).get(z.envMap||pt),Ft=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,zt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),At=!!B.morphAttributes.position,$t=!!B.morphAttributes.normal,ae=!!B.morphAttributes.color;let ce=On;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ce=v.toneMapping);const Ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Zt=Ie!==void 0?Ie.length:0,Rt=_t.get(z),dn=d.state.lights;if(st===!0&&(Et===!0||E!==M)){const Ve=E===M&&z.id===b;et.setState(z,E,Ve)}let jt=!1;z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==dn.state.version||Rt.outputColorSpace!==wt||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==Tt||z.fog===!0&&Rt.fog!==rt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==et.numPlanes||Rt.numIntersection!==et.numIntersection)||Rt.vertexAlphas!==Ft||Rt.vertexTangents!==zt||Rt.morphTargets!==At||Rt.morphNormals!==$t||Rt.morphColors!==ae||Rt.toneMapping!==ce||Rt.morphTargetsCount!==Zt)&&(jt=!0):(jt=!0,Rt.__version=z.version);let qe=Rt.currentProgram;jt===!0&&(qe=As(z,U,N));let pi=!1,Oe=!1,Ki=!1;const le=qe.getUniforms(),nn=Rt.uniforms;if(ct.useProgram(qe.program)&&(pi=!0,Oe=!0,Ki=!0),z.id!==b&&(b=z.id,Oe=!0),pi||M!==E){ct.buffers.depth.getReversed()?(at.copy(E.projectionMatrix),mu(at),gu(at),le.setValue(A,"projectionMatrix",at)):le.setValue(A,"projectionMatrix",E.projectionMatrix),le.setValue(A,"viewMatrix",E.matrixWorldInverse);const En=le.map.cameraPosition;En!==void 0&&En.setValue(A,Nt.setFromMatrixPosition(E.matrixWorld)),xt.logarithmicDepthBuffer&&le.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&le.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Oe=!0,Ki=!0)}if(N.isSkinnedMesh){le.setOptional(A,N,"bindMatrix"),le.setOptional(A,N,"bindMatrixInverse");const Ve=N.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),le.setValue(A,"boneTexture",Ve.boneTexture,w))}N.isBatchedMesh&&(le.setOptional(A,N,"batchingTexture"),le.setValue(A,"batchingTexture",N._matricesTexture,w),le.setOptional(A,N,"batchingIdTexture"),le.setValue(A,"batchingIdTexture",N._indirectTexture,w),le.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&le.setValue(A,"batchingColorTexture",N._colorsTexture,w));const Zi=B.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&Ut.update(N,B,qe),(Oe||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,le.setValue(A,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(nn.envMap.value=Tt,nn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(nn.envMapIntensity.value=U.environmentIntensity),Oe&&(le.setValue(A,"toneMappingExposure",v.toneMappingExposure),Rt.needsLights&&hh(nn,Ki),rt&&z.fog===!0&&ut.refreshFogUniforms(nn,rt),ut.refreshMaterialUniforms(nn,z,G,nt,d.state.transmissionRenderTarget[E.id]),hr.upload(A,Ua(Rt),nn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(hr.upload(A,Ua(Rt),nn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&le.setValue(A,"center",N.center),le.setValue(A,"modelViewMatrix",N.modelViewMatrix),le.setValue(A,"normalMatrix",N.normalMatrix),le.setValue(A,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ve=z.uniformsGroups;for(let En=0,bn=Ve.length;En<bn;En++){const Fa=Ve[En];I.update(Fa,qe),I.bind(Fa,qe)}}return qe}function hh(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function uh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,U,B){_t.get(E.texture).__webglTexture=U,_t.get(E.depthTexture).__webglTexture=B;const z=_t.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const B=_t.get(E);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,B=0){P=E,T=U,C=B;let z=!0,N=null,rt=!1,pt=!1;if(E){const Tt=_t.get(E);if(Tt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(A.FRAMEBUFFER,null),z=!1;else if(Tt.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(Tt.__hasExternalTextures)w.rebindTextures(E,_t.get(E.texture).__webglTexture,_t.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const At=E.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&_t.has(At)&&(E.width!==At.image.width||E.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Ft=E.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(pt=!0);const zt=_t.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?N=zt[U][B]:N=zt[U],rt=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?N=_t.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?N=zt[B]:N=zt,L.copy(E.viewport),k.copy(E.scissor),O=E.scissorTest}else L.copy(St).multiplyScalar(G).floor(),k.copy(Ot).multiplyScalar(G).floor(),O=Kt;if(ct.bindFramebuffer(A.FRAMEBUFFER,N)&&z&&ct.drawBuffers(E,N),ct.viewport(L),ct.scissor(k),ct.setScissorTest(O),rt){const Tt=_t.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,B)}else if(pt){const Tt=_t.get(E.texture),Ft=U||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Tt.__webglTexture,B||0,Ft)}b=-1},this.readRenderTargetPixels=function(E,U,B,z,N,rt,pt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(wt=wt[pt]),wt){ct.bindFramebuffer(A.FRAMEBUFFER,wt);try{const Tt=E.texture,Ft=Tt.format,zt=Tt.type;if(!xt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&B>=0&&B<=E.height-N&&A.readPixels(U,B,z,N,Vt.convert(Ft),Vt.convert(zt),rt)}finally{const Tt=P!==null?_t.get(P).__webglFramebuffer:null;ct.bindFramebuffer(A.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(E,U,B,z,N,rt,pt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(wt=wt[pt]),wt){const Tt=E.texture,Ft=Tt.format,zt=Tt.type;if(!xt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-z&&B>=0&&B<=E.height-N){ct.bindFramebuffer(A.FRAMEBUFFER,wt);const At=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,At),A.bufferData(A.PIXEL_PACK_BUFFER,rt.byteLength,A.STREAM_READ),A.readPixels(U,B,z,N,Vt.convert(Ft),Vt.convert(zt),0);const $t=P!==null?_t.get(P).__webglFramebuffer:null;ct.bindFramebuffer(A.FRAMEBUFFER,$t);const ae=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await pu(A,ae,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,At),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,rt),A.deleteBuffer(At),A.deleteSync(ae),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,B=0){E.isTexture!==!0&&(rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-B),N=Math.floor(E.image.width*z),rt=Math.floor(E.image.height*z),pt=U!==null?U.x:0,wt=U!==null?U.y:0;w.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,pt,wt,N,rt),ct.unbindTexture()},this.copyTextureToTexture=function(E,U,B=null,z=null,N=0){E.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let rt,pt,wt,Tt,Ft,zt,At,$t,ae;const ce=E.isCompressedTexture?E.mipmaps[N]:E.image;B!==null?(rt=B.max.x-B.min.x,pt=B.max.y-B.min.y,wt=B.isBox3?B.max.z-B.min.z:1,Tt=B.min.x,Ft=B.min.y,zt=B.isBox3?B.min.z:0):(rt=ce.width,pt=ce.height,wt=ce.depth||1,Tt=0,Ft=0,zt=0),z!==null?(At=z.x,$t=z.y,ae=z.z):(At=0,$t=0,ae=0);const Ie=Vt.convert(U.format),Zt=Vt.convert(U.type);let Rt;U.isData3DTexture?(w.setTexture3D(U,0),Rt=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Rt=A.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Rt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const dn=A.getParameter(A.UNPACK_ROW_LENGTH),jt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),qe=A.getParameter(A.UNPACK_SKIP_PIXELS),pi=A.getParameter(A.UNPACK_SKIP_ROWS),Oe=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ce.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ce.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Tt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ft),A.pixelStorei(A.UNPACK_SKIP_IMAGES,zt);const Ki=E.isDataArrayTexture||E.isData3DTexture,le=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const nn=_t.get(E),Zi=_t.get(U),Ve=_t.get(nn.__renderTarget),En=_t.get(Zi.__renderTarget);ct.bindFramebuffer(A.READ_FRAMEBUFFER,Ve.__webglFramebuffer),ct.bindFramebuffer(A.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let bn=0;bn<wt;bn++)Ki&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_t.get(E).__webglTexture,N,zt+bn),E.isDepthTexture?(le&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_t.get(U).__webglTexture,N,ae+bn),A.blitFramebuffer(Tt,Ft,rt,pt,At,$t,rt,pt,A.DEPTH_BUFFER_BIT,A.NEAREST)):le?A.copyTexSubImage3D(Rt,N,At,$t,ae+bn,Tt,Ft,rt,pt):A.copyTexSubImage2D(Rt,N,At,$t,ae+bn,Tt,Ft,rt,pt);ct.bindFramebuffer(A.READ_FRAMEBUFFER,null),ct.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else le?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(Rt,N,At,$t,ae,rt,pt,wt,Ie,Zt,ce.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(Rt,N,At,$t,ae,rt,pt,wt,Ie,ce.data):A.texSubImage3D(Rt,N,At,$t,ae,rt,pt,wt,Ie,Zt,ce):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,N,At,$t,rt,pt,Ie,Zt,ce.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,N,At,$t,ce.width,ce.height,Ie,ce.data):A.texSubImage2D(A.TEXTURE_2D,N,At,$t,rt,pt,Ie,Zt,ce);A.pixelStorei(A.UNPACK_ROW_LENGTH,dn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,jt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,qe),A.pixelStorei(A.UNPACK_SKIP_ROWS,pi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Oe),N===0&&U.generateMipmaps&&A.generateMipmap(Rt),ct.unbindTexture()},this.copyTextureToTexture3D=function(E,U,B=null,z=null,N=0){return E.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,B,z,N)},this.initRenderTarget=function(E){_t.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),ct.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,ct.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class xa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new xa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Uc extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wl extends fi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gr=new R,_r=new R,Nc=new re,es=new Es,Ks=new Ss,eo=new R,Fc=new R;class A0 extends ge{constructor(t=new be,e=new Wl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gr.fromBufferAttribute(e,s-1),_r.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gr.distanceTo(_r);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,t.ray.intersectsSphere(Ks)===!1)return;Nc.copy(s).invert(),es.copy(t.ray).applyMatrix4(Nc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),u=Math.min(h.count,o.start+o.count);for(let _=m,g=u-1;_<g;_+=l){const d=h.getX(_),S=h.getX(_+1),x=Zs(this,t,es,c,d,S);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(u-1),g=h.getX(m),d=Zs(this,t,es,c,_,g);d&&e.push(d)}}else{const m=Math.max(0,o.start),u=Math.min(p.count,o.start+o.count);for(let _=m,g=u-1;_<g;_+=l){const d=Zs(this,t,es,c,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=Zs(this,t,es,c,u-1,m);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zs(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(gr.fromBufferAttribute(o,s),_r.fromBufferAttribute(o,r),e.distanceSqToSegment(gr,_r,eo,Fc)>n)return;eo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(eo);if(!(c<t.near||c>t.far))return{distance:c,point:Fc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Xl extends fi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Oc=new re,ta=new Es,js=new Ss,Js=new R;class C0 extends ge{constructor(t=new be,e=new Xl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),js.radius+=r,t.ray.intersectsSphere(js)===!1)return;Oc.copy(s).invert(),ta.copy(t.ray).applyMatrix4(Oc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const p=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let u=p,_=m;u<_;u++){const g=l.getX(u);Js.fromBufferAttribute(f,g),Bc(Js,g,c,s,t,e,this)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let u=p,_=m;u<_;u++)Js.fromBufferAttribute(f,u),Bc(Js,u,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Bc(i,t,e,n,s,r,o){const a=ta.distanceSqToPoint(i);if(a<e){const c=new R;ta.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ql extends De{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],p=n[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new tt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],o=[],a=new R,c=new re;for(let m=0;m<=t;m++){const u=m/t;s[m]=this.getTangentAt(u,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const u=Math.acos(Ee(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,u))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Ee(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let u=1;u<=t;u++)r[u].applyMatrix4(c.makeRotationAxis(s[u],m*u)),o[u].crossVectors(s[u],r[u])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ma extends hn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new tt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=c-this.aX,m=l-this.aY;c=p*h-m*f+this.aX,l=p*f+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class R0 extends Ma{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ya(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+f)+(c-a)/f;p*=h,m*=h,s(o,a,p,m)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Qs=new R,no=new ya,io=new ya,so=new ya;class P0 extends hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Qs.subVectors(s[0],s[1]).add(s[0]),l=Qs);const f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let u=Math.pow(l.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(h),m);_<1e-4&&(_=1),u<1e-4&&(u=_),g<1e-4&&(g=_),no.initNonuniformCatmullRom(l.x,f.x,p.x,h.x,u,_,g),io.initNonuniformCatmullRom(l.y,f.y,p.y,h.y,u,_,g),so.initNonuniformCatmullRom(l.z,f.z,p.z,h.z,u,_,g)}else this.curveType==="catmullrom"&&(no.initCatmullRom(l.x,f.x,p.x,h.x,this.tension),io.initCatmullRom(l.y,f.y,p.y,h.y,this.tension),so.initCatmullRom(l.z,f.z,p.z,h.z,this.tension));return n.set(no.calc(c),io.calc(c),so.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function zc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function L0(i,t){const e=1-i;return e*e*t}function D0(i,t){return 2*(1-i)*i*t}function I0(i,t){return i*i*t}function ls(i,t,e,n){return L0(i,t)+D0(i,e)+I0(i,n)}function U0(i,t){const e=1-i;return e*e*e*t}function N0(i,t){const e=1-i;return 3*e*e*i*t}function F0(i,t){return 3*(1-i)*i*i*t}function O0(i,t){return i*i*i*t}function hs(i,t,e,n,s){return U0(i,t)+N0(i,e)+F0(i,n)+O0(i,s)}class Yl extends hn{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hs(t,s.x,r.x,o.x,a.x),hs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class B0 extends hn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hs(t,s.x,r.x,o.x,a.x),hs(t,s.y,r.y,o.y,a.y),hs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $l extends hn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class z0 extends hn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kl extends hn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ls(t,s.x,r.x,o.x),ls(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class k0 extends hn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ls(t,s.x,r.x,o.x),ls(t,s.y,r.y,o.y),ls(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zl extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(zc(a,c.x,l.x,h.x,f.x),zc(a,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new tt().fromArray(s))}return this}}var ea=Object.freeze({__proto__:null,ArcCurve:R0,CatmullRomCurve3:P0,CubicBezierCurve:Yl,CubicBezierCurve3:B0,EllipseCurve:Ma,LineCurve:$l,LineCurve3:z0,QuadraticBezierCurve:Kl,QuadraticBezierCurve3:k0,SplineCurve:Zl});class V0 extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ea[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ea[s.type]().fromJSON(s))}return this}}class kc extends V0{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new $l(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Kl(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Yl(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Zl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ma(t,e,n,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Sr extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new R,h=new tt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,p=3;f<=e;f++,p+=3){const m=n+f/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class bs extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],p=[],m=[];let u=0;const _=[],g=n/2;let d=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new te(f,3)),this.setAttribute("normal",new te(p,3)),this.setAttribute("uv",new te(m,2));function S(){const v=new R,D=new R;let T=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const b=[],M=P/r,L=M*(e-t)+t;for(let k=0;k<=s;k++){const O=k/s,V=O*c+a,K=Math.sin(V),H=Math.cos(V);D.x=L*K,D.y=-M*n+g,D.z=L*H,f.push(D.x,D.y,D.z),v.set(K,C,H).normalize(),p.push(v.x,v.y,v.z),m.push(O,1-M),b.push(u++)}_.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const M=_[b][P],L=_[b+1][P],k=_[b+1][P+1],O=_[b][P+1];(t>0||b!==0)&&(h.push(M,L,O),T+=3),(e>0||b!==r-1)&&(h.push(L,k,O),T+=3)}l.addGroup(d,T,0),d+=T}function x(v){const D=u,T=new tt,C=new R;let P=0;const b=v===!0?t:e,M=v===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,g*M,0),p.push(0,M,0),m.push(.5,.5),u++;const L=u;for(let k=0;k<=s;k++){const V=k/s*c+a,K=Math.cos(V),H=Math.sin(V);C.x=b*H,C.y=g*M,C.z=b*K,f.push(C.x,C.y,C.z),p.push(0,M,0),T.x=K*.5+.5,T.y=H*.5*M+.5,m.push(T.x,T.y),u++}for(let k=0;k<s;k++){const O=D+k,V=L+k;v===!0?h.push(V,V+1,O):h.push(V+1,V,O),P+=3}l.addGroup(d,P,v===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sa extends bs{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Sa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ea extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const x=new R,v=new R,D=new R;for(let T=0;T<e.length;T+=3)m(e[T+0],x),m(e[T+1],v),m(e[T+2],D),c(x,v,D,S)}function c(S,x,v,D){const T=D+1,C=[];for(let P=0;P<=T;P++){C[P]=[];const b=S.clone().lerp(v,P/T),M=x.clone().lerp(v,P/T),L=T-P;for(let k=0;k<=L;k++)k===0&&P===T?C[P][k]=b:C[P][k]=b.clone().lerp(M,k/L)}for(let P=0;P<T;P++)for(let b=0;b<2*(T-P)-1;b++){const M=Math.floor(b/2);b%2===0?(p(C[P][M+1]),p(C[P+1][M]),p(C[P][M])):(p(C[P][M+1]),p(C[P+1][M+1]),p(C[P+1][M]))}}function l(S){const x=new R;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(S),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const S=new R;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const v=g(S)/2/Math.PI+.5,D=d(S)/Math.PI+.5;o.push(v,1-D)}u(),f()}function f(){for(let S=0;S<o.length;S+=6){const x=o[S+0],v=o[S+2],D=o[S+4],T=Math.max(x,v,D),C=Math.min(x,v,D);T>.9&&C<.1&&(x<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),D<.2&&(o[S+4]+=1))}}function p(S){r.push(S.x,S.y,S.z)}function m(S,x){const v=S*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function u(){const S=new R,x=new R,v=new R,D=new R,T=new tt,C=new tt,P=new tt;for(let b=0,M=0;b<r.length;b+=9,M+=6){S.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),T.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),D.copy(S).add(x).add(v).divideScalar(3);const L=g(D);_(T,M+0,S,L),_(C,M+2,x,L),_(P,M+4,v,L)}}function _(S,x,v,D){D<0&&S.x===1&&(o[x]=S.x-1),v.x===0&&v.z===0&&(o[x]=D/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.vertices,t.indices,t.radius,t.details)}}class jl extends kc{constructor(t){super(t),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new kc().fromJSON(s))}return this}}const H0={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Jl(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,f,p,m;if(n&&(r=Y0(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let u=e;u<s;u+=e)f=i[u],p=i[u+1],f<a&&(a=f),p<c&&(c=p),f>l&&(l=f),p>h&&(h=p);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return gs(r,o,e,a,c,m,0),o}};function Jl(i,t,e,n,s){let r,o;if(s===sg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Vc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Vc(r,i[r],i[r+1],o);return o&&Er(o,o.next)&&(vs(o),o=o.next),o}function li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Er(e,e.next)||ue(e.prev,e,e.next)===0)){if(vs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function gs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&J0(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?W0(i,n,s,r):G0(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),vs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=X0(li(i),t,e),gs(i,t,e,n,s,r,2)):o===2&&q0(i,t,e,n,s,r):gs(li(i),t,e,n,s,r,1);break}}}function G0(i){const t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,p=s>r?s>o?s:o:r>o?r:o,m=a>c?a>l?a:l:c>l?c:l;let u=n.next;for(;u!==t;){if(u.x>=h&&u.x<=p&&u.y>=f&&u.y<=m&&Ni(s,a,r,c,o,l,u.x,u.y)&&ue(u.prev,u,u.next)>=0)return!1;u=u.next}return!0}function W0(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ue(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,p=o.y,m=a<c?a<l?a:l:c<l?c:l,u=h<f?h<p?h:p:f<p?f:p,_=a>c?a>l?a:l:c>l?c:l,g=h>f?h>p?h:p:f>p?f:p,d=na(m,u,t,e,n),S=na(_,g,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=d&&v&&v.z<=S;){if(x.x>=m&&x.x<=_&&x.y>=u&&x.y<=g&&x!==s&&x!==o&&Ni(a,h,c,f,l,p,x.x,x.y)&&ue(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=m&&v.x<=_&&v.y>=u&&v.y<=g&&v!==s&&v!==o&&Ni(a,h,c,f,l,p,v.x,v.y)&&ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=d;){if(x.x>=m&&x.x<=_&&x.y>=u&&x.y<=g&&x!==s&&x!==o&&Ni(a,h,c,f,l,p,x.x,x.y)&&ue(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=m&&v.x<=_&&v.y>=u&&v.y<=g&&v!==s&&v!==o&&Ni(a,h,c,f,l,p,v.x,v.y)&&ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function X0(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Er(s,r)&&Ql(s,n,n.next,r)&&_s(s,r)&&_s(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),vs(n),vs(n.next),n=i=r),n=n.next}while(n!==i);return li(n)}function q0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&eg(o,a)){let c=th(o,a);o=li(o,o.next),c=li(c,c.next),gs(o,t,e,n,s,r,0),gs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Y0(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Jl(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(tg(l));for(s.sort($0),r=0;r<s.length;r++)e=K0(s[r],e);return e}function $0(i,t){return i.x-t.x}function K0(i,t){const e=Z0(i,t);if(!e)return t;const n=th(e,i);return li(n,n.next),li(e,e.next)}function Z0(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ni(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),_s(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&j0(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function j0(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function J0(i,t,e,n){let s=i;do s.z===0&&(s.z=na(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Q0(s)}function Q0(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function na(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function tg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ni(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function eg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ng(i,t)&&(_s(i,t)&&_s(t,i)&&ig(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||Er(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Er(i,t){return i.x===t.x&&i.y===t.y}function Ql(i,t,e,n){const s=er(ue(i,t,e)),r=er(ue(i,t,n)),o=er(ue(e,n,i)),a=er(ue(e,n,t));return!!(s!==r&&o!==a||s===0&&tr(i,e,t)||r===0&&tr(i,n,t)||o===0&&tr(e,i,n)||a===0&&tr(e,t,n))}function tr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function er(i){return i>0?1:i<0?-1:0}function ng(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ql(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _s(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function ig(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function th(i,t){const e=new ia(i.i,i.x,i.y),n=new ia(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vc(i,t,e,n){const s=new ia(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ia(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class us{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return us.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Hc(t),Gc(n,t);let o=t.length;e.forEach(Hc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Gc(n,e[c]);const a=H0.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Hc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Gc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ba extends be{constructor(t=new jl([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,u=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:rg;let x,v=!1,D,T,C,P;d&&(x=d.getSpacedPoints(h),v=!0,p=!1,D=d.computeFrenetFrames(h,!1),T=new R,C=new R,P=new R),p||(g=0,m=0,u=0,_=0);const b=a.extractPoints(l);let M=b.shape;const L=b.holes;if(!us.isClockWise(M)){M=M.reverse();for(let j=0,it=L.length;j<it;j++){const A=L[j];us.isClockWise(A)&&(L[j]=A.reverse())}}const O=us.triangulateShape(M,L),V=M;for(let j=0,it=L.length;j<it;j++){const A=L[j];M=M.concat(A)}function K(j,it,A){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(it,A)}const H=M.length,nt=O.length;function G(j,it,A){let Ct,Q,xt;const ct=j.x-it.x,Lt=j.y-it.y,_t=A.x-j.x,w=A.y-j.y,y=ct*ct+Lt*Lt,F=ct*w-Lt*_t;if(Math.abs(F)>Number.EPSILON){const X=Math.sqrt(y),J=Math.sqrt(_t*_t+w*w),q=it.x-Lt/X,bt=it.y+ct/X,ut=A.x-w/J,vt=A.y+_t/J,Wt=((ut-q)*w-(vt-bt)*_t)/(ct*w-Lt*_t);Ct=q+ct*Wt-j.x,Q=bt+Lt*Wt-j.y;const et=Ct*Ct+Q*Q;if(et<=2)return new tt(Ct,Q);xt=Math.sqrt(et/2)}else{let X=!1;ct>Number.EPSILON?_t>Number.EPSILON&&(X=!0):ct<-Number.EPSILON?_t<-Number.EPSILON&&(X=!0):Math.sign(Lt)===Math.sign(w)&&(X=!0),X?(Ct=-Lt,Q=ct,xt=Math.sqrt(y)):(Ct=ct,Q=Lt,xt=Math.sqrt(y/2))}return new tt(Ct/xt,Q/xt)}const lt=[];for(let j=0,it=V.length,A=it-1,Ct=j+1;j<it;j++,A++,Ct++)A===it&&(A=0),Ct===it&&(Ct=0),lt[j]=G(V[j],V[A],V[Ct]);const gt=[];let St,Ot=lt.concat();for(let j=0,it=L.length;j<it;j++){const A=L[j];St=[];for(let Ct=0,Q=A.length,xt=Q-1,ct=Ct+1;Ct<Q;Ct++,xt++,ct++)xt===Q&&(xt=0),ct===Q&&(ct=0),St[Ct]=G(A[Ct],A[xt],A[ct]);gt.push(St),Ot=Ot.concat(St)}for(let j=0;j<g;j++){const it=j/g,A=m*Math.cos(it*Math.PI/2),Ct=u*Math.sin(it*Math.PI/2)+_;for(let Q=0,xt=V.length;Q<xt;Q++){const ct=K(V[Q],lt[Q],Ct);at(ct.x,ct.y,-A)}for(let Q=0,xt=L.length;Q<xt;Q++){const ct=L[Q];St=gt[Q];for(let Lt=0,_t=ct.length;Lt<_t;Lt++){const w=K(ct[Lt],St[Lt],Ct);at(w.x,w.y,-A)}}}const Kt=u+_;for(let j=0;j<H;j++){const it=p?K(M[j],Ot[j],Kt):M[j];v?(C.copy(D.normals[0]).multiplyScalar(it.x),T.copy(D.binormals[0]).multiplyScalar(it.y),P.copy(x[0]).add(C).add(T),at(P.x,P.y,P.z)):at(it.x,it.y,0)}for(let j=1;j<=h;j++)for(let it=0;it<H;it++){const A=p?K(M[it],Ot[it],Kt):M[it];v?(C.copy(D.normals[j]).multiplyScalar(A.x),T.copy(D.binormals[j]).multiplyScalar(A.y),P.copy(x[j]).add(C).add(T),at(P.x,P.y,P.z)):at(A.x,A.y,f/h*j)}for(let j=g-1;j>=0;j--){const it=j/g,A=m*Math.cos(it*Math.PI/2),Ct=u*Math.sin(it*Math.PI/2)+_;for(let Q=0,xt=V.length;Q<xt;Q++){const ct=K(V[Q],lt[Q],Ct);at(ct.x,ct.y,f+A)}for(let Q=0,xt=L.length;Q<xt;Q++){const ct=L[Q];St=gt[Q];for(let Lt=0,_t=ct.length;Lt<_t;Lt++){const w=K(ct[Lt],St[Lt],Ct);v?at(w.x,w.y+x[h-1].y,x[h-1].x+A):at(w.x,w.y,f+A)}}}Y(),st();function Y(){const j=s.length/3;if(p){let it=0,A=H*it;for(let Ct=0;Ct<nt;Ct++){const Q=O[Ct];Pt(Q[2]+A,Q[1]+A,Q[0]+A)}it=h+g*2,A=H*it;for(let Ct=0;Ct<nt;Ct++){const Q=O[Ct];Pt(Q[0]+A,Q[1]+A,Q[2]+A)}}else{for(let it=0;it<nt;it++){const A=O[it];Pt(A[2],A[1],A[0])}for(let it=0;it<nt;it++){const A=O[it];Pt(A[0]+H*h,A[1]+H*h,A[2]+H*h)}}n.addGroup(j,s.length/3-j,0)}function st(){const j=s.length/3;let it=0;Et(V,it),it+=V.length;for(let A=0,Ct=L.length;A<Ct;A++){const Q=L[A];Et(Q,it),it+=Q.length}n.addGroup(j,s.length/3-j,1)}function Et(j,it){let A=j.length;for(;--A>=0;){const Ct=A;let Q=A-1;Q<0&&(Q=j.length-1);for(let xt=0,ct=h+g*2;xt<ct;xt++){const Lt=H*xt,_t=H*(xt+1),w=it+Ct+Lt,y=it+Q+Lt,F=it+Q+_t,X=it+Ct+_t;Nt(w,y,F,X)}}}function at(j,it,A){c.push(j),c.push(it),c.push(A)}function Pt(j,it,A){It(j),It(it),It(A);const Ct=s.length/3,Q=S.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);qt(Q[0]),qt(Q[1]),qt(Q[2])}function Nt(j,it,A,Ct){It(j),It(it),It(Ct),It(it),It(A),It(Ct);const Q=s.length/3,xt=S.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);qt(xt[0]),qt(xt[1]),qt(xt[3]),qt(xt[1]),qt(xt[2]),qt(xt[3])}function It(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function qt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return og(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ea[s.type]().fromJSON(s)),new ba(n,t.options)}}const rg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new tt(r,o),new tt(a,c),new tt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],p=t[s*3],m=t[s*3+1],u=t[s*3+2],_=t[r*3],g=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new tt(o,1-c),new tt(l,1-f),new tt(p,1-u),new tt(_,1-d)]:[new tt(a,1-c),new tt(h,1-f),new tt(m,1-u),new tt(g,1-d)]}};function og(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class xs extends be{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let f=t;const p=(e-t)/s,m=new R,u=new tt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const d=r+g/n*o;m.x=f*Math.cos(d),m.y=f*Math.sin(d),c.push(m.x,m.y,m.z),l.push(0,0,1),u.x=(m.x/e+1)/2,u.y=(m.y/e+1)/2,h.push(u.x,u.y)}f+=p}for(let _=0;_<s;_++){const g=_*(n+1);for(let d=0;d<n;d++){const S=d+g,x=S,v=S+n+1,D=S+n+2,T=S+1;a.push(x,v,T),a.push(v,D,T)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ws extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new R,p=new R,m=[],u=[],_=[],g=[];for(let d=0;d<=n;d++){const S=[],x=d/n;let v=0;d===0&&o===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const T=D/e;f.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),u.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),g.push(T+v,1-x),S.push(l++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){const x=h[d][S+1],v=h[d][S],D=h[d+1][S],T=h[d+1][S+1];(d!==0||o>0)&&m.push(x,v,T),(d!==n-1||c<Math.PI)&&m.push(v,D,T)}this.setIndex(m),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wa extends Ea{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wa(t.radius,t.detail)}}class ds extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,f=new R,p=new R;for(let m=0;m<=n;m++)for(let u=0;u<=s;u++){const _=u/s*r,g=m/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(_),f.y=(t+e*Math.cos(g))*Math.sin(_),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(f,h).normalize(),c.push(p.x,p.y,p.z),l.push(u/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let u=1;u<=s;u++){const _=(s+1)*m+u-1,g=(s+1)*(m-1)+u-1,d=(s+1)*(m-1)+u,S=(s+1)*m+u;o.push(_,g,S),o.push(g,d,S)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ei extends fi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ta extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ag extends Ta{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ro=new re,Wc=new R,Xc=new R;class eh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wc),Xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xc),e.updateMatrixWorld(),ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qc=new re,ns=new R,oo=new R;class cg extends eh{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(ns),oo.copy(n.position),oo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(oo),n.updateMatrixWorld(),s.makeTranslation(-ns.x,-ns.y,-ns.z),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc)}}class Yc extends Ta{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class lg extends eh{constructor(){super(new Bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hg extends Ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new lg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const $c=new re;class ug{constructor(t,e,n=0,s=1/0){this.ray=new Es(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ga,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $c.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($c),this}intersectObject(t,e=!0,n=[]){return sa(t,this,n,e),n.sort(Kc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)sa(t[s],this,n,e);return n.sort(Kc),n}}function Kc(i,t){return i.distance-t.distance}function sa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)sa(r[o],t,e,!0)}}class fs{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Zc=new R;let nr,ao;class dg extends ge{constructor(t=new R(0,0,1),e=new R(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",nr===void 0&&(nr=new be,nr.setAttribute("position",new te([0,0,0,0,1,0],3)),ao=new bs(0,.5,1,5,1),ao.translate(0,-.5,0)),this.position.copy(e),this.line=new A0(nr,new Wl({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new he(ao,new cn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Zc.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Zc,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class fg extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ca);const jc={type:"change"},Aa={type:"start"},nh={type:"end"},ir=new Es,Jc=new Dn,pg=Math.cos(70*Al.DEG2RAD),_e=new R,Ue=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},co=1e-6;class mg extends fg{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new ci,this._lastTargetPosition=new R,this._quat=new ci().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fs,this._sphericalDelta=new fs,this._scale=1,this._panOffset=new R,this._rotateStart=new tt,this._rotateEnd=new tt,this._rotateDelta=new tt,this._panStart=new tt,this._panEnd=new tt,this._panDelta=new tt,this._dollyStart=new tt,this._dollyEnd=new tt,this._dollyDelta=new tt,this._dollyDirection=new R,this._mouse=new tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_g.bind(this),this._onPointerDown=gg.bind(this),this._onPointerUp=vg.bind(this),this._onContextMenu=wg.bind(this),this._onMouseWheel=yg.bind(this),this._onKeyDown=Sg.bind(this),this._onTouchStart=Eg.bind(this),this._onTouchMove=bg.bind(this),this._onMouseDown=xg.bind(this),this._onMouseMove=Mg.bind(this),this._interceptControlDown=Tg.bind(this),this._interceptControlUp=Ag.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jc),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ue:n>Math.PI&&(n-=Ue),s<-Math.PI?s+=Ue:s>Math.PI&&(s-=Ue),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=_e.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ir.origin.copy(this.object.position),ir.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ir.direction))<pg?this.object.lookAt(this.target):(Jc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ir.intersectPlane(Jc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>co||8*(1-this._lastQuaternion.dot(this.object.quaternion))>co||this._lastTargetPosition.distanceToSquared(this.target)>co?(this.dispatchEvent(jc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ue/60*this.autoRotateSpeed*t:Ue/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ue*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ue*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ue*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ue*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ue*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ue*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ue*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ue*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function gg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function _g(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function vg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nh),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function xg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case Fi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case Fi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Aa)}function Mg(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function yg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(Aa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(nh))}function Sg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Eg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ii.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case Ii.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case Ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Aa)}function bg(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function wg(i){this.enabled!==!1&&i.preventDefault()}function Tg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ag(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cg(i){const t=new T0({antialias:!0});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.shadowMap.enabled=!0,t.shadowMap.type=ul,t.outputColorSpace=Fe,t.toneMapping=fl,t.toneMappingExposure=1.1,i.insertBefore(t.domElement,i.firstChild);const e=new Uc;e.background=new Gt(989222),e.fog=new xa(989222,20,44);const n=new Jo(t),s=new Uc,r=new ws(20,32,16),o=[],a=r.attributes.position;for(let d=0;d<a.count;d++){const S=a.getY(d)/20,x=new Gt;S>0?x.setRGB(.25+S*.6,.3+S*.6,.42+S*.55):x.setRGB(.16,.12,.09),o.push(x.r,x.g,x.b)}r.setAttribute("color",new te(o,3)),s.add(new he(r,new cn({side:Le,vertexColors:!0})));const c=new he(new Hn(10,5),new cn({color:16777215,side:Ce}));c.position.set(8,12,6),c.lookAt(0,0,0),s.add(c);const l=new he(new Hn(8,4),new cn({color:16760944,side:Ce}));l.position.set(-9,6,-6),l.lookAt(0,0,0),s.add(l),e.environment=n.fromScene(s,.03).texture;const h=new ke(42,1,.1,100);h.position.set(0,10.5,10.5);const f=new mg(h,t.domElement);f.target.set(0,0,0),f.enableDamping=!0,f.dampingFactor=.08,f.maxPolarAngle=Math.PI*.46,f.minDistance=4.5,f.maxDistance=24,f.enablePan=!1,e.add(new ag(14674175,1709072,.6));const p=new hg(16773590,1.3);p.position.set(5,13,7),p.castShadow=!0,p.shadow.mapSize.set(2048,2048),Object.assign(p.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:40}),p.shadow.bias=-6e-4,e.add(p);const m=new Yc(16760944,.7,30);m.position.set(-7,5,-6),e.add(m);const u=new Yc(8036607,.45,30);u.position.set(7,4,-5),e.add(u);function _(){const d=i.clientWidth,S=i.clientHeight;!d||!S||(t.setSize(d,S,!1),h.aspect=d/S,h.fov=d/S<1?56:42,h.updateProjectionMatrix())}const g=new ResizeObserver(_);return g.observe(i),_(),{renderer:t,scene:e,camera:h,controls:f,sun:p,resize:_,dispose(){g.disconnect(),t.dispose(),n.dispose()}}}const tn="abcdefgh",Bn={p:100,n:320,b:330,r:500,q:900,k:0},Qc={w:{k:"♔",q:"♕",r:"♖",b:"♗",n:"♘",p:"♙"},b:{k:"♚",q:"♛",r:"♜",b:"♝",n:"♞",p:"♟"}},ih=[[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]],ra=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],sh=[[1,1],[1,-1],[-1,1],[-1,-1]],rh=[[1,0],[-1,0],[0,1],[0,-1]],on=(i,t)=>i>=0&&i<8&&t>=0&&t<8,je=i=>i==="w"?"b":"w";function Rg(){const i=Array.from({length:8},()=>Array(8).fill(null)),t=["r","n","b","q","k","b","n","r"];for(let e=0;e<8;e++)i[0][e]={t:t[e],c:"w"},i[1][e]={t:"p",c:"w"},i[6][e]={t:"p",c:"b"},i[7][e]={t:t[e],c:"b"};return{b:i,turn:"w",cr:{wK:1,wQ:1,bK:1,bQ:1},ep:null,half:0,full:1}}function In(i,t,e,n){const s=i.b,r=n==="w"?-1:1;for(const o of[-1,1]){const a=t+r,c=e+o;if(on(a,c)){const l=s[a][c];if(l&&l.c===n&&l.t==="p")return!0}}for(const[o,a]of ih){const c=t+o,l=e+a;if(on(c,l)){const h=s[c][l];if(h&&h.c===n&&h.t==="n")return!0}}for(const[o,a]of ra){const c=t+o,l=e+a;if(on(c,l)){const h=s[c][l];if(h&&h.c===n&&h.t==="k")return!0}}for(const[o,a]of sh){let c=t+o,l=e+a;for(;on(c,l);){const h=s[c][l];if(h){if(h.c===n&&(h.t==="b"||h.t==="q"))return!0;break}c+=o,l+=a}}for(const[o,a]of rh){let c=t+o,l=e+a;for(;on(c,l);){const h=s[c][l];if(h){if(h.c===n&&(h.t==="r"||h.t==="q"))return!0;break}c+=o,l+=a}}return!1}function vr(i,t){for(let e=0;e<8;e++)for(let n=0;n<8;n++){const s=i.b[e][n];if(s&&s.t==="k"&&s.c===t)return[e,n]}return[0,0]}function Nn(i,t=i.turn){const e=vr(i,t);return In(i,e[0],e[1],je(t))}function Pg(i){const t=i.turn,e=i.b,n=[],s=je(t);for(let r=0;r<8;r++)for(let o=0;o<8;o++){const a=e[r][o];if(!(!a||a.c!==t))if(a.t==="p"){const c=t==="w"?1:-1,l=t==="w"?1:6,h=t==="w"?7:0,f=(p,m,u,_)=>{if(p===h)for(const g of["q","r","b","n"])n.push({fr:r,fc:o,tr:p,tc:m,cap:u,promo:g});else n.push({fr:r,fc:o,tr:p,tc:m,cap:u,ep:!1})};on(r+c,o)&&!e[r+c][o]&&(f(r+c,o,null),r===l&&on(r+2*c,o)&&!e[r+2*c][o]&&n.push({fr:r,fc:o,tr:r+2*c,tc:o,cap:null,dbl:!0}));for(const p of[-1,1]){const m=r+c,u=o+p;if(!on(m,u))continue;const _=e[m][u];_&&_.c===s?f(m,u,_):!_&&i.ep&&i.ep.r===m&&i.ep.c===u&&n.push({fr:r,fc:o,tr:m,tc:u,cap:e[r][u],ep:!0})}}else if(a.t==="n"||a.t==="k"){const c=a.t==="n"?ih:ra;for(const[l,h]of c){const f=r+l,p=o+h;if(!on(f,p))continue;const m=e[f][p];(!m||m.c===s)&&n.push({fr:r,fc:o,tr:f,tc:p,cap:m||null})}if(a.t==="k"){const l=t==="w"?0:7;r===l&&o===4&&(i.cr[t+"K"]&&!e[l][5]&&!e[l][6]&&e[l][7]&&e[l][7].t==="r"&&e[l][7].c===t&&!In(i,l,4,s)&&!In(i,l,5,s)&&!In(i,l,6,s)&&n.push({fr:r,fc:o,tr:l,tc:6,cap:null,castle:"K"}),i.cr[t+"Q"]&&!e[l][3]&&!e[l][2]&&!e[l][1]&&e[l][0]&&e[l][0].t==="r"&&e[l][0].c===t&&!In(i,l,4,s)&&!In(i,l,3,s)&&!In(i,l,2,s)&&n.push({fr:r,fc:o,tr:l,tc:2,cap:null,castle:"Q"}))}}else{const c=a.t==="b"?sh:a.t==="r"?rh:ra;for(const[l,h]of c){let f=r+l,p=o+h;for(;on(f,p);){const m=e[f][p];if(m){m.c===s&&n.push({fr:r,fc:o,tr:f,tc:p,cap:m});break}n.push({fr:r,fc:o,tr:f,tc:p,cap:null}),f+=l,p+=h}}}}return n}function Gn(i,t){const e=i.b,n=e[t.fr][t.fc],s={cr:{...i.cr},ep:i.ep?{...i.ep}:null,half:i.half,full:i.full,moved:n,capSq:null,capP:null};if(t.ep?(s.capSq=[t.fr,t.tc],s.capP=e[t.fr][t.tc],e[t.fr][t.tc]=null):e[t.tr][t.tc]&&(s.capSq=[t.tr,t.tc],s.capP=e[t.tr][t.tc]),e[t.tr][t.tc]=t.promo?{t:t.promo,c:n.c}:n,e[t.fr][t.fc]=null,t.castle){const o=t.fr;t.castle==="K"?(e[o][5]=e[o][7],e[o][7]=null):(e[o][3]=e[o][0],e[o][0]=null)}n.t==="k"&&(i.cr[n.c+"K"]=0,i.cr[n.c+"Q"]=0);const r=(o,a)=>{o===0&&a===0&&(i.cr.wQ=0),o===0&&a===7&&(i.cr.wK=0),o===7&&a===0&&(i.cr.bQ=0),o===7&&a===7&&(i.cr.bK=0)};return r(t.fr,t.fc),r(t.tr,t.tc),i.ep=t.dbl?{r:(t.fr+t.tr)/2,c:t.fc}:null,i.half=n.t==="p"||s.capP?0:i.half+1,i.turn==="b"&&i.full++,i.turn=je(i.turn),s}function hi(i,t,e){const n=i.b;if(i.turn=je(i.turn),n[t.fr][t.fc]=e.moved,n[t.tr][t.tc]=null,e.capSq&&(n[e.capSq[0]][e.capSq[1]]=e.capP),t.castle){const s=t.fr;t.castle==="K"?(n[s][7]=n[s][5],n[s][5]=null):(n[s][0]=n[s][3],n[s][3]=null)}i.cr=e.cr,i.ep=e.ep,i.half=e.half,i.full=e.full}function Wn(i){const t=i.turn,e=je(t);return Pg(i).filter(n=>{const s=Gn(i,n),r=vr(i,t),o=!In(i,r[0],r[1],e);return hi(i,n,s),o})}function tl(i){let t="";for(let e=0;e<8;e++)for(let n=0;n<8;n++){const s=i.b[e][n];t+=s?s.c==="w"?s.t.toUpperCase():s.t:"."}return t+i.turn+i.cr.wK+i.cr.wQ+i.cr.bK+i.cr.bQ+(i.ep?i.ep.r+""+i.ep.c:"-")}function Lg(i){const t=[];for(let e=0;e<8;e++)for(let n=0;n<8;n++){const s=i.b[e][n];s&&s.t!=="k"&&t.push(s)}return!t.length||t.length===1&&(t[0].t==="n"||t[0].t==="b")}function br(i,t,e,n=1,s=1,r=!0){const o=document.createElement("canvas");o.width=i,o.height=t,e(o.getContext("2d"),i,t);const a=new ql(o);return r&&(a.colorSpace=Fe),a.wrapS=a.wrapT=fr,a.repeat.set(n,s),a.anisotropy=4,a}function oh(i){const t=document.createElement("canvas");return t.width=t.height=64,i(t.getContext("2d")),new ql(t)}const Dg=br(256,128,(i,t,e)=>{i.fillStyle="#4d5157",i.fillRect(0,0,t,e);for(let n=0;n<95;n++){const s=Math.random()*t,r=Math.random()*e,o=140+Math.random()*60|0;i.fillStyle=`rgb(${o},${o+3},${o+8})`,i.strokeStyle="#33373d",i.lineWidth=3,i.beginPath(),i.ellipse(s,r,9+Math.random()*11,7+Math.random()*8,Math.random()*3,0,Math.PI*2),i.fill(),i.stroke()}},3,1),Ig=br(256,256,(i,t,e)=>{i.fillStyle="#2e3137",i.fillRect(0,0,t,e);for(let n=0;n<16;n++){const s=n%2*16;for(let r=-1;r<8;r++){const o=84+Math.random()*34|0;i.fillStyle=`rgb(${o},${o+3},${o+9})`,i.fillRect(r*32+s+1.5,n*16+1.5,29,13)}}},3,2),Ug=br(64,64,(i,t,e)=>{i.fillStyle="#8f959d",i.fillRect(0,0,t,e),i.strokeStyle="#e4e8ec",i.lineWidth=2;for(let n=0;n<8;n++)for(let s=0;s<9;s++)i.beginPath(),i.arc(s*8+n%2*4,n*8+4,3.2,0,Math.PI*2),i.stroke()},5,5),ur=oh(i=>{i.fillStyle="#fff",i.beginPath();for(let t=0;t<10;t++){const e=t%2?12:30,n=t*Math.PI/5-Math.PI/2;i.lineTo(32+Math.cos(n)*e,32+Math.sin(n)*e)}i.closePath(),i.fill()}),el=oh(i=>{const t=i.createRadialGradient(32,32,0,32,32,30);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,64,64)});function nl(){return br(1024,1024,i=>{const t=i.createLinearGradient(0,0,1024,1024);t.addColorStop(0,"#4a3221"),t.addColorStop(1,"#2e1e14"),i.fillStyle=t,i.fillRect(0,0,1024,1024);const e=1024*(.7/9.4),n=(1024-2*e)/8;i.strokeStyle="#f2c14e",i.lineWidth=4,i.strokeRect(e-10,e-10,1024-2*e+20,1024-2*e+20),i.fillStyle="#ffd97a",i.font="700 40px Fredoka, Nunito, sans-serif",i.textAlign="center",i.textBaseline="middle";for(let s=0;s<8;s++){const r=e+(s+.5)*n;i.fillText(tn[s].toUpperCase(),r,1024-e/2+2),i.fillText(tn[s].toUpperCase(),r,e/2);const o=e+(7-s+.5)*n;i.fillText(String(s+1),e/2,o),i.fillText(String(s+1),1024-e/2,o)}})}const Ge=(i,t)=>new R(t-3.5,0,3.5-i);function Ng(i){const t=new he(new Sr(16,64),new ei({color:1516082,roughness:.9}));t.rotation.x=-Math.PI/2,t.position.y=-.36,t.receiveShadow=!0,i.add(t);const e=new ei({color:3810840,roughness:.55}),n=new ei({map:nl(),roughness:.5}),s=new he(new kn(9.4,.3,9.4),[e,e,n,e,e,e]);s.position.y=-.2,s.receiveShadow=!0,s.castShadow=!0,i.add(s),typeof document<"u"&&document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{n.map=nl(),n.needsUpdate=!0});const r=[],o=new ei({color:14929828,roughness:.55}),a=new ei({color:8215097,roughness:.5}),c=new kn(1,.2,1);for(let l=0;l<8;l++)for(let h=0;h<8;h++){const f=new he(c,(l+h)%2===0?a:o),p=Ge(l,h);f.position.set(p.x,-.1,p.z),f.receiveShadow=!0,f.userData.sq=[l,h],i.add(f),r.push(f)}return{table:t,frame:s,squares:r,sqPos:Ge}}function Fg(i){const t=new me;i.add(t);const e=(f,p)=>new cn({color:f,transparent:!0,opacity:p,depthWrite:!1,side:Ce}),n={sel:e(16767354,.65),last:e(15909198,.35),check:e(16726832,.65),dot:e(3129194,.9),cap:e(16739166,.9),col:e(6217983,.45),hover:e(16777215,.22),hintFrom:e(61695,.7),hintTo:e(3066993,.85)},s=new Hn(.98,.98),r=new Sr(.16,28),o=new xs(.38,.48,36),a=new xs(.32,.48,36);function c(f,p,m){let u=s;m==="dot"?u=r:m==="cap"?u=o:(m==="hintFrom"||m==="hintTo")&&(u=a);const _=n[m]||n.sel,g=new he(u,_);g.rotation.x=-Math.PI/2;const d=Ge(f,p);return g.position.set(d.x,m==="dot"||m==="cap"||m==="hintFrom"||m==="hintTo"?.022:.012,d.z),g.renderOrder=2,t.add(g),g}function l(f,p,m,u){const _=Ge(f,p),g=Ge(m,u),d=new R().subVectors(g,_),S=d.length();if(S<.1)return;d.normalize();const x=new dg(d,new R(_.x,.04,_.z),S-.25,61695,.35,.25);return x.renderOrder=3,t.add(x),x}function h(){for(;t.children.length;){const f=t.children[0];t.remove(f),f.dispose&&f.dispose()}}return{addHL:c,addArrow:l,clearHL:h,hlGroup:t}}const ri={w:{name:"Blue",cloth:3108836,cloth2:1788848,trim:16765503,gem:16726891,hair:9067051,css:"#2f6fe4"},b:{name:"Red",cloth:14826033,cloth2:10362650,trim:16777215,gem:3920383,hair:3876632,css:"#e23a31"}},fe=i=>ri[i].name,Se={p:"Pawn",n:"Knight",b:"Bishop",r:"Rook",q:"Queen",k:"King"},lo={p:"pawns",n:"knights",b:"bishops",r:"rooks",q:"queens",k:"kings"},Og={p:{hint:'Say it like: "pawn"',line:"The pawn walks forward, one step at a time."},n:{hint:'Sounds like "night". The K is silent!',line:"The knight jumps in an L shape."},b:{hint:'Say it like: "BISH-up"',line:"The bishop moves on the diagonals."},r:{hint:'Rhymes with "book"',line:"The rook moves in straight lines."},q:{hint:'Say it like: "kween"',line:"The queen can move in any direction."},k:{hint:'Say it like: "king"',line:"The king moves one step in any direction. Keep him safe!"}},il={p:"Shield Bash",n:"Cavalry Charge",b:"Magic Bolts",r:"Cannon Blast",q:"Whirlwind Slash",k:"Royal Smash"},Ln=["zero","one","two","three","four","five","six","seven","eight","nine","ten"];function Bg(i){const t=ri[i],e=ei;return{armor:new e({color:14147043,metalness:.95,roughness:.28}),mail:new e({map:Ug,color:12173512,metalness:.85,roughness:.45}),blade:new e({color:15791352,metalness:1,roughness:.12}),cloth:new e({color:t.cloth,roughness:.55,side:Ce}),cape:new e({color:t.cloth2,roughness:.6,side:Ce}),shieldFace:new e({color:t.cloth,roughness:.4,metalness:.1}),trim:new e({color:t.trim,roughness:.4}),gold:new e({color:15909198,metalness:1,roughness:.25}),gem:new e({color:t.gem,metalness:.2,roughness:.1}),skin:new e({color:15910048,roughness:.6}),hair:new e({color:t.hair,roughness:.8}),leather:new e({color:8014372,roughness:.7}),door:new e({color:7028511,roughness:.7}),dark:new e({color:1184536,roughness:.5}),stone:new e({map:Dg,color:16777215,roughness:.9}),brick:new e({map:Ig,roughness:.85}),horse:new e({color:15198958,metalness:.6,roughness:.3})}}const ot=(i,t,e=0,n=0,s=0)=>{const r=new he(i,t);return r.position.set(e,n,s),r},Jt=(i,t,e,n=16,s=1,r=!1,o=0,a=Math.PI*2)=>new bs(i,t,e,n,s,r,o,a),ve=(i,t=16,e=12)=>new ws(i,t,e),Qt=(i,t,e)=>new kn(i,t,e),zi=(i,t,e=16)=>new Sa(i,t,e);function zg(i,t=1){const e=new jl;e.moveTo(-.13,.12),e.lineTo(.13,.12),e.lineTo(.13,0),e.quadraticCurveTo(.12,-.14,0,-.22),e.quadraticCurveTo(-.12,-.14,-.13,0),e.lineTo(-.13,.12);const n=new ba(e,{depth:.025,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:1,curveSegments:10}),s=new me;s.add(new he(n,[i.shieldFace,i.gold])),s.add(ot(Qt(.042,.27,.008),i.trim,0,-.035,.036)),s.add(ot(Qt(.2,.042,.008),i.trim,0,.035,.036));const r=new me;return s.rotation.y=Math.PI,r.add(s),r.scale.setScalar(t),r}function kg(i,t=.42){const e=new me;e.add(ot(Qt(.03,t,.008),i.blade,0,.07+t/2,0));const n=ot(zi(.021,.05,4),i.blade,0,.07+t+.025,0);return n.rotation.y=Math.PI/4,e.add(n),e.add(ot(Qt(.14,.022,.03),i.gold,0,.06,0)),e.add(ot(Jt(.014,.014,.09,8),i.leather,0,0,0)),e.add(ot(ve(.022,8,6),i.gold,0,-.05,0)),e}function ah(i,t){const e=new me,n={idleR:.12,idleL:.1};if(t.gown)e.add(ot(Jt(.12,.27,.62,24),i.cloth,0,.31,0)),e.add(ot(Jt(.275,.28,.04,24),i.gold,0,.02,0));else if(t.rider){e.add(ot(Jt(.15,.25,.22,20,1,!0),i.cloth,0,.5,0));for(const o of[-1,1])e.add(ot(Jt(.045,.045,.26,10),i.mail,o*.17,.34,-.02))}else{for(const o of[-1,1])e.add(ot(Jt(.05,.055,.3,12),i.mail,o*.075,.15,0)),e.add(ot(Qt(.09,.06,.15),i.leather,o*.075,.03,-.02));e.add(ot(Jt(.15,.22,.3,20,1,!0),i.cloth,0,.44,0))}if(e.add(ot(Jt(.15,.14,.32,20),t.gown?i.cloth:i.mail,0,.73,0)),!t.gown)e.add(ot(Jt(.157,.147,.3,20,1,!0,-Math.PI*.42,Math.PI*.84),i.cloth,0,.72,0).rotateY(Math.PI)),e.add(ot(Qt(.045,.2,.012),i.trim,0,.72,-.152)),e.add(ot(Qt(.14,.045,.012),i.trim,0,.76,-.152));else{const o=ot(new ds(.1,.012,8,24),i.gold,0,.86,-.02);o.rotation.x=Math.PI/2.4,e.add(o),e.add(ot(ve(.025,10,8),i.gem,0,.82,-.12))}const s=ot(new ds(.148,.018,8,24),t.gown?i.gold:i.leather,0,.6,0);s.rotation.x=Math.PI/2,e.add(s),t.gown||e.add(ot(Qt(.05,.04,.02),i.gold,0,.6,-.162));for(const o of[-1,1])e.add(ot(ve(.075,14,10),t.gown?i.cloth:i.armor,o*.18,.86,0));for(const o of[-1,1]){const a=new me;a.position.set(o*.2,.86,0),a.add(ot(Jt(.046,.04,.28,10),t.gown?i.cloth:i.mail,0,-.14,0)),a.add(ot(ve(.042,10,8),t.gown?i.skin:i.leather,0,-.29,0));const c=new me;c.position.y=-.29,a.add(c),e.add(a),o<0?(n.armL=a,n.handL=c):(n.armR=a,n.handR=c)}e.add(ot(Jt(.05,.055,.07,10),t.gown?i.skin:i.mail,0,.92,0));const r=new me;if(r.position.y=1.03,e.add(r),n.head=r,t.head==="helm"||t.head==="mitre"){if(r.add(ot(Jt(.1,.102,.19,20),i.armor)),r.add(ot(Jt(.07,.1,.05,20),i.armor,0,.12,0)),r.add(ot(Qt(.17,.022,.02),i.dark,0,.025,-.095)),r.add(ot(Qt(.026,.1,.02),i.gold,0,-.04,-.098)),r.add(ot(Qt(.026,.05,.02),i.gold,0,.07,-.098)),r.add(ot(Qt(.09,.02,.02),i.gold,0,.07,-.098)),t.plume){const o=ot(zi(.04,.2,10),i.cloth,0,.23,.02);o.rotation.x=-.25,r.add(o)}if(t.head==="mitre"){r.add(ot(zi(.09,.26,20),i.cloth,0,.27,0));const o=ot(new ds(.09,.012,8,24),i.gold,0,.15,0);o.rotation.x=Math.PI/2,r.add(o),r.add(ot(Qt(.02,.1,.02),i.gold,0,.25,-.055)),r.add(ot(Qt(.06,.02,.02),i.gold,0,.27,-.052)),r.add(ot(ve(.025,10,8),i.gold,0,.41,0))}}else{r.add(ot(ve(.095,20,16),i.skin)),r.add(ot(new ws(.1,20,12,0,Math.PI*2,0,Math.PI/2.1),i.hair,0,.005,.012));for(const o of[-1,1])r.add(ot(ve(.013,8,6),i.dark,o*.035,.02,-.088));if(r.add(ot(ve(.017,8,6),i.skin,0,-.005,-.097)),t.head==="king"){const o=ot(ve(.08,16,12),i.hair,0,-.07,-.035);o.scale.set(1,1.15,.75),r.add(o),r.add(ot(Qt(.08,.018,.02),i.hair,0,-.025,-.092))}else r.add(ot(Qt(.035,.01,.01),i.gem,0,-.045,-.092)),r.add(ot(Jt(.09,.12,.26,16,1,!1,-Math.PI/2,Math.PI),i.hair,0,-.1,.02));r.add(ot(Jt(.106,.1,.07,20,1,!0),i.gold,0,.09,0));for(let o=0;o<6;o++){const a=o/6*Math.PI*2;r.add(ot(t.head==="king"?zi(.024,.07,6):ve(.022,10,8),t.head==="king"?i.gold:i.gem,Math.sin(a)*.1,.15,Math.cos(a)*.1))}r.add(ot(ve(.02,10,8),i.gem,0,.09,-.106))}if(t.cape&&e.add(ot(Jt(.2,t.gown?.31:.27,.72,20,1,!0,-Math.PI/2,Math.PI),i.cape,0,.55,0)),t.shield){const o=zg(i,t.bigShield?1.2:1);o.position.set(-.03,.03,-.08),n.handL.add(o),n.shield=o,n.idleL=.35,n.armL.rotation.x=.35,o.rotation.x=-.35}if(t.sword){const o=kg(i,t.bigSword?.5:.42);o.rotation.x=Math.PI,n.handR.add(o),n.sword=o,n.idleR=t.sword==="forward"?.7:t.sword==="raised"?2.5:.12,n.armR.rotation.x=n.idleR}if(t.scepter){const o=new me;o.add(ot(Jt(.012,.012,.42,8),i.gold,0,.12,0)),o.add(ot(ve(.045,14,10),i.gem,0,.36,0)),o.add(ot(Qt(.012,.07,.012),i.gold,0,.42,0)),o.add(ot(Qt(.045,.012,.012),i.gold,0,.43,0)),n.handR.add(o),n.idleR=.9,n.armR.rotation.x=.9,o.rotation.x=-.9,n.scepter=o}return e.userData.rig=n,e}function Vg(i){const t=new me;t.add(ot(Jt(.21,.25,.72,24),i.brick,0,.36,0)),t.add(ot(Jt(.256,.256,.05,24),i.cloth,0,.47,0)),t.add(ot(Jt(.285,.23,.13,24),i.brick,0,.785,0));for(let s=0;s<6;s++){const r=s/6*Math.PI*2,o=ot(Qt(.1,.1,.08),i.brick,Math.sin(r)*.25,.9,Math.cos(r)*.25);o.rotation.y=r,t.add(o)}t.add(ot(Qt(.12,.15,.03),i.door,0,.085,-.245));const e=ot(Jt(.06,.06,.03,16,1,!1,Math.PI/2,Math.PI),i.door,0,.16,-.245);e.rotation.x=Math.PI/2,t.add(e),t.add(ot(ve(.013,8,6),i.gold,.035,.08,-.262)),t.add(ot(Qt(.05,.11,.03),i.dark,0,.6,-.225)),t.add(ot(Jt(.01,.01,.42,6),i.gold,0,1.04,0)),t.add(ot(ve(.02,8,6),i.gold,0,1.26,0));const n=new me;return n.position.set(0,1.16,0),n.add(ot(new Hn(.26,.16),i.cloth,.13,0,0)),n.add(ot(Qt(.034,.16,.006),i.trim,.1,0,0)),n.add(ot(Qt(.26,.034,.006),i.trim,.13,0,0)),t.add(n),{g:t,rig:{flag:n,phase:Math.random()*6}}}function Hg(i){const t=new me,e=new me;t.add(e),e.position.z=.16;const n=i.horse,s=ot(Jt(.11,.12,.36,16),n,0,.36,-.16);s.rotation.x=Math.PI/2,e.add(s),e.add(ot(ve(.12,16,12),n,0,.36,.02)),e.add(ot(ve(.112,16,12),n,0,.37,-.34));const r=ot(Jt(.06,.085,.28,12),n,0,.52,-.42);r.rotation.x=-.55,e.add(r);const o=ot(Qt(.09,.1,.24),n,0,.66,-.53);o.rotation.x=-.55,e.add(o);for(const f of[-1,1]){const p=ot(zi(.022,.08,8),n,f*.03,.75,-.46);e.add(p),e.add(ot(ve(.014,8,6),i.dark,f*.047,.68,-.54))}const a=ot(Qt(.03,.28,.07),i.hair,0,.57,-.37);a.rotation.x=-.55,e.add(a);for(const f of[-1,1]){e.add(ot(Jt(.03,.026,.3,8),n,f*.065,.15,0)),e.add(ot(Jt(.032,.032,.03,8),i.dark,f*.065,.015,0));const p=ot(Jt(.03,.026,.26,8),n,f*.065,.26,-.44);p.rotation.x=.9,e.add(p)}const c=ot(zi(.045,.3,10),i.hair,0,.28,.16);c.rotation.x=2.6,e.add(c),e.add(ot(Qt(.26,.16,.3),i.cloth,0,.37,-.16));for(const f of[-1,1])e.add(ot(Qt(.008,.1,.03),i.trim,f*.133,.37,-.16)),e.add(ot(Qt(.008,.03,.12),i.trim,f*.133,.39,-.16));e.add(ot(Qt(.2,.04,.2),i.leather,0,.47,-.16));const l=ah(i,{rider:!0,head:"helm",plume:!0,shield:!0,sword:"raised"});l.scale.setScalar(.6),l.position.set(0,.2,-.16),e.add(l),e.rotation.x=.36;const h=Object.assign({},l.userData.rig,{horse:e,horseRot:.36});return{g:t,rig:h}}function sl(i,t){const e=Bg(t),n=new me,s=new me;n.add(s);const r=i==="p"?.3:.36;s.add(ot(Jt(r*.92,r,.16,28),e.stone,0,.08,0)),s.add(ot(Jt(r*.8,r*.92,.03,28),e.stone,0,.175,0));const o=new me;o.position.y=.19,s.add(o);let a={};if(i==="r"){const c=Vg(e);o.add(c.g),a=c.rig}else if(i==="n"){const c=Hg(e);o.add(c.g),a=c.rig}else{const c={p:{head:"helm",plume:!0,shield:!0,sword:"down",s:.72},b:{head:"mitre",shield:!0,sword:"forward",s:.88},q:{head:"queen",gown:!0,cape:!0,scepter:!0,s:.96},k:{head:"king",cape:!0,shield:!0,bigShield:!0,sword:"down",bigSword:!0,s:1.04}}[i],l=ah(e,c);l.scale.setScalar(c.s),o.add(l),a=l.userData.rig}return n.rotation.y=t==="w"?0:Math.PI,n.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),n.userData={t:i,col:t,m:e,mats:Object.values(e),rig:a,baseRot:n.rotation.y},n}function oa(i,t){if(t){i.remove(t),t.traverse(e=>{e.geometry&&e.geometry.dispose()});for(const e of t.userData?.mats||[])e.dispose()}}function Gg(i){const t=i.userData?.rig;t&&(t.armR&&(t.armR.rotation.x=t.idleR),t.armL&&(t.armL.rotation.x=t.idleL,t.shield&&(t.shield.rotation.x=-t.idleL)),t.horse&&(t.horse.rotation.x=t.horseRot))}const is=R,Di=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,Wg=i=>i*i,Ne=(i,t,e)=>i+(t-i)*e;function ki(i,t,e){const n=((t-i+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return i+n*e}class Xg{constructor(t,e,n){this.scene=t,this.camera=e,this.stageEl=n,this.tasks=[],this.parts=[],this.debris=[],this.timeScale=1,this.shake=0,this.bounceMesh=null}tween(t,e,n=Di){return new Promise(s=>{this.tasks.push({ms:t,el:0,fn:e,ease:n,res:s})})}wait(t){return this.tween(t,()=>{},null)}clear(){this.tasks=[],this.timeScale=1}burst(t,e={}){const n=e.n||40,s=e.colors||[16762976],r=e.power||3,o=e.life||.75,a=new be,c=new Float32Array(n*3),l=new Float32Array(n*3),h=[],f=new Gt;for(let u=0;u<n;u++)c[u*3]=t.x,c[u*3+1]=t.y,c[u*3+2]=t.z,f.setHex(s[u%s.length]),l[u*3]=f.r,l[u*3+1]=f.g,l[u*3+2]=f.b,h.push(new is(Math.random()-.5,Math.random()*(e.up==null?.9:e.up)+.1,Math.random()-.5).normalize().multiplyScalar(r*(.4+Math.random())));a.setAttribute("position",new We(c,3)),a.setAttribute("color",new We(l,3));const p=new Xl({size:e.size||.08,map:e.tex||el,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:e.additive===!1?si:dr}),m=new C0(a,p);this.scene.add(m),this.parts.push({pts:m,vel:h,life:o,max:o,grav:e.grav==null?7:e.grav})}shatter(t){const e=new is;t.getWorldPosition(e);const n=t.userData.m,s=[n.cloth,n.armor,n.stone,n.trim,n.gold];for(let r=0;r<30;r++){const o=.06+Math.random()*.1,a=Math.random()<.5?Qt(o,o,o):new wa(o*.8),c=s[r%s.length].clone();c.transparent=!0,c.emissive=new Gt(0);const l=new he(a,c);l.castShadow=!0,l.position.set(e.x+(Math.random()-.5)*.3,.15+Math.random()*.9,e.z+(Math.random()-.5)*.3),this.scene.add(l),this.debris.push({m:l,v:new is((Math.random()-.5)*4,2+Math.random()*3.5,(Math.random()-.5)*4),spin:new is(Math.random()*8,Math.random()*8,Math.random()*8),life:1.8})}}flash(t,e=16724770){const n=new Gt(e),s=t.userData?.mats||[];this.tween(380,(r,o)=>{for(const a of s)a.emissive&&a.emissive.copy(n).multiplyScalar(.8*(1-o))},null)}shockwave(t,e=16765503){const n=new xs(.3,.42,48),s=new cn({color:e,transparent:!0,opacity:.9,side:Ce,depthWrite:!1}),r=new he(n,s);r.rotation.x=-Math.PI/2,r.position.set(t.x,.03,t.z),this.scene.add(r),this.tween(700,(o,a)=>{r.scale.setScalar(1+a*7),s.opacity=.9*(1-a)},null).then(()=>{this.scene.remove(r),n.dispose(),s.dispose()})}popWord(t,e,n="cartoon"){if(n!=="cartoon"||!this.stageEl)return;const s=e.clone().project(this.camera);if(s.z>1)return;const r=document.createElement("div");r.className="pow",r.textContent=t,r.style.left=(s.x+1)/2*this.stageEl.clientWidth+"px",r.style.top=(1-s.y)/2*this.stageEl.clientHeight+"px",r.style.setProperty("--rot",(Math.random()*24-12).toFixed(1)+"deg"),this.stageEl.appendChild(r),setTimeout(()=>r.remove(),950)}slide(t,e,n=440,s=.2){const r=t.position.clone();return this.tween(n,(o,a)=>{t.position.lerpVectors(r,e,o),t.position.y=Math.sin(a*Math.PI)*s}).then(()=>{t.position.y=0})}vanish(t,e="cartoon"){return this.wait(260).then(()=>(this.burst(t.position.clone().add(new is(0,.5,0)),{n:26,colors:[16765503,16777215],power:1.8,tex:e==="cartoon"?ur:el,size:e==="cartoon"?.14:.08}),this.tween(260,n=>{t.scale.setScalar(Math.max(.001,1-n))}).then(()=>{oa(this.scene,t)})))}update(t){for(let n=this.tasks.length-1;n>=0;n--){const s=this.tasks[n];s.el+=t*this.timeScale;const r=Math.min(1,s.el/s.ms);s.fn(s.ease?s.ease(r):r,r),r>=1&&(this.tasks.splice(n,1),s.res())}const e=t/1e3*Math.min(this.timeScale,3);for(let n=this.parts.length-1;n>=0;n--){const s=this.parts[n];s.life-=e;const r=s.pts.geometry.attributes.position.array;for(let o=0;o<s.vel.length;o++){const a=s.vel[o];a.y-=s.grav*e,r[o*3]+=a.x*e,r[o*3+1]+=a.y*e,r[o*3+2]+=a.z*e}s.pts.geometry.attributes.position.needsUpdate=!0,s.pts.material.opacity=Math.max(0,s.life/s.max),s.life<=0&&(this.scene.remove(s.pts),s.pts.geometry.dispose(),s.pts.material.dispose(),this.parts.splice(n,1))}for(let n=this.debris.length-1;n>=0;n--){const s=this.debris[n];s.life-=e,s.v.y-=9*e,s.m.position.addScaledVector(s.v,e),s.m.position.y<.05&&(s.m.position.y=.05,s.v.y*=-.35,s.v.x*=.7,s.v.z*=.7),s.m.rotation.x+=s.spin.x*e,s.m.rotation.y+=s.spin.y*e,s.m.rotation.z+=s.spin.z*e,s.life<.6&&(s.m.material.opacity=Math.max(0,s.life/.6)),s.life<=0&&(this.scene.remove(s.m),s.m.geometry.dispose(),s.m.material.dispose(),this.debris.splice(n,1))}}}const sn=R;function qg(i,t,e){function n(u,_=1,g,d){const S=u.contact.clone().add(new sn((Math.random()-.5)*.2,(Math.random()-.3)*.25,(Math.random()-.5)*.2)),x=e();x==="cartoon"?i.burst(S,{n:Math.round(26*_),colors:d||[16765503,16743129,6217983,9305962],power:2.2*Math.sqrt(_),size:.16,tex:ur,life:.8}):i.burst(S,{n:Math.round(45*_),colors:[16762976,16777215,16747069],power:3*Math.sqrt(_),size:.08,life:.7}),i.flash(u.def),i.shake=Math.max(i.shake,.05*_),t.play("hit"),g&&i.popWord(g,S,x),s(u.def,u.defPos,u.dir,.14*Math.min(_,2))}function s(u,_,g,d){i.tween(420,(S,x)=>{const v=Math.sin(x*Math.PI);u.position.copy(_).addScaledVector(g,v*d),u.position.y=v*d*.5,u.rotation.z=Math.sin(x*Math.PI*3)*.15*(1-x)},null).then(()=>{u.parent&&(u.position.copy(_),u.rotation.z=0)})}function r(u,_){if(!u.armR)return;const g=u.idleR;let d;_<.35?d=Ne(g,2.8,Di(_/.35)):_<.55?d=Ne(2.8,1.1,(_-.35)/.2):d=Ne(1.1,g,Di((_-.55)/.45)),u.armR.rotation.x=d}function o(u,_){if(!u.armL)return;const g=u.idleL,d=_<.3?Ne(g,-.2,_/.3):_<.6?Ne(-.2,1.4,(_-.3)/.3):Ne(1.4,g,(_-.6)/.4);u.armL.rotation.x=d,u.shield&&(u.shield.rotation.x=-d)}function a(u,_,g,d,S,x){let v=!1;return i.tween(_,(D,T)=>{const C=T<.3?Math.sin(T/.3*Math.PI)*.14:0,P=T>=.3?Math.sin((T-.3)/.7*Math.PI)*g:0;u.att.position.copy(u.stand).addScaledVector(u.dir,P-C),u.att.position.y=P*.2,x&&x(T),!v&&T>=d&&(v=!0,S())},null).then(()=>{u.att.position.copy(u.stand)})}function c(u){const _=new sn;return(u.rig.handR||u.att).getWorldPosition(_),_.y+=.3,_}function l(u,_,g){t.play("zap");const d=ve(.08,16,12),S=new cn({color:_}),x=new he(d,S);i.scene.add(x);const v=c(u),D=u.contact.clone();let T=0;return i.tween(420,(C,P)=>{x.position.lerpVectors(v,D,P),x.position.y+=Math.sin(P*Math.PI)*(.35+g*.1),x.scale.setScalar(1+Math.sin(P*20)*.2),T++%2===0&&i.burst(x.position.clone(),{n:4,colors:[_,16777215],power:.4,size:.1,life:.4,grav:0})},null).then(()=>{i.scene.remove(x),d.dispose(),S.dispose(),n(u,1,["ZAP!","ZING!","WHAM!"][g],[_,16777215])})}function h(u){t.play("beam");const _=c(u),g=u.contact.clone(),d=_.distanceTo(g),S=new sn().subVectors(g,_),x=Jt(.06,.06,1,16,1,!0),v=new cn({color:15324927,transparent:!0,opacity:.9,blending:dr,depthWrite:!1,side:Ce}),D=new he(x,v);D.quaternion.setFromUnitVectors(new sn(0,1,0),S.clone().normalize()),i.scene.add(D);let T=!1;return i.tween(750,(C,P)=>{const b=Math.min(1,P/.25),M=1+Math.sin(P*30)*.3;D.scale.set(M,Math.max(.001,d*b),M),D.position.copy(_).addScaledVector(S,b/2),v.opacity=P<.7?.9:(1-P)/.3*.9,!T&&P>=.3&&(T=!0,n(u,1.8,"KA-POW!",[11894015,16777215,6217983]))},null).then(()=>{i.scene.remove(D),x.dispose(),v.dispose()})}function f(u,_){const g=u.att.position.clone().add(new sn(0,1.05,0)).addScaledVector(u.dir,.2);t.play("boom"),i.burst(g,{n:22,colors:[10133672,13685977],power:1,size:.3,life:.9,grav:-1,additive:!1});const d=i.tween(260,(C,P)=>{const b=Math.sin(P*Math.PI);u.att.scale.set(1+b*.08,1-b*.12,1+b*.08),u.att.position.copy(u.stand).addScaledVector(u.dir,-b*.12)},null).then(()=>{u.att.scale.set(1,1,1),u.att.position.copy(u.stand)}),S=ve(.09,14,10),x=new ei({color:2236966,metalness:.6,roughness:.4}),v=new he(S,x);v.castShadow=!0,i.scene.add(v);const D=u.contact.clone(),T=i.tween(560,(C,P)=>{v.position.lerpVectors(g,D,P),v.position.y+=Math.sin(P*Math.PI)*(1+_*.15)},null).then(()=>{i.scene.remove(v),S.dispose(),x.dispose(),i.burst(D,{n:70,colors:[16751918,16765503,16734766],power:3.2,size:.11,life:.7}),i.burst(D,{n:16,colors:[7040886,10133672],power:.8,size:.38,life:1.1,grav:-1.2,additive:!1}),n(u,1.4,["BOOM!","KABOOM!","BOOM!"][_]),t.play("explode")});return Promise.all([d,T]).then(()=>i.wait(140))}const p={async p(u){await a(u,620,.45,.6,()=>n(u,1,"BONK!"),_=>o(u.rig,_)),await a(u,620,.45,.6,()=>n(u,1,"BAM!"),_=>o(u.rig,_)),await a(u,780,.5,.5,()=>n(u,1.5,"POW!"),_=>r(u.rig,_))},async n(u){const _=u.rig.horse,g=u.rig.horseRot,d=u.standDist-.55;t.play("neigh"),i.popWord("NEIGH!",u.att.position.clone().add(new sn(0,1.4,0)),e()),await i.tween(650,(S,x)=>{_.rotation.x=g+Math.sin(x*Math.PI)*.45,u.rig.armR.rotation.x=u.rig.idleR+Math.sin(x*Math.PI)*.4});for(let S=0;S<2;S++){const x=S===1;let v=!1;await i.tween(x?1e3:900,(D,T)=>{const C=T<.6?Wg(T/.6):1-Di((T-.6)/.4);u.att.position.copy(u.stand).addScaledVector(u.dir,C*d),u.att.position.y=Math.abs(Math.sin(T*Math.PI*5))*.12*(T<.6?1:.4),_.rotation.x=g+Math.sin(T*Math.PI*5)*.12,u.rig.armR.rotation.x=T<.5?Ne(u.rig.idleR,2.9,T/.5):Ne(2.9,1.1,Math.min(1,(T-.5)/.12)),!v&&T>=.6&&(v=!0,n(u,x?2:1.3,x?"CRASH!":"CLIP-CLOP!"),t.play("hoof"))},null)}_.rotation.x=g,u.rig.armR.rotation.x=u.rig.idleR},async b(u){const _=u.rig;await i.tween(450,d=>{_.armR.rotation.x=Ne(_.idleR,2.9,d)});const g=[11894015,6217983,16743129];for(let d=0;d<3;d++)await l(u,g[d],d),await i.wait(110);await h(u),await i.tween(300,d=>{_.armR.rotation.x=Ne(2.9,_.idleR,d)})},async r(u){for(let _=0;_<3;_++)await f(u,_)},async q(u){const{att:_,defPos:g}=u,d=u.standDist,S=Math.atan2(u.stand.x-g.x,u.stand.z-g.z),x=[.25,.5,.75];let v=0;t.play("whoosh"),await i.tween(1700,(D,T)=>{const C=S+Di(T)*Math.PI*2;_.position.set(g.x+Math.sin(C)*d,Math.sin(T*Math.PI)*.25,g.z+Math.cos(C)*d),_.rotation.y=u.aFacing+T*Math.PI*6,Math.random()<.6&&i.burst(_.position.clone().add(new sn(0,.6,0)),{n:3,colors:[16743129,16765503,16777215],power:.5,size:.14,tex:ur,life:.6,grav:1}),v<x.length&&T>=x[v]&&(v++,n(u,1,["SWISH!","SLASH!","SWOOSH!"][v-1],[16743129,16765503]),t.play("whoosh"))},null),_.position.copy(u.stand),_.rotation.y=u.aFacing,await a(u,800,.5,.6,()=>n(u,1.8,"SPARKLE!",[16743129,16765503,6217983]),D=>{u.rig.armR.rotation.x=Ne(u.rig.idleR,2.6,Math.sin(D*Math.PI)),_.rotation.y=u.aFacing+(D>.3?(D-.3)/.7*Math.PI*2:0)}),u.rig.armR.rotation.x=u.rig.idleR,_.rotation.y=u.aFacing},async k(u){await a(u,650,.4,.5,()=>n(u,1,"CLANG!"),d=>r(u.rig,d)),await a(u,650,.4,.5,()=>n(u,1,"CLANG!"),d=>r(u.rig,d));let _=!1;const g=u.defPos.clone().addScaledVector(u.dir,-.5);await i.tween(1150,(d,S)=>{const x=Math.min(1,S/.7);u.att.position.lerpVectors(u.stand,g,Di(x)),u.att.position.y=Math.sin(x*Math.PI)*1.5,u.rig.armR.rotation.x=S<.6?Ne(u.rig.idleR,3,S/.6):Ne(3,1,Math.min(1,(S-.6)/.1)),!_&&S>=.7&&(_=!0,i.shockwave(u.defPos,16765503),n(u,2.2,"SMASH!",[16765503,16777215,16751918]),t.play("explode"),i.shake=.35)},null),await i.tween(350,d=>{u.att.position.lerpVectors(g,u.stand,d),u.rig.armR.rotation.x=Ne(1,u.rig.idleR,d)})}};async function m(u){const _=u.def;if(e()==="cartoon"){await i.wait(150);const d=_.position.clone(),S=_.rotation.y;t.play("boing"),i.popWord("BYE-BYE!",d.clone().add(new sn(0,1.3,0)),"cartoon");let x=!1;await i.tween(1e3,(v,D)=>{if(_.position.set(d.x+u.dir.x*D*1.6,Math.sin(Math.min(D,.9)/.9*Math.PI*.6)*2.6,d.z+u.dir.z*D*1.6),_.rotation.y=S+D*12,_.rotation.x=D*3,_.scale.setScalar(Math.max(.01,1-Math.pow(D,3))),!x&&D>=.82){x=!0;const T=new sn;_.getWorldPosition(T),i.burst(T.add(new sn(0,.4,0)),{n:60,colors:[16765503,16777215,16743129,6217983],power:2.5,size:.2,tex:ur,life:1.1,grav:2}),t.play("twinkle")}},null)}else await i.wait(120),_.visible=!1,i.shatter(_),i.burst(u.contact,{n:110,colors:[16757575,16773832],power:4.5,size:.09,life:.8}),i.shake=.28,t.play("shatter"),await i.wait(650)}return{moves:p,finishDef:m}}const Ri=R;class Yg{constructor(t,e,n,s,r,o){this.scene=t,this.camera=e,this.controls=n,this.anim=s,this.sound=r,this.getStyle=o;const{moves:a,finishDef:c}=qg(s,r,o);this.moves=a,this.finishDef=c}async runBattle(t,e,n,s,r,o,a){this.controls.enabled=!1,this.anim.timeScale=1,o&&(o.hidden=!1);let c=document.getElementById("battleTimerBar");if(!c&&a&&(c=document.createElement("div"),c.id="battleTimerBar",c.className="battle-progress-bar",c.innerHTML='<div class="battle-progress-fill"></div><div class="battle-tag">⚔️ GIAO TRANH 5s ⚔️</div>',a.appendChild(c)),c){c.style.display="block";const M=c.querySelector(".battle-progress-fill");M&&(M.style.transition="none",M.style.width="0%",requestAnimationFrame(()=>{M.style.transition="width 4.8s linear",M.style.width="100%"}))}const l=this.camera.position.clone(),h=this.controls.target.clone(),f=new Ri().subVectors(s,t.position);f.y=0;const p=f.length();f.normalize();const m=r==="r"||r==="b"?Math.min(Math.max(p,1.4),1.9):r==="n"?1.9:r==="q"?.8:.85,u=s.clone().addScaledVector(f,-m);u.y=0;const _=u.clone().add(s).multiplyScalar(.5),g=new Ri(-f.z,0,f.x);g.dot(new Ri().subVectors(l,_))<0&&g.negate();const d=_.clone().addScaledVector(g,2.6+m*.9).addScaledVector(f,-.5).add(new Ri(0,1.7+m*.3,0)),S=_.clone().add(new Ri(0,.55,0)),x=t.position.clone(),v=t.rotation.y,D=e.rotation.y,T=Math.atan2(-f.x,-f.z),C=Math.atan2(f.x,f.z);this.sound.play("whoosh"),await Promise.all([this.anim.tween(800,M=>{this.camera.position.lerpVectors(l,d,M),this.controls.target.lerpVectors(h,S,M)}),this.anim.tween(800,(M,L)=>{t.position.lerpVectors(x,u,M),t.position.y=Math.sin(L*Math.PI)*.5,t.rotation.y=ki(v,T,M),e.rotation.y=ki(D,C,M)})]);const P={att:t,def:e,dir:f,stand:u,defPos:s,standDist:m,rig:t.userData?.rig||{},aFacing:T,contact:s.clone().addScaledVector(f,-.25).add(new Ri(0,.6,0))};this.moves[r]&&await this.moves[r](P),await this.finishDef(P),await this.anim.wait(150);const b=t.position.clone();await Promise.all([this.anim.tween(750,(M,L)=>{t.position.lerpVectors(b,n,M),t.position.y=Math.sin(L*Math.PI)*.3,t.rotation.y=ki(T,t.userData?.baseRot||0,M)}),this.anim.tween(900,M=>{this.camera.position.lerpVectors(d,l,M),this.controls.target.lerpVectors(S,h,M)})]),t.position.copy(n),t.rotation.y=t.userData?.baseRot||0,t.scale.set(1,1,1),Gg(t),this.anim.timeScale=1,c&&(c.style.display="none"),o&&(o.hidden=!0),a&&(a.hidden=!0),this.controls.enabled=!0}}class $g{constructor(){this.ac=null,this.enabled=!0}getAudioContext(){if(!this.ac&&typeof window<"u")try{const t=window.AudioContext||window.webkitAudioContext;t&&(this.ac=new t)}catch{this.ac=null}return this.ac}resume(){const t=this.getAudioContext();t&&t.state==="suspended"&&t.resume()}noiseSrc(t,e){const n=t.createBuffer(1,Math.max(1,t.sampleRate*e|0),t.sampleRate),s=n.getChannelData(0);for(let o=0;o<s.length;o++)s[o]=Math.random()*2-1;const r=t.createBufferSource();return r.buffer=n,r}tone(t,e,n,s,r,o,a=0){const c=t.currentTime+a,l=t.createOscillator();l.type=e,l.frequency.setValueAtTime(n,c),s&&l.frequency.exponentialRampToValueAtTime(s,c+r);const h=t.createGain();h.gain.setValueAtTime(o,c),h.gain.exponentialRampToValueAtTime(.001,c+r),l.connect(h),h.connect(t.destination),l.start(c),l.stop(c+r+.02)}nz(t,e,n,s,r,o,a=1,c=0){const l=t.currentTime+c,h=this.noiseSrc(t,e),f=t.createBiquadFilter();f.type=n,f.frequency.setValueAtTime(s,l),r&&f.frequency.exponentialRampToValueAtTime(r,l+e),f.Q.value=a;const p=t.createGain();p.gain.setValueAtTime(o,l),p.gain.exponentialRampToValueAtTime(.001,l+e),h.connect(f),f.connect(p),p.connect(t.destination),h.start(l)}play(t){if(!this.enabled)return;const e=this.getAudioContext();if(e)switch(this.resume(),t){case"move":this.tone(e,"triangle",240,120,.14,.14);break;case"tick":this.tone(e,"triangle",520,380,.1,.05);break;case"hit":this.nz(e,.18,"bandpass",2400,0,.35,1.5),this.tone(e,"square",1300,700,.25,.04);break;case"whoosh":this.nz(e,.35,"bandpass",300,1500,.22);break;case"neigh":for(let n=0;n<6;n++)this.tone(e,"sawtooth",720-n*45,660-n*45,.09,.05,n*.07);break;case"hoof":this.tone(e,"triangle",180,90,.08,.25),this.tone(e,"triangle",160,80,.08,.2,.1);break;case"zap":this.tone(e,"sine",1400,300,.3,.16),this.tone(e,"square",900,200,.25,.03);break;case"beam":this.tone(e,"sawtooth",200,800,.7,.07),this.nz(e,.7,"bandpass",800,3e3,.15);break;case"boom":this.nz(e,.5,"lowpass",600,80,.6),this.tone(e,"sine",90,40,.4,.4);break;case"explode":this.nz(e,.8,"lowpass",1500,100,.55);break;case"boing":this.tone(e,"sine",200,800,.35,.22);break;case"twinkle":[880,1175,1568,2093].forEach((n,s)=>this.tone(e,"sine",n,0,.25,.09,s*.08));break;case"star":[523,659,784,1047].forEach((n,s)=>this.tone(e,"triangle",n,0,.22,.14,s*.09));break;case"wrong":this.tone(e,"square",330,0,.16,.06),this.tone(e,"square",220,0,.22,.06,.16);break;case"shatter":this.nz(e,.6,"lowpass",3e3,300,.45);break}}}class Kg{constructor(){if(this.hasSpeech=typeof window<"u"&&"speechSynthesis"in window,this.voice=null,this.enabled=!0,this.hasSpeech){this.initVoice();try{window.speechSynthesis.onvoiceschanged=()=>this.initVoice()}catch{}}}initVoice(){try{const t=window.speechSynthesis.getVoices();this.voice=t.find(e=>/en[-_]US/i.test(e.lang)&&/samantha|google us|aria|jenny|female/i.test(e.name))||t.find(e=>/en[-_]US/i.test(e.lang))||t.find(e=>/^en/i.test(e.lang))||null}catch{this.voice=null}}say(t,e=!0){if(!(!this.hasSpeech||!this.enabled||!t))try{e&&window.speechSynthesis.cancel();const n=new SpeechSynthesisUtterance(t);n.lang="en-US",n.rate=.85,n.pitch=1.1,this.voice&&(n.voice=this.voice),window.speechSynthesis.speak(n)}catch{}}cancel(){if(this.hasSpeech)try{window.speechSynthesis.cancel()}catch{}}}const ho=R,Pi=i=>i[Math.random()*i.length|0],sr=i=>{for(let t=i.length-1;t>0;t--){const e=Math.random()*(t+1)|0;[i[t],i[e]]=[i[e],i[t]]}return i};class Zg{constructor(t,e,n,s,r,o,a){this.el=t,this.storage=e,this.sound=n,this.narrator=s,this.anim=r,this.highlights=o,this.getBoardState=a,this.quizActive=null}bounceOnce(t){t&&this.anim.tween(500,(e,n)=>{t.position.y=Math.sin(n*Math.PI)*.35},null).then(()=>{t.parent&&(t.position.y=0)})}runQuiz(){return new Promise(t=>{const{G:e,meshAt:n}=this.getBoardState(),s=[];for(let u=0;u<8;u++)for(let _=0;_<8;_++)e.b[u][_]&&s.push({r:u,c:_,p:e.b[u][_]});if(!s.length){t();return}const r=Pi(["tap","tap","color","count","file","rank"]);let o=0,a="";const c=this.el.qMsg;c.textContent="",c.className="q-msg",this.el.qOpts.innerHTML="",this.el.quiz.hidden=!1,this.el.renderStars();const l=u=>{this.quizActive=null,setTimeout(()=>{this.el.quiz.hidden=!0,this.anim.bounceMesh=null;for(const _ of n)for(const g of _)g&&(g.position.y=0);this.highlights.clearHL(),this.el.drawStatic(),t()},u)},h=(u,_)=>{this.storage.addStars(1),this.el.renderStars(),this.sound.play("star"),c.textContent=u+" ⭐ +1",c.className="q-msg ok",this.narrator.say(u),this.anim.burst(_||new ho(0,2,0),{n:70,colors:[16765503,16777215,16743129,6217983],power:2.6,size:.2,life:1.2,grav:2}),l(2e3)},f=u=>{o++,this.sound.play("wrong"),c.textContent=u,c.className="q-msg bad",this.narrator.say(u)},p=(u,_)=>{this.el.qText.innerHTML=u,a=_,this.narrator.say(_)};this.el.qSay.onclick=()=>this.narrator.say(a),this.el.qSkip.onclick=()=>{this.narrator.cancel(),l(0)};const m=(u,_,g,d,S,x)=>{const v=this.el.qOpts;v.innerHTML="";for(const D of u){const T=document.createElement("button");T.className="q-opt",S(T,D),T.onclick=()=>{if(this.quizActive){if(D===_)T.classList.add("right"),h(g,x);else if(T.classList.add("wrong"),T.disabled=!0,f(`${T.dataset.say||D}? Not quite. Try again!`),o>=2){this.quizActive=null;const C=[...v.children].find(P=>P.dataset.v===String(_));C&&C.classList.add("right"),c.textContent=d,this.narrator.say(d),l(2600)}}},T.dataset.v=String(D),v.appendChild(T)}this.quizActive={opts:!0}};if(r==="tap"){const u=Pi(s).p,_=`${fe(u.c).toLowerCase()} ${Se[u.t].toLowerCase()}`;p(`Tap a <b style="color:${ri[u.c].css}">${fe(u.c)}</b> <b>${Se[u.t]}</b> on the board!`,`Can you tap a ${_}?`),this.quizActive={tap:(g,d)=>{const S=e.b[g][d];if(S&&S.t===u.t&&S.c===u.c)this.bounceOnce(n[g][d]),this.highlights.addHL(g,d,"sel"),h(`Great job! That's a ${_}!`,Ge(g,d).add(new ho(0,1.2,0)));else if(S?(this.bounceOnce(n[g][d]),f(`Oops! That's a ${fe(S.c).toLowerCase()} ${Se[S.t].toLowerCase()}. Try again!`)):f("That square is empty. Try again!"),o>=3){this.quizActive=null;const x=s.find(D=>D.p.t===u.t&&D.p.c===u.c);x&&(this.highlights.addHL(x.r,x.c,"sel"),this.anim.bounceMesh=n[x.r][x.c]);const v=`Here it is! This is the ${_}.`;c.textContent=v,this.narrator.say(v),l(2800)}}}}else if(r==="color"){const u=Pi(s);this.highlights.addHL(u.r,u.c,"sel"),this.anim.bounceMesh=n[u.r][u.c];const _=fe(u.p.c);p("What <b>color</b> is the jumping piece?","What color is the jumping piece?");const g={Blue:"#2f6fe4",Red:"#e23a31",Green:"#2fbf6a",Yellow:"#f2c14e"};m(sr(["Blue","Red","Green","Yellow"]),_,`Yes! It's ${_}!`,`It's ${_}!`,(d,S)=>{d.textContent=S,d.style.background=g[S],d.style.color=S==="Yellow"?"#1a1409":"#fff"},Ge(u.r,u.c).add(new ho(0,1.2,0)))}else if(r==="count"){let u="w",_="p",g=0;for(let x=0;x<12&&g===0;x++)u=Pi(["w","b"]),_=Pi(["p","p","n","b","r"]),g=s.filter(v=>v.p.c===u&&v.p.t===_).length;const d=new Set([g]);for(;d.size<3;){const x=g+Pi([-2,-1,1,2,3]);x>=0&&x<=8&&d.add(x)}const S=g===1?Se[_].toLowerCase():lo[_];p(`How many <b style="color:${ri[u].css}">${fe(u)}</b> <b>${lo[_]}</b> can you see?`,`How many ${fe(u).toLowerCase()} ${lo[_]} can you see?`),m(sr([...d]),g,`Yes! ${Ln[g]} ${S}!`,`The answer is ${Ln[g]}.`,(x,v)=>{x.innerHTML=`${v}<small>${Ln[v]}</small>`,x.dataset.say=Ln[v]})}else if(r==="file"){const u=Math.random()*8|0;for(let d=0;d<8;d++)this.highlights.addHL(d,u,"col");const _=tn[u].toUpperCase(),g=new Set([_]);for(;g.size<3;)g.add(tn[Math.random()*8|0].toUpperCase());p("Which <b>letter</b> is the glowing column?","Which letter is the glowing column?"),m(sr([...g]),_,`Yes! It's the letter ${_}!`,`It's the letter ${_}.`,(d,S)=>{d.textContent=S})}else{const u=Math.random()*8|0;for(let d=0;d<8;d++)this.highlights.addHL(u,d,"col");const _=u+1,g=new Set([_]);for(;g.size<3;)g.add(1+(Math.random()*8|0));p("Which <b>number</b> is the glowing row?","Which number is the glowing row?"),m(sr([...g]),_,`Yes! Row number ${Ln[_]}!`,`It's number ${Ln[_]}.`,(d,S)=>{d.innerHTML=`${S}<small>${Ln[S]}</small>`,d.dataset.say=Ln[S]})}})}}const ss=[{id:"intro",titleVi:"1. Bàn cờ & Cách sắp xếp",titleEn:"1. Board & Setup",icon:"🏰",summaryVi:"Tìm hiểu về 64 ô cờ, hàng ngang, cột dọc và cách bố trí 32 quân cờ ban đầu.",summaryEn:"Learn about the 64 squares, ranks, files, and standard piece setup.",contentVi:`
      <h3>👑 Bàn cờ vua và thiết lập ban đầu</h3>
      <ul>
        <li><strong>Bàn cờ 64 ô:</strong> Gồm 8 hàng ngang (đánh số 1 đến 8) và 8 cột dọc (đánh chữ a đến h), xen kẽ giữa các ô sáng và ô tối.</li>
        <li><strong>Quy tắc đặt bàn cờ:</strong> Ô góc dưới cùng bên tay phải của mỗi người chơi luôn luôn là <strong>ô sáng (trắng)</strong>.</li>
        <li><strong>Hàng 1 & 2:</strong> Vị trí xuất phát của quân Xanh/Trắng. 8 quân Tốt ở hàng 2.</li>
        <li><strong>Hàng 7 & 8:</strong> Vị trí xuất phát của quân Đỏ/Đen. 8 quân Tốt ở hàng 7.</li>
        <li><strong>Vị trí Hậu và Vua:</strong> Hậu màu nào đứng ở ô màu đó (Hậu trắng ô trắng, Hậu đen ô đen). Vua đứng ở ô còn lại cạnh Hậu.</li>
        <li><strong>Mục tiêu tối thượng:</strong> Tấn công và bắt Vua (Chiếu bí - Checkmate) của đối thủ!</li>
      </ul>
    `,contentEn:`
      <h3>👑 Chess Board and Setup</h3>
      <ul>
        <li><strong>64 Squares:</strong> 8 ranks (numbered 1 to 8) and 8 files (lettered a to h).</li>
        <li><strong>Board orientation:</strong> "White on right" - bottom right corner square is always light.</li>
        <li><strong>Queen on her color:</strong> White Queen on white square, Black Queen on black square.</li>
        <li><strong>Ultimate Goal:</strong> Checkmate the enemy King to win the game!</li>
      </ul>
    `,drill:{fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",promptVi:"Hãy đi thử nước mở đầu tốt nhất: Đẩy Tốt e2 lên e4 để chiếm trung tâm!",promptEn:"Try the classic opening move: Move Pawn from e2 to e4!",expectedMove:{fr:1,fc:4,tr:3,tc:4},rewardStars:2}},{id:"pawn",titleVi:"2. Quân Tốt (Pawn)",titleEn:"2. The Pawn",icon:"♟️",summaryVi:"Cách đi thẳng 1-2 ô, cách ăn chéo, và sức mạnh tiến về phía trước.",summaryEn:"Moves forward 1-2 squares, captures diagonally, never moves backwards.",contentVi:`
      <h3>♟️ Quân Tốt - Những chiến binh tiền tuyến</h3>
      <ul>
        <li><strong>Nước đi thông thường:</strong> Tốt chỉ đi thẳng về phía trước <strong>1 ô</strong> (không được lùi).</li>
        <li><strong>Nước đi đầu tiên:</strong> Khi còn ở vị trí xuất phát (hàng 2 cho Trắng, hàng 7 cho Đen), Tốt có quyền chọn đi <strong>1 ô hoặc 2 ô</strong> về phía trước.</li>
        <li><strong>Cách ăn quân:</strong> Tốt <em>không thể</em> ăn thẳng! Tốt ăn chéo về phía trước 1 ô sang trái hoặc sang phải.</li>
        <li><strong>Vật cản:</strong> Nếu có quân cờ đứng ngay trước mặt Tốt, Tốt sẽ bị chặn lại và không thể tiến lên cho đến khi ô đó trống.</li>
      </ul>
    `,contentEn:`
      <h3>♟️ The Pawn - Foot Soldiers</h3>
      <ul>
        <li><strong>Movement:</strong> Moves straight forward 1 square. Cannot move backwards.</li>
        <li><strong>First Move Option:</strong> On its first move, a pawn can advance 1 or 2 squares.</li>
        <li><strong>Capturing:</strong> Pawns capture diagonally forward one square.</li>
      </ul>
    `,drill:{fen:"8/8/8/3p4/4P3/8/8/8 w - - 0 1",promptVi:"Tốt trắng tại e4 hãy ăn Tốt đen tại d5 theo đường chéo!",promptEn:"Capture the black pawn at d5 with your pawn at e4!",expectedMove:{fr:3,fc:4,tr:4,tc:3},rewardStars:2}},{id:"knight",titleVi:"3. Quân Mã (Knight)",titleEn:"3. The Knight",icon:"♞",summaryVi:"Bước nhảy chữ L thần tốc và khả năng nhảy vượt qua đầu các quân cờ khác.",summaryEn:"Jumps in an L-shape and can leap over any other pieces on the board.",contentVi:`
      <h3>♞ Quân Mã - Kỵ binh dũng mãnh</h3>
      <ul>
        <li><strong>Bước nhảy hình chữ L:</strong> Đi 2 ô thẳng rồi rẽ ngang 1 ô (hoặc 1 ô thẳng rồi rẽ ngang 2 ô).</li>
        <li><strong>Đổi màu ô sau mỗi nước:</strong> Nếu Mã đang đứng ở ô sáng, sau khi nhảy sẽ luôn đáp xuống ô tối, và ngược lại.</li>
        <li><strong>Khả năng đặc biệt duy nhất:</strong> Mã là quân cờ DUY NHẤT có thể <strong>nhảy qua đầu</strong> các quân cờ khác (cả quân mình lẫn quân địch) mà không bị cản trở!</li>
        <li><strong>Ăn quân:</strong> Mã ăn quân đối phương đứng ở ô mà nó đáp xuống.</li>
      </ul>
    `,contentEn:`
      <h3>♞ The Knight - Agile Cavalry</h3>
      <ul>
        <li><strong>L-Shaped Movement:</strong> 2 squares in one direction, then 1 square perpendicular.</li>
        <li><strong>Leaping Power:</strong> The only piece that can jump over any intervening pieces!</li>
        <li><strong>Square Color Swap:</strong> Always lands on an opposite-colored square.</li>
      </ul>
    `,drill:{fen:"8/8/8/8/8/8/8/4N3 w - - 0 1",promptVi:"Nhảy Mã từ e1 lên ô trung tâm f3 (hoặc d3) theo hình chữ L!",promptEn:"Jump the Knight from e1 to f3 in an L-shape!",expectedMove:{fr:0,fc:4,tr:2,tc:5},rewardStars:2}},{id:"bishop",titleVi:"4. Quân Tượng (Bishop)",titleEn:"4. The Bishop",icon:"♝",summaryVi:"Sát thủ đường chéo với tầm kiểm soát xuyên suốt chiều dài bàn cờ.",summaryEn:"Diagonal sniper moving any distance along light or dark diagonals.",contentVi:`
      <h3>♝ Quân Tượng - Pháp sư đường chéo</h3>
      <ul>
        <li><strong>Di chuyển:</strong> Tượng đi theo các đường chéo không giới hạn số ô (miễn là không có quân cản).</li>
        <li><strong>Tượng ô sáng & Tượng ô tối:</strong> Mỗi người chơi có 1 Tượng đi trên ô sáng và 1 Tượng đi trên ô tối. Tượng sẽ mãi mãi di chuyển trên màu ô xuất phát của nó.</li>
        <li><strong>Tầm bắn xa:</strong> Khi đường chéo thông thoáng, Tượng có thể kiểm soát từ góc này sang góc kia của bàn cờ!</li>
      </ul>
    `,contentEn:`
      <h3>♝ The Bishop - Diagonal Sniper</h3>
      <ul>
        <li><strong>Movement:</strong> Moves any number of squares diagonally.</li>
        <li><strong>Color Bound:</strong> Each bishop stays on its original square color (light or dark) forever.</li>
      </ul>
    `,drill:{fen:"8/8/8/8/8/8/8/2B5 w - - 0 1",promptVi:"Di chuyển Tượng từ c1 lên g5 dọc theo đường chéo sáng!",promptEn:"Move Bishop from c1 to g5 along the diagonal!",expectedMove:{fr:0,fc:2,tr:4,tc:6},rewardStars:2}},{id:"rook",titleVi:"5. Quân Xe (Rook)",titleEn:"5. The Rook",icon:"♜",summaryVi:"Pháo đài kiên cố di chuyển theo các hàng ngang và cột dọc không giới hạn.",summaryEn:"Heavy fortress piece controlling open ranks and files.",contentVi:`
      <h3>♜ Quân Xe - Cỗ xe pháo thành trì</h3>
      <ul>
        <li><strong>Di chuyển:</strong> Xe di chuyển theo các đường thẳng (ngang và dọc) với số ô tùy ý nếu không bị chặn.</li>
        <li><strong>Giá trị:</strong> Xe trị giá 5 điểm, là quân cờ mạnh thứ hai trên bàn cờ (sau Hậu).</li>
        <li><strong>Kiểm soát cột mở:</strong> Đặt Xe vào các cột không có Tốt cản (cột mở) sẽ tạo ra sức ép cực lớn lên trận địa đối phương.</li>
        <li><strong>Nhập thành:</strong> Xe phối hợp cùng Vua để thực hiện nước Nhập thành bảo vệ Vua.</li>
      </ul>
    `,contentEn:`
      <h3>♜ The Rook - Powerful Castle</h3>
      <ul>
        <li><strong>Movement:</strong> Moves any number of squares vertically or horizontally.</li>
        <li><strong>Value:</strong> Worth 5 points. Excels on open files and 7th rank.</li>
      </ul>
    `,drill:{fen:"8/8/8/8/8/8/8/R7 w - - 0 1",promptVi:"Di chuyển Xe từ a1 tiến thẳng lên ô a8!",promptEn:"Move the Rook straight up from a1 to a8!",expectedMove:{fr:0,fc:0,tr:7,tc:0},rewardStars:2}},{id:"queen",titleVi:"6. Quân Hậu (Queen)",titleEn:"6. The Queen",icon:"♛",summaryVi:"Nữ hoàng quyền lực nhất, kết hợp sức mạnh phi thường của cả Xe và Tượng.",summaryEn:"The most powerful piece, combining the movement of both Rook and Bishop.",contentVi:`
      <h3>♛ Quân Hậu - Uy quyền tối thượng</h3>
      <ul>
        <li><strong>Di chuyển vô song:</strong> Hậu có thể đi ngang, đi dọc VÀ đi chéo với số ô không giới hạn!</li>
        <li><strong>Giá trị cao nhất:</strong> Trị giá 9 điểm, là quân tấn công chủ lực lợi hại nhất trên bàn cờ.</li>
        <li><strong>Mẹo chiến thuật:</strong> Tránh đưa Hậu ra quá sớm ở đầu ván cờ, vì đối thủ có thể vừa phát triển quân vừa tấn công Hậu của bạn.</li>
      </ul>
    `,contentEn:`
      <h3>♛ The Queen - Supreme Ruler</h3>
      <ul>
        <li><strong>Movement:</strong> Any distance in any direction (horizontal, vertical, diagonal).</li>
        <li><strong>Value:</strong> 9 points. Protect her carefully!</li>
      </ul>
    `,drill:{fen:"8/8/8/8/8/8/8/3Q4 w - - 0 1",promptVi:"Di chuyển Hậu từ d1 bay chéo lên ô h5!",promptEn:"Move Queen diagonally from d1 to h5!",expectedMove:{fr:0,fc:3,tr:4,tc:7},rewardStars:2}},{id:"king",titleVi:"7. Quân Vua (King)",titleEn:"7. The King",icon:"♚",summaryVi:"Trái tim của toàn bộ ván cờ. Di chuyển 1 ô mọi hướng và phải được bảo vệ.",summaryEn:"The heart of your army. Moves 1 square in any direction. Protect at all costs!",contentVi:`
      <h3>♚ Quân Vua - Trọng tâm sinh tử</h3>
      <ul>
        <li><strong>Di chuyển:</strong> Vua đi <strong>1 ô</strong> theo bất kỳ hướng nào (ngang, dọc, chéo).</li>
        <li><strong>Luật an toàn:</strong> Vua KHÔNG BAO GIỜ được phép đi vào ô đang bị quân đối phương kiểm soát (ô bị chiếu).</li>
        <li><strong>Khoảng cách giữa hai Vua:</strong> Hai Vua không bao giờ được đứng sát cạnh nhau (phải cách nhau ít nhất 1 ô).</li>
        <li><strong>Khi bị tấn công:</strong> Khi Vua bị đe dọa (Chiếu tướng), bạn BẮT BUỘC phải hóa giải chiếu ngay lập tức.</li>
      </ul>
    `,contentEn:`
      <h3>♚ The King - The Royal Sovereign</h3>
      <ul>
        <li><strong>Movement:</strong> 1 square in any direction.</li>
        <li><strong>Safety:</strong> Can never step into check (threatened squares).</li>
      </ul>
    `,drill:{fen:"8/8/8/8/8/8/8/4K3 w - - 0 1",promptVi:"Di chuyển Vua từ e1 tiến lên e2 1 ô an toàn!",promptEn:"Step the King forward from e1 to e2!",expectedMove:{fr:0,fc:4,tr:1,tc:4},rewardStars:2}},{id:"special",titleVi:"8. Các nước đi đặc biệt",titleEn:"8. Special Moves",icon:"✨",summaryVi:"Nhập thành (Castling), Phong cấp (Promotion) và Bắt tốt qua đường (En Passant).",summaryEn:"Master Castling, Pawn Promotion, and En Passant captures.",contentVi:`
      <h3>✨ Ba nước đi đặc biệt trong cờ vua</h3>
      <ul>
        <li><strong>1. Nhập thành (Castling):</strong> Nước đi duy nhất di chuyển 2 quân cùng lúc (Vua và Xe). Vua đi 2 ô về phía Xe, Xe nhảy qua đầu Vua đứng cạnh Vua.
          <br><em>Điều kiện:</em> Vua và Xe chưa từng di chuyển, không có quân ở giữa, Vua không bị chiếu và không đi qua ô bị chiếu.</li>
        <li><strong>2. Phong cấp (Promotion):</strong> Khi Tốt tiến tới hàng cuối cùng (hàng 8 với Trắng, hàng 1 với Đen), Tốt ngay lập tức được biến đổi thành Hậu, Xe, Tượng hoặc Mã!</li>
        <li><strong>3. Bắt tốt qua đường (En Passant):</strong> Khi Tốt đối phương nhảy 2 ô vượt qua ô kiểm soát của Tốt bạn, Tốt của bạn có quyền ăn Tốt đối phương chéo qua như thể nó chỉ đi 1 ô (chỉ áp dụng ngay ở nước đi kế tiếp).</li>
      </ul>
    `,contentEn:`
      <h3>✨ The Three Special Rules</h3>
      <ul>
        <li><strong>Castling:</strong> King moves 2 squares toward Rook, Rook jumps over King.</li>
        <li><strong>Promotion:</strong> Pawn reaching the 8th rank transforms into Queen, Rook, Bishop, or Knight!</li>
        <li><strong>En Passant:</strong> Special pawn capture immediately after an opponent pawn double-steps past yours.</li>
      </ul>
    `,drill:{fen:"4k3/4P3/8/8/8/8/8/4K3 w - - 0 1",promptVi:"Đẩy Tốt e7 lên e8 để phong cấp thành HẬU uy lực!",promptEn:"Push pawn e7 to e8 to promote to a Queen!",expectedMove:{fr:6,fc:4,tr:7,tc:4,promo:"q"},rewardStars:3}},{id:"checkmate",titleVi:"9. Chiếu & Chiếu bí (Checkmate)",titleEn:"9. Check & Mate",icon:"⚔️",summaryVi:"3 cách giải chiếu (CPR) và nhận biết đòn Chiếu bí kết thúc ván đấu.",summaryEn:"The 3 ways to escape check and how checkmate ends the battle.",contentVi:`
      <h3>⚔️ Chiếu tướng, Thoát chiếu & Chiếu bí</h3>
      <ul>
        <li><strong>Chiếu (Check):</strong> Khi một quân cờ đang tấn công trực diện vào Vua.</li>
        <li><strong>3 Cách thoát chiếu (Quy tắc CPR):</strong>
          <br>1. <strong>C (Capture):</strong> Dùng quân mình ĂN quân đang chiếu.
          <br>2. <strong>P (Protect/Block):</strong> Dùng quân khác CHẮN giữa đường chiếu.
          <br>3. <strong>R (Run):</strong> Di chuyển Vua CHẠY sang ô an toàn.
        </li>
        <li><strong>Chiếu bí (Checkmate):</strong> Khi Vua bị chiếu mà KHÔNG THỂ thực hiện bất kỳ cách thoát chiếu nào. Ván đấu kết thúc ngay lập tức với chiến thắng cho bên chiếu bí!</li>
        <li><strong>Hòa cờ (Stalemate):</strong> Khi bên đến lượt đi không bị chiếu nhưng KHÔNG CÒN NƯỚC ĐI HỢP LỆ nào. Ván cờ xử HÒA.</li>
      </ul>
    `,contentEn:`
      <h3>⚔️ Checkmate & Stalemate</h3>
      <ul>
        <li><strong>Check:</strong> King is under direct attack.</li>
        <li><strong>Escape Rules (CPR):</strong> Capture attacker, Protect/Block the line, Run away.</li>
        <li><strong>Checkmate:</strong> King is in check and has no escape -> Game Won!</li>
        <li><strong>Stalemate:</strong> Not in check, but no legal moves -> Draw!</li>
      </ul>
    `,drill:{fen:"k7/8/1K6/8/8/8/8/7R w - - 0 1",promptVi:"Đưa Xe h1 lên h8 chiếu bí Vua đen ở góc để thắng ngay ván cờ!",promptEn:"Deliver checkmate by moving Rook from h1 to h8!",expectedMove:{fr:0,fc:7,tr:7,tc:7},rewardStars:3}},{id:"tactics",titleVi:"10. Chiến thuật & Khai cuộc",titleEn:"10. Strategy & Tactics",icon:"🎯",summaryVi:"Các đòn phối hợp kinh điển: Ghim quân (Pin), Bắt đôi (Fork), và kiểm soát trung tâm.",summaryEn:"Key tactics: Fork, Pin, Skewer, and opening principles for victory.",contentVi:`
      <h3>🎯 Chiến thuật và Nguyên tắc vàng</h3>
      <ul>
        <li><strong>1. Nguyên tắc Khai cuộc:</strong>
          <br>• Kiểm soát 4 ô trung tâm (e4, d4, e5, d5).
          <br>• Phát triển nhanh các quân nhẹ (Mã và Tượng).
          <br>• Nhập thành sớm để Vua an toàn và nối 2 Xe.
          <br>• Đừng đi một quân nhiều lần ở khai cuộc.
        </li>
        <li><strong>2. Đòn Bắt đôi (Fork):</strong> Một quân cờ tấn công đồng thời 2 quân cờ có giá trị của đối phương (đặc sản của quân Mã và Tốt).</li>
        <li><strong>3. Đòn Ghim quân (Pin):</strong> Khóa chân một quân cờ đối phương vì phía sau nó là Vua hoặc quân có giá trị lớn hơn.</li>
        <li><strong>4. Đòn Xiên (Skewer):</strong> Tấn công quân lớn (như Vua hoặc Hậu) buộc nó phải chạy, để lộ quân đứng phía sau để ta ăn.</li>
      </ul>
    `,contentEn:`
      <h3>🎯 Tactics and Winning Principles</h3>
      <ul>
        <li><strong>Golden Rules:</strong> Control the center, develop Knights and Bishops, castle early!</li>
        <li><strong>Fork:</strong> Attack two pieces at once (Knight's superpower).</li>
        <li><strong>Pin:</strong> Paralyze an enemy piece that shields a higher value target.</li>
      </ul>
    `,drill:{fen:"r1bqkb1r/pppp1ppp/2n5/4p3/4n3/3P1N2/PPP2PPP/RNBQKB1R w KQkq - 0 1",promptVi:"Dùng Tốt d3 ăn Tốt/Mã đen tại e4 để giành lợi thế và kiểm soát trung tâm!",promptEn:"Capture the black piece on e4 with pawn at d3 to gain the advantage!",expectedMove:{fr:2,fc:3,tr:3,tc:4},rewardStars:3}}];class jg{constructor(t,e,n,s,r){this.container=t,this.sound=e,this.storage=n,this.narrator=s,this.onTryDrill=r,this.currentLessonIdx=0,this.completedLessons=new Set(this.storage.getJson("completed_lessons")||[])}show(){this.container&&(this.container.hidden=!1,this.render())}hide(){this.container&&(this.container.hidden=!0)}render(){if(!this.container)return;const t=ss[this.currentLessonIdx];this.completedLessons.has(t.id),this.container.innerHTML=`
      <div class="academy-modal">
        <div class="academy-header">
          <div class="academy-title">
            <span class="badge">🎓 CHESS ACADEMY</span>
            <h2>Học chơi cờ vua & Chiến thuật</h2>
          </div>
          <button class="btn close-btn" id="acadClose">✕ Đóng</button>
        </div>

        <div class="academy-body">
          <div class="academy-sidebar">
            <div class="lesson-list">
              ${ss.map((o,a)=>{const c=this.completedLessons.has(o.id);return`
                  <button class="lesson-item ${a===this.currentLessonIdx?"active":""} ${c?"done":""}" data-idx="${a}">
                    <span class="l-icon">${o.icon}</span>
                    <div class="l-info">
                      <span class="l-title">${o.titleVi}</span>
                      <small class="l-sub">${o.titleEn}</small>
                    </div>
                    ${c?'<span class="l-check">✓</span>':""}
                  </button>
                `}).join("")}
            </div>
          </div>

          <div class="academy-content">
            <div class="lesson-view">
              <div class="lesson-head">
                <span class="big-icon">${t.icon}</span>
                <div>
                  <h3>${t.titleVi}</h3>
                  <p class="en-sub">${t.titleEn}</p>
                </div>
              </div>

              <div class="lesson-text">
                ${t.contentVi}
              </div>

              <div class="lesson-drill-box">
                <div class="drill-head">
                  <span>🎯 Bài tập thực hành (${t.drill.rewardStars} ⭐)</span>
                </div>
                <p class="drill-prompt">${t.drill.promptVi}</p>
                <p class="drill-prompt-en"><em>${t.drill.promptEn}</em></p>
                <div class="drill-actions">
                  <button class="btn primary" id="btnPlayDrill">⚡ Thực hành trên bàn cờ ngay!</button>
                  <button class="btn" id="btnAcadVoice">🔊 Nghe hướng dẫn</button>
                </div>
              </div>

              <div class="lesson-nav">
                <button class="btn" id="btnPrevLesson" ${this.currentLessonIdx===0?"disabled":""}>← Bài trước</button>
                <span class="nav-count">Bài ${this.currentLessonIdx+1} / ${ss.length}</span>
                <button class="btn" id="btnNextLesson" ${this.currentLessonIdx===ss.length-1?"disabled":""}>Bài tiếp →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.container.querySelector("#acadClose").onclick=()=>this.hide(),this.container.querySelectorAll(".lesson-item").forEach(o=>{o.onclick=()=>{this.currentLessonIdx=parseInt(o.dataset.idx,10),this.render()}});const e=this.container.querySelector("#btnPrevLesson");e&&(e.onclick=()=>{this.currentLessonIdx>0&&(this.currentLessonIdx--,this.render())});const n=this.container.querySelector("#btnNextLesson");n&&(n.onclick=()=>{this.currentLessonIdx<ss.length-1&&(this.currentLessonIdx++,this.render())});const s=this.container.querySelector("#btnAcadVoice");s&&this.narrator&&(s.onclick=()=>{this.narrator.say(t.drill.promptEn)});const r=this.container.querySelector("#btnPlayDrill");r&&(r.onclick=()=>{this.hide(),this.onTryDrill&&this.onTryDrill(t,()=>{this.markCompleted(t.id,t.drill.rewardStars)})})}markCompleted(t,e=2){this.completedLessons.has(t)||(this.completedLessons.add(t),this.storage.setJson("completed_lessons",Array.from(this.completedLessons)),this.storage.addStars(e),this.sound.play("twinkle"))}}const Jg={easy:{name:"Computer · Easy",elo:800,depth:1,noise:110,quies:!1},med:{name:"Computer · Medium",elo:1200,depth:2,noise:12,quies:!0},hard:{name:"Computer · Hard",elo:1600,depth:3,noise:0,quies:!0}},Qg=[0,0,0,0,0,0,0,0,5,10,10,-20,-20,10,10,5,5,-5,-10,0,0,-10,-5,5,0,0,0,20,20,0,0,0,5,5,10,25,25,10,5,5,10,10,20,30,30,20,10,10,50,50,50,50,50,50,50,50,0,0,0,0,0,0,0,0],uo=(i,t)=>3.5-Math.abs(t-3.5)+(3.5-Math.abs(i-3.5));function t_(i){let t=0;for(let e=0;e<8;e++)for(let n=0;n<8;n++){const s=i.b[e][n];if(!s)continue;const r=s.c==="w"?e:7-e;let o=Bn[s.t];s.t==="p"?o+=Qg[r*8+n]:s.t==="n"?o+=uo(e,n)*6-12:s.t==="b"?o+=uo(e,n)*3:s.t==="q"?o+=uo(e,n):s.t==="r"?o+=r===6?15:0:s.t==="k"&&(o+=r===0?n===6||n===2?25:10:-20),t+=s.c==="w"?o:-o}return t}function wr(i,t){for(const e of t){let n=0;if(e.cap){const s=i.b[e.fr]?.[e.fc]?Bn[i.b[e.fr][e.fc].t]:100;n+=1e3+10*Bn[e.cap.t]-s}e.promo&&(n+=e.promo==="q"?900:100),e.castle&&(n+=50),e._s=n}t.sort((e,n)=>n._s-e._s)}function ch(i,t,e,n,s){const r=(i.turn==="w"?1:-1)*t_(i);if(!s||n>=4||r>=e)return r;r>t&&(t=r);const o=Wn(i).filter(a=>a.cap||a.promo==="q");wr(i,o);for(const a of o){const c=Gn(i,a),l=-ch(i,-e,-t,n+1,s);if(hi(i,a,c),l>=e)return l;l>t&&(t=l)}return t}function Ca(i,t,e,n,s,r){const o=Wn(i);if(!o.length)return Nn(i)?-1e5+s:0;if(i.half>=100)return 0;if(t===0)return ch(i,e,n,0,r);wr(i,o);for(const a of o){const c=Gn(i,a),l=-Ca(i,t-1,-n,-e,s+1,r);if(hi(i,a,c),l>=n)return l;l>e&&(e=l)}return e}function e_(i,t){const e=Wn(i);if(!e.length)return null;wr(i,e);let n=null,s=-1e9;const r=t.quies!==!1,o=t.depth||1,a=t.noise||0;for(const c of e){const l=Gn(i,c);let h=-Ca(i,o-1,-1e9,-(s-a-1),1,r);hi(i,c,l),a>0&&(h+=(Math.random()-.5)*2*a),h>s&&(s=h,n=c)}return n||e[0]}const fo={p:"Tốt",n:"Mã",b:"Tượng",r:"Xe",q:"Hậu",k:"Vua"};function n_(i){const t=Wn(i);if(!t.length)return null;wr(i,t);let e=null,n=-1/0;for(const m of t){const u=Gn(i,m),_=-Ca(i,2,-1e5,1e5,1,!0);hi(i,m,u),_>n&&(n=_,e=m)}e||(e=t[0]);const s=`${tn[e.fc]}${e.fr+1}`,r=`${tn[e.tc]}${e.tr+1}`,o=i.b[e.fr][e.fc],a=fo[o?.t||"p"],c=Se[o?.t||"p"];let l="",h="";if(Nn(i))l="Bảo vệ Vua và thoát khỏi đòn chiếu!",h="Escape check and keep your King safe!";else if(e.cap){const m=fo[e.cap.t],u=Se[e.cap.t];l=`Ăn ${m} đối phương ở ${r} để giành ưu thế hơn quân (+${Bn[e.cap.t]/100} điểm)!`,h=`Capture enemy ${u} at ${r} (+${Bn[e.cap.t]/100} advantage)!`}else if(e.castle)l=`Nhập thành (${e.castle==="K"?"O-O":"O-O-O"}) để đưa Vua vào nơi an toàn và kích hoạt Xe xuất trận!`,h="Castle to secure your King and activate the Rook!";else if(e.promo)l=`Phong cấp Tốt thành ${fo[e.promo]} ở ${r}!`,h=`Promote pawn to ${Se[e.promo]} at ${r}!`;else{const m=Gn(i,e),u=Nn(i);hi(i,e,m),u?(l=`Chiếu Vua đối phương tại ${r} tạo thế tấn công áp đảo!`,h=`Deliver a check to the enemy King at ${r}!`):(e.tr===3||e.tr===4)&&(e.tc===3||e.tc===4)?(l=`Kiểm soát ô trung tâm chiến lược ${r} để làm chủ bàn cờ!`,h=`Control key central square ${r} to dominate the board!`):o?.t==="n"||o?.t==="b"?(l=`Phát triển ${a} lên ${r} mở đường tấn công và kiểm soát không gian!`,h=`Develop ${c} to ${r} to control key squares!`):o?.t==="r"?(l=`Kích hoạt Xe kiểm soát cột/hàng ${r} tạo sức ép!`,h=`Activate Rook along line ${r} to exert pressure!`):o?.t==="q"?(l=`Đưa Hậu đến ${r} tạo đe dọa đa hướng!`,h=`Position Queen at ${r} for multi-directional pressure!`):(l=`Nước đi chiến thuật vững chắc đưa ${a} lên ${r}!`,h=`Solid positional move placing ${c} at ${r}!`)}const f=`💡 Gợi ý: ${a} ${s} ➔ ${r}`,p=`💡 Hint: ${c} ${s} ➔ ${r}`;return{move:e,fromSq:s,toSq:r,piece:o?.t,color:o?.c,titleVi:f,titleEn:p,reasonVi:l,reasonEn:h,sanStr:`${a} (${s} ➔ ${r})`}}const rl="knights_chess_elo_v1",ol="knights_chess_stars_v1";function al(i,t){try{if(typeof localStorage>"u")return t;const e=localStorage.getItem(i);return e==null?t:JSON.parse(e)}catch{return t}}function cl(i,t){try{return typeof localStorage>"u"?!1:(localStorage.setItem(i,JSON.stringify(t)),!0)}catch{return!1}}class i_{constructor(){this.profiles=al(rl,{}),this.stars=Number(al(ol,0))||0}getProfile(t){const e=(t||"").trim()||"Player";return this.profiles[e]||(this.profiles[e]={elo:1200,g:0,w:0,d:0,l:0}),this.profiles[e]}updateProfile(t,e,n){const s=this.getProfile(t);return s.elo+=e,s.g++,n===1?s.w++:n===0?s.l++:s.d++,this.save(),s}getStars(){return this.stars}addStars(t=1){return this.stars+=t,cl(ol,this.stars),this.stars}save(){cl(rl,this.profiles)}getLeaderboard(t=10){return Object.entries(this.profiles).filter(([,e])=>e.g>0).sort((e,n)=>n[1].elo-e[1].elo).slice(0,t).map(([e,n])=>({name:e,...n}))}}function s_(i,t,e){const n=i.b[t.fr][t.fc];let s;if(t.castle)s=t.castle==="K"?"O-O":"O-O-O";else{const c=tn[t.tc]+(t.tr+1),l=!!t.cap;if(n.t==="p")s=(l?tn[t.fc]+"x":"")+c+(t.promo?"="+t.promo.toUpperCase():"");else{let h="";const f=(e||Wn(i)).filter(p=>p.tr===t.tr&&p.tc===t.tc&&!(p.fr===t.fr&&p.fc===t.fc)&&i.b[p.fr][p.fc]?.t===n.t);if(f.length){const p=f.some(u=>u.fc===t.fc),m=f.some(u=>u.fr===t.fr);p?m?h=tn[t.fc]+(t.fr+1):h=String(t.fr+1):h=tn[t.fc]}s=n.t.toUpperCase()+h+(l?"x":"")+c}}const r=Gn(i,t),o=Wn(i),a=Nn(i);return hi(i,t,r),a&&(s+=o.length?"+":"#"),s}class r_{constructor(){this.counts={}}reset(t){this.counts={},t&&this.record(t)}record(t){const e=tl(t);return this.counts[e]=(this.counts[e]||0)+1,this.counts[e]}count(t){const e=tl(t);return this.counts[e]||0}isThreefold(t){return this.count(t)>=3}}const aa=32;function o_(i,t){return 1/(1+Math.pow(10,(t-i)/400))}function a_(i,t,e){const n=o_(i,t),s=Math.round(aa*(e-n));return{Ea:n,d:s,newRating:i+s}}const Ze=R,$=i=>document.getElementById(i);class c_{constructor(){this.stageEl=$("stage"),this.setup=Cg(this.stageEl),this.board=Ng(this.setup.scene),this.highlights=Fg(this.setup.scene),this.anim=new Xg(this.setup.scene,this.setup.camera,this.stageEl),this.sound=new $g,this.narrator=new Kg,this.storage=new i_;const t=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;this.cfg={mode:"ai",p1:"Người chơi",p2:"Người chơi 2",diff:"easy",side:"w",battle:!t,clarity:!0,style:"cartoon",voice:!0,moves:!0,quiz:!0,autoRot:!0,sound:!0},this.battles=new Yg(this.setup.scene,this.setup.camera,this.setup.controls,this.anim,this.sound,()=>this.cfg.style),this.repetition=new r_,this.aiWorker=null,this.aiWorkerRequestId=0,this.initWorker(),this.G=null,this.meshAt=null,this.sel=null,this.curLegal=[],this.busy=!1,this.over=!1,this.lastMove=null,this.moveList=[],this.capturedBy={w:[],b:[]},this.game=null,this.lifted=null,this.pliesSinceQuiz=0,this.cameraMode="iso",this.currentHint=null,this.activeDrill=null,this.initQuiz(),this.initAcademy(),this.bindEvents(),this.startLoop()}initWorker(){try{this.aiWorker=new Worker(new URL("/game-covua3d/assets/ai.worker-BkFX4ljJ.js",import.meta.url),{type:"module"}),this.aiWorker.onmessage=t=>{const{id:e,move:n,error:s,ok:r}=t.data;if(!(e!==this.aiWorkerRequestId||!r||this.over))if(n){const o=this.curLegal.find(a=>a.fr===n.fr&&a.fc===n.fc&&a.tr===n.tr&&a.tc===n.tc&&a.promo===n.promo)||n;this.doMove(o)}else this.busy=!1}}catch{this.aiWorker=null}}initQuiz(){this.quizManager=new Zg({quiz:$("quiz"),qText:$("qText"),qOpts:$("qOpts"),qMsg:$("qMsg"),qSay:$("qSay"),qSkip:$("qSkip"),renderStars:()=>this.renderStars(),drawStatic:()=>this.drawStatic()},this.storage,this.sound,this.narrator,this.anim,this.highlights,()=>({G:this.G,meshAt:this.meshAt}))}initAcademy(){const t=$("academyModal");this.academy=new jg(t,this.sound,this.storage,this.narrator,(e,n)=>this.startDrill(e,n))}whoPlays(t){return this.game[t==="w"?"white":"black"]}isAITurn(){return!this.over&&!!this.whoPlays(this.G.turn).bot}startGame(t=null){if(this.anim.clear(),this.narrator.cancel(),this.hideHint(),this.activeDrill=null,this.meshAt)for(const s of this.meshAt)for(const r of s)r&&oa(this.setup.scene,r);this.G=t||Rg(),this.repetition.reset(this.G),this.meshAt=Array.from({length:8},()=>Array(8).fill(null));for(let s=0;s<8;s++)for(let r=0;r<8;r++){const o=this.G.b[s][r];if(o){const a=sl(o.t,o.c);a.position.copy(Ge(s,r)),this.setup.scene.add(a),this.meshAt[s][r]=a}}this.sel=null,this.busy=!1,this.over=!1,this.lastMove=null,this.moveList=[],this.capturedBy={w:[],b:[]},this.lifted=null,this.pliesSinceQuiz=0;const e=(this.cfg.p1||"").trim()||"Người chơi",n=(this.cfg.p2||"").trim()||"Người chơi 2";if(this.cfg.mode==="ai"){const s=this.cfg.side==="r"?Math.random()<.5?"w":"b":this.cfg.side,r=Jg[this.cfg.diff],o={name:e},a={name:r.name,bot:r};this.game={mode:"ai",white:s==="w"?o:a,black:s==="w"?a:o,human:s,rated:!1}}else this.game={mode:"pvp",white:{name:e},black:{name:n===e?n+" (2)":n},rated:!1};this.curLegal=Wn(this.G),this.applyCameraMode(this.cameraMode);for(const s of["result","banner","skipBtn","quiz","wordCard","promo","hintCard"]){const r=$(s);r&&(r.hidden=!0)}this.setup.controls.enabled=!0,this.drawStatic(),this.renderUI(),this.isAITurn()&&this.scheduleAI()}startDrill(t,e){this.startGame(),this.activeDrill={lesson:t,onComplete:e,expected:t.drill.expectedMove};const n=$("bannerLine"),s=$("bannerMove");n&&s&&(n.textContent=`🎯 ${t.titleVi}`,s.textContent=t.drill.promptVi,$("banner").hidden=!1),this.sound.play("twinkle")}drawStatic(){if(this.highlights.clearHL(),this.lastMove&&(this.highlights.addHL(this.lastMove.fr,this.lastMove.fc,"last"),this.highlights.addHL(this.lastMove.tr,this.lastMove.tc,"last")),!this.over&&Nn(this.G)){const t=vr(this.G,this.G.turn);this.highlights.addHL(t[0],t[1],"check")}this.currentHint&&(this.highlights.addHL(this.currentHint.move.fr,this.currentHint.move.fc,"hintFrom"),this.highlights.addHL(this.currentHint.move.tr,this.currentHint.move.tc,"hintTo"),this.highlights.addArrow(this.currentHint.move.fr,this.currentHint.move.fc,this.currentHint.move.tr,this.currentHint.move.tc))}setLift(t,e){if(this.lifted&&this.lifted.parent&&(this.lifted.position.y=0),this.lifted=null,t!=null){const n=this.meshAt[t][e];n&&(n.position.y=.16,this.lifted=n)}}showWord(t,e){const n=Og[t],s=$("wordCard");s.style.setProperty("--team",ri[e].css),$("wcChip").className="chip "+e,$("wcTeam").textContent=fe(e)+" team",$("wcWord").textContent=Se[t].toUpperCase(),$("wcHint").textContent=n.hint,$("wcLine").textContent=n.line,s.hidden=!1,s.dataset.say=`${fe(e)} ${Se[t].toLowerCase()}. ${n.line}`,this.cfg.voice&&this.narrator.say(s.dataset.say)}select(t,e){this.sel=[t,e],this.hideHint(),this.drawStatic(),this.highlights.addHL(t,e,"sel"),this.setLift(t,e);for(const s of this.curLegal)s.fr===t&&s.fc===e&&this.highlights.addHL(s.tr,s.tc,s.cap?"cap":"dot");this.sound.play("tick");const n=this.G.b[t][e];this.showWord(n.t,n.c)}deselect(){this.sel=null,this.setLift(null),this.drawStatic(),$("wordCard").hidden=!0}onPick(t,e){if(this.quizManager?.quizActive?.tap){this.quizManager.quizActive.tap(t,e);return}if(this.busy||this.over||this.isAITurn())return;const n=this.G.b[t][e];if(this.sel){const s=this.curLegal.filter(r=>r.fr===this.sel[0]&&r.fc===this.sel[1]&&r.tr===t&&r.tc===e);if(s.length){s.length>1?this.askPromo(this.G.turn).then(r=>{if(!r){this.deselect();return}const o=s.find(a=>a.promo===r);o&&(this.setLift(null),this.sel=null,this.doMove(o))}):(this.setLift(null),this.sel=null,this.doMove(s[0]));return}}n&&n.c===this.G.turn?this.sel&&this.sel[0]===t&&this.sel[1]===e?this.deselect():this.select(t,e):n?(this.sound.play("tick"),this.showWord(n.t,n.c),this.sel=null,this.setLift(null),this.drawStatic()):this.deselect()}askPromo(t){return new Promise(e=>{const n=$("promoRow");n.innerHTML="";for(const s of["q","r","b","n"]){const r=document.createElement("button");r.innerHTML=`<span>${Qc[t][s]}</span>${Se[s]}`,r.onclick=()=>{$("promo").hidden=!0,e(s)},n.appendChild(r)}$("promoCancel").onclick=()=>{$("promo").hidden=!0,e(null)},$("promo").hidden=!1,this.cfg.voice&&this.narrator.say("Promotion! Pick a new piece.")})}async doMove(t){this.busy=!0,this.hideHint(),this.highlights.clearHL(),$("wordCard").hidden=!0;const e=s_(this.G,t,this.curLegal),n=this.G.b[t.fr][t.fc],s=this.meshAt[t.fr][t.fc];let r=null;t.ep?r=[t.fr,t.tc]:this.G.b[t.tr][t.tc]&&(r=[t.tr,t.tc]);const o=r?this.meshAt[r[0]][r[1]]:null,a=r?this.G.b[r[0]][r[1]]:null,c=Ge(t.tr,t.tc);if(this.renderStatus("anim"),o){const l=`${fe(n.c)} ${Se[n.t]} attacks ${fe(a.c)} ${Se[a.t]}!`;this.cfg.moves&&this.narrator.say(this.cfg.battle?`${l} ${il[n.t]}!`:`${fe(n.c)} ${Se[n.t].toLowerCase()} takes ${fe(a.c).toLowerCase()} ${Se[a.t].toLowerCase()}!`)}else this.cfg.moves&&this.narrator.say(t.castle?`${fe(n.c)} castles!`:`${fe(n.c)} ${Se[n.t].toLowerCase()} to ${tn[t.tc].toUpperCase()} ${t.tr+1}.`);if(o&&this.cfg.battle)$("bannerLine").innerHTML=`<span style="color:${ri[n.c].css}">${fe(n.c)} ${Se[n.t]}</span> đấu <span style="color:${ri[a.c].css}">${fe(a.c)} ${Se[a.t]}</span>`,$("bannerMove").textContent=il[n.t]+"!",$("banner").hidden=!1,await this.battles.runBattle(s,o,c,Ge(r[0],r[1]),n.t,$("skipBtn"),$("banner"));else{const l=[this.anim.slide(s,c,440,n.t==="n"?.9:.2)];if(o&&l.push(this.anim.vanish(o,this.cfg.style)),t.castle){const h=t.fr,f=t.castle==="K"?7:0,p=t.castle==="K"?5:3,m=this.meshAt[h][f];l.push(this.anim.wait(120).then(()=>this.anim.slide(m,Ge(h,p),420,.35)))}this.sound.play("move"),await Promise.all(l)}if(this.meshAt[t.fr][t.fc]=null,r&&(this.meshAt[r[0]][r[1]]=null,this.capturedBy[n.c].push(a.t)),this.meshAt[t.tr][t.tc]=s,t.castle){const l=t.fr,h=t.castle==="K"?7:0,f=t.castle==="K"?5:3;this.meshAt[l][f]=this.meshAt[l][h],this.meshAt[l][h]=null}if(t.promo){oa(this.setup.scene,s);const l=sl(t.promo,n.c);l.position.copy(c),this.setup.scene.add(l),this.meshAt[t.tr][t.tc]=l,this.anim.burst(c.clone().add(new Ze(0,.7,0)),{n:60,colors:[16767354,16777215],power:2.4,size:.16}),this.anim.flash(l,16767354),this.cfg.moves&&this.narrator.say(`${fe(n.c)} pawn becomes a ${Se[t.promo].toLowerCase()}!`,!1)}if(Gn(this.G,t),this.lastMove=t,this.moveList.push(e),this.repetition.record(this.G),this.curLegal=Wn(this.G),this.drawStatic(),this.activeDrill){const l=this.activeDrill.expected;(!l.fr||t.fr===l.fr)&&(!l.fc||t.fc===l.fc)&&(!l.tr||t.tr===l.tr)&&(!l.tc||t.tc===l.tc)&&(this.anim.burst(c.clone().add(new Ze(0,.8,0)),{n:80,colors:[16765503,3066993,16777215,6217983],power:3,size:.22,life:1.2}),this.sound.play("twinkle"),$("bannerLine").textContent="🎉 XUẤT SẮC!",$("bannerMove").textContent="Bạn đã hoàn thành bài thực hành!",this.activeDrill.onComplete&&this.activeDrill.onComplete(),this.renderStars(),setTimeout(()=>{$("banner").hidden=!0,this.activeDrill=null},3e3))}Nn(this.G)&&this.curLegal.length&&this.cfg.moves&&this.narrator.say("Check!",!1),this.checkEnd(),this.renderUI(),!this.over&&this.game.mode==="pvp"&&this.cfg.autoRot&&await this.rotateCamTo(this.G.turn),this.busy=!1,this.pliesSinceQuiz++,!this.over&&this.cfg.quiz&&!this.isAITurn()&&this.pliesSinceQuiz>=4&&!this.activeDrill&&(this.pliesSinceQuiz=0,await this.quizManager.runQuiz()),!this.over&&this.isAITurn()&&this.scheduleAI()}scheduleAI(){this.busy=!0,this.renderStatus("think");const t=++this.aiWorkerRequestId,e=this.whoPlays(this.G.turn).bot;this.aiWorker?this.aiWorker.postMessage({id:t,g:this.G,bot:e}):setTimeout(()=>{if(this.over||t!==this.aiWorkerRequestId){this.busy=!1;return}const n=e_(this.G,e);if(n){const s=this.curLegal.find(r=>r.fr===n.fr&&r.fc===n.fc&&r.tr===n.tr&&r.tc===n.tc&&r.promo===n.promo)||n;this.doMove(s)}else this.busy=!1},450)}showMoveHint(){if(this.busy||this.over||this.isAITurn())return;const t=n_(this.G);if(!t)return;this.currentHint=t,this.drawStatic();const e=$("hintCard");$("hintTitle").textContent=t.titleVi,$("hintReason").textContent=t.reasonVi,e.hidden=!1,this.sound.play("twinkle"),this.cfg.voice&&this.narrator.say(t.reasonEn)}hideHint(){this.currentHint=null;const t=$("hintCard");t&&(t.hidden=!0),this.drawStatic()}applyHint(){if(!this.currentHint||this.busy||this.over)return;const t=this.currentHint.move;this.hideHint(),this.doMove(t)}applyCameraMode(t){this.cameraMode=t;const n=(this.game?.mode==="ai"?this.game.human:"w")==="w"?1:-1;document.querySelectorAll(".v-btn").forEach(o=>o.classList.remove("active")),t==="2d"?$("btnView2D")?.classList.add("active"):t==="iso"?$("btnViewIso")?.classList.add("active"):t==="3d"&&$("btnView3D")?.classList.add("active");let s;t==="2d"?s=new Ze(0,13.5,.001*n):t==="iso"?s=new Ze(0,11.5,8.5*n):s=new Ze(0,9.5,11*n);const r=this.setup.camera.position.clone();this.anim.tween(600,o=>{this.setup.camera.position.lerpVectors(r,s,o),this.setup.controls.target.set(0,0,0)})}zoomCamera(t){const e=this.setup.camera,n=this.setup.controls.target,s=new Ze().subVectors(e.position,n),r=s.length(),o=Al.clamp(r+t,4.5,22);s.setLength(o),e.position.copy(n).add(s)}resetCameraView(){this.applyCameraMode(this.cameraMode)}checkEnd(){this.curLegal.length?this.G.half>=100?this.endGame("d","Luật 50 nước đi"):this.repetition.isThreefold(this.G)?this.endGame("d","Thế cờ lặp lại 3 lần"):Lg(this.G)&&this.endGame("d","Không đủ lực lượng để chiếu bí"):Nn(this.G)?this.endGame(je(this.G.turn),"Chiếu bí (Checkmate)"):this.endGame("d","Hòa cờ (Stalemate)")}endGame(t,e){if(this.over)return;this.over=!0,this.sel=null,this.setLift(null),this.hideHint(),this.drawStatic(),$("wordCard").hidden=!0;const n=[];if(!this.game.rated){this.game.rated=!0;const r={};for(const o of["w","b"]){const a=this.whoPlays(o);r[o]=a.bot?a.bot.elo:this.storage.getProfile(a.name).elo}for(const o of["w","b"]){const a=this.whoPlays(o);if(a.bot)continue;const c=t==="d"?.5:t===o?1:0,l=r[o],h=r[je(o)],{Ea:f,d:p}=a_(l,h,c),m=this.storage.updateProfile(a.name,p,c);n.push({name:a.name,R:l,oppR:h,oppName:this.whoPlays(je(o)).name,S:c,Ea:f,d:p,newR:m.elo})}}const s=t==="d"?"Ván cờ Hòa!":`Phe ${fe(t)} chiến thắng!`;if($("resTitle").textContent=s,$("resReason").textContent=e,$("resElo").innerHTML=n.map(r=>{const o=r.d>0?"up":r.d<0?"down":"flat",a=r.S===1?"1 (thắng)":r.S===0?"0 (thua)":"0.5 (hòa)";return`<div class="res-block"><div class="row"><span>${this.esc(r.name)}</span><span class="elo">${r.R} → ${r.newR} <span class="delta ${o}">(${r.d>0?"+":""}${r.d})</span></span></div>
        <div class="formula">Đối thủ: ${this.esc(r.oppName)} · Elo ${r.oppR}<br>E = 1/(1+10^((${r.oppR}−${r.R})/400)) = ${r.Ea.toFixed(2)}<br>S = ${a} · K = ${aa}<br>Δ = ${aa} × (${r.S} − ${r.Ea.toFixed(2)}) = ${r.d>0?"+":""}${r.d}</div></div>`}).join(""),(this.cfg.moves||this.cfg.voice)&&this.narrator.say(t==="d"?`It's a draw! ${e}.`:`${e}! ${fe(t)} team wins!`,!1),t!=="d"){const r=vr(this.G,je(t));this.anim.burst(Ge(r[0],r[1]).add(new Ze(0,1,0)),{n:90,colors:[16765503,16777215,16743129,6217983],power:3,size:.2,life:1.4,grav:2}),this.sound.play("twinkle")}setTimeout(()=>{$("result").hidden=!1},900),this.renderUI()}async rotateCamTo(t){const e=new Ze().subVectors(this.setup.camera.position,this.setup.controls.target),n=new fs().setFromVector3(e),s=n.theta,r=t==="w"?0:Math.PI;Math.abs(ki(s,r,1)-s)<.01||(this.setup.controls.enabled=!1,await this.anim.tween(900,o=>{const a=new fs(n.radius,n.phi,ki(s,r,o));this.setup.camera.position.copy(this.setup.controls.target).add(new Ze().setFromSpherical(a))}),this.setup.controls.enabled=!0)}esc(t){return String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}eloOf(t){return t.bot?t.bot.elo:this.storage.getProfile(t.name).elo}renderStatus(t){const e=$("hud"),n=$("statusText");if($("turnDot").className="dot "+this.G.turn,e.classList.remove("check"),this.over){n.textContent="Trò chơi kết thúc";return}if(t==="think"){n.textContent=`${this.whoPlays(this.G.turn).name} đang suy nghĩ…`;return}if(t==="anim"){n.textContent=`${fe(this.G.turn)} đang di chuyển…`;return}const s=Nn(this.G);s&&e.classList.add("check"),n.textContent=`Lượt của ${fe(this.G.turn)} · ${this.whoPlays(this.G.turn).name}${s?" · Chiếu tướng!":""}`}renderStars(){const t=this.storage.getStars();$("hudStars").textContent="⭐ "+t,$("panelStars").textContent=`⭐ ${t} sao`;const e=$("qStars");e&&(e.textContent="⭐ "+t)}renderUI(){$("nameW").textContent=this.game.white.name,$("nameB").textContent=this.game.black.name,$("eloW").textContent=this.eloOf(this.game.white),$("eloB").textContent=this.eloOf(this.game.black),$("rowW").classList.toggle("active",!this.over&&this.G.turn==="w"),$("rowB").classList.toggle("active",!this.over&&this.G.turn==="b");const t=r=>this.capturedBy[r].reduce((o,a)=>o+Bn[a],0),e=Math.round((t("w")-t("b"))/100),n=r=>this.capturedBy[r].slice().sort((o,a)=>Bn[a]-Bn[o]).map(o=>Qc[je(r)][o]).join("");$("capW").textContent=n("w")+(e>0?"  +"+e:""),$("capB").textContent=n("b")+(e<0?"  +"+-e:"");const s=$("moves");if(!this.moveList.length)s.innerHTML='<span class="empty" style="grid-column:1/-1">Chưa có nước đi nào.</span>';else{let r="";const o=this.moveList.length-1;for(let a=0;a<this.moveList.length;a+=2)r+=`<span class="n">${a/2+1}.</span><span class="${a===o?"last":""}">${this.moveList[a]}</span><span class="${a+1===o?"last":""}">${this.moveList[a+1]||""}</span>`;s.innerHTML=r,s.scrollTop=s.scrollHeight}$("btnResign").disabled=this.over,this.renderStatus(),this.renderLB(),this.renderStars()}renderLB(){const t=this.storage.getLeaderboard(10);if(!t.length){$("lb").innerHTML='<p class="empty">Chưa có ván đấu tính điểm nào. Hãy hoàn thành ván để vào bảng xếp hạng.</p>';return}$("lb").innerHTML='<table class="lb"><thead><tr><th>#</th><th>Người chơi</th><th class="num">Elo</th><th class="num">T-H-B</th></tr></thead><tbody>'+t.map((e,n)=>`<tr><td>${n+1}</td><td>${this.esc(e.name)}</td><td class="num">${e.elo}</td><td class="num">${e.w}-${e.d}-${e.l}</td></tr>`).join("")+"</tbody></table>"}setMode(t){this.cfg.mode=t,$("modeAI").setAttribute("aria-pressed",t==="ai"),$("modePVP").setAttribute("aria-pressed",t==="pvp"),$("fP2").hidden=t!=="pvp",$("fDiff").hidden=t!=="ai",$("fSide").hidden=t!=="ai",$("lblP1").textContent=t==="ai"?"Tên của bạn":"Tên người chơi Xanh"}bindEvents(){$("modeAI").onclick=()=>this.setMode("ai"),$("modePVP").onclick=()=>this.setMode("pvp"),$("btnNew").onclick=()=>{this.cfg.p1=$("inP1").value,this.cfg.p2=$("inP2").value,this.cfg.diff=$("selDiff").value,this.cfg.side=$("selSide").value,this.startGame()},$("selStyle").onchange=r=>this.cfg.style=r.target.value,$("tBattle").onchange=r=>this.cfg.battle=r.target.checked;const t=$("tClarity");t&&(t.onchange=r=>this.cfg.clarity=r.target.checked),$("tVoice").onchange=r=>{this.cfg.voice=r.target.checked,this.narrator.enabled=this.cfg.voice},$("tMoves").onchange=r=>this.cfg.moves=r.target.checked,$("tQuiz").onchange=r=>this.cfg.quiz=r.target.checked,$("tRotate").onchange=r=>this.cfg.autoRot=r.target.checked,$("tSound").onchange=r=>{this.cfg.sound=r.target.checked,this.sound.enabled=this.cfg.sound},$("btnView2D").onclick=()=>this.applyCameraMode("2d"),$("btnViewIso").onclick=()=>this.applyCameraMode("iso"),$("btnView3D").onclick=()=>this.applyCameraMode("3d"),$("btnZoomIn").onclick=()=>this.zoomCamera(-2),$("btnZoomOut").onclick=()=>this.zoomCamera(2),$("btnResetCam").onclick=()=>this.resetCameraView(),$("btnHint").onclick=()=>this.showMoveHint(),$("btnSideHint").onclick=()=>this.showMoveHint(),$("hintClose").onclick=()=>this.hideHint(),$("btnApplyHint").onclick=()=>this.applyHint(),$("btnHintVoice").onclick=()=>{this.currentHint&&this.narrator.say(this.currentHint.reasonEn)},$("btnAcademy").onclick=()=>this.academy.show(),$("btnSideAcademy").onclick=()=>this.academy.show(),$("wcSay").onclick=()=>this.narrator.say($("wordCard").dataset.say||""),$("btnResign").onclick=()=>{if(this.over||this.busy)return;const r=this.game.mode==="ai"?this.game.human:this.G.turn;this.endGame(je(r),`${fe(r)} đã đầu hàng`)},$("btnFlip").onclick=()=>{if(this.busy)return;const r=new fs().setFromVector3(new Ze().subVectors(this.setup.camera.position,this.setup.controls.target));this.rotateCamTo(Math.abs(ki(r.theta,0,1)-r.theta)<Math.PI/2?"b":"w")},$("skipBtn").onclick=()=>{this.anim.timeScale=25,this.narrator.cancel()},$("resView").onclick=()=>{$("result").hidden=!0},$("resNew").onclick=()=>{$("result").hidden=!0,$("btnNew").click()};const e=new ug,n=new tt;let s=null;this.setup.renderer.domElement.addEventListener("pointerdown",r=>{s={x:r.clientX,y:r.clientY},this.sound.resume()}),this.setup.renderer.domElement.addEventListener("pointerup",r=>{if(!s)return;const o=r.clientX-s.x,a=r.clientY-s.y;if(s=null,o*o+a*a>49)return;const c=this.setup.renderer.domElement.getBoundingClientRect();n.set((r.clientX-c.left)/c.width*2-1,-((r.clientY-c.top)/c.height)*2+1),e.setFromCamera(n,this.setup.camera);const l=[...this.board.squares];for(const p of this.meshAt)for(const m of p)m&&l.push(m);const h=e.intersectObjects(l,!0);if(!h.length)return;let f=h[0].object;if(f.userData.sq){this.onPick(f.userData.sq[0],f.userData.sq[1]);return}for(;f.parent&&f.parent!==this.setup.scene;)f=f.parent;for(let p=0;p<8;p++)for(let m=0;m<8;m++)if(this.meshAt[p][m]===f){this.onPick(p,m);return}})}startLoop(){let t=performance.now();const e=n=>{requestAnimationFrame(e);const s=Math.min(50,n-t);if(t=n,this.anim.update(s),this.meshAt){for(const o of this.meshAt)for(const a of o)if(a?.userData?.rig?.flag){const c=a.userData.rig;c.flag.rotation.y=Math.sin(n/380+c.phase)*.35}}this.anim.bounceMesh&&(this.anim.bounceMesh.position.y=Math.abs(Math.sin(n/160))*.22),this.setup.controls.update();let r=null;this.anim.shake>.002&&(r=new Ze(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(this.anim.shake),this.setup.camera.position.add(r),this.anim.shake*=.88),this.setup.renderer.render(this.setup.scene,this.setup.camera),r&&this.setup.camera.position.sub(r)};requestAnimationFrame(e)}}function ll(){const i=document.getElementById("loading");try{const t=new c_;t.setMode("ai");const e=document.getElementById("selDiff");e&&(e.value="easy"),t.startGame(),i&&(i.hidden=!0),window.gameInstance=t}catch(t){console.error("Failed to initialize 3D chess arena:",t),i&&(i.textContent="Could not load 3D graphics. Please make sure WebGL is enabled. Error: "+t.message)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ll):ll();
