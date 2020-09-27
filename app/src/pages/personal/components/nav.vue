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
<style>
  .nav {
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background-color: rgb(235, 235, 228, 1);
    padding: 0 0.4rem;
    z-index: 9999;
  }

  .nav img {
    width: 0.5rem;
    height: 0.5rem;
  }

  .nav p {
    font-size: 0.26rem;
    padding-top: 0.04rem;
  }
</style>
