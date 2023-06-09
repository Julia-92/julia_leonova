const home = require("./pages/home");

const STORE_URL = "http://opencart.qatestlab.net/index.php";
const CAT_NAIL_CLIPPERS_URL =
  "http://opencart.qatestlab.net/index.php?route=product/product&product_id=74";

module.exports = function () {
  const signInButton = { xpath: '//a[text()="Sign In"]' };
  const emailField = { css: "input#input-email" };
  const passwordField = { xpath: '//input[@name="password"]' };
  const logoutButton = { xpath: '//a[.="Sign Out"]' };

  return actor({
    openSore() {
      this.amOnPage(STORE_URL);
    },

    login(user) {
      this.openSore();
      this.click(signInButton);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      home.clickSubmitButton();
      this.see("My Orders");
    },

    //logout

    async checkSignOutText() {
      return await tryTo(() => this.seeElement(logoutButton));
    },

    async signOut() {
      if (await this.checkSignOutText()) {
        //I.click(this.logoutButton);
        this.click(logoutButton);
      }
    },
  });
};
