<script setup>
import Navbar from './components/Navbar.vue';
import Home from "./components/Home.vue";
import Proyectos from './components/Proyectos.vue';
import Habilidades from './components/Habilidades.vue';
import Contacto from './components/Contacto.vue';
import Footer from './components/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue';
</script>

<template>
  <div class="app">
    <Navbar />
    <Home />
    <Proyectos />
    <Habilidades />
    <Contacto />
    <Footer />
    <ScrollToTop />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
}
</style>
