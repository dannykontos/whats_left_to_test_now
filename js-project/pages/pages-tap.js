//first test case
var DeltaHomePage = function() {
    var SignUp = element(by.xpath('//*[@id="anchor-menu"]/div/div[1]/ul[2]/li[3]/a'));
    var hereWeGoButton = element(by.id("sign-up btn btn-link d-none d-lg-block"));

    this.clickHereWeGo = function() {
        hereWeGoButton.click();
    };

    this.clickSignUp = function() {
        SignUp.click();
    };

    this.getTapHomePage = function() {
        browser.get('https://www.flytap.com');
    };

};

module.exports = new DeltaHomePage();