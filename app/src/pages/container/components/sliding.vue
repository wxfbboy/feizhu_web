<template>
  <div>
    <div class="sliding" v-show="showSliding" @click="closeSliding">
      <swiper ref="mySwiper" :options="swiperOptions" class="sliding-swiper">
        <swiper-slide v-for="(item,index) in images" :key="index">
            <img :src="item.image" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
    import Bus from '../../../bus/bus.js';
    export default{
        name:'sliding',
        data() {
            return {
              swiperOptions: {
                  pagination: {
                    el: '.swiper-pagination',
                  },
                  loop:false,
                  paginationType:'progress',
              },
              showSliding:false
            }
        },
        props:{
           images:Array
        },
        computed: {
          swiper() {
            // return this.$refs.mySwiper.$swiper
          }
        },
        mounted() {
            Bus.$on('active-sliding',(data)=>{
                this.showSliding = data;
            })
        },
        methods:{
            closeSliding:function(){
                this.showSliding = false;
            }
        }
    }
</script>

<style scoped="scoped">
   .sliding{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: black;
        z-index: 999;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .sliding-swiper{
        overflow: hidden;
        height: 0;
        width: 100%;
        padding-bottom: 100%;
    }
    .swiper-pagination{
        color:white;
        position: fixed;
        bottom:1rem;
    }
</style>
