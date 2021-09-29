export default {
  entryPagePath: 'pages/discover/home/index',
  pages: [
    'pages/login/binding-number/index',
    'pages/register/register-step/index',
    'pages/register/register-step2/index',
    'pages/register/register-step3/index',
    'pages/discover/home/index',
    'pages/discover/work-detail/index',
    'pages/community/community-home/index',
    'pages/community/community-transaction-list/index',
    'pages/community/community-product-details/index',
    'pages/community/community-product-publish/index',
    'pages/community/community-product-publish-success/index',
    'pages/community/community-help-need/index',
    'pages/community/community-help-appointment/index',
    'pages/community/community-help-publish/index',
    'pages/sign-up/sign-up-competition-list-in/index',
    'pages/sign-up/sign-up-competition-list-out/index',
    'pages/sign-up/competition-detail/index',
    'pages/sign-up/sign-up-step/index',
    'pages/sign-up/sign-up-step2/index',
    'pages/sign-up/information-confirm/index',
    'pages/sign-up/submit-success/index',
    'pages/my/help-news/index',
    'pages/my/my-works/index',
    'pages/my/competition-news/index',
    'pages/index/index',
    'components/TabBar/index',
    'components/NavigationBar/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    backgroundColor: '#ffffff',
    // 是否开启全局下拉刷新
    enablePullDownRefresh: true,
    // 下拉loading的样式
    backgroundTextStyle: 'dark',
    // 页面上拉触底事件触发时距页面底部距离，单位为 px。
    onReachBottomDistance: 50,
    // 去掉顶部导航栏
    navigationStyle: 'custom'
  ---},
  // 屏幕旋转
  resizable: false,
  usingComponents: {
    NavigationBar: "./components/NavigationBar/index"
  },
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@utils': [
        'src/utils'
      ],
      '@assets': [
        'src/assets'
      ],
      '@pages': [
        'src/pages'
      ],
      '@components': [
        'src/components'
      ],
      '@styles': [
        'src/styles'
      ],
    }
  }
}--
---------
