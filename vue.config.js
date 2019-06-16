const proxy = 'https://daoshop-ui.daocloud.io';

module.exports = {
  devServer: {
    proxy: {
      '/demo': {
        target: proxy,
      },
    },
  },
  productionSourceMap: false,
};
