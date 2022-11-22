import { test, expect } from '@playwright/test';
import { mockAppData } from './mockAppData';

test.use({
  viewport: {
    height: 1200,
    width: 1500,
  },
});

async function delay(ms = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('test', async ({ page }, { config }) => {
  await page.route('api/session**', async (route) => {
    const request = route.request();
    // Fetch original response.
    const response = await page.request.fetch(request);
    // Add a prefix to the title.
    let body = await response.json();
    if (request.method() === 'GET') {
      body.identifier = 'showing@nuvla-ui.io';
    } else if (request.method() === 'PUT') {
      body.resources[0].identifier = 'showing@nuvla-ui.io';
    }
    route.fulfill({
      // Pass all fields from the response.
      response,
      // Override response body.
      body: JSON.stringify(body),
      // Force content type to be html.
      headers: {
        ...response.headers(),
      },
    });
  });

  const { baseURL } = config.projects[0].use;
  // const browser = await chromium.launch();
  // const page = await browser.newPage();

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

  // await page.routeFromHAR('./network.har', { notFound: 'fallback' });
  await page.pause();
  await page.goto(baseURL);
  // hide re-frame-10x or local tests fail
  await page.evaluate(`window.localStorage.setItem('day8.re-frame-10x.show-panel', '"false"')`);
  await page.goto(baseURL);

  //////////
  // await page.goto('https://nuvla.io');
  await expect(page).toHaveURL('https://nuvla.io/ui/welcome');
  await page.getByRole('link', { name: 'apps' }).click();

  await expect(page).toHaveURL('https://nuvla.io/ui/apps');
  await page.pause();
  await page.waitForSelector('.ui.bordered.image', { state: 'visible' });

  await delay(3000);
  await page.screenshot({ fullPage: true, path: '../docs/assets/img/app-store.png', scale: 'css' });

  await page.getByText('Navigate Apps').click();

  await page.getByText('Add').click();
  await page.pause();
  await page.screenshot({
    clip: {
      x: 260,
      y: 390,
      width: 1000,
      height: 400,
    },
    path: '../docs/assets/img/add-new-project.png',
  });
});
