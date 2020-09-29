<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item,index) in banner" :key="index">
        <img :src="item.image" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
    import { banner } from '../../../api/api.js';
    export default{
        name:'home-swiper',
           data() {
            return {
              swiperOptions: {
                autoplay:{
                  delay:2000
                },
                pagination: {
                  el: '.swiper-pagination',
                },
                loop:true,
              },
              banner:[]
            }
        },
        computed: {
          swiper() {
            // return this.$refs.mySwiper.$swiper
          }
        },
        mounted() {
          // console.log('Current Swiper instance object', this.swiper)
          // this.swiper.slideTo(3, 1000, false)
          banner({})
          .then((res)=>{
              // console.log(res);
              this.banner = res.data;
          })
          .catch((error)=>{
              console.log(error);
          });
        }
    }
</script>

<style>
</style>
