Vex

Vex is a modern SaaS web application built with a scalable, modular, and maintainable architecture. 
The project emphasizes performance, clean design, and a responsive interface, providing users with a smooth and intuitive experience.
It is designed using Next.js with TypeScript and styled with Tailwind CSS, following industry-standard best practices for web development.

Features

- Secure Authentication & User Management: Implemented using Clerk, allowing user registration, login, and session management.

- Responsive & Clean UI: Tailwind CSS ensures consistent styling, mobile responsiveness, and a modern interface.

- Component-Based Architecture: All UI elements are modular React components, promoting reusability and maintainability.

- Backend Integration: Supabase is used for database management, storage, and serverless API functions.

- Scalable Routing & APIs: Next.js App Router structures pages and API routes efficiently.

- Dark Mode Support: Tailwind CSS configuration allows easy implementation of dark/light themes.

- Code Quality & Standards: ESLint enforces coding conventions, ensuring clean and maintainable code.

  Tech Stack

- Next.js (App Router): Server-side rendering, static site generation, and API routing.

- TypeScript: Type safety and maintainable code.

- Tailwind CSS: Utility-first CSS framework for fast styling and responsive design.

- Clerk: Authentication and session management service.

- Supabase: Backend service for database, storage, and API endpoints.

- ESLint: Code style enforcement.

- PostCSS: CSS processing and optimization.

- Tailwind Merge: Merges Tailwind class names intelligently in components.

Project Structure

app/ → Next.js routes, layouts, and page structure
components/ → Reusable UI components
lib/ → Utility functions, helpers, and API clients
constants/ → Global constants used across the app
types/ → TypeScript type definitions
styles/ → Global CSS and Tailwind imports
public/ → Static assets like images, icons, and fonts

- app/layout.tsx – Defines the main layout, including header, footer, and top-level HTML structure.

- components/ – Each component is self-contained and styled using Tailwind classes.

- lib/ – Integrations with external services (e.g., Supabase helpers or API clients).

- styles/globals.css – Imports Tailwind base, components, and utilities.


Styling & Theming

- Tailwind CSS is used for all styling.

- Utility classes are applied directly in JSX components.

- Dark mode is supported via Tailwind’s dark variant, toggleable at the top-level layout (html tag or provider).

- Custom colors, breakpoints, and themes can be extended in tailwind.config.js.


