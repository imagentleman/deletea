'use strict';

const fs = require('fs');

function deletea(path) {
  let stats = fs.lstatSync(path);

  if (stats.isDirectory()) {
    for (let subPath of fs.readdirSync(path)) {
      let absPath = `${path}/${subPath}`;
      let stats = fs.lstatSync(absPath);
      if (stats.isFile()) {
        fs.unlinkSync(absPath);
      } else if (stats.isDirectory()) {
        deletea(absPath);
      }
    }
    fs.rmdirSync(path);
  } else {
    fs.unlinkSync(path);
  }
}

module.exports = function(path) {
  deletea(path);
};
