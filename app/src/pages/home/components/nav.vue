<template>
    <div>
        <div  class="nav">
          <router-link to="/">
            <div>
                <img v-bind:src="shouyeb" alt="" />
                <p>首页</p>
            </div>
          </router-link>
          <router-link to="/personal">
            <div>
                <img v-bind:src="wodea" alt="" />
                <p>我的</p>
            </div>
          </router-link>  
        </div>
    </div>
</template>

<script>
    import shouyeb from '../../../assets/image/shouyeb.png';
    import wodea from '../../../assets/image/wodea.png';
    export default{
        name:'home-nav',
        data(){
            return {
              shouyeb,
              wodea
            }
        }
    }
</script>
<style>
    .nav{
        display: flex;
        justify-content: space-between;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        background-color: rgb(235,235,228,1);
        padding: 0 0.4rem;
        z-index: 9999;
    }
    .nav img{
        width: 0.5rem;
        height: 0.5rem;
    }
    .nav p{
        font-size: 0.26rem;
        padding-top: 0.04rem;
    }
</style>
