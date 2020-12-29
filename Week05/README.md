学习笔记

1. proxy与双向绑定 ｜ proxy的基本用法

- ```javascript
  po = new Proxy(object, {
    set(obj, prop, val) {
      //未操作object
    }
  })
  ```

- 监听、管理对象
- 可以设置get、set的钩子函数



2. proxy与双向绑定 ｜ 模仿reactive实现原理

- 把new Proxy封装为reactive函数，并在set方法中进行object的操作
- 添加回调函数:Map、Array



3. proxy与双向绑定 ｜ 优化reactive

- 缓存proxy对象，支持对象中的对象属性



4. proxy与双向绑定 ｜ reactivity响应式对象

- 实现拖拽进度条改变颜色



5. 使用Range实现DOM精确操作 ｜ 正常流里的拖拽

- 监听指定元素块的mousedown、mouseup、mousemove事件，记录相应的位置，通过修改style.transform来实现元素块的移动
- range - html中的区域，创建range，插入节点
- 去除选中事件冒泡 - selectstart

