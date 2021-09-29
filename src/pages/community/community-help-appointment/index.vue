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
        class="foot-tab-bar-item"
        @tap="discoverClick"
      >
        <view class="menu-icon"></view>
        <text class="menu-text">发现</text>
      </view>
      <view
        class="foot-tab-bar-item"
        @tap="signUpClick"
      >
        <view class="menu-icon"></view>
        <text class="menu-text">报名</text>
      </view>
      <view
        class="foot-tab-bar-item foot-tab-bar-item-hover"
      >
        <view class="menu-icon"></view>
        <text class="menu-text">社区</text>
      </view>
      <view
        class="foot-tab-bar-item"
        @tap="myClick"
      >
        <view class="menu-icon"></view>
        <text class="menu-text">我的</text>
      </view>
    </view>

    <!--        发布按钮-->
    <view class="publish-button" @tap="publishClick"></view>


    <view class="page-section">
<!--      滚动页面-->
      <view class="page-section-spacing">
        <scroll-view
          class="scroll-view"
          scroll-y="true"
        >

<!--          校内校外那里-->
          <view class="classification-containers">
            <view class="option-button" @tap="toNeedClick">有求</view>
            <view class="option-button button-hover">有约</view>
          </view>

          <view class="competition-list-container">
            <view
              class="competition-list-item"
              v-for="item in appointmentNewsList"
            >
              <!--          发布人信息-->
              <view class="publisher-container">
                <view class="publisher-avatars"></view>
                <view class="publisher-right-container">
                  <view class="publisher-name">{{ item.publisherName }}</view>
                  <view class="publisher-college">{{ item.college }}</view>
                </view>
                <view class="icon-container" v-if="item.super == 'true'">
                  <view class="super-icon1" v-if="item.superItem == 1"></view>
                  <view class="super-icon2" v-if="item.superItem == 2"></view>
                  <view class="super-icon3" v-if="item.superItem == 3"></view>
                </view>
              </view>

              <view class="need-content">{{ item.appointmentContent }}</view>
              <view class="publish-time">发布于{{ item.publishTime }}min前</view>
<!--              评论-->
              <view
                class="discuss-container"
                v-for="discuss in item.discussList"
              >
                <text class="discusser-name">{{ discuss.discusserName }}：</text>
                <view class="discusser-content-container">
                  <text class="discusser-content">{{ discuss.discussContent }}</text>
                  <view
                    :class="[discuss.isThumb ? 'thumb-icon-hover' : '', 'thumb-icon']"
                    @tap="thumbClick()"
                  ></view>
                </view>
              </view>

              <view class="item-bottom-container">
                <view class="discuss-button"></view>
                <view class="private-chat-button">与TA联系</view>
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
  name: 'communityHelpNeed',
  components: {},
  data() {
    return {
      appointmentNewsList: [
        {
          publisherName: '蒋静',
          college: '18信院数媒',
          super: 'true',
          superItem: 1,
          appointmentContent: '在线招募两名软工小哥 一起参加IT节😊',
          publishTime: 10,
          discussNumber: 2,
          discussList: [
            {
              discusserName: '蔡伊宁',
              discussContent: '我是小姐姐，要不考虑一下？',
              isThumb: false
            },
            {
              discusserName: '周钿',
              discussContent: '欢迎小姐姐',
              isThumb: false
            }
          ]
        },
        {
          publisherName: '周钿',
          college: '18信院数媒',
          super: 'true',
          superItem: 2,
          appointmentContent: '找一位小姐姐一起去海边拍摄',
          publishTime: 10,
          discussNumber: 0,
          discussList: [
            {
              discusserName: '蔡伊宁',
              discussContent: '我是小姐姐，要不考虑一下？',
              isThumb: false,
            },
            {
              discusserName: '蒋静',
              discussContent: '欢迎小姐姐',
              isThumb: false
            }
          ]
        },
        {
          publisherName: '蔡伊宁',
          college: '18信院数媒',
          super: 'true',
          superItem: 3,
          appointmentContent: '找一位小姐姐一起去海边拍摄',
          publishTime: 10,
          discussNumber: 0,
          discussList: [
            {
              discusserName: '周钿',
              discussContent: '我是小姐姐，要不考虑一下？',
              isThumb: false
            },
            {
              discusserName: '蒋静',
              discussContent: '欢迎小姐姐',
              isThumb: false
            }
          ]
        },
        {
          publisherName: '蒋静',
          college: '18信院数媒',
          super: 'true',
          superItem: 1,
          appointmentContent: '找一位小姐姐一起去海边拍摄',
          publishTime: 10,
          discussNumber: 0,
          discussList: [
            {
              discusserName: '蔡伊宁',
              discussContent: '我是小姐姐，要不考虑一下？',
              isThumb: false
            },
            {
              discusserName: '周钿',
              discussContent: '欢迎小姐姐',
              isThumb: false
            }
          ]
        },
      ],
    }
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
    myClick() {
      Taro.redirectTo({
        url: '../../my/help-news/index'
      })
    },
    discoverClick() {
      Taro.redirectTo({
        url: '../../discover/home/index'
      })
    },
    signUpClick() {
      Taro.redirectTo({
        url: '../../sign-up/sign-up-competition-list-in/index'
      })
    },
    publishClick() {
      Taro.navigateTo({
        url: '../community-help-publish/index'
      })
    },
    toNeedClick() {
      Taro.redirectTo({
        url: '../community-help-need/index'
      })
    },
    thumbClick() {

    }
  }
}
</script>
