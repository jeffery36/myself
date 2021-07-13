<template>
    <div id="Header" class="Header">
        <Navbar/>
        <Topcontent/>
    </div>
</template>

<script>
    import Navbar from './header/navbar.vue'
    import Topcontent from './header/topcontent.vue' 

    export default{
        name: "Header",
        components: {
            Navbar,
            Topcontent
        }
    }
</script>

<style>
    .Header{
        background-image: url('../assets/header5.jpg');
        background-size: cover;
        color: #fff;
        overflow: hidden;
        height: 100vh;
        width: 100%;
    }
</style>