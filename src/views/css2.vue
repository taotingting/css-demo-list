<template>
  <div class="css2">
    <h1>圣杯布局</h1>
    <h2>浮动</h2>
    <div class="float-container">
      <div class="middle">middle middle middle middle middle middle middle middle middle middle middle middle </div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <h2>flex</h2>
    <div class="flex-container">
      <div class="left">left</div>
      <div class="middle">middle middle middle middle middle middle middle middle middle middle middle middle </div>
      <div class="right">right</div>
    </div>
  </div>
</template>
<style lang="scss">
.css2{
  width: 100%
}
.float-container{
  padding: 0 100px;
  overflow: hidden;
  min-width: 300px;
  div{
    height: 300px;
    float: left;
    position: relative;
  }
  .middle{
    width: 100%;
    background: gold
  }
  .left{
    background: red;
    width:100px;
    margin-left:-100%;
    left:-100px
  }
  .right{
    background: rebeccapurple;
    width:100px;
    margin-left:-100px;
    right: -100px
  }
}
.flex-container{
  display: flex;
  .left,.right{
    width: 100px
  }
  .middle{
    flex:1;
    background: gold
  }
  .left{
    background: red
  }
  .right{
    background: rebeccapurple
  }
}
</style>
