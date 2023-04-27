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

Scenario.only('buy product',  async ({ I, homePage }) => {
   
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
    
    homePage.clickContinueButton();
    homePage.clickContinueButton();
    homePage.clickContinueButton();
    //I.waitForVisible({xpath: '//label[@for="agree1"]'});
    homePage.clickContinueButton();
    homePage.clickAgree();
    homePage.clickContinueButton();

    const itemPrice = await I.grabTextFrom({xpath: '(//tbody/tr/td)[last()]'});
    const itemPriceNum = +itemPrice.slice(1);
    console.log(itemPriceNum);
    const flatShippingRate = await I.grabTextFrom({xpath: '(//tfoot/tr/td[@class="text-right"])[4]'});
    const flatShippingRateNum = +flatShippingRate.slice(1);
    console.log(flatShippingRateNum);
    const totalPrice = await I.grabTextFrom({xpath: '(//tfoot/tr/td[@class="text-right"])[6]'});
    const totalPriceNum = +totalPrice.slice(1);
    console.log(totalPriceNum);

    I.assertEqual(itemPriceNum+flatShippingRateNum, totalPriceNum, 'prices are not in match');
    homePage.clickConfirmOrderButton();
    I.see('Your order has been placed!');
    pause();
});


