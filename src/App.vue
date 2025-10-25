<script setup lang="ts">
import { useScrollSpy } from './composables/useScrollSpy';
import Navigation from './components/Navigation.vue';
import Hero from './components/Hero.vue';
import Feature from './components/Feature.vue';
import Content from './components/Content.vue';
import Contact from './components/Contact.vue';

import 'animate.css'

// Define section IDs for scroll spy
const sectionIds = ['hero', 'projects', 'skills', 'contact'];
const { currentSection } = useScrollSpy(sectionIds);
</script>

<template>
  <Navigation :current-section="currentSection" />

  <section id="hero">
    <Hero></Hero>
  </section>
  
  <section id="skills">
    <Feature></Feature>
  </section>
  
  <section id="projects">
    <Content></Content>
  </section>
  
  <section id="contact">
    <Contact></Contact>
  </section>

  <!-- Footer -->
  <footer class="py-8 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4 text-center">
      <p class="text-gray-600 dark:text-gray-400">
        © {{ new Date().getFullYear() }} My Portfolio. All rights reserved.
      </p>
    </div>
  </footer>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
