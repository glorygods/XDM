---
title: 换源 更新 ICQQ
date: 2023-3-6
---

::: tip
# 使用 XDM 一键更新
:::
- 因为脚本更新
- 所以你需要在脚本菜单里选择更新后才会出现新内容
- 更新后的位置在
- 【其他功能】
- 【 更新ICQQ】
- 或者可以直接执行以下命令

```bash
bash <(curl -sL https://gitee.com/haanxuan/yzai-pd/raw/master/ICQQ.sh)
```

---
---
---

::: danger
# 手动更新
:::
- 因为 XDM 只支持root目录的云崽
- 所以其他目录不能使用脚本
- 但可以使用以下方法
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
更换git源为https://gitee.com/yoimiya-kokomi/Yunzai-Bot
```bash
git remote set-url origin https://gitee.com/yoimiya-kokomi/Yunzai-Bot
```
:::

::: warning
建议删除旧的依赖库
- 不是一定要删除
- 删除这东西等于删除全部依赖
- 简单来说就是要重新安装所有依赖
- 懒的话就不删了
- 以后报错了再勤奋吧~
```bash
rm -rf package.json
```
:::

::: warning
建议删除旧的虚拟设备文件
```bash
rm -rf /data/你QQ号名字的文件夹（建议这类文件夹都删了）
```
:::

::: tip
撤销所有本地修改
- 复制完整这条命令后面有个小点点符号
```bash
git checkout .
```
:::

::: tip
更新本地仓库
```bash
git pull
```
:::

::: tip
安装新增依赖
```bash
pnpm install -P
```
:::

::: tip
推荐 重置登录
```bash
npm run login
```
:::

- 到这正常的话已经更新完成了
- 使用 XDM 脚本可以[加入QQ交流群](https://jq.qq.com/?_wv=1027&k=tNteBX0C)
- 其他因为路径不一样请另寻高明