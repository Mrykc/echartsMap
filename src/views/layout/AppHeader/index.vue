<template>
  <div class="header">
    <!-- 头部左侧Logo和标题 -->
    <div class="title">
      <img class="logo" src="@/assets/logo.png" width="25px"/>
      <span class="company">测试系统</span>
      <!-- 缩放按钮     -->
      <i @click="change" :class="!nav?'el-icon-s-fold':'el-icon-s-unfold'"></i>
    </div>
    <!-- 头部右侧下拉菜单 -->
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">admin
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">修改密码</el-dropdown-item>
        <el-dropdown-item command="b">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  computed:{
    //第一个参数为使用命名空间(namespace)的vuex model,第二个参数为state
    ...mapState('homes',{
      nav:'nav',
      theme:'theme'
    })
  },
  watch: {
    nav:{
      handler(old, val) {
      }
    }
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
    },
    change() {
      this.$store.dispatch("homes/CHANGE_NAV")
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  /*左侧标题*/
  .title {
    width: 200px;

    .logo {
      vertical-align: middle;
      padding: 0 10px 0 40px;
    }

    .company {
      color: white;
    }

    i {
      vertical-align: middle;
      font-size: 32px;
      margin-left: 10px;
      cursor: pointer;
      color: azure;
    }
  }

  /* 下拉菜单 */
  .el-dropdown {
    margin-right: 40px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
}
</style>
