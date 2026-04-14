# hex-lambdaAWS

A study project implementing **Hexagonal Architecture** (Ports and Adapters pattern) with AWS Lambda and DynamoDB.

## Project Overview

This is an educational project designed to demonstrate clean architecture principles using:
- **Hexagonal Architecture** for decoupled and testable code
- **AWS Lambda** for serverless computing
- **DynamoDB** for NoSQL data storage
- **Node.js** with CommonJS modules

## Architecture

The project follows the Hexagonal Architecture pattern, which promotes separation of concerns and maintainability:

```
Domain Layer (Entities & Repositories)
    ↕
Application Layer (Use Cases)
    ↕
Adapter Layer (Controllers & Repositories Implementation)
```

### Project Structure

```
src/
├── domain/                      # Core business logic
│   ├── entities/               # Business entities (Product)
│   └── repositories/           # Repository interfaces
├── application/                # Application logic
│   └── useCases/              # Use cases (CRUD operations)
└── adapters/                   # External interfaces
    ├── controllers/           # HTTP controllers
    └── repositories/          # DynamoDB implementation
```

## Technologies

- **Node.js** - JavaScript runtime
- **AWS SDK v2** - AWS services integration
- **DynamoDB** - NoSQL database
- **Lambda** - Serverless computing platform
- **dotenv** - Environment variable management

## Prerequisites

- Node.js 14+ installed
- AWS Account with DynamoDB access
- AWS credentials configured

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory with your AWS credentials:

```env
AWS_REGION=your_region_key_here
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
DYNAMODB_TABLE_NAME=products
```

### 3. Set Up DynamoDB

Create a DynamoDB table named `products` with:
- Primary Key: `id` (String)
- sort key: `name` (Strinbg)
- `quantity` (number)
- `price` (number)
- Region: `sa-east-1` (or your preferred region)

## Use Cases

The application implements CRUD operations for Products:

- **CreateProduct** - Add a new product
- **GetAllProduct** - Retrieve all product 
- **UpdateProduct** - Modify an existing product
- **DeleteProduct** - Remove a product

## Learning Objectives

This project demonstrates:
- Hexagonal Architecture principles
- Separation of concerns
-  Dependency inversion
- Clean code practices
- Integration with AWS services
- Environment-based configuration

