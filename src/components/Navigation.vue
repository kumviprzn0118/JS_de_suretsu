<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="border-dotted border-r-2 bg-gray-100 w-36 min-w-40">
    <ul>
      <li class="border-dotted border-gray-400"><RouterLink to="/">ＴＯＰ</RouterLink></li>
      <li class="text-white font-bold bg-gray-400">基礎編</li>
      <li class="border-dotted border-gray-400"><RouterLink to="/kaijo">階乗</RouterLink></li>
      <li class="text-white font-bold bg-gray-400">ソートアルゴリズム</li>
      <li class="border-dotted border-b-2 border-gray-400"><RouterLink to="/bubble">バブルソート</RouterLink></li>
      <li class="border-dotted border-b-2 border-gray-400"><RouterLink to="/comingsoon">ヒープソート</RouterLink></li>
      <li class="border-dotted border-b-2 border-gray-400"><RouterLink to="/comingsoon">クイックソート</RouterLink></li>
      <li class="border-dotted border-gray-400"><RouterLink to="/comingsoon">マージソート</RouterLink></li>
      <li class="text-white font-bold bg-gray-400">探索アルゴリズム</li>
      <li class="border-dotted border-b-2 border-gray-400"><RouterLink to="/comingsoon">深さ優先探索</RouterLink></li>
      <li class="border-dotted border-b-2 border-gray-400"><RouterLink to="/comingsoon">幅優先探索</RouterLink></li>
      <li class="border-dotted border-b-2 border-gray-400"><RouterLink to="/comingsoon">線形探索</RouterLink></li>
      <li class="border-dotted border-b-2 border-gray-400"><RouterLink to="/comingsoon">二分探索</RouterLink></li>
    </ul>
  </div>
</template>
