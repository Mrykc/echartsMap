<template>
  <div class="v-canvas"></div>
</template>
<script>
import allCode from "@/static/maps/allCode";
export default {
  name: "Echarts",
  data() {
    return {
      myChart: null,
    };
  },
  /**
   * 接收父级元素传递参数
   * option:echarts渲染所需option
   * nameMap:若为地图则传值，若为其他可不传
   */
  props: {
    option: {
      required: false,
      type: Object,
      default: () => {
        return {};
      },
    },
    adcode:{
      required: false,
      type: String,
      default: () => {
        return "china";
      },
    },
    nameMap: {
      required: false,
      type: String,
      default: () => {
        return "china";
      },
    },
    theme: {
      required: false,
      type: String,
      default: () => {
        // return "customed";
        return undefined;
      },
    },
  },
  //监听数据变化
  watch: {
    option: {
      handler: "updateChart",
      immediate: false,
      deep: true,
    },
  },
  mounted() {
    this.init()
  },
  methods: {
    //初始化方法
    init(){
      this.registerTheme().then(() => {
        this.registerMap().then(() => {
          this.myChart.setOption(this.option);
          this.myChart.on("click", (params) => {
            this.$emit("click", params.name);
          });
          this.myChart.on("contextmenu", (params) => {
            this.$emit("contextmenu", params);
          });
          window.addEventListener("resize", this.resizeChart);
        });
      });
    },
    //刷新方法
    reload(){
      this.registerTheme().then(() => {
        this.registerMap().then(() => {
          this.myChart.setOption(this.option);
          window.addEventListener("resize", this.resizeChart);
        });
      });
    },
    //接口数据
    async registerTheme() {
      if (this.theme) {
        await this.$axios
          .get("themes/" + this.theme + ".json")
          .then((res) => {
            this.$echarts.registerTheme(this.theme, res.data.theme);
            this.myChart = this.$echarts.init(this.$el, this.theme);
          });
      } else {
        this.myChart = this.$echarts.init(this.$el);
      }
      this.$emit("init", this.myChart);
      return;
    },
    //地图JSON注册
    async registerMap() {
      let city=allCode[`${this.nameMap}`]
      if (this.nameMap) {
        await this.$axios
          .get(`${window.config.map}/${city}_full.json`)
          .then(res => {
            this.$echarts.registerMap(this.nameMap, res);
          }).catch( error=>{
            console.log(error)
            });
        //获取本地json文件
        // this.$echarts.registerMap('china', china)
      }
      return;
    },
    //更新视图
    updateChart() {
      if (this.myChart._chartsViews.length > 0) {
        this.myChart.clear();
      }
      this.reload()
    },
    resizeChart() {
      this.myChart.resize();
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  },
};
</script>
<style scoped lang="scss" >
.v-canvas {
  width: 100%;
  height: 100%;
}
</style>
