<script setup lang="ts">
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder.vue';
import { ExternalLink, Github } from 'lucide-vue-next';

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  liveUrl?: string;
  sourceUrl?: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

defineProps<ProjectCardProps>();

// Emits for click events
const emit = defineEmits<{
  liveClick: [projectId: string];
  sourceClick: [projectId: string];
}>();

const handleLiveClick = (id: string) => {
  emit('liveClick', id);
};

const handleSourceClick = (id: string) => {
  emit('sourceClick', id);
};
</script>

<template>
  <Card class="h-full flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800">
    <!-- Project thumbnail -->
    <div class="relative overflow-hidden">
      <ImageWithPlaceholder 
        :src="project.thumbnail" 
        :alt="project.title"
        class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
      <!-- Tags overlay -->
      <div class="absolute top-3 right-3 flex flex-wrap gap-1 justify-end">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="px-2 py-1 text-xs bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    
    <!-- Card content -->
    <CardContent class="p-6 flex-grow">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
      <p class="text-gray-600 dark:text-gray-300">{{ project.description }}</p>
    </CardContent>
    
    <!-- Card footer with buttons -->
    <CardFooter class="p-6 pt-0 flex justify-between">
      <div class="flex gap-3">
        <Button 
          v-if="project.liveUrl" 
          as="a"
          :href="project.liveUrl"
          target="_blank"
          variant="secondary"
          size="sm"
          @click="handleLiveClick(project.id)"
          class="flex items-center gap-2"
        >
          <ExternalLink class="w-4 h-4" />
          Live Demo
        </Button>
        
        <Button 
          v-if="project.sourceUrl" 
          as="a"
          :href="project.sourceUrl"
          target="_blank"
          variant="outline"
          size="sm"
          @click="handleSourceClick(project.id)"
          class="flex items-center gap-2"
        >
          <Github class="w-4 h-4" />
          Source
        </Button>
      </div>
    </CardFooter>
  </Card>
</template>