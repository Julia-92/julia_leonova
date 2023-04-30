const USER = {
  email: "yulialvju@gmail.com",
  password: "Use54321!",
  firstName: "Julia",
  lastName: "Leonova",
  phone: "+380932849875",
  address: "Yesenina, 11",
  city: "Kharkiv",
  postcode: "61072",
};

Feature("purchase");

Scenario.only(
  "buy product",
  async ({ I, homePage, checkoutPage, productPage }) => {
    I.login(USER);
    homePage.clickDropdownCartIcon();
    homePage.clearCart();
    
    
    I.openCatNailClippersProduct();
    const priceInProductPage = await productPage.grabPriceInProductPage();
    const colorPriceInProductPage = await productPage.grabColorPrice();
    console.log(colorPriceInProductPage);

    productPage.clickSelectField();
    productPage.clickColor();
    productPage.clickAddToCartButton();
    homePage.clickDropdownCartIcon();
    homePage.clickCheckout();
    checkoutPage.fillBillingForm(USER);
    checkoutPage.clickCountryToggle();

    /*
    while (I.seeElement(checkoutPage.continueButton) && !I.seeElement(checkoutPage.agree)) {
        I.click(checkoutPage.continueButton);
      }
      */


      await checkoutPage.clickContinueButton();

    //checkoutPage.clickAgree();
    //checkoutPage.clickContinueButton();
    //const itemPrice = await checkoutPage.grabItemPrice();
    //console.log(itemPrice);
    const flatShippingRate = await checkoutPage.grabFlatShippingRate();
    console.log(flatShippingRate);
    const totalPrice = await checkoutPage.grabTotalPrice();
    console.log(totalPrice);
    checkoutPage.clickConfirmOrderButton();
    homePage.verifyPage("Your order has been placed!");

    I.assertEqual(
      priceInProductPage + colorPriceInProductPage + flatShippingRate,
      totalPrice,
      "prices are not in match"
    );
  }
);
