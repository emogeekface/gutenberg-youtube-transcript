!function(e){function t(n){if(r[n])return r[n].exports;var c=r[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(1)},function(e,t,r){"use strict";var n=r(2),c=(r.n(n),r(3)),o=(r.n(c),wp.compose.createHigherOrderComponent),a=wp.element,l=a.Fragment,i=(a.renderToString,a.RawHTML,a.createElement,wp.editor.InspectorControls,wp.components.PanelBody,wp.editor.RichText),s={transcript:{type:"array",source:"children",selector:".my-transcript",default:[]}},u=function(e,t){return"core-embed/youtube"!==t?e:(e.attributes=Object.assign(e.attributes,s),e)};wp.hooks.addFilter("blocks.registerBlockType","cgb/block-transcript-block",u);var p=o(function(e){return function(t){if("core-embed/youtube"!==t.name)return wp.element.createElement(l,null,wp.element.createElement(e,t));var r=t.attributes,n=t.setAttributes,c=r.transcript;return wp.element.createElement(l,null,wp.element.createElement(e,t),wp.element.createElement("div",{className:"youtube-transcript"},wp.element.createElement("a",{href:"#",title:"Show transcript for video"},"Show Transcript"),wp.element.createElement(i,{className:"my-transcript",placeholder:"write transcript",value:c,multiline:"p",onChange:function(e){n({transcript:e})}})))}});wp.hooks.addFilter("editor.BlockEdit","cgb/block-transcript-block",p);var m=function(e,t,r){if(e)return"core-embed/youtube"!==t.name?e:wp.element.createElement(l,null,e,wp.element.createElement("div",{className:"youtube-transcript"},wp.element.createElement("a",{href:"#",title:"Show transcript for video"},"Show Transcript"),wp.element.createElement("div",{className:"my-transcript"},r.transcript)))};wp.hooks.addFilter("blocks.getSaveElement","cgb/block-transcript-block",m)},function(e,t){},function(e,t){}]);