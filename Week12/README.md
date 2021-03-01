学习笔记

## 重学CSS

### 1.CSS排版｜盒 Box

- 盒模型
  - box-sizing
    - Content-box
    - border-box

### 2.CSS排版 ｜ 正常流

- 正常流
- flex
- grid
- 排版内容
  - 盒
  - 文字
- 正常流排版
  - 收集盒进行
  - 计算盒在行内的排版
  - 计算行的排版

### 3.CSS排版 ｜ 正常流的行级排布

- Baseline
- top
- bottom
- middle
- text-top
- text-bottom

### 4.CSS排版 ｜ 正常流的块级排布

- float、clear结合进行流的排布，clear可以使float元素换行，br不支持float中的换行
  - 这种用法比较古老，不推荐
- flexbox - 比较推荐使用
- margin折叠 - margin collapse，只会发生在BFC中，即正常流，flex、grid没有

### 5. CSS排版 ｜ BFC合并

- Block
  - Block Container: 里面有BFC的
    - 能容纳正常流的盒，里面就有BFC，想想有哪些？
    - block
    - Inline-block
    - table-cell
    - Flex item
    - Grid cell
    - Table-caption
    - 概括：一般的display
  - Block-level Box：外面有BFC的
    - display:block
    - Display:flex
    - Display:table
    - Display:grid
    - ......
    - 相对应的有inline-level
    - 特殊：run-in，有时候是block-level，有时候是inline-level
  - Block Box = Block Container + Block-level Box：里外都有BFC的
  - 设立BFC
    - floats
    - absolutely positioned elements
    - block containers (such as inline-blocks, table-cells, and table captions),that are not block boxed,
      - flex items
      - Grid cell
    - and block boxed with 'overflow' other than 'visible'
  - BFC合并
    - block box && overflow:visible
      - BFC合并与float
      - BFC合并与边距折叠

### 6.Flex排版

- 收集盒进行
- 计算盒在主轴方向的排布
- 计算盒在交叉轴方向的排布
- 分行
  - 根据主轴尺寸，把元素分进行
  - 若设置了no-wrap，强行分进第一行
- 计算主轴方向
  - 找出所有Flex元素
  - 把主轴方向剩余尺寸按比例分配给这些元素，flex值设置比例？
  - 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素
- 计算交叉轴方向
  - 根据每一行中最大元素尺寸计算行高
  - 根据行高flex-align和item-align，确定元素具体位置

### 7.CSS动画与绘制｜动画

- Animation

  - @keyframes定义

    - ```css
      @keyframes mykf
      {
        from {background: red;}
        to {background: yellow;}
      }
      div {
        animation: mykf 5s inifinite;
      }
      ```

    - 

  - animation：使用

  - 三次贝塞尔曲线

### 8.CSS动画与绘制 ｜颜色

- RGB 、CMYK 
- 三原色 - 红绿蓝，颜料的红黄蓝是三原色的补色 - 品红 黄 青
- HSL？
  - H - Hue -色相， 六种颜色之间根据角度来指定色相
  - S - Saturation，纯度，纯度越高，颜色就越漂亮
  - L - Lightness ， 亮度，0 - 纯黑色，100 - 纯白色
- HSV？
  - H、S同上
  - V - value，色值，实际上可以理解为明度 - brightness；100%最亮、最鲜艳的纯色

### 9.CSS动画与绘制｜绘制

- 几何图形
  - border
  - box-shadow
  - border-radius
- 文字
  - font
  - text-decoration
- 位图
  - Background-image
- 依赖图形库
- 推荐data-uri + svg