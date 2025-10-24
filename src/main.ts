import { createApp } from 'vue'
import './style.css'
import 'animate.css'
import animateOnScroll from './directives/animateOnScroll'
import App from './App.vue'

createApp(App)
  .directive('animate-on-scroll', animateOnScroll)
  .mount('#app')
