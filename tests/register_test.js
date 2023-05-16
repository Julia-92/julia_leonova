Feature('register');

const NEW_USER = {
    firstName: "Julia",
    lastName: "1",
    email: Date.now() + '@test.com',
    phone: "+380932849875",
    password: "eM8x3xTJ4vzVN"
}

Scenario.skip('test something',  ({ I, homePage, registerPage }) => {
    I.openSore();
    homePage.clickMyAccountButton();
    homePage.clickMyRegisterLink();
    homePage.verifyPage('Register Account');
    registerPage.fillNewUserForm(NEW_USER);
    registerPage.clickSubscribeLabel();
    registerPage.clickPrivacyPolicyRadio();
    registerPage.clickContinueButton();
    registerPage.verifyCreatedAccountPageName();
});
