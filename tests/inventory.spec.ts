import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('has title', async ({ page }) => {  
    await expect(page.getByText('Products')).toBeVisible();
});

test('has 6 items', async ({ page }) => {  
    await expect(page.locator('.inventory_item')).toHaveCount(6);
});

test('Add item to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart();
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(1);
  });