---
title: 行为树BehaviourTree
published: 2024-11-16
description: "行为树学习记录"
image: ""
tags: ["C++", "决策", "行为树"]
category: 编程
draft: false
---

## 基本概念

### 概述

行为树（Behavior Tree, BT）是一种用于构建自主代理（例如机器人或电脑游戏中非玩家控制的角色）决策过程的形式化图形建模语言。与有限状态机不同，行为树是控制“任务”执行流程的**分层节点树**。

它的主要特点和用途包括：

* 图形化建模：行为树使用图形符号来表示不同的任务和决策流程，使得复杂的逻辑易于理解和维护。
* 分层结构：行为树采用分层设计，可以将复杂的决策过程分解成多个层级，每个层级处理特定的任务或决策。
* 灵活性和可扩展性：通过组合不同的节点，可以轻松地修改或扩展行为树，以适应新的需求或环境变化。
* 广泛的应用领域：最初应用于视频游戏中的NPC控制，现在也被广泛应用于机器人技术、自动化系统等领域。


### 基本组成

下图展现了一个基本的行为树结构：


行为树由节点（Node）构成，节点主要有两种类型：控制结点（Control node）和执行节点（Execution node）。其中，控制节点又分为四种，分别为顺序节点（Sequence），选择节点（Fallback or Selector），并行节点（Parallel）和装饰节点（Decorator）;执行节点分为两种，分别为条件节点（Condition）和动作节点（Action）。

<div style="display: flex; justify-content: center;">
<img src="https://www.behaviortree.dev/img/animated.svg" width="60%" height="60%" />
</div>

#### 控制节点
控制节点（Control node）是行为树的内部结点，它们定义了遍历其子结点的方式。控制结点的子节点可以是执行结点，也可以是控制结点。顺序(Sequence)，选择(Fallback)，并行(Parallel)这3种类型的控制结点可以有任意数量的子结点（1-N），而装饰(Decorator)结点只能有一个子结点，表示对子结点的行为进行修饰。

* **顺序节点（Sequence）**：按照顺序依次执行其子结点，直到某个子结点返回失败或成功，或者所有子结点都返回成功。
* **选择节点（Fallback or Selector）**：按照顺序依次执行其子结点，直到某个子结点返回成功，或者所有子结点都返回失败。
* **并行节点（Parallel）**：并行节点将“并行”执行其所有子节点。 之所以打上引号，是因为这不是真正的并行；在每次每个子节点都会按顺序单独进行。 当至少有M个子节点（在1到N之间）执行成功时，并行节点会返回成功；当所有子节点都执行失败时，并行节点会返回失败。
* **修饰节点（Decorator）**：装饰节点用自定义策略修改单个子节点。 装饰器有自己的一套规则来改变“被装饰节点”的状态。 例如，"反转 "装饰器会将 "成功 "改为 "失败"，反之亦然。常见的修饰有：反转（Invert），重复（Repeat/Retry）等。

<div style="display: flex; justify-content: center;">
<img src="https://robohub.org/wp-content/uploads/2021/08/bt_sequence_node.png" width="40%" height="40%" />
<img src="https://robohub.org/wp-content/uploads/2021/08/bt_fallback_node.png" width="40%" height="40%" />
</div>
<div style="display: flex; justify-content: center;">
<img src="https://robohub.org/wp-content/uploads/2021/08/bt_parallel_node.png" width="40%" height="40%">
<img src="https://robohub.org/wp-content/uploads/2021/08/bt_decorator_node.png" width="40%" height="40%">
</div>

#### 执行节点
执行节点（execution node）：行为树的叶子节点，可以是动作节点（Action）或条件节点（Condition）。

* **动作节点（Action**：执行一个动作，例如，向一个目标移动、攻击、使用物品等。
* **条件节点（Condition）**：检查一个条件，例如，玩家是否在攻击范围内、是否已到达目标位置等。

| 节点类型 | 子节点数量 | 描述 |
| :---: | :---: | :---: |
| 顺序节点（Sequence） | 1-N | 按照顺序依次执行其子结点，全部成功或者遇到失败|
| 选择节点（Fallback） | 1-N | 按照顺序依次执行其子结点，全部失败或者遇到成功|
| 并行节点（Parallel） | 1-N | 并行执行其所有子节点，至少M个成功，或者执行失败 |
| 修饰节点（Decorator） | 1 | 修饰单个子节点 |
| 动作节点（Action） | 0 | 执行一个动作 |
| 条件节点（Condition） | 0 | 检查一个条件 |

<div style="display: flex; justify-content: center;">
<img src="https://robohub.org/wp-content/uploads/2021/08/bt_node_types.png"  width="90%" height="90%" />
</div>


### 执行流程

<div style="display: flex; justify-content: center;">
<img src="https://www.behaviortree.dev/assets/images/sequence_animation-4155a892772542caf81fa16c824c91f8.svg"  width="60%" height="60%" />
</div>

行为树按照设定的频率(一般为100-200HZ)离散地更新步骤，信号（这里称之为"tick"）在树的根节点开始被执行，然后它通过分支进行传播直到它到达一个或者多个叶子。这里的tick意味着去唤醒一个树节点的回调函数`tick()`。当节点被tick后，会向其父节点返回状态，如下所示：
* 成功（Success）：节点执行成功；
* 失败（Failure）：节点执行失败；
* 运行中（Running）：节点正在执行。

:::note[注意]
条件节点（Condition）只能返回成功或失败，不能返回运行中。
:::

### 示例

假设现在有一个机器人需要去搜索一个物品。

若物品只在一个区域A存在，则我们可以使用一个简单的顺序节点（Sequence）来控制机器人的搜索过程，结构如下：

<div style="display: flex; justify-content: center;">
<img src="https://robohub.org/wp-content/uploads/2021/08/bt_mobile_robot_01.png"  width="60%" height="60%" />
</div>

如上图，我们用动作节点（Action）执行到A区域的行为，然后通过条件节点判断是否找到物品。  
在前往A区域时，动作节点返回运行中（Running）；当到达A区域时，返回成功（Success）；否则返回失败（Failure），整个顺序节点结束。  
当到达A区域时，条件节点检查物品是否在A区域内，若找到则返回成功，否则返回失败。  
当条件节点返回成功时，表示整个顺序节点成功执行，整个顺序节点结束，返回成功，机器人搜索结束；否则返回失败。

如果物体不只是存在区域A，而是可能在其他的区域（1-N），这样我们可以加入一个判断循环条件，每次先判断是否在区域M，如果不在，就前往区域M，然后执行搜索，结构框图如下：

<div style="display: flex; justify-content: center;">
<img src="https://robohub.org/wp-content/uploads/2021/08/bt_mobile_robot_03.png"  width="90%" height="90%" />
</div>

在上图，引入了**显式成功条件（explicit success condition）**，即在执行动作前总是先进行条件检测。比如，先检测机器人是否已经在A处，如果在就不执行去A处的动作，直接返回成功状态。一般使用选择节点（Fallback）和条件节点（Condition）构成。

### 修饰节点（Decorator）和黑板（Blackboard）

考虑上面的行为树，我们可以发现，如果区域很多并且会动态修改，这样每次更新行为树时，都需要修改节点，非常麻烦。为了解决这个问题，我们可以使用黑板（Blackboard）来存储动态数据，并通过修饰节点（Decorator）来修改行为树。

* **黑板（Blackboard）**：行为树中存储动态数据的结构，实际上只是一个公共存储区域，各个行为可以在其中读取或写入数据;
* **装饰节点（Decorator）**：相较于每增加一个地点就复制一份相同的子树，我们可以使用一个特点的规则（如重复（Repeat））的修饰节点，描述这个节点的运行逻辑。

针对上面存在的问题，我们可以给行为树添加一个`Repeat`装饰节点和一个`GetLoc`的动作节点，用来在每一次迭代读取新的搜寻地址。`GetLoc`操作从已知位置队列中弹出一个位置，并将其作为某个参数`target_location`写入黑板。如果队列为空，则返回Failure;否则返回Success。然后，处理导航的下游节点可以使用此 target_location参数，该参数在每次子树重复时都会更改。如下图所示：

<div style="display: flex; justify-content: center;">
<img src="https://robohub.org/wp-content/uploads/2021/08/bt_mobile_robot_blackboard.png"  width="90%" height="90%" />
</div>

## BehaviorTree.CPP

> 参考文档：[*BehaviorTree Docs*](https://www.behaviortree.dev/docs/intro)

[BehaviorTree.CPP](https://www.behaviortree.dev/)是一个开源的C++库，用于构建行为树。本文的行为树版本为`3.8.7`。

### `xml`脚本储存树结构

行为树通过xml脚本构建，xml脚本的语法分为`compact`和`explicit`两种，前者结构简单，后者包含消息更多，方便软件读取。xml脚本的格式如下：

```xml
<root main_tree_to_execute = "MainTree">
    <BehaviorTree ID="MainTree">
        <Sequence name="root_sequence">
            <Action ID="SaySomething"   name="action_hello" message="Hello"/>
            <Action ID="OpenGripper"    name="open_gripper"/>
            <Action ID="ApproachObject" name="approach_object"/>
            <Action ID="CloseGripper"   name="close_gripper"/>
        </Sequence>
    </BehaviorTree>
</root>
```

* `<BehaviorTree>`，`<Action/>`，`<Sequence/>`等表示了这个节点的类型；
* `ID`描述了节点的类型，这些类型为之前在程序里面注册过的，`name`表示节点的名字，这个名字是必须的，并且不能重复；
* `messaage`用于在不同节点之间传递的消息，对因为黑板里面的数据

为了方便使用Groot软件编写，这里采用explicit语法。

#### 子树

我们可以将一些节点组合成一个子树，子树可以嵌套，子树也可以作为节点参数传入，以此来降低行为树的复杂度。

```xml
 <root main_tree_to_execute = "MainTree" >
 
     <BehaviorTree ID="MainTree">
        <Sequence>
           <Action  ID="SaySomething"  message="Hello World"/>
           <SubTree ID="GraspObject"/>
        </Sequence>
     </BehaviorTree>
     
     <BehaviorTree ID="GraspObject">
        <Sequence>
           <Action ID="OpenGripper"/>
           <Action ID="ApproachObject"/>
           <Action ID="CloseGripper"/>
        </Sequence>
     </BehaviorTree>  
 </root>
```

#### 外部文件

在一个xm文件里面。可以使用其他文件的树结构，使用标签如下：

```xml
<include path="path_to_another_xml"/>
```

将前面两个树结构拆分两个文件，如下所示：

```xml
<!-- file maintree.xml -->

<root main_tree_to_execute = "MainTree" >
     
    <include path="grasp.xml"/>
     
    <BehaviorTree ID="MainTree">
        <Sequence>
           <Action  ID="SaySomething"  message="Hello World"/>
           <SubTree ID="GraspObject"/>
        </Sequence>
    </BehaviorTree>
</root>
```

```xml
 <!-- file grasp.xml -->

<root BTCPP_format="4" >
    <BehaviorTree ID="GraspObject">
        <Sequence>
           <Action ID="OpenGripper"/>
           <Action ID="ApproachObject"/>
           <Action ID="CloseGripper"/>
        </Sequence>
    </BehaviorTree>  
</root>
```

:::note[注意]
如果你想在 ROS 包中查找文件，您可以使用以下语法：
```xml
<include ros_pkg="name_package" path="path_to_file"/>
```
:::

### 在CPP里面使用

cmake里面需要添加：

```cmake
find_package(behaviortree_cpp_v3 REQUIRED)
target_link_libraries(executable_name BT::behaviortree_cpp_v3)
```

在CPP里面使用：
```c++
#include "behaviortree_cpp_v3/bt_factory.h"

using namespace BT; // optional
```

库处于命名空间`BT`里面，为了避免污染命名空间，建议不要直接使用`using namespace BT;`。

### 节点状态

在BehaviorTree.CPP中，节点的状态通过`enum class NodeStatus`来表示，在头文件`<behaviortree_cpp_v3/basic_types.h>`中定义，官方实现如下：

```cpp
/// Enumerates the possible types of nodes
enum class NodeStatus
{
  IDLE = 0,
  RUNNING = 1,
  SUCCESS = 2,
  FAILURE = 3,
  SKIPPED = 4,
};
```

我们可以通过自定义函数来实现状态的返回，如下所示：

```c++
BT::NodeStatus CheckBattery()
{
  std::cout << "[ Battery: OK ]" << std::endl;
  return BT::NodeStatus::SUCCESS;
}
```

### 节点类型

在BehaviorTree.CPP中，节点的对应关系如下：

| 节点类型 | CPP 类名 |
| :---: | :---: |
| 动作节点（Action） | `BT::SyncActionNode` |
| 条件节点（Condition） | `BT::ConditionNode` |
| 控制节点（Control） | `BT::ControlNode` |
| 修饰节点（Decorator） | `BT::DecoratorNode` |

分别在头文件`<behaviortree_cpp_v3/action_node.h>`、`<behaviortree_cpp_v3/condition_node.h>`等定义。在CPP程序里面，我们需要通过继承来实现不同的动作节点和条件节点；控制节点和修饰节点通过xml文件来配置。  
之后将会具体介绍如何实现自定义节点。

如下简单展示了一个动作节点的实现：

```c++
// Example of custom SyncActionNode (synchronous action)
// without ports.
class ApproachObject : public BT::SyncActionNode
{
public:
  ApproachObject(const std::string& name) :
      SyncActionNode(name, {})
  {}

  // You must override the virtual function tick()
  BT::NodeStatus tick() override
  {
    std::cout << "ApproachObject: " << this->name() << std::endl;
    return BT::NodeStatus::SUCCESS;
  }
};
```

## 环境安装

下载[BehaviorTree.CPP](https://github.com/BehaviorTree/BehaviorTree.CPP/releases/3.8.7)，版本为3.8。
下载[Groot](https://github.com/BehaviorTree/Groot)。

### 安装BehaviorTree.CPP

先将下载的BehaviorTree.CPP解压，进入目录然后执行以下命令：
```bash
mkdir Build
cd Build
cmake ..
make
sudo make install
```

### 安装Groot

安装依赖
```bash
sudo apt install qtbase5-dev libqt5svg5-dev libzmq3-dev libdw-dev
```

下载Groot，解压，进入目录，并运行。
```bash
git clone --recurse-submodules https://github.com/BehaviorTree/Groot.git
cd Groot
cmake -S . -B build
cmake --build build
```

### 问题

1. 在编译Groot的时候，出现以下错误：
   ```bash
   /usr/bin/ld: 找不到 -lncurses: 没有那个文件或目录
   /usr/bin/ld: 找不到 -lncursesw: 没有那个文件或目录
   /usr/bin/ld: 找不到 -ltinfo: 没有那个文件或目录
   ```
   从新安装ncurses-dev即可。
   ```bash
   sudo apt update
   sudo apt install libncurses-dev
   ```

2. 遇到奇奇怪怪的问题，可以先把build清理掉，从新再试一次。




## 参考文章

> [1] [BehaviorTree.CPP](https://www.behaviortree.dev/)  
> [2] [Introduction to behavior trees](https://robohub.org/introduction-to-behavior-trees/)  
> [3] [*Behavior Trees in Robotics and AI: An Introduction*](https://arxiv.org/pdf/1709.00084)
> [4] [Groot行为树UI编辑器安装教程](https://blog.csdn.net/Netceor/article/details/129483160)