const { remote } = require('webdriverio');
const LoginPage = require('../pages/login.page');

let driver;

describe('Login Test', () => {
    before(async () => {
        driver = await remote({
            capabilities: { browserName: 'chrome' }
        });
    });

    it('Debe iniciar sesión correctamente', async () => {
        const loginPage = new LoginPage(driver);
        await driver.url('https://www.saucedemo.com/');
        await loginPage.enterUsername('testuser');
        await loginPage.enterPassword('securepassword');
        await loginPage.clickLogin();

        const currentUrl = await driver.getUrl();
        expect(currentUrl).toContain('inventory');
    });

    after(async () => {
        await driver.deleteSession();
    });
});