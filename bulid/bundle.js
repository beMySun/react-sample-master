/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./bulid/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	

	// 引入组件
	'use strict';

	__webpack_require__(2);

	var React = __webpack_require__(3);

	// example-1

	var Hello = __webpack_require__(2);
	React.render(React.createElement(Hello, { name: 'KK' }), document.getElementById('example'));

	// ---------------------------------------------------

	// example-2
	// var HelloWorld = React.createClass({
	//     render: function () {
	//         return (
	//             <div>Hello,{this.props.name} !
	//             It is {this.props.date.toTimeString()}</div>
	//         );
	//     }
	// });

	// setInterval(function () {
	//     React.render(
	//         <HelloWorld date={new Date()} name="kk" />,
	//         document.getElementById('example')
	//     );
	// }, 500);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	

	// var React = require('react');

	// class App extends React.Component {

	// }
	// React.render(<App/>, document.getElementById("app"));

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(3);
	var styles = {
	  color: "red",
	  marginTop: "100px"
	};

	var Hello = (function (_React$Component) {
	  _inherits(Hello, _React$Component);

	  function Hello() {
	    _classCallCheck(this, Hello);

	    _get(Object.getPrototypeOf(Hello.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(Hello, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "h1",
	        { style: styles },
	        "Hello ",
	        this.props.name,
	        "!"
	      );
	    }
	  }]);

	  return Hello;
	})(React.Component);

	module.exports = Hello;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ }
/******/ ]);