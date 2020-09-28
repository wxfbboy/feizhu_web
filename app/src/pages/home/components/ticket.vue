<template>
    <div class="ticket">
        <div>
            <img src="../../../assets/image/jipiao.jpg" />
            <p>机票</p>
        </div>
        <div>
            <img src="../../../assets/image/jiudian.jpg" />
            <p>酒店</p>
        </div>
        <div>
            <img src="../../../assets/image/huochepiao.jpg" />
            <p>火车票</p>
        </div>
        <div>
            <img src="../../../assets/image/qichepiao.jpg" />
            <p>汽车票</p>
        </div>
        <div>
            <img src="../../../assets/image/menpiao.jpg" />
            <p>门票</p>
        </div>
    </div>
</template>

<script>
    export default{
        name:'home-ticket',
        data(){
            return {

            }
        }
    }
</script>

<style scoped="scoped">
    .ticket{
        display: flex;
        justify-content: space-around;
        text-align: center;
        margin: 0.3rem 0;
    }
    .ticket img{
        width: 88%;
    }
    .ticket p{
        font-size: 0.28rem;
        padding-top: 0.1rem;
    }
</style>
