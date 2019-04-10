const proxy = 'http://172.16.20.104:31586';

module.exports = {
  devServer: {
    proxy: {
      '/demo': {
        target: proxy,
      },
    },
  },
};
