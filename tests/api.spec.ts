import { test, expect } from '@playwright/test';

test('Get All Products List', async ({ request }) => {
  const response = await request.get('/productsList');
  // Validate the response status code
  expect(response).not.toBeNull();
  expect(response.ok()).toBeTruthy();
});

test('Post All Products List', async ({ request }) => {
  const response = await request.post('/productsList');
  // Ensure that the response is received
  expect(response).toBeTruthy();
  // Check if the response status code is 403 Forbidden
  expect(response.status()).toBe(403);
});