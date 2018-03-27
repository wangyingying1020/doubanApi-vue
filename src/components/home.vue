<template>
  <div class="main">
      <div class="top_con">
        <div class="top">
        <h1>最新的电影资源</h1>
        <div class="search">
          <input type="text">
          <img src="../assets/seh.png" alt="">
        </div>
      </div>
      <div class="bottom">
        <ul>
          <router-link  to="home1" tag="li" >正在热映</router-link>
          <router-link  to="home2" tag="li">即将上映</router-link>
          <router-link  to="home3" tag="li">top25</router-link>
          <router-link  to="home4" tag="li">口碑榜</router-link>
          <router-link  to="home5" tag="li">北美票房榜</router-link>
          <router-link  to="home6" tag="li">新片榜</router-link>
          <!-- https://developers.douban.com/wiki/?title=movie_v2#in_theaters -->
        </ul>
      </div>
      </div>
       <div class="con">
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return{

      }
  }
}
</script>
<style scoped>
.main{
    width: 100%;
   /*  height: 1020px; */
}
.top_con{
   width: 100%;
   background: url(../assets/5a3b60d51e1c7.jpg);
   padding-bottom: 10px;
}
.top{
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;
  background: url(../assets/5a3b60d51e1c7.jpg);
}
.top h1{
  font-weight: 900;
  padding: 0;
  margin: 0;
  line-height: 100px;
  color: red;
}
.search{
  position: relative;
  top: 25px;
  left: 0;
}
.search img{
  width: 25px;
  height: 25px;
  position: absolute;
  top: 5px;
  right:5px;
}
.search input{
  width: 150px;
  height: 35px;
  border-radius: 5px;
  border:1px solid #000;
  position: absolute;
  top: 0;
  right:0;
}
.bottom{
  width: 100%;
}
.bottom ul{
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* margin: 0 20px; */
  color: #666;
  font-family: "微软雅黑";
  font-weight: 900;
}
.xz{
  background: blue;
  color: #000;
}
.bottom ul li{
  width: 16%;
  text-align: center;
  line-height: 30px;
}


/* 内容 */
.con{
  width: 100%;
}
</style>


