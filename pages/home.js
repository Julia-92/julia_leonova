const { I } = inject();

module.exports = {
  myAccountButton: { xpath: '(//span[.="My Account"])' },
  myRegisterLink: { xpath: '(//a[.="Register"])' },
  submitButton: { xpath: '//input[@type="submit"]' },
  dropdownCartIcon: { xpath: '//button[@class="toggle"]' },
  checkoutLink: { xpath: '//a[@class="btn-primary btn-r"]' },
  guestCheckout: { xpath: '(//div[@class="radio"])[2]' },
  step1Continue: { xpath: '//input[@id="button-account"]' },
  removeProductIcon: { xpath: '//i[@class="linearicons-trash"]' },

  removeItems: { xpath: '//i[@class="linearicons-trash"]' },
  dropDownCartText: { xpath: '//li/p[.="Your shopping cart is empty!"]' },
  logoutButton: { xpath: '//a[.="Sign Out"]' },
  

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

  clickRemoveItems() {
    I.click(this.removeItems);
  },

  async grabRemoveProductIcon() {
    return await I.grabNumberOfVisibleElements(this.removeProductIcon);
  },

  async clearCart() {
    let removeProductIcon = await this.grabRemoveProductIcon();
    if (removeProductIcon) {
      I.click(this.removeItems);
    }
  },

  async cartWithoutProduct() {
    return await I.grabNumberOfVisibleElements(this.dropDownCartText);
  },

  //can`t buy product
  async seeDropDownCartText() {
    return await tryTo(() =>I.seeElement(this.dropDownCartText));
  },

  async checkDropDownCartText() {
    if (await this.seeDropDownCartText()) {
      console.log("You can't buy this product!");
    }
  },

  //logout
  async seeSignOutText() {
    return await tryTo(() =>I.seeElement(this.logoutButton));
  },

  async signOut() {
    if (await this.seeSignOutText()) {
      I.click(this.logoutButton);
    }
  },

};
