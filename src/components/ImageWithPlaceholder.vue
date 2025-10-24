<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  placeholder?: string; // Base64 placeholder image
  class?: string;
}

const props = defineProps<ImageProps>();
const imageLoaded = ref(false);
const showPlaceholder = ref(true);

const handleImageLoad = () => {
  imageLoaded.value = true;
  setTimeout(() => {
    showPlaceholder.value = false;
  }, 300); // Delay to allow fade-out transition
};
</script>

<template>
  <div :class="props.class" class="relative overflow-hidden">
    <!-- Placeholder/Loading indicator -->
    <div 
      v-if="showPlaceholder"
      class="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center"
    >
      <div class="text-gray-500 dark:text-gray-400">Loading...</div>
    </div>
    
    <!-- Actual image -->
    <img
      :src="props.src"
      :alt="props.alt"
      :width="props.width"
      :height="props.height"
      @load="handleImageLoad"
      :class="{ 
        'opacity-0': showPlaceholder, 
        'opacity-100': imageLoaded, 
        'transition-opacity duration-300 ease-in-out': true 
      }"
      class="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
</template>