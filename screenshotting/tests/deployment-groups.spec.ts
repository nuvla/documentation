import { test, expect } from '@playwright/test';
import { login, setupUser, prepPage, username, displayUsernameAlice, highlightElement, setName, selectApp } from '../global-setup';

test.use({
  viewport: {
    height: 1200,
    width: 1500,
  },
});

async function delay(ms = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('deployment groups', async ({}, { config }) => {
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
  await highlightElement(page, 'a:text("Deployment groups")');
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/deployments-highlight-groups.png', scale: 'css' });
  
  // Deploytment groups tab
  await page.goto("https://nuvla.io/ui/deployment-groups");
  await delay(1000);
  let add_button_el = 'a:text("Add")';
  await highlightElement(page, add_button_el);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/deployment-groups-page.png', scale: 'css' });

  // Create deployment group
  await page.click(add_button_el);
  await delay(1000);
  
  await setName(page, 'dg-dg');

  // Pick a NuvlaEdge
  await page.locator('button').nth(2).click();
  await page.getByPlaceholder('Search...').fill('NuvlaEdge Mini Demo');
  await page.getByRole('link', { name: 'select row 0 NuvlaEdge Mini Demo COMMISSIONED' }).click();
  await page.getByRole('button', { name: 'Add to deployment group' }).click();  

  await selectApp(page, 'dg-dg');
  
  await browser.close();
});
