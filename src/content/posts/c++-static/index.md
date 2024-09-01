---
title: 【C++】static关键字
published: 2024-09-01
description: "C++学习记录"
image: ""
tags: ["C++"]
category: 编程
draft: false
---

在C++中，static关键字用于修饰变量和函数，主要分为以下五种：静态全局变量、静态局部变量、静态普通函数、静态成员变量和静态成员函数。

## 静态全局变量


## 静态局部变量

## 静态普通函数

## 静态成员变量和函数
在结构体或类中出现的变量为成员变量，出现的函数为成员函数。当变量或函数前有`static`关键字修饰时，为静态成员变量或静态成员函数；与之对应的为非静态成员变量和非静态成员函数，也称为属性（property）和方法（method）。  
静态成员变量和函数是全局统一的，与实例（对象）无关，存储在静态存储区域；而非静态成员变量和函数则与实例（对象）相关。
```c++
class Test {
public:
    static int sta_var; // 静态成员变量
    static void sta_func(); // 静态成员函数
    int var; // 非静态成员变量
    void func(); // 非静态成员函数
};

void Demo1() {
    Test a, b;
    a.std_var = 1;
    std::cout << b.std_var << std::endl; // b.std_var = 1
    Test::sta_var = 2; // 可以直接通过类名访问
    std::cout << a.sta_var << std::endl; // a.sta_var = 2
    a.sta_func();
    b.sta_func();
    Test::sta_func(); // 以上三个函数完全相同
}

void Demo2() {
    Test a;
    a.var = 1;
    std::cout << Test::var << std::endl; // 出错，没有实例无法访问
    a.func(); // 隐含参数this = &a
    Test::func(); // 出错，相当于没有隐含参数this
}
```
对于非静态的成员变量和函数，我们可以使用std::bind来绑定隐含参数this，从而非静态的成员变量和函数的调用。
```c++
s
```

