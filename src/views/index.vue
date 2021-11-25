<template>
  <div>
    <Header></Header>
    <NavBar :width="navWidth" @change="change"></NavBar>
    <Main :width="mainWidth"></Main>
  </div>
</template>

<script>
import Header from '@/views/layout/AppHeader'
import NavBar from '@/views/layout/AppNavBar'
import Main from '@/views/layout/AppMain'
export default {
  components:{Header,NavBar,Main},
  data(){
    return{
      navWidth:'12%',
      mainWidth:'88%'
    }
  },
  methods:{
    //更改main和nav宽度
    change(navWidth,mainWidth){
      console.log(navWidth,mainWidth)
      this.navWidth=navWidth
      this.mainWidth=mainWidth
    }
  }
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
  &-conceal{
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
  &-conceal{
    left: 5%;
  }
}

</style>
