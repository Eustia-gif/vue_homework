<template>
  <div id="app">
    <div style=margin-left:40%>
      <MySlot1>114514</MySlot1>
    </div>
    <div>
      <MySlot2>
23333
      </MySlot2>
    </div>
    <div>
      <MySlot3>
23234234
      </MySlot3>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
    MySlot1,
    MySlot2,
    MySlot3
  },
  data() {
    return {
      s1: 's1',
      s2: 's2',
      s3: 's3'
    }
  }
}
import MySlot1 from './components/my-slot1.vue'
import MySlot2 from './components/my-slot2.vue'
import MySlot3 from './components/my-slot3.vue'
</script>

<style lang="scss">

</style>
