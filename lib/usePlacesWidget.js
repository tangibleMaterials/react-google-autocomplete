"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usePlacesWidget;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _constants = require("./constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function usePlacesWidget(props) {
  var ref = props.ref,
      onPlaceSelected = props.onPlaceSelected,
      apiKey = props.apiKey,
      _props$libraries = props.libraries,
      libraries = _props$libraries === void 0 ? "places" : _props$libraries,
      _props$inputAutocompl = props.inputAutocompleteValue,
      inputAutocompleteValue = _props$inputAutocompl === void 0 ? "new-password" : _props$inputAutocompl,
      _props$options = props.options;
  _props$options = _props$options === void 0 ? {} : _props$options;

  var _props$options$types = _props$options.types,
      types = _props$options$types === void 0 ? ["(cities)"] : _props$options$types,
      componentRestrictions = _props$options.componentRestrictions,
      _props$options$fields = _props$options.fields,
      fields = _props$options$fields === void 0 ? ["address_components", "geometry.location", "place_id", "formatted_address"] : _props$options$fields,
      bounds = _props$options.bounds,
      options = _objectWithoutProperties(_props$options, ["types", "componentRestrictions", "fields", "bounds"]),
      _props$googleMapsScri = props.googleMapsScriptBaseUrl,
      googleMapsScriptBaseUrl = _props$googleMapsScri === void 0 ? _constants.GOOGLE_MAP_SCRIPT_BASE_URL : _props$googleMapsScri,
      language = props.language;

  var inputRef = (0, _react.useRef)(null);
  var event = (0, _react.useRef)(null);
  var autocompleteRef = (0, _react.useRef)(null);
  var observerHack = (0, _react.useRef)(null);
  var languageQueryParam = language ? "&language=".concat(language) : "";
  var googleMapsScriptUrl = "".concat(googleMapsScriptBaseUrl, "?libraries=").concat(libraries, "&key=").concat(apiKey).concat(languageQueryParam);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isScriptLoaded = _useState2[0],
      setIsScriptLoaded = _useState2[1];

  var handleLoadScript = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _utils.loadGoogleMapScript)(googleMapsScriptBaseUrl, googleMapsScriptUrl);

          case 2:
            setIsScriptLoaded(true);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [googleMapsScriptBaseUrl, googleMapsScriptUrl]);
  (0, _react.useEffect)(function () {
    var config = _objectSpread(_objectSpread({}, options), {}, {
      fields: fields,
      types: types,
      bounds: bounds
    });

    if (componentRestrictions) {
      config.componentRestrictions = componentRestrictions;
    }

    if (autocompleteRef.current || !inputRef.current || !_utils.isBrowser) return;
    if (ref && !ref.current) ref.current = inputRef.current;

    var handleAutoComplete = function handleAutoComplete() {
      var _google$maps;

      if (typeof google === "undefined") return console.error("Google has not been found. Make sure your provide apiKey prop.");
      if (!((_google$maps = google.maps) !== null && _google$maps !== void 0 && _google$maps.places)) return console.error("Google maps places API must be loaded.");
      if (!(inputRef.current instanceof HTMLInputElement)) return console.error("Input ref must be HTMLInputElement.");
      autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, config);

      if (autocompleteRef.current) {
        event.current = autocompleteRef.current.addListener("place_changed", function () {
          if (onPlaceSelected && autocompleteRef && autocompleteRef.current) {
            onPlaceSelected(autocompleteRef.current.getPlace(), inputRef.current, autocompleteRef.current);
          }
        });
      }
    };

    if (apiKey) {
      handleLoadScript().then(function () {
        return handleAutoComplete();
      });
    } else {
      handleAutoComplete();
    }

    return function () {
      return event.current ? event.current.remove() : undefined;
    };
  }, []); // Autofill workaround adapted from https://stackoverflow.com/questions/29931712/chrome-autofill-covers-autocomplete-for-google-maps-api-v3/49161445#49161445

  (0, _react.useEffect)(function () {
    var _React$version;

    // TODO find out why react 18(strict mode) hangs the page loading
    if (!(_react.default !== null && _react.default !== void 0 && (_React$version = _react.default.version) !== null && _React$version !== void 0 && _React$version.startsWith("18")) && _utils.isBrowser && window.MutationObserver && inputRef.current && inputRef.current instanceof HTMLInputElement) {
      observerHack.current = new MutationObserver(function () {
        observerHack.current.disconnect();

        if (inputRef.current) {
          inputRef.current.autocomplete = inputAutocompleteValue;
        }
      });
      observerHack.current.observe(inputRef.current, {
        attributes: true,
        attributeFilter: ["autocomplete"]
      });
    }
  }, [inputAutocompleteValue]);
  (0, _react.useEffect)(function () {
    if (autocompleteRef.current) {
      autocompleteRef.current.setFields(fields);
    }
  }, [fields]);
  (0, _react.useEffect)(function () {
    if (autocompleteRef.current) {
      autocompleteRef.current.setBounds(bounds);
    }
  }, [bounds]);
  (0, _react.useEffect)(function () {
    if (autocompleteRef.current) {
      autocompleteRef.current.setComponentRestrictions(componentRestrictions);
    }
  }, [componentRestrictions]);
  (0, _react.useEffect)(function () {
    if (autocompleteRef.current) {
      autocompleteRef.current.setOptions(options);
    }
  }, [options]);
  return {
    ref: inputRef,
    autocompleteRef: autocompleteRef,
    isScriptLoaded: isScriptLoaded
  };
}