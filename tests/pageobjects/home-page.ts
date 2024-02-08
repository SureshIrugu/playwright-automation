import { Locator, Page, expect } from "@playwright/test";
import { env } from "../../utils/env";
import { stringConstants } from "../../utils/appstring";

export class Home {
  readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByText("Neuro Management Portal");
  }

  async goto() {
    await this.page.goto(env.BASE_URL);
  }

  async validatTitle() {
    await expect(this.title).toBeVisible();
  }
  async language() {
    //select default language english
    await this.page.getByLabel(stringConstants.selectLanguage.en).click();
    await this.page.waitForTimeout(1000);
    //select Chinese language in Managment Portal
    await this.page.getByRole("option", { name: "Chinese" }).click();
    await this.page.getByLabel(stringConstants.selectLanguage.ch).isVisible();
    await this.page.getByLabel(stringConstants.selectLanguage.ch).click();
    await this.page.waitForTimeout(1000);
    //select Thai language in Managment Portal
    await this.page.getByRole("option", { name: "แบบไทย" }).click();
    await this.page.getByLabel(stringConstants.selectLanguage.th).isVisible();
    await this.page.waitForTimeout(2000);
  }
}
