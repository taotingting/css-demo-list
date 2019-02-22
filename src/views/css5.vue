<template>
  <div class="css2">
    <h1>group-list</h1>
    <div class='container'>
        <div class='detials-box'>
            <div class="left">1234</div>
            <div class="right">
              <div class="title-box">
                <p class="title"><span>测试测试测试测试测试测试测试测试</span></p>
                <span class="tips">i</span>
                <span class="tips">i</span>
              </div>
             <div class="title-box">
                <p class="title"><span>测试测试测</span></p>
                <span class="tips">i</span>
                <span class="tips">i</span>
              </div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
        </div>
        <div class='tips-box'>

        </div>
    </div>
  </div>
</template>
<style lang="scss">
.container{
  // width: 100%;
  // overflow: hidden;
  padding:10px 20px;

  .detials-box{
    display: flex;
      background: #f0f0f0;
    .left{
      width: 100px;
      // height: 50px;
      margin-right: 10px;
      background: yellow
    }
    .right{
      flex:1;
      display: flex;
      flex-direction: column;
      background: hotpink;
      text-align: left;
      .title-box{
        display: flex;
        // flex-wrap: nowrap;//超过隐藏的话 目前是一行隐藏 我记得以前都是直接用overflow的 改天试试其他方案
        .title{
          flex:1;
          span{
            overflow: hidden;
            -webkit-box-orient: vertical;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          }
        }
        .tips{
          width: 20px;
          height: 30px;
          margin: 0 5px
        }
      }
    }
  }
}
</style>
