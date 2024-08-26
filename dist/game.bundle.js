(()=>{"use strict";var e,t={4188:(e,t,n)=>{n.d(t,{H:()=>h});var i=n(7166),r=n(6427),a=n(9444),s=n(6205),o=n(2125),l=n(4223),d=n(2849),c=n(7486);class u{constructor(){this.landingEl=document.getElementById("landing"),this.gameEl=document.getElementById("root"),this.initialMap=new r.Z((0,l.K)())}initialize(){s.X.addMap(this.initialMap),s.X.setCurrentMap(this.initialMap.id),o.J.forEach((e=>e()))}static getInstance(){return u.instance||(u.instance=new u),u.instance}start(){this.setLandingScreenAnimation(),this.initializeObjects()}setLandingScreenAnimation(){this.landingEl.classList.add("splash-screen"),setTimeout((()=>{this.landingEl.classList.add("hidden"),this.gameEl.classList.remove("not-visible")}),1e3)}initializeObjects(){a.h.initialize(),i.O.initialize(),(0,d.Ww)()}setLandingScreen(){var e,t,n;if(c.I.user)return null===(e=document.getElementById("auth"))||void 0===e||e.classList.add("hidden"),document.getElementById("welcome-user").innerHTML=`${c.I.user.displayName} 님 다시 만나게되어 반갑습니다`,document.getElementById("enter-game-button").innerHTML="이어하기",void(null===(t=document.getElementById("enter-game-button"))||void 0===t||t.addEventListener("click",(()=>{h.start()})));null===(n=document.getElementById("signed-container"))||void 0===n||n.classList.add("hidden")}}const h=u.getInstance()}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.m=t,e=[],i.O=(t,n,r,a)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){for(var[n,r,a]=e[c],o=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(i.O).every((e=>i.O[e](n[l])))?n.splice(l--,1):(o=!1,a<s&&(s=a));if(o){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,r,a]},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={757:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[s,o,l]=n,d=0;if(s.some((t=>0!==e[t]))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(l)var c=l(i)}for(t&&t(n);d<s.length;d++)a=s[d],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},n=self.webpackChunktom_rpg=self.webpackChunktom_rpg||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=i.O(void 0,[129,907],(()=>i(4188)));r=i.O(r)})();