import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  const cartPage = new CartPage(page);
});

test('Go to the shopping cart page', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.open();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
});

test('The cart is not empty', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.open();
  await expect(page.locator('.cart_item')).toHaveCount(1);
  });

test('Remove item', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.open();  
  await cartPage.removeItem();    
  await expect(page.locator('.cart_item')).toHaveCount(0);
});