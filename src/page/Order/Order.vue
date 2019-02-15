<template>
    <div class="order">
        <header-top>
            <p>订单列表</p>
        </header-top>
        <section class="order_login">
            <img src="../../assets/lib/img/order/person.png" alt="">
            <h3>登陆后查看 外卖订单</h3>
            <button>立即登录</button>
        </section>
    </div>
</template>
<script>
import headerTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        headerTop
    }
}
</script>
<style lang="less" scoped>
    .order{
        padding-top: 45px;
        width: 100%;
        height:100%;
        box-sizing: border-box;
        .order_login{
            padding-top: 95px;
            width: 60%;
            margin: 0 auto;
            text-align: center;
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
           h3{
               color: #6a6a6a;
               font-size: 17px;
               padding: 10px 0;
           }
           button{
               background: #02a774;
               font-size: 14px;
               padding: 10px 20px;
               color: #fff;
               border-radius: 5px;
               font-weight: bold;
           }
        }
    }
</style>