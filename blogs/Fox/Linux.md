---
title: 早苗Bot 部署教程 Linux
---

## 视频教程
<video src="/Fox/Linux.mp4" width="320" height="240" controls preload></video>

```bash
bash <(curl -sL https://gitee.com/haanxuan/yzai-pd/raw/master/MiaoFox.sh)
```

::: warning
- 注意[go-cqhttp](https://docs.go-cqhttp.org/)的版本
- 视频教程录制的时间是旧版
- 脚本会根据官方更新[go-cqhttp](https://docs.go-cqhttp.org/)
- 如果你想自己手动部署
- 请自己下载最新版[go-cqhttp](https://docs.go-cqhttp.org/)
:::

## 原理讲解
- 早苗使用云端服务器
- 直接链接早苗的服务器即可使用
- [go-cqhttp](https://docs.go-cqhttp.org/)就是一个很好的工具
- 正常使用[go-cqhttp](https://docs.go-cqhttp.org/)即可
- 在go-cqhttp的配置文件里
- 写入反向ws链接地址为

```js
ws://sanae.youngmoe.com:200自选
```

::: tip
# 早苗的端口是1-50之间
- 上方的自选是让你自己选择1-50之间的数
- 最低是01
- 最高是50
:::

[PC电脑Windows教程](/blogs/Fox/Win.md)