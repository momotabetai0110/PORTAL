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
                <div class="icon" @click="setModal(1)"><img src="./assets/img/history.svg" alt="history">更新履歴 </div>
            </div>
        </div>
        <div class="app-content">
            <!-- <div>Preview.vue </div> -->
            <AppPreview />
            <AppList />
        </div>
        <div class="menu">
            <div class="icon" @click="setModal(2)"><img src="./assets/img/system.svg" alt="system">システム構成
            </div>
            <div class="icon"><img src="./assets/img/service.svg" alt="service">使用サービス</div>
        </div>
    </div>

    <!-- モーダル -->
    <commonModal :show="isModalType" :title=modalTitle @close="isModalType = 0">
        <!-- 更新履歴 -->
        <div v-show="isModalType == 1" class="modal-content-history">
            <table>
                <tr v-for="history in updateHistory">
                    <div class="table-data">
                        <div class="table-data-date">
                            <td>{{ history.date }}</td>
                        </div>
                        <div class="table-data-title">
                            <td>{{ history.title }}</td>
                        </div>
                    </div>
                </tr>
            </table>
        </div>

        <!-- システム構成 -->
        <div v-show="isModalType == 2" class="modal-img">
            <img src="./assets/img/systemComponent.png">
        </div>
    </commonModal>



</template>

<script setup>
import { ref } from 'vue';
import AppList from './components/AppList.vue';
import AppPreview from './components/AppPreview.vue';
import commonModal from '@/common/commonModal.vue';
import {UpdateHistory} from './UpdateHistory'
const isModalType = ref(0); //0:非表示
const modalTitle = ref('aaa');
const updateHistory = UpdateHistory;

const setModal = (type) => {
    isModalType.value = type
    if (type == 1) {
        modalTitle.value = '更新履歴'
    } else if (type == 2) {
        modalTitle.value = 'システム構成'
    } else if (type == 3) {
        modalTitle.value = '使用サービス'
    }
}
</script>
<style lang="scss">
@use './assets/scss/portal.scss';
</style>