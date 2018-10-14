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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/ts/modularToDoList.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/ts/lib/AbstractLists.ts":
/*!*****************************************!*\
  !*** ./wwwroot/ts/lib/AbstractLists.ts ***!
  \*****************************************/
/*! exports provided: AppendGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppendGrid\", function() { return AppendGrid; });\nvar AppendGrid = /** @class */ (function () {\r\n    function AppendGrid(list, addButton, itemRootSelector, addItemDataRoot, addBeforeButton) {\r\n        var _this = this;\r\n        this.list = list;\r\n        this.addButton = addButton;\r\n        this.itemRootSelector = itemRootSelector;\r\n        this.addItemDataRoot = addItemDataRoot;\r\n        this.addBeforeButton = addBeforeButton;\r\n        this.list.itemTemplate = this.itemTemplate;\r\n        this.list.itemsParent.addEventListener(\"click\", function (evt) {\r\n            var button = AppendGrid.findAncestor(evt.target, \"button\");\r\n            var target = AppendGrid.findAncestor(button, itemRootSelector);\r\n            if (target != null)\r\n                list.removeItem(target);\r\n        });\r\n        this.addButton.addEventListener(\"click\", function (evt) {\r\n            list.appendItem(_this.extractDataToAdd());\r\n        });\r\n        if (this.addBeforeButton) {\r\n            this.addBeforeButton.addEventListener(\"click\", function (evt) {\r\n                list.prependItem(_this.extractDataToAdd());\r\n            });\r\n        }\r\n    }\r\n    AppendGrid.findAncestor = function (n, selector) {\r\n        while (n != null && n.tagName != \"BODY\") {\r\n            if (n.matches && n.matches(selector))\r\n                return n;\r\n            else if (n.msMatchesSelector &&\r\n                n.msMatchesSelector(selector))\r\n                return n;\r\n            else if (n.webkitMatchesSelector\r\n                && n.webkitMatchesSelector(selector))\r\n                return n;\r\n            n = n.parentNode;\r\n        }\r\n        return null;\r\n    };\r\n    return AppendGrid;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./wwwroot/ts/lib/AbstractLists.ts?");

/***/ }),

/***/ "./wwwroot/ts/lib/plainList.ts":
/*!*************************************!*\
  !*** ./wwwroot/ts/lib/plainList.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar DOMList = /** @class */ (function () {\r\n    function DOMList(itemsParent) {\r\n        this.itemsParent = itemsParent;\r\n    }\r\n    DOMList.prototype.removeItem = function (node) {\r\n        this.itemsParent.removeChild(node);\r\n    };\r\n    DOMList.prototype.appendItem = function (itemData) {\r\n        this.itemsParent.appendChild(this.itemTemplate(itemData));\r\n    };\r\n    DOMList.prototype.prependItem = function (itemData) {\r\n        if (this.itemsParent.childElementCount === 0)\r\n            this.appendItem(itemData);\r\n        else\r\n            this.itemsParent.insertBefore(this.itemTemplate(itemData), this.itemsParent.firstChild);\r\n    };\r\n    DOMList.prototype.appendBefore = function (node, itemData) {\r\n        this.itemsParent.insertBefore(this.itemTemplate(itemData), node);\r\n    };\r\n    DOMList.prototype.appendAfter = function (node, itemData) {\r\n        if (node.nextSibling)\r\n            this.itemsParent.insertBefore(this.itemTemplate(itemData), node.nextSibling);\r\n        else\r\n            this.appendItem(itemData);\r\n    };\r\n    return DOMList;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOMList);\r\n\n\n//# sourceURL=webpack:///./wwwroot/ts/lib/plainList.ts?");

/***/ }),

/***/ "./wwwroot/ts/modularToDoList.ts":
/*!***************************************!*\
  !*** ./wwwroot/ts/modularToDoList.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_AbstractLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/AbstractLists */ \"./wwwroot/ts/lib/AbstractLists.ts\");\n/* harmony import */ var _lib_plainList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/plainList */ \"./wwwroot/ts/lib/plainList.ts\");\n// this modularToDoList.ts module\r\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar MyULAppendGrid = /** @class */ (function (_super) {\r\n    __extends(MyULAppendGrid, _super);\r\n    function MyULAppendGrid(list, addButton, itemRootselector, addItemDataRoot, addBeforeButton) {\r\n        return _super.call(this, list, addButton, itemRootselector, addItemDataRoot, addBeforeButton) || this;\r\n    }\r\n    MyULAppendGrid.prototype.extractDataToAdd = function () {\r\n        return this.addItemDataRoot.value;\r\n    };\r\n    MyULAppendGrid.prototype.itemTemplate = function (str) {\r\n        var toAdd = \"<li class=\\\"list-group-item\\\">\\n                <button type=\\\"button\\\" class=\\\"btn btn-sm\\\" title=\\\"remove\\\">\\n                    <span class=\\\"glyphicon glyphicon-minus\\\" aria-hidden=\\\"true\\\">\\n                    </span>\\n                </button>\\n                <span>\" + str + \"</span>\\n            </li>\";\r\n        var temp = document.createElement('ul');\r\n        temp.innerHTML = toAdd;\r\n        return temp.firstChild;\r\n    };\r\n    return MyULAppendGrid;\r\n}(_lib_AbstractLists__WEBPACK_IMPORTED_MODULE_0__[\"AppendGrid\"]));\r\nvar mainList = new _lib_plainList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.getElementById('main_list'));\r\nvar addButton = document.getElementById('main_add');\r\nvar addInput = document.getElementById('main_input');\r\nvar mainGrid = new MyULAppendGrid(mainList, addButton, \"li\", addInput);\r\n\n\n//# sourceURL=webpack:///./wwwroot/ts/modularToDoList.ts?");

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map