<template>
  <div class="about">
    <code>grid-template-columns // 属性定义每一列的列宽<br>grid-template-rows // 属性定义每一行的行高</code>
    <section>
        <div> 
            <p> grid-template-columns: 70px 70px 70px;</p>
            <p>grid-template-rows: 70px 70px 70px;</p>
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
            <p>grid-template-columns: 70px;</p>
            <p>grid-template-rows: 20px;</p>
            <i>列属性的值决定了列的个数，行的个数 = 项目的个数/列的个数</i>
        </div>
        <div class="example2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        </div>
    </section>
    <section>
        <div>
            <p> height: 200px;</p>
            <p>grid-template-columns: 20% 30% 50%;</p>
            <p>grid-template-rows: 10% 10%;</p>
            <i>调试属性我们可以发现，没有设置高度的项目会平均地把剩下的空间分配到自己身上<br>但是会比较自身高度和分配高度，取较大值赋值<br>(不设置高度的情况下，容器的高度为行的默认高度之和)，如果项目之和超出默认高度，视为溢出</i>
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
            <div>10</div>
            <div>11</div>
            <div>12</div>
        </div>
    </section>
    <section>
        <div>
            <p>grid-template-columns: repeat(3,50px 20px 40px);</p>
            <p>grid-template-rows: repeat(3,30px);</p>
            <i>两个参数，第一个是重复的次数，第二个是重复的数据</i>
        </div>
        <div class="example4">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
        </div>
    </section>
    <section>
        <div>
            <p>grid-template-columns: repeat(auto-fill,150px 90px);</p>
            <i>自动填充，超过折行，不需要自己计算列数</i>
        </div>
        <div class="example5">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
        </div>
    </section>
    <section>
        <div>
            <p>grid-template-columns: 1fr 3fr 4fr</p>
            <i>fraction 表示比例关系，可以按比例划分所占宽高，可以和绝对长度单位结合使用，类似于flex布局</i>
        </div>
        <div class="example6">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
        </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.about {
    .example1 {
        grid-template-columns: 70px 70px 70px;
        grid-template-rows: 70px 70px 70px;
    }
    .example2 {
        grid-template-columns: 70px;
        grid-template-rows: 100px;
    }
    .example3 {
        // height: 200px;
        grid-template-columns: 20% 30% 50%;
        grid-template-rows: 30% 50%;
        // grid-template-columns: 30px 20px 50px ;
        // grid-template-rows: 130px 28px;
    }
    .example4 {
        grid-template-columns: repeat(3,50px 20px 40px);
        grid-template-rows: repeat(3,30px);
    }
    .example5 {
        grid-template-columns: repeat(auto-fill,150px 90px);
    }
    .example6 {
        grid-template-columns: 1fr 3fr 4fr;
    }
}
</style>

