// tests/user.test.js
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user.model');

describe('User API', () => {
  beforeAll(async () => {
    // Connect to a test database
    await mongoose.connect(process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/userdb_test', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  afterAll(async () => {
    // Clear test database and close connection
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    // Clear users before each test
    await User.deleteMany({});
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({
        email: 'test@example.com',
        password: 'password123',
        firstName: 'Test',
        lastName: 'User'
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user');
    expect(res.body.user.email).toEqual('test@example.com');
    expect(res.body).toHaveProperty('token');
  });

  it('should not register a user with existing email', async () => {
    // Create a user first
    await request(app)
      .post('/api/users/register')
      .send({
        email: 'duplicate@example.com',
        password: 'password123',
        firstName: 'Duplicate',
        lastName: 'User'
      });
    
    // Try to create another user with the same email
    const res = await request(app)
      .post('/api/users/register')
      .send({
        email: 'duplicate@example.com',
        password: 'different123',
        firstName: 'Another',
        lastName: 'User'
      });
    
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message');
  });
});