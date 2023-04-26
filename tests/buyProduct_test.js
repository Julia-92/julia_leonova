const USER = {
    email: "yulialvju@gmail.com",
    password: "Use54321!",
    firstName: "Julia",
    lastName: "Leonova",
    phone: "+380932849875",
    address: "Yesenina, 11",
    city: "Kharkiv",
    postcode: "61072",
}


Feature('purchase');

Scenario.only('buy product',  ({ I, homePage }) => {
   
    I.login(USER);
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=74');
    //homePage.clickDropdownCartIcon();
    //homePage.clickRemoveItems();

    homePage.clickSelectField();
    homePage.clickColor();
    homePage.clickAddToCartButton();
    homePage.clickDropdownCartIcon();
    homePage.clickCheckout();
    //homePage.clickStep1Toggle();
    //I.waitForVisible({xpath: '//input[@id="button-account"]'});
    //homePage.clickGuestCheckout();
    //homePage.clickStep1Continue();
    homePage.fillCheckoutForm2(USER);
    homePage.clickCountryToggle();
    //homePage.chooseCountry();
    //homePage.clickRegionToggle();
    //homePage.chooseRegion();
    homePage.clickContinueButton();
    homePage.clickContinueButton();
    I.waitForVisible({xpath: '//input[@value="Continue"]'});
    homePage.clickContinueButton();
    //I.waitForVisible({xpath: '//label[@for="agree1"]'});
    homePage.clickAgree();
    homePage.clickContinueButton();
    //homePage.clickAgree();

    homePage.clickContinueButton();
   
    pause();
});