import _pt from "prop-types";
import React from 'react';
export const Component = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "Component"
  }, /*#__PURE__*/React.createElement("h1", null, "Component Updated"), /*#__PURE__*/React.createElement("pre", null, JSON.stringify(props)));
};
Component.propTypes = {
  var1: _pt.string.isRequired,
  var2: _pt.number.isRequired,
  var3: _pt.bool.isRequired
};
//# sourceMappingURL=Component.js.map