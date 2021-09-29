<template>
  <view class="discover">
<!--    navigationBar-->
    <view class="navigation-bar">
      <view class="navigation-bar-return-icon" @tap="returnClick"></view>
      <view class="navigation-bar-logo"></view>
    </view>


    <!--    TabBar-->
    <view class="foot-tab-bar">
      <view class="foot-tab-bar-item" @tap="discoverClick">
        <view class="menu-icon"></view>
        <text class="menu-text">发现</text>
      </view>
      <view class="foot-tab-bar-item foot-tab-bar-item-hover">
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
          >
            <swiper-item class='discover-swiper-item'>
              <view class='discover-swiper-item-img'></view>
            </swiper-item>
            <swiper-item class='discover-swiper-item'>
              <view class='discover-swiper-item-img'></view>
            </swiper-item>
          </swiper>

<!--          校内校外那里-->
          <view class="classification-containers">
            <view class="option-button" @tap="inSchoolClick">校内</view>
            <view class="option-button button-hover">校外</view>
          </view>

          <view class="competition-list-container">
            <view
              class="competition-list-item"
              v-for="item in competitionList"
              @tap="toCompetitionDetail"
            >
              <view class="competition-theme-picture"></view>
              <view class="competition-theme-text-container">
                <text class="competition-theme-title">{{ item.title }}</text>
                <text class="competition-theme-content">{{ item.content }}</text>
                <text class="competition-theme-deadline">截止时间：{{ item.deadline }}</text>
                <text class="competition-theme-organizer">{{ item.organizer }}</text>
                <button v-if="item.state == 'started'" class="sign-up-enter-button sign-up-button">报名</button>
                <button v-if="item.state == 'notStart'" class="not-started-button sign-up-button">未开始</button>
                <button v-if="item.state == 'over'" class="over-button sign-up-button">已结束</button>
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

export default {
  name: 'signUpCompetitionList',
  components: {},
  data() {
    return {
      competitionList: [
        {
          title: '动画设计赛',
          content: '动画设计比赛作为该课程的期末结课作品，旨在对本学期的学习做实际的...',
          deadline: '2020-12-02~2021-01-20',
          organizer: '《动画基础》课程组',
          state: 'started'
        },
        {
          title: '赛道课程',
          content: '赛道课程',
          deadline: '2020-09-08~2021-07-01',
          organizer: '赛道课程组',
          state: 'notStart'
        },
        {
          title: 'IT作品-软硬件一体类',
          content: '软硬件一体类属于IT节作品赛分赛之一，由电子爱好者协会组织进行。 该比...',
          deadline: '2020-04-20~2021-03-01',
          organizer: '电子爱好者协会',
          state: 'over'
        },
        {
          title: '动画设计赛',
          content: '动画设计比赛作为该课程的期末结课作品，旨在对本学期的学习做实际的...',
          deadline: '2020-12-02~2021-01-20',
          organizer: '《动画基础》课程组',
          state: 'started'
        },
        {
          title: '动画设计赛',
          content: '动画设计比赛作为该课程的期末结课作品，旨在对本学期的学习做实际的...',
          deadline: '2020-12-02~2021-01-20',
          organizer: '《动画基础》课程组',
          state: 'started'
        },
        {
          title: '赛道课程',
          content: '赛道课程',
          deadline: '2020-09-08~2021-07-01',
          organizer: '赛道课程组',
          state: 'notStart'
        },
        {
          title: 'IT作品-软硬件一体类',
          content: '软硬件一体类属于IT节作品赛分赛之一，由电子爱好者协会组织进行。 该比...',
          deadline: '2020-04-20~2021-03-01',
          organizer: '电子爱好者协会',
          state: 'over'
        },
        {
          title: '动画设计赛',
          content: '动画设计比赛作为该课程的期末结课作品，旨在对本学期的学习做实际的...',
          deadline: '2020-12-02~2021-01-20',
          organizer: '《动画基础》课程组',
          state: 'started'
        },
      ]
    }
  },
  methods: {
    returnClick() {
      this.toCompetitionDetail();
    },
    discoverClick() {
      Taro.redirectTo({
        url: '../../discover/home/index'
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
    toCompetitionDetail() {
      Taro.navigateTo({
        url: '../competition-detail/index'
      })
    },
    inSchoolClick() {
      Taro.redirectTo({
        url: '../sign-up-competition-list-in/index'
      })
    }

  }
}
</script>
