 // 數據變量
 import { ref } from 'vue'
 import { defineStore } from 'pinia'
 const useCarStore = defineStore('car', {
  state: () => ({
    car: '帕拉梅拉'
  }),
  // 使用 getters 可以對 state 進行加工處理
  getters: {
    getCar: (state) => state.car + '是首選車款'
  },
  actions: {
    changeCar(newCar: string) {
      this.car = newCar
    }
  }

 })

 export default useCarStore
