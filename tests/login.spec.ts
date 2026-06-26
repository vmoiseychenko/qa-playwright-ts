import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Swag/);
});

test('login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'wrong_password');
  await expect(page.getByText('Epic sadface')).toBeVisible();
});

test('login with an error message', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('locked_out_user', 'secret_sauce');
  await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});