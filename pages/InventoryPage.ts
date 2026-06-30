import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addToCart() {
   await this.page.getByRole('button', { name: 'Add to cart' }).first().click();
  }
}