# 学习记录
----

# 需要处理的一些问题

- OK(升级为gulp4) ` gulp watch ` 报找不到文件的错误
- ` markdown ` 转 ` html `需要本地化一下
- ` md.scss ` 需要本地化一下
- OK` packages.json ` 执行脚本集成
- OK` CHANGELOG ` 增加更新日志
- OK` unit test ` 单元测试编写 ` mocha `, ` chai `, ` sinon `
- OK` karma ` 做自动化测试
- ` travis.ci `集成化测试
 - 集成release命令，不走之前的ghpages插件，但是逻辑相同，只是直接通过一系列的git命令去打包发布到gh-page分支上
 - ` tag ` 提交的时候才会发布npm包
- ` scss ` ` bem ` ` postcss-salad `编写规范及写法
- ` theme-default ` 有没有办法加一个.scss就自动往index.scss写入
- OK ` .sh ` 文件写一个，知道是干嘛的，用来写一堆命令行
- 放弃 ` postcss-salad `,` gulp-autoprefixer ` 直接写 ` mixin ` 去编译样式

----

# package.json

- ` lib ` : 打包发布UI库
- ` build:entry ` : 添加新组件后自动install组件
- (废弃)` publish:docs ` : 打包发布文档页面(通过travis打包，删除该命令及对应脚本)

# examples

相当于一个vue的单页项目，主要用来展示UI库的说明文档的页面

## examples/assets

存放，文档页面使用到的静态资源，img,css...

## examples/components

存放，构成文档页面需要用到的公共组件，如侧边栏，页头，页尾

## examples/docs

存放，所以具体的文档md文件，组件的，UI库介绍的...

## examples/pages

存放，文档展示网站的其他页面，如：网站首页

## examples/main.js

引入packages下的所有组件

----

# packages

用来存放组件，install组件

## packages/theme-default

存放一个gulp项目，所有组件的样式写在这里，用来打包所有的样式文件

----

# build

写一些执行脚本

## build/publish-docs.js

（废弃）通过gh-pages打包静态资源直接发布到GitHub page; 注意要做项目地址建一个gh-pages分支，用来存放打包后页面

----

# md-loader

Markdown -> vue 的解析逻辑

