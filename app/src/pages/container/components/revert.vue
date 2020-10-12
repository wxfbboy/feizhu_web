<template>
    <div>
        <router-link to="/">
            <div class="header-abs" v-show="showVet">
                <img src="../../../assets/image/fanhui.png" />
            </div>
        </router-link>
        <div class="header-fixed" v-show="!showVet">
            <router-link to="/">
                <div class="header-fixed-back">
                    <img src="../../../assets/image/fanhui.png" />
                </div>
            </router-link>
            <p>大理</p>
        </div>
        <div style="height: 18rem;">

        </div>
    </div>
</template>

<script>
    export default{
        name:"revert",
        methods:{
            revert:function(){
                let scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
                if(scrollDistance > 65){
                    this.showVet = false;
                }
                else{
                    this.showVet = true;
                }
            }
        },
        created:function(){
            window.addEventListener('scroll',this.revert);
        },
        data(){
            return {
                showVet:true
            }
        }
    }
</script>

<style>
    .header-abs{
        position: absolute;
        left: .2rem;
        top:.2rem;
        line-height: .8rem;
        width: .8rem;
        height: .8rem;
        text-align: center;
        border-radius: 50%;
        background: rgba(0,0,0,0.8);
    }
    .header-abs img{
      width: .6rem;
      color:white;
    }
    .header-fixed{
      position: fixed;
      top:0;
      left: 0;
      right: 0;
      height: .8rem;
      line-height: .8rem;
      text-align: center;
      color:#fff;
      background: #0086B3;
      font-size: 0.35rem;
      z-index: 2;
    }
    .header-fixed p{
      color: #fff;
    }
    .header-fixed-back{
      position: absolute;
      top:0;
      left: 0;
      width: .6rem;
      color: #fff;
      text-align: center;
      font-size: 0.4rem;
    }
    .header-fixed-back img{
      width: .6rem;
      color:white;
      padding-bottom: 0.09rem;
    }
</style>
