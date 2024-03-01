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

export async function highlightElement(page, path, useFirst = true) {
  let e = await page.locator(path);
  if (useFirst === true) {
    e = e.first();
  } else {
    e = e.last();
  }
  await e.evaluate(e => e.style.border = '3px solid red');
}

async function delay(ms = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function setName(page, prefix, name = 'my new static deployment group') {
  await page.click('#nuvla-ui-content > div > div > div.ui.fluid.container > div:nth-child(3) > div.ui.bottom.attached.segment.active.tab > div > div:nth-child(1) > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > i');
  await page.fill('#nuvla-ui-content > div > div > div.ui.fluid.container > div:nth-child(3) > div.ui.bottom.attached.segment.active.tab > div > div:nth-child(1) > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > span > div > input[type="text"]', name);
  let set_name_button_el = '#nuvla-ui-content > div > div > div.ui.fluid.container > div:nth-child(3) > div.ui.bottom.attached.segment.active.tab > div > div:nth-child(1) > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > span > div > button'
  await page.locator(set_name_button_el).evaluate(e => e.style.border = '3px solid red');
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/' + prefix + '-set-name.png', scale: 'css' });
  await page.locator(set_name_button_el).evaluate(e => e.style.border = '0px solid red');
  await page.click(set_name_button_el);
  
  return;
}

export async function selectApp(page, prefix) {
  // Add apps
  let add_app_el = '#nuvla-ui-content > div > div > div.ui.fluid.container > div:nth-child(3) > div.ui.bottom.attached.segment.active.tab > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div > div';
  await page.locator(add_app_el).evaluate(e => e.style.border = '3px solid red');
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/' + prefix + '-from-edges-add-app.png', scale: 'css' });

  // App selection
  await page.click(add_app_el);
  await delay(1000);
  await page.locator('body > div.ui.page.modals.dimmer.transition.visible.active > div > div.content > div > div:nth-child(1) > div').evaluate(e => e.style.border = '3px solid red');
  let select_app_el = 'a[href^="/ui/apps/tho-docker-apps-project/speedtestplotter"] > button'
  await page.locator(select_app_el).evaluate(e => e.style.border = '3px solid red');
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/' + prefix + '-select-app.png', scale: 'css' });
  await page.locator(select_app_el).evaluate(e => e.style.border = '0px solid red');
  
  // Completed deployment group
  await page.click(select_app_el);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/dg-static-with-app.png', scale: 'css' });
  
  // Save
  let save_button_el = '#nuvla-ui-content > div > div > div.ui.fluid.container > div:nth-child(2) > div.ui.sticky > div > div:nth-child(1)';
  await page.locator(save_button_el).evaluate(e => e.style.border = '3px solid red');  
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/' + prefix + '-highlight-save-button.png', scale: 'css' });
  await page.locator(save_button_el).evaluate(e => e.style.border = '0px solid red');  

  await page.click(save_button_el);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/' + prefix + '-saved.png', scale: 'css' });

  // Apps tab
  let apps_tab_el = '#nuvla-ui-content > div > div > div.ui.fluid.container > div:nth-child(4) > div.ui.pointing.secondary.uix-tab-nav.menu > a:nth-child(2)';
  await page.locator(apps_tab_el).evaluate(e => e.style.border = '3px solid red');
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/' + prefix + '-highlight-apps-tab.png', scale: 'css' });
  await page.locator(apps_tab_el).evaluate(e => e.style.border = '0px solid red');
  await page.click(apps_tab_el);
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/' + prefix + '-apps-tab.png', scale: 'css' });
  
  return;
}

export async function startDeploymentGroup(page, prefix) {
  // Start
  let overview_tab_el = '#nuvla-ui-content > div > div > div.ui.fluid.container > div:nth-child(4) > div.ui.pointing.secondary.uix-tab-nav.menu > a:nth-child(1)';
  await page.click(overview_tab_el);
  let start_button_el = '#nuvla-ui-content > div > div > div.ui.fluid.container > div:nth-child(3) > div.ui.sticky > div > a.item.primary-menu-item'
  await page.locator(start_button_el).evaluate(e => e.style.border = '3px solid red');  
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/' + prefix + '-highlight-start-button.png', scale: 'css' });
  await page.locator(start_button_el).evaluate(e => e.style.border = '0px solid red');  
  await page.click(start_button_el);
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/' + prefix + '-start.png', scale: 'css' });
                                  
  let confirmation_checkbox_el = 'body > div.ui.page.modals.dimmer.transition.visible.active > div > div.content > div > div.ui.error.message > div.content > div';
  await page.click(confirmation_checkbox_el);
  let modal_start_button_el = 'body > div.ui.page.modals.dimmer.transition.visible.active > div > div.actions > div > button';
  await page.click(modal_start_button_el);
  let modal_start_button_2_el = 'body > div.ui.page.modals.dimmer.transition.visible.active > div > div.actions > div > button.ui.active.negative.button';
  await page.click(modal_start_button_2_el);
}