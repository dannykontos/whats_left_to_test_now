var page = require('../../pages/pages-delta');

describe('Homepage tests', function() {
  browser.ignoreSyncronization=true;
  
  it('should open flytap home page', function() {
    page.getDeltaHomePage();
    expect(browser.getTitle()).toEqual("Airline Tickets & Flights: Book Direct with Delta Air Lines - Official Site");  
  });
  
  it('should click on sign up button', function() {
      page.clickDeltaSignUp();
      expect(browser.getTitle()).toEqual("Join SkyMiles® Loyalty Program : Delta Air Lines");  
    });
  });

  describe('Sign Up tests', function() {
    browser.ignoreSyncronization=true;
    
    it('should open flytap home page', function() {
      page.getDeltaHomePage();
      expect(browser.getTitle()).toEqual("Airline Tickets & Flights: Book Direct with Delta Air Lines - Official Site");  
    });
    
    it('should click on sign up button', function() {
        page.clickDeltaSignUp();
        expect(browser.getTitle()).toEqual("Join SkyMiles® Loyalty Program : Delta Air Lines");  
      });
    });