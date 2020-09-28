<template>
  <div>
    <div class="nav">
      <router-link to="/">
        <div>
          <img v-bind:src="shouyea" alt="" />
          <p>首页</p>
        </div>
      </router-link>
      <router-link to="/personal">
        <div>
          <img v-bind:src="wodeb" alt="" />
          <p>我的</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import shouyea from '../../../assets/image/shouyea.png';
  import wodeb from '../../../assets/image/wodeb.png';
  export default {
    name: 'home-nav',
    data() {
      return {
        shouyea,
        wodeb
      }
    }
  }
</script>
<style scoped="scoped">
  @import url("../../../assets/style/public.css");
</style>
