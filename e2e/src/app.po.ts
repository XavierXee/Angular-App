import { browser, by, element } from 'protractor';

export class AppPage {

    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getHeadingText() {
        return element(by.css('page--title')).get() as Promise<string>;
    }

    getNavBarItemsNumber() {
        return element.all(by.css('navbar--items')).length as Promise<number>;
    }

    getFormInputsNumber() {
        return element.all(by.tagName('input')).length as Promise<number>;
    }
}
