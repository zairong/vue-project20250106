<template>
  <main>
    <Vue2 />
    <Vue3 ref="vue3Ref" />
    <button @click="showVue3Ref">showVue3Ref</button>
    <PropsDemo a="哈哈" :list="personList" />
    <PropsDemo a="哈哈" />
  </main>
</template>

<script setup lang="ts">
import Vue2 from './pages/Vue2.vue'
import Vue3 from './pages/Vue3.vue'
import PropsDemo from './pages/PropsDemo.vue'
import { ref, reactive } from 'vue'
import type { Persons } from './types'
let vue3Ref = ref()
// 方法 顯示 vue3Ref 的值
const showVue3Ref = () => {
  console.log(vue3Ref.value)
}
const personList = reactive<Persons>(
  [
    {
      id: '1',
      name: 'John',
      age: 20,
      gender: 'male'
    },
    {
      id: '2',
      name: 'Jane',
      age: 21,
      gender: 'female'
    }
  ]
)

</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
