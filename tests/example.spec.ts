import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
});

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag/);
});

test('login with valid credentials', async ({ page }) => {
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('login with incorrect credentials', async ({ page }) => {
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong_password');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Epic sadface')).toBeVisible();
});