<template>
    <div class="row b-chart">
        <div class="mb-4">
            <h3>Python</h3>
            <KProgress 
                :percent="Python" 
                :type="line" 
                :line-height="11" 
                :flow-second="6" 
                :color="['#3DE384', '#F4FB1E']" 
                :color-flow="true"
                :active="true"
                class="m-0"
            />
        </div>
        <div class="mb-4">
            <h3>R</h3>
            <KProgress 
                :percent="R" 
                :type="line" 
                :line-height="11"
                :flow-second="6" 
                :color="['#1EEEFB', '#251EFB']" 
                :color-flow="true"
                :active="true"
                class="m-0"
            />       
        </div>
    </div>
</template>

<script>
import KProgress from 'k-progress-v3'

export default {
    name: "Dchart",
    data() {
        return {
            Python: 0,
            R: 0
        }
    },
    components: {
        KProgress
    },
    mounted(){
        setTimeout(()=>{
            this.Python = 85
            this.R = 65
        }, 200)
    }  
}
</script>

<style scoped>
    .b-chart{
        width: 100%;
    }
</style>