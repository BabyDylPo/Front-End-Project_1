/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n    constructor() {\n        // 1. Create a Date object.\n        const currentTime = new Date();\n\n        // 2. Store the hour, minute, and second.\n        this.hours = currentTime.getHours();\n        this.minutes = currentTime.getMinutes();\n        this.seconds = currentTime.getSeconds();\n\n        // 3. Call printTime.\n        this.printTime();\n\n        // 4. Schedule the tick at 1 second intervals.\n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    printTime() {\n        // Format the time in HH:MM:SS\n        const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n        // let clockHeader = document.getElementById('clock');\n\n        // Use jquery\n        Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString, clockElement);\n        // Use console.log to print it.\n        // console.log(timeString);\n\n        return timeString;\n    }\n\n    _tick() {\n        // 1. Increment the time by one second.\n        this._incrementSeconds();\n\n        // 2. Call printTime.\n        this.printTime();\n    }\n\n    _incrementSeconds() {\n        // 1. Increment the time by one second.\n        this.seconds += 1;\n        if (this.seconds === 60) {\n            this.seconds = 0;\n            this._incrementMinutes();\n        }\n    }\n\n    _incrementMinutes() {\n        this.minutes += 1;\n        if (this.minutes === 60) {\n            this.minutes = 0;\n            this._incrementHours();\n        }\n    }\n\n    _incrementHours() {\n        this.hours = (this.hours + 1) % 24;\n    }\n}\n\nconst clockElement = document.getElementById('clock');\nconst clock = new Clock();\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nconst dogLinkCreator = () => {\n  // To iterate through the dog POJO \n  // I chose to create an Array of each one of the keys\n  // Then I will key into dogs[Array[i]]\n  // I think this will work... idk if some other way else is better... \n  // there's probably better ways\n  \n  // dogsKeyArray is an Array from the keys of the dogs Object\n  // used to iterate through the POJO of Dogs and their respective Links\n  let dogsKeyArray = Array.from(Object.keys(dogs));\n  // dogsLinksArray is used to easily iterate and transport all of the HTML links\n  let dogLinksArray = [];\n\n  // iterate through dogsKeyArray enabling dogKey to be able to key into dogs \n  dogsKeyArray.forEach(( dogKey ) => {\n    // create an <li> element template to attack dog name and link to\n    let $dogLink = $(\"<li></li>\");\n    $dogLink.addClass(\"dog-link\");\n\n    // linkCreator will create a new link and now we append to $dogLink\n    $dogLink.append(linkCreator(dogKey, dogs));\n    // store in dogLinksArray for use in attackDogLinks()\n    dogLinksArray.push($dogLink);\n  });\n\n  return dogLinksArray;\n}\n\nconst linkCreator = (key, object) => {\n  // creating an <a> element soon to be added to DOM\n  let $newLink = $(\"<a></a>\");\n\n  // set innerHTML to the key(name of dog)\n  $newLink.text(key);\n\n  // set href attribute to the value(link to dog information)\n  $newLink.attr(\"href\", object[key]);\n\n  return $newLink;\n}\n\nconst attachDogLinks = () => {\n  const $dropDownDogList = $(\".drop-down-dog-list\");\n  let dogLinks = dogLinkCreator();\n\n  // iterate through dogLinks and append the <li> elements to $dropDownDogList\n  dogLinks.forEach(( $link ) => {\n    // individual link appending happens below\n    $dropDownDogList.append($link);\n  })\n\n  // probably unnecessary\n  console.log(\"woof\")\n}\n\nconst handleEnter = () => {\n  // show list of dogs when mouse is over .drop-down-dog-nav\n  let $dropDownTrigger = $(\".drop-down-dog-nav\");\n  $dropDownTrigger.mouseenter(() => {\n    $(\".dog-link\").show();\n  });\n}\n\nconst handleLeave = () => {\n  // hide list of dogs when mouse is over .drop-down-dog-nav\n  let $dropDownTrigger = $(\".drop-down-dog-nav\");\n  $dropDownTrigger.mouseleave(() => {\n    $(\".dog-link\").hide();\n  });\n}\n\nattachDogLinks();\nhandleEnter();\nhandleLeave();\n\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(\"test\");\n\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n// htmlGenerator is going to take in a string and htmlElement\n// then create a new <p> element and append the string as a TextNode\n// then append the new <p> element to the htmlElement\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    // DOM WAY ---->\n    // let newEle = document.createElement('p');\n    // let newEleContent = document.createTextNode(string);\n    // newEle.appendChild(newEleContent);\n    \n    // It is interesting that append vs appendChild have \n    // very different results\n    // append() puts 'Party Time.' directly above 'Pocket Projects!'\n    // append() also moves 'Pocket Projects!' to the bottom of <body>\n    // appendChild() puts 'Party Time.' below with 5 <br> element in between\n    // using both append() and appendChild() together creates\n    // the ideal result with 'Pocket Projects!' directly above 'Party Time.'\n\n    // I will stick with appendChild() for now, no particular reason\n\n    // document.body.append(newEle, htmlElement);\n    // document.body.appendChild(newEle, htmlElement);\n\n    // JQUERY WAY ----->\n    // this works ideally and is simple\n\n    // $newEle is a <p> element \n    let $newEle = $(\"<p></p>\");\n    \n    // the param string is then added to the <p> element as text\n    $newEle.text(string);\n    \n    // $parentEle is a jquery object of the param htmlElement\n    let $parentEle = $(htmlElement);\n\n    // does $parentEle have any children? \n    let children = Array.from($parentEle.children())\n    // If Yes, then DESTROY THEM ALL\n    if (children) {\n        children.forEach((child) => {\n            child.remove();\n        })\n    }\n    // and move on as if nothing happened...\n\n    // $newEle object is then appended as a child to $parentEle\n    $parentEle.append($newEle);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });