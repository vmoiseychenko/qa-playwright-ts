import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('has title', async ({ page }) => {  
    await expect(page.getByText('Products')).toBeVisible();
});

test('has 6 items', async ({ page }) => {  
    await expect(page.locator('.inventory_item')).toHaveCount(6);
});

test('Add item to cart', async ({ page }) => {
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(1);
  });