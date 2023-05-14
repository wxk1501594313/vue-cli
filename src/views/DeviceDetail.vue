<template>
  <div>
    <el-card class="el-card">
      <div style="margin: auto auto 14px auto;">
        设备名称: {{ this.$route.params.deviceName }}
      </div>
      <el-divider></el-divider>
      <el-image 
        style="width: 168px; height: 136px; margin: auto auto 14px auto;" 
        :src=screenPath 
        fit="contain"></el-image>
    </el-card>
  </div>
</template>

<script>
import {getScreen} from '@/api/details'
export default {
  data(){
    return{
      screenPath: ""
    };
  },
  components: {

  },
  methods: {
    chart1() {
      var chartDom = document.getElementById("main");
      this.myChart = echarts.init(chartDom);
      var option;
      option = {
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data: this.dataArr,
            type: "scatter",
          },
        ],
      };
      option && this.myChart.setOption(option);
    },
  //   getWebSocket() {
  //     //建立websocket连接
  //     const ws = new WebSocket("ws://localhost:5000/screen");
  //     //连接成功后触发
  //     ws.onopen = (e) => {
  //       console.log('已连接');
  //     };
  //     //接收消息时触发
  //     ws.onmessage = (msg) => {
  //       //接收到消息后对接收到的数据进行处理，处理成图表需要的结构
  //       let n = msg.data.screen;
  //       console.log(n)
  //       this.dataArr.push(item);
  //       //触发图表更新
  //       this.chart1()
  //     };
  //       //连接断开时触发
  //       ws.onclose = (event)=> {
  //       console.log("websocket connection close.");
  //       console.log(event.code); 
  //      };
  //       //连接出错时触发
  //       ws.onerror = (event)=> { 
  //       console.log("websocket connection error."); 
  //       console.log(event); 
  //      };
  //   },
  },
  mounted () {
    // this.getWebSocket();
    setInterval(function(){
        getScreen().then((response)=>
      {
        // this.screenPath = require('D:/pythonProject/vue_test/vue-cli/src/assets/screen/' + response.data.screen)
        this.screenPath = require('D:/pythonProject/vue_test/vue-cli/src/assets/screen/' + response.data.screen)
        console.log(this.screenPath)
      })
      .catch(function(error) 
      { // 请求失败处理
          console.log(error);
      });
    },3000)
  }
}
</script>