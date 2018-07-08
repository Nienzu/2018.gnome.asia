<template>
    <div>
        <div style="padding-top:100px;">
            <div class="container">
                <div class="icon-block second applyContainer">
                    <h2 class="center blue-text">
                        <i class="large material-icons ">person_pin</i>
                    </h2>
                    <h3 class="center">{{$t("Sponsor.title")}}</h3>
                    <!--<p class="light">-->
                    <div style="margin-top:40px; ">
                        <p style="font-weight: 700;font-size: x-large">————————————————————————————</p>
                        <a href="https://www.privateinternetaccess.com/">
                            <h3>Private Internet Access</h3>
                        </a>
                        <img class="responsive-img" src="../../static/img/PIA-sponsor-logo.jpg">
                        <p style="font-weight: 700;font-size: x-large">————————————————————————————</p>
                        <a href="https://www.seafile.com/home/">
                            <h3>Seafile</h3>
                        </a>
                        <img class="responsive-img" src="../../static/img/seafile-logo.png">
                        <p style="font-weight: 700;font-size: x-large">————————————————————————————</p>

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


