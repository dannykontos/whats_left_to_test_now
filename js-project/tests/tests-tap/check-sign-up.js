var page = require('../../pages/pages-tap');

describe('angularjs homepage todo list', function() {
  browser.ignoreSyncronization=true;
  
  it('should open flytap home page', function() {
    page.getTapHomePage();
    expect(browser.getTitle()).toEqual("FlyTAP - Official TAP Site | TAP Air Portugal | TAP Air Portugal");  
  });
  
  it('should click on "Here we go" button', function() {
    for(i=0;i<2;i++){
      page.clickHereWeGo();
    }
    
  it('should click on sign up button', function() {
      page.clickSignUp();
      expect(browser.getTitle()).toEqual("Sign up - Benefits | TAP Air Portugal");  
    });
  });