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

  const { baseURL } = config.projects[0].use;

  // Setup...
  await page.route('api/session**', async (route) => {
    const request = route.request();
    // Fetch original response.
    const response = await page.request.fetch(request);
    // Add a prefix to the title.
    let body = await response.json();
    if (request.method() === 'GET') {
      body.identifier = 'alice@nuvla.io';
    } else if (request.method() === 'PUT') {
//      body.resources[0].identifier = 'showing@nuvla-ui.io';
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

  // await page.pause();

  //*********
  // Start
  //*********

  // Welcome
  await page.goto(baseURL);
  await expect(page).toHaveURL('https://nuvla.io/ui/welcome');
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/home.png', scale: 'css' });

  // Do these at the end since we're logging out'
  // Sign-in page
  const defaultViewport = page.viewportSize();
  page.setViewportSize({
    height: 800,
    width: 1500,
  });
  await page.goto(baseURL);
  await page.getByText('logout').click();
  await page.waitForURL('https://nuvla.io/ui/sign-in');
  await page.screenshot({ fullPage: true, path: '../docs/assets/img/sign-in.png', scale: 'css' });

  // Sign-up page
  await page.goto(baseURL + "/ui/sign-up");
  await page.waitForURL('https://nuvla.io/ui/sign-up');
  await delay(1000); // otherwise the left buttons don't all display
  await page.pause();
  await page.screenshot({ fullPage: true, path: '../docs/assets/img/sign-up.png', scale: 'css' });
  //page.setViewportSize(defaultViewport);

  

  // // From this point, we have auto-generated code...
  // await page.goto(baseURL);
  // await expect(page).toHaveURL('https://nuvla.io/ui/welcome');
  // await page.getByRole('link', { name: 'apps' }).click();
  //
  // // Example...
  // await page.getByRole('link', { name: 'Nginx Nginx (pronounced "engine-x") is an open source reverse proxy server for HTTP, HTTPS, SMTP, POP3, and IMAP protocols, as well as a load balancer, HTTP cache, and a web server (orig… launch' }).click();
  // await page.waitForURL('https://nuvla.io/ui/apps/examples/nginx');
  // await page.locator('a:has-text("Pricing")').click();
  // // Don't forget this :-)
  // await page.screenshot({ fullPage: true, path: '../docs/assets/img/toto.png', scale: 'css' });
  //
  // // App Store...
  // await page.getByRole('link', { name: 'apps' }).click();
  // await expect(page).toHaveURL('https://nuvla.io/ui/apps');
  // await page.waitForSelector('.ui.bordered.image', { state: 'visible' });
  //
  // await delay(3000);
  // await page.screenshot({ fullPage: true, path: '../docs/assets/img/app-store.png', scale: 'css' });
  //
  // await page.getByText('Navigate Apps').click();
  //
  // await page.getByText('Add').click();
  // await page.pause();
  // await page.screenshot({
  //   clip: {
  //     x: 260,
  //     y: 390,
  //     width: 1000,
  //     height: 400,
  //   },
  //   path: '../docs/assets/img/add-new-project.png',
  // });
  
  // Start another screenshot...
  
});

