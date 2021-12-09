<template>
  <div style="overflow: hidden">
    <Header></Header>
    <NavBar :width="navWidth"></NavBar>
    <Main :width="mainWidth"></Main>
  </div>
</template>

<script>
import Header from '@/views/layout/AppHeader'
import NavBar from '@/views/layout/AppNavBar'
import Main from '@/views/layout/AppMain'
import {mapState} from "vuex";

export default {
  components: {Header, NavBar, Main},
  data() {
    return {
      navWidth: '12%',
      mainWidth: '88%'
    }
  },
  computed: {
    ...mapState('homes', {
      nav: 'nav',
      theme: 'theme'
    })
  },
  watch: {
    //监听缩放
    //第一种写法
    // nav() {
    //   if (!this.nav) {
    //     this.navWidth = '12%'
    //     this.mainWidth = '88%'
    //     this.$emit('change', '12%', '88%')
    //   } else {
    //     this.navWidth = '64px'
    //     this.mainWidth = 'calc(100% - 64px)'
    //   }
    // },
    //第二种写法
    nav: {
      handler() {
        if (!this.nav) {
          this.navWidth = '12%'
          this.mainWidth = '88%'
        } else {
          this.navWidth = '64px'
          this.mainWidth = 'calc(100% - 64px)'
        }
      }
    }
  }
  ,
  methods: {}
}
</script>

<style scoped lang="scss">
/* 头部区域 */
.header {
  position: absolute;
  line-height: 50px;
  padding: 0px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #2d3a4b;
}

/* 左侧导航栏 */
.navbar {
  position: absolute;
  top: 50px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto;
  background-color: #545c64;
  overflow-x: hidden;

  &-conceal {
    width: 5%;
  }
}

/* 右侧主区域 */
.main {
  position: absolute;
  height: calc(100% - 50px);
  top: 50px;
  right: 0px;
  bottom: 0px;
  overflow-y: auto;
  background-color: #ffffff;

  &-conceal {
    left: 5%;
  }
}

</style>
