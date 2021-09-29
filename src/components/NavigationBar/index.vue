<template>
  <view class="navigation-bar">
    <view class="navigation-bar-return-icon" @tap="returnClick"></view>
    <view class="navigation-bar-logo"></view>
  </view>
</template>

<script>
import Vue from 'vue'
import Taro from '@tarojs/taro'
import './index.scss'

export default {
  name: 'NavigationBar',
  data() {
    return {}
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
  }
}
</script>

