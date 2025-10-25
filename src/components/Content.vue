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
      title: 'My ITS Mentoring Agama Islam Application',
      description: 'A full-featured mentoring application with user management and scheduling features.',
      thumbnail: '/project1.png',
      liveUrl: 'mentoring.its.ac.id',
      sourceUrl: 'https://github.com/azharanas17/mentoring-its',
      tags: ['Laravel', 'SQLServer', 'Tailwind']
    },
    {
      id: 'project2',
      title: 'My ITS K3L assesment Application',
      description: 'A productivity application for handling tasks and assessments efficiently.',
      thumbnail: '/project2.png',
      liveUrl: 'halok3.its.ac.id',
      sourceUrl: 'https://github.com/azharanas17/k3l-its',
      tags: ['Laravel', 'Vue', 'SQLServer', 'Tailwind']
    },
    {
      id: 'project3',
      title: 'Scholarship Data Management',
      description: 'A comprehensive application for managing scholarship data and applications.',
      thumbnail: '/project3.png',
      liveUrl: 'beasiswa-pwnujatim.or.id',
      sourceUrl: 'https://github.com/Tekno-Tren/pwnu-beasiswa-ppsdm',
      tags: ['Laravel', 'Filament', 'MySQL']
    },
    {
      id: 'project4',
      title: 'UniTrack App',
      description: 'A mobile application designed as a personal academic assistant for students.',
      thumbnail: '/project4.png',
      liveUrl: '#',
      sourceUrl: 'https://github.com/fairuuz16/unitrack',
      tags: ['Kotlin', 'Jetpack Compose', 'Firebase']
    },
    {
      id: 'project5',
      title: 'Image Captioning using BLIP method',
      description: 'An AI model that generates captions for images using deep learning techniques.',
      thumbnail: '/project5.png',
      liveUrl: '#',
      sourceUrl: 'https://www.kaggle.com/code/azharanas17/imagecaptioning-ta-blip-6c',
      tags: ['PyTorch', 'BLIP', 'Python']
    },
    {
      id: 'project6',
      title: 'Industrial Monitoring (Ongoing)',
      description: 'A comprehensive application for monitoring industrial processes and equipment.',
      thumbnail: '/project6.png',
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/Tekno-Tren/industrial-monitoring',
      tags: ['TanStack', 'React', 'PostgreSQL']
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