<template>
  <div class="grid">
    <code> display: grid // 常规网格布局</code>   
    <code> display: inline-grid // 行内元素网格布局</code>   
    <code> display: subgrid // 子元素网格布局继承，暂无浏览器支持<a href="https://www.caniuse.com/#search=subgrid">查询</a></code>   
    <section >
        <span>display:grid</span>
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
        <span>display:inline-grid</span>
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
        <span>display:subgrid</span>
        <div>如果你的 grid container 本身就是一个 grid item（即,嵌套网格），你可以使用这个属性来表示你想从它的父节点获取它的行/列的大小，而不是指定它自己的大小。
            <img src="https://user-gold-cdn.xitu.io/2019/3/28/169c3988e1d9fcb1?w=1275&h=220&f=png&s=42384" width="900">
        </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
section {
    margin-top: 20px;
        background-color:rgba(173, 193, 143, 0.3);
    span {
        background-color: #eee;
    }
    &>div {
        grid-template-columns: repeat(3,70px);
        grid-template-rows: repeat(3,70px);
        &>div {
            border: 1px solid #000;
            text-align: center;
            line-height: 70px;
        }
    }
}
.example1 {
    display: grid;
}
.example2 {
    display: inline-grid;
}
.example3 {
    display: grid;
    div:first-child {
        display: subgrid;
    }
}
</style>

