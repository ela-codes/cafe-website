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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUCxpREFBaUQsUUFBUTtBQUN6RDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7VUNwQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ040RDs7QUFFckQ7QUFDUCxxQkFBcUIsK0RBQWE7QUFDbEMsa0JBQWtCLCtEQUFhO0FBQy9CO0FBQ0E7QUFDQSxxQkFBcUIsK0RBQWE7QUFDbEM7OztBQUdBLElBQUksNERBQVM7QUFDYixJQUFJLDJEQUFTO0FBQ2I7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbWVudH1gKTtcbiAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kTmV3KHBhcmVudCwgY2hpbGQpIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUJ0bihjdXJyQnRuLCBuZXdCdG4pIHtcbiAgICBjdXJyQnRuLnN0eWxlLmJvcmRlckxlZnQgPSAnMHB4JztcbiAgICBuZXdCdG4uc3R5bGUuYm9yZGVyTGVmdCA9ICd2YXIoLS1zaWRlYm9yZGVyKSc7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBhZ2VDb250ZW50KGN1cnJDb250ZW50LCBuZXdDb250ZW50KSB7XG4gICAgY3VyckNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBuZXdDb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kTmV3IH0gZnJvbSAnLi9wYWdlVGVtcGxhdGUuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgaG9tZVBhZ2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaG9tZS1jb250ZW50Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsICdob21lLXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJ1dlbGNvbWUnXG4gICAgXG4gICAgY29uc3QgYWJvdXRNc2cgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnYWJvdXQtbXNnJyk7XG4gICAgYWJvdXRNc2cuaW5uZXJIVE1MID0gXCJBdCBvdXIgY29mZmVlIHNob3AsIHdlJ3JlIG1vcmUgdGhhbiBqdXN0IGEgcGxhY2UgdG8gZ3JhYiBhIGN1cCBvZiBqb2UuIFdlJ3JlIGEgY29tbXVuaXR5IG9mIGNvZmZlZSBsb3ZlcnMsIHN0b3J5dGVsbGVycywgYW5kIGRyZWFtZXJzLiBTbyBjb21lIGluLCBncmFiIGEgc2VhdCwgYW5kIGxldCdzIHNoYXJlIGEgc3Rvcnkgb3ZlciBhIHBlcmZlY3QgY3VwIG9mIGNvZmZlZS4gPGJyPiA8YnI+IFdlIGJlbGlldmUgdGhhdCB0aGUgcGVyZmVjdCBjdXAgb2YgY29mZmVlIGlzbid0IGp1c3QgYWJvdXQgdGhlIGJlYW5zIG9yIHRoZSBicmV3aW5nIG1ldGhvZCwgYnV0IGFsc28gdGhlIGV4cGVyaWVuY2UgdGhhdCBzdXJyb3VuZHMgaXQuIFRoYXQncyB3aHkgd2Ugc3RyaXZlIHRvIGNyZWF0ZSBhIHdhcm0gYW5kIGludml0aW5nIGF0bW9zcGhlcmUgd2hlcmUgZXZlcnlvbmUgZmVlbHMgd2VsY29tZSBhbmQgYXQgaG9tZS5cIlxuXG5cbiAgICBhcHBlbmROZXcoaG9tZVBhZ2UsIHRpdGxlKTtcbiAgICBhcHBlbmROZXcoaG9tZVBhZ2UsIGFib3V0TXNnKTtcbiAgICBcbiAgICByZXR1cm4gaG9tZVBhZ2Vcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==