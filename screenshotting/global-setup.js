// global-setup.js
const { chromium, expect } = require('@playwright/test');

export const displayUsernameAlice = "alice@nuvla.io";
export const displayUsernameClara = "clara@nuvla.io";

export const username =
  process.env.USER_NAME !== 'null' && process.env.USER_NAME ? process.env.USER_NAME : process.env.UI_E2E_TEST_USERNAME;
const password =
  process.env.PASSWORD && process.env.PASSWORD !== 'null' ? process.env.PASSWORD : process.env.UI_E2E_TEST_PASSWORD;

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

export async function login(baseURL, config) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  // page.setExtraHTTPHeaders({
  //   'CF-Access-Client-Secret': process.env.CF_CLIENT_SECRET,
  //   'CF-Access-Client-Id': process.env.CF_CLIENT_ID,
  // });

  await page.goto(baseURL);
  // hide re-frame-10x or local tests fail
  await page.evaluate(`window.localStorage.setItem('day8.re-frame-10x.show-panel', '"false"')`);
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

export async function setupUser(page, username) {

  // Setup...
  await page.route('api/session**', async (route) => {
    const request = route.request();
    // Fetch original response.
    const response = await page.request.fetch(request);
    // Add a prefix to the title.
    let body = await response.json();
    if (request.method() === 'GET') {
      body.identifier = username;
    } else if (request.method() === 'PUT' && body.resources[0]?.identifier) {
      body.resources[0].identifier = username;
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
}

export async function mockAppResponse(page, mockedData) {
  await mockResponse(page, mockedData, 'api/module');
}

export async function mockLaunchDialogResponses(page, infrastructureServicesData, credentialsData, credentialDetailData, checkData, jobData) {
  await mockResponse(page, infrastructureServicesData, 'api/infrastructure-service');
  await mockResponse(page, credentialsData, 'api/credential');
  await mockResponse(page, credentialDetailData, 'api/credential/166a6bad-e74d-4013-b865-68c18ea431cf');
  await mockResponse(page, checkData, 'api/credential/166a6bad-e74d-4013-b865-68c18ea431cf/check');
  await mockResponse(page, jobData, 'api/job/347e5e65-5ec0-48c9-b589-9353aa1e24fa')
}

async function mockResponse(page, data, resourcePath) {

  await page.route(resourcePath, (route) => {
    let payload = route.request().postDataJSON();
    route.fulfill({
      status: 200,
      body: JSON.stringify(data),
    });
  });
}

export async function prepPage(page, url){
  // If running in headed breakpoints here (can then continue manually)
  // Go to Nuvla.io
  await page.goto(url);
  // hide re-frame-10x or local tests fail
  await page.evaluate(`window.localStorage.setItem('day8.re-frame-10x.show-panel', '"false"')`);
  await page.goto(url);
}

// CSS styling
//export const cssStyles = { 'inputHighlight': '3px solid red' };
export const cssStyles = '3px solid red';
