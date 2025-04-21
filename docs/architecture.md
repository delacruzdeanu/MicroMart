# MicroMart Architecture

## Overview

MicroMart is a microservices-based e-commerce platform designed to handle various aspects of an online store.

## Services Architecture

- **User Service**: Handles user authentication and profile management
- **Product Catalog Service**: Manages product listings and inventory
- **Shopping Cart Service**: Manages users' shopping carts
- **Order Service**: Processes and manages orders
- **Payment Service**: Handles payment processing
- **Notification Service**: Sends notifications to users

## Technology Stack

- **Language/Frameworks**: Node.js, Java Spring Boot
- **Databases**: MongoDB, PostgreSQL, Redis
- **Message Broker**: Kafka
- **Service Discovery**: Consul
- **API Gateway**: Spring Cloud Gateway
- **Containerization**: Docker, Kubernetes
- **CI/CD**: GitHub Actions

## Communication Patterns

- REST APIs for synchronous communication
- Kafka for asynchronous event-driven communication
