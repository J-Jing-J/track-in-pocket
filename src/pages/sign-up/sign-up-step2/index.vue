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
        class="cancel-button"
        @tap="returnClick"
      >上一步</button >
      <button
        class="next-step-button"
        @tap="nextStepClick"
      >下一步</button >
    </view>
    <view class="page-section">
<!--      滚动页面-->
      <view class="page-section-spacing">
        <scroll-view
          class="scroll-view"
          scroll-y="true"
        >
          <view class="step-show"></view>
          <text class="form-title">作品简介</text>

          <view class="input-container">
            <textarea
              class="form-input"
              auto-focusd="true"
              placeholder="请填写作品简介（100-200字）"
            />
            <textarea
              class="form-input"
              auto-focusd="true"
              placeholder="请填写设计思路及技术难点（200-300字）"
            />
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
  name: 'signUpStep2',
  components: {},
  data() {
    return {
      competitionDetail: {
          title: '动画设计赛',
          organizer: '《动画基础》课程组',
      }
    }
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
    nextStepClick() {
      Taro.navigateTo({
        url: '../information-confirm/index',
      })
    }
  }

}
</script>
