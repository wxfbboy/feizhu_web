<template>
    <div>
       <Header />
       <SwiperModule />
       <Ticket />
       <Content />
       <Nav />
    </div>
</template>

<script>
    import Nav from './components/nav.vue';
    import Header from './components/header.vue';
    import SwiperModule from './components/swiper.vue';
    import Ticket from './components/ticket.vue';
    import Content from './components/content.vue';
    export default{
        name:'home',
        components:{
            Nav,
            Header,
            SwiperModule,
            Ticket,
            Content
        }
    }
</script>

<style>
</style>
