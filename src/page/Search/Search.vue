<template>
    <div class="search">
        <header-top>
            <p>搜索</p>
        </header-top>
        <div class="search_container">
            <input type="search" name="search" placeholder="请输入商家或美食名称">
            <input type="submit" name="submit" value="搜索">
        </div>
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
    .search{
        padding-top: 45px;
        .search_container{
            display: flex;
            justify-content: space-between;
            background:#fff;
            padding: 12px 8px;
            input[name="search"]{
                background: #f2f2f2;
                width: 79%;
                border: 4px solid #f2f2f2;
                color: #333;
                font-size: 14px;
                border-radius: 2px;
                padding: 0 4px;
                font-weight: bold;
            }
            input[name="submit"]{
                width: 18%;
                background: #02a774;
                color: #fff;
                font-size: 16px;
                border: 4px solid #02a774;
                font-weight: 700;
                border-radius: 2px;
            }
        }
    }
</style>