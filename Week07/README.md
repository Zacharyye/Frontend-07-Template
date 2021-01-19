## 学习笔记

1. 运算符和表达式

- Tree vs Priority
  - 中缀树、抽象语法树
- Expressions
  - Member
    - a.b
    - a[b]
    - super.b
    - Super['b']
    - new.target
    - new Foo()
  - New
  - new a()() 与 new new a() 括号的优先级问题
- Reference
  - Object
  - delete
  - Key
  - assign
- Expressions
  - Call - 函数调用
    - Foo()
    - Super()
    - foo()['b']
    - Foo().b
    - Foo()`abc`
  - new a()['b']
    - new 了一个对象a，然后访问其属性b 
  - Left Handside & Right Handside
  - Update
    - a ++
    - a --
    - -- a
    - ++ a 
  - Unary - 单目运算
    - delete a.b
    - void foo()
    - Typeof a
    - +a
    - -a
    - ~a 整数按位取反，强制取整
    - !a
    - await a
  - Exponental
    - ** 
      - 3 ** 2 ** 3
      - js中唯一一个右结合运算符，先计算2 ** 3，再计算3 ** (2 ** 3)
  - 四则运算、shift、relationship
  - equality
    - ==
      - 类型相等的时候直接比较
      - 类型不同的时候，比如会把布尔型的数据转换成Number
    - ！=
    - ===
    - ！==
  - Bitwise
    - & ^ |
  - Logical
    - && - 存在短路行为，前面为false 后面就不运行了
    - || -- 短路行为，前面为true，后面不会执行
  - Conditional
    - ? :

2. 类型转换

- Type Convertion
  - a + b
  - "false" == false
  - a[o] = 1
  - == 的类型转换非常复杂，推荐使用===
- Unboxing - 拆装箱
  - toPremitive
  - toString vs valueOf
  - Symbol.toPrimitive

3.运行时相关概念

- Grammer

  - 简单语句
  - 组合语句
  - 声明

- Runtime

  - Completion Record

    - ```
      if(x == 1) return 10;
      ```

    - [[type]]

    - [[value]]

    - [[target]]

  - Lexical Environment

4. 简单语句和复合语句

- 简单语句
  - ExpressionStatement
  - EmptyStatement
  - DebuggerStatement
  - ThrowStatement
  - ContinueStatement
  - BreakStatement
  - ReturnStatement
- 复合语句
  - BlockStatement
    -  {} 
  - IfStatement
  - SwitchStatement
  - IterationStatement
  - WithStatement
  - LabelledStatement
  - TryStatement

5. 声明

- FunctionDeclaration
- GeneratorDeclaration
- AsyncFunctionDeclaration
- AsyncGeneratorDeclaration
- VariableStatement
- ClassDeclaration
- LexicalDeclaration
- 鼓励使用class、const、let
- 预处理
  - 所有的声明都是预处理机制的
    - var的声明位置可以在使用之后
- 作用域
  -  { const  ... }等等限定作用域

6. 宏任务和微任务

- JS执行粒度（运行时）
  - 宏任务
  - 微任务 （Promise)
  - 函数调用
  - 语句/声明
  - 表达式
  - 直接量/变量/this ...
  - ![image-20210118170714080](/Users/zachary/Library/Application Support/typora-user-images/image-20210118170714080.png)
- 事件循环

7. JS函数调用

- ～
- Realm