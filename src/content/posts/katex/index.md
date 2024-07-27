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
| $\lvert \rvert$ `\lvert \rvert` | $\lVert \rVert$ `\lVert \rVert` | `\left.` |  `\right.` | $\backslash$ `\backslash` | 
| $\lang \rang$ `\lang \rang` | $\lt \gt$ `\lt \gt` | $⟦ ⟧$ `⟦ ⟧` | $\llbracket \rrbracket$ `\llbracket \rrbracket` | $\lBrace \rBrace$ `\lBrace \rBrace` | 

### 界定符大小
| 第一列 | 第二列 | 第三列 | 第四列 | 第五列 |
|:---|:---|:---|:---|:---| 
| `left` | `\big` | `\bigl` | `\bigm` | `\bigr` |
| `\middle` | `\Big` | `\Bigl` | `\Bigm` | `\Bigr` |
| `\right` | `\bigg` | `\biggl` | `\biggm` | `\biggr` |
|   | `\Big` | `\Bigl` | `\Bigm` | `\Bigr` |

> `\left`, `\right`, 和 `\middle` 是用来创建可伸缩的括号或其它包围符的命令，`\left` 和 `\right` 必须成对出现，它们会根据它们之间的内容自动调整大小；`\middle` 通常与 `\left` 和 `\right` 结合使用，它用于在括号之间插入额外的符号，如下所示。  
$\left(\LARGE{AB}\right)$  `\left(\LARGE{AB}\right)`  
$( \big( \Big( \bigg( \Bigg($  `( \big( \Big( \bigg( \Bigg(`  

## 3 环境

| 第一列 | 第二列 | 第三列 | 第四列 |
| :----------- | :----------- | :----------- | :----------- |
| $\begin{matrix}a & b \\c & d\end{matrix}$ | $\begin{aligned}&\tt \backslash begin\{matrix\} \\&\tt\quad  a \& b \backslash \backslash \\ &\tt\quad  c \& d \\&\tt \backslash end{matrix} \\\end{aligned}$ | $\begin{array}{cc}a & b \\c & d\end{array}$ | $\begin{aligned}&\tt \backslash begin\{array\}\{cc\}\\&\tt\quad a \& b \backslash \backslash\\&\tt\quad c \& d\\&\tt \backslash end\{array\}\\\end{aligned}$ |
| $\begin{pmatrix}a & b \\c & d\end{pmatrix}$ | $\begin{aligned}&\tt\backslash begin\{pmatrix\}\\&\tt\quad a \& b \backslash \backslash \\&\tt\quad c \& d\\&\tt\backslash end\{pmatrix\}\\\end{aligned}$ | $\begin{bmatrix}a & b \\c & d\end{bmatrix}$ | $\begin{aligned}&\tt\backslash begin\{bmatrix\} \\&\tt\quad a \& b \backslash \backslash  \\&\tt\quad c \& d \\&\tt\backslash end\{bmatrix\} \\\end{aligned}$ |
| $\begin{vmatrix}a & b \\c & d\end{vmatrix}$ | $\begin{aligned}&\tt\backslash begin\{vmatrix\}\\&\tt\quad a \& b \backslash \backslash \\&\tt\quad c \ d\\&\tt\backslash end\{vmatrix\}\\\end{aligned}$ | $\begin{Vmatrix}a & b \\c & d\end{Vmatrix}$ | $\begin{aligned}&\tt\backslash begin\{Vmatrix\}\\&\tt\quad a \& b \backslash \backslash \\&\tt\quad c \ d\\&\tt\backslash end\{Vmatrix\}\\\end{aligned}$ |
| $\begin{Bmatrix}a & b \\c & d\end{Bmatrix}$ | $\begin{aligned}&\tt\backslash begin\{Bmatrix\}\\&\tt\quad a \& b \backslash \backslash \\&\tt\quad c \ d\\&\tt\backslash end\{Bmatrix\}\\\end{aligned}$ | $\def\arraystretch{1.5} \begin{array}{c:c:c} a & b & c \\ \hline d & e & f \\\hdashline g & h & i\end{array}$ | $\begin{aligned}&\tt\backslash def\backslash arraystretch\{1.5\}\\&\tt\quad \backslash begin\{array\}\{c:c:c\}\\&\tt\quad a \& b \& c \backslash\backslash \backslash hline\\&\tt\quad d \& e \& f \backslash \backslash\\&\tt\quad \backslash hdashline\\&\tt\quad g \& h \& i\\&\tt\backslash end\{array\}\end{aligned}$ |
| $\begin{aligned}a&=b+c \\d+e&=f\end{aligned}$ | $\begin{aligned}&\tt\backslash \{aligned\}\\&\tt\quad a\&=b+c \backslash \backslash \\&\tt\quad d+e\&=f\\&\tt\backslash end\{aligned\}\\\end{aligned}$ | $\begin{alignedat}{2}10&x+ &3&y = 2 \\3&x+&13&y = 4\end{alignedat}$ | $\begin{aligned}&\tt\backslash begin\{alignedat\}\{2\}\\&\tt\quad 10\&x+ \&3\&y = 2 \backslash \backslash \\&\tt\quad 3\&x+\&13\&y = 4\\&\tt\backslash end\{alignedat\}\\\end{aligned}$ |
| $\begin{gathered}a=b \\e=b+c\end{gathered}$ | $\begin{aligned}&\tt\backslash begin\{gathered\}\\&\tt\quad a=b \backslash\backslash\\&\tt\quad e=b+c\\&\tt\backslash end\{gathered\}\\\end{aligned}$ | $x = \begin{cases}a &\text{if } b \\c &\text{if } d\end{cases}$ | $\begin{aligned}&\tt x = \backslash begin\{cases\} \\&\tt\quad a \&\text\{if \} b \backslash\backslash \\&\tt\quad c \&\text\{if \} d\\&\tt\backslash end{cases}\\\end{aligned}$ |

## 4 字母和符号

### 希腊字母
直接输出：  
$\Alpha \Beta \Gamma \Delta \Epsilon \Zeta \Eta \Theta \Iota \Kappa \Lambda \Mu \Nu \Xi \Omicron \Pi \Rho \Sigma \Tau \Upsilon \Chi \Phi \Psi \Omega$  
$\alpha	\beta \gamma \delta \epsilon \zeta \eta \theta \iota \kappa \lambda	\mu \nu	\xi	\omicron \pi \rho \sigma \tau \upsilon \phi \chi \psi \omega \varepsilon \varkappa  \vartheta \varpi \varrho \varsigma \varphi  \digamma$  
| 第一列 | 第二列 | 第三列 | 第四列 | 第五列 |
| :---- | :---- | :----- | :---- | :---- |
| $\Alpha$ `\Alpha` | $\Beta$ `\Beta` | $\Gamma$ `\Gamma` | $\Delta$ `\Delta` | $\Epsilon$ `\Epsilon` |
| $\Zeta$ `\Zeta` | $\Eta$ `\Eta` | $\Theta$ `\Theta` | $\Iota$ `\Iota` | $\Kappa$ `\Kappa` |
| $\Lambda$ `\Lambda` | $\Mu$ `\Mu` | $\Nu$ `\Nu` | $\Xi$ `\Xi` | $\Omicron$ `\Omicron` |
| $\Pi$ `\Pi` | $\Rho$ `\Rho` | $\Sigma$ `\Sigma` | $\Tau$ `\Tau`| $\Upsilon$ `\Upsilon` | 
|$\Chi$ `\Chi` | $\Psi$ `\Psi` | $\Omega$ `\Omega` | $\varDelta$ `\varDelta` | $\varOmega$ `\varOmega` |
| $\alpha$ `\alpha` | $\beta$ `\beta` | $\gamma$ `\gamma` | $\delta$ `\delta` | $\epsilon$ `\epsilon` |
| $\zeta$ `\zeta` | $\eta$ `\eta` | $\theta$ `\theta` | $\iota$ `\iota` | $\kappa$ `\kappa` |
| $\lambda$ `\lambda` | $\mu$ `\mu` | $\nu$ `\nu` | $\xi$ `\xi` | $\omicron$ `\omicron` |
| $\pi$ `\pi` | $\rho$ `\rho` | $\sigma$ `\sigma` | $\tau$ `\tau` | $\upsilon$ `\upsilon` |
| $\phi$ `\phi` | $\chi$ `\chi` | $\psi$ `\psi` | $\omega$ `\omega` | $\varepsilon$ `\varepsilon` |
| $\varkappa$ `\varkappa` | $\vartheta$ `\vartheta` | $\thetasym$ `\thetasym` | $\varpi$ `\varpi` | $\varrho$ `\varrho` |
| $\varsigma$ `\varsigma` | $\varphi$ `\varphi` | $\digamma$ `\digamma` | | |

### 其他字母

| 第一列 | 第二列 | 第三列 | 第四列 | 第五列 |
| :---- | :---- | :----- | :---- | :---- |
| $\imath$ `\imath` | $\nabla$ `\nabla` | $\Im$ `\Im` | $\Reals$ `\Reals` | $\text{\OE}$ `\text{\OE}` |
| $\jmath$ `\jmath` | $\partial$ `\partial` | $\image$ `\image` | $\wp$ `\wp` | $\text{\o}$ `\text{\o}` |
| $\aleph$ `\aleph` | $\Game$ `\Game` | $\Bbbk$ `\Bbbk` | $\weierp$ `\weierp` | $\text{\O}$ `\text{\O}` |
| $\alef$ `\alef` | $\Finv$ `\Finv` | $\N$ `\N` | $\Z$ `\Z` | $\text{\ss}$ `\text{\ss}` |
| $\alefsym$ `\alefsym` | $\cnums$ `\cnums` | $\natnums$ `\natnums` | $\text{\aa}$ `\text{\aa}` | $\text{\i}$ `\text{\i}` |
| $\beth$ `\beth` | $\Complex$ `\Complex` | $\R$ `\R` | $\AA$ `\AA` | $\text{\j}$ `\text{\j}` |
| $\gimel$ `\gimel` | $\ell$ `\ell` | $\Re$ `\Re` | $\text{\ae}$ `\text{\ae}` | |
| $\daleth$ `\daleth` | $\hbar$ `\hbar` | $\real$ `\real` | $\text{\AE}$ `\text{\AE}` | |
| $\eth$ `\eth` | $\hslash$ `\hslash` | $\reals$ `\reals` | $\text{\oe}$ `\text{\oe}` | |

### 字体
| 字段 | 支持的字符 | 字段 | 支持的字符 |
| :----------- | :----------- | :----------- | :----------- |
| 粗体 | $\textbf{A-Z,a-z,0-9}$ | 双线体 | $\Bbb{A-Z,k}$ |
| 意大利斜体 | $\textit{A-Z,a-z}$ | 无衬线字体 | $\textsf{A-Z,a-z,0-9}$ |
| 粗意大利斜体 | $\textbf{\textit{A-Z,a-z}}$ | 粗体无衬线 | $\textsf{\textbf{A-Z,a-z,0-9}}$ |
| 手写体 | $\mathscr{A-Z}$ | 斜体无衬线 | $\textsf{\textit{A-Z,a-z }}$ |
| 花体 | $\frak{A-Z,a-z}$ | 打字机字体 | $\texttt{A-Z,a-z,0-9}$ |

## 布局
### 注解
| 第一列 | 第二列 |
| :---- | :---- |
| $\cancel{5}$ `\cancel{5}` | $\overbrace{a+b+c}^{\text{note}}$ `\overbrace{a+b+c}^{\text{note}}` |
| $\bcancel{5}$ `\bcancel{5}` | $\underbrace{a+b+c}_{\text{note}}$ `\underbrace{a+b+c}_{\text{note}}` |
| $\xcancel{ABC}$ `\xcancel{ABC}` | $\not =$ `\not =` |
| $\sout{abc}$ `\sout{abc}` | $\boxed{\pi=\frac c d}$ `\boxed{\pi=\frac c d}` |
| $a_{\angl n}$ `$a_{\angl n}` | $\phase{-78^\circ}$ `\phase{-78^\circ}` |

`\tag{hi} x+y^{2x}`
$$
\tag{hi} x+y^{2x}
$$
`\tag*{hi} x+y^{2x}`
$$
\tag*{hi} x+y^{2x}
$$

### 换行
$\KaTeX$ 0.10.0之后会在关系式或二元运算符（如"="或 "+"）之后的内联数学中自动插入换行符。可以通过 `\nobreak` 或将数学放在一对大括号内，如 `{F=ma}` 来抑制这种情况。`\allowbreak` 允许在关系或运算符以外的位置自动换行。硬换行符是`\\`和 `\newline`。在显示数学中，$\KaTeX$ 不会插入自动换行符。当渲染选项为 `strict: true` 时，它会忽略显示数学的硬换行符。

### 垂直布局
| 第一列 | 第二列 | 第三列 |
| :---- | :---- | :---- |
| $x_n$ `x_n` | $\stackrel{!}{=}$ `\stackrel{!}{=}` | $a \atop b$ `a \atop b` |
| $e^x$ `e^x` | $\overset{!}{=}$ `\overset{!}{=}` | $$a\raisebox{0.25em}{$b$}c$$ `a\raisebox{0.25em}{$b$}c` |
| $_u^o$ `_u^o` | $\underset{!}{=}$ `\underset{!}{=}` | $$a+\left(\vcenter{\hbox{$\frac{\frac a b}c$}}\right)$$ `a+\left(\vcenter{\hbox{$\frac{\frac a b}c$}}\right)` |

`\sum_{\substack{0<i<m\\0<j<n}}`  
$$
\sum_{\substack{0<i<m\\0<j<n}}
$$

### 重叠和间距
| 第一列 | 第二列 |
| :---- | :---- |
| ${=}\mathllap{/\,}$ `{=}\mathllap{/\,}` | $\left(x^{\smash{2}}\right)$ `\left(x^{\smash{2}}\right)` |
| $\mathrlap{\,/}{=}$ `\mathrlap{\,/}{=}` | $\sqrt{\smash[b]{y}}$ `\sqrt{\smash[b]{y}}` |

`\sum_{\mathclap{1\le i\le j\le n}} x_{ij}`
$$
\sum_{\mathclap{1\le i\le j\le n}} x_{ij}
$$
$\KaTeX$ 还支持 `\llap`、`\rlap` 和 `\clap`，但它们只在文本中使用。  
> `\llap`, `\rlap`, 和 `\clap` 命令被用来创建水平重叠的文字或符号，一般用在需要控制字符或符号的水平对齐方式时。
> * `\llap{<text>}`: 使 <text> 左侧重叠，即文本不会占据任何水平空间，而是从当前位置向左“悬挂”出去。
> * `\rlap{<text>}`: 使 <text> 右侧重叠，文本从当前位置向右“悬挂”，也不会占据任何额外的空间。
> * `\clap{<text>}`: 使 <text> 在当前位置居中，但不会为文本分配任何宽度，从而实现一种“居中悬挂”的效果。
> 
比如以下的区别  
`\sum\limits_{1\le i\le j \le k \le n}i\times j \times k`
$$
\sum\limits_{1\le i\le j \le k \le n}i\times j \times k
$$  
`\sum\limits_{\mathclap{1\le i\le j \le k \le n}}i\times j \times k`  
$$
\sum\limits_{\mathclap{1\le i\le j \le k \le n}}i\times j \times k
$$  

### 间隔
| 指令 | 备注 | 指令 | 备注 |
| :----------- | :----------- | :----------- | :----------- |
| `\,` | $\frac{3}{18}$ $\rm em$ 的间距 | `\kern{distance}` | 宽度为`distance`的间距 |
| `\thinspace` | $\frac{3}{18}$ $\rm em$  的间距 | `\mkern{distance}` |  宽度为`distance`的间距 |
| `\>` | $\frac{4}{18}$ $\rm em$  的间距 | `\mskip{distance}` |  宽度为`distance`的间距 |
| `\:` | $\frac{4}{18}$ $\rm em$  的间距 | `\hskip{distance}` |  宽度为`distance`的间距 |
| `\medspace` | $\frac{4}{18}$ $\rm em$  的间距 | `\hspace{distance}` |  宽度为`distance`的间距 |
| `\;` | $\frac{5}{18}$ $\rm em$  间距 | `\hspace*{distance}` |  宽度为`distance`的间距 |
| `\thickspace` | $\frac{5}{18}$ $\rm em$  间距 | `\phantom{content}` |  长与高等于参数的间距 |
| `\enspace` | $\frac{1}{2}$ $\rm em$  间距 | `\hphantom{content}` |  高度等于参数的间距 |
| `\quad` | $1$ $\rm em$  间距 | `\vphantom{content}` | 高度等于参数的间距 |
| `\qquad` | $2$ $\rm em$  间距 | `\!` | – $\frac{3}{18}$ $\rm em$  间距 |
| `~` | 不换行间距 | `\negthinspace` | – $\frac{3}{18}$ $\rm em$  间距 |
| `\<space>` |  间距 | `\negmedspace` | – $\frac{4}{18}$ $\rm em$  间距 |
| `\nobreakspace` | 不换行间距 | `\negthickspace` | – $\frac{5}{18}$ $\rm em$  间距 |
| `\space` | 普通的空格 | `\mathstrut` | `\vphantom{(}`|

## 逻辑与集合符号
| 第一列 | 第二列 | 第三列 | 第四列 |
| :----------- | :----------- | :----------- | :----------- |
| $\forall$ `\forall` | $\complement$ `\complement` | $\therefore$ `\therefore` | $\emptyset$ `\emptyset` |
| $\exists$ `\exists` | $\subset$ `\subset` | $\because$ `\because` | $\empty$ `\empty` |
| $\exist$ `\exist` | $\supset$ `\supset` | $\mapsto$ `\mapsto` | $\varnothing$ `\varnothing` |
| $\nexists$ `\nexists` | $\mid$ `\mid` | $\to$ `\to` | $\implies$ `\implies` |
| $\in$ `\in` | $\land$ `\land` | $\gets$ `\gets` | $\impliedby$ `\impliedby` |
| $\isin$ `\isin` | $\lor$ `\lor` | $\leftrightarrow$ `\leftrightarrow` | $\iff$ `\iff` |
| $\notin$ `\notin` | $\ni$ `\ni` | $\notni$ `\notni` | $\neg$ `\neg` 或者 `\lnot` |

也可以直接输入：$∀∴∁∵∃∣∈∋⊂⊃∧∨↦→←↔¬ℂℍℕℙℚℝ$

## 宏定义
> 待补充

## 运算符
### 巨型运算符
| 第一列 | 第二列 | 第三列 | 第四列 |
| :----- | :----- | :----- | :---- |
| $\sum$ `\sum` | $\prod$ `\prod` | $\bigotimes$ `\bigotimes` | $\bigvee$ `\bigvee` |
| $\int$ `\int` | $\coprod$ `\coprod` | $\bigoplus$ `\bigoplus` | $\bigwedge$ `\bigwedge` |
| $\iint$ `\iint` | $\intop$ `\intop` | $\bigodot$ `\bigodot` | $\bigcap$ `\bigcap` |
| $\iiint$ `\iiint` | $\smallint$ `\smallint` | $\biguplus$ `\biguplus` | $\bigcup$ `\bigcup` |
| $\oint$ `\oint` | $\oiint$ `\oiint` | $\oiiint$ `\oiiint` | $\bigsqcup$ `\bigsqcup` |

也可以直接输入：$∫∬∭∮∏∐∑⋀⋁⋂⋃⨀⨁⨂⨄⨆∯∰$

### 二元运算符
| 第一列 | 第二列 | 第三列 | 第四列 |
| :---- | :---- | :---- | :---- |
| $+$ `+` | $\cdot$ `\cdot` | $\gtrdot$ `\gtrdot` | $x \pmod a$ `x \pmod a` |
| $-$ `-` | $\cdotp$ `\cdotp` | $\intercal$ `\intercal` | $x \pod a$ `x \pod a` |
| $/$ `/` | $\centerdot$ `\centerdot` | $\land$ `\land` | $\rhd$ `\rhd` |
| $*$ `*` | $\circ$ `\circ` | $\leftthreetimes$ `\leftthreetimes` | $\rightthreetimes$ `\rightthreetimes` |
| $\amalg$ `\amalg` | $\circledast$ `\circledast` | $\ldotp$ `\ldotp` | $\rtimes$ `\rtimes` |
| $\And$ `\And` | $\circledcirc$ `\circledcirc` | $\lor$ `\lor` | $\setminus$ `\setminus` |
| $\ast$ `\ast` | $\circleddash$ `\circleddash` | $\lessdot$ `\lessdot` | $\smallsetminus$ `\smallsetminus` |
| $\barwedge$ `\barwedge` | $\Cup$ `\Cup` | $\lhd$ `\lhd` | $\sqcap$ `\sqcap` |
| $\bigcirc$ `\bigcirc` | $\cup$ `\cup` | $\ltimes$ `\ltimes` | $\sqcup$ `\sqcup` |
| $\bmod$ `\bmod` | $\curlyvee$ `\curlyvee` | $x \mod a$ `x\mod a` | $\times$ `\times` |
| $\boxdot$ `\boxdot` | $\curlywedge$ `\curlywedge` | $\mp$ `\mp` | $\unlhd$ `\unlhd` |
| $\boxminus$ `\boxminus` | $\div$ `\div` | $\odot$ `\odot` | $\unrhd$ `\unrhd` |
| $\boxplus$ `\boxplus` | $\divideontimes$ `\divideontimes` | $\ominus$ `\ominus` | $\uplus$ `\uplus` |
| $\boxtimes$ `\boxtimes` | $\dotplus$ `\dotplus` | $\oplus$ `\oplus `| $\vee$ `\vee` |
| $\bullet$ `\bullet` | $\doublebarwedge$ `\doublebarwedge` | $\otimes$ `\otimes` | $\veebar$ `\veebar` |
| $\Cap$ `\Cap` | $\doublecap$ `\doublecap` | $\oslash$ `\oslash` | $\wedge$ `\wedge` |
| $\cap$ `\cap` | $\doublecup$ `\doublecup` | $\pm$ `\pm` 或者`\plusmn` | $\wr$ `\wr` |

也可以直接输入：$+−/∗⋅∘∙±×÷∓∔∧∨∩∪≀⊎⊓⊔⊕⊖⊗⊘⊙⊚⊛⊝◯∖$

### 分数和二项式
| 第一列 | 第二列 | 第三列 |
| :---- | :---- | :---- |
| $\frac{a}{b}$ `\frac{a}{b}` | $\tfrac{a}{b}$ `\tfrac{a}{b}`$^{[15]}$ | $\genfrac(]{2pt}{1}a{a+1}$ `\genfrac (]{2pt}{1}a{a+1}` |
| ${a \over b}$ `{a \over b}` | $\dfrac{a}{b}$ `\dfrac{a}{b}` | ${a\above{2pt}b+1}$ `{a \above{2pt} b+1}` |
| $a/b$ `a/b`|| $\cfrac{a}{1+\cfrac{1}{b}}$ `\cfrac{a}{1 +\cfrac{1}{b}}` | 
| $\binom{n}{k}$ `\binom{n}{k}` | $\dbinom{n}{k}$ `\dbinom{n}{k}` | ${n\brace k}$ `{n\brace k}` |
| ${n \choose k}$ `{n \choose k}` | $\tbinom{n}{k}$ `\tbinom{n}{k}` | ${n\brack k}$ `{n\brack k}` |

### 数学运算符
| 第一列 | 第二列 | 第三列 | 第四列 |
| :----------- | :----------- | :----------- | :----------- |
| $\arcsin$ `\arcsin` | $\cosec$ `\cosec` | $\deg$ `\deg` | $\sec$ `\sec` |
| $\arccos$ `\arccos` | $\cosh$ `\cosh` | $\dim$ `\dim` | $\sin$ `\sin` |
| $\arctan$ `\arctan` | $\cot$ `\cot` | $\exp$ `\exp` | $\sinh$ `\sinh` |
| $\arctg$ `\arctg` | $\cotg$ `\cotg` | $\hom$ `\hom` | $\sh$ `\sh` |
| $\arcctg$ `\arcctg` | $\coth$ `\coth` | $\ker$ `\ker` | $\tan$ `\tan` |
| $\arg$ `\arg` | $\csc$ `\csc` | $\lg$ `\lg` | $\tanh$ `\tanh` |
| $\ch$ `\ch` | $\ctg$ `\ctg` | $\ln$ `\ln` | $\tg$ `\tg` |
| $\cos$ `\cos` | $\cth$ `\cth` | $\log$ `\log` | $\th$ `\th` |
| $\argmax$ `\argmax` | $\injlim$ `\injlim` | $\min$ `\min` | $\varinjlim$ `\varinjlim` |
| $\argmin$ `\argmin` | $\lim$ `\lim` | $\plim$ `\plim` | $\varliminf$ `\varliminf` |
| $\det$ `\det` | $\liminf$ `\liminf` | $\Pr$ `\Pr` | $\varlimsup$ `\varlimsup` |
| $\gcd$ `\gcd` | $\limsup$ `\limsup` | $\projlim$ `\projlim` | $\varprojlim$ `\varprojlim` |
| $\inf$ `\inf` | $\max$ `\max` | $\sup$ `\sup` | $\operatorname{f}$ `\operatorname{f}` |

### 根号
$\sqrt{x}$ `\sqrt{x}`  
$\sqrt[3]{x}$ `\sqrt[3]{x}` 

## 关系符
$\stackrel{!}{=}$ `\stackrel{!}{=}`




<!-- | $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 
| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 
| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 
| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 
| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 
| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 
| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 
| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 
| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 

| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 
| $$ `` | $$ `` | $$ `` | $$ `` | $$ `` | 

| $$ `` | $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | $$ `` |

| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` |
| $$ `` | $$ `` | $$ `` | -->

