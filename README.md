# 个人博客 

# Vue 3 + Typescript + Vite + Vant 技术归纳以及踩坑日志
 - 大量使用基于viewport单位进行布局适应(原本想用 postcss-px-to-viewport 但由于是pc移动双兼容，所以暂时放弃了).
 - 644px作为基准值使用 window.matchMedia方法封装JS媒体查询实现复杂交互.
 - 使用vite Glob导入实现字体图标全自动引入,仅需解压到指定目录即可.
 - 后续考虑将此方案作为vux模块化引入解决方案.
 - 使用script-setup实验性语法 目前还是有部分问题 js问题不大 一旦遇到Ts, 由于引入的东西都会默认导出，所以import某个接口可能会
 引起 该接口被默认导出,导致接口作为值使用的错误。 当然有方法可以规避此错误
 - 由于vue3 新特性 css可以使用v-bing(ref)去引用js中的变量,并且是响应式的.可以基于此实现css in js
 - 在vite.config.ts中配置的路径别名，如果想要获得路径的代码提示,还需要在tsconfig.json中配置compilerOptions-> paths属性
```js
 "compilerOptions": {
    "paths" : {
      "@/*": ["src/*"],
      "views/*": ["src/views/*"]
    }
 }
```
 - 如果遇到了启动项目就没有NetWork(--use `host`) 只有Local的时候,可以尝试配置下vite.config.ts中的server的host赋值为host:"::"
 - 很大概率可以作为临时方案解决此问题(此问题似乎已经提了issue了)


