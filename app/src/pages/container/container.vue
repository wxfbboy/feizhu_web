<template>
    <div>
        <Cover />
        <Revert />
    </div>
</template>

<script>
    import Cover from './components/cover.vue';
    import Revert from './components/revert.vue'
    export default{
        name:"container",
        components:{
            Cover,
            Revert
        }
    }
</script>

<style>

</style>
