# 使用 `fig-ui`

本节将介绍如何在项目中使用 fig-ui。

## 环境支持
::: tip 当前封装所使用的库版本
- vue 版本为： `3.2.+`
:::

## 安装

### 1. 使用包管理器
```shell
# NPM
npm install fig-ui

# Yarn
yarn install fig-ui

# pnpm
pnpm install fig-ui
```

## 快速开始
### 1. 完整引入
`fig-ui` 将会在Vue应用中进行**全局组件注册**。

```ts
// main.ts
import { createApp } from 'vue'
import figUi from 'fig-ui'
import 'fig-ui/dist/style.css'

const app = createApp(App)

app.use(figUi)
```

### 2. 按需引入
需要在使用组件的地方手动对 `fig-ui` 进行导入。
```html
<template>
  <button></button>
</template>

<script setup>
  import { button } from 'fig-ui'
</script>
```

## 注意事项
::: danger 关于原生库
组件库打包时会对第三方包如 `vue` 进行 `externals` 处理，所以务必保证使用组件的项目中导入必须要的第三方库。
:::
