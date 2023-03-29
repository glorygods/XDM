---
title: 浏览器chromium启动失败
---

# [返回常见问题](/blogs/QA.md)

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
在云崽根目录执行即可
```bash
cd node_modules/puppeteer && node install.js
```
:::

# 如果还是启动失败
# 注意是【启动失败】
- 那么就降低一下版本即可
- 后续解决可以自行升级
- 在云崽根目录执行以下命令
```js
pnpm add puppeteer@13.7.0 -w
```

# 执行完后正常使用云崽
- 如果Ubuntu还是启动失败的话
- 应该是缺少依赖
- Ubuntu还是失败可以装一下依赖
- 执行下面的命令即可
::: warning
这是一条很长的命令
# 注意复制完整
```bash
apt-get install ca-certificates fonts-liberation libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils libxkbcommon0 -y
```
:::

- 上面的长命令是安装常见依赖
- 基本上就是可用的
- 如果还是不行那我也不会解决了
- 也不用来问我了
- 确实是不会解决

# [返回常见问题](/blogs/QA.md)