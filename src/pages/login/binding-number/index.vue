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
              <view class="enter-card-title-item"></view>
              <view
                class="enter-card-title-item"
                @tap="registerClick"
              >
              </view>
            </view>

            <form class="enter-form">
              <view class="enter-form-item">
                <text class="enter-form-item-text">用户名</text>
                <input
                  class="enter-form-item-input"
                  auto-focus
                  v-model="username"
                />
              </view>
              <view class="enter-form-item">
                <text class="enter-form-item-text">密码</text>
                <input
                  class="enter-form-item-input"
                  auto-focus
                  password="true"
                  v-model="password"
                />
              </view>
              <text class="forget-password-link">忘记密码？</text>
            </form>

            <button
              class="submit-button"
              type="submit"
              @tap="loginClick"
            >
              登 录
            </button>
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
  name: 'loginBindingNumber',
  components: {
    // TabBar
  },
  data() {
    return {
      username: 'jiang',
      password: '123'
    }
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
    loginClick() {
      Taro.redirectTo({
        url: '../../discover/home/index'
      })
    },
    registerClick() {
      Taro.redirectTo({
        url: '../../register/register-step/index'
      })
    }
  }
}
</script>
