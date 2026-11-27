const {test, expect} = require('@playwright/test');
import { PageAction } from '../PageAction/PageAction.spec.js';

require('../Screenshot.js');

test.describe('sauceDemo', () => {
    test('sauceDemo', async ({ page }) => {
        const pageActioref = new PageAction(page, expect);

        await pageActioref.launchbrowserandgotourl('https://www.saucedemo.com/');
        await pageActioref.enterusername('standard_user');
        await pageActioref.enterpassword('secret_sauce');
        await pageActioref.clickloginbutton();
        await pageActioref.waitforsometime(3000);
        await pageActioref.clickcarticonbutton();
        ///await pageActioref.waitforsometime(3000);
        await pageActioref.clickcheckoutbutton();
        await pageActioref.waitforsometime(3000);
        await pageActioref.enterfirstname('avishkar');
        await pageActioref.waitforsometime(3000);
        await pageActioref.enterlastname('parbhane');
        await pageActioref.waitforsometime(3000);
        await pageActioref.enterpostalcode('412211');
        await pageActioref.waitforsometime(3000);
        await pageActioref.clickcontinuebutton();
        await pageActioref.clickfinishbutton();
        await pageActioref.waitforsometime(3000);
        await pageActioref.clickbackhomebutton();


    });

});