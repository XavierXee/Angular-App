import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Angular App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display Login Form', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Login');
    });

    afterEach(async () => {
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });

});
