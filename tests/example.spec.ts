import { test, expect } from '@playwright/test';

test.only('CSS bouton', async ({ page }) => {
  await page.goto('http://localhost:5000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Document/);

  expect(await page.screenshot()).toMatchSnapshot('button.png');
});

