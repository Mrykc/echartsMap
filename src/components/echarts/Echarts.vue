<template>
  <div class="v-canvas" ref="vCanvas"></div>
</template>
<script>
import allCode from "@/static/maps/allCode";
import {Message} from 'element-ui'
export default {
  name: "Echarts",
  data() {
    return {
      myChart: null,
      isHaveNext:true,
      erd:undefined
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
    //导入监听插件
    const elementResizeDetectorMaker = require("element-resize-detector");
    // 创建实例
    const that=this
    that.erd = elementResizeDetectorMaker();
    that.erd.listenTo(that.$el,()=>{
      that.$nextTick(()=>{
        this.resizeChart()
      })
    })
  },
  methods: {
    //初始化方法
    init(){
      this.registerTheme().then(() => {
        this.registerMap().then(() => {
          this.myChart.setOption(this.option);
          this.myChart.on("click", (params) => {
            this.$emit("click", {name:params.name,isHaveNext:this.isHaveNext});
          });
          this.myChart.on("contextmenu", (params) => {
            this.isHaveNext=true
            this.$emit("contextmenu", params);
          });
        });
      });
    },
    //刷新方法
    reload(){
      this.registerTheme().then(() => {
        this.registerMap().then(() => {
          this.myChart.setOption(this.option);
        });
      });
    },
    //主题
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
    },
    //地图JSON注册
    async registerMap() {
      let city=allCode[`${this.nameMap}`]
      if (this.nameMap&&city) {
        await this.$axios
          .get(`${city}_full.json`,)
          .then(res => {
            this.$echarts.registerMap(this.nameMap, res);
          })
      }else{
          Message({
            message: `暂无${this.nameMap}数据`,
            type: 'error',
            duration: 3 * 1000
          })
      }
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
    this.erd.removeAllListeners(this.$el)
    // window.removeEventListener("resize", this.resizeChart);
  },
};
</script>
<style scoped lang="scss" >
.v-canvas {
  width: 100%;
  height: 100%;
}
</style>
