import { ref, reactive, watch, watchEffect } from 'vue'
// 使用 ref 寫法 可包基本型別和物件
export default function useMessage() {
  const msg = ref({
    msg: 'Welcome to Your Vue3.0 App ',
    count: 0,

  })



  //方法
  const changeMsg = (newMsg: string) => {
    msg.value.msg = newMsg
  }
  const increment = () => {
    msg.value.count += 1
  }

  // 監聽 msg 的變化
  watch(msg, (newVal, oldVal) => {
    console.log('msg 的變化', newVal, oldVal)
  })


  return {
    msg,
    changeMsg,
    increment,
  }
}
