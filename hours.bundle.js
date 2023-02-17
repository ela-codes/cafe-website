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
/*!**********************!*\
  !*** ./src/hours.js ***!
  \**********************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91cnMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUCxpREFBaUQsUUFBUTtBQUN6RDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7VUNwQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ040RDs7O0FBR3JEO0FBQ1Asc0JBQXNCLCtEQUFhO0FBQ25DLGtCQUFrQiwrREFBYTtBQUMvQjtBQUNBO0FBQ0EscUJBQXFCLCtEQUFhO0FBQ2xDO0FBQ0EseUJBQXlCLCtEQUFhO0FBQ3RDOztBQUVBLHFCQUFxQiwrREFBYTtBQUNsQztBQUNBLHlCQUF5QiwrREFBYTtBQUN0Qzs7O0FBR0EsSUFBSSwyREFBUztBQUNiOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZVRlbXBsYXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob3Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtZW50fWApO1xuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBuZXdFbGVtZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmROZXcocGFyZW50LCBjaGlsZCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZClcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQWN0aXZlQnRuKGN1cnJCdG4sIG5ld0J0bikge1xuICAgIGN1cnJCdG4uc3R5bGUuYm9yZGVyTGVmdCA9ICcwcHgnO1xuICAgIG5ld0J0bi5zdHlsZS5ib3JkZXJMZWZ0ID0gJ3ZhcigtLXNpZGVib3JkZXIpJztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUGFnZUNvbnRlbnQoY3VyckNvbnRlbnQsIG5ld0NvbnRlbnQpIHtcbiAgICBjdXJyQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG5ld0NvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmROZXcgfSBmcm9tICcuL3BhZ2VUZW1wbGF0ZS5qcydcblxuXG5leHBvcnQgZnVuY3Rpb24gaG91cnNQYWdlQ29udGVudCgpIHtcbiAgICBjb25zdCBob3Vyc1BhZ2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaG91cnMtY29udGVudCcpO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCAnaG91cnMtdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnSG91cnMnXG4gICAgXG4gICAgY29uc3Qgd2Vla2RheXMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGF5cycpO1xuICAgIHdlZWtkYXlzLmlubmVySFRNTCA9ICdNb25kYXkgLSBGcmlkYXknXG4gICAgY29uc3Qgd2Vla2RheUhvdXJzID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hvdXJzJyk7XG4gICAgd2Vla2RheUhvdXJzLmlubmVySFRNTCA9ICc2OjAwIC0gMTU6MDAnO1xuXG4gICAgY29uc3Qgd2Vla2VuZHMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGF5cycpO1xuICAgIHdlZWtlbmRzLmlubmVySFRNTCA9ICdTYXR1cmRheSAtIFN1bmRheSdcbiAgICBjb25zdCB3ZWVrZW5kSG91cnMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaG91cnMnKTtcbiAgICB3ZWVrZW5kSG91cnMuaW5uZXJIVE1MID0gJzg6MDAgLSAxMjowMCc7XG5cblxuICAgIGFwcGVuZE5ldyhob3Vyc1BhZ2UsIHRpdGxlKTtcbiAgICBob3Vyc1BhZ2UuYXBwZW5kKHdlZWtkYXlzLCB3ZWVrZGF5SG91cnMsIHdlZWtlbmRzLCB3ZWVrZW5kSG91cnMpXG5cbiAgICByZXR1cm4gaG91cnNQYWdlXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=