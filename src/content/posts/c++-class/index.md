---
title: 【C++】类
published: 2024-09-07
description: "C++学习记录"
image: ""
tags: ["C++"]
category: 编程
draft: false
---

类是对象的模板，它描述了对象的属性和方法。在C++中，类定义了类的数据成员（也称为成员变量）和成员函数。

## 定义
下面是一个类的定义，实现了类似栈`stack`的功能：
```cpp
// Stack.hpp
class Stack {
private:
    int *buffer;
    int *top;
    size_t capacity;
public:
    void Push(int x);
    void Pop();
    int Top() const;
    bool Empty() const;
    int Size() const;
    Stack(size_t cap); // 构造函数
    ~Stack(); // 析构函数
};
```
在上面的代码中，我们完成了对象的声明，包括对象的属性（成员变量）和方法（成员函数），但是还没有实现任何功能。功能的实现通常在另一个部分完成，即在`Stack.hpp`完成定义，在`Stack.cpp`完成实现。

## 成员函数的实现
下面是`Stack`类的简单实现：
```cpp
// Stack.cpp
#include "Stack.hpp"

void Stack::Push(int x) {
    if(top - buffer < capacity) *top++ = x;
}
void Stack::Pop() {
    if(!Empty()) --top;
}
int Stack::Top() const {
    return *(this->top - 1);
}
bool Stack::Empty() const {
    return top -buffer == 0;
}
int Stack::Size() const {
    return top - buffer;
}
Stack::Stack(size_t cap) : buffer(nullptr), top(nullptr), capacity(cap) {
    void *buf = std::malloc(capacity * sizeof(int));
    buffer = static_cast<int *>(buf);
    top = buffer;
}
Stack::~Stack() {
    std::free(buffer);
}
```

### 构造函数和析构函数
构造函数和析构函数是特殊的成员函数，它们分别在创建对象和销毁对象时执行。构造函数用于初始化对象，析构函数用于释放对象。在类的实现中，我们通常会涉及到对内存的管理，新内存的分配一般在构造函数里面实现，存储在堆空间上；内存的释放一般在析构函数里面实现。

**构造函数**
```cpp
Stack::Stack(int cap) : buffer(nullptr), capacity(cap) , top(nullptr) {
    void *buf = std::malloc(capacity * sizeof(int)); // 从堆空间申请内存
    buffer = static_cast<int *>(buf);
    top = buffer;
}
```
> 在上述构造函数中，我们使用了`std::malloc`函数来申请内存，并将其转换为`int*`类型。其中`buf`只是一个栈空间中临时变量，用于存储申请到的内存地址，并将其传递给`buffer`。在后期我们所维护的地址也是`buffer`所指向的那片内存空间。

**析构函数**
```c++
Stack::~Stack() {
    std::free(buffer);
}
```
> 在析构函数中，我们使用了`std::free`函数来释放内存。因为当对象销毁时，系统会默认销毁对象本身的对象和方法，但是我们自己申请的内存并没有被销毁；若果没有释放，将导致内存无法被系统回收，从而导致内存泄露。因此，在实例被销毁时，系统会自动调用析构函数，我们便可以在析构函数里面对之前申请的内存进行释放，避免内存泄露。

### 对象在堆空间上的使用
当我们在堆空间里面申请了一片内存空间时，我们可以多次对其实例化。
```c++
void Demo() {
    void *buf = std::malloc(sizeof(Stack));
    Stack *s = new(buf) Stack(10); // 用new在名为buf的内存中构造一个Stack实例，并调用构造函数
    // 使用buf所在空间
    s->~Stack(); //将buf上面的Stack实例析构，并释放内存
    s = new(buf) Stack(16); // 再次构造实例
    // 重复使用buf所在空间
    s->~Stack(); // 析构并释放内存
    std::free(buf); // 释放buf所指向的内存
} //回收buf的内存
```

## 对象的拷贝和移动

### 浅拷贝
当我们使用`=`操作符来赋值一个对象时，如果对象是指针变量，那么就会发生指针的复制，而不是对象内容的复制。新指针和旧指针会指向相同的内存，这样就会造成内存管理的混乱。
```c++
void Demo() {
    Stack s1(10);
    Stack s2 = s1; // 将s1的所有数据复制给s2
}
```
比如在上面的代码中，我们知道Stack这个类里面有三个成员变量，分别是`buffer`、`top`和`capacity`。在`s2`的构造函数中，我们把`s1`的`buffer`、`top`和`capacity`复制给`s2`，这样`s2`就拥有了`s1`的所有数据。但是此时，`s1.buffer`和`s2.buffer`都指向了同一片内存空间，所以如果`s1`被销毁，则`s2`也会被销毁。

上面的拷贝方法就叫做**浅拷贝**。为了解决这个问题，我们需要在实例，即对象被创建的时候做一些操作，让两者指向的空间不同。于是，我们会在构造函数上面做一些处理，即**深拷贝**。

### 深拷贝
在实现深拷贝时，我们需要改一下`Stack`类的构造函数，完成新对象的内存分配。
```c++
Stack::Stack(const Stack &other) : buffer(nullptr), top(nullptr), capacity(other.capacity) {
    void *buf = std::malloc(capacity * sizeof(int)); // 从新申请一块内存
    buffer = static_cast<int *>(buf);
    memcpy(buffer, other.buffer, capacity * sizeof(int)); // 将other.buffer的内容复制到buffer
    top = buffer + other.Size();
}
```

### 移动构造函数
在上述深拷贝的中，我们参数传递的方式为左值引用，左值引用对应的是拷贝构造函数。而在处理大型数据的时候，大量的内存复制会占用较多资源，这时我们可以利用右值的特性，采用移动构造函数来优化，从而提高效率。  
移动构造，顾名思义，是讲一个变量的内容移动到另一个变量中，而不是复制。移动前的变量会被销毁，而移动后的变量会保留。  
移动构造函数的实现方式与拷贝构造函数类似，只是将参数改为右值引用，即`Stack(Stack &&other)`，在参数传递时可以使用`std::move`函数来完成。
> 需要注意的是，使用`std::move`后，变量使用后将会被销毁（即执行析构函数），这时我们就需要在构造函数里面对指针指向的地址进行一些处理，即手动销毁（设置为`nullptr`），防止同一片内存被多次释放。
```c++
Stack::Stack(Stack &&other) : buffer(nullptr), top(nullptr), capacity(other.capacity) {
    buffer = other.buffer;
    top = other.top;
    other.buffer = nullptr; // 手动销毁
    other.top = nullptr;
}
```

### 写时复制
写时复制(Copy-On-Write, COW)技术在拷贝时并不会立即创建一个新的副本，而是共享原有的数据；只有当某个副本需要修改时，才会创建一个新的副本。这种方法可以节省内存，特别是在处理大量数据时可以提高程序效率。

我们可以先实现一个COW类，用来实现写时复制。在这个类中，我们定义了一个计数器`count`，用来记录引用次数。

```c++
class COW {
private:
    int count;

public:
    void Increment(); // 引用次数加一
    void Decrement(); // 引用次数减一
    int GetCount() const; // 获取引用次数
    COW(): count() {};
    ~COW();
};
```