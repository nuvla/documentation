import { test, expect } from '@playwright/test';
import { mockInfrastructureData, mockCredentialsData, mockCredentialDetail, mockLaunchDialogCheck, mockLaunchDialogJob } from './mockAppData';
import { login, setupUser, prepPage, mockLaunchDialogResponses, displayUsernameClara, cssStyles } from '../global-setup';

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
  await mockLaunchDialogResponses(page, mockInfrastructureData, mockCredentialsData, mockCredentialDetail, mockLaunchDialogCheck, mockLaunchDialogJob);
  await prepPage(page, baseURL)

  //*********
  // Start
  //*********

  // NGINX
  await page.goto("https://nuvla.io/ui/apps?apps-store-tab=allapps&apps-store-modules-search=nginx");
  await page.locator('#nuvla-ui-content > div.ui.fluid.container > div > div.ui.bottom.attached.segment.active.tab > div.ui.secondary.menu > div.left.menu > div > input[type="text"]').evaluate(e => e.style.border = '3px solid red');  
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-app-nginx.png', scale: 'css' });

  await page.getByRole('button', { name: 'deploy' }).click();
  await page.getByText('Swarm NuvlaEdge Mini Demo').click();
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-app-nginx-select-destination.png', scale: 'css' });

  await page.locator('a').filter({ hasText: 'EULA' }).nth(1).click();
  await page.getByText('I accept the End-User License Agreement').click();
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-app-nginx-accept-eula.png', scale: 'css' });

  await page.pause()
  
  await browser.close();
});
