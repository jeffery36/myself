<template>
    <div class="circle">
        <div class="circular">
            <div class="numb">{{percent}}%</div>
            <CircleProgress 
                :is-gradient="true" 
                :gradient="{
                    startColor: '#a445b2',
                    stopColor: '#fa4429'
                }"
                :percent="percent"
                :size="200"
            />
        </div>
        <div class="text mt-3">Git/GitHub</div>
    </div>
</template>

<script>
import CircleProgress from "vue3-circle-progress"

export default {
    name: "Ochart",
    components: {
        CircleProgress
    },
    data() {
        return {
            percent: 0
        }
    },
    mounted() {
        setInterval(()=>{
            if (this.percent == 70){
                clearInterval()
            } else{
                this.percent += 7
            }
        }, 80)
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap');

    .circular{
        position: relative;
    }

    .numb{
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 3;
        transform: translate(-50%, -50%);
        font-size: 30px;
        font-weight: 600;
        background: -webkit-linear-gradient(left, #a445b2, #fa4429);
        -webkit-background-clip: text;
                background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Otomanopee One', sans-serif;
    }

    .text{
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        font-family: 'Titillium Web', sans-serif;
    }
    
    .circular:hover .text{
        transform: translate(-50%, -50%) scale(5);
    }
</style>