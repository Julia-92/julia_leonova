const { I } = inject();

module.exports = {
  firstNameField: { xpath: '//input[@name="firstname"]' },
  lastNameField: { xpath: '//input[@name="lastname"]' },
  addressField: { xpath: '//input[@name="address_1"]' },
  cityField: { xpath: '//input[@name="city"]' },
  postcodeField: { xpath: '//input[@name="postcode"]' },
  countryToggle: { xpath: '(//div/a[@class="sbSelector"])[1]' },
  chooseCountryLink: { xpath: '//li[.="Ukraine"]' },
  regionToggle: { xpath: '//div/a[contains(text(), "Please Select")]' },
  chooseRegionLink: { xpath: "//li/a[contains(text(),'Kharkivs')]" },
  step1Toggle: { xpath: '//a[@data-toggle="collapse"]' },
  continueButton: { xpath: '(//input[@value="Continue"])[last()]' },
  agree: { xpath: '//input[@name="agree"]' },
  confirmOrderButton: { xpath: '//input[@value="Confirm Order"]' },

  itemPriceText: { xpath: "(//tbody/tr/td)[last()]" },
  flatShippingRateText: { xpath: '(//tfoot/tr/td[@class="text-right"])[4]' },
  totalPriceText: { xpath: '(//tfoot/tr/td[@class="text-right"])[6]' },

  fillBillingForm(checkout) {
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

  clickAgree() {
    I.click(this.agree);
  },

  clickConfirmOrderButton() {
    I.click(this.confirmOrderButton);
  },

  // don`t need
  /*
  async grabItemPrice() {
    const ItemPrice = await I.grabTextFrom(this.itemPriceText);
    const numItemPrice = I.parsePrice(ItemPrice);
    return numItemPrice;
  },
  */

  async grabFlatShippingRate() {
    const flatShippingRate = await I.grabTextFrom(this.flatShippingRateText);
    const numFlatShippingRate = I.parsePrice(flatShippingRate);
    return numFlatShippingRate;
  },

  async grabTotalPrice() {
    const totalPrice = await I.grabTextFrom(this.totalPriceText);
    const numTotalPrice = I.parsePrice(totalPrice);
    return numTotalPrice;
  },

  async seeContinue() {
    return await tryTo(() =>I.seeElement(this.continueButton));
  },

  async checkAgreeExist() {
    return await tryTo(() => I.seeElement(this.agree));
  },

  //for
  async clickContinueButton() {
    for (let continueButtonExists = await this.seeContinue(); continueButtonExists; continueButtonExists = await this.seeContinue()) {
      if (await this.checkAgreeExist()) {
        I.click(this.agree);
      }
      I.click(this.continueButton);
      I.wait(1);
    };
  },

  //with true false
  /*
  async clickContinueButton() {
    let continueButtonExists = true;
    while (continueButtonExists) {
      if (await this.checkAgreeExist()) {
        I.click(this.agree);
        I.click(this.continueButton);
        I.wait(1);
      } else if (await this.seeContinue()) {
        I.click(this.continueButton);
        I.wait(1);
      } else {
        continueButtonExists = false;
      };
    };
  },
  */

  //while
  /*
  async clickContinueButton() {
    while (await this.seeContinue()) {
      if (await this.checkAgreeExist()) {
        I.click(this.agree);
      }
      I.click(this.continueButton);
      I.wait(1);
    };
  },
  */
};
