<template>
  <div id="app">
    <my-header></my-header>
    <my-body></my-body>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyBody from "@/components/MyBody.vue";
import MyFooter from "@/components/MyFooter.vue";
import MyHeader from "@/components/MyHeader.vue";
export default {
  name: 'App',
  components: {
    MyBody,
    MyFooter,
    MyHeader
  }
}
</script>

<style lang="scss">

</style>
