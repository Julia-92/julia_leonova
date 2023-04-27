const { I } = inject();

module.exports = {

  async checkPrices(I, checkoutPage) {
    const itemPrice = await checkoutPage.grabItemPrice();
    const itemPriceNum = +itemPrice.slice(1);
    console.log(itemPriceNum);
    const flatShippingRate = await checkoutPage.grabFlatShippingRate();
    const flatShippingRateNum = +flatShippingRate.slice(1);
    console.log(flatShippingRateNum);
    const totalPrice = await checkoutPage.grabTotalPrice();
    const totalPriceNum = +totalPrice.slice(1);
    console.log(totalPriceNum);

    I.assertEqual(itemPriceNum+flatShippingRateNum, totalPriceNum, 'prices are not in match');
  },
}
