<template>
  <div class="css1">
    <div class="two_btn">
      <div class="btn">test1</div>
      <div class="btn">test2</div>
    </div>
  </div>
</template>
<style lang="scss">
.two_btn{
  padding: 10px;
  display: flex;
  .btn{
    flex: 1;
    margin: 0 5px;
        background: #fff;
    height: 44px;
    line-height: 44px;
    width: 200px;
    text-align: center;
    color: #dd2626;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 4px;
        border: 1px solid #dd2626;
        // -webkit-transform-origin: 0 0;
        // transform-origin: 0 0;
        // -webkit-transform: scale(0.5, 0.5);
        // transform: scale(0.5, 0.5);
        box-sizing: content-box;
    }
  }
}
</style>
