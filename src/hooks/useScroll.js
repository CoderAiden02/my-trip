import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'

export default function useScroll() {
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const scrollListenerHander = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    if (Math.ceil(clientHeight.value + scrollTop.value) >= scrollHeight.value) {
      isReachBottom.value = true
    }
  }, 300)

  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHander)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHander)
  })
  return { isReachBottom, scrollHeight, scrollTop, clientHeight }
}
