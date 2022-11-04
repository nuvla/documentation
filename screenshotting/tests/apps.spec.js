import { test, expect, chromium } from '@playwright/test';

test.use({
  viewport: {
    height: 944,
    width: 1916,
  },
});

test('test', async ({}, { config }) => {
  const { baseURL } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.routeFromHAR('./network.har', { notFound: 'fallback' });
  await page.goto(baseURL);
  // hide re-frame-10x or local tests fail
  await page.evaluate(`window.localStorage.setItem('day8.re-frame-10x.show-panel', '"false"')`);
  await page.goto(baseURL);

  //////////
  // await page.goto('https://nuvla.io');
  await page.pause();
  await expect(page).toHaveURL('https://nuvla.io/ui/welcome');
  await page.getByRole('link', { name: 'apps' }).click();
  await expect(page).toHaveURL('https://nuvla.io/ui/apps');
  await page.waitForSelector('.ui.bordered.image', { state: 'visible' });
  await page.screenshot({ fullPage: true, path: './apps_fullpage.png' });
});
