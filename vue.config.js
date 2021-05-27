// 在这个文件夹写的配置，之后会和公共的配置文件合并
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common ',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}