const { I } = inject();

module.exports = {

  verifyCreatedAccountPageName() {
    I.see('Your Account Has Been Created!');
  }
}
