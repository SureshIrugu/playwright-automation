import { test as setup, expect } from "@playwright/test";
import { Login } from "./pageobjects/login-page";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  //* Start of authentication steps.
  const login = new Login(page);
  await login.goto();
  await login.sigIn();
  //* End of authentication steps.

  await page.context().storageState({ path: authFile });
});
