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
eval("function EditorComp(props) {\n\tvar attributes = props.attributes;\n\n\n\treturn wp.element.createElement(\n\t\t\"div\",\n\t\t{ className: props.className },\n\t\twp.element.createElement(\n\t\t\t\"em\",\n\t\t\tnull,\n\t\t\t\"Select or Remove Images from Sidebar\"\n\t\t),\n\t\twp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ \"class\": \"editor-gallery\" },\n\t\t\tattributes.gallery && attributes.gallery.map(function (media) {\n\t\t\t\treturn wp.element.createElement(\"img\", { key: media.mediaId, src: media.mediaUrl });\n\t\t\t})\n\t\t)\n\t);\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (EditorComp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0VkaXRvckNvbXAuanM/MGQ4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBFZGl0b3JDb21wKHByb3BzKSB7XG5cdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcztcblxuXG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XCJkaXZcIixcblx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJlbVwiLFxuXHRcdFx0bnVsbCxcblx0XHRcdFwiU2VsZWN0IG9yIFJlbW92ZSBJbWFnZXMgZnJvbSBTaWRlYmFyXCJcblx0XHQpLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHR7IFwiY2xhc3NcIjogXCJlZGl0b3ItZ2FsbGVyeVwiIH0sXG5cdFx0XHRhdHRyaWJ1dGVzLmdhbGxlcnkgJiYgYXR0cmlidXRlcy5nYWxsZXJ5Lm1hcChmdW5jdGlvbiAobWVkaWEpIHtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGtleTogbWVkaWEubWVkaWFJZCwgc3JjOiBtZWRpYS5tZWRpYVVybCB9KTtcblx0XHRcdH0pXG5cdFx0KVxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JDb21wO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvRWRpdG9yQ29tcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** ./src/components/SidebarOptions.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    MediaUpload = _wp$blockEditor.MediaUpload,\n    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    Button = _wp$components.Button,\n    ResponsiveWrapper = _wp$components.ResponsiveWrapper;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nfunction SidebarOptions(props) {\n\tvar attributes = props.attributes,\n\t    setAttributes = props.setAttributes,\n\t    media = props.media;\n\tvar layouts = attributes.settings.layouts;\n\n\n\tvar removeMedia = function removeMedia() {\n\t\tprops.setAttributes({ gallery: [] });\n\t};\n\n\tvar onSelectMedia = function onSelectMedia(media) {\n\t\tconsole.log(media);\n\t\tvar images = [];\n\t\tmedia.forEach(function (m) {\n\t\t\treturn images.push({ mediaId: m.id, mediaUrl: m.url });\n\t\t});\n\t\tprops.setAttributes({ gallery: images });\n\t};\n\n\tvar changeLayout = function changeLayout() {\n\t\t// in development\n\t};\n\n\treturn wp.element.createElement(\n\t\tInspectorControls,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tPanelBody,\n\t\t\t{\n\t\t\t\ttitle: __(\"Select block background image\", \"GGL\"),\n\t\t\t\tinitialOpen: true\n\t\t\t},\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"editor-post-featured-image\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tMediaUploadCheck,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\t\tonSelect: onSelectMedia,\n\t\t\t\t\t\tvalue: attributes.mediaId,\n\t\t\t\t\t\tallowedTypes: [\"image\"],\n\t\t\t\t\t\trender: function render(_ref) {\n\t\t\t\t\t\t\tvar open = _ref.open;\n\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tclassName: attributes.gallery == undefined ? \"editor-post-featured-image__toggle\" : \"editor-post-featured-image__preview\",\n\t\t\t\t\t\t\t\t\tonClick: open\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tattributes.gallery == undefined && __(\"Choose an image\", \"GGL\")\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t},\n\t\t\t\t\t\tmultiple: true\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\tattributes.gallery !== undefined && wp.element.createElement(\n\t\t\t\t\tMediaUploadCheck,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\t\ttitle: __(\"Choose Gallery\", \"GGL\"),\n\t\t\t\t\t\tvalue: attributes.mediaId,\n\t\t\t\t\t\tonSelect: onSelectMedia,\n\t\t\t\t\t\tallowedTypes: [\"image\"],\n\t\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t\t{ onClick: open, isDefault: true, isLarge: true },\n\t\t\t\t\t\t\t\t__(\"Change Gallery\", \"GGL\")\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t},\n\t\t\t\t\t\tmultiple: true\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\tattributes.gallery !== undefined && wp.element.createElement(\n\t\t\t\t\tMediaUploadCheck,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tButton,\n\t\t\t\t\t\t{ onClick: removeMedia, isLink: true, isDestructive: true },\n\t\t\t\t\t\t__(\"Remove image\", \"GGL\")\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t)\n\t);\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (SidebarOptions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGViYXJPcHRpb25zLmpzPzIxODEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF93cCRibG9ja0VkaXRvciA9IHdwLmJsb2NrRWRpdG9yLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGJsb2NrRWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGJsb2NrRWRpdG9yLk1lZGlhVXBsb2FkLFxuICAgIE1lZGlhVXBsb2FkQ2hlY2sgPSBfd3AkYmxvY2tFZGl0b3IuTWVkaWFVcGxvYWRDaGVjaztcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIEJ1dHRvbiA9IF93cCRjb21wb25lbnRzLkJ1dHRvbixcbiAgICBSZXNwb25zaXZlV3JhcHBlciA9IF93cCRjb21wb25lbnRzLlJlc3BvbnNpdmVXcmFwcGVyO1xudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbmZ1bmN0aW9uIFNpZGViYXJPcHRpb25zKHByb3BzKSB7XG5cdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzLFxuXHQgICAgbWVkaWEgPSBwcm9wcy5tZWRpYTtcblx0dmFyIGxheW91dHMgPSBhdHRyaWJ1dGVzLnNldHRpbmdzLmxheW91dHM7XG5cblxuXHR2YXIgcmVtb3ZlTWVkaWEgPSBmdW5jdGlvbiByZW1vdmVNZWRpYSgpIHtcblx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgZ2FsbGVyeTogW10gfSk7XG5cdH07XG5cblx0dmFyIG9uU2VsZWN0TWVkaWEgPSBmdW5jdGlvbiBvblNlbGVjdE1lZGlhKG1lZGlhKSB7XG5cdFx0Y29uc29sZS5sb2cobWVkaWEpO1xuXHRcdHZhciBpbWFnZXMgPSBbXTtcblx0XHRtZWRpYS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG5cdFx0XHRyZXR1cm4gaW1hZ2VzLnB1c2goeyBtZWRpYUlkOiBtLmlkLCBtZWRpYVVybDogbS51cmwgfSk7XG5cdFx0fSk7XG5cdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGdhbGxlcnk6IGltYWdlcyB9KTtcblx0fTtcblxuXHR2YXIgY2hhbmdlTGF5b3V0ID0gZnVuY3Rpb24gY2hhbmdlTGF5b3V0KCkge1xuXHRcdC8vIGluIGRldmVsb3BtZW50XG5cdH07XG5cblx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRudWxsLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFBhbmVsQm9keSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IF9fKFwiU2VsZWN0IGJsb2NrIGJhY2tncm91bmQgaW1hZ2VcIiwgXCJHR0xcIiksXG5cdFx0XHRcdGluaXRpYWxPcGVuOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogXCJlZGl0b3ItcG9zdC1mZWF0dXJlZC1pbWFnZVwiIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRNZWRpYVVwbG9hZENoZWNrLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG5cdFx0XHRcdFx0XHRvblNlbGVjdDogb25TZWxlY3RNZWRpYSxcblx0XHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLm1lZGlhSWQsXG5cdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM6IFtcImltYWdlXCJdLFxuXHRcdFx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuXHRcdFx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYub3Blbjtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBhdHRyaWJ1dGVzLmdhbGxlcnkgPT0gdW5kZWZpbmVkID8gXCJlZGl0b3ItcG9zdC1mZWF0dXJlZC1pbWFnZV9fdG9nZ2xlXCIgOiBcImVkaXRvci1wb3N0LWZlYXR1cmVkLWltYWdlX19wcmV2aWV3XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrOiBvcGVuXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzLmdhbGxlcnkgPT0gdW5kZWZpbmVkICYmIF9fKFwiQ2hvb3NlIGFuIGltYWdlXCIsIFwiR0dMXCIpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0bXVsdGlwbGU6IHRydWVcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHRhdHRyaWJ1dGVzLmdhbGxlcnkgIT09IHVuZGVmaW5lZCAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0TWVkaWFVcGxvYWRDaGVjayxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuXHRcdFx0XHRcdFx0dGl0bGU6IF9fKFwiQ2hvb3NlIEdhbGxlcnlcIiwgXCJHR0xcIiksXG5cdFx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5tZWRpYUlkLFxuXHRcdFx0XHRcdFx0b25TZWxlY3Q6IG9uU2VsZWN0TWVkaWEsXG5cdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM6IFtcImltYWdlXCJdLFxuXHRcdFx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZjIpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG9wZW4gPSBfcmVmMi5vcGVuO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdEJ1dHRvbixcblx0XHRcdFx0XHRcdFx0XHR7IG9uQ2xpY2s6IG9wZW4sIGlzRGVmYXVsdDogdHJ1ZSwgaXNMYXJnZTogdHJ1ZSB9LFxuXHRcdFx0XHRcdFx0XHRcdF9fKFwiQ2hhbmdlIEdhbGxlcnlcIiwgXCJHR0xcIilcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRtdWx0aXBsZTogdHJ1ZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCksXG5cdFx0XHRcdGF0dHJpYnV0ZXMuZ2FsbGVyeSAhPT0gdW5kZWZpbmVkICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRNZWRpYVVwbG9hZENoZWNrLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdFx0eyBvbkNsaWNrOiByZW1vdmVNZWRpYSwgaXNMaW5rOiB0cnVlLCBpc0Rlc3RydWN0aXZlOiB0cnVlIH0sXG5cdFx0XHRcdFx0XHRfXyhcIlJlbW92ZSBpbWFnZVwiLCBcIkdHTFwiKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdClcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhck9wdGlvbnM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyT3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BlockEdit__ = __webpack_require__(/*! ../components/BlockEdit */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__(/*! ./style.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_scss__);\n/**\n * BLOCK: guten-gallery-quote\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType(\"cgb/block-guten-gallery-quote\", {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __(\"Gallery Lightbox\"), // Block title.\n\ticon: \"shield\", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: \"common\", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__(\"Gallery Lightbox\"), __(\"create-guten-block\")],\n\t// set initial attributes\n\n\tattributes: {\n\t\ttype: \"object\",\n\t\tsettings: {\n\t\t\ttype: \"object\",\n\t\t\tdefault: {\n\t\t\t\tlayouts: [\"layout1\", \"layout2\"],\n\t\t\t\tselectedLayout: \"layout1\",\n\t\t\t\timagePerRow: \"3\"\n\t\t\t}\n\t\t},\n\t\tgallery: []\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\t\tconsole.log(\"ini\", props);\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\tnull,\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components_BlockEdit__[\"a\" /* default */], props)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGd1dGVuLWdhbGxlcnktcXVvdGVcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgQmxvY2tFZGl0IGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2NrRWRpdFwiO1xuXG5pbXBvcnQgXCIuL2VkaXRvci5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3Ncbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwiY2diL2Jsb2NrLWd1dGVuLWdhbGxlcnktcXVvdGVcIiwge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKFwiR2FsbGVyeSBMaWdodGJveFwiKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246IFwic2hpZWxkXCIsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6IFwiY29tbW9uXCIsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKFwiR2FsbGVyeSBMaWdodGJveFwiKSwgX18oXCJjcmVhdGUtZ3V0ZW4tYmxvY2tcIildLFxuXHQvLyBzZXQgaW5pdGlhbCBhdHRyaWJ1dGVzXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHR5cGU6IFwib2JqZWN0XCIsXG5cdFx0c2V0dGluZ3M6IHtcblx0XHRcdHR5cGU6IFwib2JqZWN0XCIsXG5cdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdGxheW91dHM6IFtcImxheW91dDFcIiwgXCJsYXlvdXQyXCJdLFxuXHRcdFx0XHRzZWxlY3RlZExheW91dDogXCJsYXlvdXQxXCIsXG5cdFx0XHRcdGltYWdlUGVyUm93OiBcIjNcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Z2FsbGVyeTogW11cblx0fSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBDb21wb25lbnQuXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHRjb25zb2xlLmxvZyhcImluaVwiLCBwcm9wcyk7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJkaXZcIixcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tFZGl0LCBwcm9wcylcblx0XHQpO1xuXHR9LFxuXG5cdC8qKlxuICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAqXG4gICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICogQHJldHVybnMge01peGVkfSBKU1ggRnJvbnRlbmQgSFRNTC5cbiAgKi9cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

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