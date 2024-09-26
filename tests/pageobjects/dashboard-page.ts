import { Locator, Page, expect } from "@playwright/test";
import inventorydata from "../../data/users.json" assert { type: "json" };
import { env } from "../../utils/env";

export class Dashboard {
  readonly page: Page;
  readonly chartAppear: Locator;
  readonly incomeTab: Locator;
  readonly assetsTab: Locator;
  readonly age: Locator;

  constructor(page: Page) {
    this.page = page;
    this.chartAppear = page.locator('[Id="cfs-calculator-charts"]');
    this.incomeTab = page.locator('[data-test="incomeBtn"]');
    this.assetsTab = page.locator('[data-test="assetsBtn"]');
    this.age = page.locator('[id="Retirement Calculator Age"]');
  }

  //validate Calculator chart appearance
  async validateCalculatorChart() {
    //wait for element to load in the page.
    await this.chartAppear.waitFor({ state: "attached" });
    //assertion the chart appearance.
    await expect(this.chartAppear).toBeVisible();
  }

  //validate income graph appearance x an y labels
  async incomeGraphValidate() {
    //click on Income tab
    await this.incomeTab.click();
    //wait for graph load
    await this.chartAppear.waitFor({ state: "attached" });
    //validate chart display with IncomeAssetsCreated with Highcharts
    await expect(this.chartAppear).toContainText(inventorydata.CHARTLAUNCH);
  }

  //validate assert graph appearance x and y labels
  async assertGraphValidate() {
    //click on assert tab
    await this.assetsTab.click();
    //wait for graph load
    await this.chartAppear.waitFor({ state: "attached" });
    //validate y = Balance
    await expect(this.chartAppear).toContainText(inventorydata.CHARTLAUNCH);
  }
}
