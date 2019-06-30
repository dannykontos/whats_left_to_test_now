import { browser, by, element, protractor } from 'protractor';

export class DashboardPage {
  countOfFirstBannerElement = element.all(by.xpath('//*[@id="applicationNotificationContainer"]/div[1]/div[2]/a')).count();
  EC = protractor.ExpectedConditions;

  SignUp = element(by.xpath('//*[@id="anchor-menu"]/div/div[1]/ul[2]/li[3]/a'));
  DeltaSignUp = element(by.className("sign-up btn btn-link d-none d-lg-block"));

  clickDeltaSignUp() {
      this.DeltaSignUp.click();
  };

  clickSignUp() {
     this.SignUp.click();
  };

  getDeltaHomePagen() {
      browser.get('https://www.delta.com/');
  };

  getDeltaSignUpPage () {
      browser.get('https://www.delta.com/profile/enrolllanding.action');
  };

  closeFirstBanner() {
    this.countOfFirstBannerElement.then(function (size) {
      if (size > 0) {
        element(by.xpath('//*[@id="applicationNotificationContainer"]/div[1]/div[2]/a')).click();
      }
    });
  }

}