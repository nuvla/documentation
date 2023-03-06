import { test, expect } from '@playwright/test';
import { mockAppData } from './mockAppData';
import { login } from '../global-setup';

test.use({
  viewport: {
    height: 1200,
    width: 1500,
  },
});

async function delay(ms = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const username = 'alice@nuvla-ui.io';

test('test', async ({}, { config }) => {
  const { baseURL } = config.projects[0].use;

  const { page, browser } = await login(baseURL, config);

  // If running in headed breakpoints here (can then continue manually)
  // Go to Nuvla.io
  await page.goto(baseURL);
  // hide re-frame-10x or local tests fail
  await page.evaluate(`window.localStorage.setItem('day8.re-frame-10x.show-panel', '"false"')`);
  await page.goto(baseURL);

  //*********
  // Start
  //*********

  // Welcome
  await page.goto(baseURL);
  await expect(page).toHaveURL('https://nuvla.io/ui/');
  await delay(3000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/home.png', scale: 'css' });

  // Enable two-factor authentication
  await page.getByText(username).click();
  await page.getByText('Enable two-factor authentication').click();
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/two-factor.png', scale: 'css' });

  await browser.close();
});
