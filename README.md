# 理解现代前端

> You cannot understand what is happening today without understanding what
> came before.
>
> --- Steve Jobs

1980-1990 年，在 CERN（欧洲核子研究中心）工作的 Tim Berners-Lee 博士，为了使 CERN
的研究人员更方便地使用和共享文档，发明了 HTML 和 HTTP。

HTML 的首个公开描述只有描述 18 个元素。

HTTP 协议的第一个 RFC，HTTP/0.9，只定义了一个只有 GET 方法。

1994-1996 年左右，CSS 1.0 发布。

1995 年 5 月，Brendan Eich 花了十天的时间，设计出了 JavaScript。

HTML/CSS/JavaScript，前端三大件，似乎每一件的诞生都没有什么预定的章法。10 年前，世面上似乎
也没有特别正式和专业的前端岗——如果有，基本上也是切图仔——怎么忽然到了 10 年后，前端的发展就一日
千里，“洞中方一日，世上已千年”——了呢？

> “每18个月~24个月，前端都会难一倍”
>
> --- 前端摩尔定律

在互联网开发的岗位序列中，前端岗是最不受待见的一个，因为，坦白的讲，10 年前前端的领域知识太浅，
护城河太浅，任何一个优秀的后端工程师，如果他愿意，都可以花上一两个月的时间，转变成一个初级的前端
工程师，但是反过来就不行啦。

然而时移世易，三十年河东河西，世道变了。前端的学习入门难度陡增，再也不是随便拉过来一个程序员摆弄
摆弄就可以上手的了。

我最开始自己尝试做产品，涉及前端的部分就套诸如 bootstrap 之类的框架，简单需求还好，稍复杂一点
的设计和想法，改来改去，总是不顺手不合心意，那感觉就像是写文章，反反复复斟酌，最终却总是辞不达意。
于是就下了点决心，深入了解下现代前端体系，没想到跳入了神坑，差点爬不出来了。花了两三年的时间，
做了几百个页面后，总算是有了一点自信和心得。

因此我很了解，当一个人，学了一点初级的编程，学完了传统的 HTML/CSS，学了一点点的 JavaScript，
再想往上深入一层，那种面对一堆概念，无所适从的迷茫感和焦虑感。这也是我决定写这个教程的原因——我
要对自己这两三年的学习作个总结，对于遗漏的概念加深下理解，同时如果能够帮助到一些人的话，那就再
好不过了。

我有一个理念——学习一个学科的历史，是很好的掌握和理解这个学科的方法。因为在这篇教程中，我假定读者
已经掌握了基本的 HTML/CSS/JavaScript 知识，这方面我不再啰嗦——因为这方面的资料实在太多，我就
不再多些一举了。我要写的是：

- HTTP/0.9，只有一个 `GET` 方法，怎么就成了互联网上最重要的基础协议了？
- RESTful 到底是怎么回事？什么是 hypermedia？hyper 是什么意思？hypermedia 和 HTML 中的
  hyperlink 有什么联系？
- JavaScript 的构建工具链为何如此复杂？ES6 的 `import` 和 Node.js 的 `require` 有何区别？
- CSS 预处理器是什么？CSS in JS 解决了什么问题？

诸如此类的知识，如果你不去思考 why，只学 how，那么你的知识终究是零散的，不成体系。而我要重点写的，
就是这个 why。

我列了下大纲，罗列了下我现在能想到的问题，这些问题我已经想得比较明白，自信也能写
得比较好。如果你有什么想了解但不在这个大纲中的，你可以在[这
里](https://github.com/xiaohanyu/understanding-modern-frontend/issues)提Issue。

我可能会花 6-12 个月的时间一篇一篇地将这些 topic 写完整，现在只是个草稿，post 出
来，只是给自己立个 flag 吧……这样应该能避免自己弃坑不填？希望这个文档的质量通到达
到[这篇](http://ppresume.com/notes/guide-zh.html)的标准。

如果我支持我的工作，可以给我的支付宝转些钱，金额随意。我的支付宝账户就是我的 gmail 邮箱。

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

### 前端性能优化

## Ref
- https://frontendmasters.com/books/front-end-handbook/2018/learning/dns.html
- https://github.com/dexteryy/spellbook-of-modern-webdev
