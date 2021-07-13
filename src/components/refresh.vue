<template>
    <div id="refresh" :class="{'fade-out': isLoad}" class="d-flex justify-content-center align-items-center">
        <div id="refresh-item" class="vibrate-3 d-flex justify-content-center">
            Loading......
        </div>
    </div>
</template>

<script>
export default {
    name: "Refresh",
    data() {
        return {
            isLoad: false
        }
    },
    mounted() {
        window.addEventListener("load", this.WindowLoad)
    },
    methods: {
        WindowLoad() {
            this.isLoad = true 
            // setTimeout(function(){
            //     document.getElementById("refresh").remove()
            // }, 1300)
        }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

    #refresh {
        z-index: 100;
        position: absolute;
        background-color: #fff;
        height: 100vh;
        width: 100%;
    }

    .fade-out {
        -webkit-animation: fade-out 0.8s 0.5s ease-out both;
        animation: fade-out 0.8s 0.5s ease-out both;
    }

    @-webkit-keyframes fade-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes fade-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
     
    #refresh-item {
        font-family: 'Permanent Marker', cursive;;
        font-size: 50px;
        width: 240px;
        color: black;

    }

    .vibrate-3 {
        -webkit-animation: vibrate-3 0.6s linear infinite both;
                animation: vibrate-3 0.6s linear infinite both;
    } 

    @-webkit-keyframes vibrate-3 {
        0% {
            -webkit-transform: translate(0);
                    transform: translate(0);
        }
        10% {
            -webkit-transform: translate(-2px, -2px);
                    transform: translate(-2px, -2px);
        }
        20% {
            -webkit-transform: translate(2px, -2px);
                    transform: translate(2px, -2px);
        }
        30% {
            -webkit-transform: translate(-2px, 2px);
                    transform: translate(-2px, 2px);
        }
        40% {
            -webkit-transform: translate(2px, 2px);
                    transform: translate(2px, 2px);
        }
        50% {
            -webkit-transform: translate(-2px, -2px);
                    transform: translate(-2px, -2px);
        }
        60% {
            -webkit-transform: translate(2px, -2px);
                    transform: translate(2px, -2px);
        }
        70% {
            -webkit-transform: translate(-2px, 2px);
                    transform: translate(-2px, 2px);
        }
        80% {
            -webkit-transform: translate(-2px, -2px);
                    transform: translate(-2px, -2px);
        }
        90% {
            -webkit-transform: translate(2px, -2px);
                    transform: translate(2px, -2px);
        }
        100% {
            -webkit-transform: translate(0);
                    transform: translate(0);
        }
    }

    @keyframes vibrate-3 {
        0% {
            -webkit-transform: translate(0);
                    transform: translate(0);
        }
        10% {
            -webkit-transform: translate(-2px, -2px);
                    transform: translate(-2px, -2px);
        }
        20% {
            -webkit-transform: translate(2px, -2px);
                    transform: translate(2px, -2px);
        }
        30% {
            -webkit-transform: translate(-2px, 2px);
                    transform: translate(-2px, 2px);
        }
        40% {
            -webkit-transform: translate(2px, 2px);
                    transform: translate(2px, 2px);
        }
        50% {
            -webkit-transform: translate(-2px, -2px);
                    transform: translate(-2px, -2px);
        }
        60% {
            -webkit-transform: translate(2px, -2px);
                    transform: translate(2px, -2px);
        }
        70% {
            -webkit-transform: translate(-2px, 2px);
                    transform: translate(-2px, 2px);
        }
        80% {
            -webkit-transform: translate(-2px, -2px);
                    transform: translate(-2px, -2px);
        }
        90% {
            -webkit-transform: translate(2px, -2px);
                    transform: translate(2px, -2px);
        }
        100% {
            -webkit-transform: translate(0);
                    transform: translate(0);
        }
    }

    @media screen and (max-width: 767px){
        #refresh-item {
            font-size: 35px;
            width: 150px;
        }
    }
</style>

