<template>
  <div class="threeMain">
    <three></three>
  </div>
</template>

<script>
import three from '@/components/three'
export default {
  name: "threeMain",
  components:{three},
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
.threeMain{
  width: 100%;
  height: 100%;
}
</style>
