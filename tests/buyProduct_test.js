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

const fileReader = require("../helpers/fileReader");
const urlsFromFile = fileReader.readFileContent();
console.log(urlsFromFile);

Feature("purchase");

Before(({ I }) => {
 I.login(USER);
});

Data(urlsFromFile).Scenario("buy product", async ({ I, current, checkoutPage, homePage, productPage }) => {
    I.amOnPage(current);
    homePage.clickDropdownCartIcon();
    await homePage.clearCart();

    const priceInProductPage = await productPage.grabPriceInProductPage();
    console.log(priceInProductPage);
    
    await productPage.selectColorSize();
    await productPage.selectColorField();
    await productPage.selectColorSize();
    const colorPriceInProductPage = await productPage.grabColorPrice();
    console.log(colorPriceInProductPage);
    await productPage.selectSizeField();
    const sizePriceInProductPage = await productPage.grabSizePrice();
    console.log(sizePriceInProductPage);
    
    productPage.clickAddToCartButton();
    homePage.clickDropdownCartIcon();

    if (!(await homePage.checkCheckoutLinkExist())) {
      throw new Error("Checkout Button doesn't exist"); 
    };
    
    I.click(homePage.checkoutLink);

    I.waitForElement(checkoutPage.continueButton);
    checkoutPage.fillBillingForm(USER);
    checkoutPage.clickCountryToggle();

    await checkoutPage.clickContinueButton();
    const flatShippingRate = await checkoutPage.grabFlatShippingRate();
    console.log(flatShippingRate);
    const totalPrice = await checkoutPage.grabTotalPrice();
    console.log(totalPrice);
    checkoutPage.clickConfirmOrderButton();
    homePage.verifyPage("Your order has been placed!");

    I.assertEqual(
      priceInProductPage + colorPriceInProductPage + sizePriceInProductPage + flatShippingRate,
      totalPrice,
      "prices are not in match"
    );
  },
);

After(async ({ I }) => {
  await I.signOut();
 });
