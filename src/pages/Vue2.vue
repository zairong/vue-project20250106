<template>
  <div>
      <h2>Vue2.0 options API</h2>
      <h1>{{ msg }}</h1>
      <h2>{{ count }}</h2>
    <button @click="changeMsg('Welcome to Your Vue2.0 App by data')">Change Msg</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<script  lang="ts">
//  vue2 寫法
 export default {
  name: 'TheWelcome',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0,
    }
  },
  methods: {
    changeMsg(newMsg: string) {
      this.msg = newMsg
    },
    increment() {
      this.count++
    }
  }
 }
</script>

<style scoped></style>
