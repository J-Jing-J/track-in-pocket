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
            <view class="mid-bar-item mid-bar-item-active">我的作品</view>
            <view class="mid-bar-item" @tap="competitionNewsClick">比赛消息</view>
          </view>

          <view class="my-works-container">
            <view class="my-works-item" v-for="item in myWorks">
              <view class="my-works-img"></view>
              <view class="my-works-content-container">
                <view class="my-works-title">{{ item.title }}</view>
                <view class="my-works-label-container">
                  <view
                    class="my-works-label"
                    v-for="label in item.label"
                  >{{ label }}</view>
                </view>
                <view class="my-works-content">{{ item.content }}</view>
                <view
                  class="my-work-certificate"
                  v-if="item.haveCertificate"
                  @tap="showCertificateClick"
                >下载获奖证书</view>
              </view>
            </view>
          </view>
          <view
            class="cover-view-bg"
            v-if="coverViewShow"
          >
            <view
              class='cover-view'
            >
              <view class="cover-title">下载证书</view>
              <view class="cover-content-img"></view>
              <view class="cover-button-container">
                <view
                  class="cover-button-item"
                  @tap="cancelClick"
                >取消</view>
                <view
                  class="cover-button-item"
                  @tap="preserveClick"
                >保存</view>
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
  name: 'myWorks',
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
      coverViewShow: false,
      myWorks: [
        {
          title: '《极光守护者》',
          content: '人们常说∶旅行是你对平庸生活的一次越狱……',
          label: ['mg动画', '中国传统'],
          haveCertificate: true
        },
        {
          title: '《圣诞游乐园》',
          content: '圣诞要来了，一起来游乐园玩耍吧！',
          label: ['mg动画', '节日'],
          haveCertificate: false
        },
        {
          title: '《不思议世界神秘空灵》',
          content: '不思议世界神秘空灵你认为是什么呢',
          label: ['c4d', '脑洞'],
          haveCertificate: false
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
    helpNewsClick() {
      Taro.redirectTo({
        url: '../help-news/index'
      })
    },
    competitionNewsClick() {
      Taro.redirectTo({
        url: '../competition-news/index'
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
