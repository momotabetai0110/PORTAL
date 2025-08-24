<template>
    <div class="app-list-container">
        <div class="app-list-header">
            <div class="app-list-header-title">My Apps</div>
            <div class="app-list-header-icons">
                <div><img src="../assets/img/filter.svg" alt="filter"/></div>
                <div><img src="../assets/img/sort.svg" alt="sort"/></div>
            </div>
        </div>
        <div class="app-list-content">
            <AppCard />
            <AppCard />
            <AppCard />
            <AppCard />
        </div>
    </div>
</template>

<script setup>
import AppCard from './AppCard.vue';
</script>

<style lang="scss">
@use '../assets/scss/app-list.scss';
</style>