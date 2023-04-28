const { I } = inject();

module.exports = {
  
  firstNameField: {xpath: '//input[@name="firstname"]'},
  lastNameField: {xpath: '//input[@name="lastname"]'},
  addressField: {xpath: '//input[@name="address_1"]'},
  cityField: {xpath: '//input[@name="city"]'},
  postcodeField: {xpath: '//input[@name="postcode"]'},
  countryToggle: {xpath: '(//div/a[@class="sbSelector"])[1]'},
  chooseCountryLink: {xpath: '//li[.="Ukraine"]'},
  regionToggle: {xpath: '//div/a[contains(text(), "Please Select")]'},
  chooseRegionLink: {xpath: "//li/a[contains(text(),'Kharkivs')]"},
  step1Toggle: {xpath: '//a[@data-toggle="collapse"]'},
  continueButton: {xpath: '(//input[@value="Continue"])[last()]'},
  agree: {xpath: '//input[@name="agree"]'},
  confirmOrderButton: {xpath: '//input[@value="Confirm Order"]'},

 
  itemPriceText: {xpath: '(//tbody/tr/td)[last()]'},
  flatShippingRateText: {xpath: '(//tfoot/tr/td[@class="text-right"])[4]'},
  totalPriceText: {xpath: '(//tfoot/tr/td[@class="text-right"])[6]'},

   fillCheckoutForm2(checkout) {
    I.fillField(this.firstNameField, checkout.firstName);
    I.fillField(this.lastNameField, checkout.lastName); 
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

  clickContinueButton() {
    I.click(this.continueButton);
  },
  
  clickAgree() {
    I.click(this.agree);
  },

  clickConfirmOrderButton() {
    I.click(this.confirmOrderButton);
  },

  verifyOrderPageName() {
    I.see('Your order has been placed!');
  },

  async grabItemPrice() {
    const ItemPrice = await I.grabTextFrom(this.itemPriceText);
    const numItemPrice = +ItemPrice.slice(1);
    return numItemPrice;
  },
  
  async grabFlatShippingRate() {
    const FlatShippingRate = await I.grabTextFrom(this.flatShippingRateText);
    const numFlatShippingRate = +FlatShippingRate.slice(1);
    return numFlatShippingRate;
  },

  async grabTotalPrice() {
    const TotalPrice = await I.grabTextFrom(this.totalPriceText);
    const numTotalPrice = +TotalPrice.slice(1);
    return numTotalPrice;
  },

}
