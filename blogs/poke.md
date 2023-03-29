---
title: 最简单的戳一戳插件编写教程
---

::: danger
- 本文只是让你达到戳一戳效果
- 并不是教你写插件
- 而作者本就不会写插件
- 所以遇到问题不用问
- 想写其他的也不用问
- 因为根本就不会
:::

::: tip
# 效果展示
![alt text](/戳一戳效果.png)
:::

## 创建一个JS文件
- 其实js就是一个文本啦
- 新建一个文本
- 文本默认都是txt格式的
- 把txt改成js就行啦
## [获取角色语音URL链接教程](https://www.bilibili.com/video/BV1a34y1f7f8/?share_source=copy_web&vd_source=637815ec2b4a6ad7b556be6113eea381)

```js
import plugin from '../../lib/plugins/plugin.js'
import cfg from '../../lib/config/config.js'

const _path = process.cwd();


export class example extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '可莉语音戳一戳',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'notice.group.poke',
      /** 优先级，数字越小等级越高 */
      priority: -114514, //负级的话优先级就更高啦
      rule: [
        {
          /** 命令正则匹配 */
          reg: '.*',
          /** 执行方法 */
          fnc: 'chuochuo' //这个执行方法就是执行对应的数组
        }
      ]
    })
  }
 
  

  async chuochuo (e) {  //可以看到这个前面写的和上面的执行方法名字是一样的
    

    if(e.target_id == cfg.qq){
      
                          /*这个是一个随机数*/
    let num = Math.ceil(Math.random() * 3); //3的意思就是在1-3里随机一个数
    /*可以看到前面都会写着一个数字
      第一条写着数字1
      那随机数生成1的时候
      就会执行这个1里的内容
      发送文本然后发送语音
    */
 if(num == 1){
  e.reply(`旅行者好呀~我是可莉`); //这个括号里的单引号里写触发时回复的文本
     //生成一个语音消息并存储
  let msg = await segment.record("https://patchwiki.biligame.com/images/ys/9/9f/icnus2c6r8piuvz8k9uz2i5tt0w9ydb.ogg")  //这个括号里的单引号里写语音URL链接
  e.reply(msg)  //在此用于发送消息
}
if(num == 2){
  e.reply(`早安！带可莉出去玩吧！我们一起来冒险！`);
  let msg = await segment.record("https://patchwiki.biligame.com/images/ys/a/a2/iilujuoh67ogl6nivmxh6s86xc0oqdz.ogg")
  e.reply(msg)
}
if(num == 3){
  e.reply(`午饭时间到了！啊…吃什么呢？我来看看《提瓦特游览指南》…`);
  let msg = await segment.record("https://patchwiki.biligame.com/images/ys/9/9c/eg8twp9wr1o5xma59npbsunpm6d65za.ogg")
  e.reply(msg)
}
  return true
  }
}
}
```

## 如果还是看不懂？

```js
if(num == 队列数){
  e.reply(`文本内容`);
  let msg = await segment.record("语音URL链接")
  e.reply(msg)
}
```
- 你可以这样理解
- 复制这个格式
- 然后修改
- 队列数 发送的文本内容 发送的语音内容

## 文字回复示例
- 你想戳一戳然后发送你要的文字
- 例如你要的文字是
- 你好 我学会了 我没学会
```js
import plugin from '../../lib/plugins/plugin.js'
import cfg from '../../lib/config/config.js'

const _path = process.cwd();


export class example extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '自己写戳一戳',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'notice.group.poke',
      /** 优先级，数字越小等级越高 */
      priority: -114514, //负级的话优先级就更高啦
      rule: [
        {
          /** 命令正则匹配 */
          reg: '.*',
          /** 执行方法 */
          fnc: 'chuochuo'
        }
      ]
    })
  }
 
  

  async chuochuo (e) {
    

    if(e.target_id == cfg.qq){
      

    let num = Math.ceil(Math.random() * 3); //记得改随机数
 if(num == 1){
  e.reply(`你好`); //这个括号里的单引号里写触发时回复的文本
}
if(num == 2){
  e.reply(`我学会了`); //不会写插件没关系
}
if(num == 3){
  e.reply(`我没学会`); //改插件内容就可以了
}
  return true
  }
}
}
```

## 文字+语音回复示例
- 你想戳一戳然后发送你要的文字和语音
- 例如你要的文字和语音是
- 骂你 又骂你
```js
import plugin from '../../lib/plugins/plugin.js'
import cfg from '../../lib/config/config.js'

const _path = process.cwd();


export class example extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '自己写戳一戳',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'notice.group.poke',
      /** 优先级，数字越小等级越高 */
      priority: -114514, //负级的话优先级就更高啦
      rule: [
        {
          /** 命令正则匹配 */
          reg: '.*',
          /** 执行方法 */
          fnc: 'chuochuo'
        }
      ]
    })
  }
 
  

  async chuochuo (e) {
    

    if(e.target_id == cfg.qq){
      

    let num = Math.ceil(Math.random() * 2); //记得改随机数
 if(num == 1){
  e.reply(`骂你`); //这个括号里的单引号里写触发时回复的文本
  let msg = await segment.record("https://xiaobapi.top/api/xb/api/curse.php")
  e.reply(msg)                    //这里写打开就是语音的链接
}
if(num == 2){
  e.reply(`又骂你`); //不会写插件没关系
  let msg = await segment.record("https://xiaobapi.top/api/xb/api/curse.php")
  e.reply(msg)                   //其他格式的话有其他写法，建议用最简单的
}
  return true
  }
}
}
```

::: tip
- 其他就不会啦
- 只是群友希望出这个教程
- 但不是让你去乱改别人的插件
- 有时间还是自己学一下
- [JavaScript语言基础](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- [现代JavaScript教程](https://zh.javascript.info/)
- [5分钟上手TypeScript](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)
:::
学会了就可以来教我啦