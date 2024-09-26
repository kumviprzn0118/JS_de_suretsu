<script setup lang="ts">
import ThePageSection from '../components/ThePageSection.vue';
import {ref} from 'vue'
const val = ref([10,1,11,9,7,8,2,6,7,15])
const num = ref(10)
const bubbleSort = ()=>{
  const len = val.value.length;
  let arr = val.value;
  for (let i = 0; i < len; i++) {
  for (let j = 0; j < len - i - 1; j++) {
   if (arr[j] > arr[j + 1]) {
    const temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
   }
  }
  val.value = arr
}}
const randomNumber = ()=>{
  // 1からnumまでの数字の配列を作成
  const array = Array(num.value).fill(0).map((_, index) => index + 1);
  console.log(array)
  console.log(num.value)
  // 配列をシャッフルする
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  val.value = array;
}
</script>
<template>
<div class="ml-4">
  <ThePageSection msg="バブルソート"/>
  <p>
  function bubbleSort(arr) {<br>
  &nbsp;const len = arr.length;<br>
  &nbsp;for (let i = 0; i < len; i++) {<br>
  &nbsp;&nbsp;for (let j = 0; j < len - i - 1; j++) {<br>
  &nbsp;&nbsp;&nbsp;if (arr[j] > arr[j + 1]) {<br>
  &nbsp;&nbsp;&nbsp;&nbsp;const temp = arr[j];<br>
  &nbsp;&nbsp;&nbsp;&nbsp;arr[j] = arr[j + 1];<br>
  &nbsp;&nbsp;&nbsp;&nbsp;arr[j + 1] = temp;<br>
  &nbsp;&nbsp;&nbsp;}<br>
  &nbsp;&nbsp;}<br>
  &nbsp;}<br>
  &nbsp;return arr;<br>
  }<br>
  </p>

  <textarea class="border-solid border-2">{{val.join()}}</textarea>
  1からの範囲n：<input type="number" class="border-2 border-solid" v-model.number="num">
  <button type="button" id="sort-btn" class="bg-gray-100 border-solid border-2 border-black" @click="randomNumber">ランダム生成</button>
  <button type="button" id="sort-btn" class="bg-gray-100 border-solid border-2 border-black" @click="bubbleSort">バブルソート</button>
  <div>欠点：データ量が多いとメモリ不足でクラッシュしてしまう（O(n^2)）<br>
        10と1000くらいで比較がわかりやすい
  </div>
</div>

</template>

<style>
</style>
