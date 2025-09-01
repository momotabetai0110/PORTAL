<template>
    <div class="portal">
        <div class="header">
            <div class="header-title">
                <div class="title">こんにちは
                    <div>PORTFOLIO</div>
                </div>
            </div>
            <div class="header-menu">
                <div class="icon"><img src="./assets/img/github.svg" alt="github">My Git</div>
                <div class="icon"><img src="./assets/img/history.svg" alt="history">更新履歴 </div>
            </div>
        </div>
        <div class="app-content">
            <!-- <div>Preview.vue </div> -->
            <AppPreview />
            <AppList />
        </div>
        <div class="menu">
            <div class="icon"><img src="./assets/img/system.svg" alt="system">システム構成</div>
            <div class="icon"><img src="./assets/img/service.svg" alt="service">使用サービス</div>
        </div>

    </div>
</template>

<script setup>
import AppList from './components/AppList.vue';
import AppPreview from './components/AppPreview.vue';
</script>
<style lang="scss">
@use './assets/scss/portal.scss';
</style>