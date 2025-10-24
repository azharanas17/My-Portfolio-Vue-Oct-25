import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollSpy(sectionIds: string[]) {
  const currentSection = ref('');

  const getVisibleSection = () => {
    // Find the section that is currently most visible in the viewport
    let visibleSection = '';
    let maxVisibleHeight = 0;

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      
      let visibleHeight = 0;
      
      if (elementTop < 0 && elementBottom > 0) {
        // Top of element is above viewport, bottom is in viewport
        visibleHeight = elementBottom;
      } else if (elementTop > 0 && elementTop < windowHeight) {
        // Top of element is in viewport
        visibleHeight = windowHeight - elementTop;
      } else if (elementTop < 0 && elementBottom > windowHeight) {
        // Element is larger than viewport and spans it
        visibleHeight = windowHeight;
      }
      
      // Only consider sections that are at least 20% visible
      if (visibleHeight > maxVisibleHeight && visibleHeight > element.clientHeight * 0.2) {
        maxVisibleHeight = visibleHeight;
        visibleSection = id;
      }
    }

    return visibleSection;
  };

  const updateActiveSection = () => {
    currentSection.value = getVisibleSection();
  };

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection);
    // Initial update
    updateActiveSection();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection);
  });

  return {
    currentSection,
    updateActiveSection
  };
}