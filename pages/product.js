const { I } = inject();

module.exports = {

  selectField: {xpath: '//div/a[.="--- Please Select ---"]'},
  colorField: {xpath: '(//ul[@class="sbOptions"]/li/a)[2]'},
  addToCartButton: {xpath: '//button[@id="button-cart"]'},
  priceInProductPageText: {xpath: '//div[@class="price"]/span'},

  clickSelectField() {
    I.click(this.selectField);
  },

  clickColor() {
    I.click(this.colorField);
  },

  clickAddToCartButton() {
    I.click(this.addToCartButton);
  },

  async grabPriceInProductPage() {
    const priceInProductPage = await I.grabTextFrom(this.priceInProductPageText);
    const numPriceInProductPage = +priceInProductPage.slice(1);
    return numPriceInProductPage;
  },

  async grabColorPrice() {
    const colorPrice = await I.grabTextFrom(this.colorField);
    const numcolorPrice = +colorPrice.replaceAll(/[^0-9\.]/g, "");
    return numcolorPrice;
  },
}