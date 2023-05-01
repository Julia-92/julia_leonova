let urls = new DataTable(["url"]);
urls.add([
  "http://opencart.qatestlab.net/index.php?route=product/product&product_id=45",]);
urls.add(["http://opencart.qatestlab.net/index.php?route=product/product&product_id=43",]);
urls.add(["http://opencart.qatestlab.net/index.php?route=product/product&product_id=73",]);

urlsArray = [
  "http://opencart.qatestlab.net/index.php?route=product/product&product_id=45",
  "http://opencart.qatestlab.net/index.php?route=product/product&product_id=43",
  "http://opencart.qatestlab.net/index.php?route=product/product&product_id=73",
];

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

Data(urlsFromFile).Scenario("buy product", async ({ I, current, homePage, checkoutPage, productPage }) => {
    I.amOnPage(current);
    homePage.clearCart();

    I.openCatNailClippersProduct();
    const priceInProductPage = await productPage.grabPriceInProductPage();
    const colorPriceInProductPage = await productPage.grabColorPrice();
    console.log(colorPriceInProductPage);

    await productPage.selectColorSize();
    await productPage.selectColorField();
    await productPage.selectColorSize();
    await productPage.selectSizeField();
    
    
    productPage.clickAddToCartButton();
    homePage.clickDropdownCartIcon();
    await homePage.checkDropDownCartText();
    //homePage.clickCheckout();
    //checkoutPage.fillBillingForm(USER);
    //checkoutPage.clickCountryToggle();

    //await checkoutPage.clickContinueButton();
    //const flatShippingRate = await checkoutPage.grabFlatShippingRate();
    //console.log(flatShippingRate);
    //const totalPrice = await checkoutPage.grabTotalPrice();
    //console.log(totalPrice);
    //checkoutPage.clickConfirmOrderButton();
    //homePage.verifyPage("Your order has been placed!");

    /*
    I.assertEqual(
      priceInProductPage + colorPriceInProductPage + flatShippingRate,
      totalPrice,
      "prices are not in match"
    );
    */
  },
);

After(async ({ I }) => {
  await I.signOut();
 });
