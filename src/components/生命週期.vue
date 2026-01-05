<script setup lang="ts" name="生命週期">
import { onMounted, onUnmounted, onUpdated, onBeforeMount, onBeforeUpdate, onBeforeUnmount } from 'vue'

// 生命週期鉤子

/*
  vue2的生命週期鉤子 vs vue3的生命週期鉤子 ,呼叫方式不同
  vue2的鉤子是直接在組件中定義，vue3的鉤子是使用 onMounted, onUnmounted, onUpdated, onBeforeMount, onBeforeUpdate, onBeforeUnmount 等函數來呼叫
*/


/*
    vue2的生命週期鉤子
    beforeCreate: 組件創建前
    beforeCreate(){
        console.log('beforeCreate')
    },
    created: 組件創建後
    beforeMount: 組件掛載前
    mounted: 組件掛載後
    beforeUpdate: 組件更新前
    updated: 組件更新後
    beforeDestroy: 組件銷毀前
    destroyed: 組件銷毀後
*/

/*
    vue3的生命週期鉤子
    onBeforeMount: 組件掛載前
    onBeforeMount(()=>{
        console.log('onBeforeMount')
    })
    onMounted: 組件掛載後
    onBeforeUpdate: 組件更新前
    onUpdated: 組件更新後
    onBeforeUnmount: 組件卸載前
    onUnmounted: 組件卸載後
*/



</script>

<template>
  <div>
    <h2>生命週期</h2>

  </div>
</template>
<style scoped></style>
