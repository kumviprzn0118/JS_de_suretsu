<script setup lang="ts">
import ThePageSection from '../components/ThePageSection.vue';
import {ref} from 'vue'
const val = ref([10,1,11,9,7,8,2,6,7,15])
const num = ref<number>(10)
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
  //前処理
  num.value = Number(String(num.value).slice(0, 3))
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
<div class="w-screen mx-1 md:mx-4 min-w-0 md:min-w-[600px]">
  <ThePageSection msg="バブルソート"/>
  <div>
    説明・・・
  </div>
  <pre class="bg-gray-100 p-2 rounded shadow-sm text-xs md:text-base"><code class="language-javascript">
  function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  </code></pre>
  <div class="border-solid border border-black mt-3 p-3">
  1~<input type="number" min="10" max="999" oninput="javascript: this.value = this.value.slice(0, 3);" class="border border-solid border-black" v-model.number="num">
  <div class="block mt-1">
    <button type="button" id="sort-btn" class="bg-gray-100 border-solid border border-gray-400 px-1" @click="randomNumber">ランダム生成</button>
    <button type="button" id="sort-btn" class="bg-gray-100 border-solid border border-gray-400 ml-1 px-1" @click="bubbleSort">バブルソート</button>
  </div>
  <textarea class="border-solid border border-black block min-h-24 w-full mt-1">{{val.join()}}</textarea>
  <div>欠点：データ量が多いとメモリ不足でクラッシュしてしまう（O(n^2)）<br>
    非効率: ソート済みの要素も何度も比較してしまうため、無駄な処理が多いです。<br>
    10と999で比較してみるとわかりやすい。<br>
  </div>
  </div>
</div>
</template>

<style>
</style>
