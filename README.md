# APIscout

**API Scout** is a platform designed to automate API documentation, testing, and monitoring for developers. It centralizes the management of API schemas, tracks versions, and offers real-time monitoring, all in one place. API Scout aims to simplify the workflow of developers and teams by providing a comprehensive tool for managing APIs efficiently.

## Project Structure

- **`models/`**: Contains the Mongoose schemas for MongoDB.
- **`repositories/`**: Handles data access logic, providing methods like `getAllUsers`.
- **`use_cases/`**: Encapsulates business logic, calling repository functions and managing additional processing as needed.
- **`controllers/`**: Manages HTTP requests and responses, interacting with the use cases to perform actions.


## Features

- **Automated API Documentation**: Import your API schema (OpenAPI or Swagger) and generate interactive documentation automatically.
- **API Testing**: Test your API endpoints directly within the platform. Customize requests and view real-time responses.
- **Version Control**: Track and manage different versions of your APIs. View the history of changes and restore previous versions when needed.
- **Performance Monitoring**: Monitor the performance of your APIs with real-time data, including response times and error rates.
- **Notifications and Alerts**: Get notified instantly when your API performance degrades or errors occur, keeping you proactive.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local instance or cloud-based like MongoDB Atlas)
- **Docker** (optional for containerized deployment)

### Installation

# API Scout Setup Guide

## Prerequisites

- Ensure you have Node.js and MongoDB installed on your machine.

---

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/foucsi/api-scout.git