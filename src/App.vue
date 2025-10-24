<script setup lang="ts">
import Hero from './components/Hero.vue'
import Feature from './components/Feature.vue';
import CTA from './components/CTA.vue';
import Content from './components/Content.vue';
import Team from './components/Team.vue';
import Logo from './components/Logo.vue';
import Contact from './components/Contact.vue';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import 'animate.css'
</script>

<template>

  <Hero></Hero>
  <Feature></Feature>
  <CTA></CTA>
  <Content></Content>
  <Team></Team>
  <Logo></Logo>
  <Contact></Contact>

  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <Card class="w-[350px] p-6">
      <CardHeader>
        <CardTitle>shadcn-vue + Tailwind + Vite 🚀</CardTitle>
      </CardHeader>
      <CardContent class="space-y-4">
        <p class="text-sm text-muted-foreground">
          Everything is working perfectly.
        </p>
        <Button class="animate__animated animate__bounce">Click Me</Button>
      </CardContent>
    </Card>
  </div>

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
