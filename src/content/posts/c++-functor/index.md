---
title: 【C++】仿函数
published: 2025-03-27
description: "C++学习记录"
image: ""
tags: ["C++"]
category: 编程
draft: false
---

在C++中，仿函数（Functor）又称为函数对象，是指一个类或结构体通过重载operator()运算符，使得它的实例可以像普通函数一样被调用。仿函数结合了函数的灵活性和类的特性，是一种非常强大的工具。

在STL中的函数对象，比如`std::less<T>`、`std::greater<T>`、`std::equal_to<T>`等，都是仿函数。

## 特点

- **行为类似函数**：可以通过()直接调用。
- **具有状态**：与普通函数不同，仿函数可以拥有成员变量，从而保存状态。
- **可定制性强**：可以通过模板实现泛型编程，也可以根据需要定义多种行为。
- **性能优化**：编译器对仿函数的内联优化通常比函数指针更好。


## 举例

比如我们要实现一个排序函数，传统的方法是在函数里面直接比较

```cpp
// 升序
template<typename T>
void Sort(T *arr, int size) {
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}
```

但是如果我们想要修改排序规则，比如降序、或者传入自定义类型，就需要实现很多个函数。

一种解决方法是传一个函数指针，如下所示：
```cpp
template<typename T>
bool CompareLess(const T &a, const T &b) const {
    return a < b;
}
template<typename T>
bool CompareGreat(const T &a, const T &b)  const {
    return a > b;
}

template<typename T>
void Sort(T *arr, int size, bool (*compare)(const T&, const T&)) {
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}

void Demo() {
    int arr[] = { 1, 2, 3, 4, 5 };
    Sort<int>(arr, 5, CompareLess<int>);
    for (int i = 0; i < 5; i++) {
        std::cout << arr[i] << " ";
    }
}
```

但是这样比较麻烦，对于每一个而且函数指针的参数和返回值类型需要匹配，弄且不容易管理。

这个时候我们可以使用仿函数来实现高度通用的代码。

## 实现

比如我们定义一个类，对它的运算符`()`进行重载，让其可以当作函数来使用。

```cpp
template<typename T>
struct CompareLess {
    bool operator()(T &a, T &b) const noexcept{
        return a < b;
    }
};
```

排序函数修改如下

```cpp
// 升序
template<typename T, template<typename> typename Compare>
void Sort(T *arr, int size) {
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (Compare<T>{}(arr[j], arr[j + 1])) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}

void Demo() {
    int arr[] = { 5, 4, 3, 2, 1 };
    Sort<int, CompareLess>(arr, 5);
    for (int i = 0; i < 5; i++) {
        std::cout << arr[i] << " ";
    }
}
```

