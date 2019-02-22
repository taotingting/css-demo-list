<template>
  <div class="css2">
    <h1>flex</h1>
    <h2>间隙固定 子元素宽度适应</h2>
    <div class="space-fixed-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
    <h2>无间隙有边框 子元素宽度适应</h2>
    <div class="nospace-hasborder-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>
<style lang="scss">
.space-fixed-container{
  display: flex;
  padding:0 20px;
  div{
    flex: 1;
    height: 100px;
    background: red;
    margin-right: 20px;
    //空隙居然可以用border 透明来写。。
    &:last-child{
      margin-right: 0
    }
  }
}
.nospace-hasborder-container{
  display: flex;
  div{
    flex: 1;
    height: 100px;
    background: red;
    // 可以用 伪元素 绝对定位
    //这里只用 偏移 在有背景色的情况下会被这户 但是模糊度可以显示出来，，，不懂
    box-shadow: 1px 0 2px 1px #f6f6f6;
  }
}
</style>
