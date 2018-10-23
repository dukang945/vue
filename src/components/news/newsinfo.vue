<template>
    <div class="newsinfo">
        <h3 class="title">{{ newsinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateformat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>

    <div class="content" v-html="newsinfo.content"></div>
    <!-- <comment-box :id="this.id"></comment-box> -->
    </div>
</template>

<script>
// import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: []
    };
  },
  created() {
    this.getnewsinfo();
  },
  methods: {
    getnewsinfo() {
      this.$http
        .get("http://027xin.com:8899/api/getnew/" + this.id)
        .then(res => {
          if (res.body.status === 0) {
            this.newsinfo = res.body.message[0];
            //   console.log(this.newsinfo);
          }
        });
    }
  }
  //   components:{
  //       "comment-box": comment
  //   }
};
</script>

<style  lang="less">
.newsinfo {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>