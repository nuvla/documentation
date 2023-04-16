import { test, expect } from '@playwright/test';
import { mockAppData } from './mockAppData';
import { login, prepPage } from '../global-setup';

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
  await prepPage(page, baseURL)

  //*********
  // Start
  //*********

  // Welcome (unauthenticated)
  await page.goto(baseURL);
  const defaultViewport = page.viewportSize();
  page.setViewportSize({
    height: 800,
    width: 1500,
  });
  await delay(1000);
  await page.screenshot({ fullPage: false, path: '../docs/assets/img/home-unauthenticated.png', scale: 'css' });

  // Sign-in page
  const signInUrl = baseURL + '/ui/sign-in';
  await page.goto(signInUrl);
  await delay(1000);
  await page.waitForURL(signInUrl);
  await page.screenshot({ fullPage: true, path: '../docs/assets/img/sign-in.png', scale: 'css' });

  // Sign-up page
  const signUpUrl = baseURL + '/ui/sign-up';
  await page.goto(signUpUrl);
  await page.waitForURL(signUpUrl);
  await delay(5000); // otherwise the left buttons don't all display
  await page.pause();
  await page.screenshot({ fullPage: true, path: '../docs/assets/img/sign-up.png', scale: 'css' });

  // Redirect to sign-in page after signing up, showing Success message:
  await page.goto(signUpUrl + '?message=validation-email-success-msg');
  await page.screenshot({ fullPage: true, path: '../docs/assets/img/sign-up-message.png', scale: 'css' });

  await browser.close();
});
