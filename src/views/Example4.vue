<template>
  <div class="about">
    <!-- <h1>代表项目之间的间距，gap代表合并属性，如果不写第二个值，默认认为和第一个一样</h1> -->
    <section>
       <div>
           <p>grid-template-areas: 'a b c'
                         'd e f'
                         'g b b';</p>
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
            <p> grid-template-areas: 'a a a'
                         'b b b'
                         'c c c';</p>
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
    <p>这个属性单独看没有意义，需要单配项目属性grid-area使用，稍后讲解</p>
  </div>
</template>
<style lang="scss" scoped>
.example1 {
    grid-template-areas: 'a b c'
                         'd e f'
                         'g b b';
}
.example2 {
    grid-template-areas: 'a a a'
                         'b b b'
                         'c c c';
}
</style>

