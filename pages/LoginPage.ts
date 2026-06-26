import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    // открыть сайт
    await this.page.goto('https://www.saucedemo.com');
    await expect(this.page).toHaveTitle(/Swag/);
  }

  async login(username: string, password: string) {
    // заполнить поля и нажать Login
    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}