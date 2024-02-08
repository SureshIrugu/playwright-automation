import { Locator, Page } from "playwright";
import inventorydata from "../../data/users.json" assert { type: "json" };
import { expect } from "@playwright/test";

export class Overview {
  readonly page: Page;
  readonly overview: Locator;
  readonly instfilter: Locator;
  readonly instanceoption: Locator;
  readonly companyfilt: Locator;
  readonly companyoption: Locator;
  readonly customerfilt: Locator;
  readonly customeroption: Locator;
  readonly edgefilt: Locator;
  readonly edgeoption: Locator;
  readonly lincesecount: Locator;
  readonly licensedetails: Locator;
  readonly nueroavailability: Locator;
  readonly edgeavialability: Locator;
  readonly fixedclient: Locator;
  readonly mobileclient: Locator;

  constructor(page: Page) {
    this.page = page;
    this.overview = page.getByRole("button", { name: "Overview" });
    this.instfilter = page.getByLabel("Select Neuro Instance");
    this.instanceoption = page.getByRole("option", {
      name: inventorydata.INSTANCENAME
    });
    this.companyfilt = page.getByLabel("Select Company");
    this.companyoption = page.getByRole("option", {
      name: inventorydata.COMPANY
    });
    this.customerfilt = page.getByLabel("Select Customer");
    this.customeroption = page.getByRole("option", {
      name: inventorydata.CUSTOMER
    });
    this.edgefilt = page.getByLabel("Select Edge");
    this.edgeoption = page.getByRole("option", {
      name: inventorydata.EDGENAME
    });

    this.lincesecount = page.getByRole("heading", { name: "License Counts" });
    this.licensedetails = page.getByRole("heading", {
      name: "License Details"
    });
    this.nueroavailability = page.getByRole("heading", {
      name: "Neuro Availability (average 1 hrs)"
    });
    this.edgeavialability = page.getByRole("heading", {
      name: "Edge Availability (15 min)"
    });
    this.fixedclient = page.getByRole("heading", {
      name: "Fixed Client Connections"
    });
    this.mobileclient = page.getByRole("heading", {
      name: "Mobile Client Connections"
    });
  }

  async overviewmenu() {
    //overview page
    await this.overview.click();
  }

  async instancefitler() {
    this.overviewmenu();
    //select instance name from instnace filter
    await this.instfilter.click();
    await this.instanceoption.click();
  }

  async companyfilter() {
    //select comapny name
    await this.companyfilt.click();
    await this.companyoption.click();
  }

  async customerfilter() {
    //select comapny name
    await this.customerfilt.click();
    await this.customeroption.click();
  }

  async edgefilter() {
    //select comapny name
    await this.edgefilt.click();
    await this.edgeoption.click();
  }
  async validatewizards() {
    await expect(this.lincesecount).toBeVisible();
    await expect(this.licensedetails).toBeVisible();
    await expect(this.nueroavailability).toBeVisible();
    await expect(this.edgeavialability).toBeVisible();
    await expect(this.fixedclient).toBeVisible();
    await expect(this.mobileclient).toBeVisible();
  }
}
