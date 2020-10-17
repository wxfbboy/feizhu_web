<template>
    <div>
        <Cover :currlum="currlum" :image="image" :images="images" />
        <Revert :currlum="currlum" />
        <Sliding :images="images" v-show="showSliding" />
    </div>
</template>

<script>
    import { goods } from '../../api/api.js';
    import Cover from './components/cover.vue';
    import Revert from './components/revert.vue';
    import Sliding from './components/sliding.vue';
    export default{
        name:"container",
        data(){
            return {
                productId : 2,
                currlum : '',
                image:'',
                images:[],
                showSliding:true
            }
        },
        components:{
            Cover,
            Revert,
            Sliding
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
