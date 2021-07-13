<template>
    <nav id="navbar" :style="style" class="navbar navbar-expand-lg navbar-dark bg-md-transparent fixed-top py-3 py-md-4">
        <div class="container">
            <a class="navbar-brand" href="http://192.168.0.113:8080/">Myself</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item d-flex justify-content-row px-3 px-md-4" >
                    <i class="bi bi-house-door-fill  d-flex align-self-center"></i>
                    <a id="home" class="nav-link p-2 active" aria-current="page" href="#Header">Home</a>
                </li>
                <li class="nav-item d-flex justify-content-row px-3 px-md-4">
                    <i class="bi bi-file-earmark-person d-flex align-self-center"></i>
                    <a  class="nav-link p-2 active" href="#About">About</a>
                </li>
                <li class="nav-item d-flex justify-content-row px-3 px-md-4">
                    <i class="bi bi-tools d-flex align-self-center"></i>
                    <a class="nav-link p-2 active" href="#Skill">Skill</a>
                </li>
                <li class="nav-item d-flex justify-content-row px-3 px-md-4">
                    <i class="bi bi-person-lines-fill d-flex align-self-center"></i>
                    <a class="nav-link p-2 active" href="#Footer">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Nav",
        data() {
			return {
				style: {},
				opacity: 0,
			}
		},
		mounted() {
			window.addEventListener("scroll", this.windowScroll);
            window.addEventListener("resize", this.change)
		},
		methods: {
			windowScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                this.opacity = Math.abs(Math.round(scrollTop)) / 150
                if (document.body.clientWidth > 992){
                    this.style = {background: `rgba(0, 65, 75, ${this.opacity})`}
                }
			},
            change() {
                if (document.body.clientWidth < 992){
                    document.getElementById("navbar").style.background = "rgba(0, 65, 75, 1)"
                } else{
                    document.getElementById("navbar").style.background = `rgba(0, 65, 75, ${this.opacity})`
                }
            }
		},
		unmounted() {
			window.removeEventListener("scroll", this.windowScroll);
		}
	}
    
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Arvo:wght@700&display=swap');

    nav{
        padding: 24px 30px;
        font-size: 18px;
        color: #fff;
        width: 100%;
        font-family: 'Arvo', serif;
    }
    nav li{
        list-style: none;
        cursor: pointer;
    }
    .fixed-top{
        z-index: 99;
    }

    .navbar-brand{
        font-size: 25px;
    }

    @media screen and (max-width: 992px){
        #navbar{
            background-color: rgba(0, 65, 75, 1);
        }
    }
</style>
