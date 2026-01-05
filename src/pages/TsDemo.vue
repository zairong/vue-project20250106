<template>
  <div>
    <h2>TsDemo</h2>
  </div>
</template>

<script setup lang="ts" name="TsDemo">
  import type { Person, Persons } from '@/types'
  const person: Person = {
    id: '1', // 必須填寫
    name: 'John', // 必須填寫
    age: 20, // 必須填寫
    // gender: 'male' // 可選屬性 可以不填寫
  }
  const personList: Person[] = [
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
  const personList2: Persons = [
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


  console.log(person )
  console.log(personList)
  console.log(personList2)

</script>

<style scoped></style>
