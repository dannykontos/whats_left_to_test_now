var DeltaHomePage = function() {
    // Home-page elements
    var signUp = element(by.className("sign-up btn btn-link d-none d-lg-block"));
    var submit = element(by.id("btn-book-submit"));
    var submitErrorMessage = element(by.id("correctionBar"));

    // Sign up page buttons
    var completeBtn = element(by.id("next"));
    var submitErrorMessageSignUp = element(by.className("toolTipErrorCount"));

    this.getErrorMessageOnSignUp = function() {
        return submitErrorMessageSignUp.getText();
    };

    this.clickCompleteBtn = function() {
        completeBtn.click();
    };

    this.clickDeltaSignUp = function() {
        SignUp.click();
    };

    this.getText = function() {
        return submitErrorMessage.getText();
    };

    this.clickHereWeGo = function() {
        hereWeGoButton.click();
    };

    this.submit = function() {
        submit.click();
    };

    this.clickSignUpBtn = function() {
        signUp.click();
    };

    this.getTapHomePage = function() {
        browser.get('https://www.flytap.com/en-ro/');
    };

    this.getDeltaHomePage = function() {
        browser.get('https://www.delta.com/');
    };

    this.getDeltaSignUpPage = function() {
        browser.get('https://www.delta.com/profile/enrolllanding.action');
    };
};

module.exports = new DeltaHomePage();