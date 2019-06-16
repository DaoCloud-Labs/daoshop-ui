const proxy = 'https://dmp-n2.daocloud.io';

module.exports = {
  devServer: {
    proxy: {
      '/demo': {
        target: proxy,
      },
    },
  },
};
