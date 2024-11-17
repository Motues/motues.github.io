---
title: 行为树BehavourTree
published: 2024-11-16
description: "行为树学习记录"
image: ""
tags: ["C++", "决策", "行为树"]
category: 编程
draft: false
---

## 0 环境配置

## 1 基本概念

### 1.1 概述

行为树（Behavior Tree, BT）是一种用于构建自主代理（例如机器人或电脑游戏中非玩家控制的角色）决策过程的形式化图形建模语言。与有限状态机不同，行为树是控制“任务”执行流程的**分层节点树**。

它的主要特点和用途包括：

* 图形化建模：行为树使用图形符号来表示不同的任务和决策流程，使得复杂的逻辑易于理解和维护。
* 分层结构：行为树采用分层设计，可以将复杂的决策过程分解成多个层级，每个层级处理特定的任务或决策。
* 灵活性和可扩展性：通过组合不同的节点，可以轻松地修改或扩展行为树，以适应新的需求或环境变化。
* 广泛的应用领域：最初应用于视频游戏中的NPC控制，现在也被广泛应用于机器人技术、自动化系统等领域。

> 参考书：*Behavior Trees in Robotics and AI: An Introduction*

### 1.2 基本组成

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
* **修饰节点（Decorator）**：装饰节点用自定义策略修改单个子节点。 装饰器有自己的一套规则来改变 "被装饰节点 "的状态。 例如，"反转 "装饰器会将 "成功 "改为 "失败"，反之亦然。常见的修饰有：反转（Invert），重复（Repeat/Retry）等。

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

*** 动作节点（Action）**：执行一个动作，例如，向一个目标移动、攻击、使用物品等。
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


### 1.3 执行流程

<div style="display: flex; justify-content: center;">
<img src="https://www.behaviortree.dev/assets/images/sequence_animation-4155a892772542caf81fa16c824c91f8.svg"  width="60%" height="60%" />
</div>

行为树按照设定的频率(一般为100-200HZ)以离散的更新步骤，信号（这里称之为"tick"）在树的根节点开始被执行，然后它通过分支进行传播直到它到达一个或者多个叶子。这里的tick意味着去唤醒一个树节点的回调函数`tick()`。当节点被tick后，会向其父节点返回状态，如下所示：
* 成功（Success）：节点执行成功；
* 失败（Failure）：节点执行失败；
* 运行中（Running）：节点正在执行。

:::note[注意]
条件节点（Condition）只能返回成功或失败，不能返回运行中。
:::

### 1.4 示例

假设现在有一个机器人需要去搜索一个物品。

若物品只在一个区域A存在，则我们可以使用一个简单的顺序节点（Sequence）来控制机器人的搜索过程，结构如下：

<div style="display: flex; justify-content: center;">
<img src="https://robohub.org/wp-content/uploads/2021/08/bt_mobile_robot_01.png"  width="60%" height="60%" />
</div>

如上图，我们用动作节点（Action）执行到A区域的行为，然后通过条件节点判断是否找到物品。  
在前往A区域时，动作节点返回运行中（Running）；当到达A区域时，返回成功（Success）；否则返回失败（Failure），整个顺序节点结束。  
当到达A区域时，条件节点检查物品是否在A区域内，若找到则返回成功，否则返回失败。  
当条件节点返回成功时，表示整个顺序节点成功执行，整个顺序节点结束，返回成功，机器人搜索结束；否则返回失败。

如果物体不只是存在区域A，而是可能在很多和在我们
