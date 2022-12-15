import { test, expect } from '@playwright/test';
import { mockAppData } from './mockAppData';
import { login } from '../global-setup';

test.use({
  viewport: {
    height: 1200,
    width: 1500,
  },
});

async function delay(ms = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('test', async ({ page, browser }, { config }) => {
  const { baseURL = 'https://nuvla.io' } = config.projects[0].use || {};

  // If running in headed breakpoints here (can then continue manually)
  // await page.pause()

  // Go to Nuvla.io
  await page.goto(baseURL);
  // hide re-frame-10x or local tests fail
  await page.evaluate(`window.localStorage.setItem('day8.re-frame-10x.show-panel', '"false"')`);
  await page.goto(baseURL);

  //*********
  // Start
  //*********

  // Welcome
  await page.goto(baseURL);

  // Do these at the end since we're logging out'
  // Sign-in page
  const defaultViewport = page.viewportSize();
  page.setViewportSize({
    height: 800,
    width: 1500,
  });
  const signInUrl = baseURL + '/ui/sign-in';
  await page.goto(signInUrl);
  await page.waitForURL(signInUrl);
  await page.screenshot({ fullPage: true, path: '../docs/assets/img/sign-in.png', scale: 'css' });

  // Sign-up page
  const signUpUrl = baseURL + '/ui/sign-up';
  await page.goto(signUpUrl);
  await page.waitForURL(signUpUrl);
  await delay(1000); // otherwise the left buttons don't all display
  await page.pause();
  await page.screenshot({ fullPage: true, path: '../docs/assets/img/sign-up.png', scale: 'css' });

  // Redirect to sign-in page after signing up, showing Success message:
  await page.goto(signUpUrl + '?message=validation-email-success-msg');
  await page.screenshot({ fullPage: true, path: '../docs/assets/img/sign-up-message.png', scale: 'css' });

  await browser.close();
});
