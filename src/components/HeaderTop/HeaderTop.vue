<template>
    <div class="header-top">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .header-top{
        position: fixed;
        z-index: 200;
        left: 0;
        top: 0;
        width: 100%;
        height: 45px;
        background: #02a774;
        .header-search{
            position: absolute;
            top: 50%;
            left: 15px;
            transform: translateY(-50%);
            .icon-sousuo{
                font-size: 25px;
                color: #fff;
            }
        }
        .header-login{
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            color: #fff;
            font-size: 14px;
        }
        p{
            text-align: center;
            line-height: 45px;
            font-size: 0.8rem;
            color: #fff;
            .header-title{
                font-size: 0.8rem;
            }
        }
        .header-position{
            width: 50%;
            margin-left: 20%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
</style>
