<script setup lang="ts">
import ThePageSection from '../components/ThePageSection.vue';
import {ref} from 'vue'
let data={
  a:ref<number>(6),
  b:ref<number>(4),
  koyaku_result:ref<number>(),
  kobai_result:ref<number>()
}
  //最大公約数を求める。（a>b）
  const euclidKoyaku = (x:number,y:number):number => {
    if(x%y === 0){
      return y
    }else{
      return euclidKoyaku(x,x%y)
    }
  }
  //最小公倍数を求める
  const euclidKobai = (x:number,y:number):number => {
    return x*y/euclidKoyaku(x,y)
  }
  //計算結果を表示。最大公約数。
  const dispKoyaku = ()=>{
    data.koyaku_result.value = euclidKoyaku(data.a.value,data.b.value)
  }
  //計算結果を表示。最小公倍数。
  const dispKobai = ()=>{
    data.kobai_result.value = euclidKobai(data.a.value,data.b.value)
  }
</script>
<template>
<div class="w-screen mx-1 md:mx-4 min-w-0 md:min-w-[600px]">
  <ThePageSection msg="ユークリッドの互除法"/>
  <div>
    説明・・・最大公約数や、最小公倍数を求めるときに便利
  </div>
  <pre class="bg-gray-100 p-2 rounded shadow-sm text-xs md:text-base"><code class="language-javascript">
  //最大公約数を求める。（a>b）
  function euclid_koyaku(a,b) {
    if(a%b === 0){
      return b
    }else{
      return euclid_koyaku(b,a%b)
    }
  }
  //最小公倍数を求める
  function euclid_kobai(a,b) {
    return a*b/euclid_koyaku(a,b)
  }
  </code></pre>
  <div class="border-solid border border-black mt-3 p-3">
  <div>a:<input type="text" class="border border-solid border-black" v-model.text="data.a.value"></div>
  <div>b:<input type="text" class="border border-solid border-black" v-model.text="data.b.value"></div>
  <div class="block mt-1">
    <div>
      <button type="button" id="sort-btn" class="bg-gray-100 border-solid border border-gray-400 px-1" @click="dispKoyaku">最大公約数</button>
      <input type="text" class="border border-solid border-black" v-model.text="data.koyaku_result.value">
    </div>
    <div>
      <button type="button" id="sort-btn" class="bg-gray-100 border-solid border border-gray-400 px-1" @click="dispKobai">最小公倍数</button>
      <input type="text" class="border border-solid border-black" v-model.text="data.kobai_result.value">
    </div>
  </div>
  </div>
</div>
</template>

<style>
</style>
