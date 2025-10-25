<script setup lang="ts">
import { Button } from '@/components/ui/button';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder.vue';
import { Github, Linkedin, Mail } from 'lucide-vue-next';

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

// Define props
const props = withDefaults(defineProps<HeroContent>(), {
  title: "Hi, I'm Anas Azhar",
  subtitle: "Full Stack Developer & Data Enthusiast",
  description: "I am a fresh graduate of Informatics Engineering from Institut Teknologi Sepuluh Nopember, focusing on Website Development and Data Science. My technical expertise includes Laravel, React, Vue and TanStack.",
  ctaText: "Get In Touch",
  ctaLink: "#contact",
});
</script>

<template>
  <section
    class="relative min-h-screen flex items-center justify-center py-20 hero-section"
    v-animate-on-scroll
  >
    <!-- animated gradient background -->
    <div class="absolute inset-0 hero-gradient" aria-hidden="true"></div>

    <!-- decorative blobs -->
    <div class="absolute -top-24 -left-24 blob blob-1" aria-hidden="true"></div>
    <div class="absolute top-8 -right-28 blob blob-2" aria-hidden="true"></div>
    <div class="absolute -bottom-24 left-1/2 transform -translate-x-1/2 blob blob-3" aria-hidden="true"></div>

    <div class="absolute inset-0 bg-grid dark:bg-grid-dark opacity-6" aria-hidden="true"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Text Content -->
        <div class="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate__animated animate__fadeInUp">
            {{ props.title }}
          </h1>
          
          <p class="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            {{ props.subtitle }}
          </p>
          
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 animate__animated animate__fadeInUp animate__delay-2s">
            {{ props.description }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate__animated animate__fadeInUp animate__delay-3s">
            <Button 
              as="a" 
              :href="props.ctaLink"
              class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {{ props.ctaText }}
            </Button>
            
            <Button 
              as="a" 
              href="https://github.com/azharanas17" 
              target="_blank"
              variant="outline"
              class="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              <Github class="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>
          
          <div class="mt-12 flex justify-center md:justify-start space-x-6 animate__animated animate__fadeInUp animate__delay-4s">
            <a href="https://www.linkedin.com/in/anas-azhar/" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin class="w-8 h-8" />
            </a>
            <a href="mailto:azharaan173@gmail.com" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail class="w-8 h-8" />
            </a>
          </div>
        </div>
        
        <!-- Visual Element -->
        <div class="md:w-1/2 flex justify-center animate__animated animate__fadeInRight animate__delay-1s">
          <div class="relative">
            <div class="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
              <ImageWithPlaceholder 
                src="/profile-image.png" 
                alt="Profile"
                class="w-full h-full object-cover"
              />
            </div>
            
            <!-- Floating elements for visual interest -->
            <div class="absolute -top-4 -right-4 bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center shadow-lg animate-bounce">
              <div class="text-xl">!</div>
            </div>
            <div class="absolute -bottom-4 -left-4 bg-green-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg animate-pulse">
              <div class="text-lg">✓</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grid {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.bg-grid-dark {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}

/* Hero animated gradient and decorative blobs */
.hero-section {
  /* ensure the section clips overflowing blobs on small screens */
  overflow: hidden;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(120deg, rgba(14,165,233,0.12) 0%, rgba(124,58,237,0.12) 40%, rgba(236,72,153,0.12) 100%);
  background-size: 300% 300%;
  animation: gradientShift 10s ease infinite;
  mix-blend-mode: normal;
}

.blob {
  width: 18rem;
  height: 18rem;
  border-radius: 9999px;
  filter: blur(48px);
  opacity: 0.85;
  transform-origin: center;
}
.blob-1 { background: radial-gradient(circle at 30% 30%, rgba(99,102,241,0.9), transparent 30%), radial-gradient(circle at 70% 70%, rgba(79,70,229,0.6), transparent 30%); animation: float 12s ease-in-out infinite; }
.blob-2 { width: 22rem; height: 22rem; background: radial-gradient(circle at 30% 30%, rgba(236,72,153,0.9), transparent 30%), radial-gradient(circle at 70% 70%, rgba(249,115,22,0.6), transparent 30%); animation: float 14s ease-in-out infinite; animation-delay: 2s; }
.blob-3 { width: 16rem; height: 16rem; background: radial-gradient(circle at 30% 30%, rgba(56,189,248,0.85), transparent 30%), radial-gradient(circle at 70% 70%, rgba(168,85,247,0.5), transparent 30%); animation: float 16s ease-in-out infinite; animation-delay: 4s; }

@keyframes float {
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-24px) scale(1.05); }
  100% { transform: translateY(0) scale(1); }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hero-gradient,
  .blob { animation: none !important; }
}
</style>