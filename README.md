# QA Automation Portfolio — Playwright + TypeScript

E2E and API test suite built with Playwright and TypeScript.

## Stack

- Playwright
- TypeScript
- Node.js
- @faker-js/faker

## UI Tests (Sauce Demo)

- **login.spec.ts** — title check, valid login, invalid login, locked out user
- **inventory.spec.ts** — page title, item count, add to cart
- **cart.spec.ts** — navigation, cart not empty, remove item
- **checkout.spec.ts** — full purchase flow E2E

Built with Page Object Model (`pages/`).

## API Tests (DummyJSON)

- **users.spec.ts** — CRUD coverage for `/users` endpoint:
  - GET single user, GET list, GET 404 case
  - POST create user (faker-generated data)
  - PUT update user (faker-generated data)
  - DELETE user
  - Data-driven POST tests via JSON fixtures (`fixtures/users.json`)

Built with a lightweight API client (`api-clients/users.client.ts`) wrapping `APIRequestContext`.

## How to run

```
npm install
npx playwright test
```

Run only UI or only API tests:

```
npx playwright test tests/ui
npx playwright test tests/api
```