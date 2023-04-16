const { I } = inject();

module.exports = {
  myAccountButton: {xpath: '//*[@id="top-links"]/ul/li/span/span'},
  myRegisterLink: {xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a'},
  
  clickMyAccountButton() {
    I.click(this.myAccountButton);
  },

  clickMyRegisterLink() {
    I.click(this.myRegisterLink);
  }
}
