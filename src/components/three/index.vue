<template>
  <div class="threeGl" :style="style">

  </div>
</template>

<script>
//three布局组件
export default {
  name: "threeGl",
  //接收设定参数
  props: {
    //盒子宽度
    width: {
      required: false,
      type: String,
      default: () => {
        return undefined;
      },
    },
    //盒子高度
    height: {
      required: false,
      type: String,
      default: () => {
        return undefined;
      },
    },
  },
  data() {
    return {
      style:{
        width:this.width?this.width:'100%',
        height:this.height?this.height:'100%',
      },
      //场景
      scene:null,
      mesh:null,
      camera: null,
      renderer: null,
      controls:null
    }
  },
  methods: {
    //初始化渲染器
    initRender() {
      this.renderer = new this.$Three.WebGLRenderer({
        antialias: true//抗锯齿
      });
      //设置canvas尺寸与组件大小一致
      this.renderer.setSize(this.$el.clientWidth, this.$el.clientHeight);
      //设置背景
      this.renderer.setClearColor(0x000000, 1.0);
      this.$el.append(this.renderer.domElement)
    },
    //初始化相机
    initCamera() {
      this.camera = new this.$Three.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
      this.camera.position.y = 400;
    },
    //初始化场景
    initScene() {
      this.scene = new this.$Three.Scene();
    },
    //初始化灯光
    initLight() {
      this.scene.add(new this.$Three.AmbientLight( 0x404040));
      //添加平衡光
      this.light = new this.$Three.DirectionalLight( 0xffffff );
      this.light.position.set(0,1,0);
      this.scene.add(this.light);
    },
    //初始化模型
    initModel() {
      let geometry = new this.$Three.BoxGeometry(100, 100, 100);
      let material = new this.$Three.MeshNormalMaterial({
        color: "#ffffff"
      });
      this.mesh = new this.$Three.Mesh(geometry, material);
      this.scene.add(this.mesh);
    },
    //动画方法
    animate() {

    },
    //绘制方法
    draw() {
      this.initRender()
      this.initCamera()
      this.initScene()
      this.initLight()
      this.initModel()
    }
  },
  mounted() {
    this.draw()
  },
  destroyed() {

  }
}
</script>

<style scoped lang="scss">
.threeGl{
  width: 100%;
  height: 100%;
}
</style>
