// global-setup.js
const { chromium, expect } = require('@playwright/test');

const username = process.env.USER_NAME || process.env.UI_E2E_TEST_USERNAME;
const password = process.env.PASSWORD || process.env.UI_E2E_TEST_PASSWORD;

if (!username) {
  throw new Error('No username provided');
}

if (!password) {
  throw new Error('No password provided');
}

export default async (config) => {
  const { baseURL } = config.projects[0].use;

  const { page, browser } = await login(baseURL, config);
  await browser.close();
};

async function login(baseURL, config) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  // page.setExtraHTTPHeaders({
  //   'CF-Access-Client-Secret': process.env.CF_CLIENT_SECRET,
  //   'CF-Access-Client-Id': process.env.CF_CLIENT_ID,
  // });

  await page.goto(baseURL);
  // hide re-frame-10x or local tests fail
  // await page.evaluate(`window.localStorage.setItem('day8.re-frame-10x.show-panel', '"false"')`);
  await page.goto(baseURL);
  await page.getByText('login').click();

  await page.locator('input[name="username"]').click();

  await page.locator('input[name="username"]').fill(username);

  await page.locator('input[name="username"]').press('Tab');

  await page.locator('input[name="password"]').fill(password);

  await page.locator('input[name="password"]').press('Enter');

  await page.waitForURL(/ui\/welcome/);
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: config.projects[0].use.storageState });
  page.on('pageerror', (err) => {
    console.log(err.message);
  });
  return { page, browser };
}
