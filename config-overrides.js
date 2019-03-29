const path = require('path');

const {
  override,
  fixBabelImports,
  addPostcssPlugins,
  addWebpackAlias
} = require('customize-cra');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

const addCssModulesOptions = options => config => {
  let loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf))
    .oneOf;

  let cssRule = loaders.find(rule => {
    return rule.test && rule.test.toString() === /\.module\.css$/.toString();
  });

  let cssloader = cssRule.use.find(
    loader => loader.loader === require.resolve('css-loader')
  );

  cssloader.options = { ...cssloader.options, ...options };

  return config;
};

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addPostcssPlugins([require('precss')]),
  addWebpackAlias({
    src: resolve('src')
  }),
  addCssModulesOptions({ camelCase: true })
);
