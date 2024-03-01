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
  await delay(2000);
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

test('add project', async ({}, { config }) => {

  const { baseURL } = config.projects[0].use;

  const { page, browser } = await login(baseURL, config);
  await setupUser(page, displayUsernameClara);
  await mockAppResponse(page, mockNavigateAppsData);
  await prepPage(page, baseURL)

  //*********
  // Start
  //*********

  await page.goto("https://nuvla.io/ui/apps?apps-store-tab=navigate");
  await page.locator('#nuvla-ui-content > div.ui.fluid.container > div > div.ui.bottom.attached.segment.active.tab.uix-apps-navigator > div.ui.borderless.menu > a').evaluate(e => e.style.border = '3px solid red');  
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-add-project-button-highlighted.png', scale: 'css' });
  await page.getByText('Add').click();
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-add-project-modal.png', scale: 'css' });

  await page.goto("https://nuvla.io/ui/apps/New%20Project?subtype=project&apps-project-tab=details");
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-new-project-page.png', scale: 'css' });
  
  await browser.close();
});

test('add app', async ({}, { config }) => {

  const { baseURL } = config.projects[0].use;

  const { page, browser } = await login(baseURL, config);
  await setupUser(page, displayUsernameClara);
  await mockAppResponse(page, mockNavigateAppsData);
  await prepPage(page, baseURL)

  //*********
  // Start
  //*********

  await page.goto("https://nuvla.io/ui/apps/examples?apps-project-tab=overview");

  // highlight +add
  await page.locator('#nuvla-ui-content > div.dimmable > div.ui.fluid.container > div:nth-child(2) > div.ui.sticky > div > a:nth-child(1)').evaluate(e => e.style.border = '3px solid red');
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-add-app-button-highlighted.png', scale: 'css' });

  await page.getByText('Add').click();
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-add-app-modal.png', scale: 'css' });

  await page.goto("https://nuvla.io/ui/apps/examples/New%20Application?subtype=application");
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-new-app-page.png', scale: 'css' });
  
  await page.goto("https://nuvla.io/ui/apps/examples/New%20Application?subtype=application&apps-tab=details");
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-new-app-page-details.png', scale: 'css' });
  
  await page.goto("https://nuvla.io/ui/apps/examples/New%20Application?subtype=application&apps-tab=docker");
  await delay(2000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-new-app-page-docker.png', scale: 'css' });
  // highlight Private registries
  await page.locator('#nuvla-ui-content > div.dimmable > div.ui.fluid.container.uix-apps-details > div:nth-child(3) > div.ui.bottom.attached.segment.active.tab > div > div.accordion.ui.fluid.styled > div').evaluate(e => e.style.border = '3px solid red');  
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-new-app-page-docker-private-registries-highlight.png', scale: 'css' });

  // clear Private registries
  await page.locator('#nuvla-ui-content > div.dimmable > div.ui.fluid.container.uix-apps-details > div:nth-child(3) > div.ui.bottom.attached.segment.active.tab > div > div.accordion.ui.fluid.styled > div').evaluate(e => e.style.border = '');  
  await page.getByRole('heading', { name: 'Private registries 0' }).click();
  // highlight +
  await page.locator('#nuvla-ui-content > div.dimmable > div.ui.fluid.container.uix-apps-details > div:nth-child(3) > div.ui.bottom.attached.segment.active.tab > div > div.accordion.ui.fluid.styled > div.content.active > div:nth-child(3) > i').evaluate(e => e.style.border = '3px solid red');  
  await page.locator('#nuvla-ui-content > div.dimmable > div.ui.fluid.container.uix-apps-details > div:nth-child(3) > div.ui.bottom.attached.segment.active.tab > div > div.accordion.ui.fluid.styled > div.content.active > div:nth-child(3) > i').evaluate(e => e.style.padding = '0px 15px 20px 5px');  
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-new-app-page-docker-private-registries-add-highlight.png', scale: 'css' });

  // clear highlight +
  await page.locator('#nuvla-ui-content > div.dimmable > div.ui.fluid.container.uix-apps-details > div:nth-child(3) > div.ui.bottom.attached.segment.active.tab > div > div.accordion.ui.fluid.styled > div.content.active > div:nth-child(3) > i').evaluate(e => e.style.border = '');  
  await page.locator('#nuvla-ui-content > div.dimmable > div.ui.fluid.container.uix-apps-details > div:nth-child(3) > div.ui.bottom.attached.segment.active.tab > div > div.accordion.ui.fluid.styled > div.content.active > div:nth-child(3) > i').click();

  // Select both drop downs
  await page.locator('#nuvla-ui-content > div.dimmable > div.ui.fluid.container.uix-apps-details > div:nth-child(3) > div.ui.bottom.attached.segment.active.tab > div > div.accordion.ui.fluid.styled > div.content.active > div:nth-child(2) > table > tbody > tr > td:nth-child(1) > div').evaluate(e => e.style.border = '3px solid red');  
  await page.locator('#nuvla-ui-content > div.dimmable > div.ui.fluid.container.uix-apps-details > div:nth-child(3) > div.ui.bottom.attached.segment.active.tab > div > div.accordion.ui.fluid.styled > div.content.active > div:nth-child(2) > table > tbody > tr > td:nth-child(2) > div').evaluate(e => e.style.border = '3px solid red');
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-new-app-page-docker-private-registries-add.png', scale: 'css' });

  // Configuration
  await page.goto("https://nuvla.io/ui/apps/examples/New%20Application?subtype=application&apps-tab=configuration");
  await delay(2000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/nuvla-new-app-page-configuration.png', scale: 'css' });

  await browser.close();
});
