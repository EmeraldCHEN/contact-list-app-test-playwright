import { test, expect } from '@playwright/test';
const baseURL = 'https://reqres.in/api';
const userName = 'Luffy';
const userJob = 'Pirate';
const updatedUserName = 'Monkey D. Luffy';
const updatedUserJob = 'Pirate King';
const testData = [
  { name: 'Luffy1', job: 'Pirate1' },
  { name: 'Zoro2', job: 'Swordsman2' },
  { name: 'Sanji3', job: 'Chef3' }
];

test('has title', async ({ request }) => {
  const response = await request.get(`${baseURL}/users?page=2`);
  expect(response.ok()).toBeTruthy();
  const users = await response.json();
  expect(users.data.length).toBeGreaterThan(0);
});

test('Create a new user', async ({ request }) => {
  const newUser = {
    name: userName,
    job: userJob
  };
  const response = await request.post(`${baseURL}/users`, { data: newUser });
  expect(response.ok()).toBeTruthy();
  const user = await response.json();
  expect(user.name).toBe(newUser.name);
  expect(user.job).toBe(newUser.job);
});

test('Update a user', async ({ request }) => {
  const updatedUser = {
    name: updatedUserName,
    job: updatedUserJob
  };
  const response = await request.put(`${baseURL}/users/2`, { data: updatedUser });
  expect(response.ok()).toBeTruthy();
  const user = await response.json();
  expect(user.name).toBe(updatedUserName);
  expect(user.job).toBe(updatedUserJob);
});

test('Delete a user', async ({ request }) => {
  const response = await request.delete(`${baseURL}/users/2`);
  expect(response.ok()).toBeTruthy();
});

testData.forEach((data) => {
  test(`Create a new user with name ${data.name}`, async ({ request }) => {
    const response = await request.post(`${baseURL}/users`, { data });
    expect(response.ok()).toBeTruthy();
    const user = await response.json();
    expect(user.name).toBe(data.name);
  });
});










