<template>
  <div>
    <h2>PropsDemo</h2>
    a 屬性 props 傳遞的值:{{ a }}
    <br>
    b 屬性 params 傳遞的值:{{ b }}
    <br>
    c 屬性 query 傳遞的值:{{ c }}
    <ul>
      <li v-for="person in props2.list" :key="person.id">
        {{ person.name }} - {{ person.age }} - {{ person.gender }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="PropsDemo">
  /* 定義 props 的類型 ,如果只接收 a 和 personList 兩個屬性,
     危險操作：如果傳遞的屬性不合法，
     會報錯,處理方式是使用 withDefaults 來設定預設值
     example: withDefaults(defineProps<{ a: string, list?: Persons }>(), { a: '預設值', list: () => [] })
     withDefaults 的參數是 props 的類型和預設值，預設值的類型必須是函數，函數的返回值是預設值
  */
  import type { Persons } from '@/types'
  // import { useRoute } from 'vue-router'
  // const route = useRoute()
  // const {params, query} = route
  const props2 = withDefaults(defineProps<{ a?: string, list?: Persons, b?: any, c?: any }>(),
  { a: '預設值', b: '', c: '', list: () => [
    {
      id: '父組件未傳遞list屬性，使用預設值',
      name: '父組件未傳遞list屬性，使用預設值',
      age: 0,
      gender: '預設 父組件未傳遞list屬性，使用預設值'
    }
  ] })
</script>

<style scoped></style>
