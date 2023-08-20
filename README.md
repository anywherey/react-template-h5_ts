
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
│   ├──http			    /接口请求配置
│   ├──interface		/存放定义的ts接口
│   ├──mobx			    /（可选）数据状态管理插件mobx
│   ├──redux			/（可选）数据状态管理插件redux
│   ├──reducers			/
│   ├──router			/存放路由
│   ├──utils			/工具方法
│   ├──view             /路由页面
│   ├──App.tsx
│   ├──index.tsx
├─ webpack              / 用于配置打包
├─ public               / 用于放置静态资源
├── .husky              / pre-commit hook
├─ global.d.ts          / 存放全局ts接口定义
```
---
