import { test, expect } from '@playwright/test';
import { login, setupUser, prepPage, username, displayUsernameAlice, highlightElement, setName, selectApp, startDeploymentGroup } from '../global-setup';

test.use({
  viewport: {
    height: 1200,
    width: 1500,
  },
});

async function delay(ms = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('edges static', async ({}, { config }) => {
  const { baseURL } = config.projects[0].use;

  const { page, browser } = await login(baseURL, config);
  await setupUser(page, displayUsernameAlice);
  await prepPage(page, baseURL);

  //*********
  // Start
  //*********

  // Edges page
  await page.goto("https://nuvla.io/ui/edges");
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/edges.png', scale: 'css' });

  // Select all NE
  let checkbox_el = '#nuvla-ui-content > div > div:nth-child(3) > div > div:nth-child(2) > div > table > thead > tr > th:nth-child(1)';
  await page.locator(checkbox_el).evaluate(e => e.style.border = '3px solid red');  
  await page.click(checkbox_el);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/edges-select-all-nuvlaedges.png', scale: 'css' });
  await page.locator(checkbox_el).evaluate(e => e.style.border = '0px solid red'); // reset red border

  // Bulk Deploy App
  let bulk_button_el = '#nuvla-ui-content > div > div:nth-child(3) > div > div.visible > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2)';
  await page.locator(bulk_button_el).evaluate(e => e.style.border = '3px solid red');  
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/edges-bulk-deploy-app.png', scale: 'css' });

  // Deploy
  await page.click(bulk_button_el);
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/dg-static-from-edges.png', scale: 'css' });

  await setName(page, 'dg-static-from-edges');
  
  await selectApp(page, 'dg-static-from-edges');

  await startDeploymentGroup(page, 'dg-static-from-edges');

  // // Start
  // let overview_tab_el = '#nuvla-ui-content > div > div > div.ui.fluid.container > div:nth-child(4) > div.ui.pointing.secondary.uix-tab-nav.menu > a:nth-child(1)';
  // await page.click(overview_tab_el);
  // let start_button_el = '#nuvla-ui-content > div > div > div.ui.fluid.container > div:nth-child(3) > div.ui.sticky > div > a.item.primary-menu-item'
  // await page.locator(start_button_el).evaluate(e => e.style.border = '3px solid red');
  // await page.screenshot({ fullPage: false, path: '../docs/assets/img/dg-static-highlight-start-button.png', scale: 'css' });
  // await page.locator(start_button_el).evaluate(e => e.style.border = '0px solid red');
  // await page.click(start_button_el);
  // await delay(1000);
  // await page.screenshot({ fullPage: false, path: '../docs/assets/img/dg-static-start.png', scale: 'css' });
  //
  // let confirmation_checkbox_el = 'body > div.ui.page.modals.dimmer.transition.visible.active > div > div.content > div > div.ui.error.message > div.content > div';
  // await page.click(confirmation_checkbox_el);
  // let modal_start_button_el = 'body > div.ui.page.modals.dimmer.transition.visible.active > div > div.actions > div > button';
  // await page.click(modal_start_button_el);
  // let modal_start_button_2_el = 'body > div.ui.page.modals.dimmer.transition.visible.active > div > div.actions > div > button.ui.active.negative.button';
  // await page.click(modal_start_button_2_el);

  // Deployment
  await delay(1000); // wait for the modal to disapear
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/dg-static-from-edges-started.png', scale: 'css' });
  
  await browser.close();
});

test('edges dynamic', async ({}, { config }) => {
  const { baseURL } = config.projects[0].use;

  const { page, browser } = await login(baseURL, config);
  await setupUser(page, displayUsernameAlice);
  await prepPage(page, baseURL)

  //*********
  // Start
  //*********

  // Edges page
  await page.goto("https://nuvla.io/ui/edges");
  await delay(1000);

  // Set filter
  await page.locator('#nuvla-ui-content > div > div.ui.stackable.mobile.reversed.grid > div.four.wide.column > div > div > div:nth-child(2) > div > button').evaluate(e => e.style.border = '3px solid red');  
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/dg-dynamic-highlight-filter-button.png', scale: 'css' });
  
  // Show filter modal
  await page.getByRole('button', { name: 'Filter' }).click();

  // set attribute
  let attribute_dropdown_el = 'body > div.ui.page.modals.dimmer.transition.visible.active > div > div.content > div:nth-child(1) > div.ui.large.label > div:nth-child(1) > input';
  await page.fill(attribute_dropdown_el,'tags');

  // set operation
  let operation_dropdown_el = 'body > div.ui.page.modals.dimmer.transition.visible.active > div > div.content > div:nth-child(1) > div.ui.large.label > div:nth-child(2) > input';
  await page.fill(operation_dropdown_el, 'Like');

  // set value
  let value_dropdown_el = 'body > div.ui.page.modals.dimmer.transition.visible.active > div > div.content > div:nth-child(1) > div.ui.large.label > div:nth-child(3) > input';
  await page.fill(value_dropdown_el, 'green');

  // validate filter
  await page.click('body > div.ui.page.modals.dimmer.transition.visible.active > div > div.content > div.ui.message > div.header > button');
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/dg-dynamic-filter-modal.png', scale: 'css' });

  // Done button (to close the modal)
  await page.click('body > div.ui.page.modals.dimmer.transition.visible.active > div > div.actions > button:nth-child(2)');
  await delay(1000);  
  
  // Deploy with dynamic filter
  let deploy_dynamic_button_el = '#nuvla-ui-content > div > div:nth-child(3) > div > div.visible > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(3)';
  await page.locator(deploy_dynamic_button_el).evaluate(e => e.style.border = '3px solid red');
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/edges-highlight-deploy-dynamic-button.png', scale: 'css' });
  await page.locator(deploy_dynamic_button_el).evaluate(e => e.style.border = '0px solid red');

  // Deploy
  await page.click(deploy_dynamic_button_el);
  await delay(1000);
  let filter_info_el = '#nuvla-ui-content > div > div > div.ui.fluid.container > div:nth-child(3) > div.ui.bottom.attached.segment.active.tab > div > div:nth-child(3) > div > div > div > div:nth-child(3) > div';
  await page.locator(filter_info_el).evaluate(e => e.style.border = '3px solid red');
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/dg-dynamic-from-edges.png', scale: 'css' });
  await page.locator(filter_info_el).evaluate(e => e.style.border = '0px solid red');

  await setName(page, 'dg-dynamic-from-edges', 'my new dynamic deployment group');
  
  await selectApp(page, 'dg-dynamic-from-edges');
  
  await startDeploymentGroup(page, 'dg-dynamic-from-edges');
  
  // Deployment
  await delay(1000); // wait for the modal to disapear
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/dg-dynamic-from-edges-started.png', scale: 'css' });
  
  // Recompute fleet (on the overview tab)
  let overview_tab_el = 'a:text("Overview")';
  await page.locator(overview_tab_el).click();
  await highlightElement(page, 'a:text("Recompute fleet")', false);
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/dg-dynamic-from-edges-highlight-recompute-fleet.png', scale: 'css' });

  await browser.close();
});
