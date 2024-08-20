---
title: CMake 学习笔记
published: 2024-08-12
description: "CMake学习记录"
image: ""
tags: ["CMake", "Make", "C++"]
category: 编程
draft: false
---

## CMake简介
CMake 是一个跨平台的构建系统工具，它主要用于管理和自动化软件构建过程。CMake支持跨平台，通过`CMakeLists.txt`文件生成特定的构建文件，简化C++项目你的开发。

> 本文基于Ubuntu 20.04 LTS系统构建CMake开发环境。

## 安装CMake
在Linux系统上可以使用以下命令安装CMake：
```bash
sudo apt-get install cmake # 安装CMake
sudo apt-get install build-essential # 基本编译工具，如GCC、Make等
```
确认CMake版本：
```bash
cmake --version
```

## 创建CMake项目
CMake一般使用`CMakeLists.txt`文件来管理构建过程，使用`cmake`命令来生成构建makefile文件，最后使用`make`命令来编译。  
我们通常在项目根目录下创建`CMakeLists.txt`文件，在`Build`文件夹里编译。
```bash
mkdir Build
cd Build
cmake .. # 生成makefile
make -j # 使用多线程编译
```

## CMake常用指令

### cmake_minimum_required
```cmake
cmake_minimum_required(VERSION <版本号>)
```
设置CMake的最小版本，建议使用较新的，一般放在CMakeLists.txt文件的开头；这里可以使用3.16版本。

### project
```cmake
project(<项目名称>)
```
设置项目名称，很重要，名称可以随便，但最好和项目名一致。

### find_package
```cmake
find_package(<库名> [CONFIG] [REQUIRED])
```
查找已经安装的第三方库，`CONFIG`表示需要使用较新的`CMake`配置方法，`REQUIRED`表示找不到时报错。

### add_executable
```cmake
add_executable(<程序名> <源文件列表>)
```
添加可执行文件，源文件列表可以包含多个源文件。

### add_library
```cmake
add_library(<库名> <源文件列表>)
```
添加静态库，源文件列表可以包含多个源文件。

### target_link_libraries
```cmake
target_link_libraries(<目标> <可见性><库>)
```
添加依赖库，可见性包括两种：
* `PUBLIC`：表示其他模块可以访问，通常`add_library`链接模块时使用`PUBLIC`;
* `PRIVATE`：表示其他模块不可以访问，通常`add_executable`链接模块时使用`PRIVATE`。

### set
```cmake
set(<变量名> <值>)
```
用于定义变量。它可以用来创建和初始化变量，也可以更新已存在的变量。  
比如我们可以通过set命令改变可执行文件的生成目录：
```cmake
set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)
```

## Make