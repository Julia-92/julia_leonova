/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type registerPage = typeof import('./pages/register.js');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, registerPage: registerPage }
  interface Methods extends Playwright, ChaiWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
