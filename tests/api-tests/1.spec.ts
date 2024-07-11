import { test, expect } from '@playwright/test';

test('1 - GET All Products List', async ({ request }) => {
  const response = await request.get('/productsList');
  // Validate the response status code
  expect(response).not.toBeNull();
  expect(response.ok()).toBeTruthy();
});

test('2 - POST All Products List', async ({ request }) => {
  const response = await request.post('/productsList');
  // Ensure that the response is received
  expect(response).toBeTruthy();
  // Check if the response status code is 403 Forbidden
  expect(response.status()).toBe(403);
});

test('3 - GET All Brands List', async ({ request }) => {
  const response = await request.get('/brandsList');
  expect(response).not.toBeNull();
  expect(response.ok()).toBeTruthy();
});

test('4 - PUT to All Brands List', async ({ request }) => {
  const response = await request.put('/brandsList');
  expect(response).toBeTruthy();
  expect(response.status()).toBe(403);
});










