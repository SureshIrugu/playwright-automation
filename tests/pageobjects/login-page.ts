import { Locator, Page, expect } from "@playwright/test";
import { env } from "../../utils/env";
import { Home } from "./home-page";
import playwright from "playwright";

export class Login {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly signIn: Locator;
  readonly logOut: Locator;
  readonly logoutConfirm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.signIn = page.getByRole("button", { name: "Login" });
    this.logOut = page.getByRole("button", { name: "Log Out" });
    this.logoutConfirm = page.getByRole("button", { name: "Logout" });
  }

  async goto() {
    await this.page.goto(env.BASE_URL);
  }

  async sigIn() {
    await this.username.fill(env.USER_NAME);
    await this.password.fill(env.PASSWORD);
    await this.signIn.click();
    await this.page.waitForTimeout(1000);
  }

  async logout() {
    await this.logOut.click();
    await this.logoutConfirm.click();
  }
}
