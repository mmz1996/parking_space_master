<!--<template>-->
  <!--<div class="from-warpper">-->
    <!--<div class="title">计算机大楼西区停车场车位实况</div>-->
    <!--<canvas id="myCanvas1" width="1200" height="1200"-->
            <!--style="border:3px solid #000000;">-->
    <!--</canvas>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
  <!--name: 'ParkingspaceImagewest',-->
  <!--data () {-->
    <!--return {-->
      <!--status: [{id: '001', color: 0}, {id: '002', color: 1}]-->
    <!--}-->
  <!--},-->
  <!--mounted () {-->
    <!--this.initCanvas1()-->
  <!--},-->
  <!--methods: {-->
    <!--changeColor (a) {-->
      <!--if (a === 0) {-->
        <!--return '#DC143C'-->
      <!--} else if (a === 1) {-->
        <!--return '#28FF28'-->
      <!--} else if (a === 2) {-->
        <!--return '#FFFF6F'-->
      <!--}-->
    <!--},-->
    <!--drawBackground (x, y, height, width) {-->
      <!--let canvas = document.getElementById('myCanvas1')-->
      <!--let ctx = canvas.getContext('2d')-->
      <!--ctx.fillStyle = '#409EFF'-->
      <!--ctx.fillRect(x, y, height, width)-->
      <!--ctx.strokeRect(x, y, height, width)-->
    <!--},-->
    <!--drawPlace (x, y, height, width, status) {-->
      <!--let canvas = document.getElementById('myCanvas1')-->
      <!--let ctx = canvas.getContext('2d')-->
      <!--ctx.strokeStyoe = 'black'-->
      <!--ctx.fillStyle = this.changeColor(status)-->
      <!--ctx.fillRect(x, y, height, width)-->
      <!--ctx.strokeRect(x, y, height, width)-->
    <!--},-->
    <!--writePlace (x, y, height, width, status, i, j) {-->
      <!--let canvas = document.getElementById('myCanvas1')-->
      <!--let ctx = canvas.getContext('2d')-->
      <!--ctx.fillStyle = 'black'-->
      <!--ctx.font = '30px Arial'-->
      <!--ctx.fillText((j + i), x + 5, y + 25)-->
    <!--},-->
    <!--initCanvas1 () {-->
      <!--// this.drawBackground(0, 0, 1200, 1200)-->
      <!--let i-->
      <!--for (i = 1; i <= 25; i++) {-->
        <!--this.drawPlace(100, (80 + i * 35), 60, 30, Math.floor(Math.random() * 3))-->
        <!--this.writePlace(100, (80 + i * 35), 60, 30, Math.floor(Math.random() * 3), i, 'A')-->
      <!--}-->
      <!--for (i = 1; i <= 25; i++) {-->
        <!--this.drawPlace(250, (80 + i * 35), 60, 30, Math.floor(Math.random() * 3))-->
        <!--this.writePlace(250, (80 + i * 35), 60, 30, Math.floor(Math.random() * 3), i, 'B')-->
      <!--}-->
      <!--for (i = 1; i <= 25; i++) {-->
        <!--this.drawPlace(400, (80 + i * 35), 60, 30, Math.floor(Math.random() * 3))-->
        <!--this.writePlace(400, (80 + i * 35), 60, 30, Math.floor(Math.random() * 3), i, 'C')-->
      <!--}-->
      <!--for (i = 1; i <= 25; i++) {-->
        <!--this.drawPlace(740, (80 + i * 35), 60, 30, Math.floor(Math.random() * 3))-->
        <!--this.writePlace(740, (80 + i * 35), 60, 30, Math.floor(Math.random() * 3), i, 'D')-->
      <!--}-->
      <!--for (i = 1; i <= 25; i++) {-->
        <!--this.drawPlace(890, (80 + i * 35), 60, 30, Math.floor(Math.random() * 3))-->
        <!--this.writePlace(890, (80 + i * 35), 60, 30, Math.floor(Math.random() * 3), i, 'E')-->
      <!--}-->
      <!--for (i = 1; i <= 25; i++) {-->
        <!--this.drawPlace(1040, (80 + i * 35), 60, 30, Math.floor(Math.random() * 3))-->
        <!--this.writePlace(1040, (80 + i * 35), 60, 30, Math.floor(Math.random() * 3), i, 'F')-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style lang='stylus' scoped>-->
  <!--.from-warpper-->
    <!--width 600px-->
    <!--padding 20px-->
    <!--margin-top 30px-->
    <!--border-radius 10px-->
    <!--background-color rgba(255, 255, 255, 0.5)-->
    <!--.title-->
      <!--height 30px-->
      <!--line-height 30px-->
      <!--font-size 25px-->
      <!--margin-bottom 30px-->
    <!--.button-->
      <!--text-align center-->
<!--</style>-->
