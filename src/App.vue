<template>
  <div id="app" :style="style">
    <router-view/>
  </div>
</template>
<script>
  export default {
  components:{},
    data(){
      return{
        style:[
          {height: window.innerHeight+'px'},
          {width: window.innerWidth+'px'}
        ]
      }
    },
    methods:{
      //窗口变化改变元素大小
      onWindowResize(){
        this.style=[
          {height: window.innerHeight+'px'},
          {width: window.innerWidth+'px'}
        ]
      }
    },
    mounted() {
      //监听窗口变化
      window.addEventListener('resize', this.onWindowResize)
    }
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 400px;
  height: 400px;
}
body,html{
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>
