<script>
export default {
  name: 'childComponents', // 将 name 移到这里
  props: {
    dataFromParent: {
      type: String,
      required: true,
    },
  },
  data() {
    return {

    }
  },
}
</script>

<template>
  <div>
    <h2>{{dataFromParent}}</h2>
  </div>
</template>

<style scoped>
</style>
