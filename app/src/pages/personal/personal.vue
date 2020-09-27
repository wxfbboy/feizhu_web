<template>
    <div>
        <My />
        <Nav />
    </div>
</template>

<script>
  import Nav from './components/nav.vue';
  import My from './components/my.vue';
  export default{
      name:'personal',
      components:{
          Nav,
          My
      }
  }
</script>

<style>
</style>
