<template>
  <div class="about">
      <code>// grid-area属性指定项目放在哪一个区域。</code>
      <code>grid-area: row-start / column-start / row-end / column-end</code>
    <section>
        <div>
            <p>容器定义区域：<br>grid-template-areas: 'a b c'
                         'd e f'
                         'g h i';</p>
            <p>项目指定区域：grid-area: h;</p>
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
            <p>容器定义区域：<br>grid-template-areas: 'a e c'
                         'd e f'
                         'g e i';</p>
            <p>项目指定区域：grid-area: e;</p>
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
            <p>row-start / column-start / row-end / column-end</p>
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
    grid-template-areas: 'a b c'
                         'd e f'
                         'g h i';
    div:first-child {
        grid-area: h;
    }
}
.example2 {
    grid-template-areas: 'a e c'
                         'd e f'
                         'g e i';
    div:first-child {
        grid-area: e;
    }
}
.example3 {
    div:first-child {
        grid-area: 3 / 1 / 4 / 3;
    }

}
</style>

