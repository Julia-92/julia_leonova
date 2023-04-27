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

Scenario.only('buy product',  async ({ I, homePage, checkoutPage, productPage, checkPricesPage }) => {
   
    I.login(USER);
    homePage.clickDropdownCartIcon();
    let numOfElements = await I.grabNumberOfVisibleElements('//i[@class="linearicons-trash"]');
    if(numOfElements) {
        homePage.clickRemoveItems();
    };
    
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=74');
    productPage.clickSelectField();
    productPage.clickColor();
    productPage.clickAddToCartButton();
    homePage.clickDropdownCartIcon();
    homePage.clickCheckout();
    checkoutPage.fillCheckoutForm2(USER);
    checkoutPage.clickCountryToggle();
    checkoutPage.clickContinueButton();
    checkoutPage.clickContinueButton();
    checkoutPage.clickContinueButton();
    checkoutPage.clickContinueButton();
    checkoutPage.clickAgree();
    checkoutPage.clickContinueButton();
    await checkoutPage.grabPrice();
    await checkoutPage.grabItemPrice();
    await checkoutPage.grabFlatShippingRate();
    await checkoutPage.grabTotalPrice();
    await checkPricesPage.checkPrices();
    checkoutPage.clickConfirmOrderButton();
    I.see('Your order has been placed!');
    pause();
});




