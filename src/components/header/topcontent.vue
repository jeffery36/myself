<template>
    <div id="Topcontent" class="container">
        <div class="row">
            <div class="col offset-1 mt-md-5">
                <h1 class="px-0 mt-5">范盛傑 <span>Jeffery</span></h1>
                <div class="self">
                    熱衷於學習新知
                    <p>Passionate about learning new knowledge</p>
                    喜歡團隊合作
                    <p>Team player</p>
                    善於溝通
                    <p>Have good communication skills</p>
                    樂於協助他人
                    <p>Enthusiastic to help others</p>
                    嚮往氣氛良好的團隊
                    <p>Yearning for a team with a good atmosphere</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Topcontent",
}
</script>

<style scoped>
    div{
       font-family: monospace;
    }
    h1{
        padding: 60px;
        font-weight: 500;
        font-size: 50px;
    }
    .self{
        font-size: 18px;
        font-style: italic;
    }
    .self p{
        font-size: 14px;
        margin-bottom: 10px;
    }

    #Topcontent{
        text-shadow: black 0.1em 0.1em 0.2em
    }
</style>>