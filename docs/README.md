# APIscout Documentation

## Architecture Overview

The project follows a Clean Architecture (Hexagonal Architecture) pattern with the following layers:

### Application Layer
- `dto/`: Data Transfer Objects for transforming data between layers
- `interfaces/`: Interfaces/contracts for repositories and services
- `services/`: Application services implementing business logic
- `use_cases/`: Use cases implementing business rules
- `events/`: Domain events and handlers

### Infrastructure Layer
- `config/`: Application configuration
- `database/`: Database models and connections
- `logging/`: Logging configuration and utilities
- `cache/`: Caching implementation
- `middlewares/`: Express middlewares
- `repositories/`: Data access implementations
- `services/`: External service implementations

### Interfaces Layer
- `controllers/`: Request handlers
- `http/`: HTTP-specific code (routes, middleware)
- `validators/`: Request validation
- `serializers/`: Response serialization

## Setup and Configuration

1. Environment Variables
   - Copy `.env.example` to `.env`
   - Configure your environment variables

2. Database Setup
   - MongoDB connection string
   - Database indexes and configuration

3. API Documentation
   - API endpoints
   - Request/Response formats
   - Authentication

## Development Guidelines

1. Code Style
   - Follow ESLint configuration
   - Use Prettier for formatting

2. Testing
   - Unit tests for business logic
   - Integration tests for APIs
   - E2E tests for critical flows

3. Git Workflow
   - Feature branches
   - Pull request guidelines
   - Commit message format
