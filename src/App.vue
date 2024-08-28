<template>
  <div class="flex items-center">
    <a
      href="https://vitejs.dev"
      target="_blank"
      class="hover:drop-shadow-[0_0_2em_#646cffaa]"
    >
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
      class="hover:drop-shadow-[0_0_2em_#42b883aa]"
    >
      <img src="./assets/vue.svg" class="logo" alt="Vue logo" />
    </a>
  </div>

  <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
import HelloWorld from '@components/HelloWorld.vue'
</script>

<style scoped>
.logo {
  @apply h-24 p-6;
  will-change: filter;
}
</style>
