<template>
  <div class="main">
     <div class="con">
          <img src="../assets/logo.png" alt="">
      <div class="title">
          我们的小时代
      </div>
      <div class="jj">
          简介：
          <span>这个世界总是有着太多的不如意，要看你去怎么评判这个世界了，人啊活着就是为了自己，每个人都是自私的，但是我们总是理所应道的要求别人伟大着，而自己苟且的自私着。</span>
      </div>
      <div class="yy">
          演员：
          <span>艰是啥</span>
          <span>艰是啥</span>
          <span>艰是啥</span>
      </div>
      <div class="dy">
          导演：
          <span>冯小刚</span>
      </div>
      <div class="zgf">
          最高分：
          <span>9.6</span>
      </div>
      <div class="zdf">
          最低分：
          <span>9.6</span>
      </div>
      <div class="pjf">
          平均分：
          <span>9.6</span>
      </div>
    <div class="nf">
        年份：
        <span>2017</span>
    </div>
    <div class="lx">
        类型：
        <span>冒险</span>
        <span>喜剧</span>
        <span>奇幻</span>
    </div>
    <div class="gj">
        国家：
        <span>美国</span>
    </div>
     </div>
  </div>
</template>
<script>
import jsonp from 'jsonp'
export default {
  created(){
      this.zzry();
  },
  data(){
      return{
       list:"",
       bh:1764796
      }
  },
  methods:{
    zzry:function(){
        //获取正在热映的信息
        jsonp("https://api.douban.com/v2/movie/subject/"+this.bh,null,(err,data)=>{
            if (err) {
                console.log(err.message);
            } else {
                /* data.list.map((item) => this.list.push(item)) */
                console.log(data);
               
            }
        })
    }
  }
}
</script>
<style scoped>
    .main{
        width: 100%;
    }
    .main .con{
        width: 250px;
        margin: 0 auto;
    }
    .main .con img{
        margin-bottom: 20px;
    }
    .main .con div{
        margin-bottom: 25px;
        color: #666;
        font-size: 12px;
    }
    .main .con div.title{
        color: #000;
        font-size: 16px;
        font-weight: 900;
    }
</style>
