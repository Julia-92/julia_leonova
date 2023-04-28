const home = require("./pages/home");


const STORE_URL = "http://opencart.qatestlab.net/index.php";
const CAT_NAIL_CLIPPERS_URL = "http://opencart.qatestlab.net/index.php?route=product/product&product_id=74";

module.exports = function() {
const signInButton = {xpath: '//a[text()="Sign In"]'};
const emailField = {css: 'input#input-email'};
const passwordField = {xpath: '//input[@name="password"]'};
  
return actor({
    openSore() {
      this.amOnPage(STORE_URL);
    },

    openCatNailClippersProduct() {
      this.amOnPage(CAT_NAIL_CLIPPERS_URL);
    },

    login(user) {
      this.openSore();
      this.click(signInButton);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      home.clickSubmitButton();
      this.see("My Orders");
    }

  });
}
