import { test, expect } from '@playwright/test';
import { mockAppData } from './mockAppData';
import { login, setupUser, username, displayUsernameClara, cssStyles } from '../global-setup';

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
  await setupUser(page, displayUsernameClara);

  // If running in headed breakpoints here (can then continue manually)
  // Go to Nuvla.io
  await page.goto(baseURL);
  // hide re-frame-10x or local tests fail
  await page.evaluate(`window.localStorage.setItem('day8.re-frame-10x.show-panel', '"false"')`);
  await page.goto(baseURL);

  //*********
  // Start
  //*********

  await page.goto("https://nuvla.io/ui/apps?apps-store-tab=allapps&apps-store-modules-search=nginx");
  await delay(1000);

  await page.pause();
  // NGINX
  await page.getByRole('link', { name: 'All Apps' }).click();
  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('nginx');
  await page.getByPlaceholder('Search...').click();
  await page.locator('#nuvla-ui-content > div.ui.fluid.container > div > div.ui.bottom.attached.segment.active.tab > div.ui.secondary.menu > div.left.menu > div > input[type="text"]').evaluate(e => e.style.border = '3px solid red');  

  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-app-nginx.png', scale: 'css' });
  
  await browser.close();
});
