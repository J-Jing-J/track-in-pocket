<template>
  <view class="discover">
<!--    navigationBar-->
    <view class="navigation-bar">
      <view class="navigation-bar-return-icon" @tap="returnClick"></view>
      <view class="navigation-bar-logo"></view>
    </view>

    <!--    TabBar-->
    <view class="foot-tab-bar">
      <view class="menu-icon"></view>
      <button
        class="foot-tab-bar-copy-button"
        @tap="signUpClick"
      >前往报名</button >
    </view>
    <view class="page-section">
<!--      滚动页面-->
      <view class="page-section-spacing">
        <scroll-view
          class="scroll-view"
          scroll-y="true"
        >
          <view class="competition-img"></view>
          <view class="competition-information-container">
            <view class="competition-title">{{ competitionDetail.title }}</view>
            <view class="competition-organizer">{{ competitionDetail.organizer }}</view>
            <view class="competition-deadline">{{ competitionDetail.deadline }}</view>
            <view class="competition-content">{{ competitionDetail.content }}</view>
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
  name: 'signUpCompetitionList',
  components: {},
  data() {
    return {
      competitionDetail: {
          title: '动画设计赛',
          content: '通过动画基础课程的学习，同学们了解了动画影片的发展历史,对动画有了一个整体上的认识 ,并且通过动画史了解不同国家的文化背景。课程中，同学们从实体角度认识动画中的关键动作，同时掌握动画中常用的布景，摄影等技巧。同时，学生掌握了动画的基本原理及动画制作中的一般运动规律。学生通过课程学习，能制作出有一定表现力，合事物运动规律的动画短片。 动画设计比赛作为该课程的期末结课作品，旨在对本学期的学习做实际的运用和练习，展现同学们的实际操作能力， 做出能够弘扬中华民族传统文化和民族文化的优秀动画作品。',
          deadline: '2020-12-02~2021-01-20',
          organizer: '《动画基础》课程组',
      }
    }
  },
  methods: {
    returnClick() {
      Taro.redirectTo({
        url: '../sign-up-competition-list-in/index'
      })
    },
    signUpClick() {
      Taro.navigateTo({
        url: '../sign-up-step/index',
      })
    }

  }
}
</script>
