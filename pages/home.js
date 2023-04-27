const { I } = inject();

module.exports = {
  myAccountButton: {xpath: '(//span[.="My Account"])'},
  myRegisterLink: {xpath: '(//a[.="Register"])'},
  submitButton: {xpath: '//input[@type="submit"]'},
  dropdownCartIcon: {xpath: '//button[@class="toggle"]'},
  checkoutLink: {xpath: '//a[@class="btn-primary btn-r"]'},
  guestCheckout: {xpath: '(//div[@class="radio"])[2]'},
  step1Continue: {xpath: '//input[@id="button-account"]'},

  removeItems: {xpath: '//i[@class="linearicons-trash"]'},

  clickGuestCheckout() {
    I.click(this.guestCheckout);
  },

  clickStep1Continue() {
    I.click(this.step1Continue);
  },

  verifyRegisterPageName() {
    I.see('Register Account');
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
  
}
