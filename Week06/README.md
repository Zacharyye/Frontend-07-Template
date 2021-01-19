学习笔记

### 1.语言按语法分类

- 非形式语言
  - 中文
  - 英文
- 形式语言（乔姆斯基谱系） 包含关系
  - 0型 - 无限制文法
  - 1型 - 上下文相关文法
  - 2型 - 上下文无关文法
  - 3型 - 正则文法

### 2.什么是产生式？

- 产生式
  - 用尖括号括起来的名称来表示语法结构名
  - 语法结构分成基础结构和需要用其他语法结构定义的复合结构
    - 基础结构称终结符
    - 复合结构称非终结符
  - 引号和中间的字符表示终结符
  - 可以有括号
    - *表示重复多次
    - ｜表示或
    - +表示至少一次

### 3.深入理解产生式

- 0型 无限制文法
  - ?::=?
- 1型 上下文相关文法
  - ？<A>?::=?<B>?
- 2型 上下文无关文法
  - <A>::=?
- 3型 正则文法
  - <A>::=<A>?
  - <A>::=?<A>x
  - 递归的<A>出现在尾巴上
- Javascript可以理解为上下文相关文法
  - get a () {}
  - get : 1

### 4.现代语言的分类

- C++ - *
- VB -  < 
- Python - tab
- JavaScript  - / 
- 形式语言 - 用途
  - 数据描述语言
  - 编程语言
- 形式语言 - 表达方式
  - 声明式语言
  - 命令型语言

### 5.编程语言的性质

- 图灵完备性 -
  - 命令式 - 图灵机
    - goto
    - if和while
  - 声明式 - lambda
    - 递归
  - 图灵完全性 - 具有无限存储能力的通用物理机器或编程语言
- 图灵机
- 动态于静态
  - 动态
    - 在用户的设备/在线服务器上
    - 产品实际运行时
    - Runtime
  - 静态
    - 在程序员的设备上
    - 产品开发时
    - Compiletime
- 类型系统
  - 动态类型系统与静态类型系统
  - 强类型与弱类型
    - String + Number
    - String == Boolean
  - 复合类型
    - 结构体
    - 函数签名
  - 子类型
  - 泛型
    - 逆变/协变

### 6.一般命令式编程语言的设计方式

- Atom - 原子级
  - Identifier
  - Literal
- Expression
  - Atom
  - Operator
  - Punctuator
- Statement
  - Expression
  - Keyword
  - Punctuator
- Structure
  - Function
  - Class
  - Process
  - Namespace
  - 。。。
- Program
  - Program
  - Module
  - Package
  - Library

### 7.Number

- Atom
- 尽量使用null，而不是undefined
- Symbol - Object属性名，js专有
- type of null = Object 这是一个bug，js确认不会修复
- IEEE 754 Double Float
  - Sign（1）
  - Exponent（11）
  - Fraction（52）
- 0.toString()、0 .toString()

### 8.String

- 文本
- Character - 字符
- Code Point - 码点
- Encoding - 编码方式
- ASCII 
- Unicode
- "abc"
- 'abc'
-  ` abc `

### 9.其他类型

- Boolean
  - true
  - false
- Null & Undefined
  - null
  - undefined
  - void 0 - 产生undefined

### 10.对象的基本知识

- Object 
  - state
  - identifier
  - behavior
- 原型
  - Object prototype 祖先原型，一般是顶级类型，之上就没得了
  - Nihilo - 

### 11.JS中的对象

- Object
  - property
  - prototype
- 原型链
  - Object.defineProperty
  - Object.create/Object.setPrototypeOf/Object.getPrototypeOf
- Function
  - call - 内置行为
  - [[]] 内置行为
- Javascript标准里面所有具有特殊行为的对象
  - Array：Array 的 length 属性根据最大的下标自动发生变化。
  - Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
  - String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
  - Arguments：arguments 的非负整数型下标属性跟对应的变量联动。
  - 模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
  - 类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
  - bind 后的 function：跟原来的函数相关联。