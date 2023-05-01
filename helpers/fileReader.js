const fs = require('fs');
const PRODUCT_LINKS_FILE = './productLinks.txt';

module.exports = {
    readFileContent(){
       return fs.readFileSync(PRODUCT_LINKS_FILE, 'utf8').split(/\r?\n/);
    }
}