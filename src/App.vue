<template>
  <div id="app">
    <footer-guide/>
    <router-view/>
  </div>
</template>
<script>
import footerGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    footerGuide
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
</style>
