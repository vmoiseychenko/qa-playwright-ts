import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.locator('.shopping_cart_link').click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
  }

  async removeItem() {
    await this.page.getByRole('button', { name: 'Remove' }).click();   
    }
}