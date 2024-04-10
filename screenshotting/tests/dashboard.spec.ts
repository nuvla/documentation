import { test, expect } from '@playwright/test';
import { mockAppData } from './mockAppData';
import { login, setupUser, prepPage, username, displayUsernameClara } from '../global-setup';

test.use({
  viewport: {
    height: 800,
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
  await prepPage(page, baseURL)

  //*********
  // Start
  //*********

  await page.goto("https://nuvla.io/ui/dashboard");

  await page.locator('#nuvla-ui-content > div > div.ui.tiny.ten.statistics > div.ui.black.statistic.slight-up.nuvla-apps > div.value').evaluate(e => e.innerText = "47");
  await page.locator('#nuvla-ui-content > div > div.ui.tiny.ten.statistics > div.ui.black.statistic.slight-up.nuvla-deployments > div.value').evaluate(e => e.innerText = "2593");
  await page.locator('#nuvla-ui-content > div > div.ui.tiny.ten.statistics > div.ui.black.statistic.slight-up.nuvla-edges > div.value').evaluate(e => e.innerText = "1647");
  await page.locator('#nuvla-ui-content > div > div.ui.tiny.ten.statistics > div.ui.black.statistic.slight-up.nuvla-credentials > div.value').evaluate(e => e.innerText = "1781");
  
  // Deployments
  await page.locator('#nuvla-ui-content > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div > div.eight.wide.column > div > div:nth-child(1) > div.value').evaluate(e => e.innerText = "2593");
  await page.locator('#nuvla-ui-content > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div > div.eight.wide.column > div > div:nth-child(2) > div.value').evaluate(e => e.innerText = "2521");
  await page.locator('#nuvla-ui-content > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div > div.eight.wide.column > div > div:nth-child(3) > div.value').evaluate(e => e.innerText = "2");
  await page.locator('#nuvla-ui-content > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div > div.eight.wide.column > div > div:nth-child(4) > div.value').evaluate(e => e.innerText = "65");
  await page.locator('#nuvla-ui-content > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div > div.eight.wide.column > div > div:nth-child(5) > div.value').evaluate(e => e.innerText = "5");

  // NuvleEdges
  await page.locator('#nuvla-ui-content > div > div:nth-child(3) > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div.value').evaluate(e => e.innerText = "1647");
  await page.locator('#nuvla-ui-content > div > div:nth-child(3) > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.value').evaluate(e => e.innerText = "1594");
  await page.locator('#nuvla-ui-content > div > div:nth-child(3) > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div.value').evaluate(e => e.innerText = "52");
  await page.locator('#nuvla-ui-content > div > div:nth-child(3) > div > div > div:nth-child(2) > div > div > div > div:nth-child(4) > div.value').evaluate(e => e.innerText = "1");

  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-dashboard.png', scale: 'css' });

  await browser.close();
});
