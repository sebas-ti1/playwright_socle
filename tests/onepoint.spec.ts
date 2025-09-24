import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.groupeonepoint.com/fr/');
  await page.getByRole('button', { name: 'Tout refuser' }).click();
  await page.getByRole('button', { name: 'Ouvrir la navigation' }).click();
  await page.locator('#menu-fr-main-navigation').getByRole('link', { name: 'Nous rejoindre' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Voir toutes nos offres -' }).first().click();
  const page1 = await page1Promise;
  await page1.getByRole('combobox', { name: 'Saisir un métier ou un mot clé' }).click();
  await page1.getByRole('combobox', { name: 'Saisir un métier ou un mot clé' }).fill('bordeaux');
  await page1.getByTestId('job-offers-search-btn').click();
  await page1.getByRole('link', { name: 'Consultant DevOps F/H 20' }).click();
  await expect(page1.getByRole('main')).toContainText('Présentation de l\'offre');
  await expect(page1.getByRole('img', { name: 'photo de couverture' })).toBeVisible();
});