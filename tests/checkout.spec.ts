import { test, expect } from '@playwright/test';

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
    await page.getByRole('button', { name: 'Checkout' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await page.getByPlaceholder('First Name').fill('A');
    await page.getByPlaceholder('Last Name').fill('B');
    await page.getByPlaceholder('Zip/Postal Code').fill('C');
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await page.getByRole('button', { name: 'Finish' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
});