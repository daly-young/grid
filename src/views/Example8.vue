<template>
  <div class="about">
    <code>有时候，一些项目的指定位置，在现有网格的外部。比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。grid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与grid-template-columns和grid-template-rows完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小渲染，我们在这个<a href="/example2">示例</a>中提到过</code>
    <code>ps: 列的话不要尝试，以为列增加不是单个而是一整列，是算到网格里的</code>

    <section>
        <div>
            <p>grid-template-columns: repeat(3,70px);</p>
            <p>grid-template-rows: repeat(2,50%);</p>
            <p>grid-auto-rows: 10px; </p>
            <i>内容溢出网格区域</i>
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
            <p>grid-auto-rows: 10px; </p>
            <p>grid-auto-columns: 10px; </p>
            <i>第九个单元格被指定到网格区域外</i>
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
  </div>
</template>
<style lang="scss" scoped>
.about .example1 {
    grid-template-columns: repeat(3,70px);
    grid-template-rows: repeat(2,50%);
    grid-auto-rows: 10px; 
}
.example2 {
    width: 200px;
    grid-auto-rows: 10px; 
    grid-auto-columns: 10px; 
    div:nth-child(9) {
        grid-row-start: 4;
        grid-column-start: 3; 
    }

}
</style>

