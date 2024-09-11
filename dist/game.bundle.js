/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/auth/GoogleAuth.ts":
/*!********************************!*\
  !*** ./src/auth/GoogleAuth.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GoogleAuth\": () => (/* binding */ GoogleAuth),\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _server_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server/firebase */ \"./src/server/firebase.ts\");\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/game */ \"./src/game/game.ts\");\n/* harmony import */ var _server_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server/server */ \"./src/server/server.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _GoogleAuth_auth, _GoogleAuth_user;\n\n\n\n\nclass GoogleAuth {\n    static getInstance() {\n        if (!GoogleAuth.instance) {\n            GoogleAuth.instance = new GoogleAuth();\n        }\n        return GoogleAuth.instance;\n    }\n    constructor() {\n        _GoogleAuth_auth.set(this, void 0);\n        _GoogleAuth_user.set(this, void 0);\n        __classPrivateFieldSet(this, _GoogleAuth_auth, (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(_server_firebase__WEBPACK_IMPORTED_MODULE_1__.app), \"f\");\n        this.initialize();\n    }\n    get user() {\n        return __classPrivateFieldGet(this, _GoogleAuth_user, \"f\");\n    }\n    initialize() {\n        return __awaiter(this, void 0, void 0, function* () {\n            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)(__classPrivateFieldGet(this, _GoogleAuth_auth, \"f\"), (user) => __awaiter(this, void 0, void 0, function* () {\n                // document.getElementById(\"auth\")?.classList.remove(\"hidden\");\n                // if (user) {\n                //   this.#user = user;\n                //   // game.start();\n                //   await server.saveData(await user.getIdToken(true))\n                // }\n                // game.setLandingScreen();\n            }));\n        });\n    }\n    signIn() {\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPopup)(__classPrivateFieldGet(this, _GoogleAuth_auth, \"f\"), _server_firebase__WEBPACK_IMPORTED_MODULE_1__.provider)\n            .then((result) => __awaiter(this, void 0, void 0, function* () {\n            __classPrivateFieldSet(this, _GoogleAuth_user, result.user, \"f\");\n            (() => __awaiter(this, void 0, void 0, function* () {\n                yield _server_server__WEBPACK_IMPORTED_MODULE_3__.server.saveData();\n                _game_game__WEBPACK_IMPORTED_MODULE_2__.game.start();\n            }))();\n        }))\n            .catch((error) => {\n            // Handle Errors here.\n            const errorCode = error.code;\n            const errorMessage = error.message;\n            // The email of the user's account used.\n            const email = error.customData.email;\n            // The AuthCredential type that was used. \n            const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider.credentialFromError(error);\n            // ...\n        });\n    }\n    signOutFn() {\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut)(__classPrivateFieldGet(this, _GoogleAuth_auth, \"f\"))\n            .then(() => {\n            // Sign-out successful.\n        })\n            .catch((error) => {\n            // An error happened.\n        });\n    }\n}\n_GoogleAuth_auth = new WeakMap(), _GoogleAuth_user = new WeakMap();\nconst auth = GoogleAuth.getInstance();\n\n\n//# sourceURL=webpack://tom-rpg/./src/auth/GoogleAuth.ts?");

/***/ }),

/***/ "./src/game/game.ts":
/*!**************************!*\
  !*** ./src/game/game.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game),\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _object_inventory_Inventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/inventory/Inventory */ \"./src/object/inventory/Inventory.ts\");\n/* harmony import */ var _object_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/map */ \"./src/object/map/index.ts\");\n/* harmony import */ var _object_moving_player_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/moving/player/Player */ \"./src/object/moving/player/Player.ts\");\n/* harmony import */ var _store_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/maps */ \"./src/store/maps.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ \"./src/util/index.ts\");\n/* harmony import */ var _util_generateRandomId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/generateRandomId */ \"./src/util/generateRandomId.ts\");\n/* harmony import */ var _util_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/object */ \"./src/util/object.ts\");\n/* harmony import */ var _auth_GoogleAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/GoogleAuth */ \"./src/auth/GoogleAuth.ts\");\n\n\n\n\n\n\n\n\nclass Game {\n    constructor() {\n        this.landingEl = document.getElementById(\"landing\");\n        this.gameEl = document.getElementById(\"root\");\n        this.initialMap = new _object_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"]((0,_util_generateRandomId__WEBPACK_IMPORTED_MODULE_5__.mapId)());\n    }\n    initialize() {\n        _store_maps__WEBPACK_IMPORTED_MODULE_3__.mapsStore.addMap(this.initialMap);\n        _store_maps__WEBPACK_IMPORTED_MODULE_3__.mapsStore.setCurrentMap(this.initialMap.id);\n        _util__WEBPACK_IMPORTED_MODULE_4__.eventListeners.forEach((fn) => fn());\n    }\n    static getInstance() {\n        if (!Game.instance) {\n            Game.instance = new Game();\n        }\n        return Game.instance;\n    }\n    start() {\n        this.setLandingScreenAnimation();\n        this.initializeObjects();\n    }\n    setLandingScreenAnimation() {\n        this.landingEl.classList.add(\"splash-screen\");\n        setTimeout(() => {\n            this.landingEl.classList.add(\"hidden\");\n            this.gameEl.classList.remove(\"not-visible\");\n        }, 1000);\n    }\n    initializeObjects() {\n        _object_moving_player_Player__WEBPACK_IMPORTED_MODULE_2__.player.initialize();\n        _object_inventory_Inventory__WEBPACK_IMPORTED_MODULE_0__.inventory.initialize();\n        (0,_util_object__WEBPACK_IMPORTED_MODULE_6__.createRandomEnemies)();\n    }\n    setLandingScreen() {\n        var _a, _b, _c;\n        if (_auth_GoogleAuth__WEBPACK_IMPORTED_MODULE_7__.auth.user) {\n            (_a = document.getElementById(\"auth\")) === null || _a === void 0 ? void 0 : _a.classList.add(\"hidden\");\n            document.getElementById(\"welcome-user\").innerHTML = `${_auth_GoogleAuth__WEBPACK_IMPORTED_MODULE_7__.auth.user.displayName} 님 다시 만나게되어 반갑습니다`;\n            document.getElementById(\"enter-game-button\").innerHTML = \"이어하기\";\n            (_b = document\n                .getElementById(\"enter-game-button\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", () => {\n                game.start();\n            });\n            return;\n        }\n        (_c = document.getElementById(\"signed-container\")) === null || _c === void 0 ? void 0 : _c.classList.add(\"hidden\");\n    }\n}\nconst game = Game.getInstance();\n\n\n\n//# sourceURL=webpack://tom-rpg/./src/game/game.ts?");

/***/ }),

/***/ "./src/game/modal.ts":
/*!***************************!*\
  !*** ./src/game/modal.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n    constructor() {\n        var _a;\n        this.el = document.createElement(\"div\");\n        this.el.id = \"modal\";\n        this.textEl = document.createElement(\"div\");\n        (_a = document.getElementById(\"root\")) === null || _a === void 0 ? void 0 : _a.appendChild(this.el);\n        this.textEl.id = \"text\";\n        this.buttonsEl = document.createElement(\"div\");\n        this.buttonsEl.id = \"buttons\";\n        this.el.appendChild(this.textEl);\n        this.el.appendChild(this.buttonsEl);\n        this.addHideModalEventToButtons();\n    }\n    setText(text) {\n        this.textEl.innerHTML = text;\n    }\n    setButtons(buttons) {\n        buttons.forEach((button) => {\n            this.buttonsEl.appendChild(button);\n        });\n    }\n    addHideModalEventToButtons() {\n        var _a;\n        (_a = Array.from(document.getElementsByTagName(\"button\"))) === null || _a === void 0 ? void 0 : _a.forEach((button) => {\n            button.addEventListener(\"click\", () => {\n                this.hideModal();\n            });\n        });\n    }\n    hideModal() {\n        var _a;\n        (_a = document.getElementById(\"root\")) === null || _a === void 0 ? void 0 : _a.removeChild(this.el);\n    }\n}\n\n\n//# sourceURL=webpack://tom-rpg/./src/game/modal.ts?");

/***/ }),

/***/ "./src/object/inventory/Inventory.ts":
/*!*******************************************!*\
  !*** ./src/object/inventory/Inventory.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Inventory\": () => (/* binding */ Inventory),\n/* harmony export */   \"inventory\": () => (/* binding */ inventory)\n/* harmony export */ });\n/* harmony import */ var _server_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server/server */ \"./src/server/server.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nclass Inventory {\n    static getInstance() {\n        if (!Inventory.instance) {\n            Inventory.instance = new Inventory();\n        }\n        return Inventory.instance;\n    }\n    constructor() {\n        this.gold = 20;\n    }\n    initialize() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const res = yield _server_server__WEBPACK_IMPORTED_MODULE_0__.server.getServerData();\n            this.gold =\n                typeof res !== \"string\" && Object(res).hasOwnProperty(\"inventory\")\n                    ? res.inventory.gold\n                    : 20;\n            document.getElementById(\"gold\").innerHTML = `${this.gold}G`;\n        });\n    }\n    addGold(gold) {\n        this.gold += gold;\n    }\n    setGold(gold) {\n        this.gold = gold;\n    }\n}\nconst inventory = Inventory.getInstance();\n\n\n//# sourceURL=webpack://tom-rpg/./src/object/inventory/Inventory.ts?");

/***/ }),

/***/ "./src/object/inventory/animation.ts":
/*!*******************************************!*\
  !*** ./src/object/inventory/animation.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setAddGoldAnimation\": () => (/* binding */ setAddGoldAnimation),\n/* harmony export */   \"toggleInventory\": () => (/* binding */ toggleInventory)\n/* harmony export */ });\n/* harmony import */ var _Inventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inventory */ \"./src/object/inventory/Inventory.ts\");\n\nconst setAddGoldAnimation = (id, gold) => {\n    const goldEl = document.createElement(\"div\");\n    goldEl.innerHTML = `+ ${gold}`;\n    goldEl.classList.add(\"add-gold\");\n    const el = document.getElementById(`hit-animation-container-${id}`);\n    el.appendChild(goldEl);\n    setTimeout(() => {\n        el.removeChild(goldEl);\n    }, 1000);\n    document.getElementById(\"gold\").innerHTML = `${_Inventory__WEBPACK_IMPORTED_MODULE_0__.inventory.gold}G`;\n};\nconst toggleInventory = () => {\n    var _a;\n    const overlay = document.createElement('div');\n    overlay.id = \"overlay\";\n    const isInventoryHidden = (_a = document.getElementById(\"inventory\")) === null || _a === void 0 ? void 0 : _a.classList.contains('hidden');\n    const toggle = () => { var _a; return (_a = document.getElementById(\"inventory\")) === null || _a === void 0 ? void 0 : _a.classList.toggle(\"hidden\"); };\n    if (isInventoryHidden) {\n        toggle();\n        overlay.classList.add('overlay');\n        document.body.appendChild(overlay);\n        overlay.addEventListener(\"click\", () => {\n            toggleInventory();\n        });\n        return;\n    }\n    toggle();\n    document.body.removeChild(document.getElementById('overlay'));\n};\n\n\n//# sourceURL=webpack://tom-rpg/./src/object/inventory/animation.ts?");

/***/ }),

/***/ "./src/object/map/Portal.ts":
/*!**********************************!*\
  !*** ./src/object/map/Portal.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Portal\": () => (/* binding */ Portal)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/object/map/index.ts\");\n/* harmony import */ var _store_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/maps */ \"./src/store/maps.ts\");\n/* harmony import */ var _util_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/object */ \"./src/util/object.ts\");\n\n\n\nclass Portal {\n    constructor(mapEl, direction, currentMapId, nextMapId) {\n        this.currentMapId = \"\";\n        this.nextMapId = \"\";\n        this.mapEl = mapEl;\n        this.direction = direction;\n        this.currentMapId = currentMapId;\n        this.nextMapId = nextMapId;\n        const el = document.createElement(\"div\");\n        el.classList.add(\"portal\");\n        el.classList.add(direction);\n        mapEl.appendChild(el);\n        el.addEventListener(\"click\", () => {\n            this.moveToNextMap(this.nextMapId);\n        });\n    }\n    moveToNextMap(id) {\n        const mapContainerEl = document.getElementById(\"map-container\");\n        // mapContainerEl?.removeChild(document.getElementById(this.currentMapId)!);\n        document.getElementById(this.currentMapId).style.display = \"none\";\n        const isDuplicated = _store_maps__WEBPACK_IMPORTED_MODULE_1__.mapsStore.mapsList.find((map) => map.id === id);\n        if (!isDuplicated) {\n            const map = new ___WEBPACK_IMPORTED_MODULE_0__[\"default\"](id, this.direction === \"south\" ? this.currentMapId : undefined, this.direction === \"west\" ? this.currentMapId : undefined, this.direction === \"north\" ? this.currentMapId : undefined, this.direction === \"east\" ? this.currentMapId : undefined);\n            _store_maps__WEBPACK_IMPORTED_MODULE_1__.mapsStore.addMap(map);\n            this.changeMap(true);\n        }\n        else\n            this.changeMap(false);\n        _store_maps__WEBPACK_IMPORTED_MODULE_1__.mapsStore.setCurrentMap(id);\n    }\n    changeMap(createNew) {\n        var _a;\n        document.getElementById(\"map-id\").innerHTML = `현재 맵 ID : ${this.nextMapId}`;\n        const changingMapUi = document.createElement(\"div\");\n        (_a = document.getElementById(\"root\")) === null || _a === void 0 ? void 0 : _a.appendChild(changingMapUi);\n        changingMapUi.classList.add(\"change-map-ui\");\n        _store_maps__WEBPACK_IMPORTED_MODULE_1__.mapsStore.isChanging = true;\n        (0,_util_object__WEBPACK_IMPORTED_MODULE_2__.deleteAllEnemies)();\n        setTimeout(() => {\n            (0,_util_object__WEBPACK_IMPORTED_MODULE_2__.createRandomEnemies)();\n        }, 500);\n        setTimeout(() => {\n            var _a;\n            (_a = document.getElementById(\"root\")) === null || _a === void 0 ? void 0 : _a.removeChild(changingMapUi);\n            _store_maps__WEBPACK_IMPORTED_MODULE_1__.mapsStore.isChanging = false;\n        }, 1000);\n        document.getElementById(this.currentMapId).style.display = \"none\";\n        document.getElementById(this.nextMapId).style.display = \"block\";\n    }\n}\n\n\n//# sourceURL=webpack://tom-rpg/./src/object/map/Portal.ts?");

/***/ }),

/***/ "./src/object/map/index.ts":
/*!*********************************!*\
  !*** ./src/object/map/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Map)\n/* harmony export */ });\n/* harmony import */ var _store_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/maps */ \"./src/store/maps.ts\");\n/* harmony import */ var _util_generateRandomId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/generateRandomId */ \"./src/util/generateRandomId.ts\");\n/* harmony import */ var _moving_player_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moving/player/Player */ \"./src/object/moving/player/Player.ts\");\n/* harmony import */ var _moving_player_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moving/player/animation */ \"./src/object/moving/player/animation.ts\");\n/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Portal */ \"./src/object/map/Portal.ts\");\n\n\n\n\n\nconst rootMap = document.getElementById(\"map-container\");\nclass Map {\n    get viewport() {\n        return {\n            horizontal: document.getElementById(`${this.id}`).offsetWidth,\n            vertical: document.getElementById(`${this.id}`).offsetHeight,\n        };\n    }\n    constructor(id, northId, eastId, southId, westId) {\n        this.id = id;\n        this.el = document.createElement(\"div\");\n        this.el.classList.add(\"map\");\n        this.el.id = `${this.id}`;\n        this.northId = northId !== null && northId !== void 0 ? northId : (0,_util_generateRandomId__WEBPACK_IMPORTED_MODULE_1__.mapId)();\n        this.eastId = eastId !== null && eastId !== void 0 ? eastId : (0,_util_generateRandomId__WEBPACK_IMPORTED_MODULE_1__.mapId)();\n        this.southId = southId !== null && southId !== void 0 ? southId : (0,_util_generateRandomId__WEBPACK_IMPORTED_MODULE_1__.mapId)();\n        this.westId = westId !== null && westId !== void 0 ? westId : (0,_util_generateRandomId__WEBPACK_IMPORTED_MODULE_1__.mapId)();\n        rootMap.append(this.el);\n        document.getElementById(this.id).addEventListener(\"mousedown\", (e) => {\n            if (!_store_maps__WEBPACK_IMPORTED_MODULE_0__.mapsStore.isChanging) {\n                _moving_player_Player__WEBPACK_IMPORTED_MODULE_2__.player.move(e.clientX, e.clientY);\n                (0,_moving_player_animation__WEBPACK_IMPORTED_MODULE_3__.setClickTargetAnimation)({ x: e.clientX, y: e.clientY });\n            }\n        });\n        this.createPortal();\n    }\n    createPortal() {\n        const northPortal = new _Portal__WEBPACK_IMPORTED_MODULE_4__.Portal(this.el, \"north\", this.id, this.northId);\n        const eastPortal = new _Portal__WEBPACK_IMPORTED_MODULE_4__.Portal(this.el, \"east\", this.id, this.eastId);\n        const southPortal = new _Portal__WEBPACK_IMPORTED_MODULE_4__.Portal(this.el, \"south\", this.id, this.southId);\n        const westPortal = new _Portal__WEBPACK_IMPORTED_MODULE_4__.Portal(this.el, \"west\", this.id, this.westId);\n    }\n}\n\n\n//# sourceURL=webpack://tom-rpg/./src/object/map/index.ts?");

/***/ }),

/***/ "./src/object/moving/bullet/Bullet.ts":
/*!********************************************!*\
  !*** ./src/object/moving/bullet/Bullet.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bullet\": () => (/* binding */ Bullet)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/object/moving/index.ts\");\n/* harmony import */ var _player_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/Player */ \"./src/object/moving/player/Player.ts\");\n/* harmony import */ var _store_enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/enemy */ \"./src/store/enemy.ts\");\n/* harmony import */ var _store_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/maps */ \"./src/store/maps.ts\");\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar _Bullet_instances, _Bullet_targetEnemy, _Bullet_hitEnemy;\n\n\n\n\nclass Bullet extends ___WEBPACK_IMPORTED_MODULE_0__.MovingObject {\n    constructor(className, id, power) {\n        super(className, id);\n        _Bullet_instances.add(this);\n        _Bullet_targetEnemy.set(this, undefined);\n        this.power = power;\n    }\n    init() {\n        const playerPos = _player_Player__WEBPACK_IMPORTED_MODULE_1__.player.position;\n        this.setPos({ x: playerPos.x, y: playerPos.y });\n    }\n    setPos(position) {\n        super.setPos(position);\n        this.findTargetEnemy();\n        if (__classPrivateFieldGet(this, _Bullet_targetEnemy, \"f\") && !this.isHit) {\n            __classPrivateFieldGet(this, _Bullet_instances, \"m\", _Bullet_hitEnemy).call(this);\n            return;\n        }\n    }\n    destroy() {\n        if (document.getElementById(this.id)) {\n            document.getElementById(_store_maps__WEBPACK_IMPORTED_MODULE_3__.mapsStore.currentMap.id).removeChild(this.el);\n        }\n    }\n    findTargetEnemy() {\n        __classPrivateFieldSet(this, _Bullet_targetEnemy, _store_enemy__WEBPACK_IMPORTED_MODULE_2__.enemyStore.enemiesList.find((e) => Math.abs(e.position.x - this.position.x) < 30 &&\n            Math.abs(e.position.y - this.position.y) < 30), \"f\");\n    }\n    transfer() {\n        super.transfer();\n        const { nextX, nextY } = this.nextPosition;\n        if (Math.abs(nextX - this.position.x) < 10 &&\n            Math.abs(nextY - this.position.y) < 10) {\n            this.destroy();\n        }\n    }\n}\n_Bullet_targetEnemy = new WeakMap(), _Bullet_instances = new WeakSet(), _Bullet_hitEnemy = function _Bullet_hitEnemy() {\n    this.destroy();\n    this.isHit = true;\n    __classPrivateFieldGet(this, _Bullet_targetEnemy, \"f\").hit(this.power);\n    __classPrivateFieldSet(this, _Bullet_targetEnemy, undefined, \"f\");\n    return;\n};\n\n\n//# sourceURL=webpack://tom-rpg/./src/object/moving/bullet/Bullet.ts?");

/***/ }),

/***/ "./src/object/moving/enemy/Enemy.ts":
/*!******************************************!*\
  !*** ./src/object/moving/enemy/Enemy.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Enemy)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/object/moving/index.ts\");\n/* harmony import */ var _server_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server/server */ \"./src/server/server.ts\");\n/* harmony import */ var _store_enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/enemy */ \"./src/store/enemy.ts\");\n/* harmony import */ var _store_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/maps */ \"./src/store/maps.ts\");\n/* harmony import */ var _util_calculate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/calculate */ \"./src/util/calculate.ts\");\n/* harmony import */ var _inventory_Inventory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../inventory/Inventory */ \"./src/object/inventory/Inventory.ts\");\n/* harmony import */ var _inventory_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../inventory/animation */ \"./src/object/inventory/animation.ts\");\n/* harmony import */ var _player_Player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../player/Player */ \"./src/object/moving/player/Player.ts\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animation */ \"./src/object/moving/enemy/animation.ts\");\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Enemy_instances, _Enemy_type, _Enemy_gold, _Enemy_ui, _Enemy_power, _Enemy_moveRandomly;\n\n\n\n\n\n\n\n\n\nclass Enemy extends ___WEBPACK_IMPORTED_MODULE_0__.MovingObject {\n    constructor(dependencies) {\n        const { className, id, type, gold, health, power } = dependencies;\n        super(className, id);\n        _Enemy_instances.add(this);\n        _Enemy_type.set(this, void 0);\n        _Enemy_gold.set(this, void 0);\n        _Enemy_ui.set(this, new _animation__WEBPACK_IMPORTED_MODULE_8__.EnemyUi(this.el));\n        _Enemy_power.set(this, void 0);\n        this.el.id = id;\n        this.el.classList.add(\"enemy\");\n        __classPrivateFieldSet(this, _Enemy_type, type, \"f\");\n        this.health = health;\n        __classPrivateFieldSet(this, _Enemy_gold, gold, \"f\");\n        __classPrivateFieldSet(this, _Enemy_power, power, \"f\");\n        __classPrivateFieldGet(this, _Enemy_ui, \"f\").setHitAnimationContainer();\n        this.setPos({\n            x: (0,_util_calculate__WEBPACK_IMPORTED_MODULE_4__.transferToInteger)(Math.random() * (0,_util_calculate__WEBPACK_IMPORTED_MODULE_4__.randomPos)().x),\n            y: (0,_util_calculate__WEBPACK_IMPORTED_MODULE_4__.transferToInteger)(Math.random() * (0,_util_calculate__WEBPACK_IMPORTED_MODULE_4__.randomPos)().y),\n        });\n        __classPrivateFieldGet(this, _Enemy_ui, \"f\").setHpBar(this.health);\n        __classPrivateFieldGet(this, _Enemy_instances, \"m\", _Enemy_moveRandomly).call(this);\n    }\n    hit(power) {\n        super.hit(power);\n        __classPrivateFieldGet(this, _Enemy_ui, \"f\").decreaseHPBar(this.health);\n        if (this.health === 0) {\n            this.destroy();\n            return;\n        }\n        __classPrivateFieldGet(this, _Enemy_ui, \"f\").setHitAnimation();\n    }\n    destroy() {\n        _inventory_Inventory__WEBPACK_IMPORTED_MODULE_5__.inventory.addGold(__classPrivateFieldGet(this, _Enemy_gold, \"f\"));\n        (0,_inventory_animation__WEBPACK_IMPORTED_MODULE_6__.setAddGoldAnimation)(this.id, 20);\n        _server_server__WEBPACK_IMPORTED_MODULE_1__.server.saveData();\n        __classPrivateFieldGet(this, _Enemy_ui, \"f\").setDestoryAnimation();\n        document.getElementById(_store_maps__WEBPACK_IMPORTED_MODULE_3__.mapsStore.currentMap.id).removeChild(this.el);\n        _store_enemy__WEBPACK_IMPORTED_MODULE_2__.enemyStore.deleteEnemy(this.id);\n    }\n    setPos({ x, y }) {\n        super.setPos({ x, y });\n        if (Math.abs(this.position.x - _player_Player__WEBPACK_IMPORTED_MODULE_7__.player.position.x) < 30 &&\n            Math.abs(this.position.y - _player_Player__WEBPACK_IMPORTED_MODULE_7__.player.position.y) < 30) {\n            _player_Player__WEBPACK_IMPORTED_MODULE_7__.player.adjacentEnemy = this;\n            if (!_player_Player__WEBPACK_IMPORTED_MODULE_7__.player.isHit)\n                _player_Player__WEBPACK_IMPORTED_MODULE_7__.player.hit();\n            return;\n        }\n    }\n}\n_Enemy_type = new WeakMap(), _Enemy_gold = new WeakMap(), _Enemy_ui = new WeakMap(), _Enemy_power = new WeakMap(), _Enemy_instances = new WeakSet(), _Enemy_moveRandomly = function _Enemy_moveRandomly() {\n    setInterval(() => {\n        this.move((0,_util_calculate__WEBPACK_IMPORTED_MODULE_4__.transferToInteger)(Math.random() * (0,_util_calculate__WEBPACK_IMPORTED_MODULE_4__.randomPos)().x), (0,_util_calculate__WEBPACK_IMPORTED_MODULE_4__.transferToInteger)(Math.random() * (0,_util_calculate__WEBPACK_IMPORTED_MODULE_4__.randomPos)().y));\n    }, 10000);\n};\n\n\n//# sourceURL=webpack://tom-rpg/./src/object/moving/enemy/Enemy.ts?");

/***/ }),

/***/ "./src/object/moving/enemy/animation.ts":
/*!**********************************************!*\
  !*** ./src/object/moving/enemy/animation.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EnemyUi\": () => (/* binding */ EnemyUi)\n/* harmony export */ });\nclass EnemyUi {\n    constructor(el) {\n        this.el = el;\n    }\n    setHpBar(health) {\n        const hpBarEl = document.createElement(\"div\");\n        hpBarEl.id = `${this.el.id}-hp-bar`;\n        this.el.appendChild(hpBarEl);\n        const hpBarStyle = {\n            width: `${health}px`,\n            height: \"10px\",\n            backgroundColor: \"red\",\n        };\n        Object.assign(hpBarEl.style, hpBarStyle);\n    }\n    decreaseHPBar(health) {\n        const hpBar = document.getElementById(`${this.el.id}-hp-bar`);\n        hpBar.style.width = `${health}px`;\n    }\n    setHitAnimation() {\n        var _a;\n        const hitAnimation = document.createElement(\"div\");\n        hitAnimation.classList.add(\"bullet-hit\");\n        setTimeout(() => {\n            var _a;\n            (_a = document.getElementById(this.el.id)) === null || _a === void 0 ? void 0 : _a.removeChild(hitAnimation);\n        }, 1000);\n        (_a = document.getElementById(this.el.id)) === null || _a === void 0 ? void 0 : _a.appendChild(hitAnimation);\n    }\n    setDestoryAnimation() {\n        this.el.classList.add(\"enemy-destroyed\");\n    }\n    setHitAnimationContainer() {\n        const hitAnimationContainer = document.createElement(\"div\");\n        hitAnimationContainer.id = `hit-animation-container-${this.el.id}`;\n        Object.assign(hitAnimationContainer.style, Object.assign(Object.assign({}, hitAnimationContainer.style), { position: \"relative\", width: \"100%\", height: \"100%\" }));\n        this.el.appendChild(hitAnimationContainer);\n    }\n}\n\n\n//# sourceURL=webpack://tom-rpg/./src/object/moving/enemy/animation.ts?");

/***/ }),

/***/ "./src/object/moving/index.ts":
/*!************************************!*\
  !*** ./src/object/moving/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovingObject\": () => (/* binding */ MovingObject)\n/* harmony export */ });\n/* harmony import */ var _store_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/maps */ \"./src/store/maps.ts\");\n/* harmony import */ var _util_calculate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/calculate */ \"./src/util/calculate.ts\");\n\n\nclass MovingObject {\n    constructor(className, id) {\n        var _a;\n        this.el = document.createElement(\"div\");\n        this.position = { x: 0, y: 0 };\n        this.nextPosition = null;\n        this.speed = { value: 10, xSpeed: 0, ySpeed: 0 };\n        this.health = 100;\n        this.power = 0;\n        this.isHit = false;\n        this.id = id;\n        this.el.id = id;\n        this.el.classList.add(className);\n        if (document.readyState === \"complete\") {\n            document.getElementById((_a = _store_maps__WEBPACK_IMPORTED_MODULE_0__.mapsStore.currentMap) === null || _a === void 0 ? void 0 : _a.id).appendChild(this.el);\n        }\n    }\n    setPos({ x, y }) {\n        this.position = Object.assign(Object.assign({}, this.position), { x, y });\n        this.el.style.top = `${y}px`;\n        this.el.style.left = `${x}px`;\n    }\n    move(nextX, nextY) {\n        this.nextPosition = { nextX, nextY };\n        this.setSpeed(nextX, nextY);\n        requestAnimationFrame(() => {\n            this.transfer();\n        });\n    }\n    transfer() {\n        const { nextX, nextY } = this.nextPosition;\n        const { xSpeed, ySpeed } = this.speed;\n        if (Math.abs(nextX - this.position.x) < 10 &&\n            Math.abs(nextY - this.position.y) < 10) {\n            return;\n        }\n        const { x, y } = this.position;\n        let newPosition = { x, y };\n        if (this.position.x < nextX && this.position.y < nextY) {\n            newPosition = {\n                x: x + xSpeed,\n                y: y + ySpeed,\n            };\n        }\n        if (this.position.x < nextX && this.position.y > nextY) {\n            newPosition = {\n                x: x + xSpeed,\n                y: y - ySpeed,\n            };\n        }\n        if (this.position.x > nextX && this.position.y < nextY) {\n            newPosition = {\n                x: x - xSpeed,\n                y: y + ySpeed,\n            };\n        }\n        if (this.position.x > nextX && this.position.y > nextY) {\n            newPosition = {\n                x: x - xSpeed,\n                y: y - ySpeed,\n            };\n        }\n        this.setPos(newPosition);\n        requestAnimationFrame(() => this.transfer());\n    }\n    setSpeed(nextX, nextY) {\n        const distance = (0,_util_calculate__WEBPACK_IMPORTED_MODULE_1__.calcHypotenuse)(this.position.x, this.position.y, nextX, nextY);\n        this.speed.xSpeed =\n            (Math.abs(nextX - this.position.x) / distance) * this.speed.value;\n        this.speed.ySpeed =\n            (Math.abs(nextY - this.position.y) / distance) * this.speed.value;\n    }\n    hit(power) {\n        this.health -= power;\n    }\n    setPower(power) {\n        this.power = power;\n    }\n}\n\n\n//# sourceURL=webpack://tom-rpg/./src/object/moving/index.ts?");

/***/ }),

/***/ "./src/object/moving/player/Player.ts":
/*!********************************************!*\
  !*** ./src/object/moving/player/Player.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player),\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _bullet_Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bullet/Bullet */ \"./src/object/moving/bullet/Bullet.ts\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/object/moving/index.ts\");\n/* harmony import */ var _store_enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/enemy */ \"./src/store/enemy.ts\");\n/* harmony import */ var _store_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/maps */ \"./src/store/maps.ts\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation */ \"./src/object/moving/player/animation.ts\");\n/* harmony import */ var _server_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/server */ \"./src/server/server.ts\");\n/* harmony import */ var _game_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../game/modal */ \"./src/game/modal.ts\");\n/* harmony import */ var _inventory_Inventory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../inventory/Inventory */ \"./src/object/inventory/Inventory.ts\");\n/* harmony import */ var _util_calculate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/calculate */ \"./src/util/calculate.ts\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/button */ \"./src/ui/button.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Player_ui, _Player_cursorPosition;\n\n\n\n\n\n\n\n\n\n\nclass Player extends ___WEBPACK_IMPORTED_MODULE_1__.MovingObject {\n    static getInstance() {\n        if (!Player.instance) {\n            Player.instance = new Player(\"player\", \"player\");\n        }\n        return Player.instance;\n    }\n    constructor(className, id) {\n        super(className, id);\n        _Player_ui.set(this, new _animation__WEBPACK_IMPORTED_MODULE_4__.PlayerUi(this.el));\n        this.adjacentEnemy = undefined;\n        _Player_cursorPosition.set(this, {\n            x: 0,\n            y: 0,\n        });\n        document.getElementById(\"root\").appendChild(this.el);\n        this.maxHealth = 150;\n        this.health = 150;\n        this.power = 10;\n        this.maxMana = 100;\n        this.mana = 100;\n    }\n    reInitialize() {\n        this.health = this.maxHealth;\n        __classPrivateFieldGet(this, _Player_ui, \"f\").setHpStatus();\n        document.getElementById(\"root\").appendChild(this.el);\n        _inventory_Inventory__WEBPACK_IMPORTED_MODULE_7__.inventory.setGold((0,_util_calculate__WEBPACK_IMPORTED_MODULE_8__.decreasedValueByPercent)(_inventory_Inventory__WEBPACK_IMPORTED_MODULE_7__.inventory.gold, 20));\n    }\n    initialize() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const res = yield _server_server__WEBPACK_IMPORTED_MODULE_5__.server.getServerData();\n            if (typeof res !== \"string\") {\n                this.health = res.player.health;\n                this.setPos({ x: res.player.position.x, y: res.player.position.y });\n                this.maxHealth = res.player.maxHealth;\n                __classPrivateFieldGet(this, _Player_ui, \"f\").setHpStatus();\n            }\n            else {\n                this.setPos({ x: 0, y: 0 });\n            }\n            document.body.onmousemove = (event) => {\n                __classPrivateFieldGet(this, _Player_cursorPosition, \"f\").x = event.clientX;\n                __classPrivateFieldGet(this, _Player_cursorPosition, \"f\").y = event.clientY;\n            };\n        });\n    }\n    attack() {\n        const bullet = new _bullet_Bullet__WEBPACK_IMPORTED_MODULE_0__.Bullet(\"bullet\", `bullet-${new Date().toISOString()}`, this.power);\n        this.el.classList.add(\"attack\");\n        if (this.position.x < __classPrivateFieldGet(this, _Player_cursorPosition, \"f\").x) {\n            this.el.classList.add(\"reverse-direction\");\n        }\n        if (this.position.x > __classPrivateFieldGet(this, _Player_cursorPosition, \"f\").x) {\n            this.el.classList.remove(\"reverse-direction\");\n        }\n        bullet.init();\n        setTimeout(() => {\n            bullet.move(__classPrivateFieldGet(this, _Player_cursorPosition, \"f\").x, __classPrivateFieldGet(this, _Player_cursorPosition, \"f\").y);\n        }, 100);\n        setTimeout(() => {\n            this.el.classList.remove(\"attack\");\n        }, 500);\n    }\n    move(nextX, nextY) {\n        if (nextX < _store_maps__WEBPACK_IMPORTED_MODULE_3__.mapsStore.currentMap.viewport.horizontal - 20 &&\n            nextY < _store_maps__WEBPACK_IMPORTED_MODULE_3__.mapsStore.currentMap.viewport.vertical - 20) {\n            this.el.classList.add(\"move\");\n            if (this.position.x < nextX) {\n                this.el.classList.add(\"reverse-direction\");\n            }\n            else if (this.position.x > nextX) {\n                this.el.classList.remove(\"reverse-direction\");\n            }\n            super.move(nextX, nextY);\n        }\n    }\n    setPos({ x, y }) {\n        super.setPos({ x, y });\n        this.findAdjacentEnemy();\n        if (this.adjacentEnemy && !this.isHit) {\n            this.hit();\n            return;\n        }\n    }\n    hit() {\n        const { power } = this.adjacentEnemy;\n        super.hit(power);\n        this.isHit = true;\n        __classPrivateFieldGet(this, _Player_ui, \"f\").setHpStatus();\n        if (this.health <= 0) {\n            this.destroy();\n        }\n        __classPrivateFieldGet(this, _Player_ui, \"f\").setHitAnimation();\n        __classPrivateFieldGet(this, _Player_ui, \"f\").showHitDamage(power);\n        setTimeout(() => {\n            this.isHit = false;\n        }, 1000);\n        this.adjacentEnemy = undefined;\n        return;\n    }\n    findAdjacentEnemy() {\n        this.adjacentEnemy = _store_enemy__WEBPACK_IMPORTED_MODULE_2__.enemyStore.enemiesList.find((e) => Math.abs(e.position.x - this.position.x) < 30 &&\n            Math.abs(e.position.y - this.position.y) < 30);\n    }\n    transfer() {\n        const { nextX, nextY } = this.nextPosition;\n        if (Math.abs(nextX - this.position.x) < 10 &&\n            Math.abs(nextY - this.position.y) < 10) {\n            setTimeout(() => {\n                this.el.classList.remove(\"move\");\n            }, 300);\n        }\n        super.transfer();\n    }\n    destroy() {\n        document.getElementById(\"root\").removeChild(this.el);\n        const modal = new _game_modal__WEBPACK_IMPORTED_MODULE_6__.Modal();\n        modal.setText(\"사망하셨습니다. 골드가 20% 차감된 상태로 부활합니다\");\n        const confirm = (0,_ui_button__WEBPACK_IMPORTED_MODULE_9__.button)(\"확인\", () => {\n            modal.hideModal();\n            this.reInitialize();\n        });\n        modal.setButtons([confirm]);\n    }\n}\n_Player_ui = new WeakMap(), _Player_cursorPosition = new WeakMap();\nconst player = Player.getInstance();\n\n\n\n//# sourceURL=webpack://tom-rpg/./src/object/moving/player/Player.ts?");

/***/ }),

/***/ "./src/object/moving/player/animation.ts":
/*!***********************************************!*\
  !*** ./src/object/moving/player/animation.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayerUi\": () => (/* binding */ PlayerUi),\n/* harmony export */   \"setClickTargetAnimation\": () => (/* binding */ setClickTargetAnimation)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/object/moving/player/Player.ts\");\n\nclass PlayerUi {\n    constructor(el) {\n        this.el = el;\n    }\n    setHpStatus() {\n        document.getElementsByClassName(\"player-hp\")[0].style.height = `${(_Player__WEBPACK_IMPORTED_MODULE_0__.player.health / _Player__WEBPACK_IMPORTED_MODULE_0__.player.maxHealth) * 150}px`;\n    }\n    setHitAnimation() {\n        this.el.classList.add(\"hit\");\n        setTimeout(() => {\n            this.el.classList.remove(\"hit\");\n        }, 1000);\n    }\n    showHitDamage(damage) {\n        const damageEl = document.createElement(\"div\");\n        if (this.el.id.includes(\"player\")) {\n            damageEl.classList.add(\"player-hit-damage\");\n        }\n        damageEl.innerHTML = damage.toString();\n        this.el.appendChild(damageEl);\n        setTimeout(() => {\n            this.el.removeChild(damageEl);\n        }, 1000);\n    }\n}\nconst setClickTargetAnimation = (clikedPositon) => {\n    var _a;\n    const targetEl = document.createElement(\"div\");\n    targetEl.style.position = \"absolute\";\n    targetEl.style.zIndex = \"999\";\n    targetEl.style.top = `${clikedPositon.y}px`;\n    targetEl.style.left = `${clikedPositon.x}px`;\n    targetEl.classList.add(\"clicked\");\n    (_a = document.getElementById(\"root\")) === null || _a === void 0 ? void 0 : _a.appendChild(targetEl);\n    setTimeout(() => {\n        var _a;\n        (_a = document.getElementById(\"root\")) === null || _a === void 0 ? void 0 : _a.removeChild(targetEl);\n    }, 1000);\n};\n\n\n//# sourceURL=webpack://tom-rpg/./src/object/moving/player/animation.ts?");

/***/ }),

/***/ "./src/server/firebase.ts":
/*!********************************!*\
  !*** ./src/server/firebase.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"provider\": () => (/* binding */ provider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\n\nconsole.log(\"development\", process.env.DEV_FIREBASE_API_KEY);\nconst firebaseConfig = {\n    apiKey:  true ? process.env.DEV_FIREBASE_API_KEY : 0,\n    authDomain: \"tom-rpg-db.firebaseapp.com\",\n    projectId: \"tom-rpg-db\",\n    storageBucket: \"tom-rpg-db.appspot.com\",\n    messagingSenderId: \"682024612709\",\n    appId: \"1:682024612709:web:9ae6b46fe7880e9a00278c\",\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\n\n\n//# sourceURL=webpack://tom-rpg/./src/server/firebase.ts?");

/***/ }),

/***/ "./src/server/http.ts":
/*!****************************!*\
  !*** ./src/server/http.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"http\": () => (/* binding */ http)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Http_URL;\nclass Http {\n    constructor() {\n        _Http_URL.set(this, \"https://tom-rpg-db-default-rtdb.firebaseio.com\");\n    }\n    fetch(config) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                return (yield fetch(`${__classPrivateFieldGet(this, _Http_URL, \"f\")}/${config === null || config === void 0 ? void 0 : config.param}`, Object.assign({ headers: (config === null || config === void 0 ? void 0 : config.body)\n                        ? {\n                            \"Content-Type\": \"application/json\",\n                        }\n                        : config === null || config === void 0 ? void 0 : config.headers }, config))).json();\n            }\n            catch (e) {\n                if (e instanceof Error) {\n                    return e.message;\n                }\n                throw new Error(\"unexpected error is occur\");\n            }\n        });\n    }\n}\n_Http_URL = new WeakMap();\nconst http = new Http();\n\n\n//# sourceURL=webpack://tom-rpg/./src/server/http.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ServerData\": () => (/* binding */ ServerData),\n/* harmony export */   \"server\": () => (/* binding */ server)\n/* harmony export */ });\n/* harmony import */ var _object_moving_player_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/moving/player/Player */ \"./src/object/moving/player/Player.ts\");\n/* harmony import */ var _object_inventory_Inventory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/inventory/Inventory */ \"./src/object/inventory/Inventory.ts\");\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ \"./src/server/http.ts\");\n/* harmony import */ var _auth_GoogleAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/GoogleAuth */ \"./src/auth/GoogleAuth.ts\");\n/* harmony import */ var _game_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/modal */ \"./src/game/modal.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nclass ServerData {\n    static getInstance() {\n        if (!ServerData.instance) {\n            ServerData.instance = new ServerData();\n        }\n        return ServerData.instance;\n    }\n    getServerData() {\n        var _a, _b;\n        return __awaiter(this, void 0, void 0, function* () {\n            const idToken = yield ((_a = _auth_GoogleAuth__WEBPACK_IMPORTED_MODULE_3__.auth.user) === null || _a === void 0 ? void 0 : _a.getIdToken());\n            return yield _http__WEBPACK_IMPORTED_MODULE_2__.http.fetch({\n                method: 'GET',\n                param: `users/${(_b = _auth_GoogleAuth__WEBPACK_IMPORTED_MODULE_3__.auth.user) === null || _b === void 0 ? void 0 : _b.uid}.json?auth=${idToken}`,\n            });\n        });\n    }\n    saveData() {\n        var _a, _b;\n        return __awaiter(this, void 0, void 0, function* () {\n            const idToken = yield ((_a = _auth_GoogleAuth__WEBPACK_IMPORTED_MODULE_3__.auth.user) === null || _a === void 0 ? void 0 : _a.getIdToken());\n            try {\n                const res = yield _http__WEBPACK_IMPORTED_MODULE_2__.http.fetch({\n                    method: \"PUT\",\n                    param: `users/${(_b = _auth_GoogleAuth__WEBPACK_IMPORTED_MODULE_3__.auth.user) === null || _b === void 0 ? void 0 : _b.uid}.json?auth=${idToken}`,\n                    body: JSON.stringify({\n                        user: _auth_GoogleAuth__WEBPACK_IMPORTED_MODULE_3__.auth.user,\n                        player: _object_moving_player_Player__WEBPACK_IMPORTED_MODULE_0__.player,\n                        inventory: _object_inventory_Inventory__WEBPACK_IMPORTED_MODULE_1__.inventory,\n                    }),\n                });\n            }\n            catch (e) {\n                const modal = new _game_modal__WEBPACK_IMPORTED_MODULE_4__.Modal();\n                modal.setText('저장이 실패하였습니다. 다시 시도해주세요.');\n                setTimeout(() => {\n                    modal.hideModal();\n                }, 1000);\n            }\n        });\n    }\n}\nconst server = ServerData.getInstance();\n\n\n\n//# sourceURL=webpack://tom-rpg/./src/server/server.ts?");

/***/ }),

/***/ "./src/store/enemy.ts":
/*!****************************!*\
  !*** ./src/store/enemy.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EnemyStore\": () => (/* binding */ EnemyStore),\n/* harmony export */   \"enemyStore\": () => (/* binding */ enemyStore)\n/* harmony export */ });\nclass EnemyStore {\n    constructor() {\n        this.enemies = [];\n    }\n    static getInstance() {\n        if (!EnemyStore.instance) {\n            EnemyStore.instance = new EnemyStore();\n        }\n        return EnemyStore.instance;\n    }\n    get enemiesList() {\n        return this.enemies;\n    }\n    addEnemy(enemyClass) {\n        this.enemies.push(enemyClass);\n    }\n    deleteEnemy(id) {\n        this.enemies = this.enemies.filter((enemy) => enemy.id !== id);\n    }\n    deleteAllEnemies() {\n        this.enemies = [];\n    }\n}\nconst enemyStore = EnemyStore.getInstance();\n\n\n\n//# sourceURL=webpack://tom-rpg/./src/store/enemy.ts?");

/***/ }),

/***/ "./src/store/maps.ts":
/*!***************************!*\
  !*** ./src/store/maps.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MapsStore\": () => (/* binding */ MapsStore),\n/* harmony export */   \"mapsStore\": () => (/* binding */ mapsStore)\n/* harmony export */ });\nclass MapsStore {\n    constructor() {\n        this.maps = [];\n        this.currentMap = undefined;\n        this.prevMap = undefined;\n        this.isChanging = false;\n    }\n    static getInstance() {\n        if (!MapsStore.instance) {\n            MapsStore.instance = new MapsStore();\n        }\n        return MapsStore.instance;\n    }\n    get mapsList() {\n        return this.maps;\n    }\n    addMap(newMap) {\n        this.maps.push(newMap);\n    }\n    setPrevMap(id) {\n        this.prevMap = this.maps.find((item) => item.id === id);\n    }\n    setCurrentMap(id) {\n        this.currentMap = this.maps.find((item) => item.id === id);\n    }\n}\nconst mapsStore = MapsStore.getInstance();\n\n\n\n//# sourceURL=webpack://tom-rpg/./src/store/maps.ts?");

/***/ }),

/***/ "./src/ui/button.ts":
/*!**************************!*\
  !*** ./src/ui/button.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"button\": () => (/* binding */ button)\n/* harmony export */ });\nconst button = (text, callback) => {\n    const buttonEl = document.createElement(\"button\");\n    buttonEl.innerHTML = text;\n    buttonEl.addEventListener(\"click\", () => callback());\n    return buttonEl;\n};\n\n\n//# sourceURL=webpack://tom-rpg/./src/ui/button.ts?");

/***/ }),

/***/ "./src/util/calculate.ts":
/*!*******************************!*\
  !*** ./src/util/calculate.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcHypotenuse\": () => (/* binding */ calcHypotenuse),\n/* harmony export */   \"decreasedValueByPercent\": () => (/* binding */ decreasedValueByPercent),\n/* harmony export */   \"randomPos\": () => (/* binding */ randomPos),\n/* harmony export */   \"transferToInteger\": () => (/* binding */ transferToInteger)\n/* harmony export */ });\n/* harmony import */ var _store_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/maps */ \"./src/store/maps.ts\");\n\nconst calcHypotenuse = (currentX, currentY, nextX, nextY) => {\n    return Math.sqrt(Math.pow(currentX - nextX, 2) + Math.pow(currentY - nextY, 2));\n};\nconst transferToInteger = (number) => {\n    return parseInt(number.toString());\n};\nconst randomPos = () => {\n    return {\n        x: transferToInteger(Math.random() * _store_maps__WEBPACK_IMPORTED_MODULE_0__.mapsStore.currentMap.viewport.horizontal),\n        y: transferToInteger(Math.random() * _store_maps__WEBPACK_IMPORTED_MODULE_0__.mapsStore.currentMap.viewport.vertical),\n    };\n};\nconst decreasedValueByPercent = (value, percent) => {\n    return value * ((100 - percent) / 100);\n};\n\n\n\n//# sourceURL=webpack://tom-rpg/./src/util/calculate.ts?");

/***/ }),

/***/ "./src/util/eventListenerHandler.ts":
/*!******************************************!*\
  !*** ./src/util/eventListenerHandler.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventListeners\": () => (/* binding */ eventListeners)\n/* harmony export */ });\n/* harmony import */ var _auth_GoogleAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/GoogleAuth */ \"./src/auth/GoogleAuth.ts\");\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/game */ \"./src/game/game.ts\");\n/* harmony import */ var _object_inventory_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/inventory/animation */ \"./src/object/inventory/animation.ts\");\n/* harmony import */ var _object_moving_player_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../object/moving/player/Player */ \"./src/object/moving/player/Player.ts\");\n/* harmony import */ var _object_moving_player_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../object/moving/player/animation */ \"./src/object/moving/player/animation.ts\");\n/* harmony import */ var _store_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/maps */ \"./src/store/maps.ts\");\n\n\n\n\n\n\nconst addInventoryToggleEvent = () => {\n    var _a;\n    (_a = document\n        .getElementById(\"inventory-toggle-btn\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\n        (0,_object_inventory_animation__WEBPACK_IMPORTED_MODULE_2__.toggleInventory)();\n    });\n};\nconst addPlayerMoveEvent = () => {\n    var _a;\n    document\n        .getElementById((_a = _store_maps__WEBPACK_IMPORTED_MODULE_5__.mapsStore.currentMap) === null || _a === void 0 ? void 0 : _a.id)\n        .addEventListener(\"mousedown\", (e) => {\n        if (!_store_maps__WEBPACK_IMPORTED_MODULE_5__.mapsStore.isChanging) {\n            _object_moving_player_Player__WEBPACK_IMPORTED_MODULE_3__.player.move(e.clientX, e.clientY);\n            (0,_object_moving_player_animation__WEBPACK_IMPORTED_MODULE_4__.setClickTargetAnimation)({ x: e.clientX, y: e.clientY });\n        }\n    });\n};\nconst addPlayerAttackEvent = () => {\n    document.addEventListener(\"keydown\", (e) => {\n        if (e.key.toLowerCase() === \"a\" || e.key === \"ㅁ\") {\n            _object_moving_player_Player__WEBPACK_IMPORTED_MODULE_3__.player.attack();\n        }\n    });\n};\nconst addSignInEvent = () => {\n    document.getElementById(\"signin-button\").addEventListener(\"click\", () => {\n        _auth_GoogleAuth__WEBPACK_IMPORTED_MODULE_0__.auth.signIn();\n    });\n};\n// const addSignUpEvent = () => {\n//   document.getElementById(\"signup-button\")!.addEventListener(\"click\", () => {\n//     // auth.signUp();\n//   });\n// };\nconst addSignOutEvent = () => {\n    document.getElementById(\"signout-button\").addEventListener(\"click\", () => {\n        // auth.signOut();\n    });\n};\nconst addEnterGameEvent = () => {\n    var _a;\n    (_a = document\n        .getElementById(\"enter-game-button\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\n        _game_game__WEBPACK_IMPORTED_MODULE_1__.game.start();\n    });\n};\nconst eventListeners = [\n    addInventoryToggleEvent,\n    addPlayerMoveEvent,\n    addPlayerAttackEvent,\n    addSignInEvent,\n    // addSignUpEvent,\n    addSignOutEvent,\n    addEnterGameEvent,\n];\n\n\n//# sourceURL=webpack://tom-rpg/./src/util/eventListenerHandler.ts?");

/***/ }),

/***/ "./src/util/generateRandomId.ts":
/*!**************************************!*\
  !*** ./src/util/generateRandomId.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mapId\": () => (/* binding */ mapId)\n/* harmony export */ });\nconst mapId = () => {\n    return `map-${Date.now()}-${Math.random() * 1000}`;\n};\n\n\n//# sourceURL=webpack://tom-rpg/./src/util/generateRandomId.ts?");

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventListeners\": () => (/* reexport safe */ _eventListenerHandler__WEBPACK_IMPORTED_MODULE_0__.eventListeners)\n/* harmony export */ });\n/* harmony import */ var _eventListenerHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListenerHandler */ \"./src/util/eventListenerHandler.ts\");\n\n\n\n//# sourceURL=webpack://tom-rpg/./src/util/index.ts?");

/***/ }),

/***/ "./src/util/object.ts":
/*!****************************!*\
  !*** ./src/util/object.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEnemies\": () => (/* binding */ createEnemies),\n/* harmony export */   \"createEnemy\": () => (/* binding */ createEnemy),\n/* harmony export */   \"createRandomEnemies\": () => (/* binding */ createRandomEnemies),\n/* harmony export */   \"deleteAllEnemies\": () => (/* binding */ deleteAllEnemies)\n/* harmony export */ });\n/* harmony import */ var _object_moving_enemy_Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/moving/enemy/Enemy */ \"./src/object/moving/enemy/Enemy.ts\");\n/* harmony import */ var _store_enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/enemy */ \"./src/store/enemy.ts\");\n/* harmony import */ var _store_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/maps */ \"./src/store/maps.ts\");\n\n\n\nconst enemyList = [\n    {\n        type: \"slime\",\n        health: 20,\n        probability: 0.7,\n        gold: 20,\n        power: 20\n    },\n    {\n        type: \"goblin\",\n        health: 100,\n        probability: 0.3,\n        gold: 100,\n        power: 50\n    },\n];\nconst createEnemies = (type) => {\n    setInterval(() => {\n        if (_store_enemy__WEBPACK_IMPORTED_MODULE_1__.enemyStore.enemiesList.length === 10) {\n            return;\n        }\n        createEnemy(type);\n    }, 50);\n};\nconst createRandomEnemyTypeWithProbability = () => {\n    const randomNum = Math.random();\n    enemyList.sort((a, b) => a.probability - b.probability);\n    let enemyType = 'slime';\n    let acc = 0;\n    for (let i = 0; i < enemyList.length; i++) {\n        acc += enemyList[i].probability;\n        if (acc >= randomNum) {\n            enemyType = enemyList[i].type;\n            break;\n        }\n    }\n    return enemyType;\n};\nconst createRandomEnemies = () => {\n    const randomEnemyType = createRandomEnemyTypeWithProbability();\n    createEnemyRecursively(randomEnemyType);\n};\nconst createEnemyRecursively = (randomEnemyType) => {\n    if (_store_enemy__WEBPACK_IMPORTED_MODULE_1__.enemyStore.enemiesList.length === 10) {\n        return;\n    }\n    createEnemy(randomEnemyType);\n    createEnemyRecursively(randomEnemyType);\n};\nconst createEnemy = (type) => {\n    const { health, gold, power } = enemyList.find(e => e.type === type);\n    const enemy = new _object_moving_enemy_Enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        className: `${type}`,\n        id: `${type}-${new Date().toISOString()}`,\n        type,\n        gold,\n        health,\n        power\n    });\n    _store_enemy__WEBPACK_IMPORTED_MODULE_1__.enemyStore.addEnemy(enemy);\n};\nconst deleteAllEnemies = () => {\n    _store_enemy__WEBPACK_IMPORTED_MODULE_1__.enemyStore.deleteAllEnemies();\n    Array.from(document.getElementsByClassName(\"enemy\")).map((el) => {\n        var _a;\n        (_a = document.getElementById(_store_maps__WEBPACK_IMPORTED_MODULE_2__.mapsStore.currentMap.id)) === null || _a === void 0 ? void 0 : _a.removeChild(el);\n    });\n};\n\n\n//# sourceURL=webpack://tom-rpg/./src/util/object.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"game": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktom_rpg"] = self["webpackChunktom_rpg"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["firebase","node_modules1"], () => (__webpack_require__("./src/game/game.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;