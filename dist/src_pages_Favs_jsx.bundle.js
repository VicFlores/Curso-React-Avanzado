/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcurso_react_avanzado"] = self["webpackChunkcurso_react_avanzado"] || []).push([["src_pages_Favs_jsx"],{

/***/ "./src/components/ListOfFavs/ListOfFavs.jsx":
/*!**************************************************!*\
  !*** ./src/components/ListOfFavs/ListOfFavs.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/core/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./src/components/ListOfFavs/style.js\");\n\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  query getFavs {\\n    favs {\\n      id\\n      categoryId\\n      src\\n      likes\\n      userId\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar GET_FAVORITES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\n\nvar ListOfFavs = function ListOfFavs() {\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_FAVORITES, {\n    fetchPolicy: 'network-only'\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", null, \"Loading...\");\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", null, error);\n  var favs = data.favs;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_style__WEBPACK_IMPORTED_MODULE_2__.Grid, null, favs.map(function (fav) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_style__WEBPACK_IMPORTED_MODULE_2__.Link, {\n      to: \"/detail/\".concat(fav.id),\n      key: fav.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_style__WEBPACK_IMPORTED_MODULE_2__.Image, {\n      src: fav.src,\n      alt: \"My Favorites images\"\n    }));\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListOfFavs);\n\n//# sourceURL=webpack://curso-react-avanzado/./src/components/ListOfFavs/ListOfFavs.jsx?");

/***/ }),

/***/ "./src/components/ListOfFavs/style.js":
/*!********************************************!*\
  !*** ./src/components/ListOfFavs/style.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Link\": () => /* binding */ Link,\n/* harmony export */   \"Grid\": () => /* binding */ Grid,\n/* harmony export */   \"Image\": () => /* binding */ Image\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ \"./node_modules/@reach/router/es/index.js\");\n\n\nfunction _templateObject3() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  object-fit: cover;\\n  height: 100%;\\n  width: 100%;\\n  position: absolute;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  padding-top: 32px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  border-radius: 8px;\\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);\\n  display: inline-block;\\n  margin: 1%;\\n  overflow: hidden;\\n  position: relative;\\n  width: 31.33%;\\n  &:after {\\n    content: '';\\n    display: block;\\n    padding-bottom: 100%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar Link = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_reach_router__WEBPACK_IMPORTED_MODULE_1__.Link)(_templateObject());\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject2());\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.img(_templateObject3());\n\n//# sourceURL=webpack://curso-react-avanzado/./src/components/ListOfFavs/style.js?");

/***/ }),

/***/ "./src/pages/Favs.jsx":
/*!****************************!*\
  !*** ./src/pages/Favs.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _components_ListOfFavs_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ListOfFavs/ListOfFavs */ \"./src/components/ListOfFavs/ListOfFavs.jsx\");\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./src/components/Layout/Layout.jsx\");\n\n\n\n\nvar Favs = function Favs() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    title: \"Tus favoritos\",\n    subtitle: \"Tu lista de mascotas favoritas\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ListOfFavs_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__.default, null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Favs);\n\n//# sourceURL=webpack://curso-react-avanzado/./src/pages/Favs.jsx?");

/***/ })

}]);