import { test, expect } from '@playwright/test';
import { login, setupUser, prepPage, username, displayUsernameAlice } from '../global-setup';

test.use({
  viewport: {
    height: 1200,
    width: 1500,
  },
});

async function delay(ms = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('deployments', async ({}, { config }) => {
  const { baseURL } = config.projects[0].use;

  const { page, browser } = await login(baseURL, config);
  await setupUser(page, displayUsernameAlice);
  await prepPage(page, baseURL);

  //*********
  // Start
  //*********

  // Deploytments page
  await page.goto("https://nuvla.io/ui/deployments");
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/deployments-page.png', scale: 'css' });
  
  await browser.close();
});
