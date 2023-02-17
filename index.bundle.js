/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./PlayfairDisplay-Italic-VariableFont_wght.ttf */ "./src/PlayfairDisplay-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --off-white: #F5F5F5;\n    --coffee: #282320;\n    --mocha: #463d35;\n    --sideborder: 2px solid var(--off-white);\n    --lightsideborder: 1px solid var(--off-white);\n    --fancyfont: 'Playfair Display', 'Open Sans';\n\n}\n\n@font-face {\n    font-family: 'Playfair Display';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 700;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    width: 100vw;\n    background-color: var(--coffee);\n    padding-top: 200px;\n    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: var(--off-white);\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* HEADER */\n\n.sub-header {\n    position: relative;\n}\n\nh1 {\n    position: absolute;\n    top: -110px;\n    padding: 0;\n    margin: 0;\n    font-size: 120px;\n    font-family: var(--fancyfont);\n    display: grid;\n    justify-content: center;\n}\n\n.banner {\n    width: 1000px;\n}\n\n\n/* SIDEBAR */\n\n.sidebar {\n    display: grid;\n    grid-template-columns: 150px;\n    grid-template-rows: repeat(3, 60px);\n    grid-auto-flow: row;\n    border-right: var(--lightsideborder);\n}\n\nbutton {\n    background-color: var(--coffee);\n    color: var(--off-white);\n    border: 0px;\n    font-size: 24px;\n    padding: 10px;\n    font-weight: 600;\n    align-items: center;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: var(--mocha);\n    border-left: var(--sideborder);\n}\n\n\n/*MAIN PAGE CONTENT */\n\nh2 {\n    padding: 0;\n    margin: 0;\n    padding-top: 10px;\n    padding-bottom: 30px;\n}\n\n.main-content {\n    padding-top: 40px;\n    width: 1000px;\n    display: grid;\n    grid-template-columns: 160px 1fr;\n}\n\n.home-title,\n.menu-title,\n.hours-title {\n    font-family: var(--fancyfont);\n}\n\n\n.menu-items {\n    display: flex;\n    flex-direction: column;\n}\n\n\n.coffee {\n    display: grid;\n    grid-template-columns: 120px 1fr;\n    align-items: center;\n    padding-bottom: 20px;\n}\n\n.coffee-img {\n    width: 100px;\n    border-radius: 10%;\n}\n\n.coffee-title {\n    font-family: var(--fancyfont);\n}\n\n.days {\n    font-weight: 800;\n    padding-bottom: 10px;\n}\n\n.home-content,\n.menu-content,\n.hours-content {\n    display: none;\n    padding-left: 40px;\n\n}\n\n.main-footer {\n    position: absolute;\n    bottom: 0;   \n}\n\na { \n    color: var(--mocha)\n}\n\n.github {\n    padding-right: 20px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,wCAAwC;IACxC,6CAA6C;IAC7C,4CAA4C;;AAEhD;;AAEA;IACI,+BAA+B;IAC/B,+DAA6E;IAC7E,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,YAAY;IACZ,+BAA+B;IAC/B,kBAAkB;IAClB,8DAA8D;IAC9D,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA,WAAW;;AAEX;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,SAAS;IACT,gBAAgB;IAChB,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;;AAGA,YAAY;;AAEZ;IACI,aAAa;IACb,4BAA4B;IAC5B,mCAAmC;IACnC,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,+BAA+B;IAC/B,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,8BAA8B;AAClC;;;AAGA,qBAAqB;;AAErB;IACI,UAAU;IACV,SAAS;IACT,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,gCAAgC;AACpC;;AAEA;;;IAGI,6BAA6B;AACjC;;;AAGA;IACI,aAAa;IACb,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,gCAAgC;IAChC,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;;;IAGI,aAAa;IACb,kBAAkB;;AAEtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI;AACJ;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":[":root {\n    --off-white: #F5F5F5;\n    --coffee: #282320;\n    --mocha: #463d35;\n    --sideborder: 2px solid var(--off-white);\n    --lightsideborder: 1px solid var(--off-white);\n    --fancyfont: 'Playfair Display', 'Open Sans';\n\n}\n\n@font-face {\n    font-family: 'Playfair Display';\n    src: url('./PlayfairDisplay-Italic-VariableFont_wght.ttf') format('truetype');\n    font-weight: 700;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    width: 100vw;\n    background-color: var(--coffee);\n    padding-top: 200px;\n    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: var(--off-white);\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* HEADER */\n\n.sub-header {\n    position: relative;\n}\n\nh1 {\n    position: absolute;\n    top: -110px;\n    padding: 0;\n    margin: 0;\n    font-size: 120px;\n    font-family: var(--fancyfont);\n    display: grid;\n    justify-content: center;\n}\n\n.banner {\n    width: 1000px;\n}\n\n\n/* SIDEBAR */\n\n.sidebar {\n    display: grid;\n    grid-template-columns: 150px;\n    grid-template-rows: repeat(3, 60px);\n    grid-auto-flow: row;\n    border-right: var(--lightsideborder);\n}\n\nbutton {\n    background-color: var(--coffee);\n    color: var(--off-white);\n    border: 0px;\n    font-size: 24px;\n    padding: 10px;\n    font-weight: 600;\n    align-items: center;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: var(--mocha);\n    border-left: var(--sideborder);\n}\n\n\n/*MAIN PAGE CONTENT */\n\nh2 {\n    padding: 0;\n    margin: 0;\n    padding-top: 10px;\n    padding-bottom: 30px;\n}\n\n.main-content {\n    padding-top: 40px;\n    width: 1000px;\n    display: grid;\n    grid-template-columns: 160px 1fr;\n}\n\n.home-title,\n.menu-title,\n.hours-title {\n    font-family: var(--fancyfont);\n}\n\n\n.menu-items {\n    display: flex;\n    flex-direction: column;\n}\n\n\n.coffee {\n    display: grid;\n    grid-template-columns: 120px 1fr;\n    align-items: center;\n    padding-bottom: 20px;\n}\n\n.coffee-img {\n    width: 100px;\n    border-radius: 10%;\n}\n\n.coffee-title {\n    font-family: var(--fancyfont);\n}\n\n.days {\n    font-weight: 800;\n    padding-bottom: 10px;\n}\n\n.home-content,\n.menu-content,\n.hours-content {\n    display: none;\n    padding-left: 40px;\n\n}\n\n.main-footer {\n    position: absolute;\n    bottom: 0;   \n}\n\na { \n    color: var(--mocha)\n}\n\n.github {\n    padding-right: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePageContent": () => (/* binding */ homePageContent)
/* harmony export */ });
/* harmony import */ var _pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageTemplate.js */ "./src/pageTemplate.js");


function homePageContent() {
    const homePage = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'home-content');
    const title = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'home-title');
    title.innerHTML = 'Welcome'
    
    const aboutMsg = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'about-msg');
    aboutMsg.innerHTML = "At our coffee shop, we're more than just a place to grab a cup of joe. We're a community of coffee lovers, storytellers, and dreamers. So come in, grab a seat, and let's share a story over a perfect cup of coffee. <br> <br> We believe that the perfect cup of coffee isn't just about the beans or the brewing method, but also the experience that surrounds it. That's why we strive to create a warm and inviting atmosphere where everyone feels welcome and at home."


    ;(0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.appendNew)(homePage, title);
    (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.appendNew)(homePage, aboutMsg);
    
    return homePage
}


/***/ }),

/***/ "./src/hours.js":
/*!**********************!*\
  !*** ./src/hours.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hoursPageContent": () => (/* binding */ hoursPageContent)
/* harmony export */ });
/* harmony import */ var _pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageTemplate.js */ "./src/pageTemplate.js");



function hoursPageContent() {
    const hoursPage = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hours-content');
    const title = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'hours-title');
    title.innerHTML = 'Hours'
    
    const weekdays = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'days');
    weekdays.innerHTML = 'Monday - Friday'
    const weekdayHours = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hours');
    weekdayHours.innerHTML = '6:00 - 15:00';

    const weekends = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'days');
    weekends.innerHTML = 'Saturday - Sunday'
    const weekendHours = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hours');
    weekendHours.innerHTML = '8:00 - 12:00';


    (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.appendNew)(hoursPage, title);
    hoursPage.append(weekdays, weekdayHours, weekends, weekendHours)

    return hoursPage
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPageContent": () => (/* binding */ menuPageContent)
/* harmony export */ });
/* harmony import */ var _pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageTemplate.js */ "./src/pageTemplate.js");
/* harmony import */ var _mocha_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mocha.jpg */ "./src/mocha.jpg");
/* harmony import */ var _coldbrew_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coldbrew.jpg */ "./src/coldbrew.jpg");
/* harmony import */ var _cappuccino_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cappuccino.jpg */ "./src/cappuccino.jpg");





function menuPageContent() {
    const menuContent = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-content');
    const menuItems = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-items')
    const title = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'menu-title');
    title.innerHTML = 'Our Menu'

    const coffee1 = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'coffee')
    const mochaImg = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', 'coffee-img');
    mochaImg.src = _mocha_jpg__WEBPACK_IMPORTED_MODULE_1__; 
    const mochaText = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'mocha-txt');
    mochaText.innerHTML = "For those with a sweet tooth, our mocha is the perfect indulgence. Made with our rich espresso, steamed milk, and velvety chocolate sauce, this drink is a decadent treat. Whether you're in need of a mid-day pick-me-up or a sweet after-dinner treat, our mocha is the perfect choice."

    coffee1.append(mochaImg, mochaText)
    
    const coffee2 = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'coffee')
    const coldBrewImg = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', 'coffee-img');
    coldBrewImg.src = _coldbrew_jpg__WEBPACK_IMPORTED_MODULE_2__; 
    const coldBrewTxt = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'mocha-txt');
    coldBrewTxt.innerHTML = "Cold Brew: For those who love a refreshing iced coffee, our cold brew is the perfect choice. Made by steeping our premium coffee beans in cold water for 12-24 hours, our cold brew is smooth and bold with a subtle sweetness. It's the perfect pick-me-up on a hot summer day."

    coffee2.append(coldBrewImg, coldBrewTxt)

    const coffee3 = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'coffee')
    const cappuccinoImg = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', 'coffee-img');
    cappuccinoImg.src = _cappuccino_jpg__WEBPACK_IMPORTED_MODULE_3__; 
    const cappuccinoTxt = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'mocha-txt');
    cappuccinoTxt.innerHTML = "Cappuccino: A classic espresso-based drink that combines rich espresso with steamed milk and frothy milk foam. Our cappuccino is the perfect balance of bold espresso and creamy milk, with just the right amount of foam for a luxurious finish."

    coffee3.append(cappuccinoImg, cappuccinoTxt)

    ;(0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.appendNew)(menuItems, title)
    menuItems.append(coffee1, coffee2, coffee3)
    ;(0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_0__.appendNew)(menuContent, menuItems)


    return menuContent
}

/***/ }),

/***/ "./src/pageTemplate.js":
/*!*****************************!*\
  !*** ./src/pageTemplate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendNew": () => (/* binding */ appendNew),
/* harmony export */   "changeActiveBtn": () => (/* binding */ changeActiveBtn),
/* harmony export */   "changePageContent": () => (/* binding */ changePageContent),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(element, className) {
    const newElement = document.createElement(`${element}`);
    newElement.classList.add(className);
    return newElement
}

function appendNew(parent, child) {
    parent.appendChild(child)
}


function changeActiveBtn(currBtn, newBtn) {
    currBtn.style.borderLeft = '0px';
    newBtn.style.borderLeft = 'var(--sideborder)';
}


function changePageContent(currContent, newContent) {
    currContent.style.display = 'none';
    newContent.style.display = 'block'; 
}


/***/ }),

/***/ "./src/PlayfairDisplay-Italic-VariableFont_wght.ttf":
/*!**********************************************************!*\
  !*** ./src/PlayfairDisplay-Italic-VariableFont_wght.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a3a30667c7d75e00588.ttf";

/***/ }),

/***/ "./src/cappuccino.jpg":
/*!****************************!*\
  !*** ./src/cappuccino.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7e78914f36fb27571aa.jpg";

/***/ }),

/***/ "./src/coffee_banner.jpg":
/*!*******************************!*\
  !*** ./src/coffee_banner.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cca1d6219c5d24f772c.jpg";

/***/ }),

/***/ "./src/coldbrew.jpg":
/*!**************************!*\
  !*** ./src/coldbrew.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5988caba188106b7fed.jpg";

/***/ }),

/***/ "./src/mocha.jpg":
/*!***********************!*\
  !*** ./src/mocha.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "129d94c5b5c6bb54744c.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageTemplate.js */ "./src/pageTemplate.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _hours_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hours.js */ "./src/hours.js");
/* harmony import */ var _coffee_banner_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coffee_banner.jpg */ "./src/coffee_banner.jpg");







const container = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'container');
const homepage = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'homepage');
const mainHeader = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('header', 'main-header');
const mainContent = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'main-content');
const homeBtn = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'home');
const menuBtn = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'menu');
const hoursBtn = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'hours');
const homeContent = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_2__.homePageContent)()
const menuContent = (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menuPageContent)()
const hoursContent = (0,_hours_js__WEBPACK_IMPORTED_MODULE_4__.hoursPageContent)()
let currPage;
let currBtn;


function createSubHeader() {
    const headerTitle = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('h1','header-title');
    headerTitle.innerHTML = 'cafe ela';

    const subHeader = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'sub-header');
    
    const coffeeBanner = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('img', 'banner');
    coffeeBanner.src = _coffee_banner_jpg__WEBPACK_IMPORTED_MODULE_5__;

    (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.appendNew)(subHeader, headerTitle);
    (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.appendNew)(subHeader, coffeeBanner);

    return subHeader
}

function createSidebar() {
    const sidebar = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'sidebar');
    homeBtn.innerText = 'Home'
    menuBtn.innerText = 'Menu'
    hoursBtn.innerText = 'Hours'

    sidebar.append(homeBtn, menuBtn, hoursBtn)

    return sidebar
}

function createFooter() {
    const footer = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('footer', 'main-footer');
    const github = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', 'github')
    github.href = 'https://github.com/ateodocio'
    github.innerHTML = 'Created by ateodocio.'

    const unsplash = (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('a','unsplash')
    unsplash.href = 'https://unsplash.com/photos/hwYwbz7TAhU'
    unsplash.innerHTML = 'Photo by rawkkim.'

    footer.append(github, unsplash);
    return footer
}

// BUILD THE PAGE
(function buildPage() {
    container.append(homepage, mainHeader, mainContent, createFooter())

    document.body.appendChild(container);
    (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.appendNew)(mainHeader, createSubHeader());

    mainContent.append(createSidebar(),homeContent,menuContent,hoursContent)

    // when page loads, homepage is shown 
    homeContent.style.display = 'block';
    currPage = homeContent;
    currBtn = homeBtn;
    
})();


// EVENT LISTENERS

menuBtn.onclick = function(){
    (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.changePageContent)(currPage, menuContent);
    (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.changeActiveBtn)(currBtn, menuBtn);
    currPage = menuContent;
    currBtn = menuBtn;
    
}

homeBtn.onclick = function() {
    ;(0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.changePageContent)(currPage, homeContent);
    (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.changeActiveBtn)(currBtn, homeBtn);
    currPage = homeContent;
    currBtn = homeBtn;
}

hoursBtn.onclick = function() {
    ;(0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.changePageContent)(currPage, hoursContent);
    (0,_pageTemplate_js__WEBPACK_IMPORTED_MODULE_1__.changeActiveBtn)(currBtn, hoursBtn);
    currPage = hoursContent;
    currBtn = hoursBtn;
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUtBQWlFO0FBQzdHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCwyQkFBMkIsd0JBQXdCLHVCQUF1QiwrQ0FBK0Msb0RBQW9ELG1EQUFtRCxLQUFLLGdCQUFnQixzQ0FBc0MsOEVBQThFLHVCQUF1QixHQUFHLFVBQVUsaUJBQWlCLGdCQUFnQixtQkFBbUIsc0NBQXNDLHlCQUF5QixxRUFBcUUsOEJBQThCLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEdBQUcsaUNBQWlDLHlCQUF5QixHQUFHLFFBQVEseUJBQXlCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLHVCQUF1QixvQ0FBb0Msb0JBQW9CLDhCQUE4QixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsaUNBQWlDLG9CQUFvQixtQ0FBbUMsMENBQTBDLDBCQUEwQiwyQ0FBMkMsR0FBRyxZQUFZLHNDQUFzQyw4QkFBOEIsa0JBQWtCLHNCQUFzQixvQkFBb0IsdUJBQXVCLDBCQUEwQixHQUFHLGtCQUFrQixzQkFBc0IscUNBQXFDLHFDQUFxQyxHQUFHLG9DQUFvQyxpQkFBaUIsZ0JBQWdCLHdCQUF3QiwyQkFBMkIsR0FBRyxtQkFBbUIsd0JBQXdCLG9CQUFvQixvQkFBb0IsdUNBQXVDLEdBQUcsOENBQThDLG9DQUFvQyxHQUFHLG1CQUFtQixvQkFBb0IsNkJBQTZCLEdBQUcsZUFBZSxvQkFBb0IsdUNBQXVDLDBCQUEwQiwyQkFBMkIsR0FBRyxpQkFBaUIsbUJBQW1CLHlCQUF5QixHQUFHLG1CQUFtQixvQ0FBb0MsR0FBRyxXQUFXLHVCQUF1QiwyQkFBMkIsR0FBRyxvREFBb0Qsb0JBQW9CLHlCQUF5QixLQUFLLGtCQUFrQix5QkFBeUIsbUJBQW1CLEdBQUcsUUFBUSw0QkFBNEIsYUFBYSwwQkFBMEIsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxRQUFRLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGlDQUFpQywyQkFBMkIsd0JBQXdCLHVCQUF1QiwrQ0FBK0Msb0RBQW9ELG1EQUFtRCxLQUFLLGdCQUFnQixzQ0FBc0Msb0ZBQW9GLHVCQUF1QixHQUFHLFVBQVUsaUJBQWlCLGdCQUFnQixtQkFBbUIsc0NBQXNDLHlCQUF5QixxRUFBcUUsOEJBQThCLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEdBQUcsaUNBQWlDLHlCQUF5QixHQUFHLFFBQVEseUJBQXlCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLHVCQUF1QixvQ0FBb0Msb0JBQW9CLDhCQUE4QixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsaUNBQWlDLG9CQUFvQixtQ0FBbUMsMENBQTBDLDBCQUEwQiwyQ0FBMkMsR0FBRyxZQUFZLHNDQUFzQyw4QkFBOEIsa0JBQWtCLHNCQUFzQixvQkFBb0IsdUJBQXVCLDBCQUEwQixHQUFHLGtCQUFrQixzQkFBc0IscUNBQXFDLHFDQUFxQyxHQUFHLG9DQUFvQyxpQkFBaUIsZ0JBQWdCLHdCQUF3QiwyQkFBMkIsR0FBRyxtQkFBbUIsd0JBQXdCLG9CQUFvQixvQkFBb0IsdUNBQXVDLEdBQUcsOENBQThDLG9DQUFvQyxHQUFHLG1CQUFtQixvQkFBb0IsNkJBQTZCLEdBQUcsZUFBZSxvQkFBb0IsdUNBQXVDLDBCQUEwQiwyQkFBMkIsR0FBRyxpQkFBaUIsbUJBQW1CLHlCQUF5QixHQUFHLG1CQUFtQixvQ0FBb0MsR0FBRyxXQUFXLHVCQUF1QiwyQkFBMkIsR0FBRyxvREFBb0Qsb0JBQW9CLHlCQUF5QixLQUFLLGtCQUFrQix5QkFBeUIsbUJBQW1CLEdBQUcsUUFBUSw0QkFBNEIsYUFBYSwwQkFBMEIsR0FBRyxtQkFBbUI7QUFDbG5NO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmNEQ7O0FBRXJEO0FBQ1AscUJBQXFCLCtEQUFhO0FBQ2xDLGtCQUFrQiwrREFBYTtBQUMvQjtBQUNBO0FBQ0EscUJBQXFCLCtEQUFhO0FBQ2xDOzs7QUFHQSxJQUFJLDREQUFTO0FBQ2IsSUFBSSwyREFBUztBQUNiO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y0RDs7O0FBR3JEO0FBQ1Asc0JBQXNCLCtEQUFhO0FBQ25DLGtCQUFrQiwrREFBYTtBQUMvQjtBQUNBO0FBQ0EscUJBQXFCLCtEQUFhO0FBQ2xDO0FBQ0EseUJBQXlCLCtEQUFhO0FBQ3RDOztBQUVBLHFCQUFxQiwrREFBYTtBQUNsQztBQUNBLHlCQUF5QiwrREFBYTtBQUN0Qzs7O0FBR0EsSUFBSSwyREFBUztBQUNiOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjREO0FBQzVCO0FBQ007QUFDSTs7QUFFbkM7QUFDUCx3QkFBd0IsK0RBQWE7QUFDckMsc0JBQXNCLCtEQUFhO0FBQ25DLGtCQUFrQiwrREFBYTtBQUMvQjs7QUFFQSxvQkFBb0IsK0RBQWE7QUFDakMscUJBQXFCLCtEQUFhO0FBQ2xDLG1CQUFtQix1Q0FBSztBQUN4QixzQkFBc0IsK0RBQWE7QUFDbkM7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiwrREFBYTtBQUNqQyx3QkFBd0IsK0RBQWE7QUFDckMsc0JBQXNCLDBDQUFRO0FBQzlCLHdCQUF3QiwrREFBYTtBQUNyQzs7QUFFQTs7QUFFQSxvQkFBb0IsK0RBQWE7QUFDakMsMEJBQTBCLCtEQUFhO0FBQ3ZDLHdCQUF3Qiw0Q0FBVTtBQUNsQywwQkFBMEIsK0RBQWE7QUFDdkM7O0FBRUE7O0FBRUEsSUFBSSw0REFBUztBQUNiO0FBQ0EsSUFBSSw0REFBUzs7O0FBR2I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q087QUFDUCxpREFBaUQsUUFBUTtBQUN6RDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzJFO0FBQ2hEO0FBQ0o7QUFDRTtBQUNOOztBQUV4QyxrQkFBa0IsK0RBQWE7QUFDL0IsaUJBQWlCLCtEQUFhO0FBQzlCLG1CQUFtQiwrREFBYTtBQUNoQyxvQkFBb0IsK0RBQWE7QUFDakMsZ0JBQWdCLCtEQUFhO0FBQzdCLGdCQUFnQiwrREFBYTtBQUM3QixpQkFBaUIsK0RBQWE7QUFDOUIsb0JBQW9CLDZEQUFlO0FBQ25DLG9CQUFvQix5REFBZTtBQUNuQyxxQkFBcUIsMkRBQWdCO0FBQ3JDO0FBQ0E7OztBQUdBO0FBQ0Esd0JBQXdCLCtEQUFhO0FBQ3JDOztBQUVBLHNCQUFzQiwrREFBYTtBQUNuQztBQUNBLHlCQUF5QiwrREFBYTtBQUN0Qyx1QkFBdUIsK0NBQU07O0FBRTdCLElBQUksMkRBQVM7QUFDYixJQUFJLDJEQUFTOztBQUViO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsK0RBQWE7QUFDakM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsK0RBQWE7QUFDaEMsbUJBQW1CLCtEQUFhO0FBQ2hDO0FBQ0E7O0FBRUEscUJBQXFCLCtEQUFhO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksMkRBQVM7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0EsSUFBSSxtRUFBaUI7QUFDckIsSUFBSSxpRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksb0VBQWlCO0FBQ3JCLElBQUksaUVBQWU7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxvRUFBaUI7QUFDckIsSUFBSSxpRUFBZTtBQUNuQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvdXJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUGxheWZhaXJEaXNwbGF5LUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tb2ZmLXdoaXRlOiAjRjVGNUY1O1xcbiAgICAtLWNvZmZlZTogIzI4MjMyMDtcXG4gICAgLS1tb2NoYTogIzQ2M2QzNTtcXG4gICAgLS1zaWRlYm9yZGVyOiAycHggc29saWQgdmFyKC0tb2ZmLXdoaXRlKTtcXG4gICAgLS1saWdodHNpZGVib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vZmYtd2hpdGUpO1xcbiAgICAtLWZhbmN5Zm9udDogJ1BsYXlmYWlyIERpc3BsYXknLCAnT3BlbiBTYW5zJztcXG5cXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29mZmVlKTtcXG4gICAgcGFkZGluZy10b3A6IDIwMHB4O1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5cXG4uc3ViLWhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaDEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTExMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMTIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mYW5jeWZvbnQpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJhbm5lciB7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxufVxcblxcblxcbi8qIFNJREVCQVIgKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDYwcHgpO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWxpZ2h0c2lkZWJvcmRlcik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvZmZlZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vY2hhKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLXNpZGVib3JkZXIpO1xcbn1cXG5cXG5cXG4vKk1BSU4gUEFHRSBDT05URU5UICovXFxuXFxuaDIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICB3aWR0aDogMTAwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2MHB4IDFmcjtcXG59XFxuXFxuLmhvbWUtdGl0bGUsXFxuLm1lbnUtdGl0bGUsXFxuLmhvdXJzLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZhbmN5Zm9udCk7XFxufVxcblxcblxcbi5tZW51LWl0ZW1zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuLmNvZmZlZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTIwcHggMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmNvZmZlZS1pbWcge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuLmNvZmZlZS10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mYW5jeWZvbnQpO1xcbn1cXG5cXG4uZGF5cyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaG9tZS1jb250ZW50LFxcbi5tZW51LWNvbnRlbnQsXFxuLmhvdXJzLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuXFxufVxcblxcbi5tYWluLWZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwOyAgIFxcbn1cXG5cXG5hIHsgXFxuICAgIGNvbG9yOiB2YXIoLS1tb2NoYSlcXG59XFxuXFxuLmdpdGh1YiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix3Q0FBd0M7SUFDeEMsNkNBQTZDO0lBQzdDLDRDQUE0Qzs7QUFFaEQ7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsK0RBQTZFO0lBQzdFLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsOERBQThEO0lBQzlELHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0EsWUFBWTs7QUFFWjtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLDhCQUE4QjtBQUNsQzs7O0FBR0EscUJBQXFCOztBQUVyQjtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTs7O0lBR0ksNkJBQTZCO0FBQ2pDOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW9mZi13aGl0ZTogI0Y1RjVGNTtcXG4gICAgLS1jb2ZmZWU6ICMyODIzMjA7XFxuICAgIC0tbW9jaGE6ICM0NjNkMzU7XFxuICAgIC0tc2lkZWJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW9mZi13aGl0ZSk7XFxuICAgIC0tbGlnaHRzaWRlYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb2ZmLXdoaXRlKTtcXG4gICAgLS1mYW5jeWZvbnQ6ICdQbGF5ZmFpciBEaXNwbGF5JywgJ09wZW4gU2Fucyc7XFxuXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xcbiAgICBzcmM6IHVybCgnLi9QbGF5ZmFpckRpc3BsYXktSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2ZmZWUpO1xcbiAgICBwYWRkaW5nLXRvcDogMjAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcblxcbi5zdWItaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oMSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTEwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZhbmN5Zm9udCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmFubmVyIHtcXG4gICAgd2lkdGg6IDEwMDBweDtcXG59XFxuXFxuXFxuLyogU0lERUJBUiAqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNjBweCk7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tbGlnaHRzaWRlYm9yZGVyKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29mZmVlKTtcXG4gICAgY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9jaGEpO1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tc2lkZWJvcmRlcik7XFxufVxcblxcblxcbi8qTUFJTiBQQUdFIENPTlRFTlQgKi9cXG5cXG5oMiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTYwcHggMWZyO1xcbn1cXG5cXG4uaG9tZS10aXRsZSxcXG4ubWVudS10aXRsZSxcXG4uaG91cnMtdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmFuY3lmb250KTtcXG59XFxuXFxuXFxuLm1lbnUtaXRlbXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4uY29mZmVlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjBweCAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uY29mZmVlLWltZyB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbn1cXG5cXG4uY29mZmVlLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZhbmN5Zm9udCk7XFxufVxcblxcbi5kYXlzIHtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5ob21lLWNvbnRlbnQsXFxuLm1lbnUtY29udGVudCxcXG4uaG91cnMtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG5cXG59XFxuXFxuLm1haW4tZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7ICAgXFxufVxcblxcbmEgeyBcXG4gICAgY29sb3I6IHZhcigtLW1vY2hhKVxcbn1cXG5cXG4uZ2l0aHViIHtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZE5ldyB9IGZyb20gJy4vcGFnZVRlbXBsYXRlLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gaG9tZVBhZ2VDb250ZW50KCkge1xuICAgIGNvbnN0IGhvbWVQYWdlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hvbWUtY29udGVudCcpO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCAnaG9tZS10aXRsZScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9ICdXZWxjb21lJ1xuICAgIFxuICAgIGNvbnN0IGFib3V0TXNnID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2Fib3V0LW1zZycpO1xuICAgIGFib3V0TXNnLmlubmVySFRNTCA9IFwiQXQgb3VyIGNvZmZlZSBzaG9wLCB3ZSdyZSBtb3JlIHRoYW4ganVzdCBhIHBsYWNlIHRvIGdyYWIgYSBjdXAgb2Ygam9lLiBXZSdyZSBhIGNvbW11bml0eSBvZiBjb2ZmZWUgbG92ZXJzLCBzdG9yeXRlbGxlcnMsIGFuZCBkcmVhbWVycy4gU28gY29tZSBpbiwgZ3JhYiBhIHNlYXQsIGFuZCBsZXQncyBzaGFyZSBhIHN0b3J5IG92ZXIgYSBwZXJmZWN0IGN1cCBvZiBjb2ZmZWUuIDxicj4gPGJyPiBXZSBiZWxpZXZlIHRoYXQgdGhlIHBlcmZlY3QgY3VwIG9mIGNvZmZlZSBpc24ndCBqdXN0IGFib3V0IHRoZSBiZWFucyBvciB0aGUgYnJld2luZyBtZXRob2QsIGJ1dCBhbHNvIHRoZSBleHBlcmllbmNlIHRoYXQgc3Vycm91bmRzIGl0LiBUaGF0J3Mgd2h5IHdlIHN0cml2ZSB0byBjcmVhdGUgYSB3YXJtIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlIHdoZXJlIGV2ZXJ5b25lIGZlZWxzIHdlbGNvbWUgYW5kIGF0IGhvbWUuXCJcblxuXG4gICAgYXBwZW5kTmV3KGhvbWVQYWdlLCB0aXRsZSk7XG4gICAgYXBwZW5kTmV3KGhvbWVQYWdlLCBhYm91dE1zZyk7XG4gICAgXG4gICAgcmV0dXJuIGhvbWVQYWdlXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmROZXcgfSBmcm9tICcuL3BhZ2VUZW1wbGF0ZS5qcydcblxuXG5leHBvcnQgZnVuY3Rpb24gaG91cnNQYWdlQ29udGVudCgpIHtcbiAgICBjb25zdCBob3Vyc1BhZ2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaG91cnMtY29udGVudCcpO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCAnaG91cnMtdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnSG91cnMnXG4gICAgXG4gICAgY29uc3Qgd2Vla2RheXMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGF5cycpO1xuICAgIHdlZWtkYXlzLmlubmVySFRNTCA9ICdNb25kYXkgLSBGcmlkYXknXG4gICAgY29uc3Qgd2Vla2RheUhvdXJzID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hvdXJzJyk7XG4gICAgd2Vla2RheUhvdXJzLmlubmVySFRNTCA9ICc2OjAwIC0gMTU6MDAnO1xuXG4gICAgY29uc3Qgd2Vla2VuZHMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGF5cycpO1xuICAgIHdlZWtlbmRzLmlubmVySFRNTCA9ICdTYXR1cmRheSAtIFN1bmRheSdcbiAgICBjb25zdCB3ZWVrZW5kSG91cnMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaG91cnMnKTtcbiAgICB3ZWVrZW5kSG91cnMuaW5uZXJIVE1MID0gJzg6MDAgLSAxMjowMCc7XG5cblxuICAgIGFwcGVuZE5ldyhob3Vyc1BhZ2UsIHRpdGxlKTtcbiAgICBob3Vyc1BhZ2UuYXBwZW5kKHdlZWtkYXlzLCB3ZWVrZGF5SG91cnMsIHdlZWtlbmRzLCB3ZWVrZW5kSG91cnMpXG5cbiAgICByZXR1cm4gaG91cnNQYWdlXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmROZXcgfSBmcm9tICcuL3BhZ2VUZW1wbGF0ZS5qcydcbmltcG9ydCBtb2NoYSBmcm9tICcuL21vY2hhLmpwZyc7XG5pbXBvcnQgY29sZGJyZXcgZnJvbSAnLi9jb2xkYnJldy5qcGcnO1xuaW1wb3J0IGNhcHB1Y2Npbm8gZnJvbSAnLi9jYXBwdWNjaW5vLmpwZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51UGFnZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbWVudS1jb250ZW50Jyk7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ21lbnUtaXRlbXMnKVxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCAnbWVudS10aXRsZScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9ICdPdXIgTWVudSdcblxuICAgIGNvbnN0IGNvZmZlZTEgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY29mZmVlJylcbiAgICBjb25zdCBtb2NoYUltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsICdjb2ZmZWUtaW1nJyk7XG4gICAgbW9jaGFJbWcuc3JjID0gbW9jaGE7IFxuICAgIGNvbnN0IG1vY2hhVGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtb2NoYS10eHQnKTtcbiAgICBtb2NoYVRleHQuaW5uZXJIVE1MID0gXCJGb3IgdGhvc2Ugd2l0aCBhIHN3ZWV0IHRvb3RoLCBvdXIgbW9jaGEgaXMgdGhlIHBlcmZlY3QgaW5kdWxnZW5jZS4gTWFkZSB3aXRoIG91ciByaWNoIGVzcHJlc3NvLCBzdGVhbWVkIG1pbGssIGFuZCB2ZWx2ZXR5IGNob2NvbGF0ZSBzYXVjZSwgdGhpcyBkcmluayBpcyBhIGRlY2FkZW50IHRyZWF0LiBXaGV0aGVyIHlvdSdyZSBpbiBuZWVkIG9mIGEgbWlkLWRheSBwaWNrLW1lLXVwIG9yIGEgc3dlZXQgYWZ0ZXItZGlubmVyIHRyZWF0LCBvdXIgbW9jaGEgaXMgdGhlIHBlcmZlY3QgY2hvaWNlLlwiXG5cbiAgICBjb2ZmZWUxLmFwcGVuZChtb2NoYUltZywgbW9jaGFUZXh0KVxuICAgIFxuICAgIGNvbnN0IGNvZmZlZTIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY29mZmVlJylcbiAgICBjb25zdCBjb2xkQnJld0ltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsICdjb2ZmZWUtaW1nJyk7XG4gICAgY29sZEJyZXdJbWcuc3JjID0gY29sZGJyZXc7IFxuICAgIGNvbnN0IGNvbGRCcmV3VHh0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ21vY2hhLXR4dCcpO1xuICAgIGNvbGRCcmV3VHh0LmlubmVySFRNTCA9IFwiQ29sZCBCcmV3OiBGb3IgdGhvc2Ugd2hvIGxvdmUgYSByZWZyZXNoaW5nIGljZWQgY29mZmVlLCBvdXIgY29sZCBicmV3IGlzIHRoZSBwZXJmZWN0IGNob2ljZS4gTWFkZSBieSBzdGVlcGluZyBvdXIgcHJlbWl1bSBjb2ZmZWUgYmVhbnMgaW4gY29sZCB3YXRlciBmb3IgMTItMjQgaG91cnMsIG91ciBjb2xkIGJyZXcgaXMgc21vb3RoIGFuZCBib2xkIHdpdGggYSBzdWJ0bGUgc3dlZXRuZXNzLiBJdCdzIHRoZSBwZXJmZWN0IHBpY2stbWUtdXAgb24gYSBob3Qgc3VtbWVyIGRheS5cIlxuXG4gICAgY29mZmVlMi5hcHBlbmQoY29sZEJyZXdJbWcsIGNvbGRCcmV3VHh0KVxuXG4gICAgY29uc3QgY29mZmVlMyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb2ZmZWUnKVxuICAgIGNvbnN0IGNhcHB1Y2Npbm9JbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnY29mZmVlLWltZycpO1xuICAgIGNhcHB1Y2Npbm9JbWcuc3JjID0gY2FwcHVjY2lubzsgXG4gICAgY29uc3QgY2FwcHVjY2lub1R4dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtb2NoYS10eHQnKTtcbiAgICBjYXBwdWNjaW5vVHh0LmlubmVySFRNTCA9IFwiQ2FwcHVjY2lubzogQSBjbGFzc2ljIGVzcHJlc3NvLWJhc2VkIGRyaW5rIHRoYXQgY29tYmluZXMgcmljaCBlc3ByZXNzbyB3aXRoIHN0ZWFtZWQgbWlsayBhbmQgZnJvdGh5IG1pbGsgZm9hbS4gT3VyIGNhcHB1Y2Npbm8gaXMgdGhlIHBlcmZlY3QgYmFsYW5jZSBvZiBib2xkIGVzcHJlc3NvIGFuZCBjcmVhbXkgbWlsaywgd2l0aCBqdXN0IHRoZSByaWdodCBhbW91bnQgb2YgZm9hbSBmb3IgYSBsdXh1cmlvdXMgZmluaXNoLlwiXG5cbiAgICBjb2ZmZWUzLmFwcGVuZChjYXBwdWNjaW5vSW1nLCBjYXBwdWNjaW5vVHh0KVxuXG4gICAgYXBwZW5kTmV3KG1lbnVJdGVtcywgdGl0bGUpXG4gICAgbWVudUl0ZW1zLmFwcGVuZChjb2ZmZWUxLCBjb2ZmZWUyLCBjb2ZmZWUzKVxuICAgIGFwcGVuZE5ldyhtZW51Q29udGVudCwgbWVudUl0ZW1zKVxuXG5cbiAgICByZXR1cm4gbWVudUNvbnRlbnRcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtZW50fWApO1xuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBuZXdFbGVtZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmROZXcocGFyZW50LCBjaGlsZCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZClcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQWN0aXZlQnRuKGN1cnJCdG4sIG5ld0J0bikge1xuICAgIGN1cnJCdG4uc3R5bGUuYm9yZGVyTGVmdCA9ICcwcHgnO1xuICAgIG5ld0J0bi5zdHlsZS5ib3JkZXJMZWZ0ID0gJ3ZhcigtLXNpZGVib3JkZXIpJztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUGFnZUNvbnRlbnQoY3VyckNvbnRlbnQsIG5ld0NvbnRlbnQpIHtcbiAgICBjdXJyQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG5ld0NvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZE5ldywgY2hhbmdlUGFnZUNvbnRlbnQsIGNoYW5nZUFjdGl2ZUJ0biB9IGZyb20gJy4vcGFnZVRlbXBsYXRlLmpzJ1xuaW1wb3J0IHsgaG9tZVBhZ2VDb250ZW50IH0gZnJvbSAnLi9ob21lcGFnZS5qcyc7XG5pbXBvcnQgeyBtZW51UGFnZUNvbnRlbnQgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgaG91cnNQYWdlQ29udGVudCB9IGZyb20gJy4vaG91cnMuanMnO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuL2NvZmZlZV9iYW5uZXIuanBnJ1xuXG5jb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY29udGFpbmVyJyk7XG5jb25zdCBob21lcGFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdob21lcGFnZScpO1xuY29uc3QgbWFpbkhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicsICdtYWluLWhlYWRlcicpO1xuY29uc3QgbWFpbkNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbWFpbi1jb250ZW50Jyk7XG5jb25zdCBob21lQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ2hvbWUnKTtcbmNvbnN0IG1lbnVCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnbWVudScpO1xuY29uc3QgaG91cnNCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnaG91cnMnKTtcbmNvbnN0IGhvbWVDb250ZW50ID0gaG9tZVBhZ2VDb250ZW50KClcbmNvbnN0IG1lbnVDb250ZW50ID0gbWVudVBhZ2VDb250ZW50KClcbmNvbnN0IGhvdXJzQ29udGVudCA9IGhvdXJzUGFnZUNvbnRlbnQoKVxubGV0IGN1cnJQYWdlO1xubGV0IGN1cnJCdG47XG5cblxuZnVuY3Rpb24gY3JlYXRlU3ViSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDEnLCdoZWFkZXItdGl0bGUnKTtcbiAgICBoZWFkZXJUaXRsZS5pbm5lckhUTUwgPSAnY2FmZSBlbGEnO1xuXG4gICAgY29uc3Qgc3ViSGVhZGVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3N1Yi1oZWFkZXInKTtcbiAgICBcbiAgICBjb25zdCBjb2ZmZWVCYW5uZXIgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnYmFubmVyJyk7XG4gICAgY29mZmVlQmFubmVyLnNyYyA9IEJhbm5lcjtcblxuICAgIGFwcGVuZE5ldyhzdWJIZWFkZXIsIGhlYWRlclRpdGxlKTtcbiAgICBhcHBlbmROZXcoc3ViSGVhZGVyLCBjb2ZmZWVCYW5uZXIpO1xuXG4gICAgcmV0dXJuIHN1YkhlYWRlclxufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFyKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc2lkZWJhcicpO1xuICAgIGhvbWVCdG4uaW5uZXJUZXh0ID0gJ0hvbWUnXG4gICAgbWVudUJ0bi5pbm5lclRleHQgPSAnTWVudSdcbiAgICBob3Vyc0J0bi5pbm5lclRleHQgPSAnSG91cnMnXG5cbiAgICBzaWRlYmFyLmFwcGVuZChob21lQnRuLCBtZW51QnRuLCBob3Vyc0J0bilcblxuICAgIHJldHVybiBzaWRlYmFyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KCdmb290ZXInLCAnbWFpbi1mb290ZXInKTtcbiAgICBjb25zdCBnaXRodWIgPSBjcmVhdGVFbGVtZW50KCdhJywgJ2dpdGh1YicpXG4gICAgZ2l0aHViLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2F0ZW9kb2NpbydcbiAgICBnaXRodWIuaW5uZXJIVE1MID0gJ0NyZWF0ZWQgYnkgYXRlb2RvY2lvLidcblxuICAgIGNvbnN0IHVuc3BsYXNoID0gY3JlYXRlRWxlbWVudCgnYScsJ3Vuc3BsYXNoJylcbiAgICB1bnNwbGFzaC5ocmVmID0gJ2h0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9od1l3Yno3VEFoVSdcbiAgICB1bnNwbGFzaC5pbm5lckhUTUwgPSAnUGhvdG8gYnkgcmF3a2tpbS4nXG5cbiAgICBmb290ZXIuYXBwZW5kKGdpdGh1YiwgdW5zcGxhc2gpO1xuICAgIHJldHVybiBmb290ZXJcbn1cblxuLy8gQlVJTEQgVEhFIFBBR0VcbihmdW5jdGlvbiBidWlsZFBhZ2UoKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZChob21lcGFnZSwgbWFpbkhlYWRlciwgbWFpbkNvbnRlbnQsIGNyZWF0ZUZvb3RlcigpKVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGFwcGVuZE5ldyhtYWluSGVhZGVyLCBjcmVhdGVTdWJIZWFkZXIoKSk7XG5cbiAgICBtYWluQ29udGVudC5hcHBlbmQoY3JlYXRlU2lkZWJhcigpLGhvbWVDb250ZW50LG1lbnVDb250ZW50LGhvdXJzQ29udGVudClcblxuICAgIC8vIHdoZW4gcGFnZSBsb2FkcywgaG9tZXBhZ2UgaXMgc2hvd24gXG4gICAgaG9tZUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY3VyclBhZ2UgPSBob21lQ29udGVudDtcbiAgICBjdXJyQnRuID0gaG9tZUJ0bjtcbiAgICBcbn0pKCk7XG5cblxuLy8gRVZFTlQgTElTVEVORVJTXG5cbm1lbnVCdG4ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgY2hhbmdlUGFnZUNvbnRlbnQoY3VyclBhZ2UsIG1lbnVDb250ZW50KTtcbiAgICBjaGFuZ2VBY3RpdmVCdG4oY3VyckJ0biwgbWVudUJ0bik7XG4gICAgY3VyclBhZ2UgPSBtZW51Q29udGVudDtcbiAgICBjdXJyQnRuID0gbWVudUJ0bjtcbiAgICBcbn1cblxuaG9tZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY2hhbmdlUGFnZUNvbnRlbnQoY3VyclBhZ2UsIGhvbWVDb250ZW50KTtcbiAgICBjaGFuZ2VBY3RpdmVCdG4oY3VyckJ0biwgaG9tZUJ0bik7XG4gICAgY3VyclBhZ2UgPSBob21lQ29udGVudDtcbiAgICBjdXJyQnRuID0gaG9tZUJ0bjtcbn1cblxuaG91cnNCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGNoYW5nZVBhZ2VDb250ZW50KGN1cnJQYWdlLCBob3Vyc0NvbnRlbnQpO1xuICAgIGNoYW5nZUFjdGl2ZUJ0bihjdXJyQnRuLCBob3Vyc0J0bik7XG4gICAgY3VyclBhZ2UgPSBob3Vyc0NvbnRlbnQ7XG4gICAgY3VyckJ0biA9IGhvdXJzQnRuO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=