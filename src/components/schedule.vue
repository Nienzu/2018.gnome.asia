<template>
    <div>
        <div class="container" style="width:75%; padding-top:100px;">
            <h3 class="center-align">Slides can be found on our <a href="https://github.com/GNOME-Asia/2018.gnome.asia">GitHub reposity</a>.</h3>
            <h3 class="center-align"> Conference Day1, 8/11</h3>
            <table class="responsive-table">
                <tbody>
                    <tr v-for=" item in day1 " v-if="item[0]==='10:45~11:00' || item[0]==='12:30~13:30' || item[0]==='15:00~15:15' ">
                        <td class="center-align"> {{item[0]}}</td>
                        <td colspan="2 " class="center-align "> {{item[1]}}</td>
                    </tr>
                    <tr v-else>
                        <td class="center-align "> {{item[0]}}</td>
                        <td class="center-align "> {{item[1]}}</td>
                        <td class="center-align "> {{item[2]}}</td>
                    </tr>
                </tbody>

            </table>
            <br>
            <br>
            <br>
            <h3 class="center-align "> Conference Day2, 8/12</h3>

            <table class="responsive-table">
                <tbody>
                    <tr v-for="item in day2 " v-if="item[0]==='10:15~10:30' || item[0]==='12:00~13:00' || item[0]==='14:30~14:45' || item[0]==='8:50~9:20' ">
                        <td class="center-align "> {{item[0]}}</td>
                        <td colspan="2 " class="center-align "> {{item[1]}}</td>
                    </tr>
                    <tr v-else>
                        <td class="center-align "> {{item[0]}}</td>
                        <td class="center-align "> {{item[1]}}</td>
                        <td class="center-align "> {{item[2]}}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>
</template>
<script>
import Day1 from "../../static/data/day1";
import Day2 from "../../static/data/day2";
console.log(Day1);
export default {
    name: "schedule",
    data: function() {
        return {
            day1: Day1.day1,
            day2: Day2.day2
        };
    }
};
</script>
<style scoped>
td {
}
table {
    white-space: pre-wrap;
    word-wrap: break-word;
    border-collapse: collapse;
}
table,
th,
tr,
td {
    border: 1px solid black;
}
</style>
