<!--<link rel="stylesheet" href="index.scss">-->
<template>
  <view class="discover">
<!--    navigationBar-->
    <view class="navigation-bar">
      <view class="navigation-bar-return-icon" @tap="returnClick"></view>
      <view class="navigation-bar-logo"></view>
    </view>


    <view class="page-section">
      <view class="page-section-spacing">
        <!--      滚动页面-->
        <scroll-view
          class="scroll-view"
          scroll-y="true"
        >
          <view class="picture-container">
            <view class="picture-add-icon"></view>
            <text class="picture-add-text">添加商品图片</text>
          </view>
          <view class="title-container">
            <text class="title-text form-title">标题：</text>
            <input
              class="title-input form-input"
              type="text"
              focus/>
          </view>
          <view class="detail-container">
            <text class="detail-text form-title">详情：</text>
            <textarea
              class="detail-input form-input"
              auto-focusd="true"
            />
          </view>
          <view class="price-container">
            <view class="price-title-container">
              <text class="price-title-text form-title">原价：</text>
              <input
                class="price-title-input form-input"
                type="text"
                focus/>
            </view>
            <view class="price-title-container">
              <text class="price-title-text form-title">想卖：</text>
              <input
                class="price-title-input form-input"
                type="text"
                focus/>
            </view>
          </view>
          <view class="classification-container">
            <text class="classification-text form-title">分类：</text>
            <picker
              class="classification-input form-input"
              mode="selector"
              :range="selector"
              @change="classificationOnChange"
              :onCancel=true
            >
              <view class="classification-picker-input-text">
                请选择分类：{{selectorChecked}}
              </view>
            </picker>
            <view class="triangle-icon"></view>
          </view>
          <view class="transaction-method-container">
            <text class="transaction-method-text form-title">交易方法：</text>
            <view class="transaction-method-button-container">
              <button class="transaction-method-button transaction-method-button-hover">面交</button>
              <button class="transaction-method-button">邮寄</button>
            </view>
          </view>
          <view>
            <view class="wechat-number-container">
              <text class="wechat-number-text form-title">微信号：</text>
              <input
                class="wechat-number-input form-input"
                type="text"
                focus/>
            </view>
            <view class="phone-number-container">
              <text class="phone-number-text form-title">手机号：</text>
              <input
                class="phone-number-input form-input"
                type="text"
                focus/>
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
  name: 'communityProductPublish',
  data() {
    return {
      selector: ['书籍', '日用品', '水果', '零食'],
      selectorChecked: '',
      transactionMethodList: ['面交', '邮寄'],
    }
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
    },
    classificationOnChange(e) {
      this.selectorChecked = this.selector[e.detail.value]
    }
  }
}
</script>
