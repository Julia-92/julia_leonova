const { I } = inject();

module.exports = {
  myAccountButton: {xpath: '(//span[.="My Account"])'},
  myRegisterLink: {xpath: '(//a[.="Register"])'},
  submitButton: {xpath: '//input[@type="submit"]'},
  selectField: {xpath: '(//div/a[.="--- Please Select ---"])[1]'},
  colorField: {xpath: '(//ul[@class="sbOptions"]/li/a)[2]'},
  addToCartButton: {xpath: '//button[@id="button-cart"]'},
  dropdownCartIcon: {xpath: '//button[@class="toggle"]'},
  checkoutLink: {xpath: '//a[@class="btn-primary btn-r"]'},
  guestCheckout: {xpath: '//label[@for="accountguest1"]'},
  step1Continue: {xpath: '//input[@id="button-account"]'},
  firstNameField: {xpath: '//input[@name="firstname"]'},
  lastNameField: {xpath: '//input[@name="lastname"]'},
  emailField: {xpath: '//input[@name="email"][@id="input-payment-email"]'},
  phoneField: {xpath: '//input[@name="telephone"]'},
  passwordField: {xpath: '//input[@name="password"][@id="input-payment-password"]'},
  passwordConfirmField: {xpath: '//input[@name="confirm"][@id="input-payment-confirm"]'},
  addressField: {xpath: '//input[@name="address_1"]'},
  cityField: {xpath: '//input[@name="city"]'},
  postcodeField: {xpath: '//input[@name="postcode"]'},
  countryToggle: {xpath: '(//div[@class="form-group required"]/div[@class="sbHolder"])[1]'},
  chooseCountryLink: {xpath: '//li[.="Ukraine"]'},
  regionToggle: {xpath: '(//div[@class="form-group required"]/div[@class="sbHolder"])[2]'},
  chooseRegionLink: {xpath: "//li/a[contains(text(),'Kharkivs')]"},
  
  
  removeItems: {xpath: '//i[@class="linearicons-trash"]'},

  
  clickMyAccountButton() {
    I.click(this.myAccountButton);
  },

  clickMyRegisterLink() {
    I.click(this.myRegisterLink);
  },

  clickSubmitButton() {
    I.click(this.submitButton);
  },

  clickSelectField() {
    I.click(this.selectField);
  },

  clickColor() {
    I.click(this.colorField);
  },

  clickAddToCartButton() {
    I.click(this.addToCartButton);
  },

  clickDropdownCartIcon() {
    I.click(this.dropdownCartIcon);
  },

  clickCheckout() {
    I.click(this.checkoutLink);
  },

  clickGuestCheckout() {
    I.click(this.guestCheckout);
  },

  clickStep1Continue() {
    I.click(this.step1Continue);
  },

  verifyRegisterPageName() {
    I.see('Register Account');
  },

  fillCheckoutForm2(checkout) {
    I.fillField(this.firstNameField, checkout.firstName);
    I.fillField(this.lastNameField, checkout.lastName); 
    I.fillField(this.emailField, checkout.email); 
    I.fillField(this.phoneField, checkout.phone); 
    I.fillField(this.passwordField, checkout.password); 
    I.fillField(this.passwordConfirmField, checkout.password); 
    I.fillField(this.addressField, checkout.address); 
    I.fillField(this.cityField, checkout.city); 
    I.fillField(this.postcodeField, checkout.postcode);
  },

  clickCountryToggle() {
    I.click(this.countryToggle);
  },

  chooseCountry() {
    I.click(this.chooseCountryLink);
  },

  clickRegionToggle() {
    I.click(this.regionToggle);
  },
  
  chooseRegion() {
    I.click(this.chooseRegionLink);
  },



  clickRemoveItems() {
    I.click(this.removeItems);
  },
}
