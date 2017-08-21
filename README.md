# pm

> product-management

> version1.0.0


## you should

```bash
git clone git@git.corpautohome.com:GP_RD_FE_SOU/PM.git

cd PM

git checkout -b yourname

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### 所有源文件在src目录下


```
src
│  App.vue     // 主页面模版
│  main.js     // 主页面js
│
├─assets       // 资源存放目录
│  ├─icon      // icon图标存放文件夹
│  │      iconfont.svg
│  │
│  ├─images    // 图片存放文件夹
│  │      log.png
│  │
│  ├─sass      // sass文件存放文件夹
│  │      overlap.scs  // 覆盖样式文件夹 引用第三方样式需要覆盖的
│  │      public.scss  // 公共组件存放目录自己的
│  │      reset.scss   // 重置浏览器样式
│  │
│  └─原稿      // 原稿存放位置 如PSD
├─components   // 插件存放位置
│  └─pmPlugin  // 本项目插件
│          index.js
│
├─router       // 路由文件
│      index.js
│
└─view
    │  tpl.vue // 一级文件主路由存放位置
    │
    └─module   // 组件存放区域
            header.vue
```


前端框架： Vue2.3.3

自动化构建工具：webpack2.6.1
