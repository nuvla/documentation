import { test, expect } from '@playwright/test';
import { login, setupUser, prepPage, username, displayUsernameAlice, highlightElement } from '../global-setup';

test.use({
  viewport: {
    height: 1200,
    width: 1500,
  },
});

async function delay(ms = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('welcome', async ({}, { config }) => {
  const { baseURL } = config.projects[0].use;

  const { page, browser } = await login(baseURL, config);
  await setupUser(page, displayUsernameAlice);
  await prepPage(page, baseURL)

  //*********
  // Start
  //*********

  // Welcome
  await page.goto(baseURL);
  await expect(page).toHaveURL('https://nuvla.io/ui/');
  await delay(3000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/home.png', scale: 'css' });

  // Profile
  await page.getByText(displayUsernameAlice).click();
  await delay(3000);

  // Usage
  await highlightElement(page, 'a:text("Enable two-factor authentication")');
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/profile.png', scale: 'css' });

  // Enable two-factor authentication
  await page.getByText('Enable two-factor authentication').click();
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/two-factor.png', scale: 'css' });

  await browser.close();
});
