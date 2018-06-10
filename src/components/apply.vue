<template>
  <div>
  <img src="../../static/img/background.jpg" class="responsive-img" style="position: fixed" >
  <div class="container">
    <div class="baoming">
      <div class="row">
        <div class="col s12">
          <div    class="icon-block second applyContainer">
            <h2 class="center brown-text"><i class="material-icons co1">perm_camera_mic</i></h2>
            <h3 class="center">{{$t("Apply.cfp")}}</h3>
              
            <div><a class="waves-effect waves-light btn modal-trigger back1 center" href="https://docs.google.com/forms/d/e/1FAIpQLSfKnffsc_Ke2ZEP3fInJkAwEzXFUM24HZ7dYYluoGLmHMQjZw/viewform">
                  {{$t("Apply.summit")}}
                  </a>
                  </div>
            <!--<p class="light">-->
            <div style="margin-top:40px; " >
              <p style="font-weight: 700;font-size: x-large">————</p>
              <h5 class="center">{{$t("Apply.info")}}</h5>
              <ul class="collection">
                <li class="collection-item"><i class="large material-icons ">chevron_right</i>{{$t("Apply.deadline")}} {{$t("Apply.deadline1")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i>{{$t("Apply.notification")}} {{$t("Apply.notification1")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i>{{$t("Apply.agenda")}} {{$t("Apply.agenda1")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i>{{$t("Apply.date")}} {{$t("Apply.date1")}}</li>                
                <li class="collection-item"><i class="large material-icons ">chevron_right</i>{{$t("Apply.location")}} {{$t("Apply.location1")}}</li>                
              </ul>
              <p style="font-weight: 700;font-size: x-large">————</p>
              <h5 class="center">
                {{$t("Apply.applyInfo1")}}
              </h5>
              <ul class="collection with-header">
                <li class="collection-header"><h6>{{$t("Apply.list0")}}</h6></li>                
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.list1")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.list2")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.list3")}}</li>
                
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.list4")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.list5")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.list6")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.list7")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.list8")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.list9")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.list10")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.list11")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.list12")}}</li>
              </ul>
              <ul class="collection with-header">
                <li class="collection-header"><h6> {{$t("Apply.linux")}} </h6></li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.olist1")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.olist2")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.olist3")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.olist4")}}</li>
              </ul>
              <ul class="collection with-header">
                <li class="collection-header"><h6> {{$t("Apply.story")}} </h6></li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.olist5")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.olist6")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.olist7")}}</li>
              </ul>
              <ul class="collection with-header">
                <li class="collection-header"><h6> {{$t("Apply.emerging")}} </h6></li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.olist8")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.olist9")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.olist10")}}</li>
                <li class="collection-item"><i class="large material-icons ">chevron_right</i> {{$t("Apply.olist11")}}</li>
              </ul>
              <!--<h6>本次大會的所有演講將會被錄影並以 CC-BY-4.0 協議分享到共有領域。如果您的演講有不能錄影或不願遵照此條款，請務必於投稿表單上註明。（請亦不必有心理負擔）</h6>-->
              <p style="font-weight: 700;font-size: x-large">————</p>   
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  </div>
  </div>

</template>

<script>
let h_screen = window.screen.height;
export default {
  name: "apply",
  computed: {
    h1() {
      console.log(h_screen + "px");
      return h_screen + "px";
    }
  }
};
</script>

<style scoped>
p {
  font-size: 0.85rem;
}
body {
  font-family: "Microsoft YaHei UI";
}
.second {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.co1 {
  color: rgb(244, 208, 0);
}
.co2 {
  color: rgb(229, 131, 8);
}
.co3 {
  color: rgb(220, 87, 18);
}
.back1 {
  background-color: rgb(244, 208, 0) !important;
}
.back2 {
  background-color: rgb(229, 131, 8) !important;
}
.back3 {
  background-color: rgb(220, 87, 18) !important;
}
label {
  font-size: 1rem;
  cursor: pointer;
}
label i {
  font-size: 1rem;
  font-style: normal;
  display: inline-block;
  width: 12px;
  height: 12px;
  text-align: center;
  line-height: 12px;
  color: #fff;
  vertical-align: middle;
  margin: -2px 2px 1px 0px;
  border: #2489c5 1px solid;
}
input[type="checkbox"],
input[type="radio"] {
  display: none;
}
input[type="radio"] + i {
  border-radius: 7px;
}
input[type="checkbox"]:checked + i,
input[type="radio"]:checked + i {
  background: #2489c5;
}
input[type="checkbox"]:disabled + i,
input[type="radio"]:disabled + i {
  border-color: #ccc;
}
input[type="checkbox"]:checked:disabled + i,
input[type="radio"]:checked:disabled + i {
  background: #ccc;
}
</style>
