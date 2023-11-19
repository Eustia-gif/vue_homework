<template>
  <div class="wrap">
    <div class="search_form">
      <div class="logo"><img src="./assets/logo.png" alt="logo" /></div>
      <div class="form_group">
        <input type="text" class="input_txt" placeholder="请输入查询的天气" v-model="city"/>
        <button class="input_sub" @click="clickSearch(city)">搜 索</button>
      </div>
      <span class="hotkey" v-for="item in hotCitys" :key="item.id">
        <a href="javascript:void(0);" @click="clickSearch(item)">{{item}}</a>
      </span>
    </div>
    <ul class="weather_list">
      <li>
        <!-- 在过渡效果开始前等待100ms -->
        <div class="info_type">
          <span class="iconfont"> {{forecastList.city}} </span>//获取城市
        </div>
        <div class="info_temp">
          <b>{{forecastList.tem2}}</b>
          ~
          <b>{{forecastList.tem1}}</b>
        </div>
        <div class="info_date">
          <span>{{forecastList.week}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>


import axios from "axios";

export default {
  data() {
    return {
      city: "",
      forecastList: [],
      hotCitys: ["上海","北京", "广州", "深圳"],
    };
  },

  methods: {
    async queryWeather() {
      try {
        const response = await axios.get(`https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=95726411&appsecret=1Hx8lYMN&city=${this.city}`);
        this.forecastList = response.data;

      } catch (error) {
        console.error('Error fetching weather data:', error);
        // 在这里可以添加处理错误的逻辑
      }
    },


    clickSearch(city) {
      // 获取用户输入的城市名称
      this.city=city;
      // 调用查询天气的函数
      this.queryWeather(city);
      console.log(this.forecastList.city)
    },
  },
};
</script>
<style src="@/assets/css/reset.css" scoped></style>
<style src="@/assets/css/index.css" scoped></style>
<style scoped></style>
