<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
import Navbar from './components/Navbar.vue';

onMounted(() => {
})
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.wrapper {
  width: 100%;
}



</style>
