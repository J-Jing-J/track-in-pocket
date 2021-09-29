<template>
  <view class="discover">
<!--    navigationBar-->
    <view class="navigation-bar">
      <view class="navigation-bar-return-icon" @tap="returnClick"></view>
      <view class="navigation-bar-logo"></view>
    </view>

<!--    TabBar-->
    <view class="foot-tab-bar">
      <view class="foot-tab-bar-item-hover foot-tab-bar-item">
        <view class="menu-icon"></view>
        <text class="menu-text">发现</text>
      </view>
      <view
        class="foot-tab-bar-item"
        @tap="signUpClick"
      >
        <view class="menu-icon"></view>
        <text class="menu-text">报名</text>
      </view>
      <view
        class="foot-tab-bar-item"
        @tap="communityClick"
      >
        <view class="menu-icon"></view>
        <text class="menu-text">社区</text>
      </view>
      <view
        class="foot-tab-bar-item"
        @tap="myClick"
      >
        <view class="menu-icon"></view>
        <text class="menu-text">我的</text>
      </view>
    </view>



    <view class="page-section">
<!--      滚动页面-->
      <view class="page-section-spacing">
        <scroll-view
          class="scroll-view"
          scroll-y="true"
        >
          <!--    轮播图-->
          <swiper
            class='discover-swiper'
            indicator-color='#999'
            indicator-active-color='#333'
            vertical
            circular
            indicator-dots
            autoplay
            interval="5000"
            duration="500"
            @tap="workDetailClick"
          >
            <swiper-item class='discover-swiper-item'>
              <view class='discover-swiper-item-img'></view>
            </swiper-item>
            <swiper-item class='discover-swiper-item'>
              <view class='discover-swiper-item-img'></view>
            </swiper-item>
          </swiper>

<!--          比赛菜单可滑动-->
          <view class="competition-menu">
            <view class="competition-menu-spacing">
              <scroll-view
                class="competition-menu-view"
                scroll-x="true"
                bindscroll="scroll"
                enable-flex="true"
              >
                <view
                  class="competition-menu-item"
                  v-for="item in competitionMenu"
                  @tap="workDetailClick"
                >
                  <view class="competition-menu-item-img"></view>
                  <text class="competition-menu-item-text">{{ item.title }}</text>
                </view>

                </scroll-view>
            </view>
          </view>

          <view class="news-menu">
            <scroll-view
              class="news-menu-content"
              scroll-y="true"
            >
              <view
                class="news-menu-item"
                v-for="item in newsMenu"
                @tap="workDetailClick"
              >
                <view class="news-menu-item-img"></view>
                <view class="news-menu-item-text-container">
                  <text class="news-menu-item-title">{{item.title}}</text>
                  <text class="news-menu-item-message">{{item.message}}</text>
                </view>
                <view class="news-menu-item-icon"></view>
              </view>
            </scroll-view>
          </view>

          <view class="works-gallery-container">
            <view class="works-gallery-title">
              <text class="works-gallery-title-text">作品展示</text>
              <text class="works-gallery-more-text">更多</text>
            </view>
            <view class="works-gallery-content">
              <view class="works-gallery-item" v-for="item in worksGallery" @tap="workDetailClick">
                <view class="works-gallery-item-img"></view>
                <text class="works-gallery-item-title">{{ item.title }}</text>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import Vue from 'vue'
import Taro from '@tarojs/taro'
import './index.scss'

// import TabBar from '../.. /components/TabBar/index.vue'
// import NavigationBar from '../../../components/NavigationBar/index.vue'

export default {
  name: 'discover',
  components: {
    // NavigationBar
  },
  data() {
    return {
      worksGallery: [
        {
          title: '《多功能四频段通用调无线通讯系统》',
        },
        {
          title: '《极光守护者》',
        },
        {
          title: '《多功能四频段通用调无线通讯系统》',
        },
        {
          title: '《多功能四频段通用调无线通讯系统》',
        },
        {
          title: '《多功能四频段通用调无线通讯系统》',
        },
        {
          title: '《多功能四频段通用调无线通讯系统》',
        },
      ],
      newsMenu: [
        {
          title: '第十七届IT节大赛',
          message: '进入复赛阶段啦！'
        },
        {
          title: '有人需要你帮忙啦！',
          message: '求问：四六级这样就能过了？'
        },
        {
          title: '第十七届IT节大赛',
          message: '进入复赛阶段啦！'
        },
        {
          title: '第十七届IT节大赛',
          message: '进入复赛阶段啦！'
        },
        {
          title: '第十七届IT节大赛',
          message: '进入复赛阶段啦！'
        },
      ],
      competitionMenu: [
        {
          title: '动画设计赛',
        },
        {
          title: '2020GMCPC',
        },
        {
          title: '动画设计赛',
        },
        {
          title: '程序设计竞赛',
        },
        {
          title: 'IT作品-设计类',
        },
      ]
    }
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
    myClick() {
      Taro.redirectTo({
        url: '../../my/help-news/index'
      })
    },
    communityClick() {
      Taro.redirectTo({
        url: '../../community/community-home/index'
      })
    },
    signUpClick() {
      Taro.redirectTo({
        url: '../../sign-up/sign-up-competition-list-in/index'
      })
    },
    workDetailClick() {
      Taro.navigateTo({
        url: '../work-detail/index'
      })
    }
  }
}
</script>
