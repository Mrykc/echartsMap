<template>
  <div class="main">
    <div class="cesium" ref="cesium"></div>
  </div>
</template>

<script>
//cesium组件
export default {
  mounted() {
    this.init()
  },
  methods: {
    //初始化cesium
    init() {
      const Cesium = this.$cesium
      const viewer = new Cesium.Viewer(this.$refs.cesium,{
        geocoder: true, //查找位置工具，查找到之后会将镜头对准找到的地址，默认使用bing地图
        homeButton: false, //视角返回初始位置
        sceneModePicker: true, //选择视角的模式，有三种：3D，2D，哥伦布视图(CV)
        baseLayerPicker: true, //图层选择器，选择要显示的地图服务和地形服务.
        navigationHelpButton: false, //导航帮助按钮，显示默认的地图控制帮助.
        animation: false, //动画器件，控制视图动画的播放速度.
        timeline: false, //时间线,指示当前时间，并允许用户跳到特定的时间.
        fullscreenButton: true,//全屏按钮
        CreditsDisplay: false,
        vrButton: false,
        selectionIndicator: false, // 是否可以选中
        infoBox: true,
        orderIndependentTranslucency: false,
        // selectedImageryProviderViewModel: "Bing Maps Roads",
        contextOptions: {
          webgl: {
            alpha: true
          }
        }
      });
      viewer._cesiumWidget._creditContainer.style.display = "none";// 隐藏版权
    }
  }
}
</script>

<style scoped lang="scss">
.main{
  height: 100%;
  width: 100%;
  position: relative;
  .cesium{
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
