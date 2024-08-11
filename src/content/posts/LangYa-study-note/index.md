---
title: 学习记录
published: 2024-08-11
description: "学习记录"
image: ""
tags: ["C++", "CMake"]
category: 编程
draft: false
---

## 8.11
项目文件夹的构建，简单的CMake语法
### 项目文件夹目录
项目文件夹一般有以下几个部分组成：
```
- Build
- Modules
- Sources
- ThirdParties
- Documents
```
* `Build`：文件夹存放编译生成的文件，如`CMake`；
* `Modules`：存放已经设计好的模块，只需后期维护即可；
* `Sources`：存放还在开发中的模块；
* `ThirdParties`：存放第三方库，一般为不提供`pip`或者`CMake`安装的库，需要手动安装编译；
*  `Documents`：存放文档。

### 从GitHub导入模块
使用`git submodule add`导入模块，用法如下：
```bash
git submodule add <GitHub地址> <存放模块的文件夹>
```
模块可以根据需求放在`Modules`或者`ThirdParties`文件夹下。

### CMake语法
CMake语法有以下几类：
* `cmake_minimum_required(VERSION <版本号>)`：设置CMake的最小版本，建议使用较新的，这里使用`3.16`；
* `project(<项目名称>)`：设置项目名称，很重要，名称可以随便，但最好和项目名一致；
* `find_package(<库名> CONFIG REQUIRED)`：查找已经安装的第三方库，`CONFIG`表示需要使用较新的`CMake`配置方法，`REQUIRED`表示找不到时报错；
* `add_executable(<程序名> <源1.cpp><源2.cpp>)`：添加可执行文件；
* `target_link_libraries(<程序名> <可见性><库1> <可见性><库2>)`：添加依赖库，可见性包括两种：`PUBLIC`和`PRIVATE`，`PUBLIC`表示其他模块可以访问，`PRIVATE`表示其他模块不可以访问；通常add_library链接模块时使用`PUBLIC`，add_executable链接模块时使用`PRIVATE`。

写好的`CMake`文件放在`CMakeLists.txt`文件中，如下所示：
```cmake
cmake_minimum_required(VERSION 3.16)
project(Moci)
find_package(fmt CONFIG REQUIRED)
add_executable(test Sources/main.cpp)
target_link_libraries(test PRIVATE fmt::fmt)
```
### 使用CMake编译
首先进入`Build`文件夹，使用`CMake`命令生成`Make`文件；再使用`Make`命令编译。
:::note[注意]
`CMake`命令会自动找到名称为`CMakeLists.txt`的文件，如果不是，需要使用`cmake <文件名>`命令。  
使用`make clean`命令可以清理编译文件。
:::
```bash
cmake .. 
make -j2 # -j2表示使用2个线程编译
./test
```
### 安装第三方库
第三方库一般安装再`~/reops`位置下。  
首先进入·文件夹，使用`git clone`命令安装库；然后使用`cmake`命令生成`Make`文件；最后使用`make`命令编译并安装。
```bash
cd ~/reops
git clone https://github.com/fmtlib/fmt.git
cd fmt
mkdir build
cd build
cmake .. # 生成Make文件
make -j # 编译
sudo make install # 安装到系统目录
```


