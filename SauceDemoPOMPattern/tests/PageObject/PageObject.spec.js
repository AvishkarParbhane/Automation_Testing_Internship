const { BaseClass } = require('../BaseClass/BaseClass.spec.js');

export class PageObject extends BaseClass{
    constructor(page, expect ) {
        super(page,expect);
        this.username = this.page.locator("xpath=//input[@id='user-name']");
        this.password = this.page.locator("xpath=//input[@id='password']");
        this.loginbutton = this.page.locator("xpath=//input[@id='login-button']");
        this.addtocartbutton = this.page.locator("xpath=//button[@name='add-to-cart-sauce-labs-backpack']");
        this.carticonbutton = this.page.locator("xpath=//a[@data-test='shopping-cart-link']");
        this.checkoutbutton = this.page.locator("xpath=//button[@id='checkout']");
        this.firstname = this.page.locator("xpath=//input[@id='first-name']");
        this.lastname = this.page.locator("xpath=//input[@id='last-name']");
        this.postalcode = this.page.locator("xpath=//input[@id='postal-code']");
        this.continuebutton = this.page.locator("xpath=//input[@id='continue']");
        this.finishbutton = this.page.locator("xpath=//button[@id='finish']");
        this.backhomebutton = this.page.locator("xpath=//button[@id='back-to-products']");
        

    }

}