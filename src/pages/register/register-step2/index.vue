<template>
  <view class="binding-number">
<!--    navigationBar-->
    <view class="navigation-bar">
      <view class="navigation-bar-return-icon" @tap="returnClick"></view>
      <view class="navigation-bar-logo"></view>
    </view>


    <view class="page-section">
          <view class="enter-card-container">
            <view class="enter-card-title-container">
              <view class="enter-card-title-item" @tap="loginClick"></view>
              <view class="enter-card-title-item"></view>
            </view>
            <form class="enter-form">
              <view class="step-show"></view>
              <view class="enter-form-item">
                <text class="enter-form-item-text">学校全称</text>
                <input
                  class="enter-form-item-input"
                  auto-focus
                  v-model="schoolName"
                />
              </view>
              <view class="enter-form-item">
                <text class="enter-form-item-text">你所在的学院及专业</text>
                <input
                  class="enter-form-item-input"
                  auto-focus
                  v-model="collegeAndMajor"
                />
              </view>
              <view class="enter-form-item">
                <text class="enter-form-item-text">学号</text>
                <input
                  class="enter-form-item-input"
                  auto-focus
                  v-model="studentNumber"
                />
              </view>
              <button
                class="submit-button"
                type="submit"
                @tap="registerTwoClick"
              >
                继续
              </button>
            </form>

          </view>

    </view>

  </view>
</template>

<script>
import Vue from 'vue'
import Taro from '@tarojs/taro'
import './index.scss'
// import TabBar from '../../components/TabBar/index.vue'

export default {
  name: 'registerStep2',
  components: {},
  data() {
    return {
      schoolName: '北京师范大学珠海分校',
      collegeAndMajor: '信息技术学院-软件工程',
      studentNumber: '1900000000'
    }
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
    registerTwoClick() {
      Taro.navigateTo({
        url: '../register-step3/index'
      })
    },
    loginClick() {
      Taro.redirectTo({
        url: '../../login/binding-number/index'
      })
    }
  }
}
</script>
