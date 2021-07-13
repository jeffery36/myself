<template>
    <div id="Footer">
        <div id="Footer-contact" class="d-flex justify-content-center p-2">
            <div class="ss p-3 m-3">
                <div class="ContactMe p-2">Contact Me</div>
                <div class="p-2">
                    <i class="bi bi-facebook"></i>
                    <span>范盛傑</span> 
                </div>
                <div class="p-2">
                    <i class="bi bi-telephone-inbound"></i>
                    <span>0972892516</span>
                </div>
                <div class="p-2">
                    <i class="bi bi-envelope"></i>
                    <span>jeffreyfan168@gmail.com</span>
                </div>
            </div>
        </div>
        <div id="Footer-text">© 2021 by JefferyFan.</div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    #Footer {
        background-color: rgba(0, 65, 75, 1);
        color: #fff;
        position: relative;
    }
    
    .ContactMe {
        font-size: 20px;
    }

    span {
        padding: 0px 15px;
    }

    .ss{
        border-left: #fff solid 1px;
    }

    #Footer-contact{
        position: relative;
    }

    #Footer-text{
        position: absolute;
        bottom: 0.1%;
        left: 50%;
        transform: translate(-50%, 0%);
    }
</style>