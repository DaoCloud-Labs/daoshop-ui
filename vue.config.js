const proxy = 'http://10.8.1.131:18081';

module.exports = {
  devServer: {
    proxy: {
      '/demo': {
        target: proxy,
        pathRewrite: {
          '^/demo': '',
        },
      },
    },
  },
  productionSourceMap: false,
};
