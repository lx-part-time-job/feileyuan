<template>
  <div class="content container-fluid">
    <!-- bread -->
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>
          {{firstBread}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{firstBread}}</el-breadcrumb-item>
        <el-breadcrumb-item class="bread-title">{{articleInfo.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- article -->
    <div class="article">
      <h3 class="article-title tc">{{articleInfo.title}}</h3>
      <div class="article-wrapper tc">
        <span class="article-info icon-news">新闻资讯</span>
        <span class="article-info icon-author">{{articleInfo.authorname}} 发表于 {{$formatDate(articleInfo.publishtime, "yyyy-MM-dd hh:mm:ss")}}</span>
        <span class="article-info icon-watch">阅读数 {{viewCount}}</span>
        <span class="article-info icon-comment">评论数 {{commentCount}}</span>
      </div>

      <!-- 用于填充资讯内容 -->
      <div class="article-content" v-html="articleInfo.content"></div>

      <!-- 分页器 -->
      <!-- <div class="pagination ov">
        <span class="pagination-btn pagination-prev"></span>
        <ul class="pagination-btns ov">
          <li class="pagination-btn fl">1</li>
          <li class="pagination-btn fl">2</li>
          <li class="pagination-btn fl">3</li>
          <li class="pagination-btn fl">4</li>
        </ul>
        <span class="pagination-btn pagination-next"></span>
      </div> -->
    </div>

    <!-- 相关 -->
    <div class="related part">
      <div class="related-links-list fl">
        <h4 class="part-title">相关阅读</h4>
        <a class="related-link textEllipsis cursor" @click="toRelatedArticle(item.id)" v-for="item in recommendLeftList">{{item.title}}</a>
      </div>
      <div class="related-links-img fl">
          <a v-for="item in recommendRightList" @click="toRelatedArticle(item.id)" class="related-link textEllipsis tc cursor">
            <img class="related-img" :src="$IMG_URL + item.imgurl" alt="">
            <p class="textEllipsis">{{item.title}}</p>
          </a>
      </div>

    </div>

    <!-- comment -->
    <div class="comment part">
      <h4 class="part-title">评论（{{commentCount}}条）</h4>

      <div class="comment-box relative">
        <!-- 登录后，输入评论的容器 -->
        <textarea class="comment-content" v-model="comment" :readonly="!checkLoginState()"></textarea>

        <!-- 未登录时 -->
        <div v-if="!checkLoginState()" class="comment-login ov">
          <span class="fl">期待你的神评</span>
          <router-link class="fl cursor" to="/login">请先登录</router-link>
        </div>
      </div>
      <input type="button" value="发表回复" class="comment-reply" @click="publishReply">
    </div>

    <!-- 评论列表 -->
    <div class="lists part">
      <div class="list" v-for="(item, index) in commentList" :key="index">
        <div>
          <div class="list-content ov">
            <img class="fl list-img" src="../../assets/images/common/user-head-img.png" alt="">
            <div class="fl">
              <div class="ov">
                <span class="fl list-name">{{item.userid}}</span>
                <span class="fl list-date">发表于 {{$formatDate(item.utime, "yyyy-MM-dd hh:mm")}}</span>
              </div>
              <div class="list-detail">{{item.comment}}</div>
            </div>
          </div>
          <div class="list-agrees ov">
            <div class="fr ov">
              <div class="list-agree-btn fl">
                <img src="../../assets/images/common/icon-agree.png" alt="">
                <span>({{item.upcount}})</span>
              </div>
              <div class="list-reply-btn fl">回复</div>
            </div>
          </div>
        </div>
        <div v-if="item.replyList">
          <div class="list-child list" v-for="comment in item.replyList">
            <div>
              <div class="list-content ov">
                <img class="fl list-img" src="../../assets/images/common/user-head-img.png" alt="">
                <div class="fl">
                  <div class="ov">
                    <span class="fl list-name">{{comment.userid}}</span>
                    <span class="fl list-date">发表于 {{$formatDate(comment.utime, "yyyy-MM-dd hh:mm")}}</span>
                  </div>
                  <div class="list-detail">{{comment.comment}}</div>
                </div>
              </div>
              <div class="list-agrees ov">
                <div class="fr ov">
                  <div class="list-agree-btn fl">
                    <img src="../../assets/images/common/icon-agree.png" alt="">
                    <span>({{comment.upcount}})</span>
                  </div>
                  <div class="list-reply-btn fl">回复</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="item.replyList.length > 1" class="list-check-more cursor">
          查看更多回复
        </div>
      </div>

      <!-- <div class="ov">
        <div class="list-pagination fr">
          <div class="pagination ov fl">
            <span class="pagination-btn pagination-prev"></span>
            <ul class="pagination-btns ov">
              <li class="pagination-btn fl">1</li>
              <li class="pagination-btn fl">2</li>
              <li class="pagination-btn fl">3</li>
              <li class="pagination-btn fl">4</li>
            </ul>
            <span class="pagination-btn pagination-next"></span>
          </div>
          <div class="pagination-jump fl">
            前往
            <input type="text" placeholder="1"> 页
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
  import backTop from '../../../mixin/back_top';
  export default {
    mixins: [backTop],
    data() {
      return {
        articleInfo: {},
        recommendList: [],
        commentList: [],
        recommendLeftList: [],
        recommendRightList: [],
        firstBread: "",
        comment: "",
        viewCount: "",
        commentCount: ""
      }
    },
    methods: {
      toRelatedArticle(id){
        window.open(location.origin + '/#/' + this.$route.path.split('/')[1] + '/' + id)
      },
      getArticleInfo(url) {
        this.$axios.get(url)
          .then(res => {
            if (res.data.code === 0) {
              this.articleInfo = res.data.data
            }
          })
      },
      getRecommendList(url) {
        this.$axios.get(url)
          .then(res => {
            if (res.data.code === 0) {
              var dw = this.uniqeByKeys(res.data.data,['id']);
              this.recommendList = dw;
              this.recommendRightList = this.recommendList.splice(0, 2);
              this.recommendLeftList = this.recommendList.splice(0, 5);
            }
          })
      },
      getCommentList(url, id, page) {
        this.$axios.post(url, {
          actid: id,
          Infoid: id,
          page: page || 1
        }).then(res => {
          if (res.data.code === 0) {
            this.commentList = res.data.data
          }
        })
      },
      getData() {
        let id = this.$route.params.articleID,
          classify = this.$route.path.split('/')[1],
          infoUrl, recommendUrl, commentUrl, viewCountUrl, commentCountUrl;
        classify === 'news'
          && (infoUrl = '/information/' + id)
          && (recommendUrl = '/recommend/getRecommendInformation/' + id)
          && (commentUrl = '/information/getInfoList/')
          && (viewCountUrl = '/information/update/count/' + id)
          && (commentCountUrl = '/information/getCommentCount/' + id);
        classify === 'activity'
          && (infoUrl = '/activity/activity/' + id)
          && (recommendUrl = '/recommend/getRecommendActivity/' + id)
          && (commentUrl = '/information/getActivityList/')
          && (viewCountUrl = '/activity/update/count/' +id)
          && (commentCountUrl = '/activity/getCommentCount/' + id);
        this.getArticleInfo(infoUrl, id);
        this.getRecommendList(recommendUrl, id);
        this.getCommentList(commentUrl, id);
        this.updateViewCount(viewCountUrl);
        this.getCommentCount(commentCountUrl);
        this.goTop();
      },
      getFirstBread() {
        let nav = this.$route.path.split('/')[1];
        switch (nav) {
          case "news":
            this.firstBread = "资讯";
            break;
          default:
            this.firstBread = "活动";
        }
      },
      checkLoginState() {
        let cookie = this.$getCookie('uInfo');
        let userInfo = JSON.parse(cookie);
        if(userInfo && userInfo.token) {
          return true
        }
      },
      publishReply() {
        let type,
          outid = Number(this.$route.params.articleID),
          classify = this.$route.path.split('/')[1],
          comment = this.comment;
        if(classify === 'news') {
          type = 1
        } else {
          type = 3
        }
        this.$axios.post('/comment/getInfoList/', {
          type, outid, comment,
          touserid: null,
          Commentid: null
        }).then(res => {
          console.log(res)
          if(res.data.code === 0) {
            console.log(res.data.data)
          }
        })
      },
      obj2key(obj, keys) {
        var n = keys.length,
                key = [];
        while (n--) {
          key.push(obj[keys[n]]);
        }
        return key.join('|');
      },
      uniqeByKeys(array, keys) {
        var arr = [];
        var hash = {};
        for (var i = 0, j = array.length; i < j; i++) {
          var k = this.obj2key(array[i], keys);
          if (!(k in hash)) {
            hash[k] = true;
            arr.push(array[i]);
          }
        }
        return arr;
      },
      updateViewCount(url) {
        this.$axios.post(url)
          .then(res => {
            if(res.data.code === 0) {
              this.viewCount = res.data.data
            }
          })
      },
      getCommentCount(url) {
        this.$axios.get(url)
          .then(res => {
            if(res.data.code === 0) {
              this.commentCount = res.data.data
            }
          })
      }
    },
    mounted() {
      this.getData();
      this.getFirstBread();
    },
    watch: {
      $route (to, from) {
        to.params.articleID && this.getData()
      }
    }
  }
</script>
<style lang="scss">
  .bread {
    .el-breadcrumb {
      font-size: 24px;

      .bread-title span {
        color: #0077ff;
      }

      .bread-title span:hover {
        color: #0077ff;
      }
    }
  }
</style>
<style scoped lang="scss">
  /* 面包屑 */

  .bread {
    margin: 20px 0 10px;
    color: rgb(102, 102, 102);
  }

  .article {
    padding: 50px 100px;
    background: #fff;

    .article-title {
      font-size: 24px;
      color: #000;
      line-height: 0.542;
    }

    .article-wrapper {
      margin: 20px auto 35px;
    }

    .article-info {
      font-size: 14px;
      color: #999;
      padding-left: 30px;
      margin-right: 20px;
      line-height: 1.286;
    }

    .icon-news,
    .icon-author,
    .icon-watch,
    .icon-comment {
      background-position: 5px center;
      background-size: 15px;
      background-repeat: no-repeat;
    }

    .icon-news {
      background-image: url('../../assets/images/common/icon-news.png');
    }

    .icon-author {
      background-image: url(../../assets/images/common/icon-author.png);
    }

    .icon-watch {
      background-image: url(../../assets/images/common/icon-watch.png);
      background-size: 20px;
    }

    .icon-comment {
      background-image: url(../../assets/images/common/icon-comment.png);
    }
  }

  .related {
    overflow: hidden;
    margin-top: 20px;
    .related-link {
      font-size: 14px;
      color: #000;
      line-height: 1.5;
    }
    .related-links-list {
      margin-right: 30px;
      width: 400px;
      .related-link {
        width: 100%;
        line-height: 2.143;
      }
    }


    .related-links-img {
      a {
        float: left;
        margin-right: 40px;
        width: 240px;
      }
      img.related-img {
        width: 240px;
        height: 130px;
      }
    }
  }

  .comment-box {
    border-radius: 6px;
    box-shadow: 0 1px 5px 0 #f3f3f3;
  }

  .comment-box,
  .comment-content {
    width: 1100px;
    height: 124px;
  }

  .comment-content {
    background-color: #f3f3f3;
    padding: 15px;
    box-sizing: border-box;
  }

  .comment-login {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 335px;
    height: 50px;
    font-size: 24px;
    line-height: 50px;
  }

  .comment-login > span {
    color: #5ac0c9;
    margin-right: 35px;
  }

  .comment-login a,
  .comment-reply {
    color: #fff;
    width: 145px;
    text-align: center;
    border-radius: 8px;
    background-image: -moz-linear-gradient(0deg, rgb(90, 202, 189) 0%, rgb(124, 160, 201) 100%) !important;
    background-image: -webkit-linear-gradient(0deg, rgb(90, 202, 189) 0%, rgb(124, 160, 201) 100%) !important;
  }

  .comment-reply {
    font-size: 24px;
    line-height: 50px;
    margin-top: 20px;
  }

  .list {
    margin-bottom: 20px;
  }

  .list-img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }

  .list-name,
  .list-date,
  .list-detail {
    font-size: 14px;
    color: #000;
    margin-right: 20px;
  }

  .list-detail {
    margin-top: 10px;
    max-width: 975px;
  }

  .list-agree-btn > * {
    display: inline-block;
    vertical-align: top;
  }

  .list-reply-btn,
  .list-agree-btn > * {
    font-size: 14px;
    color: #000;
    margin-right: 10px;
    cursor: pointer;
  }

  .list-child {
    padding-left: 100px;
  }

  .list-child .list-img {
    width: 40px;
    height: 40px;
  }

  .list-child .list-detail {
    max-width: 905px;
  }

  .list-check-more {
    padding-left: 100px;
    font-size: 14px;
    color: #000;
  }

  .part {
    margin-bottom: 20px;
    box-shadow: 0 1px 24px 0 #c3c3c3;
    border-radius: 5px;
    background-color: #fff;
    padding: 25px 50px 20px;
  }

  /* 分页器 */
  .pagination {
    display: table;
    margin: 0 auto;
  }

  .pagination-btn {
    border-radius: 6px;
    width: 28px;
    height: 28px;
    margin-right: 15px;
    font-size: 14px;
    text-align: center;
    line-height: 28px;
    color: #6c6e72;
  }

  .pagination-active {
    color: #5ac0c9;
  }

  .pagination-btn:first-child {
    margin-left: 15px;
  }

  .pagination-btns,
  .pagination-prev,
  .pagination-next {
    display: table-cell;
  }

  .pagination-prev,
  .pagination-next {
    background-color: #b2b2b2;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .pagination-prev {
    background-color: #cfcfcf;
    background-image: url(../../assets/images/common/icon-arrow-left.png)
  }

  .pagination-next {
    background-image: url(../../assets/images/common/icon-arrow-right.png)
  }

  .pagination-jump {
    font-size: 14px;
    color: #6c6e72;
    line-height: 1.714;
    margin-left: 15px;
  }

  .pagination-jump > input {
    display: inline-block;
    width: 65px;
    height: 25px;
    text-align: center;
    vertical-align: middle;
    border-radius: 4px;
    border: 1px solid #e2e4e9;
    margin: 0 5px;
  }

  .container-fluid {
    width: 1200px;
    margin: 0 auto;
  }

  .ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  a {
    display: block;
  }

  .part-title {
    font-size: 24px;
    color: #000;
    margin-bottom: 10px;
  }

  input, textarea {
    outline: none;
    border: none;
  }

  textarea {
    resize: none;
  }

  .relative {
    position: relative;
  }
  .article-content{
    font:17px/32px Microsoft Yahei;
    color:#404040;
    margin:32px 0 0;
  }
  .article-content p{
    padding: 5px 0;
  }
</style>
