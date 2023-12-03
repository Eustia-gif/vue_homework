<template>
  <div>
    <child-components :data-from-parent="1111111111"></child-components>
    <img :src="javascript" alt="" />
    <!-- 唯一根元素 -->
    <!-- assets：资源 -- 图片/CSS/音频/视频.. -->
  </div>
  <!-- <img src="1.png" alt=""> -->
  <!-- 关于图片:
    - 项目包自带 webpack 模块, 会自动对项目进行打包, 剔除代码中没用到的资源,
      假设 assets里放了100张图, 代码中就用了10个, 打包时会自动只打包10个
    - 在 img 的 src 中书写的图片路径, 会被认为是需要的图片
    - 问题点: JS中书写的图片路径, 默认会被识别为普通的字符串, 而不被打包.
      必须用 require法引入这个图片, 才会被识别到! -->
</template>

<script>
// ES6的模块化语法
// -- 导出 export default {}
// -- 导入 import express from 'express'
/* 写法中，一般我们会用到图片的相对路径，例如：../../../assets/images/XXX.jpg，
但是这样写比较繁琐，以及打包之后路径会产生变化，因为需要去写一个动态的代码去引入 */
import childComponents from "@/components/child.vue";
export default {
  data() {
    return {
      javascript: require('@/assets/images/htmlcss.png')
    }
  },
  components: {
    childComponents
  }
}
</script>

<style scoped>

</style>
