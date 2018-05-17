const uppercamelcase = require('uppercamelcase');

const {
  author,
  name,
  version,
} = require('../package.json');

const authorName = author.replace(/\s+<.*/, '');

let minExt;
switch (process.env.NODE_ENV) {
  case 'browser':
    minExt = '.min';
    break;
  case 'module':
    minExt = '.esm'
    break;
  default:
    minExt = '';
}

exports.author = authorName;
exports.version = version;
exports.moduleName = uppercamelcase(name)
exports.name = name;
exports.filename = name + minExt;
exports.banner = `/*!
 * ${name} v${version}
 * (c) ${new Date().getFullYear()} ${authorName}
 * Released under the MIT License.
 */
`;
