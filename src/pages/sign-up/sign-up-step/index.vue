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
        @tap="returnClick"
      >取消</button >
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
          <text class="form-title">参赛信息</text>
          <view class="competition-information-container">
            <view class="competition-information">{{ competitionDetail.title }}</view>
            <view class="competition-information">{{ competitionDetail.organizer }}</view>
          </view>
          <view class="input-container">
            <input
              class="title-input form-input"
              type="text"
              placeholder="请输入作品名称"
              focus/>
            <input
              class="team-input form-input"
              type="text"
              placeholder="请输入团队名称"
              focus/>
            <view class="tip-container">
              <view class="tip-icon"></view>
              <text class="tip">若个人参赛请填写“个人”</text>
            </view>
            <input
              class="teacher-name-input form-input"
              type="text"
              placeholder="指导老师姓名"
              focus/>
            <input
              class="teacher-company-input form-input"
              type="text"
              placeholder="请输入指导老师所在单位"
              focus/>
          </view>

<!--          添加的作者-->
          <view
            class="more-author-container"
            v-for="(item, index) of moreAuthor"
            :key="index"
          >
            <view class="more-author-top">
              <text class="more-author-number">作者{{ index+1 }}</text>
              <view
                class="more-author-delete"
                @tap="deleteAuthorClick"
              >删除</view>
            </view>
            <view class="more-author-input-container">
              <view class="more-author-short-input-container">
                <input
                  v-model="moreAuthor.name"
                  class="more-author-input form-input"
                  type="text"
                  placeholder="请输入作者名称"
                  focus/>
                <input
                  v-model="moreAuthor.schoolNumber"
                  class="more-author-input form-input"
                  type="text"
                  placeholder="请输入作者学号"
                  focus/>
                <input
                  v-model="moreAuthor.college"
                  class="more-author-input form-input"
                  type="text"
                  placeholder="请输入作者学院"
                  focus/>
                <input
                  v-model="moreAuthor.major"
                  class="more-author-input form-input"
                  type="text"
                  placeholder="请输入作者专业"
                  focus/>
              </view>
              <input
                v-model="moreAuthor.telephoneNumber"
                class="author-telephone-input form-input"
                type="text"
                placeholder="请输入作者联系方式"
                focus/>
            </view>
          </view>

<!--          添加作者按钮-->
          <view
            class="add-author-container"
            @tap="addAuthorClick"
          >
            <view class="add-author-icon"></view>
            <text class="add-author-text">添加作者</text>
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
  name: 'signUpStep',
  components: {},
  data() {
    return {
      competitionDetail: {
          title: '动画设计赛',
          organizer: '《动画基础》课程组',
      },
      moreAuthor: [],
    }
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
    nextStepClick() {
      Taro.navigateTo({
        url: '../sign-up-step2/index',
      })
    },
    // 添加作者
    addAuthorClick() {
      this.moreAuthor.push({});
    },
    // 删除作者
    deleteAuthorClick() {
      this.moreAuthor.pop();
    }
  }

}
</script>
