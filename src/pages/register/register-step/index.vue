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
                <text class="enter-form-item-text">用户名</text>
                <input
                  class="enter-form-item-input"
                  auto-focus
                  v-model="username"
                />
              </view>
              <view class="enter-form-item">
                <text class="enter-form-item-text">设置密码（不少于6位）</text>
                <input
                  class="enter-form-item-input"
                  auto-focus
                  password="true"
                  v-model="password"
                />
              </view>
              <view class="enter-form-item">
                <text class="enter-form-item-text">选择你的身份</text>
                <picker
                  class="enter-form-item-input"
                  mode="selector"
                  :range="identitySelector"
                  @change="identityOnChange"
                >
                  当前选择：{{ identitySelectorChecked }}
                </picker>
              </view>
              <button
                class="submit-button"
                type="submit"
                @tap="registerOneClick"
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

export default {
  name: 'registerStep',
  components: {},
  data() {
    return {
      username: 'test',
      password: '123',
      // identity: ''
      identitySelector: ['学生', '老师'],
      identitySelectorChecked: '',
    }
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
    registerOneClick() {
      Taro.navigateTo({
        url: '../register-step2/index'
      })
    },
    identityOnChange(e) {
      this.identitySelectorChecked = this.identitySelector[e.detail.value]
    },
    loginClick() {
      Taro.redirectTo({
        url: '../../login/binding-number/index'
      })
    }
  }
}
</script>
