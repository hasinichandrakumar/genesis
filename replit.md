# The Genesis Initiative Website

## Overview

This is a modern, responsive website for The Genesis Initiative, a youth-led nonprofit organization focused on entrepreneurship and financial literacy education. The site serves as the primary digital presence for the organization, providing information about programs, team members, upcoming events, and donation opportunities. Built as a single-page application with smooth scrolling navigation between sections, it showcases the organization's mission to empower young entrepreneurs through inclusive educational programs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with minimal bundle size
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Component Structure
- **Layout**: Single-page application with smooth scrolling navigation between sections
- **Sections**: Modular components for Hero, About, Events, Impact, Team, Contact, Donate, and Footer
- **UI Library**: Comprehensive set of reusable UI components including forms, buttons, dialogs, and navigation elements
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive layouts

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: Hot module replacement and middleware-based request logging
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Static Serving**: Development and production static file serving with Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema**: User management schema with username/password authentication
- **Connection**: Neon Database serverless PostgreSQL with connection pooling
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Development Storage**: In-memory storage implementation for development and testing

### Design System
- **Color Palette**: Custom brand colors for Genesis Initiative (navy, blue, orange) integrated into Tailwind theme
- **Typography**: Consistent font sizing and spacing using Tailwind's design tokens
- **Components**: shadcn/ui components with custom styling and brand integration
- **Icons**: Lucide React icons with custom logo components for brand identity
- **Animations**: CSS transitions and hover effects for enhanced user experience

### Contact and Communication
- **Email Integration**: Direct mailto links for contact form functionality
- **Social Media**: Integration with Instagram and LinkedIn through external links
- **Form Handling**: Client-side form validation and email draft generation for inquiries

## External Dependencies

### UI and Styling
- **@radix-ui/react-***: Accessible UI primitives for complex components (dialogs, dropdowns, navigation)
- **tailwindcss**: Utility-first CSS framework for responsive design
- **class-variance-authority**: Component variant management for consistent styling
- **lucide-react**: Modern icon library for user interface elements

### Development and Build Tools
- **vite**: Fast build tool with hot module replacement and optimized bundling
- **typescript**: Static type checking for improved code quality and developer experience
- **@replit/vite-plugin-***: Replit-specific development tools and error handling

### Database and ORM
- **drizzle-orm**: Type-safe ORM for PostgreSQL database operations
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-kit**: Database migration and schema management tools

### State Management and Data Fetching
- **@tanstack/react-query**: Server state management with caching and synchronization
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Form validation resolver integration

### Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **clsx**: Conditional CSS class name utility
- **wouter**: Lightweight client-side routing library