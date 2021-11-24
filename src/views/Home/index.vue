<template>
  <div class="main">
    <el-row>
      <el-col :span="12">
        <el-calendar v-model="value">
        </el-calendar>
      </el-col>
      <el-col :span="12">

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value: new Date()
    }
  }
}
</script>

<style scoped lang="scss">
.main{

}
</style>
