import { PageObject } from "../PageObject/PageObject.spec";

export class PageAction extends PageObject{
    constructor(page, expect) {
        super(page, expect);
    }
    async enterusername(username)
    {
        await this.username.fill(username);
    }
    async enterpassword(password){
        await this.password.fill(password);
    }
    async clickloginbutton(){
        await this.loginbutton.click();
    }
    async clickaddtocartbutton(){
        await this.addtocartbutton.click();
    }
    async clickcarticonbutton(){
        await this.carticonbutton.click();
    }
    async clickcheckoutbutton(){
        await this.checkoutbutton.click();
    }
    async enterfirstname(firstname){
        await this.firstname.fill(firstname);
    }
    async enterlastname(lastname){
        await this.lastname.fill(lastname);
    }
    async enterpostalcode(postalcode){
        await this.postalcode.fill(postalcode);
    }
    async clickcontinuebutton(){
        await this.continuebutton.click();
    }
    async clickfinishbutton(){
        await this.finishbutton.click();
    }
    async clickbackhomebutton(){
        await this.backhomebutton.click();
    }

}