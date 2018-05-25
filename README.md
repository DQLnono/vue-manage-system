# vue-admin-system

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 代码提交信息书写规范
> 内容清晰，目的明确，方便日后维护追踪
+ feat:添加新功能
+ fix:修补bug
+ docs:修改文档
+ style:样式更改
+ refactor:重构
+ test:添加测试类
+ chore:开发环境或辅助工具的变动

## Build Record
1. vue init webpack my-project
2. index.html add preloading_container;app.vue add js to control hidden
3. try to install Font Awesome 5
4. build then the request path error,fix config/index(assetsPublicPath: './')
5. import Font Awesome 4.7 in index
4. add install(axios vuex)
5. choose element-ui and install

## Font Awesome 5
+ Font Awesome 5 icons with SVG directly in the page, you can set config to change use css(autoReplaceSvg: false);
+ Font Awesome 5 icons Support >IE 10*
+ Font Awesome 5 icons can ben any of 4 different styles,each with its own prefix

> Solid —— fas；Regular —— far； Light —— lal； Brands —— fab；

``` bash
# install main frame,this package has no content
npm install --save @fortawesome/fontawesome

# install Free Solid
npm install --save @fortawesome/fontawesome-free-solid

# install Free Regular
npm install --save @fortawesome/fontawesome-free-regular

# install Free Brands
npm install --save @fortawesome/fontawesome-free-brands

# install Web Fonts with CSS
npm install --save @fortawesome/fontawesome-free-webfonts

# vue/react components
npm install --save @fortawesome/vue-fontawesome
npm install --save @fortawesome/react-fontawesome
```


