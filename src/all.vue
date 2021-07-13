<template>
    <div id="content">
        <Refresh/>
        <div id="main" v-show="isshow" :class="{'scale-in-ver-center': isshow}">
            <Header/>
            <About/>
            <hr>
            <Skill/>
            <Footer/>
        </div>
    </div>
</template>

<script>
import Header from './components/header.vue'
import About from './components/about.vue'
import Refresh from './components/refresh.vue'
import Footer from './components/footer.vue'
import Skill from './components/skill.vue'

export default {
    name: 'All',
    components: {
        Header,
        About,
        Refresh,
        Footer,
        Skill
    },
    data() {
        return {
            isshow: false
        }
    },
    mounted() {
        window.addEventListener("load", this.loadshow)
    },
    methods: {
        loadshow() {
            let vm = this
            setTimeout(function(){
                vm.isshow = true
            }, 1200)   
            setTimeout(function(){
                document.getElementById("main").classList.remove("scale-in-ver-center")
            }, 2000) 
        }
    }
}
</script>

<style> 
    hr {
        width: 90%;
        margin: auto;
    }

    .fade-in {
        -webkit-animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    @-webkit-keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    #content{
        font-family: monospace;
    }

    .scale-in-ver-center {
        -webkit-animation: scale-in-ver-center 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: scale-in-ver-center 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    @-webkit-keyframes scale-in-ver-center {
        0% {
            -webkit-transform: scaleY(0);
                    transform: scaleY(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: scaleY(1);
                    transform: scaleY(1);
            opacity: 1;
        }
    }
    @keyframes scale-in-ver-center {
        0% {
            -webkit-transform: scaleY(0);
                    transform: scaleY(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: scaleY(1);
                    transform: scaleY(1);
            opacity: 1;
        }
    }

</style>