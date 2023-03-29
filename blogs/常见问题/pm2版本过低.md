---
title: PM2版本过低 不能重启 后台运行
---

# [返回常见问题](/blogs/QA.md)

![alt text](/pm2版本过低.png)
- 这种情况可能是PM2版本过低
- 但也可能是根本就没安装PM2
- 一般是在更新ICQQ后遇到的
- 正常的情况
::: tip
# 先切换云崽根目录
::: danger
如果你是Windows系统
- 在云崽根目录文件夹空白处
# 右键选择 Git Bash Here

::: warning
如果你是Linux系统
```bash
cd Yunzai-Bot   #正常切换云崽根目录即可
```
:::

::: warning
- 请认真看上方提示的系统
- 选择对应的切换云崽根目录方式
- 下面的命令是进入云崽根目录后通用的
- 且注意
# 下面的命令都必须在云崽根目录执行
:::

::: tip
卸载旧的PM2
```bash
npm uninstall pm2 -g
```
:::

::: tip
安装PM2
```bash
npm install pm2 -g
```
:::

::: tip
更新PM2
```bash
pm2 update
```
:::

- 这样问题就解决了
- 如果还遇到了其他问题
- 使用 XDM 脚本可以[加入QQ交流群](https://jq.qq.com/?_wv=1027&k=tNteBX0C)
- 其他因为路径不一样请另寻高明

# [返回常见问题](/blogs/QA.md)