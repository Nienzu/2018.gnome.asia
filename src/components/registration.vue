<template>
  <div>
    <img src="../../static/img/background.jpg" class="responsive-img" style="position: fixed">
    <div class="container">
      <div class="baoming">
        <div class="row">
          <div class="col s12">
            <div class="icon-block second applyContainer">
              <h2 class="center blue-text">
                <i class="material-icons co1">today</i>
              </h2>
              <h4 class="center">{{$t("Regist.title")}}</h4>
              <!--<p class="light">-->
              <div style="margin-top:40px; ">
                <p style="font-weight: 700;font-size: x-large">————</p>
                <h5>Information</h5>
                <ul class="collection">
                  <li class="collection-item">
                    <i class="large material-icons ">chevron_right</i>{{$t("Regist.duration")}} : {{$t("Regist.duration1")}}</li>
                  <li class="collection-item">
                    <i class="large material-icons ">chevron_right</i>{{$t("Regist.link")}} :
                    <a href="https://coscup2018.kktix.cc/events/coscup2018regist">{{$t("Regist.link1")}}</a>
                  </li>
                  <li class="collection-item">
                    <i class="large material-icons ">chevron_right</i>{{$t("Apply.agenda")}} {{$t("Apply.agenda1")}}</li>
                  <li class="collection-item">
                    <i class="large material-icons ">chevron_right</i>{{$t("Apply.date")}} {{$t("Apply.date1")}}</li>
                  <li class="collection-item">
                    <i class="large material-icons ">chevron_right</i>{{$t("Apply.location")}} {{$t("Apply.location1")}}</li>
                </ul>
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
export default {
    name: "registration"
};
</script>
<style scoped>
.alert {
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
}

.alert-info {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
}
.alert-info hr {
    border-top-color: #abdde5;
}
.alert-info .alert-link {
    color: #062c33;
}
</style>


