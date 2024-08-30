(()=>{"use strict";var t,e={258:(t,e,n)=>{n.d(e,{Z:()=>r});var i=n(81),s=n.n(i),o=n(645),a=n.n(o)()(s());a.push([t.id,'body,\nhtml,\n#root,\n#landing {\n  margin: 0px;\n  /* background-image: url("./public/images/map.png"); */\n  background-repeat: repeat;\n  height: 100%;\n  overflow: hidden;\n}\n',""]);const r=a},426:(t,e,n)=>{n.d(e,{Z:()=>N});var i=n(81),s=n.n(i),o=n(645),a=n.n(o),r=n(667),d=n.n(r),l=new URL(n(28),n.b),c=new URL(n(465),n.b),h=new URL(n(608),n.b),p=new URL(n(534),n.b),u=new URL(n(871),n.b),m=new URL(n(761),n.b),g=new URL(n(79),n.b),y=new URL(n(778),n.b),f=new URL(n(46),n.b),v=new URL(n(291),n.b),b=new URL(n(514),n.b),w=new URL(n(918),n.b),x=new URL(n(116),n.b),E=new URL(n(264),n.b),k=new URL(n(654),n.b),M=new URL(n(337),n.b),I=new URL(n(839),n.b),L=a()(s()),T=d()(l),B=d()(c),C=d()(h),P=d()(p),j=d()(u),H=d()(m),z=d()(g),S=d()(y),$=d()(f),O=d()(v),A=d()(b),U=d()(w),R=d()(x),D=d()(E),W=d()(k),X=d()(M),Z=d()(I);L.push([t.id,'.hidden {\n  display: none !important;\n}\n\n.show {\n  display: block !important;\n}\n\n.not-visible {\n  opacity: 0;\n}\n\n.splash-screen {\n  animation: fade-out 1s ease-out forwards;\n}\n\n#modal {\n  position: fixed;\n  z-index: 99999;\n  width: 40%;\n  height: 20%;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: rgba(239, 250, 255, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ninput {\n  border: none;\n  font-size: 14px;\n  height: 40px;\n  outline: none;\n  padding: 4px 12px;\n}\n\n#auth {\n  width: 100%;\n}\n#signin-container {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  row-gap: 8px;\n}\n\n#signin-button,\n#signup-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #dadce0;\n  color: #3c4043;\n  cursor: pointer;\n  font-family: "Google Sans", arial, sans-serif;\n  font-size: 14px;\n  height: 40px;\n\n  outline: none;\n  overflow: hidden;\n  padding: 4px 12px;\n  text-align: center;\n  width: 100%;\n  border-radius: 4px;\n}\n\n.landing {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(239, 250, 255);\n  background: radial-gradient(\n    circle,\n    rgba(239, 250, 255, 1) 6%,\n    rgba(0, 42, 255, 1) 42%\n  );\n}\n#ladning-screen {\n  width: 40%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.player {\n  width: 80px;\n  height: 80px;\n  background-image: url('+T+");\n  border-radius: 50%;\n  position: absolute;\n  z-index: 999;\n  background-size: cover;\n  background-position: center;\n  transition: all 0.3s linear;\n}\n\n.player.move {\n  background-image: url("+B+");\n  animation: playerMove 0.8s infinite;\n}\n\n@keyframes playerMove {\n  0% {\n    background-image: url("+B+");\n  }\n\n  50% {\n    background-image: url("+C+");\n  }\n\n  100% {\n    background-image: url("+P+");\n  }\n}\n\n.player.attack {\n  animation: playerAttack 0.5s;\n}\n\n@keyframes playerAttack {\n  0% {\n    background-image: url("+j+");\n  }\n\n  50% {\n    background-image: url("+H+");\n  }\n\n  100% {\n    background-image: url("+z+");\n  }\n}\n\n.reverse-direction {\n  transform: scaleX(-1);\n}\n\n.original-direction {\n  transform: scaleX(1);\n}\n\n.map-container {\n  min-width: 100%;\n  width: auto;\n  height: auto;\n}\n\n.map {\n  width: 100%;\n  height: 100vh;\n  background-image: url("+S+");\n}\n\n.enemy {\n  position: absolute;\n  z-index: 1;\n  background-size: cover;\n  background-position: center;\n}\n\n.slime {\n  width: 50px;\n  height: 50px;\n  background-image: url("+$+");\n  transition: all 1s linear;\n}\n\n.goblin {\n  width: 50px;\n  height: 50px;\n  background-image: url("+O+");\n  transition: all 1s linear;\n}\n\n.player-hit-damage {\n  position: absolute;\n  animation: goToUpsideWithFadeOut 0.6s forwards;\n  font-size: 40px;\n  color: red;\n  opacity: 1;\n}\n\n@keyframes goToUpsideWithFadeOut {\n  0% {\n    opacity: 0;\n  }\n\n  99% {\n    opacity: 1;\n    transform: translate(0px, -50px);\n  }\n\n  100% {\n    transform: translate(0px, -50px);\n    display: none;\n  }\n}\n\n.bullet {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: absolute;\n  z-index: 1;\n  background-image: url("+A+");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.hit {\n  opacity: 50%;\n  transition: all 0.5s;\n}\n\n.enemy-destroyed {\n  animation: fade-out 1s;\n}\n\n.player-status-bar {\n  position: absolute;\n  z-index: 999;\n  width: 70%;\n  height: 160px;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-image: url("+U+");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.player-status-bar-arti {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.left,\n.right {\n  position: relative;\n  width: 300px;\n  height: 160px;\n}\n\n.player-status-bar-arti-left,\n.player-status-bar-arti-right {\n  position: absolute;\n  z-index: 1002;\n  width: 300px;\n  height: 100%;\n  background-position: bottom;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.player-status-bar-arti-left {\n  background-image: url("+R+");\n  left: -20px;\n}\n\n.player-status-bar-arti-right {\n  background-image: url("+D+");\n}\n\n.player-hp-container,\n.player-mp-container {\n  top: -40px;\n  position: absolute;\n  width: 180px;\n  height: 180px;\n  background-image: url("+W+");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  opacity: 0.6;\n  z-index: 1001;\n  overflow: hidden;\n}\n\n.player-hp-real-container {\n  position: absolute;\n  width: 180px;\n  height: 180px;\n  top: -40px;\n  left: 130px;\n\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.player-hp-container {\n  left: 130px;\n}\n\n.player-mp-container {\n  right: 130px;\n}\n\n.player-hp {\n  position: absolute;\n  width: 180px;\n  height: 180px;\n  z-index: 1000;\n  bottom: 0;\n  background-color: red;\n}\n\n.portal {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  background-image: url("+X+");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.portal.north {\n  top: 5%;\n  right: 50%;\n}\n\n.portal.east {\n  top: 35%;\n  right: 5%;\n}\n.portal.south {\n  bottom: 25%;\n  right: 50%;\n}\n.portal.west {\n  top: 35%;\n  left: 5%;\n}\n\n#map-id {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n}\n\n.change-map-ui {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  animation: fade-in-out 1s forwards;\n}\n\n@keyframes fade-in-out {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    visibility: none;\n  }\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    visibility: none;\n  }\n}\n\n.clicked {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 4px solid #b8dfff;\n  background-color: transparent;\n  animation: clicked 1s;\n}\n\n@keyframes clicked {\n  0% {\n    transform: scale(1, 1);\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  20% {\n    transform: scale(0.8, 0.8);\n    opacity: 0;\n  }\n  30% {\n    opacity: 1;\n  }\n  40% {\n    transform: scale(0.6, 0.6);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  60% {\n    transform: scale(0.4, 0.4);\n    opacity: 0;\n  }\n  70% {\n    opacity: 1;\n  }\n  80% {\n    transform: scale(0.2, 0.2);\n    opacity: 0;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.1, 0.1);\n    opacity: 0;\n  }\n}\n\n#inventory-toggle-btn {\n  position: fixed;\n  top: 40px;\n  right: 40px;\n  border: none;\n  background-color: white;\n  width: 70px;\n  height: 40px;\n  border-radius: 25px;\n}\n\n#inventory-toggle-btn {\n  right: 120px;\n  width: 90px;\n}\n\n#inventory {\n  position: fixed;\n  background-color: white;\n  top: 100px;\n  right: 120px;\n  width: 200px;\n  height: 300px;\n  padding: 24px;\n  z-index: 1200;\n}\n\n#inventory-container {\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  justify-content: space-between;\n  height: 100%;\n}\n\n#gold-container {\n  display: flex;\n}\n\n#gold {\n  margin-left: 16px;\n}\n\n.bullet-hit {\n  width: 70px;\n  height: 70px;\n  background-image: url("+Z+");\n  background-position: bottom;\n  background-size: contain;\n  background-repeat: no-repeat;\n  animation: fade-in-out 1s forwards;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n\n.add-gold {\n  position: absolute;\n  color: yellow;\n  /* animation: goToUpsideWithFadeOut 1s forwards; */\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n",""]);const N=L},128:(t,e,n)=>{var i=n(226),s=n(379),o=n.n(s),a=n(795),r=n.n(a),d=n(569),l=n.n(d),c=n(565),h=n.n(c),p=n(216),u=n.n(p),m=n(589),g=n.n(m),y=n(258),f={};f.styleTagTransform=g(),f.setAttributes=h(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),o()(y.Z,f),y.Z&&y.Z.locals&&y.Z.locals;var v=n(426),b={};b.styleTagTransform=g(),b.setAttributes=h(),b.insert=l().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=u(),o()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals,i.H.initialize()},226:(t,e,n)=>{n.d(e,{H:()=>dt});class i{constructor(){this.maps=[],this.currentMap=void 0,this.prevMap=void 0,this.isChanging=!1}static getInstance(){return i.instance||(i.instance=new i),i.instance}get mapsList(){return this.maps}addMap(t){this.maps.push(t)}setPrevMap(t){this.prevMap=this.maps.find((e=>e.id===t))}setCurrentMap(t){this.currentMap=this.maps.find((e=>e.id===t))}}const s=i.getInstance(),o=t=>parseInt(t.toString()),a=()=>({x:o(Math.random()*s.currentMap.viewport.horizontal),y:o(Math.random()*s.currentMap.viewport.vertical)});class r{constructor(t,e){var n;this.el=document.createElement("div"),this.position={x:0,y:0},this.nextPosition=null,this.speed={value:10,xSpeed:0,ySpeed:0},this.health=100,this.power=0,this.isHit=!1,this.id=e,this.el.id=e,this.el.classList.add(t),"complete"===document.readyState&&document.getElementById(null===(n=s.currentMap)||void 0===n?void 0:n.id).appendChild(this.el)}setPos({x:t,y:e}){this.position=Object.assign(Object.assign({},this.position),{x:t,y:e}),this.el.style.top=`${e}px`,this.el.style.left=`${t}px`}move(t,e){this.nextPosition={nextX:t,nextY:e},this.setSpeed(t,e),requestAnimationFrame((()=>{this.transfer()}))}transfer(){const{nextX:t,nextY:e}=this.nextPosition,{xSpeed:n,ySpeed:i}=this.speed;if(Math.abs(t-this.position.x)<10&&Math.abs(e-this.position.y)<10)return;const{x:s,y:o}=this.position;let a={x:s,y:o};this.position.x<t&&this.position.y<e&&(a={x:s+n,y:o+i}),this.position.x<t&&this.position.y>e&&(a={x:s+n,y:o-i}),this.position.x>t&&this.position.y<e&&(a={x:s-n,y:o+i}),this.position.x>t&&this.position.y>e&&(a={x:s-n,y:o-i}),this.setPos(a),requestAnimationFrame((()=>this.transfer()))}setSpeed(t,e){const n=((t,e,n,i)=>Math.sqrt(Math.pow(t-n,2)+Math.pow(e-i,2)))(this.position.x,this.position.y,t,e);this.speed.xSpeed=Math.abs(t-this.position.x)/n*this.speed.value,this.speed.ySpeed=Math.abs(e-this.position.y)/n*this.speed.value}hit(t){this.health-=t}setPower(t){this.power=t}}class d{constructor(){this.enemies=[]}static getInstance(){return d.instance||(d.instance=new d),d.instance}get enemiesList(){return this.enemies}addEnemy(t){this.enemies.push(t)}deleteEnemy(t){this.enemies=this.enemies.filter((e=>e.id!==t))}deleteAllEnemies(){this.enemies=[]}}const l=d.getInstance();var c,h,p,u=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)},m=function(t,e,n,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,n):s?s.value=n:e.set(t,n),n};class g extends r{constructor(t,e,n){super(t,e),c.add(this),h.set(this,void 0),this.power=n}init(){const t=k.position;this.setPos({x:t.x,y:t.y})}setPos(t){super.setPos(t),this.findTargetEnemy(),!u(this,h,"f")||this.isHit||u(this,c,"m",p).call(this)}destroy(){document.getElementById(this.id)&&document.getElementById(s.currentMap.id).removeChild(this.el)}findTargetEnemy(){m(this,h,l.enemiesList.find((t=>Math.abs(t.position.x-this.position.x)<30&&Math.abs(t.position.y-this.position.y)<30)),"f")}transfer(){super.transfer();const{nextX:t,nextY:e}=this.nextPosition;Math.abs(t-this.position.x)<10&&Math.abs(e-this.position.y)<10&&this.destroy()}}h=new WeakMap,c=new WeakSet,p=function(){this.destroy(),this.isHit=!0,u(this,h,"f").hit(this.power),m(this,h,void 0,"f")};class y{constructor(t){this.el=t}setHpStatus(){document.getElementsByClassName("player-hp")[0].style.height=k.health/k.maxHealth*150+"px"}setHitAnimation(){this.el.classList.add("hit"),setTimeout((()=>{this.el.classList.remove("hit")}),1e3)}showHitDamage(t){const e=document.createElement("div");this.el.id.includes("player")&&e.classList.add("player-hit-damage"),e.innerHTML=t.toString(),this.el.appendChild(e),setTimeout((()=>{this.el.removeChild(e)}),1e3)}}const f=t=>{var e;const n=document.createElement("div");n.style.position="absolute",n.style.zIndex="999",n.style.top=`${t.y}px`,n.style.left=`${t.x}px`,n.classList.add("clicked"),null===(e=document.getElementById("root"))||void 0===e||e.appendChild(n),setTimeout((()=>{var t;null===(t=document.getElementById("root"))||void 0===t||t.removeChild(n)}),1e3)};class v{constructor(){var t;this.el=document.createElement("div"),this.el.id="modal",this.textEl=document.createElement("div"),null===(t=document.getElementById("root"))||void 0===t||t.appendChild(this.el),this.textEl.id="text",this.buttonsEl=document.createElement("div"),this.buttonsEl.id="buttons",this.el.appendChild(this.textEl),this.el.appendChild(this.buttonsEl),this.addHideModalEventToButtons()}setText(t){this.textEl.innerHTML=t}setButtons(t){t.forEach((t=>{this.buttonsEl.appendChild(t)}))}addHideModalEventToButtons(){var t;null===(t=Array.from(document.getElementsByTagName("button")))||void 0===t||t.forEach((t=>{t.addEventListener("click",(()=>{this.hideModal()}))}))}hideModal(){var t;null===(t=document.getElementById("root"))||void 0===t||t.removeChild(this.el)}}var b,w,x=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)};class E extends r{static getInstance(){return E.instance||(E.instance=new E("player","player")),E.instance}constructor(t,e){super(t,e),b.set(this,new y(this.el)),this.adjacentEnemy=void 0,w.set(this,{x:0,y:0}),document.getElementById("root").appendChild(this.el),this.maxHealth=150,this.health=150,this.power=10,this.maxMana=100,this.mana=100}reInitialize(){this.health=this.maxHealth,x(this,b,"f").setHpStatus(),document.getElementById("root").appendChild(this.el),D.setGold(.8*D.gold)}initialize(){return t=this,e=void 0,i=function*(){const t=yield U.getServerData();"string"!=typeof t?(this.health=t.player.health,this.setPos({x:t.player.position.x,y:t.player.position.y}),this.maxHealth=t.player.maxHealth,x(this,b,"f").setHpStatus()):this.setPos({x:0,y:0}),document.body.onmousemove=t=>{x(this,w,"f").x=t.clientX,x(this,w,"f").y=t.clientY}},new((n=void 0)||(n=Promise))((function(s,o){function a(t){try{d(i.next(t))}catch(t){o(t)}}function r(t){try{d(i.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,r)}d((i=i.apply(t,e||[])).next())}));var t,e,n,i}attack(){const t=new g("bullet",`bullet-${(new Date).toISOString()}`,this.power);this.el.classList.add("attack"),this.position.x<x(this,w,"f").x&&this.el.classList.add("reverse-direction"),this.position.x>x(this,w,"f").x&&this.el.classList.remove("reverse-direction"),t.init(),setTimeout((()=>{t.move(x(this,w,"f").x,x(this,w,"f").y)}),100),setTimeout((()=>{this.el.classList.remove("attack")}),500)}move(t,e){t<s.currentMap.viewport.horizontal-20&&e<s.currentMap.viewport.vertical-20&&(this.el.classList.add("move"),this.position.x<t?this.el.classList.add("reverse-direction"):this.position.x>t&&this.el.classList.remove("reverse-direction"),super.move(t,e))}setPos({x:t,y:e}){super.setPos({x:t,y:e}),this.findAdjacentEnemy(),!this.adjacentEnemy||this.isHit||this.hit()}hit(){const{power:t}=this.adjacentEnemy;super.hit(t),this.isHit=!0,x(this,b,"f").setHpStatus(),this.health<=0&&this.destroy(),x(this,b,"f").setHitAnimation(),x(this,b,"f").showHitDamage(t),setTimeout((()=>{this.isHit=!1}),1e3),this.adjacentEnemy=void 0}findAdjacentEnemy(){this.adjacentEnemy=l.enemiesList.find((t=>Math.abs(t.position.x-this.position.x)<30&&Math.abs(t.position.y-this.position.y)<30))}transfer(){const{nextX:t,nextY:e}=this.nextPosition;Math.abs(t-this.position.x)<10&&Math.abs(e-this.position.y)<10&&setTimeout((()=>{this.el.classList.remove("move")}),300),super.transfer()}destroy(){document.getElementById("root").removeChild(this.el);const t=new v;t.setText("사망하셨습니다. 골드가 20% 차감된 상태로 부활합니다");const e=((t,e)=>{const n=document.createElement("button");return n.innerHTML="확인",n.addEventListener("click",(()=>e())),n})(0,(()=>{t.hideModal(),this.reInitialize()}));t.setButtons([e])}}b=new WeakMap,w=new WeakMap;const k=E.getInstance();var M;M=new WeakMap;const I=new class{constructor(){M.set(this,"https://tom-rpg-db-default-rtdb.firebaseio.com")}fetch(t){return e=this,n=void 0,s=function*(){try{return(yield fetch(`${function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)}(this,M,"f")}/${null==t?void 0:t.param}`,Object.assign({headers:(null==t?void 0:t.body)?{"Content-Type":"application/json"}:null==t?void 0:t.headers},t))).json()}catch(t){if(t instanceof Error)return t.message;throw new Error("unexpected error is occur")}},new((i=void 0)||(i=Promise))((function(t,o){function a(t){try{d(s.next(t))}catch(t){o(t)}}function r(t){try{d(s.throw(t))}catch(t){o(t)}}function d(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(a,r)}d((s=s.apply(e,n||[])).next())}));var e,n,i,s}};var L=n(864);const T=(0,n(977).ZF)({apiKey:"AIzaSyAJOnRSM91EGjZ5mE4MTifMvgETiMRy9Qc",authDomain:"tom-rpg-db.firebaseapp.com",projectId:"tom-rpg-db",storageBucket:"tom-rpg-db.appspot.com",messagingSenderId:"682024612709",appId:"1:682024612709:web:9ae6b46fe7880e9a00278c"}),B=new L.hJ;var C,P,j=function(t,e,n,i){return new(n||(n=Promise))((function(s,o){function a(t){try{d(i.next(t))}catch(t){o(t)}}function r(t){try{d(i.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,r)}d((i=i.apply(t,e||[])).next())}))},H=function(t,e,n,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,n):s?s.value=n:e.set(t,n),n},z=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)};class S{static getInstance(){return S.instance||(S.instance=new S),S.instance}constructor(){C.set(this,void 0),P.set(this,void 0),H(this,C,(0,L.v0)(T),"f"),this.initialize()}get user(){return z(this,P,"f")}initialize(){return j(this,void 0,void 0,(function*(){(0,L.Aj)(z(this,C,"f"),(t=>j(this,void 0,void 0,(function*(){}))))}))}signIn(){(0,L.rh)(z(this,C,"f"),B).then((t=>j(this,void 0,void 0,(function*(){H(this,P,t.user,"f"),(()=>{j(this,void 0,void 0,(function*(){yield U.saveData(),dt.start()}))})()})))).catch((t=>{t.code,t.message,t.customData.email,L.hJ.credentialFromError(t)}))}signOutFn(){(0,L.w7)(z(this,C,"f")).then((()=>{})).catch((t=>{}))}}C=new WeakMap,P=new WeakMap;const $=S.getInstance();var O=function(t,e,n,i){return new(n||(n=Promise))((function(s,o){function a(t){try{d(i.next(t))}catch(t){o(t)}}function r(t){try{d(i.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,r)}d((i=i.apply(t,e||[])).next())}))};class A{static getInstance(){return A.instance||(A.instance=new A),A.instance}getServerData(){var t,e;return O(this,void 0,void 0,(function*(){const n=yield null===(t=$.user)||void 0===t?void 0:t.getIdToken();return yield I.fetch({method:"GET",param:`users/${null===(e=$.user)||void 0===e?void 0:e.uid}.json?auth=${n}`})}))}saveData(){var t,e;return O(this,void 0,void 0,(function*(){const n=yield null===(t=$.user)||void 0===t?void 0:t.getIdToken();try{yield I.fetch({method:"PUT",param:`users/${null===(e=$.user)||void 0===e?void 0:e.uid}.json?auth=${n}`,body:JSON.stringify({user:$.user,player:k,inventory:D})})}catch(t){const e=new v;e.setText("저장이 실패하였습니다. 다시 시도해주세요."),setTimeout((()=>{e.hideModal()}),1e3)}}))}}const U=A.getInstance();class R{static getInstance(){return R.instance||(R.instance=new R),R.instance}constructor(){this.gold=20}initialize(){return t=this,e=void 0,i=function*(){const t=yield U.getServerData();this.gold="string"!=typeof t&&Object(t).hasOwnProperty("inventory")?t.inventory.gold:20,document.getElementById("gold").innerHTML=`${this.gold}G`},new((n=void 0)||(n=Promise))((function(s,o){function a(t){try{d(i.next(t))}catch(t){o(t)}}function r(t){try{d(i.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,r)}d((i=i.apply(t,e||[])).next())}));var t,e,n,i}addGold(t){this.gold+=t}setGold(t){this.gold=t}}const D=R.getInstance(),W=()=>`map-${Date.now()}-${1e3*Math.random()}`,X=()=>{var t;const e=document.createElement("div");e.id="overlay";const n=()=>{var t;return null===(t=document.getElementById("inventory"))||void 0===t?void 0:t.classList.toggle("hidden")};if(null===(t=document.getElementById("inventory"))||void 0===t?void 0:t.classList.contains("hidden"))return n(),e.classList.add("overlay"),document.body.appendChild(e),void e.addEventListener("click",(()=>{X()}));n(),document.body.removeChild(document.getElementById("overlay"))};class Z{constructor(t){this.el=t}setHpBar(t){const e=document.createElement("div");e.id=`${this.el.id}-hp-bar`,this.el.appendChild(e);const n={width:`${t}px`,height:"10px",backgroundColor:"red"};Object.assign(e.style,n)}decreaseHPBar(t){document.getElementById(`${this.el.id}-hp-bar`).style.width=`${t}px`}setHitAnimation(){var t;const e=document.createElement("div");e.classList.add("bullet-hit"),setTimeout((()=>{var t;null===(t=document.getElementById(this.el.id))||void 0===t||t.removeChild(e)}),1e3),null===(t=document.getElementById(this.el.id))||void 0===t||t.appendChild(e)}setDestoryAnimation(){this.el.classList.add("enemy-destroyed")}setHitAnimationContainer(){const t=document.createElement("div");t.id=`hit-animation-container-${this.el.id}`,Object.assign(t.style,Object.assign(Object.assign({},t.style),{position:"relative",width:"100%",height:"100%"})),this.el.appendChild(t)}}var N,F,G,Y,J,_,q=function(t,e,n,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,n):s?s.value=n:e.set(t,n),n},K=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)};class Q extends r{constructor(t){const{className:e,id:n,type:i,gold:s,health:r,power:d}=t;super(e,n),N.add(this),F.set(this,void 0),G.set(this,void 0),Y.set(this,new Z(this.el)),J.set(this,void 0),this.el.id=n,this.el.classList.add("enemy"),q(this,F,i,"f"),this.health=r,q(this,G,s,"f"),q(this,J,d,"f"),K(this,Y,"f").setHitAnimationContainer(),this.setPos({x:o(Math.random()*a().x),y:o(Math.random()*a().y)}),K(this,Y,"f").setHpBar(this.health),K(this,N,"m",_).call(this)}hit(t){super.hit(t),K(this,Y,"f").decreaseHPBar(this.health),0!==this.health?K(this,Y,"f").setHitAnimation():this.destroy()}destroy(){D.addGold(K(this,G,"f")),((t,e)=>{const n=document.createElement("div");n.innerHTML="+ 20",n.classList.add("add-gold");const i=document.getElementById(`hit-animation-container-${t}`);i.appendChild(n),setTimeout((()=>{i.removeChild(n)}),1e3),document.getElementById("gold").innerHTML=`${D.gold}G`})(this.id),U.saveData(),K(this,Y,"f").setDestoryAnimation(),document.getElementById(s.currentMap.id).removeChild(this.el),l.deleteEnemy(this.id)}setPos({x:t,y:e}){if(super.setPos({x:t,y:e}),Math.abs(this.position.x-k.position.x)<30&&Math.abs(this.position.y-k.position.y)<30)return k.adjacentEnemy=this,void(k.isHit||k.hit())}}F=new WeakMap,G=new WeakMap,Y=new WeakMap,J=new WeakMap,N=new WeakSet,_=function(){setInterval((()=>{this.move(o(Math.random()*a().x),o(Math.random()*a().y))}),1e4)};const V=[{type:"slime",health:20,probability:.7,gold:20,power:20},{type:"goblin",health:100,probability:.3,gold:100,power:50}],tt=()=>{const t=(()=>{const t=Math.random();V.sort(((t,e)=>t.probability-e.probability));let e="slime",n=0;for(let i=0;i<V.length;i++)if(n+=V[i].probability,n>=t){e=V[i].type;break}return e})();et(t)},et=t=>{10!==l.enemiesList.length&&(nt(t),et(t))},nt=t=>{const{health:e,gold:n,power:i}=V.find((e=>e.type===t)),s=new Q({className:`${t}`,id:`${t}-${(new Date).toISOString()}`,type:t,gold:n,health:e,power:i});l.addEnemy(s)};class it{constructor(t,e,n,i){this.currentMapId="",this.nextMapId="",this.mapEl=t,this.direction=e,this.currentMapId=n,this.nextMapId=i;const s=document.createElement("div");s.classList.add("portal"),s.classList.add(e),t.appendChild(s),s.addEventListener("click",(()=>{this.moveToNextMap(this.nextMapId)}))}moveToNextMap(t){if(document.getElementById("map-container"),document.getElementById(this.currentMapId).style.display="none",s.mapsList.find((e=>e.id===t)))this.changeMap(!1);else{const e=new ot(t,"south"===this.direction?this.currentMapId:void 0,"west"===this.direction?this.currentMapId:void 0,"north"===this.direction?this.currentMapId:void 0,"east"===this.direction?this.currentMapId:void 0);s.addMap(e),this.changeMap(!0)}s.setCurrentMap(t)}changeMap(t){var e;document.getElementById("map-id").innerHTML=`현재 맵 ID : ${this.nextMapId}`;const n=document.createElement("div");null===(e=document.getElementById("root"))||void 0===e||e.appendChild(n),n.classList.add("change-map-ui"),s.isChanging=!0,l.deleteAllEnemies(),Array.from(document.getElementsByClassName("enemy")).map((t=>{var e;null===(e=document.getElementById(s.currentMap.id))||void 0===e||e.removeChild(t)})),setTimeout((()=>{tt()}),500),setTimeout((()=>{var t;null===(t=document.getElementById("root"))||void 0===t||t.removeChild(n),s.isChanging=!1}),1e3),document.getElementById(this.currentMapId).style.display="none",document.getElementById(this.nextMapId).style.display="block"}}const st=document.getElementById("map-container");class ot{get viewport(){return{horizontal:document.getElementById(`${this.id}`).offsetWidth,vertical:document.getElementById(`${this.id}`).offsetHeight}}constructor(t,e,n,i,o){this.id=t,this.el=document.createElement("div"),this.el.classList.add("map"),this.el.id=`${this.id}`,this.northId=null!=e?e:W(),this.eastId=null!=n?n:W(),this.southId=null!=i?i:W(),this.westId=null!=o?o:W(),st.append(this.el),document.getElementById(this.id).addEventListener("mousedown",(t=>{s.isChanging||(k.move(t.clientX,t.clientY),f({x:t.clientX,y:t.clientY}))})),this.createPortal()}createPortal(){new it(this.el,"north",this.id,this.northId),new it(this.el,"east",this.id,this.eastId),new it(this.el,"south",this.id,this.southId),new it(this.el,"west",this.id,this.westId)}}const at=[()=>{var t;null===(t=document.getElementById("inventory-toggle-btn"))||void 0===t||t.addEventListener("click",(()=>{X()}))},()=>{var t;document.getElementById(null===(t=s.currentMap)||void 0===t?void 0:t.id).addEventListener("mousedown",(t=>{s.isChanging||(k.move(t.clientX,t.clientY),f({x:t.clientX,y:t.clientY}))}))},()=>{document.addEventListener("keydown",(t=>{"a"!==t.key.toLowerCase()&&"ㅁ"!==t.key||k.attack()}))},()=>{document.getElementById("signin-button").addEventListener("click",(()=>{$.signIn()}))},()=>{document.getElementById("signout-button").addEventListener("click",(()=>{}))},()=>{var t;null===(t=document.getElementById("enter-game-button"))||void 0===t||t.addEventListener("click",(()=>{dt.start()}))}];class rt{constructor(){this.landingEl=document.getElementById("landing"),this.gameEl=document.getElementById("root"),this.initialMap=new ot(W())}initialize(){s.addMap(this.initialMap),s.setCurrentMap(this.initialMap.id),at.forEach((t=>t()))}static getInstance(){return rt.instance||(rt.instance=new rt),rt.instance}start(){this.setLandingScreenAnimation(),this.initializeObjects()}setLandingScreenAnimation(){this.landingEl.classList.add("splash-screen"),setTimeout((()=>{this.landingEl.classList.add("hidden"),this.gameEl.classList.remove("not-visible")}),1e3)}initializeObjects(){k.initialize(),D.initialize(),tt()}setLandingScreen(){var t,e,n;if($.user)return null===(t=document.getElementById("auth"))||void 0===t||t.classList.add("hidden"),document.getElementById("welcome-user").innerHTML=`${$.user.displayName} 님 다시 만나게되어 반갑습니다`,document.getElementById("enter-game-button").innerHTML="이어하기",void(null===(e=document.getElementById("enter-game-button"))||void 0===e||e.addEventListener("click",(()=>{dt.start()})));null===(n=document.getElementById("signed-container"))||void 0===n||n.classList.add("hidden")}}const dt=rt.getInstance()},514:(t,e,n)=>{t.exports=n.p+"public/images/bullet/default.png"},839:(t,e,n)=>{t.exports=n.p+"public/images/bullet/hit.png"},778:(t,e,n)=>{t.exports=n.p+"public/images/diablo tile.png"},116:(t,e,n)=>{t.exports=n.p+"public/images/gameUi/bar-left.png"},264:(t,e,n)=>{t.exports=n.p+"public/images/gameUi/bar-right.png"},654:(t,e,n)=>{t.exports=n.p+"public/images/gameUi/empty-portion.png"},918:(t,e,n)=>{t.exports=n.p+"public/images/gameUi/status-bar.png"},291:(t,e,n)=>{t.exports=n.p+"public/images/monster/goblin.png"},46:(t,e,n)=>{t.exports=n.p+"public/images/monster/slime.png"},871:(t,e,n)=>{t.exports=n.p+"public/images/player/attack1.png"},761:(t,e,n)=>{t.exports=n.p+"public/images/player/attack2.png"},79:(t,e,n)=>{t.exports=n.p+"public/images/player/attack3.png"},28:(t,e,n)=>{t.exports=n.p+"public/images/player/pause.png"},465:(t,e,n)=>{t.exports=n.p+"public/images/player/run1.png"},608:(t,e,n)=>{t.exports=n.p+"public/images/player/run2.png"},534:(t,e,n)=>{t.exports=n.p+"public/images/player/run3.png"},337:(t,e,n)=>{t.exports=n.p+"public/images/portal.png"}},n={};function i(t){var s=n[t];if(void 0!==s)return s.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,i),o.exports}i.m=e,t=[],i.O=(e,n,s,o)=>{if(!n){var a=1/0;for(c=0;c<t.length;c++){for(var[n,s,o]=t[c],r=!0,d=0;d<n.length;d++)(!1&o||a>=o)&&Object.keys(i.O).every((t=>i.O[t](n[d])))?n.splice(d--,1):(r=!1,o<a&&(a=o));if(r){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,s,o]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{i.b=document.baseURI||self.location.href;var t={143:0,757:0};i.O.j=e=>0===t[e];var e=(e,n)=>{var s,o,[a,r,d]=n,l=0;if(a.some((e=>0!==t[e]))){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(d)var c=d(i)}for(e&&e(n);l<a.length;l++)o=a[l],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(c)},n=self.webpackChunktom_rpg=self.webpackChunktom_rpg||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),i.nc=void 0;var s=i.O(void 0,[326,948],(()=>i(128)));s=i.O(s)})();