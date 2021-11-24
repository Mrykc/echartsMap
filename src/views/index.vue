<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <Main></Main>
  </div>
</template>

<script>
import Header from '@/components/layout/AppHeader'
import NavBar from '@/components/layout/AppNavBar'
import Main from '@/components/layout/AppMain'
export default {
  components:{Header,NavBar,Main}
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
  width: 12%;
  top: 50px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto;
  background-color: #545c64;
  &-conceal{
    width: 5%;
  }
}

/* 右侧主区域 */
.main {
  position: absolute;
  width: 88%;
  height: calc(100% - 50px);
  top: 50px;
  left: 12%;
  right: 0px;
  bottom: 0px;
  overflow-y: auto;
  background-color: #ffffff;
  &-conceal{
    left: 5%;
  }
}

</style>
