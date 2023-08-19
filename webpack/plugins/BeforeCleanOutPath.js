const fs = require("fs");
class BeforeCleanOutPath {
  apply(compiler) {
    compiler.hooks.beforeRun.tap("BeforeCleanOutPath", (compiler) => {
      // 打包出口
      const outPath = compiler.options.output.path;
      const isPath = fs.existsSync(outPath);
      // 删除打包文件夹
      if (isPath) {
        console.log("检测到目录下存在打包文件夹，正在删除······");
        fs.rmdirSync(outPath, { recursive: true });
        console.log("目录下的旧打包文件夹删除成功");
      }
    });
  }
}
module.exports = BeforeCleanOutPath;
