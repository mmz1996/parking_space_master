<template>
  <div>
    <div v-for="tab in msg" :key="tab.text">
      {{tab.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'status',
  data () {
    return {
      msg: [
        {text: '停车场的名称'},
        {text: '停车场的id'},
        {text: '停车场的地理位置'},
        {text: '停车场的总车位数量'},
        {text: '停车场目前可使用剩余车位数量'},
        {text: '停车场已使用车位数量'},
        {text: '停车场的收费标准'},
        {text: '停车场简介'}

      ]
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
