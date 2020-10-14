<template>
    <div>
        <Cover :currlum="currlum" :image="image" :images="images" />
        <Revert :currlum="currlum" />
    </div>
</template>

<script>
    import { goods } from '../../api/api.js';
    import Cover from './components/cover.vue';
    import Revert from './components/revert.vue'
    export default{
        name:"container",
        data(){
            return {
                productId : 2,
                currlum : '',
                image:'',
                images:[]
            }
        },
        components:{
            Cover,
            Revert
        },
        mounted:function(){
            goods(this.productId).then((res)=>{
                let data = res.data;
                this.currlum = data.curriculum;
                this.image = data.image;
                this.images = data.images;
            }).catch((error)=>{
                console.log(error);
            });
        }
    }
</script>

<style>

</style>
