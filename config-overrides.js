const {
    override,
    fixBabelImports,
    addWebpackAlias,
    addDecoratorsLegacy,
} = require("customize-cra");
const path = require("path");
module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        style: "css",
    }),
    addWebpackAlias({
        assets: path.resolve(__dirname, "./src/assets"),
        "@": path.resolve(__dirname, "./src/components"),
    }),
    // 装饰器
    addDecoratorsLegacy()
);
