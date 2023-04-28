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

Scenario.only('buy product',  async ({ I, homePage, checkoutPage, productPage }) => {
   
    I.login(USER);
    homePage.clickDropdownCartIcon();
    let removeProductIcon = await homePage.grabRemoveProductIcon();
    if(removeProductIcon) {
        homePage.clickRemoveItems();
    };
    
    I.openCatNailClippersProduct();
    productPage.clickSelectField();
    productPage.clickColor();
    productPage.clickAddToCartButton();
    homePage.clickDropdownCartIcon();
    homePage.clickCheckout();
    checkoutPage.fillCheckoutForm2(USER);
    checkoutPage.clickCountryToggle();

    for (let i = 0; i < 4; i++) {
        checkoutPage.clickContinueButton();
    };

    checkoutPage.clickAgree();
    checkoutPage.clickContinueButton();

    const itemPrice = await checkoutPage.grabItemPrice();
    console.log(itemPrice);
    const flatShippingRate = await checkoutPage.grabFlatShippingRate();
    console.log(flatShippingRate);
    const totalPrice = await checkoutPage.grabTotalPrice();
    console.log(totalPrice);
    I.assertEqual(itemPrice+flatShippingRate, totalPrice, 'prices are not in match');
    checkoutPage.clickConfirmOrderButton();
    checkoutPage.verifyOrderPageName();

    I.openCatNailClippersProduct();
    const priceInProductPage = await productPage.grabPriceInProductPage();
    const colorPriceInProductPage = await productPage.grabColorPrice();
    console.log(colorPriceInProductPage);
    I.assertEqual(priceInProductPage+colorPriceInProductPage, itemPrice, 'prices are not in match');
});




