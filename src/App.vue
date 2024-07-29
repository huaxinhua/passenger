<script setup>
import { ref, onMounted } from 'vue';
import moment from "moment"
import { ScrollNumber } from 'vue3-scroll-number';
import 'vue3-scroll-number/css' // 引入样式


let interval = null

const time = ref('')

onMounted(() => {
  clearInterval(interval)
  interval = setInterval(() => {
    const now = moment();
    const year = now.format('YYYY')
    const month = now.format('MM')
    const day = now.format('DD')
    const hour = now.format('HH')
    const min = now.format('mm')
    const second = now.format('ss')
    const week = convertWeek(moment().day())
    time.value = `${year}年${month}月${day}日${week} ${hour}:${min}:${second}`
    number1.value += Math.floor(Math.random() * 10)
    number2.value += Math.floor(Math.random() * 10)
    number3.value += Math.floor(Math.random() * 10)
    number4.value += Math.floor(Math.random() * 10)
  }, 1000)
})

const convertWeek = (week) => {
  switch (week) {
    case 0:
      return '星期日'
    case 1:
      return '星期一'
    case 2:
      return '星期二'
    case 3:
      return '星期三'
    case 4:
      return '星期四'
    case 5:
      return '星期五'
    case 6:
      return '星期六'
  }
}

const number1 = ref(0)
const number2 = ref(0)
const number3 = ref(0)
const number4 = ref(0)


</script>

<template>
  <dv-full-screen-container class="app">
    <div class="wrap-header">
      <dv-decoration5 :dur="10" :color="['#606cee', '#606cee']" />
      <h3 class="time">{{ time }}</h3>

    </div>
    <div class="content">
      <dv-border-box-11 class="item" title="今日进人数">
        <scroll-number :number="number1" :h="50" color="#606cee"></scroll-number>
      </dv-border-box-11>
      <dv-border-box-11 class="item" title="今日出人数">
        <scroll-number :number="number2" :h="50" color="#606cee"></scroll-number>
      </dv-border-box-11>
    </div>
    <div class="content">
      <dv-border-box-11 class="item" title="场内人数">
        <scroll-number :number="number3" :h="50" color="#606cee"></scroll-number>
      </dv-border-box-11>
      <dv-border-box-11 class="item" title="今日出人数">
        <scroll-number :number="number4" :h="50" color="#606cee"></scroll-number>
      </dv-border-box-11>
    </div>
  </dv-full-screen-container>
</template>

<script>


</script>

<style scoped>
.app {
  padding: 10px;
  background: url('./assets/bkd1.jpeg');
  background-size: cover;
  /* 让背景图像铺满整个元素 */
  background-repeat: no-repeat;
  /* 防止图像平铺 */
  background-attachment: fixed;
  /* 可选，可以让背景图像固定不随滚动而滚动 */
}

.wrap {
  display: flex;
}

.wrap-header {
  height: 8vh;
}

.time {
  width: 100vw;
  position: fixed;
  top: 2vh;
  display: flex;
  justify-content: center;
  width: 100vw;
  color: #606cee;
  font-size: 2rem;
}

.content {
  display: flex;
  justify-content: space-around;
}

.item {
  width: 40vw;
  height: 35vh;
  margin-top: 5vh;
}

:deep .border-box-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5vh;

}
</style>
