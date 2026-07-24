import { test, expect } from '@playwright/test';
import { UsersApiClient } from '../../api-clients/users.client';

test('GET /users/1 returns user data', async ({ request }) => {
    const usersApi = new UsersApiClient(request);
    const response = await usersApi.getUser(1);
  
    expect(response.status()).toBe(200);
  
    const body = await response.json();
    expect(body.id).toBe(1);
});

test('GET /users returns list of users', async ({ request }) => {
    const usersApi = new UsersApiClient(request);
    const response = await usersApi.getUsers();

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.total).toBeGreaterThan(0);
});

test('GET /users returns 404 Not Found', async ({ request }) => {
    const usersApi = new UsersApiClient(request);
    const response = await usersApi.getUser(999);
    
    const body = await response.json();
    expect(response.status()).toBe(404);    
});

test('POST /users/add creates a new user', async ({ request }) => {
    const usersApi = new UsersApiClient(request);
    const response = await usersApi.createUser({firstName:'Muhammad', age: 25 });
    const body = await response.json();

    expect(response.status()).toBe(201);
    expect(body.firstName).toBe('Muhammad');
});

test('PUT /users/1 changes age', async ({ request }) => {
    const usersApi = new UsersApiClient(request);
    const response = await usersApi.updateUser(1, { age: 100 });

    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.age).toBe(100);
});

test('DELETE /users/1', async ({ request }) => {
    const usersApi = new UsersApiClient(request);
    const response = await usersApi.deleteUser(1);

    const body = await response.json();
    expect(response.status()).toBe(200);
    expect(body.isDeleted).toBe(true);
});