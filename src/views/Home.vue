<template>
  <div class="home" @contextmenu.prevent.stop="backMap">
    <echart :option="option" :nameMap="nameMap" @click="getNextMap"></echart>
  </div>
</template>

<script>

import Echart from '../components/echarts/Echarts.vue'
export default {
  components: {
    Echart
  },
  data() {
    return {
      nameMap:'china',
      option: {},
      cityParams:['china']
    }
  },
  created() {
    this.getMap()
  },
  mounted() {
  },
  methods: {
    //获取地图数据
    getMap(map) {
      this.option = {
        tooltip: {
          trigger: 'item',
          padding: 10,
          textStyle: {
            fontSize: 12,
          },
          formatter: function (params) {
            return (
                params.name
            )
          },
        },
        geo: {
          show: true,
          map: map ? map : 'china',
          zoom: 1.2,
          // aspectScale: 0.78, //长宽比
          label: {
            fontSize: 12,
            normal: {
              show: false,
              color:'#ffffff'
            },
            emphasis: {
              show: false,
              color:'yellow'
            }
          },
          itemStyle: {
            fontSize: 12,
            normal: {
              areaColor: '#3a7fd5',
              borderColor: '#0a53e9',//线
              shadowColor: '#092f8f',//外发光
              shadowBlur: 20
            },
            emphasis: {
              areaColor: '#0a2dae',//悬浮区背景
            }
          },
          roam: false,
          aspectScale: 1,
        },
        series: [

        ],
      }
    },
    //下钻
    getNextMap(name) {
      if(this.cityParams.length<3&&name!='台湾省'){
        this.cityParams.push(name)
        this.nameMap=name
        this.getMap(name)
      }
    },
    backMap(){
      if(this.cityParams.length>1){
        this.getMap(this.cityParams.pop())
      }else{
        this.getMap('china')
        console.log('到底了')
      }
    }
  }
}

</script>
<style lang="scss">
.home{
  width: 100%;
  height: 100%;
}
</style>