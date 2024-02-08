import { Locator, Page } from "playwright";
import inventorydata from "../../data/users.json" assert { type: "json" };
import playwright from "playwright";
import { expect } from "@playwright/test";

export class Usermanagement {
  readonly page: Page;
  readonly settings: Locator;
  readonly usermangement: Locator;
  readonly adduser: Locator;
  readonly firstname: Locator;
  readonly lastname: Locator;
  readonly email: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly selectrole: Locator;
  readonly selectcustrole: Locator;
  readonly selectpartnerrole: Locator;
  readonly role: Locator;
  readonly create: Locator;
  readonly deleteuser: Locator;
  readonly delconfirmation: Locator;
  readonly editoption: Locator;
  readonly resetcred: Locator;
  readonly save: Locator;
  readonly searchname: Locator;
  readonly deletecustomer: Locator;
  readonly deletepartner: Locator;

  constructor(page: Page) {
    this.page = page;
    this.settings = page.getByRole("button", { name: "Settings" });
    this.usermangement = page.getByRole("button", { name: "User Management" });
    this.adduser = page.getByRole("button", { name: "Add User Account" });
    this.firstname = page.getByPlaceholder("Please enter the First Name");
    this.lastname = page.getByPlaceholder("Please enter the Last Name");
    this.email = page.getByPlaceholder("Please enter the Email");
    this.username = page.getByPlaceholder("Please enter the Username");
    this.password = page.getByPlaceholder("Please enter the Password");
    this.role = page.locator(".css-19bb58m");
    this.selectrole = page.getByRole("option", { name: inventorydata.ROLE });
    this.selectcustrole = page.getByRole("option", {
      name: inventorydata.CUSTOMERROLE
    });
    this.selectpartnerrole = page.getByRole("option", {
      name: inventorydata.PARTNERROLE
    });
    this.create = page.getByRole("button", { name: "Create" });
    this.deleteuser = page
      .getByRole("row", { name: "Playwright" })
      .getByRole("button", { name: "Delete" });
    this.editoption = page
      .getByRole("row", { name: "Playwright" })
      .getByRole("button", { name: "Edit User" });
    this.resetcred = page
      .getByRole("row", { name: "Playwright" })
      .getByRole("button", { name: "Reset Credentials" });
    this.delconfirmation = page.getByRole("button", {
      name: "Delete Delete a User Account"
    });
    this.deletecustomer = page
      .getByRole("row", { name: inventorydata.CUSTOMERUSERNMAE })
      .getByRole("button", { name: "Delete" });
    this.deletepartner = page
      .getByRole("row", { name: inventorydata.PARTNERUSERNMAE })
      .getByRole("button", { name: "Delete" });
    this.save = page.getByRole("button", { name: "Save" });
    this.searchname = page.getByPlaceholder("Search name..");
  }
  async clickusermanagment() {
    await this.settings.click();
    await this.usermangement.click();
  }

  async createUser() {
    //click inventory menu
    await this.clickusermanagment();
    try {
      await this.deleteuser.click({ timeout: 2000 });
      await this.delconfirmation.click();
    } catch (error) {
      console.log("Creating a new superadmin user");
    }
    //click add user account button
    await this.adduser.click();
    //fill firstname
    await this.firstname.fill(inventorydata.FIRSTNAME);
    //fill lastname
    await this.lastname.fill(inventorydata.LASTNAME);
    //fill email asddress
    await this.email.fill(inventorydata.EMAIL);
    //fill username
    await this.username.fill(inventorydata.ACCOUNTUSERNAME);
    //fill password
    await this.password.fill(inventorydata.ACCOUNTPASSWORD);
    //select super admin role 'company select' not require
    await this.role.click();
    await this.selectrole.click();
    //click on create button to create a account
    await this.create.click();
    await this.page.waitForTimeout(2000);
    //validate user created successfully
    await expect(
      this.page.getByText(inventorydata.FIRSTNAME, { exact: true })
    ).toBeVisible();
  }

  async editUser() {
    //click inventory menu
    await this.clickusermanagment();
    try {
      await this.editoption.click({ timeout: 2000 });
    } catch (error) {
      console.log("Creating a new superadmin user");
    }
    //clear first name and fill data
    await this.firstname.clear();
    await this.firstname.fill(inventorydata.EDITFIRSTNAME);
    //clear last name and fill data
    await this.lastname.clear();
    await this.lastname.fill(inventorydata.EDITLASTNAME);
    //clear edit name and fill email
    await this.email.fill(inventorydata.EDITEMAIL);
    //click to save successfully
    await this.save.click();
    //validate firstname after successful save
    await expect(
      this.page.getByText(inventorydata.EDITFIRSTNAME, { exact: true })
    ).toBeVisible();
  }

  async resetcredentials() {
    //click inventory menu
    await this.clickusermanagment();
    try {
      await this.resetcred.click({ timeout: 2000 });
    } catch (error) {
      console.log("Creating a new superadmin user");
    }
    //update password.
    await this.password.fill(inventorydata.ACCOUNTPASSWORD);
    //click save to update
    await this.save.click();
    //validate firstname after successful save
    await expect(
      this.page.getByText(inventorydata.EDITFIRSTNAME, { exact: true })
    ).toBeVisible();
  }

  async createcustomeruser() {
    //click inventory menu
    await this.clickusermanagment();
    try {
      await this.deletecustomer.click({ timeout: 2000 });
      await this.delconfirmation.click();
    } catch (error) {
      console.log("Creating a new superadmin user");
    }
    //click add user account button
    await this.adduser.click();
    //fill firstname
    await this.firstname.fill(inventorydata.CUSTOMERFIRSTNAME);
    //fill lastname
    await this.lastname.fill(inventorydata.CUSTOMERLASTNAME);
    //fill email asddress
    await this.email.fill(inventorydata.CUSTOMEREMAIL);
    //fill username
    await this.username.fill(inventorydata.CUSTOMERUSERNMAE);
    //fill password
    await this.password.fill(inventorydata.CUSTOMERPASSWORD);
    //select super admin role 'company select' not require
    await this.role.click();
    await this.selectcustrole.click();
    //click on create button to create a account
    await this.create.click();
    await this.page.waitForTimeout(2000);
    //validate user created successfully
    await expect(
      this.page.getByText(inventorydata.CUSTOMERUSERNMAE, { exact: true })
    ).toBeVisible();
  }
  async createpartneruser() {
    //click inventory menu
    await this.clickusermanagment();
    try {
      await this.deletepartner.click({ timeout: 2000 });
      await this.delconfirmation.click();
    } catch (error) {
      console.log("Creating a new superadmin user");
    }
    //click add user account button
    await this.adduser.click();
    //fill firstname
    await this.firstname.fill(inventorydata.PARTNERFIRSTNAME);
    //fill lastname
    await this.lastname.fill(inventorydata.PARTNERLASTNAME);
    //fill email asddress
    await this.email.fill(inventorydata.PARTNEREMAIL);
    //fill username
    await this.username.fill(inventorydata.PARTNERUSERNMAE);
    //fill password
    await this.password.fill(inventorydata.PARTNERPASSWORD);
    //select super admin role 'company select' not require
    await this.role.click();
    await this.selectpartnerrole.click();
    //click on create button to create a account
    await this.create.click();
    await this.page.waitForTimeout(2000);
    //validate user created successfully
    await expect(
      this.page.getByText(inventorydata.PARTNERUSERNMAE, { exact: true })
    ).toBeVisible();
  }

  async search() {
    //click inventory menu
    await this.clickusermanagment();
    //search username
    await this.searchname.fill(inventorydata.ACCOUNTUSERNAME);
    //validate username
    await expect(
      this.page.getByText(inventorydata.ACCOUNTUSERNAME, { exact: true })
    ).toBeVisible();
  }
}
