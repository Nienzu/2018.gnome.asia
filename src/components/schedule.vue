<template>
    <div>
        <div class="container" style="width:75%; padding-top:100px;">
            <h3 class="center-align"> Conference Day1, 8/11</h3>
            <table class="bordered striped">

                <tbody>
                    <tr v-for="item in day1">
                        <td class="center-align"> {{item[0]}}</td>
                        <td class="center-align"> {{item[1]}}</td>
                        <td class="center-align"> {{item[2]}}</td>
                    </tr>
                </tbody>

            </table>
            <br>
            <br>
            <br>
            <h3 class="center-align"> Conference Day2, 8/12</h3>

            <table class="bordered striped ">
                <tbody>
                    <tr v-for="item in day2">
                        <td class="center-align"> {{item[0]}}</td>
                        <td class="center-align"> {{item[1]}}</td>
                        <td class="center-align"> {{item[2]}}</td>
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
}
</style>
