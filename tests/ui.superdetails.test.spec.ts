import { test, expect, APIRequestContext } from "@playwright/test";
import { CAL } from "./pageobjects/calculator-page";
import { Dashboard } from "./pageobjects/dashboard-page";

test("Test 1: Launching otivo retirement calculator successfully", async ({ page }) => {
  const cal  = new CAL(page);
  //launch application
  await cal.goto();
  //validate title 
  await cal.validatTitle();
});

test("Test 2: Super details filled and submitted successfully", async ({ page }) => {
  const cal  = new CAL(page);
  const dashboard = new Dashboard(page);
  await cal.goto();
  //fill the superdetails and click 
  await cal.enterSuperDetails();
  //validate successully updated and retirement calculator chart dashboard appears
  await dashboard.validateCalculatorChart();

});

test("Test 3:update age successfully", async ({ page }) => {
  const cal = new CAL(page);
  const dashboard = new Dashboard(page);
  await cal.goto();
  await cal.enterSuperDetails();
  //update dashboard age to view in retirement calculator dasboard.
  await cal.updateAge();

});

test("Test 4:validate income and assert graphs ", async ({ page }) => {
  const cal = new CAL(page);
  const dashboard = new Dashboard(page);
  await cal.goto();
  await cal.enterSuperDetails();
  //validate income graph and assert graph
  await dashboard.incomeGraphValidate();
  await dashboard.assertGraphValidate();

});

test("Test 5: Validate and display partner income and assert in dashboard ", async ({ page }) => {
  const cal = new CAL(page);
  const dashboard = new Dashboard(page);
  await cal.goto();
  await cal.enterPartnerDetails();
  //validate after submit partner details to view charts in dashboard chart.
  await dashboard.incomeGraphValidate();
});
