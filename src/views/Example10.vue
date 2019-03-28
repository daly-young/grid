<template>
  <div class="about">
    <code>grid-column-start</code>
    <code>grid-column-end</code>
    <code>grid-row-start</code>
    <code>grid-row-start</code>
    <section>
        <div>
            <p>grid-column-start: 2;</p>
            <p>grid-column-end: 4;</p>
            <i>指定第一个单元格从第列的二根网格线开始到第列四根网格线结束</i>
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
            <p>grid-row-start: 2;</p>
            <p>grid-row-end: 4;</p>
            <i>指定第一个单元格从行的第二根网格线开始到行的第四根网格线结束</i>
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
            <p>grid-column-start: 1;</p>
            <p>grid-column-end: 3;</p>
            <p>grid-row-start: 2;</p>
            <p>grid-row-end: 4;</p>
            <i>可以同时指定行和列，圈出一个矩形区域</i>
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
        grid-column-start: 2;
        grid-column-end: 4;
    }
}
.example2 {
    div:first-child {
        grid-row-start: 2;
        grid-row-end: 4;
    }
}
.example3 {
    div:first-child {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4;
    }
}
</style>

