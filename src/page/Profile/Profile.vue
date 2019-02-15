<template>
    <div class="profile">
        <header-top>
            <p>我的</p>
        </header-top>
        <section class="profile-number">
            <router-link to="" href="javascript:;">
                <div class="profile-image">
                    <i class="iconfont icon-person"></i>
                </div>
                <div class="user-info">
                    <p>登录/注册</p>
                    <p>
                        <i class="iconfont icon-shouji icon-mobile"></i>
                        <span class="icon-mobile-number">暂无绑定手机号</span>
                    </p>
                </div>
                <div class="arrow">
                    <i class="iconfont icon-jiantou1"></i>
                </div>
            </router-link>
        </section>
        <section class="profile-info-data">
            <a href="javascript:;" class="info-data-link">
                <span>0.00</span>元
                <p>我的余额</p>
            </a>
            <a href="javascript:;" class="info-data-link">
                <span>0.00</span>个
                <p>我的优惠</p>
            </a>
            <a href="javascript:;" class="info-data-link">
                <span>0.00</span>分
                <p>我的积分</p>
            </a>
        </section>
        <section class="profile_my_order">
            <a href="javascript:;">
                <span>
                    <i class="iconfont icon-order-s"></i>
                </span>
                <div class="my_order_div">
                    <span>我的订单</span>
                    <span class="my_order_icon">
                        <i class="iconfont icon-jiantou1"></i>
                    </span>
                </div>
            </a>
            <a href="javascript:;">
                <span>
                    <i class="iconfont icon-jifen"></i>
                </span>
                <div class="my_order_div">
                    <span>积分商城</span>
                    <span class="my_order_icon">
                        <i class="iconfont icon-jiantou1"></i>
                    </span>
                </div>
            </a>
            <a href="javascript:;">
                <span>
                    <i class="iconfont icon-vip"></i>
                </span>
                <div class="my_order_div">
                    <span>硅谷外卖会员卡</span>
                    <span class="my_order_icon">
                        <i class="iconfont icon-jiantou1"></i>
                    </span>
                </div>
            </a>
        </section>
        <section class="profile_my_order">
            <a href="javascript:;">
                <span>
                    <i class="iconfont icon-fuwu"></i>
                </span>
                <div class="my_order_div">
                    <span>我的订单</span>
                    <span class="my_order_icon">
                        <i class="iconfont icon-jiantou1"></i>
                    </span>
                </div>
            </a>
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
    .profile{
        padding-top: 45px;
        .profile-number{
            background: #02a774;
            
            position: relative;
            &::before{
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                z-index: 100;
                width: 100%;
                height: 1px;
                background: #fff;
            }
            a{
                box-sizing: border-box;
                display: block;
                width: 100%;
                padding: 20px 10px;
                color: #fff;
                overflow: hidden;
                .profile-image{
                    float: left;
                    width: 3rem;
                    height: 3rem;
                    overflow: hidden;
                    border-radius: 50%;
                    vertical-align: top;
                    color: #7e8c8d;
                    .icon-person{
                        font-size: 3rem;
                        background: #e4e4e4;
                    }
                }
                .user-info{
                    float: left;
                    margin-left: 10px;
                    padding-top: .4rem;
                    p{
                        &:nth-of-type(1){
                            font-weight: bold;
                            font-size: .9rem;
                            padding-bottom: .4rem;
                        }
                        &:nth-of-type(2){
                            .icon-mobile{
                                font-size: 1.5rem;
                                width: 1rem;
                                display: inline-block;
                                margin-right: 5px;
                                margin-left: -15px;
                                vertical-align: middle;
                            }
                            .icon-mobile-number{
                                font-size: .7rem;
                            }
                        }
                    }
                }
                .arrow{
                    float: right;
                    line-height: 3rem;
                }
            }
        }
        .profile-info-data{
            display: flex;
            position: relative;
            background: #fff;
            &::before{
                position: absolute;
                content: "";
                left: 0;
                bottom: 0;
                z-index: 100;
                width: 100%;
                height: 1px;
                background: #e4e4e4;
                transform: scaleY(0.5)
            }
            .info-data-link{
                box-sizing: border-box;
                padding: 15px 5px 10px;
                flex:1;
                text-align: center;
                border-right: 1px solid #f1f1f1;
                color: #333;
                
                span{
                    display: inline-block;
                    font-size: 1.5rem;
                    color: #f90;
                    font-weight: bold;
                    padding-bottom: 10px;
                }
                &:nth-of-type(2){
                    span{
                        color: #ff5f3e;
                    }
                }
                &:nth-of-type(3){
                    border: none;
                    span{
                        color: #6ac20b;
                    }
                }
                p{
                    font-size: .7rem;
                    font-weight: 400;
                    color: #666;
                }
            }
        }
        .profile_my_order{
            position: relative;
            margin-top: 10px;
            background: #fff;
            &::before{
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                z-index: 100;
                width: 100%;
                height: 1px;
                background: #e4e4e4;
            }
            a{
                display: flex;
                padding-left:15px;
               
                .iconfont{
                    font-size: 1.5rem;
                    margin-left: -10px;
                }
                &>span{
                    padding-top: 11px;
                    display: inline-block;
                    width: 1rem;
                    height: 1rem;
                    .icon-order-s{
                        color:#02a774;
                    }
                    .icon-jifen{
                        color:#ff5f3e;
                    }
                    .icon-vip{
                        color: #f90;
                    }
                    .icon-fuwu{
                        color:#02a774;
                    }
                }
                .my_order_div{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #f1f1f1;
                    padding: 18px 10px 18px 0;
                    font-size: .8rem;
                    color: #333;
                   
                    .my_order_icon{
                        .icon-jiantou1{
                            font-size: .5rem;
                            color: #bbb;
                        }
                    }
                }
            }
        }
    }
</style>