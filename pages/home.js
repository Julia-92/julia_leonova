const { I } = inject();

module.exports = {
  myAccountButton: {xpath: '(//span[.="My Account"])'},
  myRegisterLink: {xpath: '(//a[.="Register"])'},
  
  clickMyAccountButton() {
    I.click(this.myAccountButton);
  },

  clickMyRegisterLink() {
    I.click(this.myRegisterLink);
  }
}
