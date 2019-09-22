const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

// 创建一个插件的实例
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./src/index.html"), // 源文件
  filename: "index.html" // 生成的内存中首页的名称
});

module.exports = {
  mode: "production", // production development
  plugins: [htmlPlugin]
};