<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu, X } from 'lucide-vue-next';

// Define navigation links
interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Props for active section
const props = defineProps<{
  currentSection?: string;
}>();

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Close mobile menu on window resize
const handleResize = () => {
  if (window.innerWidth >= 768) {
    isMobileMenuOpen.value = false;
  }
};

// Set up event listener
onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

// Function to handle navigation
const handleNavigation = (href: string, event: Event, isExternal = false) => {
  if (isExternal) {
    // For external links, open in new tab
    window.open(href, '_blank');
    return;
  }

  // Close mobile menu if open
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }

  // For internal links, scroll smoothly to section
  event.preventDefault();
  const targetId = href.replace('#', '');
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Function to determine if a link is active
const isActive = (href: string) => {
  if (!props.currentSection) return false;
  const targetId = href.replace('#', '');
  return props.currentSection === targetId;
};
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <span class="text-xl font-bold text-gray-900 dark:text-white">azharanas17</span>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:block">
          <div class="ml-10 flex items-center space-x-4">
            <a
              v-for="link in navLinks"
              :key="link.name"
              :href="link.href"
              @click="(e: Event) => handleNavigation(link.href, e, link.external)"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500',
                isActive(link.href) 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                  : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              ]"
            >
              {{ link.name }}
            </a>
          </div>
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <Menu v-if="!isMobileMenuOpen" class="h-6 w-6" aria-hidden="true" />
            <X v-else class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      :class="[
        'md:hidden',
        isMobileMenuOpen ? 'block' : 'hidden'
      ]"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          @click="(e: Event) => handleNavigation(link.href, e, link.external)"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500',
            isActive(link.href) 
              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
              : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
          ]"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </header>
</template>