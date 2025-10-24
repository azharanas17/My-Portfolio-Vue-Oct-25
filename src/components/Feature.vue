<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-vue-next';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

// Define props with default features
const props = withDefaults(defineProps<{
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
}>(), {
  title: "My Skills & Expertise",
  subtitle: "Technologies and skills I specialize in",
  features: () => [
    {
      icon: "Code",
      title: "Frontend Development",
      description: "Creating responsive, interactive UIs with Vue.js, React, TypeScript, and modern CSS frameworks."
    },
    {
      icon: "Globe",
      title: "Web Architecture",
      description: "Building scalable web applications with clean architecture and best practices."
    },
    {
      icon: "Database",
      title: "Backend Development",
      description: "API development and database design with Node.js, Python, and various databases."
    },
    {
      icon: "Smartphone",
      title: "Responsive Design",
      description: "Mobile-first designs that work beautifully across all device sizes."
    },
    {
      icon: "Palette", 
      title: "UI/UX Design",
      description: "Creating intuitive, user-friendly interfaces with focus on usability."
    },
    {
      icon: "Zap",
      title: "Performance",
      description: "Optimizing applications for speed and efficiency with best practices."
    }
  ]
});

// Mapping of icon names to components
const iconComponents = {
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Zap
};
</script>

<template>
  <section 
    class="py-20 bg-white dark:bg-gray-900"
    id="skills"
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
      
      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in props.features" 
          :key="index"
          v-animate-on-scroll="'animate__animated animate__fadeInUp'"
        >
          <Card class="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
            <CardContent class="p-6">
              <div class="flex flex-col items-center text-center">
                <!-- Icon -->
                <div class="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                  <component
                    :is="iconComponents[feature.icon as keyof typeof iconComponents]"
                    class="w-8 h-8 text-blue-600 dark:text-blue-400"
                  />
                </div>
                
                <!-- Title -->
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {{ feature.title }}
                </h3>
                
                <!-- Description -->
                <p class="text-gray-600 dark:text-gray-300">
                  {{ feature.description }}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>