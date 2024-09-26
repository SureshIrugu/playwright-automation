import { Locator, Page, expect } from "@playwright/test";
import inventorydata from "../../data/users.json" assert { type: "json" };
import { env } from "../../utils/env";

export class CAL{

    readonly page: Page;
    readonly age: Locator;
    readonly salary: Locator;
    readonly superbalance: Locator;
    readonly ownhome: Locator;
    readonly selectitem: Locator;
    readonly nextbutton: Locator;
    readonly updateButton: Locator;
    readonly enablePartner: Locator;
    readonly partnerAge: Locator;
    readonly partnerSalary: Locator;
    readonly partnerSuper: Locator;
    

    
    constructor(page: Page) {
        this.page = page;
        //read age element 
        this.age = page.locator('[id="Retirement Calculator Age"]');
        //salar element
        this.salary = page.locator('[id="Retirement Calculator Income"]');
        //super balance 
        this.superbalance = page.locator('[id="Retirement Calculator Super Balance"]');
        //ownhome read element
        this.ownhome =  page.locator('[data-test="ownsHome"] [data-test="selected"]');
        //select item
        this.selectitem = page.locator('[data-test="ownsHome"] [data-test="items"] div');
        //Next button
        this.nextbutton = page.locator('[data-test="nextBtn"]');
        //update button
        this.updateButton = page.locator('[id="update-graph-data-button"]');
        //Partner check box enable
        this.enablePartner = page.locator('[data-test="showPartnerDetails"] label');
        //partner age element
        this.partnerAge = page.locator('[id="Retirement Calculator Partner Age"]');
        //partner salary
        this.partnerSalary = page.locator('[data-test="partnerIncome"]');
        //partner super
        this.partnerSuper = page.locator('[id="Retirement Calculator Partner Super Balance"]');
    }

    async goto() {
        await this.page.goto(env.BASE_URL);
        await this.page.setViewportSize({ width: 1920, height: 1080 }); 
      }

    // validate retirement calculator page title. 
    async validatTitle() {
        //validate page title after launch retirement Calculator
        await expect(this.page).toHaveTitle(inventorydata.TITLE);
      }

    //enter super details in the calculator form
    async enterSuperDetails(){
        //enter age detail in current age text box
        await this.age.fill(inventorydata.AGE);
        //enter salary detail in Current salary (before tax) box
        await this.salary.fill(inventorydata.SALARY);
        //enter super detail in Current super balance box
        await this.superbalance.fill(inventorydata.SUPER);
        //wait conditions 
        await this.page.waitForTimeout(1000);
        //select Do you own your home? 'yes' or 'no'. 
        await this.ownhome.click();
        //await this.page.click('div:has-text("Yes")');
        await this.selectitem.filter({ hasText: 'Yes' }).first().click();
        // click on Next button.
        await this.nextbutton.click();
    }

    //update age 
    async updateAge(){
        //wait for element to load.
        await this.page.waitForTimeout(2000);
        //claear the data
        await this.age.clear();
        //enter new age data into current age field
        await this.age.fill(inventorydata.NEWAGE);
        //click on update button
        await this.updateButton.click();
        //wait for element to appear in UI
        await this.age.waitFor({state:"attached"});
        //validate update age appear in super details frame
        await expect(this.age).toHaveValue(inventorydata.NEWAGE);
    }

//enter super details in the calculator form
 async enterPartnerDetails(){
    //enable partner check box 
    await this.enablePartner.first().click();
    //enter age detail in current age text box
    await this.age.fill(inventorydata.AGE);
    //enter parnter age detail
    await this.partnerAge.fill(inventorydata.PARTNERAGE);
    //enter salary detail in Current salary (before tax) box
    await this.salary.first().fill(inventorydata.SALARY);
    //enter partner salary details 
    await this.partnerSalary.nth(1).first().fill(inventorydata.PARTNERSALARY);
    //enter super detail in Current super balance box
    await this.superbalance.fill(inventorydata.SUPER);
    //wait conditions 
    await this.page.waitForTimeout(1000);
    //enter partner super balance details
    await this.partnerSuper.fill(inventorydata.PARTNERBALANCE);
    //select Do you own your home? 'yes' or 'no'. 
    await this.ownhome.click();
    //await this.page.click('div:has-text("Yes")');
    await this.selectitem.filter({ hasText: 'Yes' }).first().click();
    // click on Next button.
    await this.nextbutton.click();
}

}