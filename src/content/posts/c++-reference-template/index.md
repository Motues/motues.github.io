---
title: 【C++】引用与模板
published: 2024-08-20
description: "C++学习记录"
image: ""
tags: ["C++"]
category: 编程
draft: false
---

## 引用

### 左右值
* 左值：在内存有确定存储地址、有变量名，表达式结束依然存在的值
* 右值：就是在内存没有确定存储地址、没有变量名，表达式结束就会销毁的值
简单来说，右值是临时对象，左值是非临时对象。  
同样，左右值也存在常量和非常量之分。
```c++
int a = 10; // a为非常量左值，10为非常量右值
const int b = 20, c = 30; // b, c为常量左值
b + c; //(b + c)为常量右值
```

### 1.2 左右值引用
引用分为左值引用和右值引用。
* 左值引用：绑定到左值的引用，使用`&`符号表示
* 右值引用：绑定到右值的引用，使用`&&`符号表示
```c++
int a = 10; 
int& b = a; // b为左值引用
int&& c = 20; // c为右值引用
```
:::note[注意]
常量左值是可以绑定到右值上面的，即如下的语法是正确的：
```c++
int a = 10, b = 20;
const int& c = a + b; // (a + b)为右值，可以绑定到常量左值上
```
:::

### std::move
当我们需要讲一个左值引用绑定到右值时，我们可以使用`std::move`函数，此时该函数的操作对象将在大括号结束时被销毁，如下：
```c++
int a = 10;
const int c_a = 10;
int&& b1 = std::move(a); // 正确，此时a在b绑定结束后被销毁
int&& b2 = std::move(c_a); // 错误，c_a是常量左值，不能绑定到左值引用上
const int&& b3 = std::move(a); // 正确，此时a在b绑定结束后被销毁
const int&& b4 = std::move(c_a); // 正确，c_a是常量左值，可以绑定到常量左值引用上
```
:::note[注意]
当对类使用`std::move`时，一般要自己书写内存释放的代码。
```c++
class DynamicDataPool {
public:
    std::size_t Size;
    void* Memory;

    DynamicDataPool(DynamicDataPool&& pool): Size(pool.Size), Memory(pool.Memory) {
        pool.Size = 0;
        pool.Memory = nullptr;
    }
    ~DynamicDataPool() {
        free(Memory);
    }
};
```
:::
在类的构造里面，右值引用对应的是移动构造函数，而左值引用对应的是拷贝构造函数；在处理大型数据结构时，使用右值引用可以避免不必要的内存拷贝，从而提高效率。

## 模板
模板是C++的一个重要特性，它允许我们定义一个函数、类、结构体等，这些函数、类、结构体可以接受任意类型的参数，从而实现泛型编程。  
模板按照用途分为类模板、函数模板、模板特化。

### 函数模板
函数模板的组成包括模板声明和函数定义，如下所示：
```c++
template <typename T> // 模板声明
T add(T a, T b) { // 函数定义
    return a + b;
}
```
模板声明中，`typename`表示模板参数的类型，`T`表示模板参数的名称。

### 类模板
类模板的组成包括模板声明和类定义，如下所示：
```c++
template <typename T> // 模板声明
class MyClass { // 类定义
public:
    T* data;
    static constexpr std::size_t size = sizeof(T); // static的用法
    MyClass() {
        data = nullptr;
    }
    ~MyClass() {
        delete data;
    }
}
```
我们可以调用以下语句来构造实例：
```c++
MyClass<int> my_class;
```

### 其他用法
在模板的参数里面，我们还可以指定其他参数，如下代码构建了一个大小固定的数据池：
```c++
template <typename T, std::size_t T_Size>
class FixedDataPool {
public:
    T* data;
    static constexpr std::size_t size = T_Size;
    FixedDataPool() {
        data = new T[T_Size];
    }
    ~FixedDataPool() {
        delete[] data;
    }
}
FixedDataPool<int, 10> my_pool;
```


> 了解C++中`std::vector`、`std::array`和`std::span`的实现原理。
