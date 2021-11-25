<!--动态菜单组件-->
<template>
  <fragment>
    <template v-for="menu in menus">
      <el-submenu v-if="menu.children && menu.children.length >= 1" :index="menu.path + ''" :key="menu.path">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.name}}</span>
        </template>
        <z-menu :menus="menu.children"></z-menu>
      </el-submenu>
      <el-menu-item v-else :index="menu.path + ''" :key="menu.path">
        <i :class="menu.icon"></i>
        <span slot="title">{{menu.name}}</span>
      </el-menu-item>
    </template>
  </fragment>
</template>
<script>
export default {
  name: "zMenu",
  props: {
    menus: {
      type: Array,
      default: function () {
        return [];
      },
      required: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
