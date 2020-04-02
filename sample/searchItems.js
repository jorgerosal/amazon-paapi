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
    'Keywords' : 'Harry Potter',
    'SearchIndex' : 'Books',
    'ItemCount' : 2,
    'Resource': ['Images.Primary.Medium', 'ItemInfo.Title', 'Offers.Listings.Price']
};

/** Promise */
amazonPaapi.SearchItems(commonParameters, requestParameters)
    .then(data => {
        // do something with the success response.
        console.log(data);
    })
    .catch(error => {
        // catch an error.
        console.log(error)
    });
