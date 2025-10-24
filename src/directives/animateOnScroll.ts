import { type Directive } from 'vue';

// Define the directive
const animateOnScroll: Directive = {
  mounted(el, binding) {
    // Set initial state
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    
    // Create observer to watch for element visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Use animate.css classes if provided, otherwise use our custom animation
          const animationClass = binding.value || 'animate__animated animate__fadeInUp';
          el.classList.add(...animationClass.split(' '));
          
          // Set final state after animation
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          
          // Stop observing this element after animation starts
          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    // Start observing
    observer.observe(el);
  },
};

export default animateOnScroll;