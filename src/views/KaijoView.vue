<script setup lang="ts">
import ThePageSection from '../components/ThePageSection.vue'
import {ref,watch} from 'vue'
const num = ref<bigint>(5n)
const answer = ref<bigint>(0n)
const kaijo = (n: bigint): bigint =>{
  if(n===0n){
    return 1n
  }else{
    return n*kaijo(n-1n)
  }
}
const kaijo_calc = ()=>{
  answer.value = kaijo(num.value)
}
const inputNum = ref<bigint>(5n);
watch(inputNum, (newValue) => {
  num.value = BigInt(newValue);
});
</script>
<template>
<div class="ml-4 md:min-w-[600px]">
  <ThePageSection msg="階乗"/>
  <pre class="bg-gray-100 p-2 rounded shadow-sm"><code class="language-javascript">
  function kaijo(n){
    if(n===0){
      return 1
    }else{
      return n*kaijo(n-1)
    }
  }
  </code></pre>
  <div class="border-solid border border-black mt-3 p-3">
  <input type="number" min="1" oninput="javascript: this.value = this.value.slice(0, 3);" class="border border-solid border-black" v-model.bigint="inputNum">
  <div class="block mt-1">
    の階乗を<button type="button" id="sort-btn" class="bg-gray-100 border-solid border border-gray-400 px-1" @click="kaijo_calc">計算</button>
  </div>
  <input type="text" class="border-solid border border-black block mt-1" v-model.text="answer">
  </div>
</div>
</template>

<style>
</style>
