import { test, expect, APIRequestContext } from "@playwright/test";
import { Login } from "./pageobjects/login-page";
import { Inventory } from "./pageobjects/inventory-page";
import { Home } from "./pageobjects/home-page";

/*test cases inventory page */
test("create a instance", async ({ page }) => {
  const home = new Home(page);
  const inventory = new Inventory(page);
  await home.goto();
  await inventory.createInstance();
});

test("update a instance", async ({ page }) => {
  const home = new Home(page);
  const inventory = new Inventory(page);
  await home.goto();
  await inventory.updateInstance();
});
test("search instance name successfully", async ({ page }) => {
  const home = new Home(page);
  const inventory = new Inventory(page);
  await home.goto();
  await inventory.searchInventory();
});
