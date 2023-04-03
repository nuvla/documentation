import { test, expect } from '@playwright/test';
import { mockAppData } from './mockAppData';
import { login, setup_user, username, display_username_clara } from '../global-setup';

test.use({
  viewport: {
    height: 1200,
    width: 1500,
  },
});

async function delay(ms = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('test', async ({}, { config }) => {
  const { baseURL } = config.projects[0].use;

  const { page, browser } = await login(baseURL, config);
  await setup_user(page, display_username_clara);

  // App...
  await page.route('api/module', (route) => {
    let payload = route.request().postDataJSON();
    if (payload.filter === "((subtype='component') or (subtype='application') or (subtype='application_kubernetes'))") {
      route.fulfill({
        status: 200,
        body: JSON.stringify(mockAppData),
      });
    } else {
      route.fulfill({
        status: 200,
        body: JSON.stringify(mockAppData),
      });
    }
  });

  // If running in headed breakpoints here (can then continue manually)
  // Go to Nuvla.io
  await page.goto(baseURL);
  // hide re-frame-10x or local tests fail
  await page.evaluate(`window.localStorage.setItem('day8.re-frame-10x.show-panel', '"false"')`);
  await page.goto(baseURL);

  //*********
  // Start
  //*********

  await page.goto("https://nuvla.io/ui/apps");
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-app-marketplace.png', scale: 'css' });

  await page.goto("https://nuvla.io/ui/apps?apps-store-tab=navigate");
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-app-navigate.png', scale: 'css' });


  await browser.close();
});
