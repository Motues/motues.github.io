---
title: KaTex语法
published: 2024-07-24
description: "KaTex入门语法"
image: ""
tags: ["Markdown", "KaTex", "LaTeX"]
category: 技能
draft: false
---
:::important[重要的事情]
目前仍在搬运，预计在暑假结束完成基本语法的内容。
:::

## 0 Katex简介
根据 [官网](https://katex.org/) 的介绍，$\KaTeX$是一个快速、易用的 JavaScript 库，用于在网络上渲染$\TeX$数学图像。其语法与$\LaTeX$类似，对于熟悉$\LaTeX$的用户来说，使用起来非常简单。

## 1 声调记号
| 第一列 | 第二列 | 第三列 |
|:---|:---|:---|
| $a'$ `a'` | $\tilde{a}$ `\tilde{a}` | $\mathring{g}$ `\mathring{g}` |
| $a''$ `a''` | $\widetilde{ac}$ `\widetilde{ac}` | $\overgroup{AB}$ `\overgroup{AB}` |
| $a^{\prime}$ `a^{\prime}` | $\utilde{AB}$ `\utilde{AB}` | $\utilde{AB}$ `\utilde{AB}` |
| $\acute{a}$ `\acute{a}` | $\vec{F}$ `\vec{F}` | $\Overrightarrow{AB}$ `\Overrightarrow{AB}` |
| $\bar{y}$ `\bar{y}` | $\overleftarrow{AB}$ `\overleftarrow{AB}` | $\overrightarrow{AB}$ `\overrightarrow{AB}` |
| $\breve{a}$ `\breve{a}` | $\underleftarrow{AB}$ `\underleftarrow{AB}` | $\underrightarrow{AB}$ `\underrightarrow{AB}` |
| $\check{a}$ `\check{a}` | $\overleftharpoon{ac}$ `\overleftharpoon{ac}` | $\overrightharpoon{ac}$ `\overrightharpoon{ac}` |
| $\dot{a}$ `\dot{a}` | $\overleftrightarrow{AB}$ `\overleftrightarrow{AB}` | $\overbrace{AB}$ `\overbrace{AB}` |
| $\ddot{a}$ `\ddot{a}` | $\underleftrightarrow{AB}$ `\underleftrightarrow{AB}` | $\underbrace{AB}$ `\underbrace{AB}` |
| $\grave{a}$ `\grave{a}` | $\overline{AB}$ `\overline{AB}` | $\overlinesegment{AB}$ `\overlinesegment{AB}` |
| $\hat{\theta}$ `\hat{\theta}` | $\underline{AB}$ `\underline{AB}` | $\underlinesegment{AB}$ `\underlinesegment{AB}` |
| $\widehat{ac}$ `\widehat{ac}` | $\widecheck{ac}$ `\widecheck{ac}` | $\underbar{X}$ `\underbar{X}` |

还有一些功能可以放在`\text{}`内使用
| 第一列 | 第二列 | 第三列 | 第四列 |
|:---|:---|:---|:---|
| $\text{\'{a}}$ `\'{a}` | $\text{\~{a}}$ `\~{a}` | $\text{\.{a}}$ `\.{a}` | $\text{\H{a}}$ `\H{a}` |
| $\text{\`{a}}$ ```\`{a}``` | $\text{\={a}}$ `\={a}` | $\text{\"{a}}$ `\"{a}` | $\text{\v{a}}$ `\v{a}` |
| $\text{\^{a}}$ `\^{a}` | $\text{\u{a}}$ `\u{a}` | $\text{\r{a}}$ `\r{a}` |  |

## 2 界定符（括号、箭头）
| 第一列 | 第二列 | 第三列 | 第四列 | 第五列 |
|:---|:---|:---|:---|:---|
| $( )$ `( )` | $\lparen \rparen$ `\lparen \rparen` | $⌈ ⌉$ `⌈  ⌉` | $\lceil \rceil$ `\lceil rceil` | $\uparrow$ `\uparrow` |
| $[ ]$ `[ ]` | $\lbrack \rbrack$ `\lbrack \rbrack` | $⌊ ⌋$ `⌊  ⌋` | $\lfloor \rfloor$ `\lfloor \rfloor` | $\downarrow$ `\downarrow` |
| $\{ \}$ `\{ \}` | $\lbrace \rbrace$ `\lbrace \rbrace` | $⎰ ⎱$ `⎰ ⎱` | $\lmoustache \rmoustache$ `\lmoustache \rmoustache` | $\updownarrow$ `\updownarrow` | 
| $⟨ ⟩$ `⟨ ⟩` | $\langle \rangle$ `\langle \rangle` | $⟮ ⟯$ `⟮ ⟯` | $\lgroup \rgroup$ `\lgroup \rgroup` | $\Uparrow$ `\Uparrow` | 
| \| `\|` | $\vert$ `\vert` | $┌ ┐$ `┌ ┐` | $\ulcorner \urcorner$ `\ulcorner \urcorner` | $\Downarrow$ `\Downarrow` | 
| $\|$ `\ \|` | $\Vert$ `\Vert` | $└ ┘$ `└ ┘` | $\llcorner \lrcorner$ `\llcorner \lrcorner` | $\Updownarrow$ `\Updownarrow` | 
| $\lvert \rvert$ `\lvert \rvert` | $\lVert \rVert$ `\lVert \rVert` | `\left.` |  `\right.`$^{[1]}$ | $\backslash$ `\backslash` | 
| $\lang \rang$ `\lang \rang` | $\lt \gt$ `\lt \gt` | $⟦ ⟧$ `⟦ ⟧` | $\llbracket \rrbracket$ `\llbracket \rrbracket` | $\lBrace \rBrace$ `\lBrace \rBrace` | 

`[1]` 不知道这两个是干嘛的😵

| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 
| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 
| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 
| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 




$$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | $$ `` |





$$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |





