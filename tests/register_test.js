Feature('register');

const NEW_USER = {
    firstName: "Julia",
    lastName: "1",
    email: Date.now() + '@test.com',
    phone: "+380932849875",
    password: "eM8x3xTJ4vzVN"
}

Scenario('test something',  ({ I, homePage, registerPage }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php');
    homePage.clickMyAccountButton();
    homePage.clickMyRegisterLink();
    registerPage.verifyRegisterPageName();
    registerPage.fillNewUserForm(NEW_USER);
    registerPage.clickSubscribeLabel();
    registerPage.clickContinueButton();
    registerPage.clickPrivacyPolicyRadio();
    registerPage.verifyCreatedAccountPageName();
    pause();
});
