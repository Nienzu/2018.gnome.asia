<template>
    <div>

        <div style="padding-top:50px;">
            <h2 class="center blue-text">
                <i class="large material-icons ">person_pin</i>
            </h2>
            <h3 class="center">{{$t("Staff.title")}}</h3>
            <div class="container">
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">總招</span>
                                <p>Max、聞其詳</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">資訊</span>
                                <p>吳念祖、蒋浩辰、邵铭绮、安雨洁、贾峥、刘煜民、程超</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">設計</span>
                                <p>SiskaIskandar、Haris、raniaamina</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">社群聯繫</span>
                                <p>Zerngjia、Eric、廖昭雄、BinLi</p>

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
    name: "staff"
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


