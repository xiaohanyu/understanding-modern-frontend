# 标记语言

[[toc]]

## 标记

HTML（英语：**H**yper**T**ext **M**arkup **L**anguage），汉译为超文本标记语言。从定义上看，HTML 首先是一种[标记语言](https://en.wikipedia.org/wiki/Markup_language)。

标记语言，顾名思义，就是加了标记的语言。 标记语言最早用于出版业，是作者、编辑以及出版商之间用于描述作品的排版格式使用的。

如果说文字是信息的一种载体，那么带了格式的文字，就是这种载体的一种变体了。同一份文字不同的格式，会传达出不同的情感。

在最早的出版流程中，作者将文字手稿交给编辑，编辑审阅，通过一些标记作出一些文字及格式上的订正，之后定稿交托出版商付印发行。

<p style="text-align: center">
<img src="./asset/images/proofreaders-marks.png" alt="Proofreader's marks"/>
</p>

<p style="text-align: center">
<img src="./asset/images/marked-proofs.png" alt="Marked proofs" />
</p>

对于口语来说，不同的声调可以表达不同的情感。对于书面语来说，不同的格式，标点，亦可以传达不同的情感。而格式的表达则主要是通过标记来实现的。

对于下面的一段文字：

> When you don't create things, you become *defined* by your tastes rather than
> ability. Your tastes only narrow & exclude people. **So create**.
>
> --- why_the_lucky_stiff

用 HTML 代码来表示：

```html
<p>
When you don't create things, you become <em>defined</em> by your tastes
rather than ability. Your tastes only narrow &amp; exclude people.
<strong>So create</strong>.
</p>

<p>— why_the_lucky_stiff</p>
```

用 Markdown 代码表示：

```markdown
When you don't create things, you become *defined* by your tastes rather than
ability. Your tastes only narrow & exclude people. **So create**.

— why_the_lucky_stiff
```

用TeX 代码表示：

```tex
When you don't create things, you become \textit{defined} by your tastes rather than
ability. Your tastes only narrow & exclude people. \textbf{So create}.

— why_the_lucky_stiff
```

## 链接

传统的链接只能链接本地的文档

## 超链接

超链接可以链接远程的文档

Hyperlink

https://en.wikipedia.org/wiki/Hypercube

<p style="text-align: center">
<img src="./asset/images/emacs-texinfo.png" alt="Emacs Texinfo" />
</p>