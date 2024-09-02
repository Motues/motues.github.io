---
title: 【C++】static关键字
published: 2024-09-01
description: "C++学习记录"
image: ""
tags: ["C++"]
category: 编程
draft: false
---

在C++中，static关键字用于修饰变量和函数，主要分为以下五种：静态全局变量、静态全局函数、静态局部变量、静态成员变量和静态成员函数。

## 静态全局变量或函数
当函数或变量前有`static`关键字修饰时，为静态全局变量或静态全局函数。静态全局变量或函数只能在当前的文件中使用，在不同的文件里表示不同的东西；而普通的全局变量或函数可以使用`extern`在不同的文件里面使用一个变量。即`static`将全局变量限制在当前的文件内有效。
```c++
// test1.cpp
int var = 1;
static int sta_var = 1;

//test2.cpp
extern int var; // 和test1.cpp中的var是同一个变量
var = 2;
extern int sta_var; // 错误
static int sta_var; // 和test1.cpp中的sta_var不是同一个变量
sta_var = 2;
```

## 静态局部变量
静态局部变量一般在函数内部定义，并且只在第一次定义的时候初始化，作用域为一个代码块内，生命周期为整个程序结束。静态局部变量储存在静态存储区。
```c++
void Demo() {
    static int var = 0;
    var++；
    std::cout << var << std::endl;
}
int main() {
    Demo(); // var = 1
    Demo(); // var = 2
    Demo(); // var = 3
    return 0;
}

```

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
    a.sta_var = 1;
    std::cout << b.sta_var << std::endl; // b.std_var = 1
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
对于非静态的成员变量和函数，我们可以使用`std::bind`来绑定隐含参数this，从而非静态的成员变量和函数的调用。
```c++
#include <functional>
void Demo() {
    Test a;
    using f = std::function<void()>;
    f func = std::bind(&Test::func, &a);
    func();
}
```

