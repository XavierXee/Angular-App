import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Angular App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display Login Page', () => {
        page.navigateTo();
        setTimeout(() => {
            expect(page.getHeadingText()).toEqual('Login');
            // expect(page.getHeadingText()).toEqual(3);
        }, 10000);
    });

    it('should display NavBar with min 3 children', () => {
        page.navigateTo();
        setTimeout(() => {
            expect(page.getNavBarItemsNumber()).toBeGreaterThanOrEqual(3);
            // expect(page.getHeadingText()).toEqual(3);
        }, 10000);
    });

    it('should display NavBar with max 4 children', () => {
        page.navigateTo();
        setTimeout(() => {
            expect(page.getNavBarItemsNumber()).toBeLessThanOrEqual(4);
        }, 10000);
    });

    it('should display Login form with 2 inputs', () => {
        page.navigateTo();
        setTimeout(() => {
            expect(page.getFormInputsNumber()).toEqual(2);
        }, 10000);
    });

    afterEach(async () => {
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });

});
