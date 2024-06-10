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

/***/ "./scripts/components.js":
/*!*******************************!*\
  !*** ./scripts/components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPreviewItem: () => (/* binding */ createPreviewItem),\n/* harmony export */   createTile: () => (/* binding */ createTile),\n/* harmony export */   movieNotFound: () => (/* binding */ movieNotFound),\n/* harmony export */   renderMainComponent: () => (/* binding */ renderMainComponent),\n/* harmony export */   renderMediaInfo: () => (/* binding */ renderMediaInfo),\n/* harmony export */   renderNotFound: () => (/* binding */ renderNotFound)\n/* harmony export */ });\nconst createPreviewItem = _ref => {\n  let {\n    poster,\n    title,\n    year,\n    id\n  } = _ref;\n  return `\n    <li data-id=\"${id}\" class=\"preview-item\">\n        <img class=\"preview-poster\" src=\"${poster}\" alt=\"poster for ${title}\">\n        <span class=\"preview-title\">\n            ${title}\n        </span>\n        <span class=\"preview-year\">\n            ${year}\n        </span>\n    </li>\n`;\n};\nconst createTile = _ref2 => {\n  let {\n    poster,\n    title,\n    year,\n    id\n  } = _ref2;\n  return `\n    <div data-id=\"${id}\" class=\"movie-card\">\n        <img src=\"${poster}\"></img>\n        <h3>${title}<br>(${year})</h3>\n    </div>\n`;\n};\nconst movieNotFound = \"<li class='preview-item'>Movie wasn't found</li>\";\nconst renderMainComponent = () => {\n  document.getElementById('app').innerHTML = `\n<div class=\"container\">\n    <aside class=\"filters\">\n        <h2>Filters</h2>\n        <div>\n            <input type=\"checkbox\" id=\"movies\" name=\"type\" value=\"movies\">\n            <label for=\"movies\">Movies</label>\n        </div>\n        <div>\n            <input type=\"checkbox\" id=\"series\" name=\"type\" value=\"series\">\n            <label for=\"series\">Series</label>\n            <!-- Additional fields for series -->\n            <div class=\"series-options\" style=\"display: none;\">\n                <input type=\"number\" id=\"season\" placeholder=\"Season\" min=\"1\">\n                <input type=\"number\" id=\"episode\" placeholder=\"Episode\" min=\"1\">\n            </div>\n        </div>\n        <div>\n            <input type=\"checkbox\" id=\"cartoons\" name=\"type\" value=\"cartoons\">\n            <label for=\"cartoons\">Cartoons</label>\n        </div>\n        <div>\n            <label for=\"year\">Release Year:</label>\n            <input type=\"number\" id=\"year\" placeholder=\"2023\" min=\"1900\" max=\"2023\">\n        </div>\n    </aside>\n    <main class=\"content\">\n        <div class=\"search-container\">\n            <div class=\"search-wrapper\">\n                <input type=\"search\" class=\"search\" id=\"search-box\" placeholder=\"Enter a title...\">\n                <ul id=\"preview-list\" class=\"preview-list hidden\"></ul>\n            </div>\n            <button id=\"search-button\">Search</button>\n        </div>\n        <div id=\"posters\" class=\"results-container\"></div>\n    </main>\n</div>\n`;\n};\nconst renderMediaInfo = _ref3 => {\n  let {\n    title,\n    released,\n    country,\n    actors,\n    plot,\n    poster\n  } = _ref3;\n  document.getElementById('app').innerHTML = `\n\n    <main class=\"media-content\">\n        <div class=\"media-img\">\n            <img src=\"${poster}\" alt=\"poster for ${title}\">\n        </div>\n        <div class=\"media-desc\">\n            <h1>${title}</h1>\n            <div class=\"media-info\">\n                <p><strong>Released:</strong><br>${released}</p>\n                <p><strong>Country:</strong><br>${country}</p>\n                <p><strong>Actors:</strong><br>${actors}</p>\n                <p><strong>Description:</strong><br>${plot}</p>\n                <button class=\"media-btn\" id=\"back-to-home\">Back</button>\n            </div>\n        </div>\n    </main>\n`;\n};\nconst renderNotFound = () => {\n  return document.getElementById('app').innerHTML = movieNotFound;\n};\n\n\n//# sourceURL=webpack://films/./scripts/components.js?");

/***/ }),

/***/ "./scripts/constants.js":
/*!******************************!*\
  !*** ./scripts/constants.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_KEY: () => (/* binding */ API_KEY)\n/* harmony export */ });\nconst API_KEY = \"eaca1b96\";\n\n//# sourceURL=webpack://films/./scripts/constants.js?");

/***/ }),

/***/ "./scripts/helpers/createCollectionList.js":
/*!*************************************************!*\
  !*** ./scripts/helpers/createCollectionList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCollectionList: () => (/* binding */ createCollectionList)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components.js */ \"./scripts/components.js\");\n\nfunction createCollectionList(data, createItem, showDefaultMessage, numberOfElements) {\n  const searchedCollection = data.Search;\n  if (!data.Search) {\n    return showDefaultMessage ? _components_js__WEBPACK_IMPORTED_MODULE_0__.movieNotFound : [];\n  }\n  return data.Search.slice(0, numberOfElements).map(_ref => {\n    let {\n      Title: title,\n      Year: year,\n      Poster: poster,\n      imdbID: id\n    } = _ref;\n    return createItem({\n      poster,\n      title,\n      year,\n      id\n    });\n  }).join('');\n}\n\n//# sourceURL=webpack://films/./scripts/helpers/createCollectionList.js?");

/***/ }),

/***/ "./scripts/helpers/debounce.js":
/*!*************************************!*\
  !*** ./scripts/helpers/debounce.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(func, delay) {\n  let timeoutId;\n  return function () {\n    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {\n      arg[_key] = arguments[_key];\n    }\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => {\n      func(...arg);\n    }, delay);\n  };\n}\n\n//# sourceURL=webpack://films/./scripts/helpers/debounce.js?");

/***/ }),

/***/ "./scripts/helpers/getElements.js":
/*!****************************************!*\
  !*** ./scripts/helpers/getElements.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPostersContainer: () => (/* binding */ getPostersContainer),\n/* harmony export */   getPreviewList: () => (/* binding */ getPreviewList),\n/* harmony export */   getSearchElement: () => (/* binding */ getSearchElement)\n/* harmony export */ });\nfunction getSearchElement() {\n  return document.getElementById(\"search-box\");\n}\nfunction getPostersContainer() {\n  return document.getElementById(\"posters\");\n}\nfunction getPreviewList() {\n  return document.querySelector('.preview-list');\n}\n\n//# sourceURL=webpack://films/./scripts/helpers/getElements.js?");

/***/ }),

/***/ "./scripts/helpers/urls.js":
/*!*********************************!*\
  !*** ./scripts/helpers/urls.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDetailedInfoUrl: () => (/* binding */ createDetailedInfoUrl),\n/* harmony export */   createPreviewUrl: () => (/* binding */ createPreviewUrl)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./scripts/constants.js\");\n\nfunction createPreviewUrl(value) {\n  return `https://www.omdbapi.com/?s=${value}&apikey=${_constants_js__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`;\n}\nfunction createDetailedInfoUrl(id) {\n  return `https://www.omdbapi.com/?i=${id}&apikey=${_constants_js__WEBPACK_IMPORTED_MODULE_0__.API_KEY}&plot=full`;\n}\n\n//# sourceURL=webpack://films/./scripts/helpers/urls.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/debounce.js */ \"./scripts/helpers/debounce.js\");\n/* harmony import */ var _helpers_urls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/urls.js */ \"./scripts/helpers/urls.js\");\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ \"./scripts/components.js\");\n/* harmony import */ var _helpers_createCollectionList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/createCollectionList.js */ \"./scripts/helpers/createCollectionList.js\");\n/* harmony import */ var _helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/getElements.js */ \"./scripts/helpers/getElements.js\");\n// import { searchCollection } from \"./mock.js\"\n\n\n\n\n\nfunction hidePreview() {\n  const previewList = (0,_helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__.getPreviewList)();\n  previewList.classList.add('hidden');\n  previewList.innerHTML = '';\n}\nfunction hidePreviewAndCreatePosters(previewResponse) {\n  hidePreview();\n  const collection = (0,_helpers_createCollectionList_js__WEBPACK_IMPORTED_MODULE_3__.createCollectionList)(previewResponse.data, _components_js__WEBPACK_IMPORTED_MODULE_2__.createTile);\n  const list = (0,_helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__.getPostersContainer)();\n  list.innerHTML = collection;\n  showMediaPage();\n}\nfunction handleInputSearch(previewResponse) {\n  return async function (event) {\n    const value = event.target.value;\n    if (value.length > 2) {\n      const data = await fetch((0,_helpers_urls_js__WEBPACK_IMPORTED_MODULE_1__.createPreviewUrl)(value));\n      const response = await data.json();\n      previewResponse.data = response;\n      const collection = (0,_helpers_createCollectionList_js__WEBPACK_IMPORTED_MODULE_3__.createCollectionList)(response, _components_js__WEBPACK_IMPORTED_MODULE_2__.createPreviewItem, true, 5);\n      const previewList = (0,_helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__.getPreviewList)();\n      previewList.classList.remove('hidden');\n      previewList.innerHTML = collection;\n    } else {\n      hidePreview();\n    }\n  };\n}\nfunction handleSearch(previewResponse) {\n  return function (event) {\n    event.stopImmediatePropagation();\n    const value = event.target.value;\n    if (!value) {\n      hidePreview();\n    }\n    hidePreviewAndCreatePosters(previewResponse);\n  };\n}\nfunction handleSearchButton(previewResponse) {\n  return function (event) {\n    const search = (0,_helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__.getSearchElement)();\n    const value = search.value;\n    if (!value) {\n      return false;\n    }\n    hidePreviewAndCreatePosters(previewResponse);\n  };\n}\nfunction app() {\n  let previewResponse = {};\n  const search = (0,_helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__.getSearchElement)();\n  const searchButton = document.getElementById(\"search-button\");\n  searchButton.addEventListener('click', handleSearchButton(previewResponse));\n  search.addEventListener('search', handleSearch(previewResponse));\n  search.addEventListener('input', (0,_helpers_debounce_js__WEBPACK_IMPORTED_MODULE_0__.debounce)(handleInputSearch(previewResponse), 500));\n}\nfunction previewMediaInfo() {\n  const previewList = document.getElementById('preview-list');\n  previewList.addEventListener('click', getMediaInfo);\n  function getMediaInfo(event) {\n    // console.log('event.target.tagName', event.target.tagName === \"LI\")\n    const item = event.target.matches('.preview-item');\n    if (item) {\n      const id = event.target.dataset.id;\n      history.pushState(null, null, `/media?id=${id}`);\n      renderMediaPage();\n    }\n  }\n}\nfunction showMediaPage() {\n  const poster = (0,_helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__.getPostersContainer)();\n  poster.addEventListener('click', handleMediaPage);\n  function handleMediaPage(event) {\n    const item = event.target.closest('.movie-card');\n    if (item) {\n      const id = item.dataset.id;\n      history.pushState(null, null, `/media?id=${id}`);\n      renderMediaPage();\n    }\n  }\n}\nfunction handleReturnToHome() {\n  history.pushState(null, null, `/`);\n  renderMainPage();\n}\nasync function renderMediaPage() {\n  try {\n    const id = location.search.slice(4);\n    const data = await fetch((0,_helpers_urls_js__WEBPACK_IMPORTED_MODULE_1__.createDetailedInfoUrl)(id));\n    const response = await data.json();\n    const {\n      Title: title,\n      Released: released,\n      Country: country,\n      Actors: actors,\n      Plot: plot,\n      Poster: poster\n    } = response;\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_2__.renderMediaInfo)({\n      title,\n      released,\n      country,\n      actors,\n      plot,\n      poster\n    });\n    document.getElementById(\"back-to-home\").addEventListener('click', handleReturnToHome);\n  } catch (error) {\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_2__.renderNotFound)();\n  }\n}\nfunction renderMainPage() {\n  (0,_components_js__WEBPACK_IMPORTED_MODULE_2__.renderMainComponent)();\n  app();\n  previewMediaInfo();\n}\nfunction router() {\n  if (location.pathname.startsWith(\"/media\")) {\n    renderMediaPage();\n  } else {\n    renderMainPage();\n  }\n}\nrouter();\n\n//# sourceURL=webpack://films/./scripts/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;