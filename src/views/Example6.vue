<template>
  <div class="about">
    <code>justify-items // 属性设置单元格内容的水平位置（左中右）</code>
    <code>align-items // 属性设置单元格内容的垂直位置（上中下）</code>
    <code>place-items // 简写,如果省略第二个值，则浏览器认为与第一个值相等</code>
    <code>可选值：start：对齐单元格的起始边缘 / end：对齐单元格的结束边缘 / center：单元格内部居中 / stretch：拉伸，占满单元格的整个宽度（默认值） </code>
    <code>justify-items或者align-item填写的时候，另外一个值默认是stretch</code>
    <section>
        <div>
            <p> justify-items: start;</p>
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
            <p>align-items: start;</p>
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
            <p>place-items: end stretch;</p>
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
    justify-items: start;
}
.example2 {
    align-items: start;
}
.example3 {
    place-items: end stretch;
}
</style>

