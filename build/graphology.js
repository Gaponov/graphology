(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["graphology"] = factory();
	else
		root["graphology"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GraphError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvalidArgumentsGraphError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotFoundGraphError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UsageGraphError; });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Graphology Custom Errors
 * =========================
 *
 * Defining custom errors for ease of use & easy unit tests across
 * implementations (normalized typology rather than relying on error
 * messages to check whether the correct error was found).
 */
var GraphError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(GraphError, _Error);

  function GraphError(message, data) {
    var _this;

    _this = _Error.call(this) || this;
    _this.name = 'GraphError';
    _this.message = message || '';
    _this.data = data || {};
    return _this;
  }

  return GraphError;
}(_wrapNativeSuper(Error));
var InvalidArgumentsGraphError = /*#__PURE__*/function (_GraphError) {
  _inheritsLoose(InvalidArgumentsGraphError, _GraphError);

  function InvalidArgumentsGraphError(message, data) {
    var _this2;

    _this2 = _GraphError.call(this, message, data) || this;
    _this2.name = 'InvalidArgumentsGraphError'; // This is V8 specific to enhance stack readability

    if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(_assertThisInitialized(_this2), InvalidArgumentsGraphError.prototype.constructor);
    return _this2;
  }

  return InvalidArgumentsGraphError;
}(GraphError);
var NotFoundGraphError = /*#__PURE__*/function (_GraphError2) {
  _inheritsLoose(NotFoundGraphError, _GraphError2);

  function NotFoundGraphError(message, data) {
    var _this3;

    _this3 = _GraphError2.call(this, message, data) || this;
    _this3.name = 'NotFoundGraphError'; // This is V8 specific to enhance stack readability

    if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(_assertThisInitialized(_this3), NotFoundGraphError.prototype.constructor);
    return _this3;
  }

  return NotFoundGraphError;
}(GraphError);
var UsageGraphError = /*#__PURE__*/function (_GraphError3) {
  _inheritsLoose(UsageGraphError, _GraphError3);

  function UsageGraphError(message, data) {
    var _this4;

    _this4 = _GraphError3.call(this, message, data) || this;
    _this4.name = 'UsageGraphError'; // This is V8 specific to enhance stack readability

    if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(_assertThisInitialized(_this4), UsageGraphError.prototype.constructor);
    return _this4;
  }

  return UsageGraphError;
}(GraphError);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMatchingEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return prettyPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return privateProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return readOnlyProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return incrementalId; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Graphology Utilities
 * =====================
 *
 * Collection of helpful functions used by the implementation.
 */

/**
 * Very simple Object.assign-like function.
 *
 * @param  {object} target       - First object.
 * @param  {object} [...objects] - Objects to merge.
 * @return {object}
 */
function assign() {
  var target = arguments[0] || {};

  for (var i = 1, l = arguments.length; i < l; i++) {
    if (!arguments[i]) continue;

    for (var k in arguments[i]) {
      target[k] = arguments[i][k];
    }
  }

  return target;
}
/**
 * Function returning the first matching edge for given path.
 * Note: this function does not check the existence of source & target. This
 * must be performed by the caller.
 *
 * @param  {Graph}  graph  - Target graph.
 * @param  {any}    source - Source node.
 * @param  {any}    target - Target node.
 * @param  {string} type   - Type of the edge (mixed, directed or undirected).
 * @return {string|null}
 */

function getMatchingEdge(graph, source, target, type) {
  var sourceData = graph._nodes.get(source);

  var edge = null;
  if (!sourceData) return edge;

  if (type === 'mixed') {
    edge = sourceData.out && sourceData.out[target] || sourceData.undirected && sourceData.undirected[target];
  } else if (type === 'directed') {
    edge = sourceData.out && sourceData.out[target];
  } else {
    edge = sourceData.undirected && sourceData.undirected[target];
  }

  return edge;
}
/**
 * Checks whether the given value is a Graph implementation instance.
 *
 * @param  {mixed}   value - Target value.
 * @return {boolean}
 */

function isGraph(value) {
  return value !== null && _typeof(value) === 'object' && typeof value.addUndirectedEdgeWithKey === 'function' && typeof value.dropNode === 'function';
}
/**
 * Checks whether the given value is a plain object.
 *
 * @param  {mixed}   value - Target value.
 * @return {boolean}
 */

function isPlainObject(value) {
  return _typeof(value) === 'object' && value !== null && value.constructor === Object;
}
/**
 * Pretty prints the given integer.
 *
 * @param  {number}  integer - Target integer.
 * @return {string}          - The pretty string.
 */

function prettyPrint(integer) {
  var string = '' + integer;
  var prettyString = '';

  for (var i = 0, l = string.length; i < l; i++) {
    var j = l - i - 1;
    prettyString = string[j] + prettyString;
    if (!((i - 2) % 3) && i !== l - 1) prettyString = ',' + prettyString;
  }

  return prettyString;
}
/**
 * Creates a "private" property for the given member name by concealing it
 * using the `enumerable` option.
 *
 * @param {object} target - Target object.
 * @param {string} name   - Member name.
 */

function privateProperty(target, name, value) {
  Object.defineProperty(target, name, {
    enumerable: false,
    configurable: false,
    writable: true,
    value: value
  });
}
/**
 * Creates a read-only property for the given member name & the given getter.
 *
 * @param {object}   target - Target object.
 * @param {string}   name   - Member name.
 * @param {mixed}    value  - The attached getter or fixed value.
 */

function readOnlyProperty(target, name, value) {
  var descriptor = {
    enumerable: true,
    configurable: true
  };

  if (typeof value === 'function') {
    descriptor.get = value;
  } else {
    descriptor.value = value;
    descriptor.writable = false;
  }

  Object.defineProperty(target, name, descriptor);
}
/**
 * Creates a function generating incremental ids for edges.
 *
 * @return {function}
 */

function incrementalId() {
  var i = 0;
  return function () {
    return "_geid".concat(i++, "_");
  };
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Obliterator Iterator Class
 * ===========================
 *
 * Simple class representing the library's iterators.
 */

/**
 * Iterator class.
 *
 * @constructor
 * @param {function} next - Next function.
 */
function Iterator(next) {

  // Hiding the given function
  Object.defineProperty(this, '_next', {
    writable: false,
    enumerable: false,
    value: next
  });

  // Is the iterator complete?
  this.done = false;
}

/**
 * Next function.
 *
 * @return {object}
 */
// NOTE: maybe this should dropped for performance?
Iterator.prototype.next = function() {
  if (this.done)
    return {done: true};

  var step = this._next();

  if (step.done)
    this.done = true;

  return step;
};

/**
 * If symbols are supported, we add `next` to `Symbol.iterator`.
 */
if (typeof Symbol !== 'undefined')
  Iterator.prototype[Symbol.iterator] = function() {
    return this;
  };

/**
 * Returning an iterator of the given values.
 *
 * @param  {any...} values - Values.
 * @return {Iterator}
 */
Iterator.of = function() {
  var args = arguments,
      l = args.length,
      i = 0;

  return new Iterator(function() {
    if (i >= l)
      return {done: true};

    return {done: false, value: args[i++]};
  });
};

/**
 * Returning an empty iterator.
 *
 * @return {Iterator}
 */
Iterator.empty = function() {
  var iterator = new Iterator(null);
  iterator.done = true;

  return iterator;
};

/**
 * Returning whether the given value is an iterator.
 *
 * @param  {any} value - Value.
 * @return {boolean}
 */
Iterator.is = function(value) {
  if (value instanceof Iterator)
    return true;

  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.next === 'function'
  );
};

/**
 * Exporting.
 */
module.exports = Iterator;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ graph_Graph; });

// EXTERNAL MODULE: ./node_modules/events/events.js
var events = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/obliterator/iterator.js
var obliterator_iterator = __webpack_require__(2);
var iterator_default = /*#__PURE__*/__webpack_require__.n(obliterator_iterator);

// EXTERNAL MODULE: ./node_modules/obliterator/take.js
var take = __webpack_require__(5);
var take_default = /*#__PURE__*/__webpack_require__.n(take);

// EXTERNAL MODULE: ./src/errors.js
var errors = __webpack_require__(0);

// CONCATENATED MODULE: ./src/data.js
/**
 * Graphology Internal Data Classes
 * =================================
 *
 * Internal classes hopefully reduced to structs by engines & storing
 * necessary information for nodes & edges.
 *
 * Note that those classes don't rely on the `class` keyword to avoid some
 * cruft introduced by most of ES2015 transpilers.
 */

/**
 * MixedNodeData class.
 *
 * @constructor
 * @param {string} string     - The node's key.
 * @param {object} attributes - Node's attributes.
 */
function MixedNodeData(key, attributes) {
  // Attributes
  this.key = key;
  this.attributes = attributes; // Degrees

  this.inDegree = 0;
  this.outDegree = 0;
  this.undirectedDegree = 0;
  this.directedSelfLoops = 0;
  this.undirectedSelfLoops = 0; // Indices

  this["in"] = {};
  this.out = {};
  this.undirected = {};
}
/**
 * DirectedNodeData class.
 *
 * @constructor
 * @param {string} string     - The node's key.
 * @param {object} attributes - Node's attributes.
 */

function DirectedNodeData(key, attributes) {
  // Attributes
  this.key = key;
  this.attributes = attributes || {}; // Degrees

  this.inDegree = 0;
  this.outDegree = 0;
  this.directedSelfLoops = 0; // Indices

  this["in"] = {};
  this.out = {};
}

DirectedNodeData.prototype.upgradeToMixed = function () {
  // Degrees
  this.undirectedDegree = 0;
  this.undirectedSelfLoops = 0; // Indices

  this.undirected = {};
};
/**
 * UndirectedNodeData class.
 *
 * @constructor
 * @param {string} string     - The node's key.
 * @param {object} attributes - Node's attributes.
 */


function UndirectedNodeData(key, attributes) {
  // Attributes
  this.key = key;
  this.attributes = attributes || {}; // Degrees

  this.undirectedDegree = 0;
  this.undirectedSelfLoops = 0; // Indices

  this.undirected = {};
}

UndirectedNodeData.prototype.upgradeToMixed = function () {
  // Degrees
  this.inDegree = 0;
  this.outDegree = 0;
  this.directedSelfLoops = 0; // Indices

  this["in"] = {};
  this.out = {};
};
/**
 * DirectedEdgeData class.
 *
 * @constructor
 * @param {string}  string       - The edge's key.
 * @param {boolean} generatedKey - Was its key generated?
 * @param {string}  source       - Source of the edge.
 * @param {string}  target       - Target of the edge.
 * @param {object}  attributes   - Edge's attributes.
 */


function DirectedEdgeData(key, generatedKey, source, target, attributes) {
  // Attributes
  this.key = key;
  this.attributes = attributes; // Extremities

  this.source = source;
  this.target = target; // Was its key generated?

  this.generatedKey = generatedKey;
}
/**
 * UndirectedEdgeData class.
 *
 * @constructor
 * @param {string}  string       - The edge's key.
 * @param {boolean} generatedKey - Was its key generated?
 * @param {string}  source       - Source of the edge.
 * @param {string}  target       - Target of the edge.
 * @param {object}  attributes   - Edge's attributes.
 */

function UndirectedEdgeData(key, generatedKey, source, target, attributes) {
  // Attributes
  this.key = key;
  this.attributes = attributes; // Extremities

  this.source = source;
  this.target = target; // Was its key generated?

  this.generatedKey = generatedKey;
}
// CONCATENATED MODULE: ./src/indices.js
/**
 * Graphology Indexes Functions
 * =============================
 *
 * Bunch of functions used to compute or clear indexes.
 */

/**
 * Function updating the 'structure' index with the given edge's data.
 * Note that in the case of the multi graph, related edges are stored in a
 * set that is the same for A -> B & B <- A.
 *
 * @param {Graph}    graph      - Target Graph instance.
 * @param {EdgeData} edgeData   - Added edge's data.
 * @param {NodeData} sourceData - Source node's data.
 * @param {NodeData} targetData - Target node's data.
 */
function updateStructureIndex(graph, undirected, edgeData, source, target, sourceData, targetData) {
  var multi = graph.multi;
  var outKey = undirected ? 'undirected' : 'out',
      inKey = undirected ? 'undirected' : 'in'; // Handling source

  var edgeOrSet = sourceData[outKey][target];

  if (typeof edgeOrSet === 'undefined') {
    edgeOrSet = multi ? new Set() : edgeData;
    sourceData[outKey][target] = edgeOrSet;
  }

  if (multi) edgeOrSet.add(edgeData); // If selfLoop, we break here

  if (source === target) return; // Handling target (we won't add the edge because it was already taken
  // care of with source above)

  if (typeof targetData[inKey][source] === 'undefined') targetData[inKey][source] = edgeOrSet;
}
/**
 * Function clearing the 'structure' index data related to the given edge.
 *
 * @param {Graph}    graph    - Target Graph instance.
 * @param {EdgeData} edgeData - Dropped edge's data.
 */

function clearEdgeFromStructureIndex(graph, undirected, edgeData) {
  var multi = graph.multi;
  var sourceData = edgeData.source,
      targetData = edgeData.target;
  var source = sourceData.key,
      target = targetData.key; // NOTE: since the edge set is the same for source & target, we can only
  // affect source

  var outKey = undirected ? 'undirected' : 'out',
      sourceIndex = sourceData[outKey];
  var inKey = undirected ? 'undirected' : 'in';

  if (target in sourceIndex) {
    if (multi) {
      var set = sourceIndex[target];

      if (set.size === 1) {
        delete sourceIndex[target];
        delete targetData[inKey][source];
      } else {
        set["delete"](edgeData);
      }
    } else delete sourceIndex[target];
  }

  if (multi) return;
  var targetIndex = targetData[inKey];
  delete targetIndex[source];
}
/**
 * Function clearing the whole 'structure' index.
 *
 * @param {Graph} graph - Target Graph instance.
 */

function clearStructureIndex(graph) {
  graph._nodes.forEach(function (data) {
    // Clearing now useless properties
    if (typeof data["in"] !== 'undefined') {
      data["in"] = {};
      data.out = {};
    }

    if (typeof data.undirected !== 'undefined') {
      data.undirected = {};
    }
  });
}
/**
 * Function used to upgrade a simple `structure` index to a multi on.
 *
 * @param {Graph}  graph - Target Graph instance.
 */

function upgradeStructureIndexToMulti(graph) {
  graph._nodes.forEach(function (data, node) {
    // Directed
    if (data.out) {
      for (var neighbor in data.out) {
        var edges = new Set();
        edges.add(data.out[neighbor]);
        data.out[neighbor] = edges;
        graph._nodes.get(neighbor)["in"][node] = edges;
      }
    } // Undirected


    if (data.undirected) {
      for (var _neighbor in data.undirected) {
        if (_neighbor > node) continue;

        var _edges = new Set();

        _edges.add(data.undirected[_neighbor]);

        data.undirected[_neighbor] = _edges;
        graph._nodes.get(_neighbor).undirected[node] = _edges;
      }
    }
  });
}
// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./src/attributes.js
/**
 * Graphology Attributes methods
 * ==============================
 *
 * Attributes-related methods being exactly the same for nodes & edges,
 * we abstract them here for factorization reasons.
 */



/**
 * Attach an attribute getter method onto the provided class.
 *
 * @param {function} Class         - Target class.
 * @param {string}   method        - Method name.
 * @param {string}   type          - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */

function attachAttributeGetter(Class, method, type, EdgeDataClass) {
  /**
   * Get the desired attribute for the given element (node or edge).
   *
   * Arity 2:
   * @param  {any}    element - Target element.
   * @param  {string} name    - Attribute's name.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source - Source element.
   * @param  {any}     target - Target element.
   * @param  {string}  name   - Attribute's name.
   *
   * @return {mixed}          - The attribute's value.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, name) {
    var data;
    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot find this type of edges in your ").concat(this.type, " graph."));

    if (arguments.length > 2) {
      if (this.multi) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
      var source = '' + element,
          target = '' + name;
      name = arguments[2];
      data = Object(utils["b" /* getMatchingEdge */])(this, source, target, type);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find an edge for the given path (\"").concat(source, "\" - \"").concat(target, "\")."));
    } else {
      element = '' + element;
      data = this._edges.get(element);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" edge in the graph."));
    }

    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" ").concat(type, " edge in the graph."));
    return data.attributes[name];
  };
}
/**
 * Attach an attributes getter method onto the provided class.
 *
 * @param {function} Class       - Target class.
 * @param {string}   method      - Method name.
 * @param {string}   type        - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */


function attachAttributesGetter(Class, method, type, EdgeDataClass) {
  /**
   * Retrieves all the target element's attributes.
   *
   * Arity 2:
   * @param  {any}    element - Target element.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source - Source element.
   * @param  {any}     target - Target element.
   *
   * @return {object}          - The element's attributes.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element) {
    var data;
    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot find this type of edges in your ").concat(this.type, " graph."));

    if (arguments.length > 1) {
      if (this.multi) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
      var source = '' + element,
          target = '' + arguments[1];
      data = Object(utils["b" /* getMatchingEdge */])(this, source, target, type);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find an edge for the given path (\"").concat(source, "\" - \"").concat(target, "\")."));
    } else {
      element = '' + element;
      data = this._edges.get(element);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" edge in the graph."));
    }

    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" ").concat(type, " edge in the graph."));
    return data.attributes;
  };
}
/**
 * Attach an attribute checker method onto the provided class.
 *
 * @param {function} Class       - Target class.
 * @param {string}   method      - Method name.
 * @param {string}   type        - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */


function attachAttributeChecker(Class, method, type, EdgeDataClass) {
  /**
   * Checks whether the desired attribute is set for the given element (node or edge).
   *
   * Arity 2:
   * @param  {any}    element - Target element.
   * @param  {string} name    - Attribute's name.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source - Source element.
   * @param  {any}     target - Target element.
   * @param  {string}  name   - Attribute's name.
   *
   * @return {boolean}
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, name) {
    var data;
    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot find this type of edges in your ").concat(this.type, " graph."));

    if (arguments.length > 2) {
      if (this.multi) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
      var source = '' + element,
          target = '' + name;
      name = arguments[2];
      data = Object(utils["b" /* getMatchingEdge */])(this, source, target, type);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find an edge for the given path (\"").concat(source, "\" - \"").concat(target, "\")."));
    } else {
      element = '' + element;
      data = this._edges.get(element);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" edge in the graph."));
    }

    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" ").concat(type, " edge in the graph."));
    return data.attributes.hasOwnProperty(name);
  };
}
/**
 * Attach an attribute setter method onto the provided class.
 *
 * @param {function} Class         - Target class.
 * @param {string}   method        - Method name.
 * @param {string}   type          - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */


function attachAttributeSetter(Class, method, type, EdgeDataClass) {
  /**
   * Set the desired attribute for the given element (node or edge).
   *
   * Arity 2:
   * @param  {any}    element - Target element.
   * @param  {string} name    - Attribute's name.
   * @param  {mixed}  value   - New attribute value.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source - Source element.
   * @param  {any}     target - Target element.
   * @param  {string}  name   - Attribute's name.
   * @param  {mixed}  value   - New attribute value.
   *
   * @return {Graph}          - Returns itself for chaining.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, name, value) {
    var data;
    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot find this type of edges in your ").concat(this.type, " graph."));

    if (arguments.length > 3) {
      if (this.multi) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
      var source = '' + element,
          target = '' + name;
      name = arguments[2];
      value = arguments[3];
      data = Object(utils["b" /* getMatchingEdge */])(this, source, target, type);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find an edge for the given path (\"").concat(source, "\" - \"").concat(target, "\")."));
    } else {
      element = '' + element;
      data = this._edges.get(element);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" edge in the graph."));
    }

    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" ").concat(type, " edge in the graph."));
    data.attributes[name] = value; // Emitting

    this.emit('edgeAttributesUpdated', {
      key: data.key,
      type: 'set',
      meta: {
        name: name,
        value: value
      }
    });
    return this;
  };
}
/**
 * Attach an attribute updater method onto the provided class.
 *
 * @param {function} Class         - Target class.
 * @param {string}   method        - Method name.
 * @param {string}   type          - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */


function attachAttributeUpdater(Class, method, type, EdgeDataClass) {
  /**
   * Update the desired attribute for the given element (node or edge) using
   * the provided function.
   *
   * Arity 2:
   * @param  {any}      element - Target element.
   * @param  {string}   name    - Attribute's name.
   * @param  {function} updater - Updater function.
   *
   * Arity 3 (only for edges):
   * @param  {any}      source  - Source element.
   * @param  {any}      target  - Target element.
   * @param  {string}   name    - Attribute's name.
   * @param  {function} updater - Updater function.
   *
   * @return {Graph}            - Returns itself for chaining.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, name, updater) {
    var data;
    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot find this type of edges in your ").concat(this.type, " graph."));

    if (arguments.length > 3) {
      if (this.multi) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
      var source = '' + element,
          target = '' + name;
      name = arguments[2];
      updater = arguments[3];
      data = Object(utils["b" /* getMatchingEdge */])(this, source, target, type);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find an edge for the given path (\"").concat(source, "\" - \"").concat(target, "\")."));
    } else {
      element = '' + element;
      data = this._edges.get(element);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" edge in the graph."));
    }

    if (typeof updater !== 'function') throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.".concat(method, ": updater should be a function."));
    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" ").concat(type, " edge in the graph."));
    data.attributes[name] = updater(data.attributes[name]); // Emitting

    this.emit('edgeAttributesUpdated', {
      key: data.key,
      type: 'set',
      meta: {
        name: name,
        value: data.attributes[name]
      }
    });
    return this;
  };
}
/**
 * Attach an attribute remover method onto the provided class.
 *
 * @param {function} Class         - Target class.
 * @param {string}   method        - Method name.
 * @param {string}   type          - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */


function attachAttributeRemover(Class, method, type, EdgeDataClass) {
  /**
   * Remove the desired attribute for the given element (node or edge).
   *
   * Arity 2:
   * @param  {any}    element - Target element.
   * @param  {string} name    - Attribute's name.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source - Source element.
   * @param  {any}     target - Target element.
   * @param  {string}  name   - Attribute's name.
   *
   * @return {Graph}          - Returns itself for chaining.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, name) {
    var data;
    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot find this type of edges in your ").concat(this.type, " graph."));

    if (arguments.length > 2) {
      if (this.multi) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
      var source = '' + element,
          target = '' + name;
      name = arguments[2];
      data = Object(utils["b" /* getMatchingEdge */])(this, source, target, type);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find an edge for the given path (\"").concat(source, "\" - \"").concat(target, "\")."));
    } else {
      element = '' + element;
      data = this._edges.get(element);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" edge in the graph."));
    }

    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" ").concat(type, " edge in the graph."));
    delete data.attributes[name]; // Emitting

    this.emit('edgeAttributesUpdated', {
      key: data.key,
      type: 'remove',
      meta: {
        name: name
      }
    });
    return this;
  };
}
/**
 * Attach an attribute replacer method onto the provided class.
 *
 * @param {function} Class         - Target class.
 * @param {string}   method        - Method name.
 * @param {string}   type          - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */


function attachAttributesReplacer(Class, method, type, EdgeDataClass) {
  /**
   * Replace the attributes for the given element (node or edge).
   *
   * Arity 2:
   * @param  {any}    element    - Target element.
   * @param  {object} attributes - New attributes.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source     - Source element.
   * @param  {any}     target     - Target element.
   * @param  {object}  attributes - New attributes.
   *
   * @return {Graph}              - Returns itself for chaining.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, attributes) {
    var data;
    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot find this type of edges in your ").concat(this.type, " graph."));

    if (arguments.length > 2) {
      if (this.multi) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
      var source = '' + element,
          target = '' + attributes;
      attributes = arguments[2];
      data = Object(utils["b" /* getMatchingEdge */])(this, source, target, type);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find an edge for the given path (\"").concat(source, "\" - \"").concat(target, "\")."));
    } else {
      element = '' + element;
      data = this._edges.get(element);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" edge in the graph."));
    }

    if (!Object(utils["e" /* isPlainObject */])(attributes)) throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.".concat(method, ": provided attributes are not a plain object."));
    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" ").concat(type, " edge in the graph."));
    var oldAttributes = data.attributes;
    data.attributes = attributes; // Emitting

    this.emit('edgeAttributesUpdated', {
      key: data.key,
      type: 'replace',
      meta: {
        before: oldAttributes,
        after: attributes
      }
    });
    return this;
  };
}
/**
 * Attach an attribute merger method onto the provided class.
 *
 * @param {function} Class         - Target class.
 * @param {string}   method        - Method name.
 * @param {string}   type          - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */


function attachAttributesMerger(Class, method, type, EdgeDataClass) {
  /**
   * Replace the attributes for the given element (node or edge).
   *
   * Arity 2:
   * @param  {any}    element    - Target element.
   * @param  {object} attributes - Attributes to merge.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source     - Source element.
   * @param  {any}     target     - Target element.
   * @param  {object}  attributes - Attributes to merge.
   *
   * @return {Graph}              - Returns itself for chaining.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, attributes) {
    var data;
    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot find this type of edges in your ").concat(this.type, " graph."));

    if (arguments.length > 2) {
      if (this.multi) throw new errors["c" /* UsageGraphError */]("Graph.".concat(method, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
      var source = '' + element,
          target = '' + attributes;
      attributes = arguments[2];
      data = Object(utils["b" /* getMatchingEdge */])(this, source, target, type);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find an edge for the given path (\"").concat(source, "\" - \"").concat(target, "\")."));
    } else {
      element = '' + element;
      data = this._edges.get(element);
      if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" edge in the graph."));
    }

    if (!Object(utils["e" /* isPlainObject */])(attributes)) throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.".concat(method, ": provided attributes are not a plain object."));
    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(method, ": could not find the \"").concat(element, "\" ").concat(type, " edge in the graph."));
    Object(utils["a" /* assign */])(data.attributes, attributes); // Emitting

    this.emit('edgeAttributesUpdated', {
      key: data.key,
      type: 'merge',
      meta: {
        data: attributes
      }
    });
    return this;
  };
}
/**
 * List of methods to attach.
 */


var ATTRIBUTES_METHODS = [{
  name: function name(element) {
    return "get".concat(element, "Attribute");
  },
  attacher: attachAttributeGetter
}, {
  name: function name(element) {
    return "get".concat(element, "Attributes");
  },
  attacher: attachAttributesGetter
}, {
  name: function name(element) {
    return "has".concat(element, "Attribute");
  },
  attacher: attachAttributeChecker
}, {
  name: function name(element) {
    return "set".concat(element, "Attribute");
  },
  attacher: attachAttributeSetter
}, {
  name: function name(element) {
    return "update".concat(element, "Attribute");
  },
  attacher: attachAttributeUpdater
}, {
  name: function name(element) {
    return "remove".concat(element, "Attribute");
  },
  attacher: attachAttributeRemover
}, {
  name: function name(element) {
    return "replace".concat(element, "Attributes");
  },
  attacher: attachAttributesReplacer
}, {
  name: function name(element) {
    return "merge".concat(element, "Attributes");
  },
  attacher: attachAttributesMerger
}];
/**
 * Attach every attributes-related methods to a Graph class.
 *
 * @param {function} Graph - Target class.
 */

function attachAttributesMethods(Graph) {
  ATTRIBUTES_METHODS.forEach(function (_ref) {
    var name = _ref.name,
        attacher = _ref.attacher;
    // For edges
    attacher(Graph, name('Edge'), 'mixed', DirectedEdgeData); // For directed edges

    attacher(Graph, name('DirectedEdge'), 'directed', DirectedEdgeData); // For undirected edges

    attacher(Graph, name('UndirectedEdge'), 'undirected', UndirectedEdgeData);
  });
}
// EXTERNAL MODULE: ./node_modules/obliterator/chain.js
var chain = __webpack_require__(4);
var chain_default = /*#__PURE__*/__webpack_require__.n(chain);

// CONCATENATED MODULE: ./src/iteration/edges.js
/**
 * Graphology Edge Iteration
 * ==========================
 *
 * Attaching some methods to the Graph class to be able to iterate over a
 * graph's edges.
 */





/**
 * Definitions.
 */

var EDGES_ITERATION = [{
  name: 'edges',
  type: 'mixed'
}, {
  name: 'inEdges',
  type: 'directed',
  direction: 'in'
}, {
  name: 'outEdges',
  type: 'directed',
  direction: 'out'
}, {
  name: 'inboundEdges',
  type: 'mixed',
  direction: 'in'
}, {
  name: 'outboundEdges',
  type: 'mixed',
  direction: 'out'
}, {
  name: 'directedEdges',
  type: 'directed'
}, {
  name: 'undirectedEdges',
  type: 'undirected'
}];
/**
 * Function collecting edges from the given object.
 *
 * @param  {array}  edges  - Edges array to populate.
 * @param  {object} object - Target object.
 * @return {array}         - The found edges.
 */

function collect(edges, object) {
  for (var k in object) {
    if (object[k] instanceof Set) object[k].forEach(function (edgeData) {
      return edges.push(edgeData.key);
    });else edges.push(object[k].key);
  }
}
/**
 * Function iterating over edges from the given object using a callback.
 *
 * @param {object}   object   - Target object.
 * @param {function} callback - Function to call.
 */


function edges_forEach(object, callback) {
  for (var k in object) {
    if (object[k] instanceof Set) object[k].forEach(function (edgeData) {
      return callback(edgeData.key, edgeData.attributes, edgeData.source.key, edgeData.target.key, edgeData.source.attributes, edgeData.target.attributes);
    });else {
      var edgeData = object[k];
      callback(edgeData.key, edgeData.attributes, edgeData.source.key, edgeData.target.key, edgeData.source.attributes, edgeData.target.attributes);
    }
  }
}
/**
 * Function returning an iterator over edges from the given object.
 *
 * @param  {object}   object - Target object.
 * @return {Iterator}
 */


function createIterator(object) {
  var keys = Object.keys(object),
      l = keys.length;
  var inner = null,
      i = 0;
  return new iterator_default.a(function next() {
    var edgeData;

    if (inner) {
      var step = inner.next();

      if (step.done) {
        inner = null;
        i++;
        return next();
      }

      edgeData = step.value;
    } else {
      if (i >= l) return {
        done: true
      };
      var k = keys[i];
      edgeData = object[k];

      if (edgeData instanceof Set) {
        inner = edgeData.values();
        return next();
      }

      i++;
    }

    return {
      done: false,
      value: [edgeData.key, edgeData.attributes, edgeData.source.key, edgeData.target.key, edgeData.source.attributes, edgeData.target.attributes]
    };
  });
}
/**
 * Function collecting edges from the given object at given key.
 *
 * @param  {array}  edges  - Edges array to populate.
 * @param  {object} object - Target object.
 * @param  {mixed}  k      - Neighbor key.
 * @return {array}         - The found edges.
 */


function collectForKey(edges, object, k) {
  if (!(k in object)) return;
  if (object[k] instanceof Set) object[k].forEach(function (edgeData) {
    return edges.push(edgeData.key);
  });else edges.push(object[k].key);
  return;
}
/**
 * Function iterating over the egdes from the object at given key using
 * a callback.
 *
 * @param {object}   object   - Target object.
 * @param {mixed}    k        - Neighbor key.
 * @param {function} callback - Callback to use.
 */


function forEachForKey(object, k, callback) {
  if (!(k in object)) return;
  if (object[k] instanceof Set) object[k].forEach(function (edgeData) {
    return callback(edgeData.key, edgeData.attributes, edgeData.source.key, edgeData.target.key, edgeData.source.attributes, edgeData.target.attributes);
  });else {
    var edgeData = object[k];
    callback(edgeData.key, edgeData.attributes, edgeData.source.key, edgeData.target.key, edgeData.source.attributes, edgeData.target.attributes);
  }
  return;
}
/**
 * Function returning an iterator over the egdes from the object at given key.
 *
 * @param  {object}   object   - Target object.
 * @param  {mixed}    k        - Neighbor key.
 * @return {Iterator}
 */


function createIteratorForKey(object, k) {
  var v = object[k];

  if (v instanceof Set) {
    var iterator = v.values();
    return new iterator_default.a(function () {
      var step = iterator.next();
      if (step.done) return step;
      var edgeData = step.value;
      return {
        done: false,
        value: [edgeData.key, edgeData.attributes, edgeData.source.key, edgeData.target.key, edgeData.source.attributes, edgeData.target.attributes]
      };
    });
  }

  return iterator_default.a.of([v.key, v.attributes, v.source.key, v.target.key, v.source.attributes, v.target.attributes]);
}
/**
 * Function creating an array of edges for the given type.
 *
 * @param  {Graph}   graph - Target Graph instance.
 * @param  {string}  type  - Type of edges to retrieve.
 * @return {array}         - Array of edges.
 */


function createEdgeArray(graph, type) {
  if (graph.size === 0) return [];
  if (type === 'mixed' || type === graph.type) return take_default()(graph._edges.keys(), graph._edges.size);
  var size = type === 'undirected' ? graph.undirectedSize : graph.directedSize;
  var list = new Array(size),
      mask = type === 'undirected';
  var i = 0;

  graph._edges.forEach(function (data, edge) {
    if (data instanceof UndirectedEdgeData === mask) list[i++] = edge;
  });

  return list;
}
/**
 * Function iterating over a graph's edges using a callback.
 *
 * @param  {Graph}    graph    - Target Graph instance.
 * @param  {string}   type     - Type of edges to retrieve.
 * @param  {function} callback - Function to call.
 */


function forEachEdge(graph, type, callback) {
  if (graph.size === 0) return;

  if (type === 'mixed' || type === graph.type) {
    graph._edges.forEach(function (data, key) {
      var attributes = data.attributes,
          source = data.source,
          target = data.target;
      callback(key, attributes, source.key, target.key, source.attributes, target.attributes);
    });
  } else {
    var mask = type === 'undirected';

    graph._edges.forEach(function (data, key) {
      if (data instanceof UndirectedEdgeData === mask) {
        var attributes = data.attributes,
            source = data.source,
            target = data.target;
        callback(key, attributes, source.key, target.key, source.attributes, target.attributes);
      }
    });
  }
}
/**
 * Function creating an iterator of edges for the given type.
 *
 * @param  {Graph}    graph - Target Graph instance.
 * @param  {string}   type  - Type of edges to retrieve.
 * @return {Iterator}
 */


function createEdgeIterator(graph, type) {
  if (graph.size === 0) return iterator_default.a.empty();
  var iterator;

  if (type === 'mixed') {
    iterator = graph._edges.values();
    return new iterator_default.a(function next() {
      var step = iterator.next();
      if (step.done) return step;
      var data = step.value;
      var value = [data.key, data.attributes, data.source.key, data.target.key, data.source.attributes, data.target.attributes];
      return {
        value: value,
        done: false
      };
    });
  }

  iterator = graph._edges.values();
  return new iterator_default.a(function next() {
    var step = iterator.next();
    if (step.done) return step;
    var data = step.value;

    if (data instanceof UndirectedEdgeData === (type === 'undirected')) {
      var value = [data.key, data.attributes, data.source.key, data.target.key, data.source.attributes, data.target.attributes];
      return {
        value: value,
        done: false
      };
    }

    return next();
  });
}
/**
 * Function creating an array of edges for the given type & the given node.
 *
 * @param  {string}  type      - Type of edges to retrieve.
 * @param  {string}  direction - In or out?
 * @param  {any}     nodeData  - Target node's data.
 * @return {array}             - Array of edges.
 */


function createEdgeArrayForNode(type, direction, nodeData) {
  var edges = [];

  if (type !== 'undirected') {
    if (direction !== 'out') collect(edges, nodeData["in"]);
    if (direction !== 'in') collect(edges, nodeData.out);
  }

  if (type !== 'directed') {
    collect(edges, nodeData.undirected);
  }

  return edges;
}
/**
 * Function iterating over a node's edges using a callback.
 *
 * @param  {string}   type      - Type of edges to retrieve.
 * @param  {string}   direction - In or out?
 * @param  {any}      nodeData  - Target node's data.
 * @param  {function} callback  - Function to call.
 */


function forEachEdgeForNode(type, direction, nodeData, callback) {
  if (type !== 'undirected') {
    if (direction !== 'out') edges_forEach(nodeData["in"], callback);
    if (direction !== 'in') edges_forEach(nodeData.out, callback);
  }

  if (type !== 'directed') {
    edges_forEach(nodeData.undirected, callback);
  }
}
/**
 * Function iterating over a node's edges using a callback.
 *
 * @param  {string}   type      - Type of edges to retrieve.
 * @param  {string}   direction - In or out?
 * @param  {any}      nodeData  - Target node's data.
 * @return {Iterator}
 */


function createEdgeIteratorForNode(type, direction, nodeData) {
  var iterator = iterator_default.a.empty();

  if (type !== 'undirected') {
    if (direction !== 'out' && typeof nodeData["in"] !== 'undefined') iterator = chain_default()(iterator, createIterator(nodeData["in"]));
    if (direction !== 'in' && typeof nodeData.out !== 'undefined') iterator = chain_default()(iterator, createIterator(nodeData.out));
  }

  if (type !== 'directed' && typeof nodeData.undirected !== 'undefined') {
    iterator = chain_default()(iterator, createIterator(nodeData.undirected));
  }

  return iterator;
}
/**
 * Function creating an array of edges for the given path.
 *
 * @param  {string}   type       - Type of edges to retrieve.
 * @param  {string}   direction  - In or out?
 * @param  {NodeData} sourceData - Source node's data.
 * @param  {any}      target     - Target node.
 * @return {array}               - Array of edges.
 */


function createEdgeArrayForPath(type, direction, sourceData, target) {
  var edges = [];

  if (type !== 'undirected') {
    if (typeof sourceData["in"] !== 'undefined' && direction !== 'out') collectForKey(edges, sourceData["in"], target);
    if (typeof sourceData.out !== 'undefined' && direction !== 'in') collectForKey(edges, sourceData.out, target);
  }

  if (type !== 'directed') {
    if (typeof sourceData.undirected !== 'undefined') collectForKey(edges, sourceData.undirected, target);
  }

  return edges;
}
/**
 * Function iterating over edges for the given path using a callback.
 *
 * @param  {string}   type       - Type of edges to retrieve.
 * @param  {string}   direction  - In or out?
 * @param  {NodeData} sourceData - Source node's data.
 * @param  {string}   target     - Target node.
 * @param  {function} callback   - Function to call.
 */


function forEachEdgeForPath(type, direction, sourceData, target, callback) {
  if (type !== 'undirected') {
    if (typeof sourceData["in"] !== 'undefined' && direction !== 'out') forEachForKey(sourceData["in"], target, callback);
    if (typeof sourceData.out !== 'undefined' && direction !== 'in') forEachForKey(sourceData.out, target, callback);
  }

  if (type !== 'directed') {
    if (typeof sourceData.undirected !== 'undefined') forEachForKey(sourceData.undirected, target, callback);
  }
}
/**
 * Function returning an iterator over edges for the given path.
 *
 * @param  {string}   type       - Type of edges to retrieve.
 * @param  {string}   direction  - In or out?
 * @param  {NodeData} sourceData - Source node's data.
 * @param  {string}   target     - Target node.
 * @param  {function} callback   - Function to call.
 */


function createEdgeIteratorForPath(type, direction, sourceData, target) {
  var iterator = iterator_default.a.empty();

  if (type !== 'undirected') {
    if (typeof sourceData["in"] !== 'undefined' && direction !== 'out' && target in sourceData["in"]) iterator = chain_default()(iterator, createIteratorForKey(sourceData["in"], target));
    if (typeof sourceData.out !== 'undefined' && direction !== 'in' && target in sourceData.out) iterator = chain_default()(iterator, createIteratorForKey(sourceData.out, target));
  }

  if (type !== 'directed') {
    if (typeof sourceData.undirected !== 'undefined' && target in sourceData.undirected) iterator = chain_default()(iterator, createIteratorForKey(sourceData.undirected, target));
  }

  return iterator;
}
/**
 * Function attaching an edge array creator method to the Graph prototype.
 *
 * @param {function} Class       - Target class.
 * @param {object}   description - Method description.
 */


function attachEdgeArrayCreator(Class, description) {
  var name = description.name,
      type = description.type,
      direction = description.direction;
  /**
   * Function returning an array of certain edges.
   *
   * Arity 0: Return all the relevant edges.
   *
   * Arity 1: Return all of a node's relevant edges.
   * @param  {any}   node   - Target node.
   *
   * Arity 2: Return the relevant edges across the given path.
   * @param  {any}   source - Source node.
   * @param  {any}   target - Target node.
   *
   * @return {array|number} - The edges or the number of edges.
   *
   * @throws {Error} - Will throw if there are too many arguments.
   */

  Class.prototype[name] = function (source, target) {
    // Early termination
    if (type !== 'mixed' && this.type !== 'mixed' && type !== this.type) return [];
    if (!arguments.length) return createEdgeArray(this, type);

    if (arguments.length === 1) {
      source = '' + source;

      var nodeData = this._nodes.get(source);

      if (typeof nodeData === 'undefined') throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(name, ": could not find the \"").concat(source, "\" node in the graph.")); // Iterating over a node's edges

      return createEdgeArrayForNode(type === 'mixed' ? this.type : type, direction, nodeData);
    }

    if (arguments.length === 2) {
      source = '' + source;
      target = '' + target;

      var sourceData = this._nodes.get(source);

      if (!sourceData) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(name, ":  could not find the \"").concat(source, "\" source node in the graph."));
      if (!this._nodes.has(target)) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(name, ":  could not find the \"").concat(target, "\" target node in the graph.")); // Iterating over the edges between source & target

      return createEdgeArrayForPath(type, direction, sourceData, target);
    }

    throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.".concat(name, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
  };
}
/**
 * Function attaching a edge callback iterator method to the Graph prototype.
 *
 * @param {function} Class       - Target class.
 * @param {object}   description - Method description.
 */


function attachForEachEdge(Class, description) {
  var name = description.name,
      type = description.type,
      direction = description.direction;
  var forEachName = 'forEach' + name[0].toUpperCase() + name.slice(1, -1);
  /**
   * Function iterating over the graph's relevant edges by applying the given
   * callback.
   *
   * Arity 1: Iterate over all the relevant edges.
   * @param  {function} callback - Callback to use.
   *
   * Arity 2: Iterate over all of a node's relevant edges.
   * @param  {any}      node     - Target node.
   * @param  {function} callback - Callback to use.
   *
   * Arity 3: Iterate over the relevant edges across the given path.
   * @param  {any}      source   - Source node.
   * @param  {any}      target   - Target node.
   * @param  {function} callback - Callback to use.
   *
   * @return {undefined}
   *
   * @throws {Error} - Will throw if there are too many arguments.
   */

  Class.prototype[forEachName] = function (source, target, callback) {
    // Early termination
    if (type !== 'mixed' && this.type !== 'mixed' && type !== this.type) return;

    if (arguments.length === 1) {
      callback = source;
      return forEachEdge(this, type, callback);
    }

    if (arguments.length === 2) {
      source = '' + source;
      callback = target;

      var nodeData = this._nodes.get(source);

      if (typeof nodeData === 'undefined') throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(forEachName, ": could not find the \"").concat(source, "\" node in the graph.")); // Iterating over a node's edges

      return forEachEdgeForNode(type === 'mixed' ? this.type : type, direction, nodeData, callback);
    }

    if (arguments.length === 3) {
      source = '' + source;
      target = '' + target;

      var sourceData = this._nodes.get(source);

      if (!sourceData) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(forEachName, ":  could not find the \"").concat(source, "\" source node in the graph."));
      if (!this._nodes.has(target)) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(forEachName, ":  could not find the \"").concat(target, "\" target node in the graph.")); // Iterating over the edges between source & target

      return forEachEdgeForPath(type, direction, sourceData, target, callback);
    }

    throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.".concat(forEachName, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
  };
}
/**
 * Function attaching an edge iterator method to the Graph prototype.
 *
 * @param {function} Class       - Target class.
 * @param {object}   description - Method description.
 */


function attachEdgeIteratorCreator(Class, description) {
  var originalName = description.name,
      type = description.type,
      direction = description.direction;
  var name = originalName.slice(0, -1) + 'Entries';
  /**
   * Function returning an iterator over the graph's edges.
   *
   * Arity 0: Iterate over all the relevant edges.
   *
   * Arity 1: Iterate over all of a node's relevant edges.
   * @param  {any}   node   - Target node.
   *
   * Arity 2: Iterate over the relevant edges across the given path.
   * @param  {any}   source - Source node.
   * @param  {any}   target - Target node.
   *
   * @return {array|number} - The edges or the number of edges.
   *
   * @throws {Error} - Will throw if there are too many arguments.
   */

  Class.prototype[name] = function (source, target) {
    // Early termination
    if (type !== 'mixed' && this.type !== 'mixed' && type !== this.type) return iterator_default.a.empty();
    if (!arguments.length) return createEdgeIterator(this, type);

    if (arguments.length === 1) {
      source = '' + source;

      var sourceData = this._nodes.get(source);

      if (!sourceData) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(name, ": could not find the \"").concat(source, "\" node in the graph.")); // Iterating over a node's edges

      return createEdgeIteratorForNode(type, direction, sourceData);
    }

    if (arguments.length === 2) {
      source = '' + source;
      target = '' + target;

      var _sourceData = this._nodes.get(source);

      if (!_sourceData) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(name, ":  could not find the \"").concat(source, "\" source node in the graph."));
      if (!this._nodes.has(target)) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(name, ":  could not find the \"").concat(target, "\" target node in the graph.")); // Iterating over the edges between source & target

      return createEdgeIteratorForPath(type, direction, _sourceData, target);
    }

    throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.".concat(name, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
  };
}
/**
 * Function attaching every edge iteration method to the Graph class.
 *
 * @param {function} Graph - Graph class.
 */

function attachEdgeIterationMethods(Graph) {
  EDGES_ITERATION.forEach(function (description) {
    attachEdgeArrayCreator(Graph, description);
    attachForEachEdge(Graph, description);
    attachEdgeIteratorCreator(Graph, description);
  });
}
// CONCATENATED MODULE: ./src/iteration/neighbors.js
/**
 * Graphology Neighbor Iteration
 * ==============================
 *
 * Attaching some methods to the Graph class to be able to iterate over
 * neighbors.
 */




/**
 * Definitions.
 */

var NEIGHBORS_ITERATION = [{
  name: 'neighbors',
  type: 'mixed'
}, {
  name: 'inNeighbors',
  type: 'directed',
  direction: 'in'
}, {
  name: 'outNeighbors',
  type: 'directed',
  direction: 'out'
}, {
  name: 'inboundNeighbors',
  type: 'mixed',
  direction: 'in'
}, {
  name: 'outboundNeighbors',
  type: 'mixed',
  direction: 'out'
}, {
  name: 'directedNeighbors',
  type: 'directed'
}, {
  name: 'undirectedNeighbors',
  type: 'undirected'
}];
/**
 * Function merging neighbors into the given set iterating over the given object.
 *
 * @param {BasicSet} neighbors - Neighbors set.
 * @param {object}   object    - Target object.
 */

function neighbors_merge(neighbors, object) {
  if (typeof object === 'undefined') return;

  for (var neighbor in object) {
    neighbors.add(neighbor);
  }
}
/**
 * Function creating an array of relevant neighbors for the given node.
 *
 * @param  {string}       type      - Type of neighbors.
 * @param  {string}       direction - Direction.
 * @param  {any}          nodeData  - Target node's data.
 * @return {Array}                  - The list of neighbors.
 */


function createNeighborArrayForNode(type, direction, nodeData) {
  // If we want only undirected or in or out, we can roll some optimizations
  if (type !== 'mixed') {
    if (type === 'undirected') return Object.keys(nodeData.undirected);
    if (typeof direction === 'string') return Object.keys(nodeData[direction]);
  } // Else we need to keep a set of neighbors not to return duplicates


  var neighbors = new Set();

  if (type !== 'undirected') {
    if (direction !== 'out') {
      neighbors_merge(neighbors, nodeData["in"]);
    }

    if (direction !== 'in') {
      neighbors_merge(neighbors, nodeData.out);
    }
  }

  if (type !== 'directed') {
    neighbors_merge(neighbors, nodeData.undirected);
  }

  return take_default()(neighbors.values(), neighbors.size);
}
/**
 * Function iterating over the given node's relevant neighbors using a
 * callback.
 *
 * @param  {string}   type      - Type of neighbors.
 * @param  {string}   direction - Direction.
 * @param  {any}      nodeData  - Target node's data.
 * @param  {function} callback  - Callback to use.
 */


function forEachInObject(nodeData, object, callback) {
  for (var k in object) {
    var edgeData = object[k];
    if (edgeData instanceof Set) edgeData = edgeData.values().next().value;
    var sourceData = edgeData.source,
        targetData = edgeData.target;
    var neighborData = sourceData === nodeData ? targetData : sourceData;
    callback(neighborData.key, neighborData.attributes);
  }
}

function forEachInObjectOnce(visited, nodeData, object, callback) {
  for (var k in object) {
    var edgeData = object[k];
    if (edgeData instanceof Set) edgeData = edgeData.values().next().value;
    var sourceData = edgeData.source,
        targetData = edgeData.target;
    var neighborData = sourceData === nodeData ? targetData : sourceData;
    if (visited.has(neighborData.key)) continue;
    visited.add(neighborData.key);
    callback(neighborData.key, neighborData.attributes);
  }
}

function forEachNeighborForNode(type, direction, nodeData, callback) {
  // If we want only undirected or in or out, we can roll some optimizations
  if (type !== 'mixed') {
    if (type === 'undirected') return forEachInObject(nodeData, nodeData.undirected, callback);
    if (typeof direction === 'string') return forEachInObject(nodeData, nodeData[direction], callback);
  } // Else we need to keep a set of neighbors not to return duplicates


  var visited = new Set();

  if (type !== 'undirected') {
    if (direction !== 'out') {
      forEachInObjectOnce(visited, nodeData, nodeData["in"], callback);
    }

    if (direction !== 'in') {
      forEachInObjectOnce(visited, nodeData, nodeData.out, callback);
    }
  }

  if (type !== 'directed') {
    forEachInObjectOnce(visited, nodeData, nodeData.undirected, callback);
  }
}
/**
 * Function returning an iterator over the given node's relevant neighbors.
 *
 * @param  {string}   type      - Type of neighbors.
 * @param  {string}   direction - Direction.
 * @param  {any}      nodeData  - Target node's data.
 * @return {Iterator}
 */


function createObjectIterator(nodeData, object) {
  var keys = Object.keys(object),
      l = keys.length;
  var i = 0;
  return new iterator_default.a(function () {
    if (i >= l) return {
      done: true
    };
    var edgeData = object[keys[i++]];
    if (edgeData instanceof Set) edgeData = edgeData.values().next().value;
    var sourceData = edgeData.source,
        targetData = edgeData.target;
    var neighborData = sourceData === nodeData ? targetData : sourceData;
    return {
      done: false,
      value: [neighborData.key, neighborData.attributes]
    };
  });
}

function createDedupedObjectIterator(visited, nodeData, object) {
  var keys = Object.keys(object),
      l = keys.length;
  var i = 0;
  return new iterator_default.a(function next() {
    if (i >= l) return {
      done: true
    };
    var edgeData = object[keys[i++]];
    if (edgeData instanceof Set) edgeData = edgeData.values().next().value;
    var sourceData = edgeData.source,
        targetData = edgeData.target;
    var neighborData = sourceData === nodeData ? targetData : sourceData;
    if (visited.has(neighborData.key)) return next();
    visited.add(neighborData.key);
    return {
      done: false,
      value: [neighborData.key, neighborData.attributes]
    };
  });
}

function createNeighborIterator(type, direction, nodeData) {
  // If we want only undirected or in or out, we can roll some optimizations
  if (type !== 'mixed') {
    if (type === 'undirected') return createObjectIterator(nodeData, nodeData.undirected);
    if (typeof direction === 'string') return createObjectIterator(nodeData, nodeData[direction]);
  }

  var iterator = iterator_default.a.empty(); // Else we need to keep a set of neighbors not to return duplicates

  var visited = new Set();

  if (type !== 'undirected') {
    if (direction !== 'out') {
      iterator = chain_default()(iterator, createDedupedObjectIterator(visited, nodeData, nodeData["in"]));
    }

    if (direction !== 'in') {
      iterator = chain_default()(iterator, createDedupedObjectIterator(visited, nodeData, nodeData.out));
    }
  }

  if (type !== 'directed') {
    iterator = chain_default()(iterator, createDedupedObjectIterator(visited, nodeData, nodeData.undirected));
  }

  return iterator;
}
/**
 * Function returning whether the given node has target neighbor.
 *
 * @param  {Graph}        graph     - Target graph.
 * @param  {string}       type      - Type of neighbor.
 * @param  {string}       direction - Direction.
 * @param  {any}          node      - Target node.
 * @param  {any}          neighbor  - Target neighbor.
 * @return {boolean}
 */


function nodeHasNeighbor(graph, type, direction, node, neighbor) {
  var nodeData = graph._nodes.get(node);

  if (type !== 'undirected') {
    if (direction !== 'out' && typeof nodeData["in"] !== 'undefined') {
      for (var k in nodeData["in"]) {
        if (k === neighbor) return true;
      }
    }

    if (direction !== 'in' && typeof nodeData.out !== 'undefined') {
      for (var _k in nodeData.out) {
        if (_k === neighbor) return true;
      }
    }
  }

  if (type !== 'directed' && typeof nodeData.undirected !== 'undefined') {
    for (var _k2 in nodeData.undirected) {
      if (_k2 === neighbor) return true;
    }
  }

  return false;
}
/**
 * Function attaching a neighbors array creator method to the Graph prototype.
 *
 * @param {function} Class       - Target class.
 * @param {object}   description - Method description.
 */


function attachNeighborArrayCreator(Class, description) {
  var name = description.name,
      type = description.type,
      direction = description.direction;
  /**
   * Function returning an array or the count of certain neighbors.
   *
   * Arity 1: Return all of a node's relevant neighbors.
   * @param  {any}   node   - Target node.
   *
   * Arity 2: Return whether the two nodes are indeed neighbors.
   * @param  {any}   source - Source node.
   * @param  {any}   target - Target node.
   *
   * @return {array|number} - The neighbors or the number of neighbors.
   *
   * @throws {Error} - Will throw if there are too many arguments.
   */

  Class.prototype[name] = function (node) {
    // Early termination
    if (type !== 'mixed' && this.type !== 'mixed' && type !== this.type) return [];

    if (arguments.length === 2) {
      var node1 = '' + arguments[0],
          node2 = '' + arguments[1];
      if (!this._nodes.has(node1)) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(name, ": could not find the \"").concat(node1, "\" node in the graph."));
      if (!this._nodes.has(node2)) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(name, ": could not find the \"").concat(node2, "\" node in the graph.")); // Here, we want to assess whether the two given nodes are neighbors

      return nodeHasNeighbor(this, type, direction, node1, node2);
    } else if (arguments.length === 1) {
      node = '' + node;

      var nodeData = this._nodes.get(node);

      if (typeof nodeData === 'undefined') throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(name, ": could not find the \"").concat(node, "\" node in the graph.")); // Here, we want to iterate over a node's relevant neighbors

      var neighbors = createNeighborArrayForNode(type === 'mixed' ? this.type : type, direction, nodeData);
      return neighbors;
    }

    throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.".concat(name, ": invalid number of arguments (expecting 1 or 2 and got ").concat(arguments.length, ")."));
  };
}
/**
 * Function attaching a neighbors callback iterator method to the Graph prototype.
 *
 * @param {function} Class       - Target class.
 * @param {object}   description - Method description.
 */


function attachForEachNeighbor(Class, description) {
  var name = description.name,
      type = description.type,
      direction = description.direction;
  var forEachName = 'forEach' + name[0].toUpperCase() + name.slice(1, -1);
  /**
   * Function iterating over all the relevant neighbors using a callback.
   *
   * @param  {any}      node     - Target node.
   * @param  {function} callback - Callback to use.
   * @return {undefined}
   *
   * @throws {Error} - Will throw if there are too many arguments.
   */

  Class.prototype[forEachName] = function (node, callback) {
    // Early termination
    if (type !== 'mixed' && this.type !== 'mixed' && type !== this.type) return;
    node = '' + node;

    var nodeData = this._nodes.get(node);

    if (typeof nodeData === 'undefined') throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(forEachName, ": could not find the \"").concat(node, "\" node in the graph.")); // Here, we want to iterate over a node's relevant neighbors

    forEachNeighborForNode(type === 'mixed' ? this.type : type, direction, nodeData, callback);
  };
}
/**
 * Function attaching a neighbors callback iterator method to the Graph prototype.
 *
 * @param {function} Class       - Target class.
 * @param {object}   description - Method description.
 */


function attachNeighborIteratorCreator(Class, description) {
  var name = description.name,
      type = description.type,
      direction = description.direction;
  var iteratorName = name.slice(0, -1) + 'Entries';
  /**
   * Function returning an iterator over all the relevant neighbors.
   *
   * @param  {any}      node     - Target node.
   * @return {Iterator}
   *
   * @throws {Error} - Will throw if there are too many arguments.
   */

  Class.prototype[iteratorName] = function (node) {
    // Early termination
    if (type !== 'mixed' && this.type !== 'mixed' && type !== this.type) return iterator_default.a.empty();
    node = '' + node;

    var nodeData = this._nodes.get(node);

    if (typeof nodeData === 'undefined') throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(iteratorName, ": could not find the \"").concat(node, "\" node in the graph.")); // Here, we want to iterate over a node's relevant neighbors

    return createNeighborIterator(type === 'mixed' ? this.type : type, direction, nodeData);
  };
}
/**
 * Function attaching every neighbor iteration method to the Graph class.
 *
 * @param {function} Graph - Graph class.
 */


function attachNeighborIterationMethods(Graph) {
  NEIGHBORS_ITERATION.forEach(function (description) {
    attachNeighborArrayCreator(Graph, description);
    attachForEachNeighbor(Graph, description);
    attachNeighborIteratorCreator(Graph, description);
  });
}
// CONCATENATED MODULE: ./src/serialization.js
/**
 * Graphology Serialization Utilities
 * ===================================
 *
 * Collection of functions used to validate import-export formats & to ouput
 * them from internal graph data.
 *
 * Serialized Node:
 * {key, ?attributes}
 *
 * Serialized Edge:
 * {key?, source, target, attributes?, undirected?}
 *
 * Serialized Graph:
 * {nodes[], edges?[]}
 */


/**
 * Formats internal node data into a serialized node.
 *
 * @param  {any}    key  - The node's key.
 * @param  {object} data - Internal node's data.
 * @return {array}       - The serialized node.
 */

function serializeNode(key, data) {
  var serialized = {
    key: key
  };
  if (Object.keys(data.attributes).length) serialized.attributes = Object(utils["a" /* assign */])({}, data.attributes);
  return serialized;
}
/**
 * Formats internal edge data into a serialized edge.
 *
 * @param  {any}    key  - The edge's key.
 * @param  {object} data - Internal edge's data.
 * @return {array}       - The serialized edge.
 */

function serializeEdge(key, data) {
  var serialized = {
    source: data.source.key,
    target: data.target.key
  }; // We export the key unless if it was provided by the user

  if (!data.generatedKey) serialized.key = key;
  if (Object.keys(data.attributes).length) serialized.attributes = Object(utils["a" /* assign */])({}, data.attributes);
  if (data instanceof UndirectedEdgeData) serialized.undirected = true;
  return serialized;
}
/**
 * Checks whether the given value is a serialized node.
 *
 * @param  {mixed} value - Target value.
 * @return {string|null}
 */

function validateSerializedNode(value) {
  if (!Object(utils["e" /* isPlainObject */])(value)) return 'not-object';
  if (!('key' in value)) return 'no-key';
  if ('attributes' in value && (!Object(utils["e" /* isPlainObject */])(value.attributes) || value.attributes === null)) return 'invalid-attributes';
  return null;
}
/**
 * Checks whether the given value is a serialized edge.
 *
 * @param  {mixed} value - Target value.
 * @return {string|null}
 */

function validateSerializedEdge(value) {
  if (!Object(utils["e" /* isPlainObject */])(value)) return 'not-object';
  if (!('source' in value)) return 'no-source';
  if (!('target' in value)) return 'no-target';
  if ('attributes' in value && (!Object(utils["e" /* isPlainObject */])(value.attributes) || value.attributes === null)) return 'invalid-attributes';
  if ('undirected' in value && typeof value.undirected !== 'boolean') return 'invalid-undirected';
  return null;
}
// CONCATENATED MODULE: ./src/graph.js
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/* eslint no-nested-ternary: 0 */

/**
 * Graphology Reference Implementation
 * ====================================
 *
 * Reference implementation of the graphology specs.
 */











/**
 * Enums.
 */

var TYPES = new Set(['directed', 'undirected', 'mixed']);
var EMITTER_PROPS = new Set(['domain', '_events', '_eventsCount', '_maxListeners']);
var EDGE_ADD_METHODS = [{
  name: function name(verb) {
    return "".concat(verb, "Edge");
  },
  generateKey: true
}, {
  name: function name(verb) {
    return "".concat(verb, "DirectedEdge");
  },
  generateKey: true,
  type: 'directed'
}, {
  name: function name(verb) {
    return "".concat(verb, "UndirectedEdge");
  },
  generateKey: true,
  type: 'undirected'
}, {
  name: function name(verb) {
    return "".concat(verb, "EdgeWithKey");
  }
}, {
  name: function name(verb) {
    return "".concat(verb, "DirectedEdgeWithKey");
  },
  type: 'directed'
}, {
  name: function name(verb) {
    return "".concat(verb, "UndirectedEdgeWithKey");
  },
  type: 'undirected'
}];
/**
 * Default options.
 */

var DEFAULTS = {
  allowSelfLoops: true,
  edgeKeyGenerator: null,
  multi: false,
  type: 'mixed'
};
/**
 * Abstract functions used by the Graph class for various methods.
 */

/**
 * Internal method used to add an arbitrary edge to the given graph.
 *
 * @param  {Graph}   graph           - Target graph.
 * @param  {string}  name            - Name of the child method for errors.
 * @param  {boolean} mustGenerateKey - Should the graph generate an id?
 * @param  {boolean} undirected      - Whether the edge is undirected.
 * @param  {any}     edge            - The edge's key.
 * @param  {any}     source          - The source node.
 * @param  {any}     target          - The target node.
 * @param  {object}  [attributes]    - Optional attributes.
 * @return {any}                     - The edge.
 *
 * @throws {Error} - Will throw if the graph is of the wrong type.
 * @throws {Error} - Will throw if the given attributes are not an object.
 * @throws {Error} - Will throw if source or target doesn't exist.
 * @throws {Error} - Will throw if the edge already exist.
 */

function addEdge(graph, name, mustGenerateKey, undirected, edge, source, target, attributes) {
  // Checking validity of operation
  if (!undirected && graph.type === 'undirected') throw new errors["c" /* UsageGraphError */]("Graph.".concat(name, ": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));
  if (undirected && graph.type === 'directed') throw new errors["c" /* UsageGraphError */]("Graph.".concat(name, ": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));
  if (attributes && !Object(utils["e" /* isPlainObject */])(attributes)) throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.".concat(name, ": invalid attributes. Expecting an object but got \"").concat(attributes, "\"")); // Coercion of source & target:

  source = '' + source;
  target = '' + target;
  attributes = attributes || {};
  if (!graph.allowSelfLoops && source === target) throw new errors["c" /* UsageGraphError */]("Graph.".concat(name, ": source & target are the same (\"").concat(source, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));

  var sourceData = graph._nodes.get(source),
      targetData = graph._nodes.get(target);

  if (!sourceData) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(name, ": source node \"").concat(source, "\" not found."));
  if (!targetData) throw new errors["b" /* NotFoundGraphError */]("Graph.".concat(name, ": target node \"").concat(target, "\" not found.")); // Must the graph generate an id for this edge?

  var eventData = {
    key: null,
    undirected: undirected,
    source: source,
    target: target,
    attributes: attributes
  };
  if (mustGenerateKey) edge = graph._edgeKeyGenerator(eventData); // Coercion of edge key

  edge = '' + edge; // Here, we have a key collision

  if (graph._edges.has(edge)) throw new errors["c" /* UsageGraphError */]("Graph.".concat(name, ": the \"").concat(edge, "\" edge already exists in the graph.")); // Here, we might have a source / target collision

  if (!graph.multi && (undirected ? typeof sourceData.undirected[target] !== 'undefined' : typeof sourceData.out[target] !== 'undefined')) {
    throw new errors["c" /* UsageGraphError */]("Graph.".concat(name, ": an edge linking \"").concat(source, "\" to \"").concat(target, "\" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option."));
  } // Storing some data


  var DataClass = undirected ? UndirectedEdgeData : DirectedEdgeData;
  var edgeData = new DataClass(edge, mustGenerateKey, sourceData, targetData, attributes); // Adding the edge to the internal register

  graph._edges.set(edge, edgeData); // Incrementing node degree counters


  if (source === target) {
    if (undirected) sourceData.undirectedSelfLoops++;else sourceData.directedSelfLoops++;
  } else {
    if (undirected) {
      sourceData.undirectedDegree++;
      targetData.undirectedDegree++;
    } else {
      sourceData.outDegree++;
      targetData.inDegree++;
    }
  } // Updating relevant index


  updateStructureIndex(graph, undirected, edgeData, source, target, sourceData, targetData);
  if (undirected) graph._undirectedSize++;else graph._directedSize++; // Emitting

  eventData.key = edge;
  graph.emit('edgeAdded', eventData);
  return edge;
}
/**
 * Internal method used to add an arbitrary edge to the given graph.
 *
 * @param  {Graph}   graph           - Target graph.
 * @param  {string}  name            - Name of the child method for errors.
 * @param  {boolean} mustGenerateKey - Should the graph generate an id?
 * @param  {boolean} undirected      - Whether the edge is undirected.
 * @param  {any}     edge            - The edge's key.
 * @param  {any}     source          - The source node.
 * @param  {any}     target          - The target node.
 * @param  {object}  [attributes]    - Optional attributes.
 * @return {any}                     - The edge.
 *
 * @throws {Error} - Will throw if the graph is of the wrong type.
 * @throws {Error} - Will throw if the given attributes are not an object.
 * @throws {Error} - Will throw if source or target doesn't exist.
 * @throws {Error} - Will throw if the edge already exist.
 */


function mergeEdge(graph, name, mustGenerateKey, undirected, edge, source, target, attributes) {
  // Checking validity of operation
  if (!undirected && graph.type === 'undirected') throw new errors["c" /* UsageGraphError */]("Graph.".concat(name, ": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));
  if (undirected && graph.type === 'directed') throw new errors["c" /* UsageGraphError */]("Graph.".concat(name, ": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));
  if (attributes && !Object(utils["e" /* isPlainObject */])(attributes)) throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.".concat(name, ": invalid attributes. Expecting an object but got \"").concat(attributes, "\"")); // Coercion of source & target:

  source = '' + source;
  target = '' + target;
  attributes = attributes || {};
  if (!graph.allowSelfLoops && source === target) throw new errors["c" /* UsageGraphError */]("Graph.".concat(name, ": source & target are the same (\"").concat(source, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));

  var sourceData = graph._nodes.get(source),
      targetData = graph._nodes.get(target),
      edgeData; // Do we need to handle duplicate?


  var alreadyExistingEdge = null;

  if (!mustGenerateKey) {
    edgeData = graph._edges.get(edge);

    if (edgeData) {
      // Here, we need to ensure, if the user gave a key, that source & target
      // are coherent
      if (edgeData.source !== source || edgeData.target !== target || undirected && (edgeData.source !== target || edgeData.target !== source)) {
        throw new errors["c" /* UsageGraphError */]("Graph.".concat(name, ": inconsistency detected when attempting to merge the \"").concat(edge, "\" edge with \"").concat(source, "\" source & \"").concat(target, "\" target vs. (").concat(edgeData.source, ", ").concat(edgeData.target, ")."));
      }

      alreadyExistingEdge = edge;
    }
  }

  var alreadyExistingEdgeData; // Here, we might have a source / target collision

  if (!alreadyExistingEdge && !graph.multi && sourceData && (undirected ? typeof sourceData.undirected[target] !== 'undefined' : typeof sourceData.out[target] !== 'undefined')) {
    alreadyExistingEdgeData = Object(utils["b" /* getMatchingEdge */])(graph, source, target, undirected ? 'undirected' : 'directed');
  } // Handling duplicates


  if (alreadyExistingEdgeData) {
    // We can skip the attribute merging part if the user did not provide them
    if (!attributes) return alreadyExistingEdge; // Merging the attributes

    Object(utils["a" /* assign */])(alreadyExistingEdgeData.attributes, attributes);
    return alreadyExistingEdge;
  } // Must the graph generate an id for this edge?


  var eventData = {
    key: null,
    undirected: undirected,
    source: source,
    target: target,
    attributes: attributes
  };
  if (mustGenerateKey) edge = graph._edgeKeyGenerator(eventData); // Coercion of edge key

  edge = '' + edge; // Here, we have a key collision

  if (graph._edges.has(edge)) throw new errors["c" /* UsageGraphError */]("Graph.".concat(name, ": the \"").concat(edge, "\" edge already exists in the graph."));

  if (!sourceData) {
    graph.addNode(source);
    sourceData = graph._nodes.get(source);
    if (source === target) targetData = sourceData;
  }

  if (!targetData) {
    graph.addNode(target);
    targetData = graph._nodes.get(target);
  } // Storing some data


  var DataClass = undirected ? UndirectedEdgeData : DirectedEdgeData;
  edgeData = new DataClass(edge, mustGenerateKey, sourceData, targetData, attributes); // Adding the edge to the internal register

  graph._edges.set(edge, edgeData); // Incrementing node degree counters


  if (source === target) {
    if (undirected) sourceData.undirectedSelfLoops++;else sourceData.directedSelfLoops++;
  } else {
    if (undirected) {
      sourceData.undirectedDegree++;
      targetData.undirectedDegree++;
    } else {
      sourceData.outDegree++;
      targetData.inDegree++;
    }
  } // Updating relevant index


  updateStructureIndex(graph, undirected, edgeData, source, target, sourceData, targetData);
  if (undirected) graph._undirectedSize++;else graph._directedSize++; // Emitting

  eventData.key = edge;
  graph.emit('edgeAdded', eventData);
  return edge;
}
/**
 * Graph class
 *
 * @constructor
 * @param  {object}  [options] - Options:
 * @param  {boolean}   [allowSelfLoops] - Allow self loops?
 * @param  {string}    [type]           - Type of the graph.
 * @param  {boolean}   [map]            - Allow references as keys?
 * @param  {boolean}   [multi]          - Allow parallel edges?
 *
 * @throws {Error} - Will throw if the arguments are not valid.
 */


var graph_Graph = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(Graph, _EventEmitter);

  function Graph(options) {
    var _this;

    _this = _EventEmitter.call(this) || this; //-- Solving options

    options = Object(utils["a" /* assign */])({}, DEFAULTS, options); // Enforcing options validity

    if (options.edgeKeyGenerator && typeof options.edgeKeyGenerator !== 'function') throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.constructor: invalid 'edgeKeyGenerator' option. Expecting a function but got \"".concat(options.edgeKeyGenerator, "\"."));
    if (typeof options.multi !== 'boolean') throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.constructor: invalid 'multi' option. Expecting a boolean but got \"".concat(options.multi, "\"."));
    if (!TYPES.has(options.type)) throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.constructor: invalid 'type' option. Should be one of \"mixed\", \"directed\" or \"undirected\" but got \"".concat(options.type, "\"."));
    if (typeof options.allowSelfLoops !== 'boolean') throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got \"".concat(options.allowSelfLoops, "\".")); //-- Private properties
    // Utilities

    var NodeDataClass = options.type === 'mixed' ? MixedNodeData : options.type === 'directed' ? DirectedNodeData : UndirectedNodeData;
    Object(utils["g" /* privateProperty */])(_assertThisInitialized(_this), 'NodeDataClass', NodeDataClass); // Indexes

    Object(utils["g" /* privateProperty */])(_assertThisInitialized(_this), '_attributes', {});
    Object(utils["g" /* privateProperty */])(_assertThisInitialized(_this), '_nodes', new Map());
    Object(utils["g" /* privateProperty */])(_assertThisInitialized(_this), '_edges', new Map());
    Object(utils["g" /* privateProperty */])(_assertThisInitialized(_this), '_directedSize', 0);
    Object(utils["g" /* privateProperty */])(_assertThisInitialized(_this), '_undirectedSize', 0);
    Object(utils["g" /* privateProperty */])(_assertThisInitialized(_this), '_edgeKeyGenerator', options.edgeKeyGenerator || Object(utils["c" /* incrementalId */])()); // Options

    Object(utils["g" /* privateProperty */])(_assertThisInitialized(_this), '_options', options); // Emitter properties

    EMITTER_PROPS.forEach(function (prop) {
      return Object(utils["g" /* privateProperty */])(_assertThisInitialized(_this), prop, _this[prop]);
    }); //-- Properties readers

    Object(utils["h" /* readOnlyProperty */])(_assertThisInitialized(_this), 'order', function () {
      return _this._nodes.size;
    });
    Object(utils["h" /* readOnlyProperty */])(_assertThisInitialized(_this), 'size', function () {
      return _this._edges.size;
    });
    Object(utils["h" /* readOnlyProperty */])(_assertThisInitialized(_this), 'directedSize', function () {
      return _this._directedSize;
    });
    Object(utils["h" /* readOnlyProperty */])(_assertThisInitialized(_this), 'undirectedSize', function () {
      return _this._undirectedSize;
    });
    Object(utils["h" /* readOnlyProperty */])(_assertThisInitialized(_this), 'multi', _this._options.multi);
    Object(utils["h" /* readOnlyProperty */])(_assertThisInitialized(_this), 'type', _this._options.type);
    Object(utils["h" /* readOnlyProperty */])(_assertThisInitialized(_this), 'allowSelfLoops', _this._options.allowSelfLoops);
    return _this;
  }
  /**---------------------------------------------------------------------------
   * Read
   **---------------------------------------------------------------------------
   */

  /**
   * Method returning whether the given node is found in the graph.
   *
   * @param  {any}     node - The node.
   * @return {boolean}
   */


  var _proto = Graph.prototype;

  _proto.hasNode = function hasNode(node) {
    return this._nodes.has('' + node);
  }
  /**
   * Method returning whether the given directed edge is found in the graph.
   *
   * Arity 1:
   * @param  {any}     edge - The edge's key.
   *
   * Arity 2:
   * @param  {any}     source - The edge's source.
   * @param  {any}     target - The edge's target.
   *
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the arguments are invalid.
   */
  ;

  _proto.hasDirectedEdge = function hasDirectedEdge(source, target) {
    // Early termination
    if (this.type === 'undirected') return false;

    if (arguments.length === 1) {
      var edge = '' + source;

      var edgeData = this._edges.get(edge);

      return !!edgeData && edgeData instanceof DirectedEdgeData;
    } else if (arguments.length === 2) {
      source = '' + source;
      target = '' + target; // If the node source or the target is not in the graph we break

      var nodeData = this._nodes.get(source);

      if (!nodeData) return false; // Is there a directed edge pointing toward target?

      var edges = nodeData.out[target];
      if (!edges) return false;
      return this.multi ? !!edges.size : true;
    }

    throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
  }
  /**
   * Method returning whether the given undirected edge is found in the graph.
   *
   * Arity 1:
   * @param  {any}     edge - The edge's key.
   *
   * Arity 2:
   * @param  {any}     source - The edge's source.
   * @param  {any}     target - The edge's target.
   *
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the arguments are invalid.
   */
  ;

  _proto.hasUndirectedEdge = function hasUndirectedEdge(source, target) {
    // Early termination
    if (this.type === 'directed') return false;

    if (arguments.length === 1) {
      var edge = '' + source;

      var edgeData = this._edges.get(edge);

      return !!edgeData && edgeData instanceof UndirectedEdgeData;
    } else if (arguments.length === 2) {
      source = '' + source;
      target = '' + target; // If the node source or the target is not in the graph we break

      var nodeData = this._nodes.get(source);

      if (!nodeData) return false; // Is there a directed edge pointing toward target?

      var edges = nodeData.undirected[target];
      if (!edges) return false;
      return this.multi ? !!edges.size : true;
    }

    throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
  }
  /**
   * Method returning whether the given edge is found in the graph.
   *
   * Arity 1:
   * @param  {any}     edge - The edge's key.
   *
   * Arity 2:
   * @param  {any}     source - The edge's source.
   * @param  {any}     target - The edge's target.
   *
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the arguments are invalid.
   */
  ;

  _proto.hasEdge = function hasEdge(source, target) {
    if (arguments.length === 1) {
      var edge = '' + source;
      return this._edges.has(edge);
    } else if (arguments.length === 2) {
      source = '' + source;
      target = '' + target; // If the node source or the target is not in the graph we break

      var nodeData = this._nodes.get(source);

      if (!nodeData) return false; // Is there a directed edge pointing toward target?

      var edges = typeof nodeData.out !== 'undefined' && nodeData.out[target];
      if (!edges) edges = typeof nodeData.undirected !== 'undefined' && nodeData.undirected[target];
      if (!edges) return false;
      return this.multi ? !!edges.size : true;
    }

    throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.hasEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
  }
  /**
   * Method returning the edge matching source & target in a directed fashion.
   *
   * @param  {any} source - The edge's source.
   * @param  {any} target - The edge's target.
   *
   * @return {any|undefined}
   *
   * @throws {Error} - Will throw if the graph is multi.
   * @throws {Error} - Will throw if source or target doesn't exist.
   */
  ;

  _proto.directedEdge = function directedEdge(source, target) {
    if (this.type === 'undirected') return;
    source = '' + source;
    target = '' + target;
    if (this.multi) throw new errors["c" /* UsageGraphError */]('Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.');

    var sourceData = this._nodes.get(source);

    if (!sourceData) throw new errors["b" /* NotFoundGraphError */]("Graph.directedEdge: could not find the \"".concat(source, "\" source node in the graph."));
    if (!this._nodes.has(target)) throw new errors["b" /* NotFoundGraphError */]("Graph.directedEdge: could not find the \"".concat(target, "\" target node in the graph."));
    var edgeData = sourceData.out && sourceData.out[target] || undefined;
    if (edgeData) return edgeData.key;
  }
  /**
   * Method returning the edge matching source & target in a undirected fashion.
   *
   * @param  {any} source - The edge's source.
   * @param  {any} target - The edge's target.
   *
   * @return {any|undefined}
   *
   * @throws {Error} - Will throw if the graph is multi.
   * @throws {Error} - Will throw if source or target doesn't exist.
   */
  ;

  _proto.undirectedEdge = function undirectedEdge(source, target) {
    if (this.type === 'directed') return;
    source = '' + source;
    target = '' + target;
    if (this.multi) throw new errors["c" /* UsageGraphError */]('Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.');

    var sourceData = this._nodes.get(source);

    if (!sourceData) throw new errors["b" /* NotFoundGraphError */]("Graph.undirectedEdge: could not find the \"".concat(source, "\" source node in the graph."));
    if (!this._nodes.has(target)) throw new errors["b" /* NotFoundGraphError */]("Graph.undirectedEdge: could not find the \"".concat(target, "\" target node in the graph."));
    var edgeData = sourceData.undirected && sourceData.undirected[target] || undefined;
    if (edgeData) return edgeData.key;
  }
  /**
   * Method returning the edge matching source & target in a mixed fashion.
   *
   * @param  {any} source - The edge's source.
   * @param  {any} target - The edge's target.
   *
   * @return {any|undefined}
   *
   * @throws {Error} - Will throw if the graph is multi.
   * @throws {Error} - Will throw if source or target doesn't exist.
   */
  ;

  _proto.edge = function edge(source, target) {
    if (this.multi) throw new errors["c" /* UsageGraphError */]('Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.');
    source = '' + source;
    target = '' + target;

    var sourceData = this._nodes.get(source);

    if (!sourceData) throw new errors["b" /* NotFoundGraphError */]("Graph.edge: could not find the \"".concat(source, "\" source node in the graph."));
    if (!this._nodes.has(target)) throw new errors["b" /* NotFoundGraphError */]("Graph.edge: could not find the \"".concat(target, "\" target node in the graph."));
    var edgeData = sourceData.out && sourceData.out[target] || sourceData.undirected && sourceData.undirected[target] || undefined;
    if (edgeData) return edgeData.key;
  }
  /**
   * Method returning the given node's in degree.
   *
   * @param  {any}     node      - The node's key.
   * @param  {boolean} allowSelfLoops - Count self-loops?
   * @return {number}            - The node's in degree.
   *
   * @throws {Error} - Will throw if the selfLoops arg is not boolean.
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  ;

  _proto.inDegree = function inDegree(node) {
    var selfLoops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof selfLoops !== 'boolean') throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.inDegree: Expecting a boolean but got \"".concat(selfLoops, "\" for the second parameter (allowing self-loops to be counted)."));
    node = '' + node;

    var nodeData = this._nodes.get(node);

    if (!nodeData) throw new errors["b" /* NotFoundGraphError */]("Graph.inDegree: could not find the \"".concat(node, "\" node in the graph."));
    if (this.type === 'undirected') return 0;
    var loops = selfLoops ? nodeData.directedSelfLoops : 0;
    return nodeData.inDegree + loops;
  }
  /**
   * Method returning the given node's out degree.
   *
   * @param  {any}     node      - The node's key.
   * @param  {boolean} selfLoops - Count self-loops?
   * @return {number}            - The node's out degree.
   *
   * @throws {Error} - Will throw if the selfLoops arg is not boolean.
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  ;

  _proto.outDegree = function outDegree(node) {
    var selfLoops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof selfLoops !== 'boolean') throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.outDegree: Expecting a boolean but got \"".concat(selfLoops, "\" for the second parameter (allowing self-loops to be counted)."));
    node = '' + node;

    var nodeData = this._nodes.get(node);

    if (!nodeData) throw new errors["b" /* NotFoundGraphError */]("Graph.outDegree: could not find the \"".concat(node, "\" node in the graph."));
    if (this.type === 'undirected') return 0;
    var loops = selfLoops ? nodeData.directedSelfLoops : 0;
    return nodeData.outDegree + loops;
  }
  /**
   * Method returning the given node's directed degree.
   *
   * @param  {any}     node      - The node's key.
   * @param  {boolean} selfLoops - Count self-loops?
   * @return {number}            - The node's directed degree.
   *
   * @throws {Error} - Will throw if the selfLoops arg is not boolean.
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  ;

  _proto.directedDegree = function directedDegree(node) {
    var selfLoops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof selfLoops !== 'boolean') throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.directedDegree: Expecting a boolean but got \"".concat(selfLoops, "\" for the second parameter (allowing self-loops to be counted)."));
    node = '' + node;
    if (!this.hasNode(node)) throw new errors["b" /* NotFoundGraphError */]("Graph.directedDegree: could not find the \"".concat(node, "\" node in the graph."));
    if (this.type === 'undirected') return 0;
    return this.inDegree(node, selfLoops) + this.outDegree(node, selfLoops);
  }
  /**
   * Method returning the given node's undirected degree.
   *
   * @param  {any}     node      - The node's key.
   * @param  {boolean} selfLoops - Count self-loops?
   * @return {number}            - The node's undirected degree.
   *
   * @throws {Error} - Will throw if the selfLoops arg is not boolean.
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  ;

  _proto.undirectedDegree = function undirectedDegree(node) {
    var selfLoops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof selfLoops !== 'boolean') throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.undirectedDegree: Expecting a boolean but got \"".concat(selfLoops, "\" for the second parameter (allowing self-loops to be counted)."));
    node = '' + node;
    if (!this.hasNode(node)) throw new errors["b" /* NotFoundGraphError */]("Graph.undirectedDegree: could not find the \"".concat(node, "\" node in the graph."));
    if (this.type === 'directed') return 0;

    var data = this._nodes.get(node),
        loops = selfLoops ? data.undirectedSelfLoops * 2 : 0;

    return data.undirectedDegree + loops;
  }
  /**
   * Method returning the given node's degree.
   *
   * @param  {any}     node      - The node's key.
   * @param  {boolean} selfLoops - Count self-loops?
   * @return {number}            - The node's degree.
   *
   * @throws {Error} - Will throw if the selfLoops arg is not boolean.
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  ;

  _proto.degree = function degree(node) {
    var selfLoops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof selfLoops !== 'boolean') throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.degree: Expecting a boolean but got \"".concat(selfLoops, "\" for the second parameter (allowing self-loops to be counted)."));
    node = '' + node;
    if (!this.hasNode(node)) throw new errors["b" /* NotFoundGraphError */]("Graph.degree: could not find the \"".concat(node, "\" node in the graph."));
    var degree = 0;
    if (this.type !== 'undirected') degree += this.directedDegree(node, selfLoops);
    if (this.type !== 'directed') degree += this.undirectedDegree(node, selfLoops);
    return degree;
  }
  /**
   * Method returning the given edge's source.
   *
   * @param  {any} edge - The edge's key.
   * @return {any}      - The edge's source.
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */
  ;

  _proto.source = function source(edge) {
    edge = '' + edge;

    var data = this._edges.get(edge);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.source: could not find the \"".concat(edge, "\" edge in the graph."));
    return data.source.key;
  }
  /**
   * Method returning the given edge's target.
   *
   * @param  {any} edge - The edge's key.
   * @return {any}      - The edge's target.
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */
  ;

  _proto.target = function target(edge) {
    edge = '' + edge;

    var data = this._edges.get(edge);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.target: could not find the \"".concat(edge, "\" edge in the graph."));
    return data.target.key;
  }
  /**
   * Method returning the given edge's extremities.
   *
   * @param  {any}   edge - The edge's key.
   * @return {array}      - The edge's extremities.
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */
  ;

  _proto.extremities = function extremities(edge) {
    edge = '' + edge;

    var edgeData = this._edges.get(edge);

    if (!edgeData) throw new errors["b" /* NotFoundGraphError */]("Graph.extremities: could not find the \"".concat(edge, "\" edge in the graph."));
    return [edgeData.source.key, edgeData.target.key];
  }
  /**
   * Given a node & an edge, returns the other extremity of the edge.
   *
   * @param  {any}   node - The node's key.
   * @param  {any}   edge - The edge's key.
   * @return {any}        - The related node.
   *
   * @throws {Error} - Will throw if either the node or the edge isn't in the graph.
   */
  ;

  _proto.opposite = function opposite(node, edge) {
    node = '' + node;
    edge = '' + edge;
    if (!this._nodes.has(node)) throw new errors["b" /* NotFoundGraphError */]("Graph.opposite: could not find the \"".concat(node, "\" node in the graph."));

    var data = this._edges.get(edge);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.opposite: could not find the \"".concat(edge, "\" edge in the graph."));
    var sourceData = data.source,
        targetData = data.target;
    var source = sourceData.key,
        target = targetData.key;
    if (node !== source && node !== target) throw new errors["b" /* NotFoundGraphError */]("Graph.opposite: the \"".concat(node, "\" node is not attached to the \"").concat(edge, "\" edge (").concat(source, ", ").concat(target, ")."));
    return node === source ? target : source;
  }
  /**
   * Method returning whether the given edge is undirected.
   *
   * @param  {any}     edge - The edge's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */
  ;

  _proto.undirected = function undirected(edge) {
    edge = '' + edge;

    var data = this._edges.get(edge);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.undirected: could not find the \"".concat(edge, "\" edge in the graph."));
    return data instanceof UndirectedEdgeData;
  }
  /**
   * Method returning whether the given edge is directed.
   *
   * @param  {any}     edge - The edge's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */
  ;

  _proto.directed = function directed(edge) {
    edge = '' + edge;

    var data = this._edges.get(edge);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.directed: could not find the \"".concat(edge, "\" edge in the graph."));
    return data instanceof DirectedEdgeData;
  }
  /**
   * Method returning whether the given edge is a self loop.
   *
   * @param  {any}     edge - The edge's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */
  ;

  _proto.selfLoop = function selfLoop(edge) {
    edge = '' + edge;

    var data = this._edges.get(edge);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.selfLoop: could not find the \"".concat(edge, "\" edge in the graph."));
    return data.source === data.target;
  }
  /**---------------------------------------------------------------------------
   * Mutation
   **---------------------------------------------------------------------------
   */

  /**
   * Method used to add a node to the graph.
   *
   * @param  {any}    node         - The node.
   * @param  {object} [attributes] - Optional attributes.
   * @return {any}                 - The node.
   *
   * @throws {Error} - Will throw if the given node already exist.
   * @throws {Error} - Will throw if the given attributes are not an object.
   */
  ;

  _proto.addNode = function addNode(node, attributes) {
    if (attributes && !Object(utils["e" /* isPlainObject */])(attributes)) throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.addNode: invalid attributes. Expecting an object but got \"".concat(attributes, "\"")); // String coercion

    node = '' + node;
    attributes = attributes || {};
    if (this._nodes.has(node)) throw new errors["c" /* UsageGraphError */]("Graph.addNode: the \"".concat(node, "\" node already exist in the graph."));
    var data = new this.NodeDataClass(node, attributes); // Adding the node to internal register

    this._nodes.set(node, data); // Emitting


    this.emit('nodeAdded', {
      key: node,
      attributes: attributes
    });
    return node;
  }
  /**
   * Method used to merge a node into the graph.
   *
   * @param  {any}    node         - The node.
   * @param  {object} [attributes] - Optional attributes.
   * @return {any}                 - The node.
   */
  ;

  _proto.mergeNode = function mergeNode(node, attributes) {
    if (attributes && !Object(utils["e" /* isPlainObject */])(attributes)) throw new errors["a" /* InvalidArgumentsGraphError */]("Graph.mergeNode: invalid attributes. Expecting an object but got \"".concat(attributes, "\"")); // String coercion

    node = '' + node;
    attributes = attributes || {}; // If the node already exists, we merge the attributes

    var data = this._nodes.get(node);

    if (data) {
      if (attributes) Object(utils["a" /* assign */])(data.attributes, attributes);
      return node;
    }

    data = new this.NodeDataClass(node, attributes); // Adding the node to internal register

    this._nodes.set(node, data); // Emitting


    this.emit('nodeAdded', {
      key: node,
      attributes: attributes
    });
    return node;
  }
  /**
   * Method used to drop a single node & all its attached edges from the graph.
   *
   * @param  {any}    node - The node.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the node doesn't exist.
   */
  ;

  _proto.dropNode = function dropNode(node) {
    node = '' + node;
    if (!this.hasNode(node)) throw new errors["b" /* NotFoundGraphError */]("Graph.dropNode: could not find the \"".concat(node, "\" node in the graph.")); // Removing attached edges

    var edges = this.edges(node); // NOTE: we could go faster here

    for (var i = 0, l = edges.length; i < l; i++) {
      this.dropEdge(edges[i]);
    }

    var data = this._nodes.get(node); // Dropping the node from the register


    this._nodes["delete"](node); // Emitting


    this.emit('nodeDropped', {
      key: node,
      attributes: data.attributes
    });
  }
  /**
   * Method used to drop a single edge from the graph.
   *
   * Arity 1:
   * @param  {any}    edge - The edge.
   *
   * Arity 2:
   * @param  {any}    source - Source node.
   * @param  {any}    target - Target node.
   *
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the edge doesn't exist.
   */
  ;

  _proto.dropEdge = function dropEdge(edge) {
    var edgeData;

    if (arguments.length > 1) {
      var source = '' + arguments[0],
          target = '' + arguments[1];
      edgeData = Object(utils["b" /* getMatchingEdge */])(this, source, target, this.type);
      if (!edgeData) throw new errors["b" /* NotFoundGraphError */]("Graph.dropEdge: could not find the \"".concat(source, "\" -> \"").concat(target, "\" edge in the graph."));
    } else {
      edge = '' + edge;
      edgeData = this._edges.get(edge);
      if (!edgeData) throw new errors["b" /* NotFoundGraphError */]("Graph.dropEdge: could not find the \"".concat(edge, "\" edge in the graph."));
    } // Dropping the edge from the register


    this._edges["delete"](edgeData.key); // Updating related degrees


    var _edgeData = edgeData,
        sourceData = _edgeData.source,
        targetData = _edgeData.target,
        attributes = _edgeData.attributes;
    var undirected = edgeData instanceof UndirectedEdgeData;

    if (sourceData === targetData) {
      sourceData.selfLoops--;
    } else {
      if (undirected) {
        sourceData.undirectedDegree--;
        targetData.undirectedDegree--;
      } else {
        sourceData.outDegree--;
        targetData.inDegree--;
      }
    } // Clearing index


    clearEdgeFromStructureIndex(this, undirected, edgeData);
    if (undirected) this._undirectedSize--;else this._directedSize--; // Emitting

    this.emit('edgeDropped', {
      key: edge,
      attributes: attributes,
      source: sourceData.key,
      target: targetData.key,
      undirected: undirected
    });
    return this;
  }
  /**
   * Method used to remove every edge & every node from the graph.
   *
   * @return {Graph}
   */
  ;

  _proto.clear = function clear() {
    // Clearing edges
    this._edges.clear(); // Clearing nodes


    this._nodes.clear(); // Emitting


    this.emit('cleared');
  }
  /**
   * Method used to remove every edge from the graph.
   *
   * @return {Graph}
   */
  ;

  _proto.clearEdges = function clearEdges() {
    // Clearing edges
    this._edges.clear(); // Clearing indices


    this.clearIndex(); // Emitting

    this.emit('edgesCleared');
  }
  /**---------------------------------------------------------------------------
   * Attributes-related methods
   **---------------------------------------------------------------------------
   */

  /**
   * Method returning the desired graph's attribute.
   *
   * @param  {string} name - Name of the attribute.
   * @return {any}
   */
  ;

  _proto.getAttribute = function getAttribute(name) {
    return this._attributes[name];
  }
  /**
   * Method returning the graph's attributes.
   *
   * @return {object}
   */
  ;

  _proto.getAttributes = function getAttributes() {
    return this._attributes;
  }
  /**
   * Method returning whether the graph has the desired attribute.
   *
   * @param  {string}  name - Name of the attribute.
   * @return {boolean}
   */
  ;

  _proto.hasAttribute = function hasAttribute(name) {
    return this._attributes.hasOwnProperty(name);
  }
  /**
   * Method setting a value for the desired graph's attribute.
   *
   * @param  {string}  name  - Name of the attribute.
   * @param  {any}     value - Value for the attribute.
   * @return {Graph}
   */
  ;

  _proto.setAttribute = function setAttribute(name, value) {
    this._attributes[name] = value; // Emitting

    this.emit('attributesUpdated', {
      type: 'set',
      meta: {
        name: name,
        value: value
      }
    });
    return this;
  }
  /**
   * Method using a function to update the desired graph's attribute's value.
   *
   * @param  {string}   name    - Name of the attribute.
   * @param  {function} updater - Function use to update the attribute's value.
   * @return {Graph}
   */
  ;

  _proto.updateAttribute = function updateAttribute(name, updater) {
    if (typeof updater !== 'function') throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.updateAttribute: updater should be a function.');
    this._attributes[name] = updater(this._attributes[name]); // Emitting

    this.emit('attributesUpdated', {
      type: 'set',
      meta: {
        name: name,
        value: this._attributes[name]
      }
    });
    return this;
  }
  /**
   * Method removing the desired graph's attribute.
   *
   * @param  {string} name  - Name of the attribute.
   * @return {Graph}
   */
  ;

  _proto.removeAttribute = function removeAttribute(name) {
    delete this._attributes[name]; // Emitting

    this.emit('attributesUpdated', {
      type: 'remove',
      meta: {
        name: name
      }
    });
    return this;
  }
  /**
   * Method replacing the graph's attributes.
   *
   * @param  {object} attributes - New attributes.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if given attributes are not a plain object.
   */
  ;

  _proto.replaceAttributes = function replaceAttributes(attributes) {
    if (!Object(utils["e" /* isPlainObject */])(attributes)) throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.replaceAttributes: provided attributes are not a plain object.');
    var before = this._attributes;
    this._attributes = attributes; // Emitting

    this.emit('attributesUpdated', {
      type: 'replace',
      meta: {
        before: before,
        after: attributes
      }
    });
    return this;
  }
  /**
   * Method merging the graph's attributes.
   *
   * @param  {object} attributes - Attributes to merge.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if given attributes are not a plain object.
   */
  ;

  _proto.mergeAttributes = function mergeAttributes(attributes) {
    if (!Object(utils["e" /* isPlainObject */])(attributes)) throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.mergeAttributes: provided attributes are not a plain object.');
    this._attributes = Object(utils["a" /* assign */])(this._attributes, attributes); // Emitting

    this.emit('attributesUpdated', {
      type: 'merge',
      meta: {
        data: this._attributes
      }
    });
    return this;
  }
  /**
   * Method returning the desired attribute for the given node.
   *
   * @param  {any}    node - Target node.
   * @param  {string} name - Name of the attribute to get.
   * @return {any}
   *
   * @throws {Error} - Will throw if the node is not found.
   */
  ;

  _proto.getNodeAttribute = function getNodeAttribute(node, name) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.getNodeAttribute: could not find the \"".concat(node, "\" node in the graph."));
    return data.attributes[name];
  }
  /**
   * Method returning the attributes for the given node.
   *
   * @param  {any}    node - Target node.
   * @return {object}
   *
   * @throws {Error} - Will throw if the node is not found.
   */
  ;

  _proto.getNodeAttributes = function getNodeAttributes(node) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.getNodeAttributes: could not find the \"".concat(node, "\" node in the graph."));
    return data.attributes;
  }
  /**
   * Method checking whether the given attribute exists for the given node.
   *
   * @param  {any}    node - Target node.
   * @param  {string} name - Name of the attribute to check.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the node is not found.
   */
  ;

  _proto.hasNodeAttribute = function hasNodeAttribute(node, name) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.hasNodeAttribute: could not find the \"".concat(node, "\" node in the graph."));
    return data.attributes.hasOwnProperty(name);
  }
  /**
   * Method checking setting the desired attribute for the given node.
   *
   * @param  {any}    node  - Target node.
   * @param  {string} name  - Name of the attribute to set.
   * @param  {any}    value - Value for the attribute.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if less than 3 arguments are passed.
   * @throws {Error} - Will throw if the node is not found.
   */
  ;

  _proto.setNodeAttribute = function setNodeAttribute(node, name, value) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.setNodeAttribute: could not find the \"".concat(node, "\" node in the graph."));
    if (arguments.length < 3) throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.setNodeAttribute: not enough arguments. Either you forgot to pass the attribute\'s name or value, or you meant to use #.replaceNodeAttributes / #.mergeNodeAttributes instead.');
    data.attributes[name] = value; // Emitting

    this.emit('nodeAttributesUpdated', {
      key: node,
      type: 'set',
      meta: {
        name: name,
        value: value
      }
    });
    return this;
  }
  /**
   * Method checking setting the desired attribute for the given node.
   *
   * @param  {any}      node    - Target node.
   * @param  {string}   name    - Name of the attribute to set.
   * @param  {function} updater - Function that will update the attribute.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if less than 3 arguments are passed.
   * @throws {Error} - Will throw if updater is not a function.
   * @throws {Error} - Will throw if the node is not found.
   */
  ;

  _proto.updateNodeAttribute = function updateNodeAttribute(node, name, updater) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.updateNodeAttribute: could not find the \"".concat(node, "\" node in the graph."));
    if (arguments.length < 3) throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.updateNodeAttribute: not enough arguments. Either you forgot to pass the attribute\'s name or updater, or you meant to use #.replaceNodeAttributes / #.mergeNodeAttributes instead.');
    if (typeof updater !== 'function') throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.updateAttribute: updater should be a function.');
    var attributes = data.attributes;
    attributes[name] = updater(attributes[name]); // Emitting

    this.emit('nodeAttributesUpdated', {
      key: node,
      type: 'set',
      meta: {
        name: name,
        value: attributes[name]
      }
    });
    return this;
  }
  /**
   * Method removing the desired attribute for the given node.
   *
   * @param  {any}    node  - Target node.
   * @param  {string} name  - Name of the attribute to remove.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the node is not found.
   */
  ;

  _proto.removeNodeAttribute = function removeNodeAttribute(node, name) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.hasNodeAttribute: could not find the \"".concat(node, "\" node in the graph."));
    delete data.attributes[name]; // Emitting

    this.emit('nodeAttributesUpdated', {
      key: node,
      type: 'remove',
      meta: {
        name: name
      }
    });
    return this;
  }
  /**
   * Method completely replacing the attributes of the given node.
   *
   * @param  {any}    node       - Target node.
   * @param  {object} attributes - New attributes.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the node is not found.
   * @throws {Error} - Will throw if the given attributes is not a plain object.
   */
  ;

  _proto.replaceNodeAttributes = function replaceNodeAttributes(node, attributes) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.replaceNodeAttributes: could not find the \"".concat(node, "\" node in the graph."));
    if (!Object(utils["e" /* isPlainObject */])(attributes)) throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.replaceNodeAttributes: provided attributes are not a plain object.');
    var oldAttributes = data.attributes;
    data.attributes = attributes; // Emitting

    this.emit('nodeAttributesUpdated', {
      key: node,
      type: 'replace',
      meta: {
        before: oldAttributes,
        after: attributes
      }
    });
    return this;
  }
  /**
   * Method merging the attributes of the given node with the provided ones.
   *
   * @param  {any}    node       - Target node.
   * @param  {object} attributes - Attributes to merge.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the node is not found.
   * @throws {Error} - Will throw if the given attributes is not a plain object.
   */
  ;

  _proto.mergeNodeAttributes = function mergeNodeAttributes(node, attributes) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.mergeNodeAttributes: could not find the \"".concat(node, "\" node in the graph."));
    if (!Object(utils["e" /* isPlainObject */])(attributes)) throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.mergeNodeAttributes: provided attributes are not a plain object.');
    Object(utils["a" /* assign */])(data.attributes, attributes); // Emitting

    this.emit('nodeAttributesUpdated', {
      key: node,
      type: 'merge',
      meta: {
        data: attributes
      }
    });
    return this;
  }
  /**---------------------------------------------------------------------------
   * Iteration-related methods
   **---------------------------------------------------------------------------
   */

  /**
   * Method iterating over the graph's adjacency using the given callback.
   *
   * @param  {function}  callback - Callback to use.
   */
  ;

  _proto.forEach = function forEach(callback) {
    if (typeof callback !== 'function') throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.forEach: expecting a callback.');

    this._edges.forEach(function (edgeData, key) {
      var sourceData = edgeData.source,
          targetData = edgeData.target;
      callback(sourceData.key, targetData.key, sourceData.attributes, targetData.attributes, key, edgeData.attributes);
    });
  }
  /**
   * Method returning an iterator over the graph's adjacency.
   *
   * @return {Iterator}
   */
  ;

  _proto.adjacency = function adjacency() {
    var iterator = this._edges.values();

    return new iterator_default.a(function () {
      var step = iterator.next();
      if (step.done) return step;
      var edgeData = step.value;
      var sourceData = edgeData.source,
          targetData = edgeData.target;
      return {
        done: false,
        value: [sourceData.key, targetData.key, sourceData.attributes, targetData.attributes, edgeData.key, edgeData.attributes]
      };
    });
  }
  /**
   * Method returning the list of the graph's nodes.
   *
   * @return {array} - The nodes.
   */
  ;

  _proto.nodes = function nodes() {
    return take_default()(this._nodes.keys(), this._nodes.size);
  }
  /**
   * Method iterating over the graph's nodes using the given callback.
   *
   * @param  {function}  callback - Callback (key, attributes, index).
   */
  ;

  _proto.forEachNode = function forEachNode(callback) {
    if (typeof callback !== 'function') throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.forEachNode: expecting a callback.');

    this._nodes.forEach(function (data, key) {
      callback(key, data.attributes);
    });
  }
  /**
   * Method returning an iterator over the graph's node entries.
   *
   * @return {Iterator}
   */
  ;

  _proto.nodeEntries = function nodeEntries() {
    var iterator = this._nodes.values();

    return new iterator_default.a(function () {
      var step = iterator.next();
      if (step.done) return step;
      var data = step.value;
      return {
        value: [data.key, data.attributes],
        done: false
      };
    });
  }
  /**---------------------------------------------------------------------------
   * Serialization
   **---------------------------------------------------------------------------
   */

  /**
   * Method exporting the target node.
   *
   * @param  {any}   node - Target node.
   * @return {array}      - The serialized node.
   *
   * @throws {Error} - Will throw if the node is not found.
   */
  ;

  _proto.exportNode = function exportNode(node) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.exportNode: could not find the \"".concat(node, "\" node in the graph."));
    return serializeNode(node, data);
  }
  /**
   * Method exporting the target edge.
   *
   * @param  {any}   edge - Target edge.
   * @return {array}      - The serialized edge.
   *
   * @throws {Error} - Will throw if the edge is not found.
   */
  ;

  _proto.exportEdge = function exportEdge(edge) {
    edge = '' + edge;

    var data = this._edges.get(edge);

    if (!data) throw new errors["b" /* NotFoundGraphError */]("Graph.exportEdge: could not find the \"".concat(edge, "\" edge in the graph."));
    return serializeEdge(edge, data);
  }
  /**
   * Method used to export the whole graph.
   *
   * @return {object} - The serialized graph.
   */
  ;

  _proto["export"] = function _export() {
    var nodes = new Array(this._nodes.size);
    var i = 0;

    this._nodes.forEach(function (data, key) {
      nodes[i++] = serializeNode(key, data);
    });

    var edges = new Array(this._edges.size);
    i = 0;

    this._edges.forEach(function (data, key) {
      edges[i++] = serializeEdge(key, data);
    });

    return {
      attributes: this.getAttributes(),
      nodes: nodes,
      edges: edges
    };
  }
  /**
   * Method used to import a serialized node.
   *
   * @param  {object} data   - The serialized node.
   * @param  {boolean} merge - Whether to merge the given node.
   * @return {Graph}         - Returns itself for chaining.
   */
  ;

  _proto.importNode = function importNode(data) {
    var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    // Validating
    var error = validateSerializedNode(data);

    if (error) {
      if (error === 'not-object') throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.importNode: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');
      if (error === 'no-key') throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.importNode: no key provided.');
      if (error === 'invalid-attributes') throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.importNode: invalid attributes. Attributes should be a plain object, null or omitted.');
    } // Adding the node


    var key = data.key,
        _data$attributes = data.attributes,
        attributes = _data$attributes === void 0 ? {} : _data$attributes;
    if (merge) this.mergeNode(key, attributes);else this.addNode(key, attributes);
    return this;
  }
  /**
   * Method used to import a serialized edge.
   *
   * @param  {object}  data  - The serialized edge.
   * @param  {boolean} merge - Whether to merge the given edge.
   * @return {Graph}         - Returns itself for chaining.
   */
  ;

  _proto.importEdge = function importEdge(data) {
    var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    // Validating
    var error = validateSerializedEdge(data);

    if (error) {
      if (error === 'not-object') throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.importEdge: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');
      if (error === 'no-source') throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.importEdge: missing souce.');
      if (error === 'no-target') throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.importEdge: missing target.');
      if (error === 'invalid-attributes') throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.importEdge: invalid attributes. Attributes should be a plain object, null or omitted.');
      if (error === 'invalid-undirected') throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.importEdge: invalid undirected. Undirected should be boolean or omitted.');
    } // Adding the edge


    var source = data.source,
        target = data.target,
        _data$attributes2 = data.attributes,
        attributes = _data$attributes2 === void 0 ? {} : _data$attributes2,
        _data$undirected = data.undirected,
        undirected = _data$undirected === void 0 ? false : _data$undirected;
    var method;

    if ('key' in data) {
      method = merge ? undirected ? this.mergeUndirectedEdgeWithKey : this.mergeDirectedEdgeWithKey : undirected ? this.addUndirectedEdgeWithKey : this.addDirectedEdgeWithKey;
      method.call(this, data.key, source, target, attributes);
    } else {
      method = merge ? undirected ? this.mergeUndirectedEdge : this.mergeDirectedEdge : undirected ? this.addUndirectedEdge : this.addDirectedEdge;
      method.call(this, source, target, attributes);
    }

    return this;
  }
  /**
   * Method used to import a serialized graph.
   *
   * @param  {object|Graph} data  - The serialized graph.
   * @param  {boolean}      merge - Whether to merge data.
   * @return {Graph}              - Returns itself for chaining.
   */
  ;

  _proto["import"] = function _import(data) {
    var _this2 = this;

    var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // Importing a Graph instance
    if (Object(utils["d" /* isGraph */])(data)) {
      this["import"](data["export"](), merge);
      return this;
    } // Importing a serialized graph


    if (!Object(utils["e" /* isPlainObject */])(data)) throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.');

    if (data.attributes) {
      if (!Object(utils["e" /* isPlainObject */])(data.attributes)) throw new errors["a" /* InvalidArgumentsGraphError */]('Graph.import: invalid attributes. Expecting a plain object.');
      if (merge) this.mergeAttributes(data.attributes);else this.replaceAttributes(data.attributes);
    } // TODO: optimize


    if (data.nodes) data.nodes.forEach(function (node) {
      return _this2.importNode(node, merge);
    });
    if (data.edges) data.edges.forEach(function (edge) {
      return _this2.importEdge(edge, merge);
    });
    return this;
  }
  /**---------------------------------------------------------------------------
   * Utils
   **---------------------------------------------------------------------------
   */

  /**
   * Method returning a null copy of the graph, i.e. a graph without nodes
   * & edges but with the exact same options.
   *
   * @param  {object} options - Options to merge with the current ones.
   * @return {Graph}          - The null copy.
   */
  ;

  _proto.nullCopy = function nullCopy(options) {
    return new Graph(Object(utils["a" /* assign */])({}, this._options, options));
  }
  /**
   * Method returning an empty copy of the graph, i.e. a graph without edges but
   * with the exact same options.
   *
   * @param  {object} options - Options to merge with the current ones.
   * @return {Graph}          - The empty copy.
   */
  ;

  _proto.emptyCopy = function emptyCopy(options) {
    var graph = new Graph(Object(utils["a" /* assign */])({}, this._options, options));

    this._nodes.forEach(function (nodeData, key) {
      nodeData = new graph.NodeDataClass(key, Object(utils["a" /* assign */])({}, nodeData.attributes));

      graph._nodes.set(key, nodeData);
    });

    return graph;
  }
  /**
   * Method returning an exact copy of the graph.
   *
   * @return {Graph} - The copy.
   */
  ;

  _proto.copy = function copy() {
    var graph = new Graph(this._options);
    graph["import"](this);
    return graph;
  }
  /**
   * Method upgrading the graph to a mixed one.
   *
   * @return {Graph} - The copy.
   */
  ;

  _proto.upgradeToMixed = function upgradeToMixed() {
    if (this.type === 'mixed') return this; // Upgrading node data:
    // NOTE: maybe this could lead to some de-optimization by usual
    // JavaScript engines but I cannot be sure of it. Another solution
    // would be to reinstantiate the classes but this surely has a performance
    // and memory impact.

    this._nodes.forEach(function (data) {
      return data.upgradeToMixed();
    }); // Mutating the options & the instance


    this._options.type = 'mixed';
    Object(utils["h" /* readOnlyProperty */])(this, 'type', this._options.type);
    Object(utils["g" /* privateProperty */])(this, 'NodeDataClass', MixedNodeData);
    return this;
  }
  /**
   * Method upgrading the graph to a multi one.
   *
   * @return {Graph} - The copy.
   */
  ;

  _proto.upgradeToMulti = function upgradeToMulti() {
    if (this.multi) return this; // Mutating the options & the instance

    this._options.multi = true;
    Object(utils["h" /* readOnlyProperty */])(this, 'multi', true); // Upgrading indices

    upgradeStructureIndexToMulti(this);
    return this;
  }
  /**---------------------------------------------------------------------------
   * Indexes-related methods
   **---------------------------------------------------------------------------
   */

  /**
   * Method used to clear the desired index to clear memory.
   *
   * @return {Graph}       - Returns itself for chaining.
   */
  ;

  _proto.clearIndex = function clearIndex() {
    clearStructureIndex(this);
    return this;
  }
  /**---------------------------------------------------------------------------
   * Known methods
   **---------------------------------------------------------------------------
   */

  /**
   * Method used by JavaScript to perform JSON serialization.
   *
   * @return {object} - The serialized graph.
   */
  ;

  _proto.toJSON = function toJSON() {
    return this["export"]();
  }
  /**
   * Method used to perform string coercion and returning useful information
   * about the Graph instance.
   *
   * @return {string} - String representation of the graph.
   */
  ;

  _proto.toString = function toString() {
    var pluralOrder = this.order > 1 || this.order === 0,
        pluralSize = this.size > 1 || this.size === 0;
    return "Graph<".concat(Object(utils["f" /* prettyPrint */])(this.order), " node").concat(pluralOrder ? 's' : '', ", ").concat(Object(utils["f" /* prettyPrint */])(this.size), " edge").concat(pluralSize ? 's' : '', ">");
  }
  /**
   * Method used internally by node's console to display a custom object.
   *
   * @return {object} - Formatted object representation of the graph.
   */
  ;

  _proto.inspect = function inspect() {
    var _this3 = this;

    var nodes = {};

    this._nodes.forEach(function (data, key) {
      nodes[key] = data.attributes;
    });

    var edges = {},
        multiIndex = {};

    this._edges.forEach(function (data, key) {
      var direction = data instanceof UndirectedEdgeData ? '--' : '->';
      var label = '';
      var desc = "(".concat(data.source.key, ")").concat(direction, "(").concat(data.target.key, ")");

      if (!data.generatedKey) {
        label += "[".concat(key, "]: ");
      } else if (_this3.multi) {
        if (typeof multiIndex[desc] === 'undefined') {
          multiIndex[desc] = 0;
        } else {
          multiIndex[desc]++;
        }

        label += "".concat(multiIndex[desc], ". ");
      }

      label += desc;
      edges[label] = data.attributes;
    });

    var dummy = {};

    for (var k in this) {
      if (this.hasOwnProperty(k) && !EMITTER_PROPS.has(k) && typeof this[k] !== 'function') dummy[k] = this[k];
    }

    dummy.attributes = this._attributes;
    dummy.nodes = nodes;
    dummy.edges = edges;
    Object(utils["g" /* privateProperty */])(dummy, 'constructor', this.constructor);
    return dummy;
  };

  return Graph;
}(events["EventEmitter"]);
/**
 * Attaching custom inspect method for node >= 10.
 */



if (typeof Symbol !== 'undefined') graph_Graph.prototype[Symbol["for"]('nodejs.util.inspect.custom')] = graph_Graph.prototype.inspect;
/**
 * Attaching methods to the prototype.
 *
 * Here, we are attaching a wide variety of methods to the Graph class'
 * prototype when those are very numerous and when their creation is
 * abstracted.
 */

/**
 * Related to edge addition.
 */

EDGE_ADD_METHODS.forEach(function (method) {
  ['add', 'merge'].forEach(function (verb) {
    var name = method.name(verb),
        fn = verb === 'add' ? addEdge : mergeEdge;

    if (method.generateKey) {
      graph_Graph.prototype[name] = function (source, target, attributes) {
        return fn(this, name, true, (method.type || this.type) === 'undirected', null, source, target, attributes);
      };
    } else {
      graph_Graph.prototype[name] = function (edge, source, target, attributes) {
        return fn(this, name, false, (method.type || this.type) === 'undirected', edge, source, target, attributes);
      };
    }
  });
});
/**
 * Self iterator.
 */

if (typeof Symbol !== 'undefined') graph_Graph.prototype[Symbol.iterator] = graph_Graph.prototype.adjacency;
/**
 * Attributes-related.
 */

attachAttributesMethods(graph_Graph);
/**
 * Edge iteration-related.
 */

attachEdgeIterationMethods(graph_Graph);
/**
 * Neighbor iteration-related.
 */

attachNeighborIterationMethods(graph_Graph);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Obliterator Chain Function
 * ===========================
 *
 * Variadic function combining the given iterators.
 */
var Iterator = __webpack_require__(2);

/**
 * Chain.
 *
 * @param  {...Iterator} iterators - Target iterators.
 * @return {Iterator}
 */
module.exports = function chain() {
  var iterators = arguments,
      current,
      i = -1;

  return new Iterator(function iterate() {
    if (!current) {
      i++;

      if (i >= iterators.length)
        return {done: true};

      current = iterators[i];
    }

    var step = current.next();

    if (step.done) {
      current = null;
      return iterate();
    }

    return step;
  });
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* eslint no-constant-condition: 0 */
/**
 * Obliterator Take Function
 * ==========================
 *
 * Function taking n or every value of the given iterator and returns them
 * into an array.
 */

/**
 * Take.
 *
 * @param  {Iterator} iterator - Target iterator.
 * @param  {number}   [n]      - Optional number of items to take.
 * @return {array}
 */
module.exports = function take(iterator, n) {
  var l = arguments.length > 1 ? n : Infinity,
      array = l !== Infinity ? new Array(l) : [],
      step,
      i = 0;

  while (true) {

    if (i === l)
      return array;

    step = iterator.next();

    if (step.done) {

      if (i !== n)
        return array.slice(0, i);

      return array;
    }

    array[i++] = step.value;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * Graphology Reference Implementation Endoint
 * ============================================
 *
 * Importing the Graph object & creating typed constructors.
 */



/**
 * Alternative constructors.
 */

var DirectedGraph = /*#__PURE__*/function (_Graph) {
  _inheritsLoose(DirectedGraph, _Graph);

  function DirectedGraph(options) {
    return _Graph.call(this, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* assign */ "a"])({
      type: 'directed'
    }, options)) || this;
  }

  return DirectedGraph;
}(_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

var UndirectedGraph = /*#__PURE__*/function (_Graph2) {
  _inheritsLoose(UndirectedGraph, _Graph2);

  function UndirectedGraph(options) {
    return _Graph2.call(this, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* assign */ "a"])({
      type: 'undirected'
    }, options)) || this;
  }

  return UndirectedGraph;
}(_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

var MultiGraph = /*#__PURE__*/function (_Graph3) {
  _inheritsLoose(MultiGraph, _Graph3);

  function MultiGraph(options) {
    return _Graph3.call(this, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* assign */ "a"])({
      multi: true
    }, options)) || this;
  }

  return MultiGraph;
}(_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

var MultiDirectedGraph = /*#__PURE__*/function (_Graph4) {
  _inheritsLoose(MultiDirectedGraph, _Graph4);

  function MultiDirectedGraph(options) {
    return _Graph4.call(this, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* assign */ "a"])({
      multi: true,
      type: 'directed'
    }, options)) || this;
  }

  return MultiDirectedGraph;
}(_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

var MultiUndirectedGraph = /*#__PURE__*/function (_Graph5) {
  _inheritsLoose(MultiUndirectedGraph, _Graph5);

  function MultiUndirectedGraph(options) {
    return _Graph5.call(this, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* assign */ "a"])({
      multi: true,
      type: 'undirected'
    }, options)) || this;
  }

  return MultiUndirectedGraph;
}(_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/**
 * Attaching static #.from method to each of the constructors.
 */


function attachStaticFromMethod(Class) {
  /**
   * Builds a graph from serialized data or another graph's data.
   *
   * @param  {Graph|SerializedGraph} data      - Hydratation data.
   * @param  {object}                [options] - Options.
   * @return {Class}
   */
  Class.from = function (data, options) {
    var instance = new Class(options);
    instance["import"](data);
    return instance;
  };
}

attachStaticFromMethod(_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
attachStaticFromMethod(DirectedGraph);
attachStaticFromMethod(UndirectedGraph);
attachStaticFromMethod(MultiGraph);
attachStaticFromMethod(MultiDirectedGraph);
attachStaticFromMethod(MultiUndirectedGraph);
/**
 * Attaching the various constructors to the Graph class itself so we can
 * keep CommonJS semantics so everyone can consume the library easily.
 */

_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Graph = _graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DirectedGraph = DirectedGraph;
_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].UndirectedGraph = UndirectedGraph;
_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].MultiGraph = MultiGraph;
_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].MultiDirectedGraph = MultiDirectedGraph;
_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].MultiUndirectedGraph = MultiUndirectedGraph;
_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].InvalidArgumentsGraphError = _errors__WEBPACK_IMPORTED_MODULE_2__[/* InvalidArgumentsGraphError */ "a"];
_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].NotFoundGraphError = _errors__WEBPACK_IMPORTED_MODULE_2__[/* NotFoundGraphError */ "b"];
_graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].UsageGraphError = _errors__WEBPACK_IMPORTED_MODULE_2__[/* UsageGraphError */ "c"];
module.exports = _graph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
});