# travel

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
首页效果
  1，首页使用滚动插件和轮播插件实现了首页滚动，图片和导航栏的轮播效果
  2，对推荐景点的点击事件实现路由功能，对景点照片展示页面的出现与消失实现动画效果效果图如下
![点击查看动态效果](https://github.com/XiaoQueXinggg/travel.com/blob/master/src/assets/img/home-imgAnimation.gif)

地址滚动页面
  1，对字母表的滚动使用懒执行执行(节流)，提高性能
  2，利用组件间传值，实现了点击字母，页面会的滚动到相应字母对应的导航位置
  3，对字母栏实现滚动操作，并实现懒执行(节流)提高浏览性能
  3，利用vue-x中的state实现地址的全局存储，并利用mutations函数实现state中值得更改。
 ![点击查看动态效果](https://github.com/XiaoQueXinggg/travel.com/blob/master/src/assets/img/search.gif)
