<template>
  <div class="css2">
    <h1>box-shadow</h1>
    <h2>y偏移量 box-shadow: 0 1px red</h2>
    <div class="shadow shadow1">
    </div>
    <h2>x偏移量 box-shadow: 1px  0 red</h2>
    <div class="shadow shadow2">
    </div>
    <h2>模糊半径>=0 box-shadow: 0 0 1px red </h2>
    <div class="shadow shadow3">
    </div>
    <h2>阴影扩散半径: 大于0时隐隐扩大 小于0时缩小 0 box-shadow: 0 0 1px 1px red</h2>
    <div class="shadow shadow4">
    </div>
    <h2>box-shadow: inset 0 0 1px 1px red</h2>
    <div class="shadow shadow5">
    </div>
    <h1>单边阴影 右：box-shadow</h1>
    <h2>box-shadow: 5px 0 10px -5px red;</h2>
    <div class="shadow shadow6">
    </div>
    <h2>box-shadow: 5px 0 5px -5px red;</h2>
    <div class="shadow shadow7">
    </div>
    <h1>两边阴影 右上：box-shadow</h1>
    <h2>box-shadow: 5px -5px 10px -5px red;</h2>
    <div class="shadow shadow8">
    </div>
    <h1>三边阴影 无右 组合：box-shadow</h1>
    <h2>box-shadow: -5px -5px 10px -4px red,-5px 5px 10px -4px red;</h2>
    <div class="shadow shadow9">
    </div>
  </div>
</template>
<style lang="scss">
.shadow{
  height: 50px;
  width: 100px;
  margin: 10px auto;
  border: 1px solid #009
}
.shadow1{
  box-shadow: 0 1px red
}
.shadow2{
  box-shadow: 1px  0 red
}
.shadow3{
  box-shadow: 0 0 1px red
}
.shadow4{
  box-shadow: 0 0 1px 1px red
}
.shadow5{
  box-shadow: inset 0 0 1px 1px red
}
.shadow6{
  box-shadow: 5px 0 10px -5px red;
}
.shadow7{
  box-shadow: 5px 0 5px -5px red;
}
.shadow8{
  box-shadow: 5px -5px 10px -5px red;
}
.shadow9{
  box-shadow: -5px -5px 10px -4px red,-5px 5px 10px -4px red;
  // box-shadow:-5px -5px 10px  -4px #00ff00,-5px 5px 10px -4px #00ff00;
}
</style>
