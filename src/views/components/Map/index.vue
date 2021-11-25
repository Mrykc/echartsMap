<template>
  <div class="home" @contextmenu.prevent.stop="backMap">
    <echart :option="option" :nameMap="nameMap" @click="getNextMap"></echart>
  </div>
</template>

<script>

import Echart from '@/components/echarts/Echarts.vue'

export default {
  components: {
    Echart
  },
  data() {
    return {
      nameMap: 'china',
      option: {},
      cityParams: []
    }
  },
  created() {
    this.getMap()
  },
  mounted() {
  },
  methods: {
    //获取地图数据
    getMap(map, series) {
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
              color: '#ffffff'
            },
            emphasis: {
              show: false,
              color: 'yellow'
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
        series: series,
      }
    },
    //下钻
    getNextMap(map) {
      this.cityParams.push(map.name)
      this.nameMap = map.name
      this.getMap(map.name, [])
    },
    //返回
    backMap() {
      if (this.cityParams.pop()) {
        this.getMap(this.cityParams.pop(), [])
      } else {
        this.getMap('china', [])
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>
