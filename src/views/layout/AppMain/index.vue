<template>
  <div class="main" :style="{'width':width,'left':width=='calc(100% - 64px)'?'64px':'12%'}" style="transition: width,left 0.5s">
    <transition :name="transition">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      transition:''
    }
  },
  props:{
    width:{
      type: String,
      default: function () {
        return [];
      },
      required: false
    }
  },
  //使用watch 监听$router的变化
  watch: {
    $route(to, from) {
      if (to.matched.length > from.matched.length) {
        //设置动画名称
        this.transition = "slide-left";
      } else {
        this.transition = "slide-right";
      }
    },
  },
  methods:{

  }
}
</script>

<style scoped>
.main{
  width: 100%;
  height: 100%;
}
.slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
