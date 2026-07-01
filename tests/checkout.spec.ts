import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
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