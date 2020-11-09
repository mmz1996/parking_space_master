<template>
  <div>
    <div class="from-warpper">
      <div class="title">鼎新楼西区停车场停车位实况</div>
      <div id="map-container"></div>
      <div class="viewmode-group">
        <button id="btn3D" class="btn btn-default" @click="click2D"></button>
      </div>
      <div class="parking fix" id="parking"><span id="carid"></span>车位情况：<span id="YorN"></span></div>
      <div class="codition fix">
        <ul>
          <li><span class="codition-first"></span>占用车位</li>
          <li><span class="codition-second"></span>空闲车位</li>
          <li><span class="codition-third"></span>预定车位</li>
        </ul>
      </div>
      <div class="i-test-tip fix" id="i-test-tip">
        停车场总车位数量为{{alldata}}，当前剩余车位数 {{freedata}}
      </div>
    </div>

  </div>
</template>

<script>
  import $ from 'jquery'
  import axios from 'axios'
  export default {
    name: "dxlwest",
    data () {
      return {
        alldata:106,
        parkData:"测试",
        statusname:["预定车位","有车","无车"],
        pos:0,
        freedata:0
      }
    },
    mounted() {
      window.map = new esmap.ESMap({
        container: document.getElementById("map-container"), //地图初始化的容器
        //引入static目录下的地图和主题文件夹所在位置
        // 注意：
        // 1. 此处路径是文件夹的文件夹的位置，而不是文件的位置
        // 2. 引入的文件夹目录下应创建一个和 地图ID/主题名称 相同的文件夹放置数据
        //    例如: 地图ID是 test666 ；主题名称是 1004；那么目录结构应该是：
        // 地图数据目录   static/esmap/mapData/test666/test666.esmap
        // 主题目录      static/esmap/theme/1004/1004.theme
        mapDataSrc: "static/dxlwest/mapData/", //地图数据所在目录
        mapThemeSrc: "static/gfz/theme/", //地图主题所在目录
        themeID: 1005, //请确保主题目录下存在该主题的数据包
        focusFloor: 1,
        // token应该填写在esmap官网创建该地图时所填写的token，每个地图ID对应一个唯一的token
        token: 'admin123'
      });

      //打开地图
      map.openMapById('dxl002');

      //添加放大缩小组件
      // var ctlOpt1 = new esmap.ESControlOptions({
      //   position: 4, //位置 左上角
      //   //位置x,y的偏移量
      //   offset: {
      //     x: 20,
      //     y: 80
      //   }
      //   , imgURL: "static/gfz/resource/style/wedgets/img/"
      // });

      var ctlOpt = new esmap.ESControlOptions({
        position: esmap.ESControlPositon.RIGHT_TOP,
        imgURL: "static/gfz/resource/style/wedgets/"
      });
      //显示指南针
      map.showCompass = true;

      var that = this
      var pos = 0
      map.on("loadComplete", function () {
        // console.log("地图开始加载")
        // var zoomControl = new esmap.ESZoomControl(map, ctlOpt1);
        // that.marquee();
        setTimeout(function () {that.CallLoadData()},10);
        setInterval(function () {
          that.CallLoadData();
        }, 10000);
        // console.log("地图加载完成回调")
      })


      map.on("mapClickNode", function (event) {
        if (event.nodeType == esmap.ESNodeType.NONE ||
          event.nodeType == esmap.ESNodeType.FLOOR ||
          event.name == "楼梯")
          return;
        $("#parking").css("fontSize", "18px").html();
        $("#carid").css("color", "rgb(255, 255, 0)").html(event.name); //停车位ID
        for (var i = 0; i < that.$data.parkData.length; ++i) {
          if (event.name == that.$data.parkData[i].code) {
            console.log(that.$data.parkData[i].condition)
            $("#YorN").html(that.$data.parkData[i].condition);
          }
        }
      });
    },
    methods: {
      click2D () {
        //3D2D选择器
        if( map.viewMode === esmap.ESViewMode.MODE_2D){
          map.viewMode = esmap.ESViewMode.MODE_3D
        }
        if (map.viewMode === esmap.ESViewMode.MODE_3D) {
          map.viewMode = esmap.ESViewMode.MODE_2D
        }
      },
      CallLoadData () {
        var  color = ["#FFFF00", "#ff0000", "#00ff00"]
        var id =[]
        var that = this
        // console.log(that.$data.parkData)
        axios({
          method: 'get',
          url: '/carport/',
          data: {
            parkinglot: that.$store.state.id,
          },
          params: {
            search:"E",
            page_size:106
          }
        }).then(function (res) {
          //声明一个map的数据结构
          console.log("数据获取成功")
          console.log(res.data)
          //存到parkData中
          // console.log(res.data.put)
          that.$data.parkData = res.data.results
          // console.log("循环运行成功")
          var showtext= "";
          var freecars = 0
          //2.更新车位颜色
          //更新车位颜色，首先遍历这个mydata，里面有该楼层，所以mydata.size就是1
          for(var i =0;i<that.$data.parkData.length;i++){
            var temp = that.changeColor(that.$data.parkData[i].status)
            console.log(temp)
            window.map.changeModelColor({
              name:that.$data.parkData[i].code,
              color: temp
            });
            if( temp == "#99CCFF" ){
              freecars = freecars+1
            }
            that.$data.freedata = freecars
          }
        })
      },
      changeColor (status) {
        if (status == "unoccupied")
          return "#99CCFF"
        if (status == "engaged")
          return '#ff0000'
        if (status == "reserved")
          return '#00FF00'
      },
      // marquee() {
      //   var scrollWidth = $('#i-test-tip').width();
      //   var textWidth = $('.test-tip').width();
      //   var i = scrollWidth;
      //   setInterval(function () {
      //     i--;
      //     if (i < -textWidth) {
      //       i = scrollWidth;
      //     }
      //     $('.test-tip').animate({
      //       'left': i + 'px'
      //     }, 8);
      //   }, 8);
      // }
    }
  }
</script>

<style scoped lang='stylus'>
  .viewmode-group {
    position: absolute;
    right: 100px;
    top: 32%;
    border-radius: 6px;
    border: none;
  }

  .viewmode-group button {
    display: inline;
    width: 38px;
    height: 38px;
    border-radius: 4px;
    border: none;
    background-image: url("/static/esmap/resource/style/wedgets/img/3D.png")
    background-repeat: no-repeat
  }

  .parking {
    width: 320px;
    height: 46px;
    line-height: 46px;
    left: 500px;
    bottom: 14px;
    border: 1px solid #083344;
    border-radius: 4px;
    color: rgb(255, 255, 255);
    background-color: rgba(71, 92, 105, 0.8);
    font-size: 16px;
    text-align: center;
  }

  .fix {
    position: fixed;
  }

  .codition {
    width: 120px;
    left: 300px;
    bottom: 120px;
  }

  .codition ul {
    width: 100%;
    padding: 6px;
    list-style-type: none;
  }

  .codition ul li {
    display: list-item;
    height: 36px;
    background-color: rgb(255, 255, 255);
    line-height: 36px;
    text-align: center;
  }

  .codition ul li span {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
  }

  .codition-first {
    background-color: #f00;
  }

  .codition-second {
    background-color: #99CCFF
  }

  .codition-third {
    background-color: #00FF00;
  }

  .i-test-tip {
    width: 400px;
    height: 46px;
    line-height: 46px;
    left:1000px;
    bottom: 14px;
    border: 1px solid #083344;
    border-radius: 4px;
    color: rgb(255, 255, 255);
    background-color: rgba(71, 92, 105, 0.8);
    font-size: 16px;
    text-align: center;
  }

  .test-tip span {
    color: #0f0;
  }
  #map-container{
    height: 510px;
    width: 100%;
  }
  .from-warpper
    width 95%
    padding 20px
    border-radius 10px
    background-color white
    .title
      height 30px
      line-height 30px
      font-size 25px
      margin-bottom 30px
</style>
