const { I } = inject();

module.exports = {

  selectField: {xpath: '//div/a[.="--- Please Select ---"]'},
  colorField: {xpath: '(//ul[@class="sbOptions"]/li/a)[2]'},
  addToCartButton: {xpath: '//button[@id="button-cart"]'},

  clickSelectField() {
    I.click(this.selectField);
  },

  clickColor() {
    I.click(this.colorField);
  },

  clickAddToCartButton() {
    I.click(this.addToCartButton);
  },
}
