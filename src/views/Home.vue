<template>
  <div class="home">
    <h3>布局问题一直在不断地被优化，最初可能是使用block、inline-block、table,或者直接使用float、position等...<br>
      后来flex出现了，我们可以快速地用它解决元素的一维分布问题，例如居中，平均分布等，这种处理是针对项目的一条轴线，所以可以称为一维布局。<br>
      而Grid Layout可以看成是flex布局的升级版本，在2013年，<a href="https://www.w3cplus.com/css3/future-css-layouts.html">《CSS布局的未来趋势》</a>一文中就提出了Grid Layout，在2017年3月份之后，各大主流浏览器相继宣布开始支持css grid属性。<br>
      Grid Layout（又名“网格”）是一个二维的基于网格的布局系统，它将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，所以可以称为二维布局。网格布局的目的只在于完全改变我们设计基于网格的用户界面的方式。 <br></h3>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>
<style lang="scss" scoped>
h3 {
    line-height: 50px;
}
</style>

