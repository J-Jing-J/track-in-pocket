<template>
  <view class="index">
    <text>{{ msg }}</text>
    <button>123</button>
  </view>
</template>

<script>
import Vue from 'vue'
import Taro from '@tarojs/taro'
import './index.scss'
// import TabBar from '../../components/TabBar/index.vue'

export default {
  name: 'index',
  components: {
    // TabBar
  },
  data() {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
