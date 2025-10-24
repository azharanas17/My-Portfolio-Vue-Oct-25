# Project Structure

## Root Directory Organization
- `index.html`: Main HTML entry point
- `package.json`: Project dependencies and scripts
- `vite.config.ts`: Vite build configuration
- `tsconfig.json`: Root TypeScript configuration
- `tsconfig.app.json`: App-specific TypeScript configuration
- `tsconfig.node.json`: Node-specific TypeScript configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration
- `src/`: Source code directory
- `public/`: Static assets directory
- `node_modules/`: Project dependencies
- `.gitignore`: Git ignore patterns
- `README.md`: Project documentation
- `.kiro/`: Kiro-specific configuration files
- `.qwen/`: Qwen-specific configuration files

## Subdirectory Structures

### `src/` directory
- `main.ts`: Main application entry point
- `App.vue`: Root Vue component that orchestrates the portfolio sections
- `components/`: Reusable Vue components organized by function
- `assets/`: Static assets like images and styles
- `lib/`: Utility functions and helper modules (e.g., `utils.ts`)
- `style.css`: Global CSS styles

### `src/components/` directory
- `ui/`: Reusable UI components (buttons, cards, etc.)
  - `button/`: Button component with variants
    - `Button.vue`: Button component implementation
    - `index.ts`: Button exports and variants definition
  - `card/`: Card component suite
    - `Card.vue`, `CardHeader.vue`, `CardTitle.vue`, etc.: Card subcomponents
    - `index.ts`: Card exports
- Portfolio-specific components:
  - `Hero.vue`: Hero section of the portfolio
  - `Feature.vue`: Features section
  - `CTA.vue`: Call-to-action section
  - `Content.vue`: Content section
  - `Team.vue`: Team section
  - `Logo.vue`: Logo section
  - `Contact.vue`: Contact section
  - `HelloWorld.vue`: Example component

## Code Organization Patterns
- Component-based architecture using Vue 3 Composition API
- TypeScript for type safety throughout the application
- Tailwind CSS for styling with custom variants
- Reusable UI component library pattern in `components/ui/`
- Dedicated portfolio section components in the main components directory

## File Naming Conventions
- PascalCase for Vue component files (e.g., `Card.vue`, `Button.vue`)
- camelCase for utility functions and modules
- kebab-case for directory names
- Use descriptive names for components and directories
- All UI components follow the pattern of implementation file + index.ts export

## Import Organization
- Vue built-in imports first (defineComponent, ref, etc.)
- External libraries (vue-router, pinia, etc.)
- @/ imports for internal modules (using alias configured in vite.config.ts)
- Relative imports for local files
- Group related imports together
- Components are imported from their respective index.ts files for clean exports

## Key Architectural Principles
- Component reusability and modularity with the UI library approach
- Separation of concerns with dedicated section components
- Type safety through TypeScript and proper typing
- Responsive design with Tailwind CSS and shadcn-inspired components
- Maintainable and scalable code structure with proper aliasing
- Clean architecture with utility functions in the lib directory