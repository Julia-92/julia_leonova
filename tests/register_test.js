Feature('register');

const NEW_USER = {
    firstName: "Julia",
    lastName: "1",
    email: Date.now() + '@test.com',
    phone: "+380932849875",
    password: "eM8x3xTJ4vzVN"
}

Scenario('test something',  ({ I, homePage, registerPage }) => {
    I.openSore();
    homePage.clickMyAccountButton();
    homePage.clickMyRegisterLink();
    registerPage.verifyRegisterPageName();
    registerPage.fillNewUserForm(NEW_USER);
    registerPage.clickSubscribeLabel();
    registerPage.clickPrivacyPolicyRadio();
    registerPage.clickContinueButton();
    registerPage.verifyCreatedAccountPageName();
});
