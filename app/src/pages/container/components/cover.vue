<template>
    <div class="cover">
        <div class="cover-tipers">
            <img src="../../../assets/image/gong1.1.jpg" />
        </div>
        <div class="cover-title">
            大理
        </div>
        <div class="cover-image">
            100张图片
        </div>
        <div class="classify">
            <div>
                <img src="../../../assets/image/jingdian.png" />
                <p>景点</p>
            </div>
            <div>
                <img src="../../../assets/image/meishi.png" />
                <p>美食</p>
            </div>
            <div>
                <img src="../../../assets/image/gouwu.png" />
                <p>购物</p>
            </div>
            <div>
                <img src="../../../assets/image/zhusu.png" />
                <p>住宿</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'cover',
        data(){
          return {
          }
        }
    }
</script>

<style scoped="scoped">
    .cover{
        position: relative;
    }
   .cover-title{
        position: absolute;
        top:2rem;
        left: 0.5rem;
        font-size: 0.5rem;
        color: white;
    }
    .cover-image{
        position: absolute;
        top:3rem;
        left: 0.5rem;
        font-size: 0.36rem;
        color: white;
    }
    .classify{
        position: absolute;
        bottom:0.2rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        width: 100%;
    }
    .classify img{
        width: 45%;
    }
    .classify p{
        color: white;
        padding: 0.1rem;
        font-size: 0.3rem;
    }
</style>
