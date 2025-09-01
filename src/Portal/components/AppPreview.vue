<template>
    <!-- <div class="app-preview">
        <img src="../assets/img/sample_preview.jpg" alt="app-preview">
    </div> -->
    <div class="app-preview-non-content">
        <div class="app-preview-non-content-image">
            <img src="../assets/img/image.svg" alt="app-preview"></img>

            <div class="app-preview-non-content-message">
            アプリを選んでください
        </div>
        </div>

    </div>
</template>


<script setup>

</script>
<style lang="scss">
.app-preview {
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
}
.app-preview-non-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.app-preview-non-content-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    img {
        width: 30%;
        height: 30%;
    }
}
.app-preview-non-content-message {
    font-size: 2rem;
    font-weight: 200;
    color: #666666;
}
</style>