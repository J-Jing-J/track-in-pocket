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
        @tap="lastStepClick"
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
          <text class="form-title">信息确认</text>

          <view class="information-container">
            <view class="information-title">参赛信息</view>
            <view class="information-item" v-for="(value, key) in competitionInformation">
              <view class="information-content">{{ key }}：{{ value }}</view>
            </view>
          </view>

          <view class="information-container">
            <view class="information-title">作者2</view>
            <view class="information-item" v-for="item in moreAuthor">
              <view class="information-content" v-for="(value, key) in item">{{ key }}：{{ value }}</view>
            </view>
          </view>

          <view class="information-container">
            <view class="information-title">作品简介</view>
            <view class="information-item">
              <view class="information-content">{{ workBriefIntroduction }}</view>
            </view>
          </view>

          <view class="information-container">
            <view class="information-title">设计思路和技术难点</view>
            <view class="information-item">
              <view class="information-content">{{ designIdeas }}</view>
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
  name: 'informationConfirm',
  components: {},
  data() {
    return {
      competitionInformation: {
        '比赛名称' : '动画设计大赛',
        '承办单位': '《动画基础》课程组',
        '作品名称': '赛道',
        '团队名称': '数媒打工人',
        '指导老师': '李梅',
        '所在单位': '北京师范大学珠海分校信息技术学院'
      },
      moreAuthor: [
        {
          '姓名': '蔡伊宁',
          '学号': '1801050047',
          '学院': '信息技术学院',
          '专业': '数字媒体技术',
          '联系方式': '1501741099@qq.com'
        }
      ],
      workBriefIntroduction: '赛道——是一个以大学生信息技术类赛事为主的APP。为赛事提供给免费报名工具和一站式服务，为学生参赛和竞赛的推广提供便利。',
      designIdeas: '设计思路非常好，技术难点非常难。',

    }
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
    lastStepClick() {
      Taro.navigateTo({
        url: '../sign-up-step2/index',
      })
    },
    nextStepClick() {
      Taro.redirectTo({
        url: '../submit-success/index',
      })
    }
  }

}
</script>
