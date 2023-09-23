const off = "off"; // "off" 或 0 - 关闭规则
const warn = "warn"; // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
const error = "error"; // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

module.exports = {
  root: true,
  // 提供运行环境，一个环境定义了一组预定义的全局变量
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // 配置文件可以被基础配置中的已启用的规则继承。
  extends: [
    "eslint:recommended", // 使用eslint中recommended的规则
    "plugin:react/recommended", // 推荐的react lint配置
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended", // 可开启针对 ts 语法推荐的规则定义, 需额外手动安装 @typescript-eslint/eslint-plugin
    "plugin:react-hooks/recommended", // 使用react-hooks中recommended的规则
  ],
  overrides: [],
  // ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器
  parser: "@typescript-eslint/parser", // 需手动安装 @typescript-eslint/parser，这使Eslint能够理解TypeScript语法
  // 配置解析器支持的语法
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".tsx", ".ts", ".js"],
      },
      typescript: {},
    },
  },
  // ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
  // 在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  // ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
  rules: {
    "import/extensions": [
      off,
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
      },
    ],
    "linebreak-style": off, //取消对LF和CRLF的检验
    "@typescript-eslint/no-var-requires": off, // 忽略没有导入声明模块
    "@typescript-eslint/no-empty-function": warn,
    "@typescript-eslint/no-unused-vars": warn,
    "@typescript-eslint/no-explicit-any": warn,
    "react-hooks/rules-of-hooks": error, // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": warn, // 检查 Effect 的依赖
    "react/jsx-uses-react": off,
    "react/react-in-jsx-scope": off,
    "prefer-const": error,
    "react/prop-types": off,
    "no-console":
      process.env.NODE_ENV === "development" ? ["warn", { allow: [warn, error] }] : ["error", { allow: [warn, error] }],
    "no-debugger": process.env.NODE_ENV === "development" ? warn : error,
  },
};
