<template>
  <div class="about">
    <!-- <h1>代表项目之间的间距，gap代表合并属性，如果不写第二个值，默认认为和第一个一样</h1> -->
    <code>row-gap // 行间距</code>
    <code>column-gap // 列间距</code>
    <code>gap // 简写</code>
    <section>
        <div>
            <p>row-gap: 20px;</p>
            <p>column-gap: 20px;</p>
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
        <div><p>gap:20px 5px</p></div>
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
        <div><p>gap:30px</p><i>如果不写第二个值，默认认为和第一个一样</i></div>
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
    row-gap: 20px;
    column-gap: 20px;
}
.example2 {
    gap: 20px 5px;
}
.example3 {
    gap: 30px;
}
</style>

