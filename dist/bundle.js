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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPreviewItem: () => (/* binding */ createPreviewItem),\n/* harmony export */   createTile: () => (/* binding */ createTile),\n/* harmony export */   movieNotFound: () => (/* binding */ movieNotFound),\n/* harmony export */   renderMainComponent: () => (/* binding */ renderMainComponent),\n/* harmony export */   renderMediaInfo: () => (/* binding */ renderMediaInfo),\n/* harmony export */   renderNotFound: () => (/* binding */ renderNotFound)\n/* harmony export */ });\n\r\nconst createPreviewItem = ({ poster, title, year, id }) => `\r\n    <li data-id=\"${id}\" class=\"preview-item\">\r\n        <img class=\"preview-poster\" src=\"${poster}\" alt=\"poster for ${title}\">\r\n        <span class=\"preview-title\">\r\n            ${title}\r\n        </span>\r\n        <span class=\"preview-year\">\r\n            ${year}\r\n        </span>\r\n    </li>\r\n`\r\n\r\n\r\nconst createTile = ({ poster, title, year, id }) => `\r\n    <div data-id=\"${id}\" class=\"movie-card\">\r\n        <img src=\"${poster}\"></img>\r\n        <h3>${title}<br>(${year})</h3>\r\n    </div>\r\n`\r\n\r\nconst movieNotFound = \"<li class='preview-item'>Movie wasn't found</li>\"\r\n\r\n\r\nconst renderMainComponent = () => {\r\n    document.getElementById('app').innerHTML = `\r\n<div class=\"container\">\r\n    <aside class=\"filters\">\r\n        <h2>Filters</h2>\r\n        <div>\r\n            <input type=\"checkbox\" id=\"movies\" name=\"type\" value=\"movies\">\r\n            <label for=\"movies\">Movies</label>\r\n        </div>\r\n        <div>\r\n            <input type=\"checkbox\" id=\"series\" name=\"type\" value=\"series\">\r\n            <label for=\"series\">Series</label>\r\n            <!-- Additional fields for series -->\r\n            <div class=\"series-options\" style=\"display: none;\">\r\n                <input type=\"number\" id=\"season\" placeholder=\"Season\" min=\"1\">\r\n                <input type=\"number\" id=\"episode\" placeholder=\"Episode\" min=\"1\">\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <input type=\"checkbox\" id=\"cartoons\" name=\"type\" value=\"cartoons\">\r\n            <label for=\"cartoons\">Cartoons</label>\r\n        </div>\r\n        <div>\r\n            <label for=\"year\">Release Year:</label>\r\n            <input type=\"number\" id=\"year\" placeholder=\"2023\" min=\"1900\" max=\"2023\">\r\n        </div>\r\n    </aside>\r\n    <main class=\"content\">\r\n        <div class=\"search-container\">\r\n            <div class=\"search-wrapper\">\r\n                <input type=\"search\" class=\"search\" id=\"search-box\" placeholder=\"Enter a title...\">\r\n                <ul id=\"preview-list\" class=\"preview-list hidden\"></ul>\r\n            </div>\r\n            <button id=\"search-button\">Search</button>\r\n        </div>\r\n        <div id=\"posters\" class=\"results-container\"></div>\r\n    </main>\r\n</div>\r\n`\r\n}\r\n\r\nconst renderMediaInfo = ({title, released, country, actors, plot, poster}) => {\r\n    document.getElementById('app').innerHTML = `\r\n\r\n    <main class=\"media-content\">\r\n        <div class=\"media-img\">\r\n            <img src=\"${poster}\" alt=\"poster for ${title}\">\r\n        </div>\r\n        <div class=\"media-desc\">\r\n            <h1>${title}</h1>\r\n            <div class=\"media-info\">\r\n                <p><strong>Released:</strong><br>${released}</p>\r\n                <p><strong>Country:</strong><br>${country}</p>\r\n                <p><strong>Actors:</strong><br>${actors}</p>\r\n                <p><strong>Description:</strong><br>${plot}</p>\r\n                <button class=\"media-btn\" id=\"back-to-home\">Back</button>\r\n            </div>\r\n        </div>\r\n    </main>\r\n`\r\n}\r\n\r\nconst renderNotFound = () => {\r\n    return document.getElementById('app').innerHTML = movieNotFound;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://films/./scripts/components.js?");

/***/ }),

/***/ "./scripts/constants.js":
/*!******************************!*\
  !*** ./scripts/constants.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_KEY: () => (/* binding */ API_KEY)\n/* harmony export */ });\nconst API_KEY = \"eaca1b96\";\r\n\n\n//# sourceURL=webpack://films/./scripts/constants.js?");

/***/ }),

/***/ "./scripts/helpers/createCollectionList.js":
/*!*************************************************!*\
  !*** ./scripts/helpers/createCollectionList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCollectionList: () => (/* binding */ createCollectionList)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components.js */ \"./scripts/components.js\");\n\r\n\r\nfunction createCollectionList(data, createItem, showDefaultMessage, numberOfElements) {\r\n    const searchedCollection = data.Search\r\n    if (!data.Search) {\r\n        return showDefaultMessage ? _components_js__WEBPACK_IMPORTED_MODULE_0__.movieNotFound : [];\r\n    }\r\n\r\n    return data.Search\r\n        .slice(0, numberOfElements)\r\n        .map(({ Title: title, Year: year, Poster: poster, imdbID: id }) => createItem({poster, title, year, id}))\r\n        .join('')\r\n}\r\n\n\n//# sourceURL=webpack://films/./scripts/helpers/createCollectionList.js?");

/***/ }),

/***/ "./scripts/helpers/debounce.js":
/*!*************************************!*\
  !*** ./scripts/helpers/debounce.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(func, delay) {\r\n    let timeoutId;\r\n    return function(...arg) {\r\n        clearTimeout(timeoutId);\r\n        timeoutId = setTimeout(() => {\r\n            func(...arg)\r\n        }, delay)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://films/./scripts/helpers/debounce.js?");

/***/ }),

/***/ "./scripts/helpers/getElements.js":
/*!****************************************!*\
  !*** ./scripts/helpers/getElements.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPostersContainer: () => (/* binding */ getPostersContainer),\n/* harmony export */   getPreviewList: () => (/* binding */ getPreviewList),\n/* harmony export */   getSearchElement: () => (/* binding */ getSearchElement)\n/* harmony export */ });\nfunction getSearchElement() {\r\n    return document.getElementById(\"search-box\");\r\n}\r\n\r\nfunction getPostersContainer() {\r\n    return document.getElementById(\"posters\");\r\n}\r\n\r\nfunction getPreviewList() {\r\n    return document.querySelector('.preview-list');\r\n}\r\n\n\n//# sourceURL=webpack://films/./scripts/helpers/getElements.js?");

/***/ }),

/***/ "./scripts/helpers/urls.js":
/*!*********************************!*\
  !*** ./scripts/helpers/urls.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDetailedInfoUrl: () => (/* binding */ createDetailedInfoUrl),\n/* harmony export */   createPreviewUrl: () => (/* binding */ createPreviewUrl)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./scripts/constants.js\");\n\r\n\r\nfunction createPreviewUrl(value) {\r\n    return `https://www.omdbapi.com/?s=${value}&apikey=${_constants_js__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`\r\n}\r\n\r\nfunction createDetailedInfoUrl(id) {\r\n    return `https://www.omdbapi.com/?i=${id}&apikey=${_constants_js__WEBPACK_IMPORTED_MODULE_0__.API_KEY}&plot=full`\r\n}\r\n\n\n//# sourceURL=webpack://films/./scripts/helpers/urls.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/debounce.js */ \"./scripts/helpers/debounce.js\");\n/* harmony import */ var _helpers_urls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/urls.js */ \"./scripts/helpers/urls.js\");\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ \"./scripts/components.js\");\n/* harmony import */ var _helpers_createCollectionList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/createCollectionList.js */ \"./scripts/helpers/createCollectionList.js\");\n/* harmony import */ var _helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/getElements.js */ \"./scripts/helpers/getElements.js\");\n// import { searchCollection } from \"./mock.js\"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction hidePreview() {\r\n    const previewList = (0,_helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__.getPreviewList)();\r\n    previewList.classList.add('hidden');\r\n    previewList.innerHTML = '';\r\n}\r\n\r\nfunction hidePreviewAndCreatePosters(previewResponse) {\r\n    hidePreview()\r\n\r\n    const collection = (0,_helpers_createCollectionList_js__WEBPACK_IMPORTED_MODULE_3__.createCollectionList)(previewResponse.data, _components_js__WEBPACK_IMPORTED_MODULE_2__.createTile);\r\n    const list = (0,_helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__.getPostersContainer)();\r\n    list.innerHTML = collection;\r\n    showMediaPage()\r\n}\r\n\r\nfunction handleInputSearch(previewResponse) {\r\n    return async function (event) {\r\n        const value = event.target.value\r\n        if (value.length > 2) { \r\n            const data = await fetch((0,_helpers_urls_js__WEBPACK_IMPORTED_MODULE_1__.createPreviewUrl)(value));\r\n            const response = await data.json()\r\n            previewResponse.data = response;\r\n            const collection = (0,_helpers_createCollectionList_js__WEBPACK_IMPORTED_MODULE_3__.createCollectionList)(response, _components_js__WEBPACK_IMPORTED_MODULE_2__.createPreviewItem, true, 5);\r\n            const previewList = (0,_helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__.getPreviewList)();\r\n            previewList.classList.remove('hidden');\r\n            previewList.innerHTML = collection;\r\n        } else {\r\n            hidePreview()\r\n        }\r\n    }\r\n}\r\n\r\nfunction handleSearch(previewResponse) {\r\n    return function (event) {\r\n        event.stopImmediatePropagation();\r\n        const value = event.target.value;\r\n        if(!value) {\r\n            hidePreview()\r\n        }\r\n\r\n        hidePreviewAndCreatePosters(previewResponse)\r\n    }\r\n}\r\n\r\nfunction handleSearchButton(previewResponse) {\r\n    return function (event) {\r\n        const search = (0,_helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__.getSearchElement)();\r\n        const value = search.value\r\n\r\n        if(!value) {\r\n            return false\r\n        }\r\n\r\n        hidePreviewAndCreatePosters(previewResponse)\r\n    }\r\n}\r\n\r\n\r\nfunction app() {\r\n    let previewResponse = {};\r\n    const search = (0,_helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__.getSearchElement)();\r\n    const searchButton = document.getElementById(\"search-button\");\r\n    searchButton.addEventListener('click', handleSearchButton(previewResponse))\r\n    search.addEventListener('search', handleSearch(previewResponse));\r\n    search.addEventListener('input', (0,_helpers_debounce_js__WEBPACK_IMPORTED_MODULE_0__.debounce)(handleInputSearch(previewResponse), 500));\r\n}\r\n\r\nfunction previewMediaInfo() {\r\n    const previewList = document.getElementById('preview-list');\r\n    previewList.addEventListener('click', getMediaInfo);\r\n\r\n    function getMediaInfo(event) {\r\n        // console.log('event.target.tagName', event.target.tagName === \"LI\")\r\n        const item = event.target.matches('.preview-item');\r\n        if(item) {\r\n            const id = event.target.dataset.id;\r\n            history.pushState(null, null, `/media?id=${id}`);\r\n            renderMediaPage()\r\n        }\r\n    }\r\n}\r\n\r\nfunction showMediaPage() {\r\n    const poster = (0,_helpers_getElements_js__WEBPACK_IMPORTED_MODULE_4__.getPostersContainer)()\r\n\r\n    poster.addEventListener('click', handleMediaPage )\r\n\r\n    function handleMediaPage(event){\r\n        const item = event.target.closest('.movie-card');\r\n        if(item) {\r\n            const id = item.dataset.id;\r\n            history.pushState(null, null, `/media?id=${id}`);\r\n            renderMediaPage()\r\n        }\r\n    }\r\n}\r\n\r\nfunction handleReturnToHome() {\r\n    history.pushState(null, null, `/`);\r\n    renderMainPage();\r\n}\r\n\r\nasync function renderMediaPage() {\r\n    try {\r\n        const id = location.search.slice(4)\r\n        const data = await fetch((0,_helpers_urls_js__WEBPACK_IMPORTED_MODULE_1__.createDetailedInfoUrl)(id));\r\n        const response = await data.json()\r\n        const { Title: title, Released: released, Country: country, Actors: actors, Plot: plot, Poster: poster } = response;\r\n        (0,_components_js__WEBPACK_IMPORTED_MODULE_2__.renderMediaInfo)({title, released, country, actors, plot, poster})\r\n\r\n        document.getElementById(\"back-to-home\").addEventListener('click', handleReturnToHome)\r\n    } catch (error) {\r\n        (0,_components_js__WEBPACK_IMPORTED_MODULE_2__.renderNotFound)()\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction renderMainPage() {\r\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_2__.renderMainComponent)()\r\n    app();\r\n    previewMediaInfo()\r\n}\r\n\r\n\r\nfunction router() {\r\n    if (location.pathname.startsWith(\"/media\")) {\r\n        renderMediaPage();\r\n    } else {\r\n        renderMainPage();\r\n    }\r\n}\r\n\r\nrouter()\r\n\n\n//# sourceURL=webpack://films/./scripts/index.js?");

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