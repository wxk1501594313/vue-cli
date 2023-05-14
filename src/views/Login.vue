<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" style="width:350px">
      <h1 class="title">设备管理系统</h1>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="账号"
        >
          <!-- -->
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter.native="handleLogin"
        >
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>
      <!-- 
      <el-form-item prop="code" v-if="captchaOnOff">
        <el-input
          v-model="loginForm.code"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          @keyup.enter.native="handleLogin"
        >
          <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" @click="getCode" class="login-code-img"/>
        </div>
      </el-form-item>-->
      <!-- <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox> -->
      <el-form-item style="width:50%; margin: 30px auto auto auto;">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
        <!-- <div style="float: right;" v-if="register">
          <router-link class="link-type" :to="'/register'">立即注册</router-link>
        </div> -->
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import Cookies from "js-cookie"
export default {
  name: "Login",
  data() {
    return {
      // codeUrl: "",
      loginForm: {
        username: "admin",
        password: "123456",
        rememberMe: false,
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [ //校验账号的规则
          { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [ //校验密码的规则
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ],
        code: [{ required: true, trigger: "change", message: "请输入验证码" }]
      },
      loading: false,
      // // 验证码开关
      // captchaOnOff: false,
      // // 注册开关
      // register: false,
      redirect: '/index'
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        //如果表单验证通过
        if (valid) {
          //修改为加载中
          this.loading = true;
          if (this.loginForm.rememberMe) {
            Cookies.set("username", this.loginForm.username, { expires: 30 });
            Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 });
            Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
          } else {
            Cookies.remove("username");
            Cookies.remove("password");
            Cookies.remove('rememberMe');
          }
          this.$store.dispatch("Login", this.loginForm)
          .then(() => {
            console.log(this.$store.state.user.token)
            if(this.$store.state.user.token != undefined) this.$router.push({ path: "/index" }).catch(()=>{})
            else this.$router.push({ path: "/" }).catch(()=>{})
          })
          .catch(() => {
            this.loading = false;
            if (this.captchaOnOff) {
              this.getCode();
            }
          });
        }
      }

      )
    }
  }
};

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.title {
  margin: 0px auto 30px auto; //上、下、左、右的外边距
  text-align: center;
  color: #707070;
}
body, html {
  height:100%
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("../assets/images/background.jpg");
  background-size: cover;
}

</style>
