<template>
  <view class="discover">
<!--    navigationBar-->
    <view class="navigation-bar">
      <view class="navigation-bar-return-icon" @tap="returnClick"></view>
      <view class="navigation-bar-logo"></view>
    </view>


    <view class="page-section">
<!--      滚动页面-->
      <view class="page-section-spacing">
        <scroll-view
          class="scroll-view"
          scroll-y="true"
        >
          <video
            class="work-vidio"
            src="https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
            controls="true"
            poster="https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg"
            initial-time="0"
            id="video"
            loop="false"
            muted="false"
            enablePlayGesture="true"
          />

          <view class="honer-container">
            <view class="honer-icon"></view>
            <view class="honer-text">第17届IT节大赛-IT作品设计类一等奖</view>
          </view>

          <view class="work-container">
            <!--          标题和作者-->
            <view class="work-title-container">
              <view class="work-title">{{ workTitle }}</view>
              <view class="work-author-container">
                <view class="work-author-icon"></view>
                <view class="work-author-text">{{ workAuthor }}</view>
              </view>
            </view>
            <!--          标签-->
            <view class="work-label-container">
              <view class="work-label" v-for="item in workLabel">{{ item }}</view>
            </view>

            <view class="work-introduction-container">
              <view class="work-introduction-title">作品简介</view>
              <view class="work-introduction-content">{{ workBriefIntroduction }}</view>
            </view>
            <view class="work-introduction-container">
              <view class="work-introduction-title">作品思路</view>
              <view class="work-introduction-content">{{ workDesignIdea }}</view>
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
  name: 'workDetail',
  components: {},
  data() {
    return {
      workTitle: '《极光守护者》',
      workAuthor: '李诚威&陈思渝',
      workLabel: ['mg动画', '中国传统'],
      workBriefIntroduction: '人们常说∶旅行是你对平庸生活的一次越狱。随着科学技术的莲勃发展，人们已经可以借助各种交通工具日行千里。旅行，不再是麻烦的代名词。也正因为如此，爱探索世界的人们越来越多，而神秘的极光，则成为了无数赶路人心中的向往。在北欧芬兰，有个著名极光观赏地——拉普兰，那里，不仅有神秘的极光，还有一群甚至比极光还要神秘的人物，他们———被称为极光守护者。开始大家都十分迷惑，什么?极光还需要守护?难道是要阳止旅者观赏极光吗?恰恰相反，他们做的事情是相当于一个导游的职业，指引那些来寻求极光的人们能够顺利的看到极光',
      workDesignIdea: '1.首先是编写剧本，然后把剧本的内容整理修改成一句句的台词，之后我们会对每句台词进行对应的分镜头脚本的设计，以及初次配音和选取背景音乐确定影片大概的长度和节奏。\n' +
        '2.设计重点和难点：\n' +
        '(1)素材创作，这里要申明的是我们的素材全部都是用AI和PS进行绘制的，皆为纯原创素材。我们首先对素材进行黑白绘画，画完全部素材再进行统一上色，这样做的目的是能够让影片的风格和色调保持一致。素材都是由实拍获得的灵感，然后我们再把用软件把他们以动画的风格绘制出来\n' +
        '(2)采用生长型的动画，这种展示方式对比直接出现要来的有趣很多，特'
    }
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },

  }

}
</script>
