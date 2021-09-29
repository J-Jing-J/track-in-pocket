<!--<link rel="stylesheet" href="index.scss">-->
<template>
  <view class="discover">
<!--    navigationBar-->
    <view class="navigation-bar">
      <view class="navigation-bar-return-icon" @tap="returnClick"></view>
      <view class="navigation-bar-logo"></view>
    </view>

    <view class="top-tip">严禁发布广告、代论文、代考、代课等，违者记过处理</view>


    <view class="page-section">
      <view class="page-section-spacing">
        <!--      滚动页面-->
        <scroll-view
          class="scroll-view"
          scroll-y="true"
        >
          <view class="form-container">
            <view class="form-title">具体信息</view>
            <view class="inputs-container">
              <text class="input-title">类型</text>
              <view class="classification-containers">
                <view class="option-button button-hover">有求</view>
                <view class="option-button">有约</view>
              </view>
            </view>
            <view class="inputs-container content-input-container">
              <text class="input-title">内容</text>
              <textarea
                class="content-input form-input"
                type="text"
                placeholder="请输入具体信息内容"
              />
            </view>
            <view class="inputs-container">
              <text class="input-title">上传图片</text>
              <view class="upload-pictures-button"></view>
            </view>
          </view>


          <view class="form-container">
            <view class="form-title">个人信息</view>
            <view class="inputs-container">
              <text class="input-title">姓名</text>
              <input
                class="form-input"
                placeholder="请输入您的姓名"
                type="text"
                focus
              />
            </view>
            <view class="inputs-container">
              <text class="input-title">微信号</text>
              <input
                class="form-input"
                placeholder="请输入您的微信号码"
                type="text"
                focus
              />
            </view>
            <view class="inputs-container">
              <text class="input-title">手机号码</text>
              <input
                class="form-input"
                placeholder="请输入您的手机号码"
                type="text"
                focus
              />
            </view>
          </view>
          <view class="users-notice-container">
            <checkbox
              class="users-notice-box"
              value="选中"
              :checked="false"
            >
            </checkbox>
            <text class="users-notice-text">同意并阅读</text>
            <text class="users-notice-text users-notice-link">《用户须知》</text>
          </view>
<!--          发布按钮-->
          <button
            class="publish-button"
            @tap="productPublishClick"
          >发布</button >
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
  name: 'communityHelpPublish',
  data() {
    return {}
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
    productPublishClick() {
      Taro.navigateTo({
        url: '../community-product-publish-success/index'
      })
    }
  }
}
</script>
