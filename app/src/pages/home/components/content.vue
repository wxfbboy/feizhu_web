<template>
    <div class="content">
          <div class="content-image">
              <img src="../../../assets/image/gong1.jpg" />
          </div>
          <div class="content-list">
              <div class="content-name">
                  大理大理大理大理大理
              </div>
              <div class="content-biao">
                  <p>小标签</p>
              </div>
          </div>
    </div>
</template>

<script>
    export default{
        name:'home-content',
        data(){
            return {

            }
        }
    }
</script>

<style scoped="scoped">
    .content{
        display: flex;
        height: auto;
        overflow: hidden;
        justify-content: space-between;
        padding:0.2rem 0;
        border-bottom: 1px solid #e8e8e8;
    }
    .content-image{
      width: 100%;
      height: auto;
      margin-left: 0.1rem;
      margin-right: 0.2rem;
    }
    .content-image img{
      width: 100%;
      display: block;
    }
    .content-list{
      width: 100%;
      margin-right: 0.1rem;
      position:relative;
    }
    .content-name{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 0.3rem;
      line-height: 1.5;
      font-weight: bold;
    }
    .content-biao{
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 0.24rem;
    }
    .content-biao p{
      border:1px solid darkcyan;
      color:#0086b3;
      padding: 0.03rem .1rem;
      border-radius: 1rem;
    }
</style>
