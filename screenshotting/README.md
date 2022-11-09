# Automating Screenshots

Here you find playwright tests to automate updating screenshots.
This is currently a PoC and only creates two screenshots.

## Run it in Github Actions

1. In the repository, go to the Github actions page and choose the [Screenshotting workflow](https://github.com/nuvla/documentation/actions/workflows/screenshot.yml).
2. On the right side click on `Run workflow` and fill out username and password you want to use for signing into Nuvla UI (both are masked with *** in the workflow outputs, so save to use).
TODO: Save `UI_E2E_TEST_USERNAME` and `UI_E2E_TEST_PASSWORD` in Github repository secrets (will be used as default login if no username/password are provided).
3. Run the workflow.
4. If screenshots were taken successfully, a Pull Request is automatically created, showing you the changes. If you're happy with the new ones, merge into master, which starts the Github Pages deployment.

## Run it locally
(requires nodejs)

1. From root, `cd` into `screenshotting`
2. `npm install`
3. `npx playwright test`
