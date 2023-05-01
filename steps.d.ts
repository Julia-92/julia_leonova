/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type registerPage = typeof import('./pages/register.js');
type checkoutPage = typeof import('./pages/checkout.js');
type productPage = typeof import('./pages/product.js');
type ChaiWrapper = import('codeceptjs-chai');
type HelperPage_helpers = import('./helpers/HelperPage_helpers.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, registerPage: registerPage, checkoutPage: checkoutPage, productPage: productPage }
  interface Methods extends Playwright, ChaiWrapper, HelperPage_helpers, REST {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper>, WithTranslation<HelperPage_helpers> {}
  namespace Translation {
    interface Actions {}
  }
}
