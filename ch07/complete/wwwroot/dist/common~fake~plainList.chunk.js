(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common~fake~plainList"],{

/***/ "./wwwroot/ts/lib/plainList.ts":
/*!*************************************!*\
  !*** ./wwwroot/ts/lib/plainList.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar DOMList = /** @class */ (function () {\r\n    function DOMList(itemsParent) {\r\n        this.itemsParent = itemsParent;\r\n    }\r\n    DOMList.prototype.removeItem = function (node) {\r\n        this.itemsParent.removeChild(node);\r\n    };\r\n    DOMList.prototype.appendItem = function (itemData) {\r\n        this.itemsParent.appendChild(this.itemTemplate(itemData));\r\n    };\r\n    DOMList.prototype.prependItem = function (itemData) {\r\n        if (this.itemsParent.childElementCount === 0)\r\n            this.appendItem(itemData);\r\n        else\r\n            this.itemsParent.insertBefore(this.itemTemplate(itemData), this.itemsParent.firstChild);\r\n    };\r\n    DOMList.prototype.appendBefore = function (node, itemData) {\r\n        this.itemsParent.insertBefore(this.itemTemplate(itemData), node);\r\n    };\r\n    DOMList.prototype.appendAfter = function (node, itemData) {\r\n        if (node.nextSibling)\r\n            this.itemsParent.insertBefore(this.itemTemplate(itemData), node.nextSibling);\r\n        else\r\n            this.appendItem(itemData);\r\n    };\r\n    return DOMList;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOMList);\r\n\n\n//# sourceURL=webpack:///./wwwroot/ts/lib/plainList.ts?");

/***/ })

}]);
//# sourceMappingURL=common~fake~plainList.chunk.js.map