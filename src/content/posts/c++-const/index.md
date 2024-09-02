---
title: 【C++】const和constexpr
published: 2024-09-02
description: "C++学习记录"
image: ""
tags: ["C++"]
category: 编程
draft: false
---

## const关键字
`const`关键字在C++中用于定义常量或者指定某些对象或变量的不可变性，主要有以下几个用途：修饰变量、修饰指针和修饰函数（包括函数参数、函数返回值和成员函数）。

### 修饰变量
当前变量被声明为`const`时，它不可被修改，**只能读取**。
```c++
const int a = 1;
a = 2; // 错误
int b = const_cast<int>(a);
b = 2; // 错误，会引发未定义行为
```
当需要使用非`const`的值时，可以使用`const_cast`来强制转换。
```c++
void func(int var) {
    // TODO
}

int main() {
    const int a = 1;
    func(const_cast<int>(a)); // 通过转换为非const值
}
```

### 修饰指针
`const`可以用来修饰指针，限制指针的行为，主要分为以下三种：
* `const int *p` : 指针指向的数据不可修改，但指针指向的地址区域可以修改；
* `int *const p` : 指针指针指向的地址区域不可修改，但指向的数据可以修改；
* `const int *const p` : 指针指向的数据和指针指向的地址区域均不可修改。
```c++
int a = 1, b = 2;
const int *p1 = &a;
int *const p2 = &a;
const int *const p3 = &a;
*p1 = 2; // 错误
p2 = &b; // 错误
p3 = &b; // 错误
*p3 = 2; // 错误
```

### 修饰函数
#### 修饰函数参数
`const`可以用来修饰函数的参数，表明该参数在函数体内不会被修改。
```c++
void Print(const char *str); // str参数在函数体内不会被修改
```

#### 修饰函数返回值
`const`可以用来修饰函数的返回值，表明函数返回的对象不应该被修改。
```c++
const char *getStr() { return "Hello"; }  // 返回的字符串是常量
```

#### 修饰成员函数
成员函数后面加上`const`，表明该成员函数不会修改对象的状态。
```c++
class Myclass {
    int var;
public:
    void GetVar() const; // 不会修改对象的状态
};
```

## constexpr关键字
`constexpr`关键字可以用来修饰常量表达式，表明该表达式的值在**编译期**就能确定，可以用来修饰函数、变量、数组等。

### 变量 
```c++
constexpr int a = 1; // a是常量表达式
```

### 函数
`constexpr`表示函数可以在编译时期计算结果。
```c++
constexpr int Square(const int x) {
    return x * x;
}
int result = Square(4); // 编译时计算结果为16
```

### 函数模板
`constexpr`可以用于模板参数，模板参数必须是编译时常量。
```c++
template<typename T, std::size_t N>
class FixedArray {
public:
    static constexpr std::size_t Size = N;
    static constexpr std::size_t ElementSize = sizeof(T);
};

FixedArray<int, 10> arr;
```