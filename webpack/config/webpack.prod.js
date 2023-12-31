const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // 这个插件优化和压缩css
const TerserPlugin = require("terser-webpack-plugin"); // 这个插件使用 terser 来压缩 JavaScript
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); // 使用交互式可缩放树形地图可视化 webpack 输出文件的大小
const CompressionPlugin = require("compression-webpack-plugin"); // 静态资源压缩, 使用Content-Encoding为它们提供服务
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const paths = require("../paths");
const { shouldOpenAnalyzer, ANALYZER_HOST, ANALYZER_PORT } = require("../conf");

const prodConfig = {
  mode: "production",
  performance: {
    hints: false,
  },
  // devtool: 'hidden-source-map',
  target: "browserslist",
  output: {
    filename: "js/[name].[contenthash:8].js",
    assetModuleFilename: "images/[name].[contenthash:8].[ext]",
    publicPath: process.env.PUBLIC_PATH,
    clean: true, // 在生成文件之前清空 output 目录
  },
  plugins: [
    // new CleanWebpackPlugin(), // 使用clean: true 代替
    new CompressionPlugin({
      test: /\.js$|\.html$|.\css/, // 匹配文件名
      threshold: 10240, // 对超过10k的数据压缩
      deleteOriginalAssets: false, // 不删除源文件
    }),
    shouldOpenAnalyzer &&
      new BundleAnalyzerPlugin({
        analyzerMode: "server",
        analyzerHost: ANALYZER_HOST,
        analyzerPort: ANALYZER_PORT,
      }),
  ].filter(Boolean),
  optimization: {
    // 允许你通过提供一个或多个定制过的 TerserPlugin 实例， 覆盖默认压缩工具(minimizer)
    minimizer: [
      new TerserPlugin({
        extractComments: false, // 删除注释
        terserOptions: {
          compress: { pure_funcs: ["console.log", "console.warn"] },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    // 对于动态导入模块，请在 SplitChunksPlugin 页面中查看配置其行为的可用选项。
    splitChunks: {
      automaticNameDelimiter: "-", // 生成名称的分隔符
      chunks: "all", // all-所有模块生效，async-抽取异步模块，initial:同步模块生效
      // maxInitiaRequests:4,
      // minSize: 204800, //  todo, 后续还有性能问题再拆, 生成 chunk 的最小体积（以 bytes 为单位）。
      // maxSize: 40000, // todo, 后续还有性能问题再拆, 生成 chunk 的最大体积（以 bytes 为单位）。
      cacheGroups: {
        commons: {
          test: /[/\\]node_modules[/\\]/,
          name: "vendors",
          chunks: "all",
        },
        // 抽离自定义工具库
        utilCommon: {
          // test: /\/utils\//,
          name: "common",
          minSize: 0, // 将引用模块分离成新代码文件的最小体积
          minChunks: 2, // 表示将引用模块如不同文件引用了多少次，才能分离生成新chunk
          // priority: -20, // 优先级
        },
      },
    },
  },
};

module.exports = merge(commonConfig, prodConfig);
