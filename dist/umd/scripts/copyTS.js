(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['path', 'glob', 'fs-extra'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('path'), require('glob'), require('fs-extra'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.path, global.glob, global.fsExtra);
    global.undefined = mod.exports;
  }
})(this, function (path, glob, fse) {
  "use strict";

  /* eslint-disable @typescript-eslint/no-var-requires */

  /* eslint-enable @typescript-eslint/no-var-requires */
  const srcDir = path.join('./src');
  const distDir = path.join('./dist/js');
  const files = glob.sync('**/*.d.ts', {
    cwd: srcDir
  });
  files.forEach(file => {
    const from = path.join(srcDir, file);
    const to = path.join(distDir, file);
    fse.copySync(from, to);
  });
});
//# sourceMappingURL=copyTS.js.map