(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Component"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Component"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Component);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Component) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Component).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Component[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map