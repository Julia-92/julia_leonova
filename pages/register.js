const { I } = inject();

module.exports = {
  firstNameField: {xpath: '//*[@id="input-firstname"]'},
  lastNameField: {xpath: '//*[@id="input-lastname"]'},
  emailField: {xpath: '//*[@id="input-email"]'},
  phoneField: {xpath: '//*[@id="input-telephone"]'},
  passwordField: {xpath: '//*[@id="input-password"]'},
  passwordConfirmField: {xpath: '//*[@id="input-confirm"]'},
  subscribeLabel: {xpath: '//*[@id="content"]/form/fieldset[3]/div/div/label[1]'},
  privacyPolicyRadio: {xpath: '//*[@id="content"]/form/div/div/input[1]'},
  continueButton: {xpath: '//*[@id="content"]/form/div/div/input[2]'},
  


  verifyRegisterPageName() {
    I.see('Register Account');
  },

  fillNewUserForm(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName); 
    I.fillField(this.emailField, user.email); 
    I.fillField(this.phoneField, user.phone); 
    I.fillField(this.passwordField, user.password); 
    I.fillField(this.passwordConfirmField, user.password); 
  },

  clickSubscribeLabel() {
    I.click(this.subscribeLabel);
  },

  clickPrivacyPolicyRadio() {
    I.click(this.privacyPolicyRadio);
  },

  clickContinueButton() {
    I.click(this.continueButton);
  },
  verifyCreatedAccountPageName() {
    I.see('Your Account Has Been Created!');
  }
}
