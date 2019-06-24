//first test case
var DeltaHomePage = function() {
  var SignUp = element(by.xpath('//*[@id="anchor-menu"]/div/div[1]/ul[2]/li[3]/a')); 
  var DeltaSignUp = element(by.className("sign-up btn btn-link d-none d-lg-block"));

  this.clickDeltaSignUp = function() {
    DeltaSignUp.click();
  };

  this.clickSignUp = function() {
    SignUp.click();
  };

  this.getTapHomePage = function() {
    browser.get('https://www.flytap.com');
  };

  this.getDeltaHomePage = function() {
    browser.get('https://www.delta.com/');
  };

  this.getDeltaSignUpPage = function() {
    browser.get('https://www.delta.com/profile/enrolllanding.action');
  };
  
};

module.exports = new DeltaHomePage();