<template>
  <div id="app">
    {{ responseData.city}}-{{ responseData.air}}-{{ responseData.air_level}}-{{ responseData.air_tips}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      responseData: {},
    };
  },
  mounted() {
    // 在组件挂载后发送异步请求
    this.fetchData();
  },
  methods: {
    fetchData() {
      // 使用 Axios 发送异步请求
      axios.get('https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=95726411&appsecret=1Hx8lYMN')
          .then(response => {
            // 请求成功时更新组件的数据
            this.responseData = response.data;
            console.log(this.responseData);
          })
          .catch(error => {
            // 处理请求失败的情况
            console.error('Error fetching data:', error);
          });
    },
  },
};
</script>


