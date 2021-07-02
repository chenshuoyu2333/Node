# Node.js 第1天

## 上午总结

- Node.js 是什么
    + JavaScript 运行时
    + 既不是语言，也不是框架，它是一个平台
- Node.js 中的 JavaScript
    + 没有 BOM、DOM
    + EcmaScript 基本的 JavaScript 语言部分
    + 在 Node 中为 JavaScript 提供了一些服务器级别的 API
        * 文件操作的能力
        * http 服务的能力

## 总结

- Node 中的 JavaScript
    + EcmaScript
        * 变量
        * 方法
        * 数据类型
        * 内置对象
        * Array
        * Object
        * Date
        * Math
    + 模块系统
        * 在 Node 中没有全局作用域的概念
        * 在 Node 中，只能通过 require 方法来加载执行多个 JavaScript 脚本文件
        * require 加载只能是执行其中的代码，文件与文件之间由于是模块作用域，所以不会有污染的问题
            - 模块完全是封闭的
            - 外部无法访问内部
            - 内部也无法访问外部
        * 模块作用域固然带来了一些好处，可以加载执行多个文件，可以完全避免变量命名冲突污染的问题
        * 但是某些情况下，模块与模块是需要进行通信的
        * 在每个模块中，都提供了一个对象：`exports`
        * 该对象默认是一个空对象
        * 你要做的就是把需要被外部访问使用的成员手动的挂载到 `exports` 接口对象中
        * 然后谁来 `require` 这个模块，谁就可以得到模块内部的 `exports` 接口对象
        * 还有其它的一些规则，具体后面讲，以及如何在项目中去使用这种编程方式，会通过后面的案例来处理
    + 核心模块
        * 核心模块是由 Node 提供的一个个的具名的模块，它们都有自己特殊的名称标识，例如
            - fs 文件操作模块
            - http 网络服务构建模块
            - os 操作系统信息模块
            - path 路径处理模块
            - 。。。。
        * 所有核心模块在使用的时候都必须手动的先使用 `require` 方法来加载，然后才可以使用，例如：
            - `var fs = require('fs')`
- http
    + require
    + 端口号
        * ip 地址定位计算机
        * 端口号定位具体的应用程序
    + Content-Type
        * 服务器最好把每次响应的数据是什么内容类型都告诉客户端，而且要正确的告诉
        * 不同的资源对应的 Content-Type 是不一样，具体参照：http://tool.oschina.net/commons
        * 对于文本类型的数据，最好都加上编码，目的是为了防止中文解析乱码问题
    + 通过网络发送文件
        * 发送的并不是文件，本质上来讲发送是文件的内容
        * 当浏览器收到服务器响应内容之后，就会根据你的 Content-Type 进行对应的解析处理

- 模块系统
- Node 中的其它的核心模块
- 做一个小管理系统：
    + CRUD
- Express Web 开发框架
    + `npm install express`

# Node.js 第2天课堂笔记

## 知识点

## 反馈

- 老师像我一同学 但我知道 我同学没这么牛逼。。。
    + 学习、分享、交流
- 老师 讲讲sumblie需要安装哪些插件把 以及怎么用Md结尾的文档，对于我们来说好像就是一个阅读器一样使用………………
    + HTML 也是标记语言
    + markdown 标记语言
    + `#` 就是标题
    + `-`、`*` 就是列表
    + `**加粗内容**`
    + `GFM`
- 第一天上课 给我感觉挺好的 就是老师可能对早下课是不是有什么误解 我们平时都是 五点半放学的 ，还有就是有点啰嗦，那个不能起a呀b呀我感觉听了不下 五遍 我都要被你笑哭了
- 老师讲的挺好的
- 后来讲的速度有点上来了！
- 老师很耐心！
- 老师讲的课很好！
- 感觉老师讲的有点快，语速快
- 没有对比就没有伤害 体验了一把 普通话标准 英语发音又标准 幸福感
- 感觉老师讲课的风格简单利落，思路清晰。 nice
- 结尾不写分号是老师写的es6的代码风格，还是老师懒得写？

### 代码风格

```javascript
var foo = 'bar'
var foo ='bar'
var foo= 'bar'
var foo = "bar"

if (true) {
  console.log('hello') 
}

if (true) {
    console.log('hello') 
}

if (true ){
      console.log('hello') 
}
```

为了约定大家的代码风格，所以在社区中诞生了一些比较规范的代码风格规范：dnsajkndkjsabnjkdnjksandjknsajkdnjkasnjkdnjksandjknsajkdnjksajkdnas

- [JavaScript Standard Style](https://standardjs.com/)
- Airbnb JavaScript Style

## 复习

## 上午总结

- 代码风格
- 无分号
    + `(`
    + `[`
    + `
    + 最好前面补分号，避免一些问题
    + 《编写可维护的 JavaScript》
    + 不仅是功能，还要写的漂亮
- 服务端渲染
    + 说白了就是在服务端使用模板引擎
    + 模板引擎最早诞生于服务端，后来才发展到了前端

- 服务端渲染和客户端渲染的区别
    + 客户端渲染不利于 SEO 搜索引擎优化
    + 服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的
    + 所以你会发现真正的网站既不是纯异步也不是纯服务端渲染出来的
    + 而是两者结合来做的
    + 例如京东的商品列表就采用的是服务端渲染，目的了为了 SEO 搜索引擎优化
    + 而它的商品评论列表为了用户体验，而且也不需要 SEO 优化，所以采用是客户端渲染

## 下午总结
# Node.js 第3天课堂笔记

## 知识点

- 增删改查
- 登陆
- 注册
- 头像
    + 服务端图片
    + 水印
    + 图片水印
- 找回密码
- 密码修改

- 模块系统
    + 核心模块
    + 第三方模块
    + 自己写的模块
    + 加载规则以及加载机制
    + 循环加载
- npm
- package.json
- Express
    + 第三方 Web 开发框架
    + 高度封装了 http 模块
    + 更加专注于业务，而非底层细节
    + 知其所以然
- 增删改查
    + 使用文件来保存数据（锻炼异步编码）
- MongoDB
    + （所有方法都封装好了）

## 反馈

-  希望老师再推荐一些前端学习的书籍，谢谢！
    +  《JavaScript 高级编程》第3班
    +  学习，解决问题
    +  书本可以更好的系统的整理学过的内容，了解一些细节
    +  《JavaScript 语言精粹》
-  seo的资料，嘿嘿
    + 网站运营 SEO
    + SEO 运营专员
    + 百度、Google、搜狗、
-  最后老师那个怎么做案例的步骤真的是很有用 觉得今天的反馈 大概又是夸老师的比较多 老师声音很有特点
-  老师讲的很仔细,虽然语速有点快但是会重复很多遍,即使第一遍没听会第二遍第三遍也懂了.很好.
-  使用markdown一次只能打开一个文件,不知道怎么建文件夹，是需要安插件吗?
-  老师，软件版本的升级是以什么作为理论支持的，为什么跳跃间隙可以这么大？还有，看上了老师的电子图书馆，瞬间好爱学习呀，真的！
    +  软件开发版本里面涉及到软件工程学：
    +  x.x.x
        *  0.0.1
        *  0.0.2
        *  1.1.5
        *  1.9.2
        *  2（新增功能比较多，甚至可能去除了某些功能）.5(加入了新功能).0（修复bug，提升性能）
        *  大版本
        *  一般是这些客户端软件、技术框架开发者比较理解的多
        *  做网站很少涉及到版本的概念，网站的目的就是快
-  art-template里面用的语法是jQuery吗， each什么的 我晕了 each,forEach, 遍历的全混了
    + art-template 和 jQuery 一毛钱关系都没有
    + each 是 art-template 的模板语法，专属的
    + {{each 数组}}
    + <li>{{ $value }}</li>
    + {{/each}} 这是 art-template 模板引擎支持的语法，只能在模板字符串中使用
    + $.each(数组, function)
    + $('div').each(function) 一般用于遍历 jQuery 选择器选择到的伪数组实例对象
    + forEach 是 EcmaScript 5 中的一个数组遍历函数，是 JavaScript 原生支持的遍历方法 可以遍历任何可以被遍历的成员
    + jQuery 的 each 方法和 forEach 几乎一致
    + 由于 forEach 是 EcmaScript 5 中的，所以低版本浏览器不支持
-  每一次的复习贼重要 老师很不错 我喜欢
-  在以后的工作中 用到node.js的地方多吗？ 在留言本的案例中 点击发表留言跳转页面的路径是url路径 和之前写的页面跳转写的文件路径还是有点分不清。
    + 技多不压身
    + Node 对于前端来讲是进阶高级前端开发工程师必备的技能
    + 屌丝最容易逆袭的职业
    + 见得东西多了你就不怕了
    + 为所欲为
-  老师讲的挺清晰的 可是第一节太困了 路径有点没转变过来
-  如果从a中调用b中的数据，又从b中调用a中的数据，执行a代码，为什么把b中的执行完后才会执行a，而不是在b调用a的时候a中的代码继续执行
    + a 加载了 b
        * 执行 b 中的代码
        * 同时得到 b 中导出的接口对象：exports
        * 执行 b 的过程中发现 b 也在 require a
        * b 就会反过来执行 a
        * a 中又加载 b
        * b 又反过来加载 a
        * 这就是循环加载
        * 如果你一旦出现了这种情况，说明你的思路有问题。
        * jQuery.js （可能不可能出现 jQuery 依赖了 main）
        * main.js 依赖了 jQuery
        * 这个问题是矛盾。
    + b 中也加载了 a
    +
    + 网页中所有的路径其实都是 url 路径，不是文件路径
-  问题就是不知道问题是什么,写案例的时候似懂非懂
-  感觉思维有点跟不上,

## 复习

- 网站开发模型
    + 黑盒子、哑巴
    + 写代码让它变得更智能
    + 按照你设计好的套路供用户使用

- 在 Node 中使用 art-template 模板引擎
    + 安装
    + 加载
    + template.render()
- 客户端渲染和服务端渲染的区别
    + 最少两次请求，发起 ajax 在客户端使用模板引擎渲染
    + 客户端拿到的就是服务端已经渲染好的
- 处理留言本案例首页数据列表渲染展示
- 处理留言本案例发表留言功能
    + 路径
    + 设计好的请求路径
    + $GET 直接或查询字符串数据
    + Node 中需要咱们自己动手来解析
        * url.parse()
    + /pinglun?name=jack&message=hello
    + split('?')
    + name=jack&message=hello
    + split('&')
    + name=jack message=hello
    + forEach()
    + name=jack.split('=')
    + 0 key
    + 1 value
- 掌握如何解析请求路径中的查询字符串
    + url.parse()
- 如何在 Node 中实现服务器重定向
    + header('location')
        * 301 永久重定向 浏览器会记住
            - a.com b.com
            - a 浏览器不会请求 a 了
            - 直接去跳到 b 了
        * 302 临时重定向 浏览器不记忆
            - a.com b.com
            - a.com 还会请求 a
            - a 告诉浏览器你往 b
- Node 中的 Console（REPL）使用

## 上午总结

- jQuery 的 each 和 原生的 JavaScript 方法 forEach
    + EcmaScript 5 提供的
        * 不兼容 IE 8
    + jQuery 的 each 由 jQuery 这个第三方库提供
        * jQuery 2 以下的版本是兼容 IE 8 的
        * 它的 each 方法主要用来遍历 jQuery 实例对象（伪数组）
        * 同时它也可以作为低版本浏览器中 forEach 替代品
        * jQuery 的实例对象不能使用 forEach 方法，如果想要使用必须转为数组才可以使用
        * `[].slice.call(jQuery实例对象)`
- 模块中导出多个成员和导出单个成员
- 301 和 302 状态码区别
    + 301 永久重定向，浏览器会记住
    + 302 临时重定向
- exports 和 module.exports 的区别
    + 每个模块中都有一个 module 对象
    + module 对象中有一个 exports 对象
    + 我们可以把需要导出的成员都挂载到 module.exports 接口对象中
    + 也就是：`moudle.exports.xxx = xxx` 的方式
    + 但是每次都 `moudle.exports.xxx = xxx` 很麻烦，点儿的太多了
    + 所以 Node 为了你方便，同时在每一个模块中都提供了一个成员叫：`exports`
    + `exports === module.exports` 结果为  `true`s
    + 所以对于：`moudle.exports.xxx = xxx` 的方式 完全可以：`expots.xxx = xxx`
    + 当一个模块需要导出单个成员的时候，这个时候必须使用：`module.exports = xxx` 的方式
    + 不要使用 `exports = xxx` 不管用
    + 因为每个模块最终向外 `return` 的是 `module.exports`
    + 而 `exports` 只是 `module.exports` 的一个引用
    + 所以即便你为 `exports = xx` 重新赋值，也不会影响 `module.exports`
    + 但是有一种赋值方式比较特殊：`exports = module.exports` 这个用来重新建立引用关系的
    + 之所以让大家明白这个道理，是希望可以更灵活的去用它
- Node 是一个比肩 Java、PHP 的一个平台
    + JavaScript 既能写前端也能写服务端

```javascript
moudle.exports = {
  a: 123
}

// 重新建立 exports 和 module.exports 之间的引用关系
exports = module.exports

exports.foo = 'bar'
```

```javascript
Array.prototype.mySlice = function () {
  var start = 0
  var end = this.length
  if (arguments.length === 1) {
    start = arguments[0]
  } else if (arguments.length === 2) {
    start = arguments[0]
    end = arguments[1]
  }
  var tmp = []
  for (var i = start; i < end; i++) {
    // fakeArr[0]
    // fakeArr[1]
    // fakeArr[2]
    tmp.push(this[i])
  }
  return tmp
}

var fakeArr = {
  0: 'abc',
  1: 'efg',
  2: 'haha',
  length: 3
}

// 所以你就得到了真正的数组。 
;[].mySlice.call(fakeArr)
```

## 下午总结

- jQuery 的 each 和 原生的 JavaScript 方法 forEach
- 301 和 302 的区别
- 模块中导出单个成员和导出多个成员的方式
- module.exports 和 exports 的区别
- require 方法加载规则
    + 优先从缓存加载
    + 核心模块
    + 路径形式的模块
    + 第三方模块
        * node_modules
- package.json 包描述文件
    + dependencies 选项的作用
- npm 常用命令
- Express 基本使用

- 使用 Express 把之前的留言本案例自己动手改造一下