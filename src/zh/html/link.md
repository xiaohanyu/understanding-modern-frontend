# 链接

[[toc]]

高树靡阴，独木不林。

严肃的写作出版都要引用各种参考资料。引用可以分为内部引用和外部引用。内部引用是引用本文献内的内容，典型的使用场景包括目录（[Table of Contents](https://en.wikipedia.org/wiki/Table_of_contents)）、脚注（[Footnote](https://en.wikipedia.org/wiki/Note_(typography))）、尾注（[Endnote](https://en.wikipedia.org/wiki/Note_(typography))）、索引（[Index](https://en.wikipedia.org/wiki/Index_(publishing))），术语表（[Glossary](https://en.wikipedia.org/wiki/Glossary)）等。外部引用，引用的自然是本文献之外的内容，其主要的使用场景是参考文献（[Bibliography](https://en.wikipedia.org/wiki/Bibliography)）。

在万维网诞生之前，如果你读一本书，看到书中引用了一个参考文献，这时如果你想去进一步去阅读下这篇参考文献，你怎么办？通常的做法是去当地较大的图书馆，去查询借阅，还要期望图书馆收录了这篇参考文献；当然，如果你不差钱的话，也可以花钱把相应的参考文献买下来。

一个有趣的事实是，即使我们已经身处数字时代，一些国际上的标准化组织依然在售卖纸质版的标准文档，而且这部分收入构成了这些标准化组织的部分营收。比如，下图是国际标准化组织（ISO）在售卖的 [Food safety management systems — Requirements for any organization in the food chain](https://www.iso.org/standard/65464.html)，其售价为 158 瑞士法郎，折合人民币约 1106 元。

<p style="text-align: center">
<img src="./asset/images/iso-is-selling-standards-paper.png" alt="ISO is selling standards paper"/>
</p>

传统出版中的引用，本质上是文献之间的单向链接。到了数字时代，结合传统引用与数字技术，诞生了超链接。

超链接技术将抽象的引用具象化为浏览器窗口里一个个可点击的链接，让图书管内漫长的查阅过程变成了手指尖清脆的鼠标点击声。

## 内部引用

如前文所述，引用可分为内部引用和外部引用。目录、脚注、尾注、索引都是一种内部引用。参考文献则是最常见的外部引用。

### 目录

相较而言，目录是比较容易维护和制作的内部引用。目录的制作主要依赖于章节标题及相应的页码。因此在手稿基本完成之后，就可以着手制作目录。

目录大体上可以分为三种：
- 章节目录
- 表格目录
- 图片目录

大部分书籍都会提供章节目录，部分书籍还会提供图表目录（List of Figures/Tables）。

常见的字处理软件都支持自动生成章节目录、表格目录和图片目录。
- 在 Microsoft Word 中，可以通过“引用”选项卡来[插入目录](https://support.microsoft.com/zh-cn/office/%E6%8F%92%E5%85%A5%E7%9B%AE%E5%BD%95-882e8564-0edb-435e-84b5-1d8552ccf0c0#PickTab=Windows)或[插入图表目录](https://support.microsoft.com/zh-cn/office/%E6%8F%92%E5%85%A5%E5%9B%BE%E8%A1%A8%E7%9B%AE%E5%BD%95-c5ea59c5-487c-4fb2-bd48-e34dd57f0ec1)。
- 在 LaTeX 中，可以直接通过 `\tableofcontents` [生成目录](https://en.wikibooks.org/wiki/LaTeX/Tables_of_Contents_and_Lists_of_Figures)，通过 `\listoftables` 和 `\listoffigures` 生成表格目录及图片目录。

### 脚注和尾注

脚注是对当前页面中内容的补充说明，是另一种比较容易维护的内部引用。通常情况下，脚注显示在页面的底部，其作用范围限于单页，并不需要考虑跨越页面章节的链接关系。排版规范上，页内的脚注有版面篇幅的限制——脚注占用版面空间不能过大，否则有喧宾夺主之嫌。

尾注一般出现在文档或章节内容的末尾，或对正文做出补充说明，或列出一些引用的出处。尾注与其注解的内容相距较远，其版面空间也没有限制。

常见的字处理软件都提供对脚注和尾注的支持。
- 在 Microsoft Word 中，可以通过“引用”选项卡来[插入脚注和尾注](https://support.microsoft.com/zh-cn/office/%E4%BD%BF%E7%94%A8%E8%84%9A%E6%B3%A8%E5%92%8C%E5%B0%BE%E6%B3%A8-61f3fb1a-4717-414c-9a8f-015a5f3ff4cb)。
- 在 LaTeX 中，可以直接通过 `\footnote{text}` 在正文中[插入脚注](https://en.wikibooks.org/wiki/LaTeX/Footnotes_and_Margin_Notes)，文档经 LaTeX 编译后会自动在生成的页面底部显示相应的脚注。
  - LaTeX 没有直接插入尾注的指令，但是可以通过一些第三方的包如 [enotez](https://ctan.org/pkg/enotez?lang=en) 来插入尾注。

### 索引

索引，是一本书籍的重要组成部分，它将书中的重要名词罗列出来，并配以相应的页码，方便读者快速查找该名词的定义。

索引的编制是一件耗时耗力的工作。

> **Who should index a work?** The ideal indexer sees the work as a whole,
> understands the emphasis of the various parts and their relation to the whole,
> and knows---or guesses---what readers of the particular work are likely to
> look for and what headings they will think of. The indexer should be widely
> read, scrupulous in handling detail, analytically minded, well acquainted with
> publishing practices, and capable of meeting almost impossible deadlines.
> Although authors know better than anyone else their subject matter and the
> audience to whom the work is addressed, not all can look at theirwork through
> the eyes of a potential reader. Nor do many authors have the technical skills,
> let alone the time, necessary to prepare a good index that meets the
> publisher's deadline. Some authors produce excellent indexes. Others would do
> better to enlist the aid of a professional indexer.
>
> --- Page 812, Chapter 16, The Chicago Manual of Style

事实上，出版行业内有专门的索引员（Indexer）岗位。美国有一个美国索引协会[American Society for Indexing (ASI)](https://www.asindexing.org/)，其原名是 American Society of Indexers，1968 年在纽约成立，目的是促进卓越的索引编制并提高人们对精心编制和设计的索引的价值的认识。

根据 ASI 的[资料](美国索引协会（ASI）是一个成立于1968年的全国性协会，旨在促进卓越的索引编制并提高人们对精心编写和精心设计的索引的价值的认识。)，专业的索引编制费用大概是 2.5--4.0 美金/页。

编制书籍索引时，首先要通读书籍内容，熟悉书籍结构，然后选择合适的关键词，最后再建立一级甚至二级索引。

常见的字处理软件对索引的编制都提供了良好的支持。
- 在 Microsoft Word 中，可以通过“引用”选项卡来[创建和更新索引](https://support.microsoft.com/zh-cn/office/%E5%88%9B%E5%BB%BA%E5%92%8C%E6%9B%B4%E6%96%B0%E7%B4%A2%E5%BC%95-cc502c71-a605-41fd-9a02-cda9d14bf073)。
- 在 LaTeX 中，可以通过 [makeidx](https://en.wikibooks.org/wiki/LaTeX/Indexing) 包来创建并自动生成索引。

## 外部引用

### 参考文献

参考文献（References）是书籍中最常见的一种外部引用。
传统出版流程中，维护参考文献是一件非常繁琐且耗时的工作。[The Chicogo Manual of Style](https://www.chicagomanualofstyle.org/home.html) 中，整个第三部分三章两百多页的篇幅，都在论述如何创建并维护出版物的中的参考文献。这里面包含了海量的规范细节。

首先，文献资料有多种分类：
- 书籍
- 期刊
- 杂志
- 报纸
- 评论
- 网站
- 博客
- 字典
- 百科全书
- 乐谱
- 学位论文
- 采访记录
- 音视频资料
- 法庭判例
- 等

对不同各类的文献资料有不同的引用格式。通常来说，除了要标明相应的章节页数，对经典书籍的引用，一般还要标明引用了该书籍的第几版，甚至还要标明其出版社的地理和年代信息。

其次，对于作者的名字，又有多种规定。比如说，有的作者发表作品时会用本名，但有的作者发表作品时会用笔名，有的作品是匿名发表的。有的作品是多人合著的。

再者，不同的文献资料有不同的权重，而影响这种权重的最重要的因素是这种文献资料是否稳定可靠。比如，权威的书籍、期刊中的资料肯定比普通的网络上的 URL 要稳定的多。URL 最大的问题在于其非常不稳定，指不定什么时候，被引用的 URL 就由于种种原因转移甚至消失不见了。数字时代，针对 URL 易失这个问题，国际标准化组织（ISO）提出了数字对象标识符（Digital Object Identifier，简称 [DOI](https://www.doi.org/)）这种解决方案。

关于参考文献的种种细节规范，其最终目的是要准确唯一地定位被引用的文献资料。

下图是经典书籍 [Structure and Interpretation of Computer Programs](https://github.com/sarabander/sicp-pdf) 的部分参考文献：

<p style="text-align: center">
<img src="./asset/images/sicp-834.png" alt="SICP Reference"/>
</p>

一如既往，常见的字处理软件也提供了对参考文献的支持，但其操作步骤要复杂得多，主要原因在于参考文献是一种外部引用，这就会涉及到数据源的管理。

- 在 Microsoft Word 中可以通过引用选项卡来[添加引文](https://support.microsoft.com/zh-cn/office/%E5%9C%A8-word-%E6%96%87%E6%A1%A3%E4%B8%AD%E6%B7%BB%E5%8A%A0%E5%BC%95%E6%96%87-ab9322bb-a8d3-47f4-80c8-63c06779f127)，但相较于前文所述的各种内部引用而言，这里还涉及到[源的管理](https://support.microsoft.com/zh-cn/office/%E5%9C%A8-word-%E6%96%87%E6%A1%A3%E4%B8%AD%E6%B7%BB%E5%8A%A0%E5%BC%95%E6%96%87-ab9322bb-a8d3-47f4-80c8-63c06779f127#bkmk_editsource)。
- LaTeX 通过专门的 [BibTeX](http://www.bibtex.org/) 来引用管理文献。

市面上还有专门用于引用管理文献的软件，如 [Endnote](https://endnote.com/)、[JabRef](https://www.jabref.org/) 等。

啰啰嗦嗦了这么多，主要还是想抛砖引玉，通过传统出版中引用这个概念，引出我们后面所要论述的数字时代的超链接技术。我们会看到，超链接这种技术是怎样把学术出版中阳春白雪的引用，变成普罗大众手指尖的轻轻一点。那么，后文见！