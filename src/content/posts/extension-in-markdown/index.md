---
title: 补充的Markdown语法
published: 2024-07-14
description: "如何使用Markdown"
image: ""
tags: ["Markdown"]
category: 技能
draft: false
---

## 数学公式
本网站使用了 [KaTeX](https://katex.org/) 作为公式渲染引擎，语法学习可以参考官方 [文档](https://katex.org/docs/supported) 。

在Markdown中，可以利用`$`插入公式。  
* 如果公式在段落内部，用一个`$`括起来来表示，如下所示。
    ```latex
    牛顿第二定律为：$F=ma$
    ```
    如牛顿第二定律为：$F=ma$。 
* 如果公式单独一行，使用两个`$$`括起来表示，如下所示。
    ```latex
    爱因斯坦的质能方程为：
    $$
    E=mc^2
    $$
    ```
    爱因斯坦的质能方程为：
    $$
    E=mc^2
    $$

## GitHub仓库卡片
本网站可以显示一个GitHub仓库的卡片，代码和效果如下所示。
```markdown
::github{repo="Motues/GMS"}
```
::github{repo="Motues/GMS"}

## 提示卡片
可以使用`:::note`、`:::tip`、`:::warning`、`:::important`、`:::caution`等标签来显示提示卡片，代码和效果如下所示。
```markdown
:::note[提示]
这是一个提示。
:::
```
:::note[提示]
这是一个提示。
:::
:::tip
这是一个建议。
:::
:::warning
这是一个警告。
:::
:::important
这是一个重要事项。
:::
:::caution
这是一个注意事项。
:::

## 视频卡片
可以使用`<iframe>`标签插入视频，代码和效果如下所示。
```html
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=112823891921963&bvid=BV1n281ePEd9&cid=500001622491427&p=1" scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="468"></iframe>
```
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=112823891921963&bvid=BV1n281ePEd9&cid=500001622491427&p=1" scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="468"></iframe>


