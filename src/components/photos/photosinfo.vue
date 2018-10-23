<template>
    <div>
       <nav id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll" >
                    <a :class="['mui-control-item',item.id===0?'mui-active':''] " href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in imgcate" :key="item.id"  @click='getPhotoList(item.id)'> 
                        {{ item.title }}
                    </a >
                </div>    
            </div>
       </nav>
        <ul class="photo-list">
            <li v-for="(item,index) in list" :key="index">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </li>
        </ul>      
    </div>
</template>

<script>
import mui from "../../assets/lib/mui/js/mui.js";
export default {
  data() {
    return {
      imgcate: [{ title: "全部", id: 0 }],
      list: []
    };
  },
  created() {
    this.getimgcate();
    this.getPhotoList(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getimgcate() {
      this.$http.get("api/getimgcategory").then(res => {
        if (res.body.status === 0) {
          this.imgcate = this.imgcate.concat(res.body.message);
          console.log(this.imgcate);
        }
      });
    },
    getPhotoList(id) {
      // console.log(id);
      this.$http.get("api/getimages/" + id).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped >
* {
  touch-action: pan-y;
}
.mui-slider{
  position: fixed; 
  background-color: rgb(200, 200, 200,1); 
}
.photo-list {
 
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  padding-top: 40px;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    /*图片懒加载样式 mint-ui提供*/
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }}
</style>