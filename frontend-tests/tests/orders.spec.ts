import { test, expect } from '@playwright/test';

test('Home page loads successfully', async ({ page }) => {

  await page.goto('/');

  await expect(page).toHaveTitle(/Orders|Pedidos|App/);

});
