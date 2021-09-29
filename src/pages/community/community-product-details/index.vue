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
      <view
        :class="[isCollected ? 'foot-tab-bar-item-hover' : '', 'foot-tab-bar-item']"
        @tap="collectClick"
      >
        <view class="menu-icon"></view>
        <text class="menu-text">收藏</text>
      </view>
      <view
        class="foot-tab-bar-item"
      >
        <view class="menu-icon"></view>
        <text class="menu-text">举报</text>
      </view>
      <button
        class="foot-tab-bar-copy-button"
        @tap="copyWechatNumberClick"
      >复制微信号</button >
    </view>

    <view class="page-section">
      <view class="page-section-spacing">
        <!--      滚动页面-->
        <scroll-view
          class="scroll-view"
          scroll-y="true"
        >
<!--          发布人信息-->
          <view class="publisher-container">
            <view class="publisher-avatars"></view>
            <view class="publisher-right-container">
              <view class="publisher-name-container">
                <view class="publisher-name">{{ publisherInformation.name }}</view>
                <view class="publisher-authentication">{{ publisherInformation.authentication }}</view>
              </view>
              <view class="publisher-active">{{ publisherInformation.active }}</view>
            </view>

          </view>
<!--          商品信息-->
          <view class="product-container">
            <view class="product-price-container">
              <view class="product-price-icon">￥</view>
              <view class="product-price-text">{{ productInformation.price }}</view>
              <view class="product-transaction-mode">{{ productInformation.transactionMode }}</view>
            </view>
            <view class="product-description">{{ productInformation.description }}</view>
            <view class="product-img"></view>
            <view class="browsing-history">
              {{ productInformation.browsingHistory }}人浏览过 | {{ productInformation.collectionHistory }}人收藏过
            </view>
          </view>
<!--          留言-->
          <view class="message-board-bg-container">
            <view class="message-board-container">
              <text class="message-board-text">留言</text>
              <!--            留言输入框-->
              <view class="message-write-container">
                <view class="user-avatars"></view>
                <input
                  class="message-write-input"
                  type="text"
                  placeholder="问问更多细节"
                  focus
                  v-model="messageInput"
                />
                <button
                  class="message-submit-button"
                  plain
                >按钮</button>
              </view>
              <!--            留言记录-->
              <view class="message-history-container">
                <view
                  class="message-history-item"
                  v-for="item in historyMessage"
                >
                  <view class="message-user-item-container">
                    <view class="message-user-item-avatars"></view>
                    <text class="message-user-item-name">{{ item.userName }}</text>
                  </view>
                  <text class="message-item-text">{{ item.messageText }}</text>
                  <text class="message-item-time">{{ item.messageTime }}</text>
                </view>
              </view>
            </view>
          </view>

<!--          复制成功-->
          <view
            class="cover-view-bg"
            v-if="coverViewShow"
          >
            <view
              class='cover-view'
            >
              <view class="cover-title">{{ coverText.title }}</view>
              <view class="cover-content">{{ coverText.content }}</view>
              <view class="cover-button-container">
                <view
                  class="cover-button-item"
                  @tap="cancelClick"
                >取消</view>
                <view
                  class="cover-button-item"
                  @tap="preserveClick"
                >保存</view>
              </view>
            </view>
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
  name: 'communityProductDetails',
  data() {
    return {
      // 遮罩层的文字
      coverText: {
        title: '复制成功',
        content: '请前往“微信”-“添加好友”直接粘贴。请备注“通过赛道添加好友”'
      },
      // 最上面的发布者信息
      publisherInformation: {
        name: '周钿',
        authentication: true,
        active: '22分钟前来过，发布于校内'
      },
      // 商品详情
      productInformation: {
        price: 11,
        description: '出高数第七版上下两册 九成新 支持燕八自提海华京华燕华可送 粤华送+5元 详情联系我',
        img: '',
        browsingHistory: 11,
        collectionHistory: 1,
        transactionMode: '面交'
      },
      // 用户输入的留言内容
      messageInput: '',
      // 历史留言记录信息
      historyMessage: [
        {
          userAvatars: '',
          userName: '蔡伊宁',
          messageText: '是第几次印刷？',
          messageTime: '1分钟前'
        },
        {
          userAvatars: '',
          userName: '周钿',
          messageText: '是第几次印刷？',
          messageTime: '1分钟前'
        },
        {
          userAvatars: '',
          userName: '蒋静',
          messageText: '是第几次印刷？',
          messageTime: '1分钟前'
        },
        {
          userAvatars: '',
          userName: 'xxx',
          messageText: '是第几次印刷？',
          messageTime: '1分钟前'
        },
      ],
      coverViewShow: false,
      isCollected: false,
    }
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
    copyWechatNumberClick() {
      this.coverViewShow = !this.coverViewShow;
    },
    preserveClick() {
      this.coverViewShow = !this.coverViewShow;
    },
    cancelClick() {
      this.coverViewShow = !this.coverViewShow;
    },
    collectClick() {
      this.isCollected = !this.isCollected;
    }
  }
}
</script>
