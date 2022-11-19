<template>
  <div class="app-main" @click="toStep($event)">
    <img src="./qgStep.png" alt="问题生成步骤" style="width: 90%; margin: auto; position: absolute;top: 0;left: 0;bottom: 0;right: 0">
  </div>
</template>

<script>
export default {
  name: "QGSpecification",
  methods:{
    toStep(e){
      // console.log(e.target.offsetLeft, e.target.offsetTop)
      // console.log(e.clientX, e.clientY)
    }
  }
}
</script>

<style scoped>

</style>
