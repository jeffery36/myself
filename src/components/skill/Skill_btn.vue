<template>
    <div class="container">
        <div class="row justify-content-evenly">
            <div class="skill-btn col-7 col-md-3 mt-2 mt-md-0">
                <button id="showF" type="button" @click="showFont" class="snip1562">Font-End</button>
            </div>
            <div class="skill-btn col-7 col-md-3 mt-3 mt-md-0">
                <button id="showD" type="button" @click="showData" class="snip1562">Data-Analysis</button>
            </div>
            <div class="skill-btn col-7 col-md-3 mt-3 mt-md-0">
                <button id="showO" type="button" @click="showOther" class="snip1562">Other</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"SkillBtn",
    props: ['FE', 'DA', 'OT'],
    data() {
        return {
            f: this.FE,
            d: this.DA,
            o: this.OT
        }
    },
    watch: {
        f:{
            deep: true,
            handler(val){
                this.$emit("updateF", val)
            }
        },
        d:{
            deep: true,
            handler(val){
                this.$emit("updateD", val)
            }
        },
        o:{
            deep: true,
            handler(val){
                this.$emit("updateO", val)
            }
        }
    },
    methods: {
        showFont() {
            if (this.f != true){
                this.f = true
                this.d = false
                this.o = false
            }
        },
        showData() {
            if (this.d != true){
                this.f = false
                this.d = true
                this.o = false
            }
        },
        showOther() {
            if (this.o != true){
                this.f = false
                this.d = false
                this.o = true
            }
            console.log("Sdd")
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@1&display=swap');

    .skill-btn{
        text-align: center;
    }

    .snip1562 {
        width: 100%;
        background-color: #fff;
        color: rgba(0, 65, 75, 1);
        cursor: pointer;
        display: inline-block;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1em;
        font-size: 18px;
        line-height: 1em;
        outline: none;
        padding: 12px 40px 10px;
        position: relative;
        font-weight: 700;
        border: 1px solid rgba(0, 65, 75, 1);
    }

    .snip1562:before,
    .snip1562:after {
        border-color: transparent;
        -webkit-transition: all 0.25s;
        transition: all 0.25s;
        border-style: solid;
        border-width: 0;
        content: "";
        height: 24px;
        position: absolute;
        width: 24px;
    }

    .snip1562:before {
        border-color: rgba(0, 65, 75, 1);
        border-left-width: 2px;
        border-top-width: 2px;
        left: -5px;
        top: -5px;
    }

    .snip1562:after {
        border-bottom-width: 2px;
        border-color: rgba(0, 65, 75, 1);
        border-right-width: 2px;
        bottom: -5px;
        right: -5px;
    }

    .snip1562:hover,
    .snip1562.hover {
        background-color: rgba(0, 65, 75, 1);
        color: #fff;
    }

    .snip1562:hover:before,
    .snip1562.hover:before,
    .snip1562:hover:after,
    .snip1562.hover:after {
        height: 100%;
        width: 100%;
    }
</style>