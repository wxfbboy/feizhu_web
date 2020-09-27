<template>
    <div>
        <Header />
        <Nav />
    </div>
</template>

<script>
    import Nav from './components/nav.vue';
    import Header from './components/header.vue';
    export default{
        name:'home',
        components:{
            Nav,
            Header
        }
    }
</script>

<style>
</style>
