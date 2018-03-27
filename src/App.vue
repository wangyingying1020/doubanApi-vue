<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      nav_list:["正在热映","即将上映","top250","口碑榜","北美票行榜","新片榜"],

    }
  },
  components:{
    
  }
}
</script>

<style  scoped>
      #app {
}
</style>
