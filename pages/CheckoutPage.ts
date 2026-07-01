import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
  }

  async fillForm(firstName: string, lastName: string, zip: string) {
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Zip/Postal Code').fill(zip);
    await this.page.getByRole('button', { name: 'Continue' }).click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  }

  async finish() {
    await this.page.getByRole('button', { name: 'Finish' }).click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    }
}