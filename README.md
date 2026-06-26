# QA Automation Portfolio — Playwright + TypeScript

E2E test suite for [Sauce Demo](https://www.saucedemo.com) built with Playwright and TypeScript.

## Stack
- Playwright
- TypeScript
- Node.js

## Tests
- **login.spec.ts** — title check, valid login, invalid login, locked out user
- **inventory.spec.ts** — page title, item count, add to cart
- **cart.spec.ts** — navigation, cart not empty, remove item
- **checkout.spec.ts** — full purchase flow E2E

## How to run
```bash
npm install
npx playwright test
```