<!--<link rel="stylesheet" href="index.scss">-->
<template>
  <view class="discover">
<!--    navigationBar-->
    <view class="navigation-bar">
      <view class="navigation-bar-return-icon" @tap="returnClick"></view>
      <view class="navigation-bar-logo"></view>
    </view>


    <!--    TabBar-->
    <view class="foot-tab-bar">
      <button
        class="publish-button"
        @tap="returnClick"
      >返回</button >
    </view>

    <view class="page-section">
      <view class="page-section-spacing">
        <!--      滚动页面-->
        <scroll-view
          class="scroll-view"
          scroll-y="true"
        >
          <view class="publish-success-img"></view>
          <text class="publish-success-text">发布成功 !</text>
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
  name: 'communityProductPublish',
  data() {
    return {}
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 2
      })
    },
  }
}
</script>
