const { I } = inject();

module.exports = {
  myAccountButton: { xpath: '(//span[.="My Account"])' },
  myRegisterLink: { xpath: '(//a[.="Register"])' },
  submitButton: { xpath: '//input[@type="submit"]' },
  dropdownCartIcon: { xpath: '//button[@class="toggle"]' },
  checkoutLink: { xpath: '//a[@class="btn-primary btn-r"]' },
  guestCheckout: { xpath: '(//div[@class="radio"])[2]' },
  step1Continue: { xpath: '//input[@id="button-account"]' },
  removeProductLocator: { xpath: '//i[@class="linearicons-trash"]' },
  dropDownCartText: { xpath: '//li/p[.="Your shopping cart is empty!"]' },

  clickGuestCheckout() {
    I.click(this.guestCheckout);
  },

  clickStep1Continue() {
    I.click(this.step1Continue);
  },

  verifyPage(expectedText) {
    I.see(expectedText);
  },

  clickMyAccountButton() {
    I.click(this.myAccountButton);
  },

  clickMyRegisterLink() {
    I.click(this.myRegisterLink);
  },

  clickSubmitButton() {
    I.click(this.submitButton);
  },

  clickDropdownCartIcon() {
    I.click(this.dropdownCartIcon);
  },

  clickCheckout() {
    I.click(this.checkoutLink);
  },

  clickStep1Toggle() {
    I.click(this.step1Toggle);
  },
  
// check items to remove (remove if dont`t use)
  async checkRemoveIconExist() {
    return await tryTo(() => I.seeElement(this.removeProductLocator));
  },

  async grabRemoveProductIcon() {
    return await tryTo(() => I.grabNumberOfVisibleElements(this.removeProductLocator));
  },

  async clearCart() {
    for (let removeProductIcon = await this.checkRemoveIconExist(); removeProductIcon; removeProductIcon = await this.checkRemoveIconExist()) {
      I.click(this.removeProductLocator);
    };
    I.wait(1);
  },
};
