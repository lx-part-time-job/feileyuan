<template>
  <div class="content container-fluid">
    <!-- bread -->
    <div class="bread">
      <a class="bread-link" href="#">资讯</a>
      <span class="bread-point">·</span>
      <a class="bread-link" href="#">生活那点事</a>
      <span class="bread-point">·</span>
      <a class="bread-link base-color" href="#">个人杂谈</a>
    </div>

    <!-- article -->
    <div class="article part">
      <h3 class="article-title">{{articleInfo.title}}</h3>
      <div class="article-wrapper ov tc">
        <span class="article-info icon-news">新闻资讯</span>
        <span class="article-info icon-author">{{articleInfo.authorname}} 发表于 {{$formatDate(articleInfo.publishtime, "yyyy-MM-dd hh:mm:ss")}}</span>
        <span class="article-info icon-watch">阅读数 {{articleInfo.viewcount}}</span>
        <span class="article-info icon-comment">评论数 {{articleInfo.commentcount}}</span>
      </div>

      <!-- 用于填充资讯内容 -->
      <div class="article-content" v-html="articleInfo.content"></div>

      <!-- 分页器 -->
      <div class="pagination ov">
        <span class="pagination-btn pagination-prev"></span>
        <ul class="pagination-btns ov">
          <li class="pagination-btn fl">1</li>
          <li class="pagination-btn fl">2</li>
          <li class="pagination-btn fl">3</li>
          <li class="pagination-btn fl">4</li>
        </ul>
        <span class="pagination-btn pagination-next"></span>
      </div>
    </div>

    <!-- 相关 -->
    <div class="related part">
      <h4 class="part-title">相关阅读</h4>

      <div class="related-links">
        <a href="#" class="related-link ellipsis" v-for="item in recommendList">{{item.title}}</a>
      </div>

    </div>

    <!-- comment -->
    <div class="comment part">
      <h4 class="part-title">评论（2019条）</h4>

      <div class="comment-box relative">
        <!-- 登录后，输入评论的容器 -->
        <textarea class="comment-content" readonly></textarea>

        <!-- 未登录时 -->
        <div class="comment-login ov">
          <span class="fl">期待你的神评</span>
          <a class="fl" href="#">请先登录</a>
        </div>
      </div>
      <input type="button" value="发表回复" class="comment-reply">
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
        <div class="list-check-more">
          查看更多回复
        </div>
      </div>

      <div class="ov">
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
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        articleInfo: {},
        recommendList: [],
        commentList: []
      }
    },
    methods: {
      getArticleInfo(url) {
        this.$axios.get(url)
          .then(res => {
            if(res.data.code === 0) {
              this.articleInfo = res.data.data
            }
          })
      },
      getRecommendList(url) {
        this.$axios.get(url)
          .then(res => {
            if(res.data.code === 0) {
              this.recommendList = res.data.data
            }
          })
      },
      getCommentList(url, id, page) {
        this.$axios.post('/information/getInfoList/', {
          Infoid: id,
          page: page || 1
        }).then(res => {
            if(res.data.code === 0) {
              this.commentList = res.data.data
            }
          })
      }
    },
    mounted() {
      let id = this.$route.params.articleID,
        classify = this.$route.path.split('/')[1],
        infoUrl, recommendUrl, commentUrl;
      classify === 'news' && (infoUrl = '/information/' + id) && (recommendUrl = '/recommend/getRecommendInformation/' + id) && (commentUrl = '/information/getInfoList/');
      classify === 'activity' && (infoUrl = '/activity/activity/' + id) && (recommendUrl = '/recommend/getRecommendActivity/' + id) && (commentUrl = '/activity/getInfoList/');
      this.getArticleInfo(infoUrl, id);
      this.getRecommendList(recommendUrl, id);
      this.getCommentList(commentUrl, id)
    }
  }
</script>
<style scoped>
  /* 面包屑 */

  .bread {
    margin: 30px 0;
  }

  .bread-point,
  .bread-link {
    vertical-align: middle;
    display: inline-block;
    font-size: 16px;
    color: #666;
  }

  .article {
    padding: 50px 100px;
    /* width: 1000px; */
  }

  .article-title {
    font-size: 24px;
    color: #000;
    text-align: center;
  }

  .article-wrapper {
    margin: 20px auto 35px;
  }

  .article-info {
    font-size: 14px;
    color: #999;
    padding-left: 30px;
    margin-right: 20px;
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

  .article-content img {
    max-width: 675px;
    margin: 15px auto;
  }

  .related-link {
    font-size: 14px;
    color: #000;
    line-height: 2.143;
    width: 400px;
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

  .comment-login > a,
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
    min-height: 45px;
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
    padding-left: 115px;
    font-size: 14px;
    color: #000;
  }

  .part {
    margin-bottom: 30px;
    box-shadow: 0 1px 24px 0 #c3c3c3;
    border-radius: 14px;
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
