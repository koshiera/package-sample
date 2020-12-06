"use strict";

/* eslint-disable @typescript-eslint/no-var-requires */
var path = require('path');

var glob = require('glob');

var fse = require('fs-extra');
/* eslint-enable @typescript-eslint/no-var-requires */


var srcDir = path.join('./src');
var distDir = path.join('./dist/js');
var files = glob.sync('**/*.d.ts', {
  cwd: srcDir
});
files.forEach(function (file) {
  var from = path.join(srcDir, file);
  var to = path.join(distDir, file);
  fse.copySync(from, to);
});
//# sourceMappingURL=copyTS.js.map