<template>
  <div class="home">
    <Navbar></Navbar>

    <el-row :gutter="20">
      <!--
        element栅格是基础的24分栏，首先每行使用`<el-row>`标签标识，然后每行内的列使用`<el-col>`标识，
        至于每列整行的宽度比例，则使用`:span`属性进行设置。如需等分为三列 使用:span="8"
      -->
      <el-col
        v-for="device in devices"
        :span="4">
        <el-card class="el-card">
          <el-image style="width: 168px; height: 136px; margin: auto auto 14px auto;" :src="device.image" fit="contain" />
          <div style="padding: 0 14px 14px 14px">
            <!-- <span>{{ device.name }}</span> -->
            <div style="margin: auto auto 14px auto;">
              设备代码: {{ device.code }}
            </div>
            <div style="margin: auto auto 14px auto;">
              设备名称: {{ device.name }}
            </div>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-search"
              plain
              @click="goTarget('/deviceDetail/' + device.code + '/' + device.name, device.code)"
              >查看详情</el-button
            >
          </div>
        </el-card>
      </el-col>
    </el-row>

 
    <!-- <el-divider /> -->
  </div>
</template>

<script>
import request from '@/utils/request'
import Navbar from '@/components/NavBar.vue'
export default {
  name: "Index",
  data() {
    return {
      devices: ""
    };
  },
  methods: {
    goTarget(herf, code) {
      this.$store.dispatch("updateCode", code)
      this.$router.push({ path: herf }).catch(()=>{})
    },
  },
  components: {
    Navbar
  },
  mounted () {
    request(
    {
        url: "/getDevices",
        method: 'get',
    }
  )
  .then((response)=>
    {
    this.devices = response.data.device
    })
  .catch(function (error) 
    { // 请求失败处理
        console.log(error);
    });
  }
}

</script>

<style scoped lang="scss" scoped>
.home {
  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  overflow-x: hidden; //对溢出的边缘进行裁剪
}
.el-card {
  text-align:center
}
</style>

