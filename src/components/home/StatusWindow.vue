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
        {text: '停车场的总车位'},
        {text: '停车场的目前损坏无法使用车位'},
        {text: '停车场目前可使用剩余车位'},
        {text: '停车场已使用车位'},
        {text: '停车场的收费标准'},
        {text: '停车场的名称'},
        {text: '停车场的id'}
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
