<template>
  <div class="about">
    <!-- <h1>代表项目之间的间距，gap代表合并属性，如果不写第二个值，默认认为和第一个一样</h1> -->
    <code>grid-auto-flow: row / column / row dense / column dense</code>
    <code>// 排列顺序，默认是先行后列，还可以选择先列后行，先行后列尽量不出现空白区域，先列后行尽量不出现空白区域</code>
    <section>
        <div><p>grid-auto-flow: row</p></div>
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
        <div><p>grid-auto-flow: column</p></div>
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
        <div><p>先行后列空白情况</p></div>
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
    <section>
        <div><p>grid-auto-flow: row dense</p></div>
        <div class="example3 example3-1">
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
        <div><p>grid-auto-flow: column dense</p></div>
        <div class="example3 example3-2">
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
.example2 {
    grid-auto-flow: column;
}
.example3 {
    width: 210px;
    grid-template-columns: 140px 140px 70px;
    div:first-child,div:nth-child(2){
        grid-column-start: 1;
        grid-column-end: 3;  
    }
    &-1 {
        grid-auto-flow: row dense;
    }
    &-2 {
        grid-auto-flow: column dense;
    }
}
</style>

