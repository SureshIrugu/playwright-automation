import { test, expect, APIRequestContext } from "@playwright/test";
import { Login } from "./pageobjects/login-page";
import { Overview } from "./pageobjects/overview-page";
import { Home } from "./pageobjects/home-page";

/*test cases inventory page */
test("overview instance page ", async ({ page }) => {
  const home = new Home(page);
  const overview = new Overview(page);
  await home.goto();
  await overview.instancefitler();
  await overview.validatewizards();
});

test("overview edge page ", async ({ page }) => {
  const home = new Home(page);
  const overview = new Overview(page);
  await home.goto();
  await overview.instancefitler();
  await overview.companyfilter();
  await overview.customerfilter();
  await overview.edgefilter();
});
