<template>
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px" class="login-form"><h2 class="login-title"></h2>
      <el-form-item label="帐号">
        <el-input v-model="form.username" placeholder="请输入帐号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    onSubmit(){
      this.$router.push('index')
    }
  }
}
</script>

<style scoped>
.login-form {
  width: 350px;
  /* 上下间隙150px, 左右自动 */
  margin: 160px auto;
  /*透明背景色*/
  background-color: rgb(255,255,255,0.8);
  padding: 30px;
  /* 圆角 */
  border-radius: 20px;
}
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background:#ffffff;
  overflow: hidden;
}
/* 标题 */
.login-title{
  text-align: center;
  color: #303133;
}
</style>
