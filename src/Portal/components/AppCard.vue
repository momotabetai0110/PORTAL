<template>
    <div class="app-card">
        <div class="app-card-thumbnail">
            <img src="../assets/img/sample_thumb.jpg" alt="サンプル">
        </div>
        <div class="app-card-title">
            <div>{{ app.title }}</div>
            <div> {{ app.description }}</div>
        </div>
        <div class ="app-card-body">
            <div class="app-card-tag">
                <!-- <div class="app-card-tag-blue">php</div> -->
                <!-- <div class="app-card-tag-yellow">java</div> -->
                <div class="app-card-tag-red">Laravel</div>
                <div class="app-card-tag-green">Vue.js</div>
            </div>
            <div class="app-card-device">
                <div v-if="app.deviceType == 1">
                    <img src="../assets/img/pc.svg" alt="device">
                </div>
                <div v-if="app.deviceType == 2">
                    <img src="../assets/img/tablet.svg" alt="device">
                </div>
                <div v-if="app.deviceType == 3">
                    <img src="../assets/img/pc.svg" alt="device">
                    <img src="../assets/img/tablet.svg" alt="device">
                </div>
            </div>
        </div>
        <a class="app-card-play" :href=app.url target="_blank">
            <img src="../assets/img/play.svg" alt="arrow">
        </a>
    </div>
</template>

<script setup>
defineProps({
    app: Object
})
</script>

<style lang="scss">
@use '../assets/scss/app-card.scss';
</style>