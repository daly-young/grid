<template>
  <div class="about">
      <code>justify-self // 属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目</code>
      <code>align-self // 属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目</code>
      <code>place-self // 简写</code>
    <section>
        <div>
            <p>justify-self: end;</p>
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
            <p>align-self: center;</p>
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
            <p>grid-area: 3 / 1 / 4 / 3;</p>
            <p>place-self: center center;</p>
            <img src="https://user-gold-cdn.xitu.io/2019/3/28/169c3f83ad19dea5?w=940&h=184&f=png&s=22950" width="350">
            <p>慎用，虽然渲染了，但是这个属性在can i use 查不到支持情况，常规语法校验会提示未定义属性</p>
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
    div:first-child {
        justify-self: end;
    }
}
.example2 {
    div:first-child {
        align-self: center;
    }
}
.example3 {
    div:first-child {
        grid-area: 3 / 1 / 4 / 3;
        place-self: center center;
    }

}
</style>

