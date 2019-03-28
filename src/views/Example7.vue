<template>
  <div class="about">
    <code>justify-content // 属性是整个内容区域在容器里面的水平位置（左中右）</code> 
    <code>align-content // 属性是整个内容区域的垂直位置（上中下）。</code>
    <code>place-content // 简写，第二个值不写，默认读第一个值</code>
    <code>可选值 :
        <code>start</code>   
        <code>end</code>  
        <code>center</code>  
        <code>stretch</code> 
        <code>space-around // 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。</code> 
        <code>spance-between // 项目与项目的间隔相等，项目与容器边框之间没有间隔。</code> 
        <code>space-evenly // 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。</code>
    </code>
    <code>如果省略第二个值，浏览器就会假定第二个值等于第一个值。</code>
    <section>
        <div>
            <p>justify-content: end;</p>
        </div>
        <div class="example1">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>
    </section>
    <section>
        <div>
            <p>align-content: space-evenly;</p>
        </div>
        <div class="example2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>
    </section>
    <section>
        <div>
            <p>place-content: space-between space-around;</p>
        </div>
        <div class="example3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.example1 {
    justify-content: end;
}
.example2 {
    height: 400px;
    align-content: space-evenly;
}
.example3 {
    place-content: space-between space-around;
}
</style>

