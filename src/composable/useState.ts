import { ref, reactive, watch, watchEffect } from 'vue'

// 使用 reactive 寫法 只能包物件
export default function useState() {
  const state = reactive({
    title: 'Welcome to Your Vue3.0 App ',
    age: 0,
    price: {
      price: 1000000
    },
    color: {
      color: 'black'
    }
  })


  //方法

  const changeTitle = (newTitle: string) => {
    state.title = newTitle
  }
  const incrementAge = () => {
    state.age += 1
  }


  // 監聽 state.color.color 和 state.price.price 的變化
  watch(() => [state.color.color, state.price.price], (newVal, oldVal) => {
    console.log('state.color.color 的變化', newVal, oldVal)
  }, { deep: true })
  /* 監聽 state.color.color 和 state.price.price 的變化 使用 watchEffect
     watchEffect 會在每次 DOM 更新後執行，適合用於監聽 DOM 的變化，不需要指定監聽的值，會自動監聽所有變量
  */
  watchEffect(() => {
    console.log('state.color.color 和 state.price.price 的變化', state.color.color, state.price.price)
  })

  return {
    state,
    changeTitle,
    incrementAge,
  }

}
