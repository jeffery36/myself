<template>
    <div id="About" class="py-5 my-lg-5">
        <div class="container my-0 py-1 py-lg-5">
            <div class="row justify-content-between">
                <div id="About-headshot" class="col-12 col-lg-5 d-flex justify-content-center my-5 py-lg-5">
                    <img src="../assets/headshot.jpg" class="">
                </div>
                <div id="About-me" class="col-12 col-lg-5 d-flex justify-content-center flex-column mb-5 mt-0 me-lg-5 my-lg-5 p-3 p-sm-0">
                    <p id="About-me-title" class="p-3 p-lg-0 mb-0 mb-sm-3"><b>關於我</b></p>
                    <p id="About-me-text" class="aboutMe p-3 pt-0 p-lg-0">
                        現年 21 歲<br>
                        就讀於東吳大學巨量資料管理學系<br>
                        為人樂觀，對人和善，樂於傾聽他人的想法<br>
                        勇於接受挑戰，遇到新的事物就盡力去學<br>
                        除了資料分析外也對網頁有興趣，於是自學了前端開發<br>
                        喜歡寫程式，成功解決問題會很有成就感<br>
                        <br>
                        曾經前往花蓮偏鄉位小學生舉辦夏令營，從一開始規劃活動、開會、分配工作、都促進度、檢討回顧都有詳細參與，
                        負責帶領活動進行，在與人團隊合作方面有良好經驗。<br>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    mounted() {
		window.addEventListener("scroll", this.windowS)
	},
    methods: {
        windowS() {
            var windowT = window.scrollY + window.innerHeight
            var objectT = document.getElementById("About-headshot");
            if (objectT.offsetTop < windowT){
                document.getElementById("About-headshot").classList.add("swing-in-bottom-fwd") 
                document.getElementById("About-me").classList.add("swing-in-bottom-fwd") 
            }
           
        }
    },
    unmounted() {
			window.removeEventListener("scroll", this.windowS)
	}
}
</script>

<style scoped>
    img{
        width: 300px;
        height: 300px;
        border-radius: 100%;
        object-fit: cover;
    }
    b{
        font-size: 34px;
    }
    .aboutMe{
        font-size: 18px;
    }

    @media screen and (max-width: 768px){
        img{
            width: 190px;
            height: 190px;
        }
    }

    .swing-in-bottom-fwd {
        -webkit-animation: swing-in-bottom-fwd 0.9s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
                animation: swing-in-bottom-fwd 0.9s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
    }

    @-webkit-keyframes swing-in-bottom-fwd {
        0% {
            -webkit-transform: rotateX(100deg);
                    transform: rotateX(100deg);
            -webkit-transform-origin: bottom;
                    transform-origin: bottom;
            opacity: 0;
        }
        100% {
            -webkit-transform: rotateX(0);
                    transform: rotateX(0);
            -webkit-transform-origin: bottom;
                    transform-origin: bottom;
            opacity: 1;
        }
    }
    @keyframes swing-in-bottom-fwd {
        0% {
            -webkit-transform: rotateX(100deg);
                    transform: rotateX(100deg);
            -webkit-transform-origin: bottom;
                    transform-origin: bottom;
            opacity: 0;
        }
        100% {
            -webkit-transform: rotateX(0);
                    transform: rotateX(0);
            -webkit-transform-origin: bottom;
                    transform-origin: bottom;
            opacity: 1;
        }
    }
</style>