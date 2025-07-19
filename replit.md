# Replit.md - Kalika Model Secondary School Website

## Overview

This is a full-stack web application for Kalika Model Secondary School, a secondary school located in Pokhara-10, Ram Bazar, Nepal. The application is built as a modern school website showcasing the institution's information, courses, facilities, and contact details. It features a clean, professional design with smooth scrolling navigation and responsive layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Component Structure**: Modular component-based architecture with reusable UI components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Connection**: Neon Database serverless PostgreSQL
- **API Design**: RESTful API with Express routes
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development

### Development Setup
- **Development Server**: Vite dev server with HMR (Hot Module Replacement)
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **Type Checking**: TypeScript strict mode enabled
- **Code Organization**: Monorepo structure with shared types and utilities

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling to sections
- **Hero Section**: Landing area with school branding and call-to-action
- **About Section**: School information with statistics
- **Why Choose Section**: Key features and benefits
- **Principal's Message**: Personalized message from school leadership
- **Courses Section**: Academic programs and extracurricular activities
- **Gallery**: Image showcase of school facilities and activities
- **Notice Board**: School announcements and important notices
- **Contact Form**: Interactive contact form with validation
- **Footer**: Additional links and school contact information

### Backend Components
- **Route Handler**: Centralized route registration system
- **Storage Interface**: Abstracted CRUD operations for data management
- **Memory Storage**: In-memory storage implementation for development
- **Database Schema**: User table with Drizzle ORM schema definitions
- **Vite Integration**: Development server with Vite middleware

### UI Component Library
- Comprehensive set of reusable components based on Radix UI
- Consistent design system with CSS variables
- Responsive components with mobile-first approach
- Accessibility features built-in

## Data Flow

### Frontend Data Flow
1. React components manage local state using hooks
2. TanStack Query handles server state and caching
3. Form data flows through controlled components
4. API calls are made through custom query client
5. UI updates reactively based on state changes

### Backend Data Flow
1. Express middleware processes incoming requests
2. Route handlers delegate to storage interface
3. Storage layer performs CRUD operations
4. Database queries executed through Drizzle ORM
5. Response data formatted and sent back to client

### Database Schema
- **Users Table**: Basic user structure with ID, username, and password
- **Drizzle Integration**: Type-safe database operations
- **Schema Validation**: Zod schemas for request validation

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI components, Tailwind CSS
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with resolvers
- **Utilities**: clsx, tailwind-merge, date-fns
- **Icons**: Lucide React icons

### Backend Dependencies
- **Server Framework**: Express.js with middleware
- **Database**: Drizzle ORM with PostgreSQL adapter
- **Database Connection**: Neon Database serverless
- **Session Management**: connect-pg-simple for session storage
- **Development Tools**: tsx for TypeScript execution

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Database Tools**: Drizzle Kit for migrations
- **Code Quality**: ESLint, Prettier (implied by setup)
- **Replit Integration**: Replit-specific development plugins

## Deployment Strategy

### Production Build
- Frontend builds to `dist/public` directory
- Backend builds to `dist` directory with bundled dependencies
- Static assets served from Express in production
- Environment variables for database connection

### Development Environment
- Vite dev server for frontend with HMR
- tsx for backend TypeScript execution
- Database migrations handled by Drizzle Kit
- Replit-specific development banner integration

### Database Strategy
- PostgreSQL database with Drizzle ORM
- Database URL configuration through environment variables
- Migration files stored in `./migrations` directory
- Schema definitions in shared directory for type safety

### Environment Configuration
- Development: Local development with Vite and tsx
- Production: Bundled application with static file serving
- Database: Neon Database serverless PostgreSQL
- Session Storage: PostgreSQL-based session management

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns, type safety throughout, and a focus on developer experience and maintainability.