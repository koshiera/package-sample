(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Component = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const Component = exports.Component = props => {
    return /*#__PURE__*/_react2.default.createElement("div", {
      className: "Component"
    }, /*#__PURE__*/_react2.default.createElement("h1", null, "Component Updated"), /*#__PURE__*/_react2.default.createElement("pre", null, JSON.stringify(props)));
  };

  Component.propTypes = {
    var1: _propTypes2.default.string.isRequired,
    var2: _propTypes2.default.number.isRequired,
    var3: _propTypes2.default.bool.isRequired
  };
});
//# sourceMappingURL=Component.js.map