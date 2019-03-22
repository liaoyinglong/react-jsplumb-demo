const path = require('path');

const {
  override,
  fixBabelImports,
  addPostcssPlugins,
  addWebpackAlias,
} = require('customize-cra');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addPostcssPlugins([require('precss')]),
  addWebpackAlias({
    src: resolve('src'),
  }),
);
