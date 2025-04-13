---
title: Verilog基础语法
published: 2024-07-20
description: "Verilog学习——基础语法"
image: ""
tags: ["Verilog"]
category: 编程
draft: false
---

## Verilog简介
Verilog是一种描述逻辑电路的描述语言，它被设计用来描述逻辑电路的逻辑结构，以及逻辑电路的参数化。

## verilog基础知识

### 逻辑值
在Verilog中，逻辑值主要包括四种，分别是`0`，`1`，`X`，`Z`。
* 逻辑`0`：表示低电平，对应电路的GND；
* 逻辑`1`：表示高电平，对应电路的VCC；
* 逻辑`X`：表示不确定，通常用于表示无法确定逻辑值的情况；
* 逻辑`Z`：表示高阻态，对应电路的悬空状态。

### 数字
在Verilog中，数字可以表示为二进制、八进制、十进制、十六进制等，一般的表示格式为`位宽` + `'` + `进制类型` + `数值`。
* 二进制：用`b`表示，例如`4'b1010`表示4位二进制数1010；
* 八进制：用`o`表示，例如`4'o12`表示4位八进制数12，表示十进制数10，转化为二进制为`4'b1010`；
* 十进制：用`d`表示，例如`4'd10`表示4位十进制数10，表示二进制数1010；
* 十六进制：用`h`表示，例如`4'ha`表示4位十六进制数a，表示二进制数1010。

### 数据类型
在Verilog中，数据类型包括三种，分别为寄存器类型（variable）、线网类型（net）和参数类型（parameter）。

#### 寄存器类型
寄存器类型在电路中表示一个抽象的数据存储单位。
最常用的寄存器类型为`reg`，用法如下。
```verilog
reg [31:0] count; // 32位寄存器，用于计数
reg  rst; // 复位信号
```

#### 线网类型
线网类型在电路中表示元件之间的物理连线，值由输入端决定。
线网类型包括`wire`、`tri`等，最常常用的线网类型为`wire`，用法如下。
```verilog
wire [31:0] data; // 32位数据线，用于数据传输
wire  rst; // 复位信号
```

#### 参数类型
参数类型相当于C/C++里面的`const`，表示一个常量，常用于定义延迟时间、数据位宽等。参数相当于局部常量，只在当前模块内可以使用。用法如下。
```verilog
parameter DELAY_TIME = 10; // 延迟时间，表示十个单位的延迟
parameter DATA_WIDTH = 32; // 数据位宽，表示32位数据
```

### 运算符
Verilog中运算符与C/C++类似，包括：
* 算术运算符：`+`，`-`，`*`，`/`，`%`
* 逻辑运算符：`!`，`&&`，`||`
* 位运算符：`&`，`|`，`^`，`~`，`>>`，`<<`
* 关系运算符：`>`，`<`，`>=`，`<=`，`!=`，`==`，`===`，`?:`
* 赋值运算符：`=`，`<=`
* 拼接运算符：`{}`，`{n{b}}`
:::note[注意]
* `===`表示全等，`==`表示相等
    ```verilog
    x === x //为true
    ```
* 阻塞赋值`=`常用于组合逻辑，例如`assign`语句和`always@(*)`语句块；非阻塞赋值`<=`常用于时序逻辑，例如`always@（posedge clk）`语句块。​​​​​​​
    ```verilog
    wire [11:0] data_in;
    reg [11:0] data_out;

    assign data_in = 6'b10111; //assign语句常给wire类型复制
    always @( posedge rst) begin //always语句块常给reg类型赋值
        data_out <= data_in;
    end
    ```
    非阻塞赋值`=`与C/C++相同，计算后立刻赋值；阻塞赋值`<=`则先进行计算，在统一赋值。
* 连接运算符`{}`用于将不同的信号合成为一个信号
    ```verilog
    wire [5:0] a,b,c;
    wire [11:0] d;
    assign a = 6'b101101;
    assign b = 6'b111000；
    assign c = 2'b11；
    assign d = {a[5],b[2:0],c}；//d = 100011
    ```
:::

### 标识符
标识符用于定义模块名称、端口名和信号名等，可以由字母、数字、下划线`_`和`$`组成。标识符的第一个字符必须是字母或者下划线，和C/C++一样，区分大小写。

### Verilog基础语法

### 模块

在Verilog中，模块相当于一个函数，对应于一个硬件，用于完成某种特定的操作，比如计数，控制器等。  
模块的定义有两种方式，一种直接在括号里面进行I/O端口说明，一种是在函数声明后进行端口说明，如下所示：
```verilog
module module_name (
    input [31:0] data_in, // 输入信号
    output [31:0] data_out, // 输出信号
    input rst, // 复位信号
    input clk // 时钟信号
    );
endmodule
```
```verilog
module module_name (data_in, data_out, rst, clk);
    input [31:0] data_in;
    output [31:0] data_out;
    input rst, clk;
endmodule
```
在以上代码，端口说明格式为`输入输出属性` + `数据类型` + `信号位宽` + `信号名称`。
* 模块的输入输出属性包括：输入`input`，输出`output`，输入/输出`inout`。
* 数据类型分为`variable`和`net`类，如果不指定，默认为`wire`。但是在`always`语句和`inital`块中，默认为`reg`。

### always语句
`always`语句用于描述时序逻辑和组合逻辑，其语为`always @(敏感信号)`，当检测到敏感信号发生变化时，便会执行always块中的语句。
```verilog
//在clk的上升沿或者rst的下降沿激活
always @(posedge clk or negedge rst) begin
    if (!rst) begin
        reg <= 0;
    end else begin
        reg <= data_in;
    end
end
```

### `inital`语句
`inital`语句用于定义一个初始化过程，在Verilog中，初始化过程会在仿真开始时执行，并且只执行一次。
```verilog
initial begin
    count = 0;
    rst = 1;
end
```

:::note[注意]
* `inital`语句和`always`语句都会在仿真开始时执行，但是`always`语句块中的语句检测到敏感信号变化时就会执行，而`inital`语句块中的语句会在仿真开始时执行一次。
* `inital`语句和`always`语句默认生成的信号为`reg`类型。
:::

### `assign`连续赋值语句
连续赋值语句用于定义一个信号的赋值过程，用`assign`语句实现；只能对`net`类型的信号赋值。
```verilog
wire [31:0] data_out;
assign data_out = data_in;
```

### 条件语句
Verilog里面的条件语句包括`if else`语句和`case`语句。

#### `if else`语句
语法结构如下:
```verilog
if (condition) begin
    // if语句块
end else begin
    // else语句块
end
```
:::note[注意]
* 条件语句必须在`initial`和`always`语句所引导的过程块中使用。表达式为`0`或者`x`视为假；
* `if else`支持嵌套，与C/C++类似。如果只有一句命令可以不使用`begin end`。
:::

#### `case`语句
语法结构如下：
```verilog
case (condition)
    value1: //执行语句1
    value2: //执行语句2
    default: //执行语句3
endcase
```
:::note[注意]
* 一般加上`default`，防止产生锁存器以及自锁现象；
* 所有表达式位宽必须相同；
* `case`可以换成`casez`和`casex`，`casez`用来处理不考虑高阻值z的比较过程，`casex`用来处理将高阻值z和不定值x都视为不关心的过程；
* `case`语句支持嵌套，与C/C++类似。如果只有一句命令可以不使用`begin end`。
:::

### 循环语句
循环语句包括`for`循环、`repeat`循环、`forever`循环和`while`循环，最常用的为`for`循环。

#### `for`循环
`for`循环与C/C++类似，综合电路使用最多的语法结构如下：
```verilog
generate
    for (init; condition; update) begin
        // for循环体
    end
endgenerate
```

#### `forever`循环
用于连续执行某个过程，直到仿真结束。需要注意的是，`forever`循环语句常用于产生周期性的波形，只能用来作为仿真测试信号，必须写在 `initial`块中。  
语法结构如下：
```verilog
forever begin
    // forever循环体
end
```

### 块语句
块语句用于定义一个逻辑块，分为两种，分别为顺序块`begin end`和并行快`fork join`。顺序块和并行块的区别在于，顺序块是串行执行，并行块是并行执行。  
块可以有自己的名字，并通过`disable`关键字禁用。
```verilog
always @(posedge clk) begin
    if (rst) begin
        count <= 0;
        disable block_name; // 禁用block_name块
    end
    else begin
        count <= count + 1;
        if (count == 10) begin
            count <= 0;
        end
    end
end
```

### `timescale`语句
`timescale`定义了仿真模型中时间单位和时间精度的标准，该指令通常放在模块的开头，用于指定仿真中的时间单位和精度，用法如下。
```verilog
`timescale 1ns/1ps // 1ns表示仿真时间基本单位，1ps表示仿真时间精度
```

### 模块实例

### `function`语句

### `task`语句

### `include`语句

### `define`语句


## Verilog仿真流程

Verilog仿真流程分为以下几步：
1. 编写模块功能代码
2. 编写仿真测试代码
3. 仿真工具进行仿真

### 模块功能代码
模块功能代码一般以`.v`结尾，用于描述模块的功能，包括模块的输入输出端口说明，以及模块的时序逻辑和组合逻辑。  
下面简单实现一个案件计数器：当按钮按下时，计数器加1；如果rst按钮按下，则计数器清零。
```verilog
module Counter (clk, rst, button, count);
    input clk, rst, button;
    output reg [31:0] count;
    reg button_prev; // 用于存储上一个时钟周期的button状态

    initial count = 0;

    always @(posedge clk) begin
        // 存储当前button状态到button_prev
        button_prev <= button;

        if (rst) begin
            count <= 0;
        end
        else if (button && !button_prev) begin // 检测button的上升沿
            count <= count + 1;
        end
    end
endmodule
```

### 仿真测试代码
仿真测试代码一般以`.v`结尾，用于描述模块的输入输出信号，以及模块的初始化过程。  
下面是仿真测试代码的例子，用于测试上面的案例计数器。
```verilog
`timescale 1ns/1ns
module tb_Counter;
    reg clk, rst, button;
    wire [31:0] count;

    Counter u_Counter (.clk(clk), .rst(rst), .button(button), .count(count)); // 模块实例化

    initial begin // 时钟
        clk = 0;
        forever #1 clk = ~clk;
    end
    initial begin // 按钮信号
        button = 0;
        forever begin
            #5.5 button = 1;
            #3 button = 0;
        end
    end
    initial begin // 复位信号
        rst = 0;
        forever begin
            #30 rst = 1;
            #2 rst = 0;
        end
    end
    initial begin // 仿真结束
        #100 $finish;
    end
    initial begin // 仿真结果记录
        $dumpfile("result.vcd");
        $dumpvars(0, tb_Counter);
    end
endmodule
```
:::note[]
* `#`用于时间延迟，比如`#5.5`表示延迟5.5个时间单位；
* `$dumpfile`用于指定仿真结果记录的文件名，`$dumpvars`用于指定需要记录的信号；
    `$dumpvars(0, module_name)`表示记录模块module_name的所有信号，
    `$dumpvars(1, variable_name)`表示仅记录信号variable_name；
* 
:::
