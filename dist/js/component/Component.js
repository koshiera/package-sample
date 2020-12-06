"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = function Component(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Component"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Component Updated"), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(props)));
};

exports.Component = Component;
Component.propTypes = {
  var1: _propTypes.default.string.isRequired,
  var2: _propTypes.default.number.isRequired,
  var3: _propTypes.default.bool.isRequired
};
//# sourceMappingURL=Component.js.map