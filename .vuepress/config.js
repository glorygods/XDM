module.exports = {
  plugins: [
    ['go-top'], //猫猫回到顶部
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['wanko', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'blackCat', 'miku', 'z16'],
        clean: false,
        messages: {
          welcome: '我是X欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        },
        width: 240,
        height: 352
      }
    ], //看板娘
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          {
            name: 'Main',
            artist: 'NachoNeko',
            url: '/bgm/NachoNeko_Main_BGM_Remake_Pakino_Cover.mp3',
            cover: '/bgm/甘城.jpg'
          },
          {
            name: 'END',
            artist: 'NachoNeko',
            url: '/bgm/NachoNeko_END_STREAM_BGM_Pakino_Cover.mp3',
            cover: '/bgm/甘城.jpg'
          },
          {
            name: 'OP',
            artist: 'NachoNeko',
            url: '/bgm/NachoNeko_OP_BGM_Pakino_Cover.mp3',
            cover: '/bgm/甘城.jpg'
          },
        ],
        autoplay: true,
        position: {left: '6px', bottom: '6px', 'z-index': '999999'}
      }
    ],  //音乐播放器配置
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }], //背景彩带
    [
      'dynamic-title',
      {
         showIcon: '/favicon.ico',
         showText: '(/≧▽≦/)咦！又好了！',
         hideIcon: '/failure.ico',
         hideText: '(●—●)喔哟，崩溃啦！',
         recoverTime: 2000,
      },
   ], // 崩溃标题
   ['cursor-effects', {
    size: 2, // size of the particle, default: 2
    shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
    zIndex: 999999999, // z-index property of the canvas, default: 999999999
  }], //点击光效
  ["sakura", {
    num: 20,  // 默认数量
    show: true, //  是否显示
    zIndex: 1,   // 层级
    img: {
      replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
      httpUrl: '...'     // 绝对路径
    }     
  }], //樱花飘落
  ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    width: '200px', // 默认 260px
    title: '消息提示',
    body: [
      {
        type: 'title',
        content: '欢迎加入QQ交流群 🎉🎉🎉',
        style: 'text-aligin: center;'
      },
      {
        type: 'image',
        src: '/XDM.png'
      }
    ],
    footer: [
      {
        type: 'button',
        text: '打赏',
        link: '/reward.png'
      },
    ]
  }], //公告插件
  ],//插件 
  
  title: "XDM",
  theme: 'reco',
  themeConfig: {
     // 博客配置
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容 
    /*sidebar:{
      '/blogs/QA': //规定某路径下的页面有侧边栏  这是一个字典 key:value
      ['/blogs/常见问题/登录报错/网络问题.md',
      '/blogs/常见问题/登录报错/版本过低-禁止登录-安全提醒.md',
      '/blogs/常见问题/token过期.md',
      '/blogs/常见问题/pm2版本过低.md',
      '/blogs/常见问题/chromium启动失败.md',
      '/blogs/常见问题/更换虚拟设备.md',
      '/blogs/常见问题/戳一戳无效.md',
      '/blogs/常见问题/米游社查询遇到验证码.md',
      '/blogs/常见问题/米游社签到失败验证码失败.md'], //侧边栏内容
     }, */
     logo: "/logo.png",
     "record": "HanXuan",
    "startYear": "2022",
     blogConfig: {
      showTitle: true, // 是否显示标题
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '使用教程', link: '/blogs/XDM.md' },
      { text: '常见问题', link: '/blogs/QA.md' },
      { text: 'Yunzai-Bot V3 根目录', link: '/blogs/Root.md' },
      { text: '插件库', link: '/blogs/Plugins.md' },
      { text: 'FFmpeg', link: '/blogs/ffmpeg.md' },
      { text: '更新ICQQ', link: '/blogs/ICQQ.md' },
      { 
        text: '早苗Bot', 
        link: '/',
        items: [
          { text: 'PC电脑Windows教程', link: '/blogs/Fox/Win.md' },
          { text: 'Linux通用教程', link: '/blogs/Fox/Linux.md' },
        ]
      },
      { 
        text: '更多', 
        link: '/',
        items: [
          { text: '打赏', link: '/blogs/reward.md' },
          { text: '关于XDM', link: '/blogs/about.md' },
          { text: '友情链接', link: '/blogs/Friend.md' },     
          { text: '服务器推荐', link: '/blogs/Server.md' },
          { text: '远程协议软件推荐', link: '/blogs/assist.md' },
          { text: '戳一戳JS插件编写教程', link: '/blogs/poke.md' },
        ]
      } 
    ] 
  } 
} 