<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
        <img src="../../../assets/image/gong1.jpg" />
    </swiper-slide>
    <swiper-slide>
        <img src="../../../assets/image/fengmian.jpeg" />
    </swiper-slide>
    <swiper-slide>
        <img src="../../../assets/image/gong1.jpg" />
    </swiper-slide>
    <swiper-slide>
        <img src="../../../assets/image/fengmian.jpeg" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
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
              }
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
        }
    }
</script>

<style>
</style>
