<template>
    <div class="footer_guide">
        <router-link tag="a" to="/" class="guide_item">
            <span class="item_icon">
                <i class="iconfont icon-waimai"></i>
            </span>
            <span>外卖</span>
        </router-link>
        <router-link tag="a" to="/search" class="guide_item">
            <span class="item_icon">
                <i class="iconfont icon-search"></i>
            </span>
            <span>搜索</span>
        </router-link>
        <router-link tag="a" to="/order" class="guide_item">
            <span class="item_icon">
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>订单</span>
        </router-link>
        <router-link tag="a" to="/profile" class="guide_item">
            <span class="item_icon">
                <i class="iconfont icon-geren"></i>
            </span>
            <span>我的</span>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .footer_guide{
        width: 100%;
        height: 50px;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        display: flex;
        z-index: 200;
        &::before{
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 100%;
            height: 1px;
            background: #e4e4e4;
        }
        a{
            font-size: 12px;
            display: flex;
            flex: 1;
            flex-direction: column;
            color: #999;
            text-align: center;
            margin: 5px;
            &.router-link-exact-active{
                color: #02a774;
            }
            .item_icon{
                margin-bottom: 2px;
                .iconfont{
                    font-size: 22px;
                }
            }
        }
    }
</style>