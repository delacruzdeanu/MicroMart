#!/bin/bash

echo "Starting MicroMart services locally..."

# Build all services first
echo "Building services..."

# Build User Service
cd services/user-service
npm install
cd ../..

# Build Product Service
cd services/product-service
./mvnw clean package -DskipTests
cd ../..

# Start everything with Docker Compose
echo "Starting containers..."
docker-compose up -d

echo "MicroMart services are starting. You can access the API at http://localhost:8080"