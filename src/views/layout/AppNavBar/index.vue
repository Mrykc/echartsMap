<template>
  <div class="navbar" :style="{'width':width}" style="transition: width 1s">
    <el-menu
        :default-active="defaultActive"
        ref="elMenu"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#ffffff"
        router
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose">
<!--      动态生成菜单栏组件-->
    <zMenu :menus="routes"></zMenu>
    </el-menu>
  </div>
</template>
<script>
import routes from './router'
import bus from '../eventBus'
import zMenu from './zMenu'
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
  data() {
    return {
      isCollapse: false,
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
    //监听缩放
    bus.$on('isCollapse', data => {
      this.isCollapse = data
      if(!this.isCollapse){
        this.$emit('change','12%','88%')
      }else{
        this.$emit('change','64px','calc(100% - 64px)')
      }
      this.$el.getElementsByClassName('el-submenu__icon-arrow')[0].style.dispaly='none'
    })
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
