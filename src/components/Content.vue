<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  liveUrl?: string;
  sourceUrl?: string;
  tags: string[];
}

// Define props with default projects
const props = withDefaults(defineProps<{
  title?: string;
  subtitle?: string;
  projects?: Project[];
}>(), {
  title: "My Projects",
  subtitle: "Some of the projects I've worked on",
  projects: () => [
    {
      id: 'project1',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with payment processing and inventory management.',
      thumbnail: 'https://placehold.co/600x400/3b82f6/white?text=E-Commerce+Platform',
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/username/project',
      tags: ['Vue.js', 'Node.js', 'MongoDB']
    },
    {
      id: 'project2',
      title: 'Task Management App',
      description: 'A productivity application for managing tasks and projects with team collaboration features.',
      thumbnail: 'https://placehold.co/600x400/10b981/white?text=Task+Manager',
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/username/project',
      tags: ['React', 'Firebase', 'Tailwind']
    },
    {
      id: 'project3',
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts and historical data.',
      thumbnail: 'https://placehold.co/600x400/8b5cf6/white?text=Weather+Dashboard',
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/username/project',
      tags: ['JavaScript', 'API', 'CSS']
    },
    {
      id: 'project4',
      title: 'Fitness Tracker',
      description: 'Mobile-first application for tracking workouts and nutrition with progress analytics.',
      thumbnail: 'https://placehold.co/600x400/ef4444/white?text=Fitness+Tracker',
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/username/project',
      tags: ['React Native', 'Redux', 'Express']
    },
    {
      id: 'project5',
      title: 'Blog Platform',
      description: 'Content management system for bloggers with rich text editing and SEO optimization.',
      thumbnail: 'https://placehold.co/600x400/f97316/white?text=Blog+Platform',
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/username/project',
      tags: ['Vue.js', 'Nuxt', 'Strapi']
    },
    {
      id: 'project6',
      title: 'Finance Dashboard',
      description: 'Personal finance tracking application with expense categorization and reporting.',
      thumbnail: 'https://placehold.co/600x400/06b6d4/white?text=Finance+Dashboard',
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/username/project',
      tags: ['Angular', 'D3.js', 'Spring Boot']
    }
  ]
});

// Handle project card clicks
const onLiveClick = (projectId: string) => {
  console.log(`Live demo clicked for project: ${projectId}`);
};

const onSourceClick = (projectId: string) => {
  console.log(`Source code clicked for project: ${projectId}`);
};
</script>

<template>
  <section 
    class="py-20 bg-gray-50 dark:bg-gray-900/50"
    id="projects"
    v-animate-on-scroll
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate__animated animate__fadeInDown">
          {{ props.title }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate__animated animate__fadeInDown animate__delay-1s">
          {{ props.subtitle }}
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in props.projects" 
          :key="project.id" 
          :project="project"
          @live-click="onLiveClick"
          @source-click="onSourceClick"
          v-animate-on-scroll="'animate__animated animate__fadeInUp'"
        />
      </div>
    </div>
  </section>
</template>