/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/cappuccino.jpg":
/*!****************************!*\
  !*** ./src/cappuccino.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7e78914f36fb27571aa.jpg";

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQLGlEQUFpRCxRQUFRO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjREO0FBQzVCO0FBQ007QUFDSTs7QUFFbkM7QUFDUCx3QkFBd0IsK0RBQWE7QUFDckMsc0JBQXNCLCtEQUFhO0FBQ25DLGtCQUFrQiwrREFBYTtBQUMvQjs7QUFFQSxvQkFBb0IsK0RBQWE7QUFDakMscUJBQXFCLCtEQUFhO0FBQ2xDLG1CQUFtQix1Q0FBSztBQUN4QixzQkFBc0IsK0RBQWE7QUFDbkM7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiwrREFBYTtBQUNqQyx3QkFBd0IsK0RBQWE7QUFDckMsc0JBQXNCLDBDQUFRO0FBQzlCLHdCQUF3QiwrREFBYTtBQUNyQzs7QUFFQTs7QUFFQSxvQkFBb0IsK0RBQWE7QUFDakMsMEJBQTBCLCtEQUFhO0FBQ3ZDLHdCQUF3Qiw0Q0FBVTtBQUNsQywwQkFBMEIsK0RBQWE7QUFDdkM7O0FBRUE7O0FBRUEsSUFBSSw0REFBUztBQUNiO0FBQ0EsSUFBSSw0REFBUzs7O0FBR2I7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbWVudH1gKTtcbiAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kTmV3KHBhcmVudCwgY2hpbGQpIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUJ0bihjdXJyQnRuLCBuZXdCdG4pIHtcbiAgICBjdXJyQnRuLnN0eWxlLmJvcmRlckxlZnQgPSAnMHB4JztcbiAgICBuZXdCdG4uc3R5bGUuYm9yZGVyTGVmdCA9ICd2YXIoLS1zaWRlYm9yZGVyKSc7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBhZ2VDb250ZW50KGN1cnJDb250ZW50LCBuZXdDb250ZW50KSB7XG4gICAgY3VyckNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBuZXdDb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZE5ldyB9IGZyb20gJy4vcGFnZVRlbXBsYXRlLmpzJ1xuaW1wb3J0IG1vY2hhIGZyb20gJy4vbW9jaGEuanBnJztcbmltcG9ydCBjb2xkYnJldyBmcm9tICcuL2NvbGRicmV3LmpwZyc7XG5pbXBvcnQgY2FwcHVjY2lubyBmcm9tICcuL2NhcHB1Y2Npbm8uanBnJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVQYWdlQ29udGVudCgpIHtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtZW51LWNvbnRlbnQnKTtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbWVudS1pdGVtcycpXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsICdtZW51LXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJ091ciBNZW51J1xuXG4gICAgY29uc3QgY29mZmVlMSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb2ZmZWUnKVxuICAgIGNvbnN0IG1vY2hhSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJ2NvZmZlZS1pbWcnKTtcbiAgICBtb2NoYUltZy5zcmMgPSBtb2NoYTsgXG4gICAgY29uc3QgbW9jaGFUZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ21vY2hhLXR4dCcpO1xuICAgIG1vY2hhVGV4dC5pbm5lckhUTUwgPSBcIkZvciB0aG9zZSB3aXRoIGEgc3dlZXQgdG9vdGgsIG91ciBtb2NoYSBpcyB0aGUgcGVyZmVjdCBpbmR1bGdlbmNlLiBNYWRlIHdpdGggb3VyIHJpY2ggZXNwcmVzc28sIHN0ZWFtZWQgbWlsaywgYW5kIHZlbHZldHkgY2hvY29sYXRlIHNhdWNlLCB0aGlzIGRyaW5rIGlzIGEgZGVjYWRlbnQgdHJlYXQuIFdoZXRoZXIgeW91J3JlIGluIG5lZWQgb2YgYSBtaWQtZGF5IHBpY2stbWUtdXAgb3IgYSBzd2VldCBhZnRlci1kaW5uZXIgdHJlYXQsIG91ciBtb2NoYSBpcyB0aGUgcGVyZmVjdCBjaG9pY2UuXCJcblxuICAgIGNvZmZlZTEuYXBwZW5kKG1vY2hhSW1nLCBtb2NoYVRleHQpXG4gICAgXG4gICAgY29uc3QgY29mZmVlMiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb2ZmZWUnKVxuICAgIGNvbnN0IGNvbGRCcmV3SW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJ2NvZmZlZS1pbWcnKTtcbiAgICBjb2xkQnJld0ltZy5zcmMgPSBjb2xkYnJldzsgXG4gICAgY29uc3QgY29sZEJyZXdUeHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbW9jaGEtdHh0Jyk7XG4gICAgY29sZEJyZXdUeHQuaW5uZXJIVE1MID0gXCJDb2xkIEJyZXc6IEZvciB0aG9zZSB3aG8gbG92ZSBhIHJlZnJlc2hpbmcgaWNlZCBjb2ZmZWUsIG91ciBjb2xkIGJyZXcgaXMgdGhlIHBlcmZlY3QgY2hvaWNlLiBNYWRlIGJ5IHN0ZWVwaW5nIG91ciBwcmVtaXVtIGNvZmZlZSBiZWFucyBpbiBjb2xkIHdhdGVyIGZvciAxMi0yNCBob3Vycywgb3VyIGNvbGQgYnJldyBpcyBzbW9vdGggYW5kIGJvbGQgd2l0aCBhIHN1YnRsZSBzd2VldG5lc3MuIEl0J3MgdGhlIHBlcmZlY3QgcGljay1tZS11cCBvbiBhIGhvdCBzdW1tZXIgZGF5LlwiXG5cbiAgICBjb2ZmZWUyLmFwcGVuZChjb2xkQnJld0ltZywgY29sZEJyZXdUeHQpXG5cbiAgICBjb25zdCBjb2ZmZWUzID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NvZmZlZScpXG4gICAgY29uc3QgY2FwcHVjY2lub0ltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsICdjb2ZmZWUtaW1nJyk7XG4gICAgY2FwcHVjY2lub0ltZy5zcmMgPSBjYXBwdWNjaW5vOyBcbiAgICBjb25zdCBjYXBwdWNjaW5vVHh0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ21vY2hhLXR4dCcpO1xuICAgIGNhcHB1Y2Npbm9UeHQuaW5uZXJIVE1MID0gXCJDYXBwdWNjaW5vOiBBIGNsYXNzaWMgZXNwcmVzc28tYmFzZWQgZHJpbmsgdGhhdCBjb21iaW5lcyByaWNoIGVzcHJlc3NvIHdpdGggc3RlYW1lZCBtaWxrIGFuZCBmcm90aHkgbWlsayBmb2FtLiBPdXIgY2FwcHVjY2lubyBpcyB0aGUgcGVyZmVjdCBiYWxhbmNlIG9mIGJvbGQgZXNwcmVzc28gYW5kIGNyZWFteSBtaWxrLCB3aXRoIGp1c3QgdGhlIHJpZ2h0IGFtb3VudCBvZiBmb2FtIGZvciBhIGx1eHVyaW91cyBmaW5pc2guXCJcblxuICAgIGNvZmZlZTMuYXBwZW5kKGNhcHB1Y2Npbm9JbWcsIGNhcHB1Y2Npbm9UeHQpXG5cbiAgICBhcHBlbmROZXcobWVudUl0ZW1zLCB0aXRsZSlcbiAgICBtZW51SXRlbXMuYXBwZW5kKGNvZmZlZTEsIGNvZmZlZTIsIGNvZmZlZTMpXG4gICAgYXBwZW5kTmV3KG1lbnVDb250ZW50LCBtZW51SXRlbXMpXG5cblxuICAgIHJldHVybiBtZW51Q29udGVudFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==