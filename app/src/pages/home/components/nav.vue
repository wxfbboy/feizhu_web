<template>
    <div>
        <div  class="nav">
          <router-link to="/">
            <div>
                <img v-bind:src="shouyeb" alt="" />
                <p>首页</p>
            </div>
          </router-link>
          <router-link to="/personal">
            <div>
                <img v-bind:src="wodea" alt="" />
                <p>我的</p>
            </div>
          </router-link>
        </div>
    </div>
</template>

<script>
    import shouyeb from '../../../assets/image/shouyeb.png';
    import wodea from '../../../assets/image/wodea.png';
    export default{
        name:'home-nav',
        data(){
            return {
              shouyeb,
              wodea
            }
        }
    }
</script>
<style scoped="scoped">
  @import url("../../../assets/style/public.css");
</style>
