---
title: 【C++】lambda表达式
published: 2025-03-27
description: "C++学习记录"
image: ""
tags: ["C++"]
category: 编程
draft: true
---

在C++中，Lambda表达式（Lambda Expression）是一种匿名函数的语法糖，允许开发者在代码中直接定义简短的函数对象，而无需显式地定义一个仿函数类。

## Lambda表达式的结构

Lambda表达式的结构如下：

```cpp
[capture](parameters) -> return_type { body }
```
1. `[capture]`：捕获列表，用于指定Lambda表达式可以访问哪些外部变量。
    - 值捕获：通过值捕获外部变量，例如 [x]。
    - 引用捕获：通过引用捕获外部变量，例如 [&x]。
    - 隐式捕获：[=] 表示按值捕获所有外部变量，[&] 表示按引用捕获所有外部变量。
2. `(parameters)`：参数列表，与普通函数类似。
3. `-> return_type`：返回类型，可选部分。如果Lambda表达式的返回类型可以通过编译器推导，则可以省略，也就相当于`-> auto`。
4. `{ body }`：函数体，包含具体的逻辑。

## 示例

### 基本用法

在C++中，Lambda表达式可以用于定义匿名函数，并传递给其他函数作为参数。下面是一个简单的例子：
```cpp
void Demo() {
    auto Max = [](int a, int b) -> int { return a > b ? a : b; };
    int a = 1, b = 2;
    std::cout << Max(a, b) << std::endl;
}
```
在上面的代码中，我们定义了一个Lambda表达式，它接收两个整数参数，并返回较大值。然后，我们调用这个Lambda表达式，传入两个整数，并输出结果。

:::note[注意]
Lambda表达式在编译期间实际上是创建了一个匿名的结构体，实现了一个仿函数，所以当使用一个对象来代替，需要用 `auto` 来声明这个对象。
:::