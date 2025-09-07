<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <Transition name="fade">
        <div v-if="show" class="base-modal">
            <div class="base-modal__inner">
                <div class="base-modal__header">
                    <div>{{ title }}</div>
                </div>

                <div class="base-modal__body">
                    <slot />
                </div>

                <div class="base-modal__footer">
                    <button class="btn btn-primary" @click="$emit('close')">OK</button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
defineProps({
    show: Number,
    title: String
})
defineEmits(['close'])
</script>

<style scoped lang="scss">
@use './assets/scss/commonModal.scss'
</style>