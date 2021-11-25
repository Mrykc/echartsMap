<template>
  <div class="navbar">
    <el-menu
        :default-active="defaultActive"
        ref="elMenu"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#ffffff"
        router
        @open="handleOpen"
        @close="handleClose">
      <div v-for="item in routes" :key="item.path">
        <!-- 没有子菜单 -->
        <template v-if="item.children && item.children.length == 0">
          <el-menu-item :index="item.path">
            <i :class="item.icon"></i>
            {{item.name}}
          </el-menu-item>
        </template>
        <!-- 有子菜单 -->
        <el-submenu v-else :index="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            {{item.name}}
          </template>
          <template v-for="child in item.children">
            <!-- 这里是类似递归循环 -->
            <sidebar-item
                v-if="child.children&&child.children.length>0"
                :item="child"
                :key="child.path"
            />
            <el-menu-item v-else :key="child.path" :index="child.path">
              <i :class="child.icon"></i>
              {{child.name}}
            </el-menu-item>
          </template>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>
<script>
import routes from './router'
export default {
  data() {
    return {
      isCollapse: false,
      routes:routes,
      defaultActive:'/home'
    };
  },
  //监听路有变化改变选中状态
  watch:{
    $route(to,from){
      this.defaultActive=to.path
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getPost(){
      this.$axios.request({url:'123',method:"POST",needLoading:false}).then(res=>res)
    }
  }
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width:99%;
  height:100%;
}
</style>
