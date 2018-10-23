<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入内容" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postCmt">发表评论</mt-button>
        <div class="cmt-list" v-for="(item, i) in comment" :key="i">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{ item.user_name}}&nbsp;&nbsp;发表时间:{{ item.add_time | dateformat}}
                </div>
                <div class="cmt-body">{{ item.content}}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      comment: [],
      msg: ""
    };
  },
  created() {
    this.getCmt();
  },
  methods: {
    getCmt() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(res => {
          if (res.body.status === 0) {
            this.comment = this.comment.concat(res.body.message);
            // console.log(this.comment);
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getCmt();
    },
    postCmt() {
      if (this.msg.trim() === "") {
        alert("评论不能为空");
        return false;
      } else {
        this.$http.post("api/postcomment/" + this.id).then(res => {
          if (res.body.status === 0) {
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.comment.unshift(cmt);
            this.msg = "";
          }
        });
      }
    }
  },
  props: ["id"]
};
</script>

<style scoped lang="less">
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>