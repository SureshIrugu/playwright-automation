import { Locator, Page } from "playwright";
import inventorydata from "../../data/users.json" assert { type: "json" };
import { expect } from "@playwright/test";

export class Inventory {
  readonly page: Page;
  readonly inventory: Locator;
  readonly addinventory: Locator;
  readonly instancename: Locator;
  readonly instdescription: Locator;
  readonly baseurl: Locator;
  readonly orchusername: Locator;
  readonly orchpassword: Locator;
  readonly create: Locator;
  readonly delete: Locator;
  readonly delconfirmation: Locator;
  readonly update: Locator;
  readonly save: Locator;
  readonly inventoryname: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventory = page.getByRole("button", { name: "Inventory" });
    this.addinventory = page.getByRole("button", {
      name: "Add Inventory Add Inventory",
    });
    this.instancename = page.getByLabel("Instance Name");
    this.instdescription = page.getByLabel("Instance Description");
    this.baseurl = page.getByLabel("Base URL");
    this.orchusername = page.getByLabel("Username");
    this.orchpassword = page.getByLabel("Password");
    this.create = page.getByRole("button", { name: "Create" });
    this.delete = page
      .getByRole("row", {
        name: "qa-instance Instance https://vsm.qa-syd-5.netlinkz.dev/vsm superAdmin update Delete an inventory",
      })
      .getByLabel("Delete an inventory");
    this.delconfirmation = page.getByRole("button", {
      name: "Delete",
      exact: true,
    });
    this.update = page
      .getByRole("row", { name: "qa-instance" })
      .getByLabel("Update");
    this.save = page.getByRole("button", { name: "Save" });
    this.inventoryname = page.getByPlaceholder("Search name..");
  }

  async createInstance() {
    //click inventory menu
    await this.inventory.click();
    try {
      await this.delete.click({ timeout: 2000 });
      await this.delconfirmation.click();
    } catch (error) {
      console.log("Creating a new instance");
    }
    //click add inventory button to create a instance
    await this.addinventory.click();
    //fill instnace name
    await this.instancename.fill(inventorydata.INSTANCENAME);
    //fill description
    await this.instdescription.fill(inventorydata.DESCRIPTION);
    //fill base url
    await this.baseurl.fill(inventorydata.BASEURL);
    //fill username
    await this.orchusername.fill(inventorydata.ORCHUSERNAME);
    //fill password
    await this.orchpassword.fill(inventorydata.ORCHPASSWORD);
    //click create button
    await this.create.click();
    await this.page.waitForTimeout(2000);
    //validate inventory created successfully
    await expect(
      this.page.getByText(inventorydata.INSTANCENAME, { exact: true })
    ).toBeVisible();
  }

  async updateInstance() {
    //click inventory menu
    await this.inventory.click();
    try {
      await this.update.click({ timeout: 2000 });
    } catch (error) {
      console.log("update instance");
    }
    //update description
    await this.instdescription.clear();
    await this.instdescription.fill(inventorydata.DESCRIPTION);
    //uodate base url
    await this.baseurl.clear();
    await this.baseurl.fill(inventorydata.BASEURL);
    //update username
    await this.orchusername.clear();
    await this.orchusername.fill(inventorydata.ORCHUSERNAME);
    //update password
    await this.orchpassword.clear();
    await this.orchpassword.fill(inventorydata.ORCHPASSWORD);
    //save successfully
    await this.save.click();
    await this.page.waitForTimeout(2000);
    //validate update successfully
    await expect(
      this.page.getByText(inventorydata.DESCRIPTION, { exact: true })
    ).toBeVisible();
  }

  async searchInventory() {
    //click inventory menu
    await this.inventory.click();
    //enter inventory name
    await this.inventoryname.fill(inventorydata.INSTANCENAME);
    //validate search instance name appears in table.
    await expect(
      this.page.getByText(inventorydata.INSTANCENAME, { exact: true })
    ).toBeVisible();
    await this.page.waitForTimeout(2000);
  }
}
