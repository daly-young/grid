<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">什么是grid布局？</router-link> 
      <router-link to="/about">基本概念</router-link>
      <router-link to="/browser">浏览器支持情况</router-link>
      <div>
        <h3>容器属性</h3>
        <router-link to="/example1">grid/inline-grid</router-link>
        <router-link to="/example2" style="fontSize: 12px">grid-template-columns / grid-template-rows</router-link>
        <router-link to="/example3">row-gap / column-gap / gap</router-link>
        <router-link to="/example4">grid-template-areas</router-link>
        <router-link to="/example5">grid-auto-flow</router-link>
        <router-link to="/example6">justify-item / align-item / place-item</router-link>
        <router-link to="/example7" style="fontSize: 12px">justify-content / align-content / place-content</router-link>
        <router-link to="/example8">grid-auto-columns / grid-auto-rows </router-link>
        <router-link to="/example9">grid-template / grid </router-link>
      </div>
      <div>
        <h3>项目属性</h3>
        <router-link to="/example10" style="fontSize: 12px;lineHeight:16px;">grid-column-start / grid-column-end<br>grid-row-start / grid-row-start</router-link>
        <router-link to="/example11">grid-column / grid-row</router-link>
        <router-link to="/example12">grid-area</router-link>
        <router-link to="/example13">justify-self / align-self / place-self</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}
html,body, #app {
    height: 100%;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-left: 320px;
}
#nav {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 300px;
    height: 100%;
    background-color: #dedede;
    padding-left: 30px;
}

#nav a {
    display: block;
    font-weight: bold;
    color: #2c3e50;
    line-height: 40px;
}
#nav div {
    background-color: #ccc;
}
#nav div a {
    padding-left: 10px;
    font-size: 14px;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
code {
    display: block;
    background-color: #eee;
    line-height: 40px;
    font-size: 20px;
    padding: 0 20px;
}
.about {
    height: 100%;
    overflow: auto;
    padding-bottom: 30px;
    section {
        margin-top: 20px;
        display: grid;
        grid-template-columns:  400px 1fr;
        &>div:first-child {
            background-color: rgba(173, 193, 143, 0.3);
            padding: 0 20px;
            padding-bottom: 20px;
        }
        div[class^='example'] {
            display: grid;
            padding-left: 30px;
            grid-template-columns: repeat(3,70px);
            grid-template-rows: repeat(3,70px);
            &>div {
                border: 1px solid #000;
                text-align: center;
            }
        }
    }
}
</style>
