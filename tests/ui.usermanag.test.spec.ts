import { test, expect, APIRequestContext } from "@playwright/test";
import { Usermanagement } from "./pageobjects/usermang-page";
import { Home } from "./pageobjects/home-page";

// test("create a super admin user successfully", async ({ page }) => {
//   const home = new Home(page);
//   const usermanagement = new Usermanagement(page);
//   await home.goto();
//   await usermanagement.createUser();
// });

// test("update existing super admin details", async ({ page }) => {
//   const home = new Home(page);
//   const usermanagement = new Usermanagement(page);
//   await home.goto();
//   await usermanagement.clickusermanagment();
//   await usermanagement.editUser();
// });
// test("reset successfully user password", async ({ page }) => {
//   const home = new Home(page);
//   const usermanagement = new Usermanagement(page);
//   await home.goto();
//   await usermanagement.clickusermanagment();
//   await usermanagement.resetcredentials();
// });
// test("search username successfully ", async ({ page }) => {
//   const home = new Home(page);
//   const usermanagement = new Usermanagement(page);
//   await home.goto();
//   await usermanagement.clickusermanagment();
//   await usermanagement.search();
// });

test("create a customer admin user successfully", async ({ page }) => {
  const home = new Home(page);
  const usermanagement = new Usermanagement(page);
  await home.goto();
  await usermanagement.createcustomeruser();
});

test("create a partner admin user successfully", async ({ page }) => {
  const home = new Home(page);
  const usermanagement = new Usermanagement(page);
  await home.goto();
  await usermanagement.createpartneruser();
});
