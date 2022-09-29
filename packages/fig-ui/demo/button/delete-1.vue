<template>
  <div class="demo">
    <Delete-Button @click="clickHandle" />
    <Delete-Button>自定义文案</Delete-Button>
    <Delete-Button type="danger" />
  </div>
</template>

<script setup>
import { DeleteButtonV1 as DeleteButton } from 'fig-ui'

const clickHandle = () => {
  console.log('click')
}
</script>
<style scoped lang="scss">
.demo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    margin: 20px;
  }
}
</style>