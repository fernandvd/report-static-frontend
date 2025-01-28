<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
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

.wrapper-login {
  flex-direction: row;
  margin-left: 10px;
}

.link-login {
  text-decoration: none;
  padding: 0.3rem 0.5rem;
  margin: 0.2rem auto;
  border-radius: 1rem;
}
.link-login:hover {
  border: 1.5px solid #000;
}

</style>
