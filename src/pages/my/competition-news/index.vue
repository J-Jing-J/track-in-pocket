<template>
  <view class="discover">
<!--    navigationBar-->
    <view class="navigation-bar">
      <view class="navigation-bar-top-container">
        <view class="navigation-bar-return-icon" @tap="returnClick"></view>
        <view class="navigation-bar-logo"></view>
      </view>
      <view class="my-information-card" @tap="loginClick">
        <view class="name-container">
          <view class="my-avatars"></view>
          <view class="my-name">周钿</view>
          <view class="my-modify-data-button">修改资料</view>
        </view>
        <view class="my-information-container">
          <view class="my-information-item">
            <view class="my-information-icon"></view>
            <view class="my-information-text">{{ college }}</view>
          </view>
          <view class="my-information-item">
            <view class="my-information-icon"></view>
            <view class="my-information-text">{{ major }}</view>
          </view>
          <view class="my-information-item">
            <view class="my-information-icon"></view>
            <view class="my-information-text">{{ studentNumber }}</view>
          </view>
        </view>
      </view>
    </view>

<!--    TabBar-->
    <view class="foot-tab-bar">
      <view class="foot-tab-bar-item" @tap="discoverClick">
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
        class="foot-tab-bar-item foot-tab-bar-item-hover"
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
          <view class="mid-bar-container">
            <view class="mid-bar-item" @tap="helpNewsClick">帮帮消息</view>
            <view class="mid-bar-item" @tap="myWorksClick">我的作品</view>
            <view class="mid-bar-item mid-bar-item-active">比赛消息</view>
          </view>

          <view class="competition-list-container">
            <view
              class="competition-list-item"
              v-for="item in competitionList"
            >
              <view class="competition-theme-picture"></view>
              <view class="competition-theme-text-container">
                <text class="competition-theme-title">{{ item.title }}</text>
                <text class="competition-theme-content">{{ item.content }}</text>
                <text class="competition-theme-deadline">截止时间：{{ item.deadline }}</text>
                <text class="competition-theme-organizer">承办单位：{{ item.organizer }}</text>
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

export default {
  name: 'competitionNews',
  components: {
    // TabBar
  },
  data() {
    return {
      college: '信息技术学院',
      major: '数字媒体技术',
      studentNumber: '1300000000',
      // midBarMenuList: ['帮帮消息', '我的作品', '比赛消息'],
      // midBarMenuActive: '帮帮消息',
      competitionList: [
        {
          title: '动画设计赛',
          content: '动画设计比赛作为该课程的期末结课作品，旨在对本学期的学习做实际的...',
          deadline: '2020-12-02~2021-01-20',
          organizer: '《动画基础》课程组',
        }
      ]

    }
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
    discoverClick() {
      Taro.redirectTo({
        url: '../../discover/home/index'
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
    loginClick() {
      Taro.navigateTo({
        url: '../../login/binding-number/index'
      })
    },
    workDetailClick() {
      Taro.navigateTo({
        url: '../../work-detail/index'
      })
    },

    myWorksClick() {
      Taro.redirectTo({
        url: '../my-works/index'
      })
    },
    helpNewsClick() {
      Taro.redirectTo({
        url: '../help-news/index'
      })
    },

    showCertificateClick() {
      this.coverViewShow = !this.coverViewShow;
    },
    cancelClick() {
      this.coverViewShow = !this.coverViewShow;
    },
    preserveClick() {
      this.coverViewShow = !this.coverViewShow;
    },
  }
}
</script>
