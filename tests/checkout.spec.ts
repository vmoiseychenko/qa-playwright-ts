import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.locator('.shopping_cart_link').click();
});

test('Checkout', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.open();
    await checkoutPage.fillForm('A', 'B', 'C');
    await checkoutPage.finish();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
});