## 项目说明

该项目中的一些插件不是必要，具体的插件选择还需要依据项目来选择并删除不必要的插件来进行开发。

拉取代码时如果有error Delete cr prettier/prettier报错，请禁止git自动将LF转换为CRLF:**git** config --global core.autocrlf **false**

## 项目安装

```
yarn install / npm install
```

项目运行

```
yarn dev / npm run dev
```

# 项目结构

---

```
├─ src
│   ├──api  			/ 接口存放位置
│   ├──components		/ 公共组件
│   ├──hooks			/（可选）自定义hook
│   ├──http			/ 接口请求配置
│   ├──interface		/ 存放定义的ts接口
│   ├──mobx			/（可选）数据状态管理插件mobx
│   ├──redux			/（可选）数据状态管理插件redux
│   ├──reducers			/（可选）数据状态管理
│   ├──router			/ 存放路由
│        ├──components		/ 路由控制组件
│        ├──routes		/ 路由文件定义
│   ├──utils			/ 工具方法
│   ├──view             	/ 路由页面
│   ├──App.tsx                  / 应用的主要组件
│   ├──index.tsx                / 应用的入口
├─ webpack              	/ 用于配置打包
├─ public               	/ 用于放置静态资源
├─ .husky             		/ pre-commit hook
├─ scripts
│     ├──verify-commit		/ 验证提交信息
├─ global.d.ts          	/ 定义全局ts接口
```

## [接口请求配置说明](./src/http/README.md)

## 数据状态管理的选择

## hook的选择

# 路由说明

    为了方便路由的管理，将路由有关的组件放到了router文件夹下,通过components文件夹下的index文件实现了路由控制。提供了以路由鉴权的HOC写法的例子来控制路由、在路由跳转前实现中断所有正在连接的接口。

# 适配说明

    默认采用amfe-flexible+postcss-pxtorem的rem方案，也可以采用postcss的vw插件来选取vw方案。在postcss.config中有相应的注释来选取所想采用的方案。

# 代码的规范开发

## prettierrc配置说明

```
{
  trailingComma: "all",                         // 在对象或数组最后一个元素后面是否加逗号
  semi: true,                                   // 是否使用分号
  singleQuote: false,                           // 是否使用单引号
  jsxSingleQuote: false,                        // 是否使用单引号
  jsxBracketSameLine: false,                    // 把标签的'>' 是否单独放一行
  bracketSameLine: false,                       // 把标签的'>' 是否单独放一行
  endOfLine: "lf",                              // 换行符的类型
  printWidth: 120,                              // 超过最大值换行
  tabWidth: 2,                                  // 缩进字节数
  proseWrap: "always",                          // 用于控制 Prettier 对代码中文本内容的折行方式
  bracketSpacing: true,                         // 大括号 {} 周围是否添加空格
  arrowParens: "always",                        // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  singleAttributePerLine: false,                // 如果 HTML元素（包括 JSX 等）具有多个属性，将其每个属性格式化为单独占一行
  /*
  "tslintIntegration": false,                   // 不让prettier使用tslint的代码格式进行校验
  "stylelintIntegration": false,                // 不让prettier使用stylelint的代码格式进行校验
  "eslintIntegration": false,                   // 不让prettier使用eslint的代码格式进行校验
  "requireConfig": false,                       // Require a 'prettierconfig' to format prettier
  "parser": "babylon",                          // 格式化的解析器，默认是babylon
  "ignorePath": ".prettierignore",              // 不使用prettier格式化的文件
  "disableLanguages": ["vue"],                  // 不格式化vue文件，vue文件的格式化单独设置
  "htmlWhitespaceSensitivity": "ignore",
  "withNodeModules": false,                     // 允许 Prettier 格式化 node_modules 中的文件
  "vueIndentScriptAndStyle": false,             // 缩进 Vue 的 <script> 和 <style> 标签。
  "resolveGlobalModules": false,                // 在当前 node_modules 无法解析时使用全局 node_modules 。可能造成性能上的影响
  "useEditorConfig": true,                      // 使用 .editorconfig 中的配置方案。
  "requirePragma":true,
  */ 
 
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
  ],
  import: {
    group: "spacing",
  },
};

```

---

## eslint配置说明

# 代码的规范提交

# 组件的功能测试
