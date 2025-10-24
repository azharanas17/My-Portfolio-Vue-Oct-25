# Technology Stack

## Architecture
- Frontend: Vue 3 with Composition API
- Styling: Tailwind CSS with additional CSS
- Build Tool: Vite
- Language: TypeScript
- UI Components: Reka UI components and custom shadcn-inspired components
- Icons: Lucide Vue Next
- Animations: Animate.css

## Frontend Technologies
- Vue 3: Progressive JavaScript framework with Composition API
- TypeScript: Strong typing for better development experience
- Tailwind CSS: Utility-first CSS framework with tailwindcss-animate
- Reka UI: Vue component library for accessible UI components
- Lucide Vue Next: Icon library with 1000+ icons
- Animate.css: CSS animations library
- @tailwindcss/vite: Tailwind CSS Vite plugin
- class-variance-authority: For creating variant-based classes
- clsx & tailwind-merge: For conditional class concatenation

## Development Environment
- Node.js: JavaScript runtime environment
- npm: Package manager
- Vite: Next-generation frontend build tool
- Vue 3: Progressive JavaScript framework with Composition API
- vue-tsc: TypeScript type checking for Vue files
- @vitejs/plugin-vue: Vite plugin for Vue development
- TypeScript: Type-safe development

## Common Commands
- `npm run dev`: Start development server with hot module replacement
- `npm run build`: Type check TypeScript and build production bundle
- `npm run preview`: Preview production build locally
- `npm install [package]`: Install a new dependency
- `vue-tsc -b`: Type check all TypeScript and Vue files

## Environment Variables
- NODE_ENV: Development/production environment
- VITE_*: Environment variables for Vite (prefix with VITE_ to expose to client code)

## Port Configuration
- Development server: 5173 (default Vite port)
- Preview server: 4173 (default Vite preview port)

## Key Dependencies
- vue: ^3.5.22 (Core Vue framework)
- @tailwindcss/vite: ^4.1.16 (Tailwind CSS Vite integration)
- reka-ui: ^2.6.0 (UI component library)
- lucide-vue-next: ^0.546.0 (Icon library)
- tailwind-merge: ^3.3.1 (Utility for merging Tailwind classes)
- clsx: ^2.1.1 (Utility for conditionally joining CSS class names)
- class-variance-authority: ^0.7.1 (Utility for handling component variants)
- animate.css: ^4.1.1 (CSS animations)
- node: ^22.21.0 (JavaScript runtime)

## Build Configuration
- Vite with Vue plugin
- TypeScript compilation via vue-tsc
- Alias support: @ points to src directory, ~ points to project root
- Tailwind CSS JIT compilation
- PostCSS processing with Autoprefixer