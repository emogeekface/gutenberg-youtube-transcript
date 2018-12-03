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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: transcript-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n//\n//  Import CSS.\n\n\n//\n// const { __ } = wp.i18n; // Import __() from wp.i18n\n// const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks\n// const RichText = wp.editor.RichText;\n//\n// /**\n//  * Register: aa Gutenberg Block.\n//  *\n//  * Registers a new block provided a unique name and an object defining its\n//  * behavior. Once registered, the block is made editor as an option to any\n//  * editor interface where blocks are implemented.\n//  *\n//  * @link https://wordpress.org/gutenberg/handbook/block-api/\n//  * @param  {string}   name     Block name.\n//  * @param  {Object}   settings Block settings.\n//  * @return {?WPBlock}          The block, if it has been successfully\n//  *                             registered; otherwise `undefined`.\n//  */\n// registerBlockType( 'cgb/block-transcript-block', {\n// \t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n// \ttitle: __( 'Transcript Block' ), // Block title.\n// \ticon: 'playlist-video', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n// \tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n// \tkeywords: [\n// \t\t__( 'transcript-block' ),\n// \t\t__( 'transcript' ),\n// \t\t__( 'video' ),\n// \t],\n//     attributes: {\n//         transcript: {\n//             type: 'array',\n//             source: 'children',\n//             selector: '.transcript-content'\n//         },\n//         name: {\n//            \ttype: 'string',\n//             source: 'text',\n//             selector: '.transcript-title'\n//         }\n//     },\n//\n// \t/**\n// \t * The edit function describes the structure of your block in the context of the editor.\n// \t * This represents what the editor will render when the block is used.\n// \t *\n// \t * The \"edit\" property must be a valid function.\n// \t *\n// \t * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n// \t */\n//     edit( { className, attributes, setAttributes } ) {\n//\n// \t\treturn (\n// \t\t\t<div className={ className }>\n// \t\t\t\t<RichText\n// \t\t\t\t\ttagName={'h3'}\n// \t\t\t\t\tplaceholder={'Title'}\n// \t\t\t\t\tkeepPlaceholderOnFocus={true}\n// \t\t\t\t\tvalue={attributes.name}\n//                     onChange={ ( name ) => setAttributes( { name } ) }\n//                     className={'transcript-title'}\n// \t\t\t\t/>\n// \t\t\t\t<div className={'transcript-content'}>\n// \t\t\t\t\t<RichText\n//                         multiline=\"p\"\n// \t\t\t\t\t\tplaceholder={'Your transcript goes here...'}\n// \t\t\t\t\t\tkeepPlaceholderOnFocus={true}\n// \t\t\t\t\t\tvalue={attributes.transcript}\n// \t\t\t\t\t\tonChange={ ( transcript ) => setAttributes( { transcript } ) }\n// \t\t\t\t\t/>\n// \t\t\t\t</div>\n// \t\t\t</div>\n// \t\t);\n// \t},\n//\n// \t/**\n// \t * The save function defines the way in which the different attributes should be combined\n// \t * into the final markup, which is then serialized by Gutenberg into post_content.\n// \t *\n// \t * The \"save\" property must be specified and must be a valid function.\n// \t *\n// \t * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n// \t */\n//     save( { className, attributes } ) {\n// \t\treturn (\n//             <div className={className}>\n// \t\t\t\t<button className=\"transcript-title\">{ attributes.name }</button>\n// \t\t\t\t<div className=\"transcript-content\">\n// \t\t\t\t\t{ attributes.transcript }\n// \t\t\t\t</div>\n//             </div>\n// \t\t);\n// \t},\n// } );\n\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar _wp$element = wp.element,\n    Fragment = _wp$element.Fragment,\n    renderToString = _wp$element.renderToString,\n    RawHTML = _wp$element.RawHTML,\n    createElement = _wp$element.createElement;\nvar InspectorControls = wp.editor.InspectorControls;\nvar PanelBody = wp.components.PanelBody;\nvar RichText = wp.editor.RichText;\n\n\nvar transcriptAttributes = {\n    transcript: {\n        type: 'array',\n        source: 'children',\n        selector: '.my-transcript',\n        default: []\n    }\n};\n\nvar registerAttributes = function registerAttributes(settings, name) {\n\n    if ('core-embed/youtube' !== name) {\n        return settings;\n    }\n\n    settings.attributes = Object.assign(settings.attributes, transcriptAttributes);\n    return settings;\n};\n\nwp.hooks.addFilter('blocks.registerBlockType', 'cgb/block-transcript-block', registerAttributes);\n\nvar addTranscriptToYoutube = createHigherOrderComponent(function (BlockEdit) {\n    return function (props) {\n        if (props.name !== \"core-embed/youtube\") {\n            return wp.element.createElement(\n                Fragment,\n                null,\n                wp.element.createElement(BlockEdit, props)\n            );\n        } else {\n            var attributes = props.attributes,\n                setAttributes = props.setAttributes;\n            var transcript = attributes.transcript;\n\n\n            return wp.element.createElement(\n                Fragment,\n                null,\n                wp.element.createElement(BlockEdit, props),\n                wp.element.createElement(\n                    'div',\n                    { className: 'youtube-transcript' },\n                    wp.element.createElement(\n                        'a',\n                        { href: '#', title: \"Show transcript for video\" },\n                        'Show Transcript'\n                    ),\n                    wp.element.createElement(RichText, {\n                        className: 'my-transcript',\n                        placeholder: 'write transcript',\n                        value: transcript,\n                        multiline: 'p',\n                        onChange: function onChange(value) {\n                            setAttributes({ transcript: value });\n                        }\n                    })\n                )\n            );\n        }\n    };\n});\n\nwp.hooks.addFilter('editor.BlockEdit', 'cgb/block-transcript-block', addTranscriptToYoutube);\n\nvar saveAttributes = function saveAttributes(element, blockType, attributes) {\n    if (!element || 'core-embed/youtube' !== blockType.name) {\n        return;\n    }\n\n    return wp.element.createElement(\n        Fragment,\n        null,\n        element,\n        wp.element.createElement(\n            'div',\n            { className: 'youtube-transcript' },\n            wp.element.createElement(\n                'a',\n                { href: '#', title: 'Show transcript for video' },\n                'Show Transcript'\n            ),\n            wp.element.createElement(\n                'div',\n                { className: 'my-transcript' },\n                attributes.transcript\n            )\n        )\n    );\n};\n\nwp.hooks.addFilter('blocks.getSaveElement', 'cgb/block-transcript-block', saveAttributes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHRyYW5zY3JpcHQtYmxvY2tcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cbi8vXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG4vL1xuLy8gY29uc3QgeyBfXyB9ID0gd3AuaTE4bjsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG4vLyBjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG4vLyBjb25zdCBSaWNoVGV4dCA9IHdwLmVkaXRvci5SaWNoVGV4dDtcbi8vXG4vLyAvKipcbi8vICAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4vLyAgKlxuLy8gICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbi8vICAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4vLyAgKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4vLyAgKlxuLy8gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4vLyAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbi8vICAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbi8vICAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuLy8gICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbi8vICAqL1xuLy8gcmVnaXN0ZXJCbG9ja1R5cGUoICdjZ2IvYmxvY2stdHJhbnNjcmlwdC1ibG9jaycsIHtcbi8vIFx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG4vLyBcdHRpdGxlOiBfXyggJ1RyYW5zY3JpcHQgQmxvY2snICksIC8vIEJsb2NrIHRpdGxlLlxuLy8gXHRpY29uOiAncGxheWxpc3QtdmlkZW8nLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG4vLyBcdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG4vLyBcdGtleXdvcmRzOiBbXG4vLyBcdFx0X18oICd0cmFuc2NyaXB0LWJsb2NrJyApLFxuLy8gXHRcdF9fKCAndHJhbnNjcmlwdCcgKSxcbi8vIFx0XHRfXyggJ3ZpZGVvJyApLFxuLy8gXHRdLFxuLy8gICAgIGF0dHJpYnV0ZXM6IHtcbi8vICAgICAgICAgdHJhbnNjcmlwdDoge1xuLy8gICAgICAgICAgICAgdHlwZTogJ2FycmF5Jyxcbi8vICAgICAgICAgICAgIHNvdXJjZTogJ2NoaWxkcmVuJyxcbi8vICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnRyYW5zY3JpcHQtY29udGVudCdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgbmFtZToge1xuLy8gICAgICAgICAgICBcdHR5cGU6ICdzdHJpbmcnLFxuLy8gICAgICAgICAgICAgc291cmNlOiAndGV4dCcsXG4vLyAgICAgICAgICAgICBzZWxlY3RvcjogJy50cmFuc2NyaXB0LXRpdGxlJ1xuLy8gICAgICAgICB9XG4vLyAgICAgfSxcbi8vXG4vLyBcdC8qKlxuLy8gXHQgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4vLyBcdCAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbi8vIFx0ICpcbi8vIFx0ICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbi8vIFx0ICpcbi8vIFx0ICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuLy8gXHQgKi9cbi8vICAgICBlZGl0KCB7IGNsYXNzTmFtZSwgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ICkge1xuLy9cbi8vIFx0XHRyZXR1cm4gKFxuLy8gXHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWUgfT5cbi8vIFx0XHRcdFx0PFJpY2hUZXh0XG4vLyBcdFx0XHRcdFx0dGFnTmFtZT17J2gzJ31cbi8vIFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17J1RpdGxlJ31cbi8vIFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuLy8gXHRcdFx0XHRcdHZhbHVlPXthdHRyaWJ1dGVzLm5hbWV9XG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCBuYW1lICkgPT4gc2V0QXR0cmlidXRlcyggeyBuYW1lIH0gKSB9XG4vLyAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3RyYW5zY3JpcHQtdGl0bGUnfVxuLy8gXHRcdFx0XHQvPlxuLy8gXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17J3RyYW5zY3JpcHQtY29udGVudCd9PlxuLy8gXHRcdFx0XHRcdDxSaWNoVGV4dFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lPVwicFwiXG4vLyBcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17J1lvdXIgdHJhbnNjcmlwdCBnb2VzIGhlcmUuLi4nfVxuLy8gXHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cbi8vIFx0XHRcdFx0XHRcdHZhbHVlPXthdHRyaWJ1dGVzLnRyYW5zY3JpcHR9XG4vLyBcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggdHJhbnNjcmlwdCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdHJhbnNjcmlwdCB9ICkgfVxuLy8gXHRcdFx0XHRcdC8+XG4vLyBcdFx0XHRcdDwvZGl2PlxuLy8gXHRcdFx0PC9kaXY+XG4vLyBcdFx0KTtcbi8vIFx0fSxcbi8vXG4vLyBcdC8qKlxuLy8gXHQgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuLy8gXHQgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4vLyBcdCAqXG4vLyBcdCAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuLy8gXHQgKlxuLy8gXHQgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4vLyBcdCAqL1xuLy8gICAgIHNhdmUoIHsgY2xhc3NOYW1lLCBhdHRyaWJ1dGVzIH0gKSB7XG4vLyBcdFx0cmV0dXJuIChcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuLy8gXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInRyYW5zY3JpcHQtdGl0bGVcIj57IGF0dHJpYnV0ZXMubmFtZSB9PC9idXR0b24+XG4vLyBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHJhbnNjcmlwdC1jb250ZW50XCI+XG4vLyBcdFx0XHRcdFx0eyBhdHRyaWJ1dGVzLnRyYW5zY3JpcHQgfVxuLy8gXHRcdFx0XHQ8L2Rpdj5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gXHRcdCk7XG4vLyBcdH0sXG4vLyB9ICk7XG5cbnZhciBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCA9IHdwLmNvbXBvc2UuY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQ7XG52YXIgX3dwJGVsZW1lbnQgPSB3cC5lbGVtZW50LFxuICAgIEZyYWdtZW50ID0gX3dwJGVsZW1lbnQuRnJhZ21lbnQsXG4gICAgcmVuZGVyVG9TdHJpbmcgPSBfd3AkZWxlbWVudC5yZW5kZXJUb1N0cmluZyxcbiAgICBSYXdIVE1MID0gX3dwJGVsZW1lbnQuUmF3SFRNTCxcbiAgICBjcmVhdGVFbGVtZW50ID0gX3dwJGVsZW1lbnQuY3JlYXRlRWxlbWVudDtcbnZhciBJbnNwZWN0b3JDb250cm9scyA9IHdwLmVkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciBQYW5lbEJvZHkgPSB3cC5jb21wb25lbnRzLlBhbmVsQm9keTtcbnZhciBSaWNoVGV4dCA9IHdwLmVkaXRvci5SaWNoVGV4dDtcblxuXG52YXIgdHJhbnNjcmlwdEF0dHJpYnV0ZXMgPSB7XG4gICAgdHJhbnNjcmlwdDoge1xuICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICBzb3VyY2U6ICdjaGlsZHJlbicsXG4gICAgICAgIHNlbGVjdG9yOiAnLm15LXRyYW5zY3JpcHQnLFxuICAgICAgICBkZWZhdWx0OiBbXVxuICAgIH1cbn07XG5cbnZhciByZWdpc3RlckF0dHJpYnV0ZXMgPSBmdW5jdGlvbiByZWdpc3RlckF0dHJpYnV0ZXMoc2V0dGluZ3MsIG5hbWUpIHtcblxuICAgIGlmICgnY29yZS1lbWJlZC95b3V0dWJlJyAhPT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgc2V0dGluZ3MuYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oc2V0dGluZ3MuYXR0cmlidXRlcywgdHJhbnNjcmlwdEF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBzZXR0aW5ncztcbn07XG5cbndwLmhvb2tzLmFkZEZpbHRlcignYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJywgJ2NnYi9ibG9jay10cmFuc2NyaXB0LWJsb2NrJywgcmVnaXN0ZXJBdHRyaWJ1dGVzKTtcblxudmFyIGFkZFRyYW5zY3JpcHRUb1lvdXR1YmUgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChmdW5jdGlvbiAoQmxvY2tFZGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMubmFtZSAhPT0gXCJjb3JlLWVtYmVkL3lvdXR1YmVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBGcmFnbWVudCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChCbG9ja0VkaXQsIHByb3BzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcbiAgICAgICAgICAgIHZhciB0cmFuc2NyaXB0ID0gYXR0cmlidXRlcy50cmFuc2NyaXB0O1xuXG5cbiAgICAgICAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgRnJhZ21lbnQsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tFZGl0LCBwcm9wcyksXG4gICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICd5b3V0dWJlLXRyYW5zY3JpcHQnIH0sXG4gICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaHJlZjogJyMnLCB0aXRsZTogXCJTaG93IHRyYW5zY3JpcHQgZm9yIHZpZGVvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdTaG93IFRyYW5zY3JpcHQnXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbXktdHJhbnNjcmlwdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ3dyaXRlIHRyYW5zY3JpcHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRyYW5zY3JpcHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmU6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyB0cmFuc2NyaXB0OiB2YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcbn0pO1xuXG53cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0VkaXQnLCAnY2diL2Jsb2NrLXRyYW5zY3JpcHQtYmxvY2snLCBhZGRUcmFuc2NyaXB0VG9Zb3V0dWJlKTtcblxudmFyIHNhdmVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gc2F2ZUF0dHJpYnV0ZXMoZWxlbWVudCwgYmxvY2tUeXBlLCBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFlbGVtZW50IHx8ICdjb3JlLWVtYmVkL3lvdXR1YmUnICE9PSBibG9ja1R5cGUubmFtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgRnJhZ21lbnQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICd5b3V0dWJlLXRyYW5zY3JpcHQnIH0sXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgIHsgaHJlZjogJyMnLCB0aXRsZTogJ1Nob3cgdHJhbnNjcmlwdCBmb3IgdmlkZW8nIH0sXG4gICAgICAgICAgICAgICAgJ1Nob3cgVHJhbnNjcmlwdCdcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdteS10cmFuc2NyaXB0JyB9LFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMudHJhbnNjcmlwdFxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbndwLmhvb2tzLmFkZEZpbHRlcignYmxvY2tzLmdldFNhdmVFbGVtZW50JywgJ2NnYi9ibG9jay10cmFuc2NyaXB0LWJsb2NrJywgc2F2ZUF0dHJpYnV0ZXMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);