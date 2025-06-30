# Portfolio Application

## Overview

This is a modern full-stack portfolio application built with React, TypeScript, Express.js, and PostgreSQL. It features a responsive design using shadcn/ui components and Tailwind CSS, with a professional portfolio layout including sections for home, about, skills, projects, and contact. The application includes a contact form with backend data storage capabilities.

## System Architecture

The application follows a monorepo structure with clear separation between client-side and server-side code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth animations
- **Routing**: Wouter for lightweight client-side routing

## Key Components

### Frontend Architecture
- **Component-based React architecture** with TypeScript for type safety
- **shadcn/ui component library** providing consistent, accessible UI components
- **Tailwind CSS** for utility-first styling with custom CSS variables for theming
- **Responsive design** optimized for mobile and desktop experiences
- **Animation system** using Framer Motion for smooth transitions and interactions

### Backend Architecture
- **Express.js REST API** with TypeScript for type-safe server development
- **Modular routing system** with clear separation of concerns
- **Error handling middleware** for consistent error responses
- **Request logging** for development and debugging purposes

### Database Layer
- **Drizzle ORM** for type-safe database operations and schema management
- **PostgreSQL** as the primary database (configured but can be adapted)
- **Schema-first approach** with shared types between client and server
- **Migration support** through Drizzle Kit for database versioning

### UI Components
- **Comprehensive component library** including forms, navigation, cards, and interactive elements
- **Accessibility-first design** using Radix UI primitives
- **Consistent theming** with CSS custom properties for light/dark mode support
- **Form validation** using react-hook-form with Zod schema validation

## Data Flow

1. **Client requests** are made through the TanStack Query client with custom API request functions
2. **Server endpoints** validate incoming data using Zod schemas
3. **Database operations** are performed through Drizzle ORM with type-safe queries
4. **Responses** are returned as JSON with consistent error handling
5. **Client state** is managed through TanStack Query for caching and synchronization

The contact form demonstrates the complete data flow:
- Form submission validates client-side using react-hook-form
- Data is sent to `/api/contact` endpoint
- Server validates using Zod schema
- Data is stored in PostgreSQL via Drizzle ORM
- Success/error responses update the UI with toast notifications

## External Dependencies

### Production Dependencies
- **@radix-ui/** - Accessible UI component primitives
- **@tanstack/react-query** - Server state management
- **drizzle-orm** - Type-safe ORM for database operations
- **framer-motion** - Animation library
- **react-hook-form** - Form state management
- **wouter** - Lightweight routing
- **zod** - Schema validation

### Development Dependencies
- **Vite** - Build tool and development server
- **TypeScript** - Type checking and compilation
- **Tailwind CSS** - Utility-first CSS framework
- **ESBuild** - Fast JavaScript bundler for production

## Deployment Strategy

The application is configured for deployment with:

1. **Build process**: Vite builds the client-side code, ESBuild bundles the server
2. **Production server**: Express.js serves both API endpoints and static files
3. **Database**: PostgreSQL connection via Neon serverless database
4. **Environment configuration**: Database URL and other secrets via environment variables

Build commands:
- `npm run dev` - Development mode with hot reloading
- `npm run build` - Production build for both client and server
- `npm start` - Start production server
- `npm run db:push` - Push database schema changes

## Changelog
- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.