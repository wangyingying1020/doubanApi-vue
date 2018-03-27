<template>
  <div class="main">
     <div class="con">
          <img :src="list.images.large" alt="">
      <div class="title">
          {{list.title}}
      </div>
      <div class="jj">
          简介：
          <span>{{list.summary}}</span>
      </div>
      <div class="yy">
          演员：
          <span v-for="tiem in list.casts">{{tiem.name}}</span>
      </div>
      <div class="dy">
          导演：
          <span v-for="tiem in list.directors">{{tiem.name}}</span>
      </div>
      <div class="zgf">
          最高分：
          <span>{{list.rating.max}}</span>
      </div>
      <div class="zdf">
          最低分：
          <span>{{list.rating.min}}</span>
      </div>
      <div class="pjf">
          平均分：
          <span>{{list.rating.average}}</span>
      </div>
    <div class="nf">
        年份：
        <span>{{list.year}}</span>
    </div>
    <div class="lx">
        类型：
        <span v-for="tiem in list.genres">{{tiem}}</span>
    </div>
    <div class="gj">
        国家：
        <span v-for="tiem in list.countries">{{tiem}}</span>
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
      }
  },
  methods:{
    zzry:function(){
        //获取正在热映的信息
        jsonp("https://api.douban.com/v2/movie/subject/"+this.author,null,(err,data)=>{
            if (err) {
                console.log(err.message);
            } else {
                /* data.list.map((item) => this.list.push(item)) */
                console.log(data);
                this.list=data;
               
            }
        })
    }
  },
   computed: {
      author () {
        return this.$store.state.author
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
    .main .con div span{
        margin-right: 15px;
    }
</style>
