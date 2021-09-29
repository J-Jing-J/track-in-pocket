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
                <text class="enter-form-item-text">手机号码</text>
                <input
                  class="enter-form-item-input"
                  auto-focus
                  v-model="phoneNumber"
                />
              </view>
              <view class="enter-form-item">
                <text class="enter-form-item-text">邮箱</text>
                <input
                  class="enter-form-item-input"
                  auto-focus
                  v-model="email"
                />
              </view>
              <view class="enter-form-item">
                <text class="enter-form-item-text">微信/qq号码</text>
                <input
                  class="enter-form-item-input"
                  auto-focus
                  v-model="weChatAndQQNumber"
                />
              </view>
              <button
                class="submit-button"
                type="submit"
                @tap="registerThreeClick"
              >
                完成注册并登录
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

export default {
  name: 'registerStep3',
  components: {},
  data() {
    return {
      weChatAndQQNumber: '123',
      email: 'xxxxxx@qq.com',
      phoneNumber: '1590000000'
    }
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
    registerThreeClick() {
      Taro.redirectTo({
        url: '../../login/binding-number/index'
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
