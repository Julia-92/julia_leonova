let urls = new DataTable(["url"]);
urls.add([
  "http://opencart.qatestlab.net/index.php?route=product/product&product_id=45",
]);
urls.add([
  "http://opencart.qatestlab.net/index.php?route=product/product&product_id=43",
]);
urls.add([
  "http://opencart.qatestlab.net/index.php?route=product/product&product_id=73",
]);

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
  //I.login(USER);
});

//Add to use file with urls: Data(urlsFromFile).Scenario and current to parameters

Scenario("buy product", async ({ I, homePage, checkoutPage, productPage }) => {
  //I.amOnPage(current);
  homePage.clearCart();

  I.openCatNailClippersProduct();
  const priceInProductPage = await productPage.grabPriceInProductPage();
  const colorPriceInProductPage = await productPage.grabColorPrice();
  console.log(colorPriceInProductPage);
  console.log(priceInProductPage);

  await productPage.selectColorSize();
  await productPage.selectColorField();
  await productPage.selectColorSize();
  await productPage.selectSizeField();

  productPage.clickAddToCartButton();
  homePage.clickDropdownCartIcon();
  const totalPriceInDropDownCart =
    await homePage.grabTotalPriceInDropDownCart();
  console.log(totalPriceInDropDownCart);
  const responce = await I.sendGetRequest("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=20200302&json");
  const usdRate = responce.data[0].rate;
  console.log('Price in UAH: ' + totalPriceInDropDownCart*usdRate);

  //await homePage.checkDropDownCartText();
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
});

After(async ({ I }) => {
  //await I.signOut();
});
