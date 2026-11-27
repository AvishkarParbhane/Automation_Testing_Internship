export class BaseClass{
    constructor(page, expect ) {
        this.page= page;
        this.expect= expect;

    }
       
    async launchbrowserandgotourl(url){
       await this.page.goto(url);
    }

    async waitforsometime(time){
        await this.page.waitForTimeout(time);
    }

    async closebrowser(){
        await this.page.close();
    }
}