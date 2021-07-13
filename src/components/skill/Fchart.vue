<template>
    <!-- chart -->
    <div class="bar-chart">
        <ul class="bars">
            
            <li><div class="bar" data-percentage="80"></div><span>HTML/CSS</span></li>
            <li><div class="bar" data-percentage="68"></div><span>JavaScript</span></li>
            <li><div class="bar" data-percentage="70"></div><span>jQuery</span></li>
            <li><div class="bar" data-percentage="75"></div><span>Bootstrap 5</span></li>
            <li><div class="bar" data-percentage="68"></div><span>Vue</span></li>
        </ul>
    </div>
</template>

<script>
import $ from "jquery"

export default {
    name: "Fchart",
    mounted() {
        $(function(){
            $(".bar").each(function(){
                $(this).css("height", "0%")
                
                var percentage = $(this).data("percentage")
                $(this).animate({
                    "height": percentage + "%"
                }, 1300)
            })
        })
    } 
}
</script>

<style scoped>
@import "../../assets/FontEnd.css";
</style>