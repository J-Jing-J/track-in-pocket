<template>
  <view class="foot-tab-bar">
<!--    <text>{{ msg }}</text>-->
    <view class="foot-tab-bar-item-hover foot-tab-bar-item">
      <view class="menu-icon"></view>
      <text class="menu-text">发现</text>
    </view>
    <view class="foot-tab-bar-item">
      <view class="menu-icon"></view>
      <text class="menu-text">报名</text>
    </view>
    <view class="foot-tab-bar-item">
      <view class="menu-icon"></view>
      <text class="menu-text">社区</text>
    </view>
    <view class="foot-tab-bar-item">
      <view class="menu-icon"></view>
      <text class="menu-text">我的</text>
    </view>
  </view>
</template>

<script>
import Vue from 'vue'
import Taro from '@tarojs/taro'
import './index.scss'

export default {
  name: 'TabBar',
  data() {
    return {
      msg: 'Hello'
    }
  },
}
</script>

