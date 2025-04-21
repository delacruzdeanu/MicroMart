// scripts/mongodb/init-product-db.js
db = db.getSiblingDB('productdb');

db.createCollection('products');

db.products.insertMany([
  {
    name: 'Smartphone X',
    description: 'Latest smartphone with amazing features',
    price: 999.99,
    stock: 100,
    categories: ['Electronics', 'Phones'],
    images: ['smartphone-x-1.jpg', 'smartphone-x-2.jpg'],
    available: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Laptop Pro',
    description: 'Powerful laptop for professionals',
    price: 1299.99,
    stock: 50,
    categories: ['Electronics', 'Computers'],
    images: ['laptop-pro-1.jpg'],
    available: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

print('Product database initialized successfully');