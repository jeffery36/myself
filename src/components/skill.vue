<template>
    <div id="Skill">
        <div id="Skill_title" class="d-flex justify-content-center">
            <h1 class="mb-4 mb-md-2">Skills</h1>
        </div>
        <div id="Skill_chart" class="container py-md-5"> 
            <div id="font-end" class="row justify-content-evenly" v-if="FontEnd">
                <div id="font-end-text" class="col-12 col-lg-5 px-5 pb-4 py-lg-0 d-flex align-self-center flex-column">
                    <h2>Font-End</h2>
                    <p>
                        雖然學校沒有教前端的部分，但是因為自己對網頁這方面有興趣，想給予使用者帶來良好的體驗，
                        於是自學了前端開發。
                    </p>
                    <p>
                        目前學習了 JavaScript、jQuery、Bootstrap 5、Vue.js、VueCLI ......等工具，
                        此網頁也是使用 Vue 框架搭配 Bootstrap 5 所開發。
                    </p>
                </div>
                <div id="font-end-chart" class="col-12 col-lg-5 p-4 pt-0 p-lg-0 mb-4 mb-md-0">
                    <Fchart/>
                </div>
            </div>

            <div id="data-analysis" class="row justify-content-evenly" v-if="DataAnalysis">
                <div id="data-analysis-text" class="col-12 col-lg-5 px-5 pb-4 py-lg-0 d-flex align-self-center flex-column">
                    <h2>Data Analysis</h2>
                    <p>
                        因為就讀於巨量資料管理學系，資料的結構、分析......等都有一定程度，主要的工具為 Python，也能夠用 Python 來進行
                        網路爬蟲，在於 R 的方面也有一些基礎。
                    </p>
                    <p>
                        爬蟲方面主要使用過 requests、selenium 來進行爬取，但也用過 scrapy。
                    </p>
                </div>
                <div id="data-analysis-chart" class="col-10 col-lg-5 p-3 pt-0 pe-0 p-lg-0 d-flex flex-column align-self-center">
                    <Dchart/>
                </div>
            </div>

            <div id="other" class="row justify-content-evenly" v-if="Other">
                <div id="other-text" class="col-12 col-lg-5 px-5 pb-4 py-lg-0 d-flex align-self-center flex-column">
                    <h2>Other</h2>
                    <p>
                        熟悉 Git/GitHub 基本的指令操作，例如 status/push/pull/checkout，我認為不管是與他人合作或者獨自開發，
                        版本控管都是重要的一環。
                    </p>
                </div>
                <div id="other-chart" class="col-12 col-lg-5 p-4 pt-0 p-lg-0 d-flex align-self-center justify-content-center">
                    <Ochart/>
                </div>
            </div>
        </div>
        <div id="Skill_btn" class="pb-0 pb-lg-5 pt-lg-5">
            <SkillBtn :FE="FontEnd" :DA="DataAnalysis" :OT="Other" @updateF="upF" @updateD="upD" @updateO="upO" />
        </div>
    </div>
</template>

<script>
import Fchart from './skill/Fchart.vue'
import Dchart from './skill/Dchart.vue'
import Ochart from './skill/Ochart.vue'
import SkillBtn from './skill/Skill_btn.vue'

export default {
    name: "Skill",
    components: {
        Fchart,
        Dchart,
        Ochart,
        SkillBtn
    },
    data() {
        return {
            FontEnd: true,
            DataAnalysis: false,
            Other: false
        }
    },
    mounted() {
		window.addEventListener("scroll", this.windowS)
	},
    methods: {
        upF(val) {
            this.FontEnd = val
        },
        upD(val) {
            this.DataAnalysis = val
        },
        upO(val) {
            this.Other = val
        },
        windowS() {
            var windowT = window.scrollY + window.innerHeight
            var objectT = document.getElementById("Skill_chart");
            if (objectT.offsetTop < windowT){
                document.getElementById("Skill_chart").classList.add("fade-in-bottom") 
            }
           
        }
    },
    unmounted() {
			window.removeEventListener("scroll", this.windowS)
	}
    
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');

    #Skill{
        padding: 96px 0px;
        font-family: 'Yellowtail', cursive;
    }

    p{
        line-height: 1.7;
        font-family: monospace;
        font-size: 18px;
    }

    h1{
        font-size: 50px;
    }

    h2{
        font-family: 'Yellowtail', cursive;
    }

    .fade-in-bottom {
        -webkit-animation: fade-in-bottom 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
                animation: fade-in-bottom 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    @-webkit-keyframes fade-in-bottom {
        0% {
            -webkit-transform: translateY(50px);
                    transform: translateY(50px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes fade-in-bottom {
        0% {
            -webkit-transform: translateY(50px);
                    transform: translateY(50px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            opacity: 1;
        }
    }
</style>