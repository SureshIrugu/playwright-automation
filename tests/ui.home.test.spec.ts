import { test, expect, APIRequestContext } from "@playwright/test";
import { Home } from "./pageobjects/home-page";

test("Select languages in home page", async ({ page }) => {
  const home = new Home(page);
  await home.goto();
  await home.language();
});
