const Helper = require('@codeceptjs/helper');

class HelperPage_helpers extends Helper {

  async parsePrice(string) {
  
    return parseFloat(string.replaceAll(/[^0-9\.]/g, ""));
  
  }

}

module.exports = HelperPage_helpers;
