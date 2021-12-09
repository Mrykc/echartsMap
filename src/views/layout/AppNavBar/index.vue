<template>
  <div class="navbar" :style="{'width':width}" style="transition: width 1s">
    <el-menu
        :default-active="defaultActive"
        ref="elMenu"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#ffffff"
        router
        :collapse="nav"
        @open="handleOpen"
        @close="handleClose">
<!--      动态生成菜单栏组件-->
    <zMenu :menus="routes"></zMenu>
    </el-menu>
  </div>
</template>
<script>
import routes from './router'
import zMenu from './zMenu'
import {mapState} from "vuex";
export default {
  components:{zMenu},
  props:{
    width:{
      type: String,
      default: function () {
        return [];
      },
      required: false
    }
  },
  computed:{
    ...mapState('homes',{
      nav:'nav',
      theme:'theme'
    })
  },
  data() {
    return {
      routes: routes,
      defaultActive: '/home',
    };
  },
  //监听路有变化改变选中状态
  watch: {
    $route(to) {
      this.defaultActive = to.path
    }
  },
  mounted() {

  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  }
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 99%;
  height: 100%;
}
.el-menu--collapse{
  height: 100%;
}
.el-menu{
  border: none;
}
</style>
