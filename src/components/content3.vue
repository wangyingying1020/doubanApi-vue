<template>
  <div class="main">
      <ul>
          <li v-for="tiem in list">
             <a>
                 <div><img :src="tiem.images.medium" alt=""></div>
                 <div class="title">{{tiem.title}}</div>
                 <div class="yy">
                     主演：哈哈，哈哈
                 </div>
                 <div class="dy" v-for="tiem1 in tiem.directors">
                     导演：{{tiem1.name}}
                 </div>
             </a>
          </li>
      </ul>
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
        jsonp("https://api.douban.com/v2/movie/top250",null,(err,data)=>{
            if (err) {
                console.log(err.message);
            } else {
                /* data.list.map((item) => this.list.push(item)) */
                console.log(data);
                this.list=data.subjects;
               
            }
        })
    }
  }
}
</script>
<style scoped>
 /*    div.main{
       width: 100%;
       height: 100%;
       box-sizing: border-box;
       padding: 0 20px;
    } */
    .main ul{
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 0;

    }
    .main ul li{
        display: inline-block;
        width: 205px;
        padding-left: 105px;
        padding-top: 55px;
        
    }
    .main ul li img{
        width: 145px;
        height: 200px;
        padding-bottom: 20px;
    }
    .main ul li div.title{
        padding-left: 25px;
        font-weight: 700;
        font-size: 16px
    }
     .main ul li div.yy{
        padding-left: 25px;
        font-size: 12px;
        color: #666;
    }
     .main ul li div.dy{
        padding-left: 25px;
        font-size: 12px;
        color: #666;
    }
</style>
