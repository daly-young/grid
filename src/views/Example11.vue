<template>
    <div class="about">
        <code>grid-column // 简写</code>
        <code>grid-row // 简写</code>
        <section>
            <div>
                <p>grid-column: 2 / 4;</p>
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
                <p>grid-row: 2 / 4;</p>
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
                <p>grid-column: 1 / span 2;</p>
                <p>grid-row: 2;</p>
                <i>还可以指定起始位置之后，指定跨域数</i><br>
                <i>简写的第二个参数不写，默认跨域1格</i>
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
        grid-column: 2 / 4;
    }
}
.example2 {
    div:first-child {
        grid-row: 2 / 4;
    }
}
.example3 {
    div:first-child {
        grid-column: 1 / span 2;
        grid-row: 2;
    }
}
</style>

