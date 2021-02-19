# 理解现代前端

> You cannot understand what is happening today without understanding what
> came before.
>
> — Steve Jobs

1980–1990 年，在 CERN（欧洲核子研究中心）工作的 [Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/) 博士，为了使 CERN 的研究人员更方便地使用和共享文档，发明了 HTML 和 HTTP。

HTML 的首个公开描述只有描述 18 个元素。

HTTP 协议的第一个 RFC， [HTTP/0.9](https://www.w3.org/Protocols/HTTP/AsImplemented.html)，只定义了一个只有 `GET` 方法。

1995 年 5 月，[Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) 花了十天的时间，设计出了 JavaScript。

1996 年，[CSS 1.0](https://www.w3.org/Style/CSS20/#:~:text=On%20December%2017%2C%201996%2C%20W3C) 发布。

HTML/CSS/JavaScript，前端三大件，似乎每一件的诞生都没有什么预定的章法。10 年前，世面上似乎也没有特别正式和专业的前端岗——如果有，基本上也是切图仔——怎么忽然到了 10 年后，前端的发展就一日千里，“洞中方一日，世上已千年”——了呢？

> 每18个月–24个月，前端都会难一倍。
>
> — 前端摩尔定律

在互联网开发的岗位序列中，前端岗是最不受待见的一个，因为，坦白的讲，10 年前前端的领域知识太浅，护城河太浅，任何一个优秀的后端工程师，如果他愿意，都可以花上一两个月的时间，转变成一个初级的前端工程师，但是反过来就不行啦。

然而时移世易，三十年河东河西，世道变了。前端的学习入门难度陡增，再也不是随便拉过来一个程序员摆弄摆弄就可以上手的了。

我最开始自己尝试做产品，涉及前端的部分就套诸如 bootstrap 之类的框架，简单需求还好，稍复杂一点的设计和想法，改来改去，总是不顺手不合心意，那感觉就像是写文章，反反复复斟酌，最终却总是辞不达意。于是就下了点决心，深入了解下现代前端体系，没想到跳入了神坑，差点爬不出来了。花了两三年的时间，做了几百个页面后，总算是有了一点自信和心得。

因此我很了解，当一个人，学了一点初级的编程，学完了传统的 HTML/CSS，学了一点点的 JavaScript，再想往上深入一层，那种面对一堆概念，无所适从的迷茫感和焦虑感。这也是我决定写这个教程的原因——我要对自己这两三年的学习作个总结，对于遗漏的概念加深下理解，同时如果能够帮助到一些人的话，那就再好不过了。

我有一个理念——学习一个学科的历史，是很好的掌握和理解这个学科的方法。因为在这篇教程中，我假定读者已经掌握了基本的 HTML/CSS/JavaScript 知识，这方面我不再啰嗦——因为这方面的资料实在太多，我就不再多些一举了。我要写的是：

- HTTP/0.9，只有一个 `GET` 方法，怎么就成了互联网上最重要的基础协议了？
- RESTful 到底是怎么回事？什么是 hypermedia？hyper 是什么意思？hypermedia 和 HTML 中的
  hyperlink 有什么联系？
- JavaScript 的构建工具链为何如此复杂？ES6 的 `import` 和 Node.js 的 `require` 有何区别？
- CSS 预处理器是什么？CSS in JS 解决了什么问题？

诸如此类的知识，如果你不去思考 why，只学 how，那么你的知识终究是零散的，不成体系。而我要重点写的，就是这个 why。

## HTML

### HTML5

XHTML 为何失败？

### Hyperlink 与 SEO

Hyper 是什么意思？为何要有良好结构的 HTML？

### 语义化

## CSS

### 布局

- Table/Float 布局
- Flex 布局
- Grid 布局
- 宏观层面上讲，CSS 的流式布局，与 LaTeX 的离线布局，Adobe Indesign 的可视化布局之间的对比。

#### grid system

- 960.gs
- bootstrap

### 盒模型

### 字体

- web font
- font based icon
- font 的版权

### 预处理器

### 模块化

- CSS in JS

### 响应式设计

- 响应式设计的诞生
- mobile first

## JavaScript

### Closure 闭包

- 闭包在 JavaScript 中为何如此重要？
- 用闭包模拟 OOP
- lexical scope/dynamic scope

### Why JSON over XML

- Why JSON win?

### OOP

### 异步

#### Promise

- Promise/future，其余语言中的实现和对比

#### Async/await

- Continuation/coroutine/generator

### 模块化

- JavaScript 的模块化和其他语言的模块化之间到底有何不同？

### npm 生态

- node_modules 为何动不动就有成百上千个包？

## 前端工程化

### 史前时代

### bower/npm

### grunt/gulp/yeoman

### webpack 集大成者

## HTTP

### HTTP 0.9

### RESTful

- 到底要不要遵循 RESTful API 的设计？
- REpresentational State Transfer 到底是什么意思？
- Hypermedia 是什么？
- 为什么要尽量遵循 RESTful 的设计？Convertion over Configuration。

### Ajax

### HTTPs

## DNS

- 跨域请求

## Browser

### Chrome devtools

- Firebug 哪里去了？
