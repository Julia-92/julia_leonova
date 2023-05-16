const { I } = inject();

module.exports = {
  selectColorSizeField: { xpath: '(//div/a[.="--- Please Select ---"])[1]' },
  colorField: { xpath: '(//ul[@class="sbOptions"]/li/a)[2]' },
  addToCartButton: { xpath: '//button[@id="button-cart"]' },
  priceInProductPageText: { xpath: '//div[@class="price"]/span' },
  sizeField: { xpath: '(//div[@class="sbHolder"]/ul/li/a)[6]' },

  clickSelectColorSizeField() {
    I.click(this.selectColorField);
  },

  clickColor() {
    I.click(this.colorField);
  },

  clickSize() {
    I.click(this.sizeField);
  },

  clickAddToCartButton() {
    I.click(this.addToCartButton);
  },

  async grabPriceInProductPage() {
    if (await this.checkPriceInProductPageExist()) {
      const priceInProductPage = await I.grabTextFrom(this.priceInProductPageText);
      const numPriceInProductPage = +priceInProductPage.slice(1);
      return numPriceInProductPage;
    } else {
      return 0;
    };
  },

  async checkPriceInProductPageExist() {
    return await tryTo(() => I.seeElement(this.priceInProductPageText));
  },

  async grabColorPrice() {
    if (await this.checkColorSizeDropdownExist() && this.checkColorFieldExist()) {
    const colorPrice = await I.grabTextFrom(this.colorField);
    const numcolorPrice = +colorPrice.replaceAll(/[^0-9\.]/g, "");
    return numcolorPrice;
    } else {
      return 0;
    };
  },

  async grabSizePrice() {
    if (await this.checkSizeFieldExist()) {
      const sizePrice = await I.grabTextFrom(this.sizeField);
      const numSizePrice = +sizePrice.replaceAll(/[^0-9\.]/g, "");
      return numSizePrice;
    } else {
      return 0;
    };
  },

  async checkColorSizeDropdownExist() {
    return await tryTo(() => I.seeElement(this.selectColorSizeField));
  },

  async selectColorSize() {
    if (await this.checkColorSizeDropdownExist()) {
      I.click(this.selectColorSizeField);
    };
  },

  async checkColorFieldExist() {
    return await tryTo(() => I.seeElement(this.colorField));
  },

  async selectColorField() {
    if (await this.checkColorFieldExist()) {
      I.click(this.colorField);
    };
  },

  async checkSizeFieldExist() {
    return await tryTo(() => I.seeElement(this.sizeField));
  },

  async selectSizeField() {
    if (await this.checkSizeFieldExist()) {
      I.click(this.sizeField);
    };
  },
};
