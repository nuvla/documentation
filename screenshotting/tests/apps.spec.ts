import { test, expect } from '@playwright/test';
import { mockMarketplaceAppsData, mockAllAppsData, mockNavigateAppsData } from './mockAppData';
import { login, setupUser, prepPage, displayUsernameClara, mockAppResponse } from '../global-setup';

test.use({
  viewport: {
    height: 1200,
    width: 1500,
  },
});

async function delay(ms = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('marketplace', async ({}, { config }) => {
  const { baseURL } = config.projects[0].use;

  const { page, browser } = await login(baseURL, config);
  await setupUser(page, displayUsernameClara);
  await mockAppResponse(page, mockMarketplaceAppsData);
  await prepPage(page, baseURL)

  //*********
  // Start
  //*********

  await page.goto("https://nuvla.io/ui/apps");
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-app-marketplace.png', scale: 'css' });

  await browser.close();
});

test('allapps', async ({}, { config }) => {
  const { baseURL } = config.projects[0].use;

  const { page, browser } = await login(baseURL, config);
  await setupUser(page, displayUsernameClara);
  await mockAppResponse(page, mockAllAppsData);
  await prepPage(page, baseURL)

  //*********
  // Start
  //*********

  await page.goto("https://nuvla.io/ui/apps?apps-store-tab=allapps");
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-app-all.png', scale: 'css' });

  await browser.close();
});


test('navigate', async ({}, { config }) => {
  const { baseURL } = config.projects[0].use;

  const { page, browser } = await login(baseURL, config);
  await setupUser(page, displayUsernameClara);
  await mockAppResponse(page, mockNavigateAppsData);
  await prepPage(page, baseURL)

  //*********
  // Start
  //*********

  await page.goto("https://nuvla.io/ui/apps?apps-store-tab=navigate");
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-app-navigate.png', scale: 'css' });

  await browser.close();
});
