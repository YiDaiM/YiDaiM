/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
const app = new Vue({
  el: "#app",
  data: {
    city: "",
    forWeather: [],
  },
  methods: {
    searchWeather: function() {
      var that = this;
      axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).
      then(function(response) {
        console.log(response.data.data.forecast);
        that.forWeather = response.data.data.forecast;
      },function (err) {
        console.log(err);
      })
    },
    changeCity(city) {
      // 将传入的城市传递给数据data里的city
      this.city = city;
      //  立即执行搜索功能
      this.searchWeather();

    }
  }
})