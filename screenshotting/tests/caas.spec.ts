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

test('clouds', async ({}, { config }) => {
  const { baseURL } = config.projects[0].use;

  const { page, browser } = await login(baseURL, config);
  await setupUser(page, displayUsernameAlice);
  await prepPage(page, baseURL)

  //*********
  // Start
  //*********

  await page.goto("https://nuvla.io/ui/clouds");
  await delay(1000);
  await page.locator('#nuvla-ui-content > div > div:nth-child(1) > div.ui.sticky > div > div.left.menu > a').evaluate(e => e.style.border = '3px solid red');  
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/dave-add-caas.png', scale: 'css' });

  await page.getByText('Add').click();
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/dave-add-caas-modal.png', scale: 'css' });

  await page.locator('a').filter({ hasText: 'Docker Swarm' }).click();
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/dave-add-caas-modal-details.png', scale: 'css' });

  await browser.close();
});
