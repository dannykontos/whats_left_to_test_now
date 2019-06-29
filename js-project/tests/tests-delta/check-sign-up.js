var page = require('../../pages/pages-delta');
browser.ignoreSyncronization = true;

describe('Delta Homepage tests: ', function() {
    it('should navigate to flytap home page', function() {
        page.getDeltaHomePage();
        expect(browser.getTitle()).toEqual("Airline Tickets & Flights: Book Direct with Delta Air Lines - Official Site");
    });
    it('should click on "Submit" button without filling any fields and get an error', function() {
        page.submit();
        expect(page.getText()).toContain("To continue,please correct the");
    });
});

describe('Sign Up tests', function() {
    it('should navigate to flytap home page', function() {
        page.getDeltaHomePage();
        expect(browser.getTitle()).toEqual("Airline Tickets & Flights: Book Direct with Delta Air Lines - Official Site");
    });
    it('should click on sign up button', function() {
        page.clickSignUpBtn();
        expect(browser.getTitle()).toEqual("Join SkyMiles® Loyalty Program : Delta Air Lines");
    });
    it('should click Complete button (empty required fields) and display an error message', function() {
        page.clickCompleteBtn();
        expect(page.getErrorMessageOnSignUp()).toContain("correct the 19 items indicated.");
    });
});