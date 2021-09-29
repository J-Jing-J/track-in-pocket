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
      <view class="foot-tab-bar-item" @tap="signUpClick">
        <view class="menu-icon"></view>
        <text class="menu-text">报名</text>
      </view>
      <view class="foot-tab-bar-item-hover foot-tab-bar-item">
        <view class="menu-icon"></view>
        <text class="menu-text">社区</text>
      </view>
      <view class="foot-tab-bar-item" @tap="myClick">
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
          <view class="community-options-container">
            <view
              class="community-options-item"
              @tap="transactionListClick"
            ></view>
            <view
              class="community-options-item"
              @tap="friendsHelpClick"
            ></view>

            <view class="community-more-container">
              <view class="community-more-item"></view>
              <view class="community-more-item"></view>
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
  name: 'communityHome',
  components: {
    // TabBar
  },
  data() {
    return {

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
    discoverClick() {
      Taro.redirectTo({
        url: '../../discover/home/index'
      })
    },
    signUpClick() {
      Taro.redirectTo({
        url: '../../sign-up/sign-up-competition-list-in/index'
      })
    },
    transactionListClick() {
      Taro.navigateTo({
        url: '../community-transaction-list/index'
      })
    },
    friendsHelpClick() {
      Taro.navigateTo({
        url: '../community-help-need/index'
      })
    },
  }
}
</script>
