const created_account = require("../pages/created_account");
const { verifyRegisterPageName } = require("../pages/register");
const register = require("../pages/register");

Feature('register');

const NEW_USER = {
    firstName: "Julia",
    lastName: "1",
    email: Date.now() + '@test.com',
    phone: "+380932849875",
    password: "eM8x3xTJ4vzVN",
    passwordConfirm: "eM8x3xTJ4vzVN",
}

Scenario('test something',  ({ I, homePage, registerPage, created_accountPage }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php');
    homePage.clickMyAccountButton();
    homePage.clickMyRegisterLink();
    registerPage.verifyRegisterPageName();
    registerPage.fillNewUserForm(NEW_USER);
    registerPage.clickSubscribeLabel();
    registerPage.clickontinueButton();
    registerPage.clickContinueButton();
    created_accountPage.verifyCreatedAccountPageName();
    pause();
});
