<template>
  <div>
    <h2>Vue3.0 composition API</h2>
    <!-- 使用 ref 寫法 -->
    <h1>{{ msg.msg }}</h1>
    <h2>{{ msg.count }}</h2>
    <button @click="changeMsg('Welcome to Your Vue3.js App  by ref')">Change Msg</button>
    <button @click="increment">Increment</button>
    <hr>
    <!-- 使用 reactive 寫法 -->
    <h1>{{ state.title }}</h1>
    <h2>{{ state.age }}</h2>
    <button @click="changeTitle('Welcome to Your Vue3.js App  by reactive')">Change title</button>
    <button @click="incrementAge">Increment</button>
    <hr>
     <h3>使用 pinia 寫法 (carStore.car)</h3>
    <h1>{{ carStore.car }}</h1> <!-- 使用 state.car -->

    <h3>使用 carStore.$state.car</h3>
    <h1>{{ carStore.$state.car }}</h1> <!-- 使用 state.car -->

    <h3>使用 storeToRefs 解構賦值 carStore.car</h3>
    <h1>{{ car }}</h1> <!-- 使用 carStore.car -->

    <h3>使用 carStore.getCar</h3>
    <h1>{{ carStore.getCar }}</h1> <!-- 使用 getters.getCar -->

    <h3>使用 storeToRefs 解構賦值 getCar</h3>
    <h1>{{ getCar }}</h1> <!-- 使用 getCar 已經解構賦值 -->

    <button @click="changeStoreCar">Change Car</button>
  </div>
</template>

<script setup lang="ts" name="Vue3">
import useMessage from '@/composable/useMessage'
import useState from '@/composable/useState'
import useCarStore from '@/store/car'
import { storeToRefs } from 'pinia'
const { msg, changeMsg, increment } = useMessage()
const { state, changeTitle, incrementAge } = useState()
const carStore = useCarStore()
// 解構 Pinia store 時，state/getters 需用 storeToRefs 才能保持響應式
const { getCar ,car} = storeToRefs(carStore)

// 方法
const changeStoreCar = () => {
  carStore.changeCar('賓士')
}
// 暴露 state, msg, car 和方法給父元件使用
defineExpose({
  msg,
  state,
  getCar,
  changeMsg,
  changeTitle,
  changeStoreCar,
  increment,
  incrementAge,
})

</script>

<style scoped></style>
