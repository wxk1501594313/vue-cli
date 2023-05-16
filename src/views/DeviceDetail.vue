<template>
  <div class="device-detail">
    <el-row>
      <el-col :span="6">
        <el-card style="margin: 10px 0px 0px 10px;">
          <div style="margin: auto auto 14px auto;">
            设备名称: {{ this.$route.params.deviceName }}
          </div>
          <el-image 
            style="width:100%; margin: auto auto 14px auto;" 
            :src="screenPath" 
            fit="contain"></el-image>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-card style="margin: 10px 0px 0px 10px;">
          <div style="margin: auto auto 14px auto;">
            设备详情
            <el-divider></el-divider>
            设备名称: {{ this.$route.params.deviceName }}
            <el-divider></el-divider>
            安卓ID: {{ this.android_id }}
            <el-divider></el-divider>
            屏幕尺寸: {{ this.screen_x + "×" + this.screen_y}}
            <el-divider></el-divider>
            最大电量: {{ this.max_battery + "mA" }}
            <el-divider></el-divider>
            当前电量: {{ this.cur_battery+ "mA" }}
            <el-divider></el-divider>
            cpu核心数: {{ this.cpu_num }}
            <el-divider></el-divider>
            最大内存: {{ this.max_memory + "G" }}
            <el-divider></el-divider>
            剩余内存: {{ this.cur_battery + "G" }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-divider direction="vertical" class="el-divider-vertical"></el-divider>
    <!-- <el-image 
      style="width:30%; margin: auto auto 14px auto;" 
      :src="screenPath" 
      fit="contain"></el-image> -->
  </div>
</template>

<script>
import {getScreen, getDeviceDetails} from '@/api/details'
import request from '@/utils/request'
export default {
  data(){
    return{
      screenPath: "https://raw.githubusercontent.com/wxk1501594313/image/main/img/screen20230516201621.png",
      android_id: "",
      cpu_num: "",
      cur_battery: "",
      free_memory: "",
      ip: "",
      max_battery: "",
      max_memory: "",
      screen_x: "",
      screen_y: ""
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
    request(
      {
        url: "/getCoreInformation",
        method: 'get',
      }
    )
    .then((response)=>
      {
        this.android_id = response.data.android_id
        this.cpu_num = response.data.cpu_num
        this.cur_battery = response.data.cur_battery
        this.free_memory = response.data.free_memory
        this.ip = response.data.ip
        this.max_battery = response.data.max_battery
        this.max_memory = response.data.max_memory
        this.screen_x = response.data.screen_x
        this.screen_y = response.data.screen_y
      })
    .catch(function (error) 
      { // 请求失败处理
          console.log(error);
      }
    );
    // this.getWebSocket();
    // setInterval(function(){
    //     getScreen().then((response)=>
    //   {
    //     // this.screenPath = require('D:/pythonProject/vue_test/vue-cli/src/assets/screen/' + response.data.screen)
    //     this.screenPath = require('D:/pythonProject/vue_test/vue-cli/src/assets/screen/screen20230516201621.png' + response.data.screen)
    //     console.log(this.screenPath)
    //   })
    //   .catch(function(error) 
    //   { // 请求失败处理
    //       console.log(error);
    //   });
    // },3000)
  }
}
</script>

<style lang="scss" scoped>
.device-detal{
  width: 100%;
  height: 100%;
  .el-divider-vertical{
    display: inline-block;
    widows: 1px;
    height: 55em;
    margin: 0 8px;
    vertical-align: middle;
    position: relative;
  }
}
</style>