// const amazonPaapi = require('amazon-paapi');
const amazonPaapi = require('../app.js')
const ck = require('ckey');


const commonParameters = { 
  'AccessKey'  : ck.AWS_ACCESS_KEY,
  'SecretKey'  : ck.AWS_SECRET_KEY,
  'PartnerTag' : ck.AWS_TAG, // yourtag-20
  'PartnerType': 'Associates', // Optional. Default value is Associates. 
  'Marketplace': 'www.amazon.com' // Optional. Default value is US.
}

const requestParameters = {
    'ItemIds'   : ['B00X4WHP5E', 'B00ZV9RDKK'], // array of ASIN ID. Maximum is 10.
    'ItemIdType': 'ASIN', // Optional. Default value is 'ASIN' and the only value available. If you wish to use UPC and other types please use searchItems.
    'Condition' : 'New', 
    'Resources' : [ /** Array of resources. For more details, refer: https://webservices.amazon.com/paapi5/documentation/get-items.html#resources-parameter */
        // 'Images.Primary.Medium', 
        'ItemInfo.Title',
        'Offers.Listings.Price'
        ]
    // CurrencyOfPreference : , //Optional properties...
    // LanguagesOfPreference : ,
    // Merchant : ,
    // OfferCount : ,
    // Properties : 
};

/** Promise */
amazonPaapi.GetItems(commonParameters, requestParameters)
    .then(data => {
        // do something with the success response.
        console.log(data);
    })
    .catch(error => {
        // catch an error.
        console.log(error)
    });
