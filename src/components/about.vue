<template>
  <div>
    <div style="width: 80%;margin: 0 auto;">
      <div>
        <div style="display: inline-block;text-align: center;margin-top: 135px">
          <h4 style="background-color: black;color: white;padding: 20px 20px;">{{$t("About.news")}}</h4>
        </div>
        <p style="font-weight: 700;font-size: x-large">————</p>
        <p style="font-weight: 600;font-size: medium;color:gray">June 15, 2018</p>
        <a style="font-weight: 600;font-size: large;" href="/registration">Registration open date is 6/20</a>
        <p>All participants can regist GNOME.Asia Summit 2018 through KKTIX during 2018/06/20 20:00(+0800) ~ 2018/08/07 00:00(+0800). <br>
          <a href="/registration">More...</a>
        </p>

        <p style="font-weight: 600;font-size: medium;color:gray">June 8, 2018</p>
        <a style="font-weight: 600;font-size: large;" href="/venue">Venue information is online now!</a>
        <p>Venue information could be found
          <a href="/venue">here</a>. If you found there is any wrong information or want to provide some information, please open issue or send pull request on
          <a href="https://github.com/GNOME-Asia/2018.gnome.asia">this repo</a>.</p>

        <p style="font-weight: 600;font-size: medium;color:gray">May 18, 2018</p>
        <a style="font-weight: 600;font-size: large;" href="https://www.gnome.org/news/2018/04/gnome-asia-summit-2018-call-for-papers-is-now-open/">GNOME.Asia Summit 2018 Call for Papers deadline is 5/25</a>
        <p>Call for paper will be closed in 7 days.A standard session will be scheduled for 45 mins (35 mins talk + 10 mins Q&A). The session could be a technical talk, panel discussion, or BOF. If you need more time or additional resources, feel free to get in touch with the organizing team.</p>

        <p style="font-weight: 600;font-size: medium;color:gray">April 27, 2018</p>
        <a style="font-weight: 600;font-size: large;" href="https://www.gnome.org/news/2018/04/gnome-asia-summit-2018-call-for-papers-is-now-open/">GNOME.Asia Summit 2018 Call for Papers is now open</a>
        <p>GNOME.Asia Summit 2018 invites proposals for presentations at the conference. GNOME.Asia Summit is the featured annual GNOME conference in Asia. It focuses primarily on the GNOME desktop, but also covers applications and the platform development tools. The summit brings together the GNOME community in Asia to provide a forum for users, developers, foundation leaders, governments
          <a href="https://www.gnome.org/news/2018/04/gnome-asia-summit-2018-call-for-papers-is-now-open/">[…]</a>
        </p>
      </div>
      <div>
        <div style="display: inline-block;text-align: center;margin-top: 135px">
          <!--<p style="background-color: black;color: white;width: 260px;height: 65px;font-size: x-large" >GNOME.Asia<span style="color:#66ccff;">18</span></p>-->
          <h4 style="background-color: black;color: white;padding: 20px 20px;">GNOME.Asia
            <span style="color: #66ccff"> 2018</span>
          </h4>
        </div>
        <br>

        <p style="font-weight: 700;font-size: x-large">————</p>
        <p style="font-weight: 600;font-size: large">GNOME.Asia</p>
        <p>{{$t("About.aboutp1")}}
        </p>
        <div style="align: center;margin-top: 20px;">
          <img class="responsive-img" src="../../static/img/logo.png">
        </div>
      </div>
      <div>
        <p style="font-weight: 700;font-size: large;display: inline;margin-right: 20px">{{$t("About.time")}}：
          <span style="font-weight: normal">{{$t("About.time1")}}</span>
        </p>
        <br>
        <p style="font-weight: 700;font-size: large;display: inline">{{$t("About.place")}}:
          <span style="font-weight: normal">{{$t("About.place1")}}</span>
        </p>
      </div>
      <div style="height:500px; z-index:0;" id="osm-map">

      </div>
      <div style="margin-top:40px; ">
        <p style="font-weight: 700;font-size: x-large">————————————————————————————</p>
        <div style="display: inline-block;text-align: center;">
          <h5 style="background-color: black;color: white;padding: 20px 20px;">Co-Host</h5>
        </div>
        <br>
        <a href="https://cobinhood.com/">
          <img class="responsive-img" src="../../static/img/co-host-cobinhood.png">
        </a>
        <p style="font-weight: 700;font-size: x-large">————————————————————————————</p>
        <div style="display: inline-block;text-align: center;">
          <h5 style="background-color: black;color: white;padding: 20px 20px;">Platinum Sponsor</h5>
        </div>
        <br>
        <a href="https://www.privateinternetaccess.com/">
          <img class="responsive-img" src="../../static/img/PIA-sponsor-logo.jpg">
        </a>
        <p style="font-weight: 700;font-size: x-large">————————————————————————————</p>
        <div style="display: inline-block;text-align: center;">
          <h5 style="background-color: black;color: white;padding: 20px 20px;">Bronze Sponsor</h5>
        </div>
        <br>
        <a href="https://www.seafile.com/home/">
          <img class="responsive-img" src="../../static/img/seafile-logo.png">
        </a>
        <p style="font-weight: 700;font-size: x-large">————————————————————————————</p>

      </div>
    </div>
    <div style="width: 80%; left: 0;right: 0;margin: 50px auto 10px auto;overflow: hidden;">
      <!--<span style="font-size: small;color: gray">{{$t("About.bottom1")}}</span>-->
      <span class="foot" style="margin-left: 10px">Attending us</span>
      <span class="foot" style="margin-left: 10px">Follow us</span>
      <span class="foot">About us</span>
      <hr style="clear: both" />
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
    data() {
        return {
            center: { lng: 0, lat: 0 },
            zoom: 3,
            aboutUsWidth: "100px"
        };
    },
    computed: {
        w_screen: function() {
            return document.documentElement.clientWidth;
        },
        mapWidth: function() {
            return this.w_screen / 1.26 + "px";
        }
    },
    mounted() {
        var map = L.map("osm-map").setView([25.0138, 121.5413], 10);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([25.0138, 121.5413])
            .addTo(map)
            .bindPopup(this.$t("About.place1"))
            .openPopup();
    }
};
</script>

<style scoped>
body {
    font-size: 1rem;
}
img {
    width: 25%;
    height: auto;
}
</style>
