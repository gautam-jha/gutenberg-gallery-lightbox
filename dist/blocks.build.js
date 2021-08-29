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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************!*\
  !*** ./src/components/EditorComp.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("function EditorComp(props) {\n\tconsole.log('EditorComp', props);\n\tvar attributes = props.attributes;\n\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\t{ className: props.className },\n\t\twp.element.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t' Select Gallery options in Sidebar'\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\tattributes.gallery && attributes.gallery.map(function (media) {\n\t\t\t\treturn wp.element.createElement('img', { key: media.mediaId, src: media.mediaUrl });\n\t\t\t})\n\t\t)\n\t);\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (EditorComp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0VkaXRvckNvbXAuanM/MGQ4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBFZGl0b3JDb21wKHByb3BzKSB7XG5cdGNvbnNvbGUubG9nKCdFZGl0b3JDb21wJywgcHJvcHMpO1xuXHR2YXIgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXM7XG5cblxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdCdkaXYnLFxuXHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQncCcsXG5cdFx0XHRudWxsLFxuXHRcdFx0JyBTZWxlY3QgR2FsbGVyeSBvcHRpb25zIGluIFNpZGViYXInXG5cdFx0KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQncCcsXG5cdFx0XHRudWxsLFxuXHRcdFx0YXR0cmlidXRlcy5nYWxsZXJ5ICYmIGF0dHJpYnV0ZXMuZ2FsbGVyeS5tYXAoZnVuY3Rpb24gKG1lZGlhKSB7XG5cdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsga2V5OiBtZWRpYS5tZWRpYUlkLCBzcmM6IG1lZGlhLm1lZGlhVXJsIH0pO1xuXHRcdFx0fSlcblx0XHQpXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckNvbXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9FZGl0b3JDb21wLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** ./src/components/SidebarOptions.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    MediaUpload = _wp$blockEditor.MediaUpload,\n    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    Button = _wp$components.Button,\n    ResponsiveWrapper = _wp$components.ResponsiveWrapper;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nfunction SidebarOptions(props) {\n\tvar attributes = props.attributes,\n\t    setAttributes = props.setAttributes,\n\t    media = props.media;\n\n\n\tvar removeMedia = function removeMedia() {\n\t\tprops.setAttributes({ gallery: [] });\n\t};\n\n\tvar onSelectMedia = function onSelectMedia(media) {\n\t\tconsole.log(media);\n\t\tvar images = [];\n\t\tmedia.forEach(function (m) {\n\t\t\treturn images.push({ mediaId: m.id, mediaUrl: m.url });\n\t\t});\n\t\tprops.setAttributes({ gallery: images });\n\t};\n\n\treturn wp.element.createElement(\n\t\tInspectorControls,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tPanelBody,\n\t\t\t{\n\t\t\t\ttitle: __(\"Select block background image\", \"awp\"),\n\t\t\t\tinitialOpen: true\n\t\t\t},\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"editor-post-featured-image\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tMediaUploadCheck,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\t\tonSelect: onSelectMedia,\n\t\t\t\t\t\tvalue: attributes.mediaId,\n\t\t\t\t\t\tallowedTypes: [\"image\"],\n\t\t\t\t\t\trender: function render(_ref) {\n\t\t\t\t\t\t\tvar open = _ref.open;\n\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tclassName: attributes.mediaId == 0 ? \"editor-post-featured-image__toggle\" : \"editor-post-featured-image__preview\",\n\t\t\t\t\t\t\t\t\tonClick: open\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t!attributes && __(\"Choose an image\", \"awp\"),\n\t\t\t\t\t\t\t\tprops.media != undefined && wp.element.createElement(\n\t\t\t\t\t\t\t\t\tResponsiveWrapper,\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tnaturalWidth: props.media.media_details.width,\n\t\t\t\t\t\t\t\t\t\tnaturalHeight: props.media.media_details.height\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\twp.element.createElement(\"img\", { src: props.media.source_url })\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t},\n\t\t\t\t\t\tmultiple: true\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\tattributes.mediaId != 0 && wp.element.createElement(\n\t\t\t\t\tMediaUploadCheck,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\t\ttitle: __(\"Replace image\", \"awp\"),\n\t\t\t\t\t\tvalue: attributes.mediaId,\n\t\t\t\t\t\tonSelect: onSelectMedia,\n\t\t\t\t\t\tallowedTypes: [\"image\"],\n\t\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t\t{ onClick: open, isDefault: true, isLarge: true },\n\t\t\t\t\t\t\t\t__(\"Replace image\", \"awp\")\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t},\n\t\t\t\t\t\tmultiple: true\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\tattributes.mediaId != 0 && wp.element.createElement(\n\t\t\t\t\tMediaUploadCheck,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tButton,\n\t\t\t\t\t\t{ onClick: removeMedia, isLink: true, isDestructive: true },\n\t\t\t\t\t\t__(\"Remove image\", \"awp\")\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t)\n\t);\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (SidebarOptions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGViYXJPcHRpb25zLmpzPzIxODEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF93cCRibG9ja0VkaXRvciA9IHdwLmJsb2NrRWRpdG9yLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGJsb2NrRWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGJsb2NrRWRpdG9yLk1lZGlhVXBsb2FkLFxuICAgIE1lZGlhVXBsb2FkQ2hlY2sgPSBfd3AkYmxvY2tFZGl0b3IuTWVkaWFVcGxvYWRDaGVjaztcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIEJ1dHRvbiA9IF93cCRjb21wb25lbnRzLkJ1dHRvbixcbiAgICBSZXNwb25zaXZlV3JhcHBlciA9IF93cCRjb21wb25lbnRzLlJlc3BvbnNpdmVXcmFwcGVyO1xudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbmZ1bmN0aW9uIFNpZGViYXJPcHRpb25zKHByb3BzKSB7XG5cdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzLFxuXHQgICAgbWVkaWEgPSBwcm9wcy5tZWRpYTtcblxuXG5cdHZhciByZW1vdmVNZWRpYSA9IGZ1bmN0aW9uIHJlbW92ZU1lZGlhKCkge1xuXHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyBnYWxsZXJ5OiBbXSB9KTtcblx0fTtcblxuXHR2YXIgb25TZWxlY3RNZWRpYSA9IGZ1bmN0aW9uIG9uU2VsZWN0TWVkaWEobWVkaWEpIHtcblx0XHRjb25zb2xlLmxvZyhtZWRpYSk7XG5cdFx0dmFyIGltYWdlcyA9IFtdO1xuXHRcdG1lZGlhLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcblx0XHRcdHJldHVybiBpbWFnZXMucHVzaCh7IG1lZGlhSWQ6IG0uaWQsIG1lZGlhVXJsOiBtLnVybCB9KTtcblx0XHR9KTtcblx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgZ2FsbGVyeTogaW1hZ2VzIH0pO1xuXHR9O1xuXG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0bnVsbCxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRQYW5lbEJvZHksXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBfXyhcIlNlbGVjdCBibG9jayBiYWNrZ3JvdW5kIGltYWdlXCIsIFwiYXdwXCIpLFxuXHRcdFx0XHRpbml0aWFsT3BlbjogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0eyBjbGFzc05hbWU6IFwiZWRpdG9yLXBvc3QtZmVhdHVyZWQtaW1hZ2VcIiB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0TWVkaWFVcGxvYWRDaGVjayxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuXHRcdFx0XHRcdFx0b25TZWxlY3Q6IG9uU2VsZWN0TWVkaWEsXG5cdFx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5tZWRpYUlkLFxuXHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzOiBbXCJpbWFnZVwiXSxcblx0XHRcdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG9wZW4gPSBfcmVmLm9wZW47XG5cdFx0XHRcdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogYXR0cmlidXRlcy5tZWRpYUlkID09IDAgPyBcImVkaXRvci1wb3N0LWZlYXR1cmVkLWltYWdlX190b2dnbGVcIiA6IFwiZWRpdG9yLXBvc3QtZmVhdHVyZWQtaW1hZ2VfX3ByZXZpZXdcIixcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6IG9wZW5cblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdCFhdHRyaWJ1dGVzICYmIF9fKFwiQ2hvb3NlIGFuIGltYWdlXCIsIFwiYXdwXCIpLFxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLm1lZGlhICE9IHVuZGVmaW5lZCAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0XHRSZXNwb25zaXZlV3JhcHBlcixcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmF0dXJhbFdpZHRoOiBwcm9wcy5tZWRpYS5tZWRpYV9kZXRhaWxzLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYXR1cmFsSGVpZ2h0OiBwcm9wcy5tZWRpYS5tZWRpYV9kZXRhaWxzLmhlaWdodFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogcHJvcHMubWVkaWEuc291cmNlX3VybCB9KVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRtdWx0aXBsZTogdHJ1ZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCksXG5cdFx0XHRcdGF0dHJpYnV0ZXMubWVkaWFJZCAhPSAwICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRNZWRpYVVwbG9hZENoZWNrLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG5cdFx0XHRcdFx0XHR0aXRsZTogX18oXCJSZXBsYWNlIGltYWdlXCIsIFwiYXdwXCIpLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMubWVkaWFJZCxcblx0XHRcdFx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdE1lZGlhLFxuXHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzOiBbXCJpbWFnZVwiXSxcblx0XHRcdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBvcGVuID0gX3JlZjIub3Blbjtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdFx0XHRcdFx0eyBvbkNsaWNrOiBvcGVuLCBpc0RlZmF1bHQ6IHRydWUsIGlzTGFyZ2U6IHRydWUgfSxcblx0XHRcdFx0XHRcdFx0XHRfXyhcIlJlcGxhY2UgaW1hZ2VcIiwgXCJhd3BcIilcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRtdWx0aXBsZTogdHJ1ZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCksXG5cdFx0XHRcdGF0dHJpYnV0ZXMubWVkaWFJZCAhPSAwICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRNZWRpYVVwbG9hZENoZWNrLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdFx0eyBvbkNsaWNrOiByZW1vdmVNZWRpYSwgaXNMaW5rOiB0cnVlLCBpc0Rlc3RydWN0aXZlOiB0cnVlIH0sXG5cdFx0XHRcdFx0XHRfXyhcIlJlbW92ZSBpbWFnZVwiLCBcImF3cFwiKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdClcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhck9wdGlvbnM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyT3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 3);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BlockEdit__ = __webpack_require__(/*! ../components/BlockEdit */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_EditorComp__ = __webpack_require__(/*! ../components/EditorComp */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SidebarOptions__ = __webpack_require__(/*! ../components/SidebarOptions */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss__ = __webpack_require__(/*! ./style.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_scss__);\n/**\n * BLOCK: guten-gallery-quote\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n\n\n\nvar withSelect = wp.data.withSelect;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar Fragment = wp.element.Fragment;\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType(\"cgb/block-guten-gallery-quote\", {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __(\"Gutenberg Gallery With Quote Form\"), // Block title.\n\ticon: \"shield\", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: \"common\", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__(\"Gutenberg Gallery With Quote Form\"), __(\"create-guten-block\")],\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tattributes: {\n\t\tgallery: [],\n\t\tuid: Math.random()\n\t},\n\n\tedit: function edit(props) {\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\tnull,\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components_BlockEdit__[\"a\" /* default */], props)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGd1dGVuLWdhbGxlcnktcXVvdGVcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgQmxvY2tFZGl0IGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2NrRWRpdFwiO1xuaW1wb3J0IEVkaXRvckNvbXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvRWRpdG9yQ29tcFwiO1xuaW1wb3J0IFNpZGViYXJPcHRpb25zIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJPcHRpb25zXCI7XG5cbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xudmFyIHdpdGhTZWxlY3QgPSB3cC5kYXRhLndpdGhTZWxlY3Q7XG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJjZ2IvYmxvY2stZ3V0ZW4tZ2FsbGVyeS1xdW90ZVwiLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oXCJHdXRlbmJlcmcgR2FsbGVyeSBXaXRoIFF1b3RlIEZvcm1cIiksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiBcInNoaWVsZFwiLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiBcImNvbW1vblwiLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXyhcIkd1dGVuYmVyZyBHYWxsZXJ5IFdpdGggUXVvdGUgRm9ybVwiKSwgX18oXCJjcmVhdGUtZ3V0ZW4tYmxvY2tcIildLFxuXG5cdC8qKlxuICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG4gICpcbiAgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIENvbXBvbmVudC5cbiAgKi9cblx0YXR0cmlidXRlczoge1xuXHRcdGdhbGxlcnk6IFtdLFxuXHRcdHVpZDogTWF0aC5yYW5kb20oKVxuXHR9LFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJkaXZcIixcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tFZGl0LCBwcm9wcylcblx0XHQpO1xuXHR9LFxuXG5cdC8qKlxuICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAqXG4gICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICogQHJldHVybnMge01peGVkfSBKU1ggRnJvbnRlbmQgSFRNTC5cbiAgKi9cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*************************************!*\
  !*** ./src/components/BlockEdit.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EditorComp__ = __webpack_require__(/*! ./EditorComp */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SidebarOptions__ = __webpack_require__(/*! ./SidebarOptions */ 1);\n\n\n\nvar Fragment = wp.element.Fragment;\nvar __ = wp.i18n.__;\n\n\nfunction BlockEdit(props) {\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__SidebarOptions__[\"a\" /* default */], props),\n\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__EditorComp__[\"a\" /* default */], props)\n\t);\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (BlockEdit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jsb2NrRWRpdC5qcz8wMWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFZGl0b3JDb21wIGZyb20gXCIuL0VkaXRvckNvbXBcIjtcbmltcG9ydCBTaWRlYmFyT3B0aW9ucyBmcm9tIFwiLi9TaWRlYmFyT3B0aW9uc1wiO1xuXG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIF9fID0gd3AuaTE4bi5fXztcblxuXG5mdW5jdGlvbiBCbG9ja0VkaXQocHJvcHMpIHtcblxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdEZyYWdtZW50LFxuXHRcdG51bGwsXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNpZGViYXJPcHRpb25zLCBwcm9wcyksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEVkaXRvckNvbXAsIHByb3BzKVxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0VkaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9CbG9ja0VkaXQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);