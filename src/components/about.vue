<template>
  <div>
    <div style="width: 80%;margin: 0 auto;">
      <div>
        <div style="display: inline-block;text-align: center;margin-top: 135px">
          <!--<p style="background-color: black;color: white;width: 260px;height: 65px;font-size: x-large" >GNOME.Asia<span style="color:#66ccff;">18</span></p>-->
        <h4 style="background-color: black;color: white;padding: 20px 20px;">GNOME.Asia<span style="color: #66ccff"> 2018</span></h4>
        </div>
        <p style="font-weight: 700;font-size: x-large">————</p>
        <p style="font-weight: 600;font-size: large">GNOME.Asia</p>
        <p>{{$t("About.aboutp1")}}
        </p>
      </div>
      <div> 
        <p style="font-weight: 700;font-size: x-large">————</p>
        <p style="font-weight: 700;font-size: large;display: inline;margin-right: 20px">{{$t("About.time")}}：<span style="font-weight: normal">{{$t("About.time1")}}</span></p>
        <p style="font-weight: 700;font-size: large;display: inline">{{$t("About.place")}}:<span style="font-weight: normal">{{$t("About.place1")}}</span></p>
      </div>
      <div style="margin-top: 2%;margin-bottom: 50px" >
        <iframe v-bind:width="mapWidth" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=121.53814034674727%2C25.01024013321245%2C121.54543595526778%2C25.01676397022128&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=17/25.01350/121.54179&amp;layers=N">{{$t("About.map")}}</a></small>
      </div>
    </div>
    <div style="width: 80%; left: 0;right: 0;margin: 50px auto 10px auto;overflow: hidden;">
      <!--<span style="font-size: small;color: gray">{{$t("About.bottom1")}}</span>-->
      <span class="foot" style="margin-left: 10px">Attending us</span>
      <span class="foot" style="margin-left: 10px">Follow us</span>
      <span class="foot">About us</span>
      <hr style="clear: both"/>
      <span style="font-size: small;color: gray;">Copyright &copy; 2018 GNOME.Asia Summit</span>
      <i class="iconfont icon" style="margin-left: 10px">&#xe8d0;</i>
      <i class="iconfont icon" style="margin-left: 10px">&#xe660;</i>
      <i class="iconfont icon">&#xe8db;</i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "about",
        data(){
          return {
            center: {lng: 0, lat: 0},
            zoom: 3,
            aboutUsWidth: '100px'
          }
        },
      computed:{
          w_screen:function(){
            return document.documentElement.clientWidth
          },
          mapWidth:function () {
              return this.w_screen / 1.26 + 'px'
            }

      },

    }


</script>

<style scoped>
  body{
    font-size: 1rem;
  }
</style>
