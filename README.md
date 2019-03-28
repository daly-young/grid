## 文中所有示例，可以下载[我的示例项目](https://github.com/daly-young/grid)下载查看或调试~❤️

# 简介
布局问题一直在不断地被优化，最初可能是使用block、inline-block、table,或者直接使用float、position等...
后来flex出现了，我们可以快速地用它解决元素的一维分布问题，例如居中，平均分布等，这种处理是针对项目的一条轴线，所以可以称为**一维布局**。<br>
而**Grid Layout**可以看成是flex布局的升级版本，在2013年，《CSS布局的未来趋势》一文中就提出了Grid Layout，在2017年3月份之后，各大主流浏览器相继宣布开始支持css grid属性。<br>
**Grid Layout（又名“网格”**）是一个二维的基于网格的布局系统，它将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，所以可以称为**二维布局**。网格布局的目的只在于完全改变我们设计基于网格的用户界面的方式。 

# 浏览器支持度

![](https://user-gold-cdn.xitu.io/2019/3/28/169c41f3aec0c96d?w=1475&h=328&f=png&s=219514)
具体的属性可到caniuse上查询 [grid相关属性兼容性](https://www.caniuse.com/#search=grid)

# 基本概念
### 1.网格容器(Grid Container)
应用 display: grid 的元素。这是所有 网格项（grid item）的直接父级元素。

### 2.网格项(Grid Item)
网格容器（Grid Container）的子元素.

### 3.网格线(Grid Line)
构成网格结构的分界线。它们既可以是垂直的（“列网格线(column grid lines)”），也可以是水平的（“行网格线(row grid lines)”），并位于行或列的任一侧。

![](https://user-gold-cdn.xitu.io/2019/3/28/169c4028d547c079?w=200&f=png&s=14254)
### 4.网格轨道(Grid Track)
两条相邻网格线之间的空间。你可以把它们认为网格的列或行。

![](https://user-gold-cdn.xitu.io/2019/3/28/169c402f8844acd1?w=200&f=png&s=22068)

### 5.网格单元格(Grid Cell)
行和列的交叉区域，是 Grid(网格) 系统的一个“单元”。

### 6.网格区域(Grid Area)
4条网格线包围的总空间。一个 网格区域(Grid Area) 可以由任意数量的网格单元格(Grid Cell) 组成，这个取决于开发者的定义

# 容器属性
## grid/inline-grid

```
display: grid // 常规网格布局
display: inline-grid // 行内元素网格布局
display: subgrid // 子元素网格布局继承，暂无浏览器支持查询
```

![](https://user-gold-cdn.xitu.io/2019/3/28/169c404c8a0af3d2?w=1208&h=844&f=png&s=123982)
## grid-template-columns / grid-template-rows

```
grid-template-columns // 属性定义每一列的列宽
grid-template-rows // 属性定义每一行的行高
```
示例：


![](https://user-gold-cdn.xitu.io/2019/3/28/169c40c2b33c8521?w=1033&h=467&f=png&s=46002)

![](https://user-gold-cdn.xitu.io/2019/3/28/169c40c808d7101f?w=1204&h=466&f=png&s=95113)

![](https://user-gold-cdn.xitu.io/2019/3/28/169c40cb0b8780df?w=1214&h=481&f=png&s=59093)

## row-gap / column-gap / gap

```
row-gap: 20px // 行间距
column-gap: 20px // 列间距
gap: 20px // 简写
```
示例：

![](https://user-gold-cdn.xitu.io/2019/3/28/169c40d92113afde?w=769&h=846&f=png&s=41088)


## grid-template-areas
定义容器区域，这个属性单独看没有意义，需要单配项目属性grid-area使用，稍后讲解~

## grid-auto-flow

```
grid-auto-flow: row / column / row dense / column dense
// 排列顺序，默认是先行后列，还可以选择先列后行，先行后列尽量不出现空白区域，先列后行尽量不出现空白区域
```
示例：

![](https://user-gold-cdn.xitu.io/2019/3/28/169c40ee191f2f0c?w=733&h=461&f=png&s=19321)


![](https://user-gold-cdn.xitu.io/2019/3/28/169c40fa75309203?w=722&h=742&f=png&s=32213)

## justify-item / align-item / place-item

```
justify-items // 属性设置单元格内容的水平位置（左中右）
align-items // 属性设置单元格内容的垂直位置（上中下）
place-items // 简写,如果省略第二个值，则浏览器认为与第一个值相等
```

```
可选值：
start：对齐单元格的起始边缘 
end：对齐单元格的结束边缘 
center：单元格内部居中 
stretch：拉伸，占满单元格的整个宽度（默认值）
```
> justify-items或者align-item填写的时候，另外一个值默认是stretch

示例：

![](https://user-gold-cdn.xitu.io/2019/3/28/169c4111492ef2be?w=726&h=720&f=png&s=30179)

## justify-content / align-content / place-content

```
justify-content // 属性是整个内容区域在容器里面的水平位置（左中右）
align-content // 属性是整个内容区域的垂直位置（上中下）。
place-content // 简写，第二个值不写，默认读第一个值
```

```
可选值 :
start
end
center
stretch
space-around // 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。
spance-between // 项目与项目的间隔相等，项目与容器边框之间没有间隔。
space-evenly // 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。
如果省略第二个值，浏览器就会假定第二个值等于第一个值。
```

![](https://user-gold-cdn.xitu.io/2019/3/28/169c41311294b2bb?w=1050&h=886&f=png&s=41562)

## grid-auto-columns / grid-auto-rows

> 有时候，一些项目的指定位置，在现有网格的外部。比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。grid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与grid-template-columns和grid-template-rows完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小渲染，我们在这个示例中提到过
ps: 列的话不要尝试，以为列增加不是单个而是一整列，是算到网格里的


![](https://user-gold-cdn.xitu.io/2019/3/28/169c413fd8a80508?w=766&h=464&f=png&s=46498)

## grid-template / grid

>` grid-template`属性是`grid-template-columns、grid-template-rows`和`grid-template-areas`这三个属性的合并简写形式。
`grid`属性是`grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow`这六个属性的合并简写形式。
写起来比较魔性，不介意大家平时书写，具体可以去[张鑫旭的博客](https://www.zhangxinxu.com/wordpress/2018/11/display-grid-css-css3/)详细解读一下

# 项目属性
## grid-column-start / grid-column-end / grid-row-start / grid-row-start


```
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 2;
grid-row-start: 3;
```
示例：

![](https://user-gold-cdn.xitu.io/2019/3/28/169c416d15cebcbe?w=710&h=770&f=png&s=76329)



## grid-column / grid-row

```
grid-column: <grid-column-start> <grid-column-end> // 简写
grid-row:  <grid-row-start> <grid-row-end>  // 简写
```
示例：

![](https://user-gold-cdn.xitu.io/2019/3/28/169c41b55adfb99c?w=688&h=784&f=png&s=46693)

## grid-area

```
// 指定项目放在哪一个区域。
grid-area: row-start / column-start / row-end / column-end / 区域名
```
> 起始网格线可以通过命名使用

示例：

![](https://user-gold-cdn.xitu.io/2019/3/28/169c41c22695b2ad?w=702&h=752&f=png&s=54561)

## justify-self / align-self / place-self

```
justify-self // 属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目
align-self // 属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目
place-self // 简写
```
示例：

![](https://user-gold-cdn.xitu.io/2019/3/28/169c41d4196de9e0?w=739&h=762&f=png&s=56637)

# 总结
Grid Layout 布局虽然属性较多，但是通过对行列的自由控制，极大地简化了布局的开发，大家抓紧尝试起来！❤
