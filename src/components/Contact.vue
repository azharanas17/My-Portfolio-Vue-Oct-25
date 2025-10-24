<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-vue-next';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface ContactInfo {
  title?: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  location?: string;
  socialLinks?: SocialLink[];
}

// Define props with default contact information
const props = withDefaults(defineProps<ContactInfo>(), {
  title: "Get In Touch",
  subtitle: "Feel free to reach out to me for opportunities or just a chat!",
  email: "hello@example.com",
  phone: "+1 (123) 456-7890",
  location: "City, Country",
  socialLinks: () => [
    { name: "GitHub", url: "https://github.com/username", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/username", icon: "Linkedin" },
    { name: "Email", url: "mailto:hello@example.com", icon: "Mail" }
  ]
});

// Mapping of icon names to components
const iconComponents = {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin
};

// Handle form submission
const onSubmit = (event: Event) => {
  event.preventDefault();
  console.log('Form submitted');
  // In a real implementation, you would handle form submission here
};
</script>

<template>
  <section 
    class="py-20 bg-white dark:bg-gray-900"
    id="contact"
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
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <Card class="h-full border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/50 shadow-lg p-8">
            <CardContent class="p-0">
              <div class="space-y-8">
                <!-- Email -->
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
                    <Mail class="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                    <a 
                      :href="`mailto:${props.email}`" 
                      class="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {{ props.email }}
                    </a>
                  </div>
                </div>
                
                <!-- Phone -->
                <div v-if="props.phone" class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
                    <Phone class="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <a 
                      :href="`tel:${props.phone}`" 
                      class="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {{ props.phone }}
                    </a>
                  </div>
                </div>
                
                <!-- Location -->
                <div v-if="props.location" class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
                    <MapPin class="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                    <p class="text-gray-600 dark:text-gray-300">{{ props.location }}</p>
                  </div>
                </div>
                
                <!-- Social Links -->
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h3>
                  <div class="flex space-x-4">
                    <a 
                      v-for="social in props.socialLinks"
                      :key="social.name"
                      :href="social.url"
                      :title="social.name"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="bg-white dark:bg-gray-700 rounded-full p-3 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <component
                        :is="iconComponents[social.icon as keyof typeof iconComponents]"
                        class="w-5 h-5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <!-- Contact Form -->
        <div>
          <Card class="h-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg p-8">
            <CardContent class="p-0">
              <form @submit="onSubmit" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    aria-required="true"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:outline-none"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    aria-required="true"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:outline-none"
                    placeholder="Your message here..."
                    aria-describedby="message-help"
                  ></textarea>
                  <p id="message-help" class="mt-1 text-sm text-gray-500 dark:text-gray-400 sr-only">
                    Please enter your message
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send class="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>