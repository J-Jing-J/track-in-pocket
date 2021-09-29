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
        <view class="top-commodity-container">
          <!--          搜索-->
          <view class="search-container">
            <view class="search-icon"></view>
            <text class="search-text">宿舍神器</text>
            <view class="search-button">搜索</view>
          </view>
          <!--          滑动分类-->
          <view class="commodity-classification-container">
            <scroll-view
              class="commodity-classification-content"
              scroll-x="true"
            >
              <view
                class="commodity-classification-item"
                v-for="item in commodityClassificationList"
              >
                <text class="commodity-classification-item-title">{{item.title}}</text>
              </view>
            </scroll-view>
          </view>
        </view>
<!--        发布按钮-->
        <view class="publish-button" @tap="publishClick"></view>


        <scroll-view
          class="scroll-view"
          scroll-y="true"
        >
          <view class="commodity-list">
            <view
              class="commodity-list-item"
              v-for="item in commodityList"
            >
              <view
                class="commodity-list-item-img"
                @tap="productDetailClick"
              ></view>
              <text class="commodity-list-item-title">{{ item.title }}</text>
              <text class="commodity-list-item-price">￥{{ item.price }}</text>
              <view class="commodity-list-item-publisher">
                <view class="publisher-icon"></view>
                <view class="publisher-name">{{ item.publisherName }}</view>
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
  name: 'communityTransactionList',
  components: {},
  data() {
    return {
      commodityClassificationList: [
        {
          title: '推荐'
        },
        {
          title: '日用品'
        },
        {
          title: '护肤品'
        },
        {
          title: '鞋类'
        },
        {
          title: '考研'
        },
        {
          title: '教材'
        },
        {
          title: 'cosplay'
        },
        {
          title: '单车'
        },
        {
          title: '单车'
        },
        {
          title: '单车'
        },
        {
          title: '单车'
        },
      ],
      commodityList: [
        {
          title: '出汰渍洗衣粉 全新 买多了',
          price: 40,
          publisherName: '周钿'
        },
        {
          title: '八成新单车 京五自提 送工',
          price: 200,
          publisherName: '周钿'
        },
        {
          title: '出高数第七版上下两册',
          price: 20,
          publisherName: '周钿'
        },
        {
          title: '全新考研政治题 可送',
          price: 35,
          publisherName: '周钿'
        },
        {
          title: '出安耐晒 买多了一只 可送',
          price: 40,
          publisherName: '周钿'
        },
        {
          title: '出安耐晒 买多了一只 可送',
          price: 40,
          publisherName: '周钿'
        },
        {
          title: '出安耐晒 买多了一只 可送',
          price: 40,
          publisherName: '周钿'
        },
        {
          title: '出安耐晒 买多了一只 可送',
          price: 40,
          publisherName: '周钿'
        },
        {
          title: '出安耐晒 买多了一只 可送',
          price: 40,
          publisherName: '周钿'
        },
        {
          title: '出安耐晒 买多了一只 可送',
          price: 40,
          publisherName: '周钿'
        },
      ]
    }
  },
  methods: {
    returnClick() {
      Taro.navigateBack({
        delta: 1
      })
    },
    productDetailClick() {
      Taro.navigateTo({
        url: '../community-product-details/index'
      })
    },
    publishClick() {
      Taro.navigateTo({
        url: '../community-product-publish/index'
      })
    }
  }
}
</script>
