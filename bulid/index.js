webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var sub = __webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(7);

	var app = document.createElement('div');
	app.innerHTML = '<h1>Hello World1</h1>';
	app.appendChild(sub());
	document.body.appendChild(app);

	var name = "a";
	console.log(name);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	function generateText() {
	  var element = document.createElement('h2');
	  element.innerHTML = "Hello h2 world";
	  return element;
	}

	module.exports = generateText;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);