# Product Advertising API 5.0 SDK for NodeJS

[![NPM](https://nodei.co/npm/paapi5-nodejs-sdk.svg?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/paapi5-nodejs-sdk/)

[![Version](https://badge.fury.io/js/paapi5-nodejs-sdk.svg)](http://badge.fury.io/js/paapi5-nodejs-sdk) [![npm](https://img.shields.io/npm/dt/paapi5-nodejs-sdk.svg)](https://www.npmjs.com/package/paapi5-nodejs-sdk)

This repository contains the official Product Advertising API 5.0 NodeJS SDK called **paapi5-nodejs-sdk** that allows you to access the [Product Advertising API](https://webservices.amazon.com/paapi5/documentation/index.html) from your NodeJS app.

## Installation

### For [Node.js](https://nodejs.org/)

The Product Advertising API NodeJS SDK can be installed via [npm](https://www.npmjs.com/package/paapi5-nodejs-sdk):
 
```shell
npm install paapi5-nodejs-sdk --save
```

You should now be able to `require('paapi5-nodejs-sdk')` in javascript files.

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

Simple example for [SearchItems](https://webservices.amazon.com/paapi5/documentation/search-items.html) to discover Amazon products with the keyword 'Harry Potter' in Books category:

```javascript
var ProductAdvertisingAPIv1 = require('paapi5-nodejs-sdk');

var defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;

// Specify your credentials here. These are used to create and sign the request.
defaultClient.accessKey = '<YOUR ACCESS KEY>';
defaultClient.secretKey = '<YOUR SECRET KEY>';

/**
 * PAAPI Host and Region to which you want to send request.
 * For more details refer: https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html#host-and-region
 */
defaultClient.host = 'webservices.amazon.com';
defaultClient.region = 'us-east-1';

var api = new ProductAdvertisingAPIv1.DefaultApi();

// Request Initialization

var searchItemsRequest = new ProductAdvertisingAPIv1.SearchItemsRequest();

/** Enter your partner tag (store/tracking id) and partner type */
searchItemsRequest['PartnerTag'] = '<YOUR PARTNER TAG>';
searchItemsRequest['PartnerType'] = 'Associates';

/** Specify Keywords */
searchItemsRequest['Keywords'] = 'Harry Potter';

/**
 * Specify the category in which search request is to be made
 * For more details, refer: https://webservices.amazon.com/paapi5/documentation/use-cases/organization-of-items-on-amazon/search-index.html
 */
searchItemsRequest['SearchIndex'] = 'Books';

/** Specify item count to be returned in search result */
searchItemsRequest['ItemCount'] = 2;

/**
 * Choose resources you want from SearchItemsResource enum
 * For more details, refer: https://webservices.amazon.com/paapi5/documentation/search-items.html#resources-parameter
 */
searchItemsRequest['Resources'] = ['Images.Primary.Medium', 'ItemInfo.Title', 'Offers.Listings.Price'];

function onSuccess(data) {
  console.log('API called successfully.');
  var searchItemsResponse = ProductAdvertisingAPIv1.SearchItemsResponse.constructFromObject(data);
  console.log('Complete Response: \n' + JSON.stringify(searchItemsResponse, null, 1));
  if (searchItemsResponse['SearchResult'] !== undefined) {
    console.log('Printing First Item Information in SearchResult:');
    var item_0 = searchItemsResponse['SearchResult']['Items'][0];
    if (item_0 !== undefined) {
      if (item_0['ASIN'] !== undefined) {
        console.log('ASIN: ' + item_0['ASIN']);
      }
      if (item_0['DetailPageURL'] !== undefined) {
        console.log('DetailPageURL: ' + item_0['DetailPageURL']);
      }
      if (
        item_0['ItemInfo'] !== undefined &&
        item_0['ItemInfo']['Title'] !== undefined &&
        item_0['ItemInfo']['Title']['DisplayValue'] !== undefined
      ) {
        console.log('Title: ' + item_0['ItemInfo']['Title']['DisplayValue']);
      }
      if (
        item_0['Offers'] !== undefined &&
        item_0['Offers']['Listings'] !== undefined &&
        item_0['Offers']['Listings'][0]['Price'] !== undefined &&
        item_0['Offers']['Listings'][0]['Price']['DisplayAmount'] !== undefined
      ) {
        console.log('Buying Price: ' + item_0['Offers']['Listings'][0]['Price']['DisplayAmount']);
      }
    }
  }
  if (searchItemsResponse['Errors'] !== undefined) {
    console.log('Errors:');
    console.log('Complete Error Response: ' + JSON.stringify(searchItemsResponse['Errors'], null, 1));
    console.log('Printing 1st Error:');
    var error_0 = searchItemsResponse['Errors'][0];
    console.log('Error Code: ' + error_0['Code']);
    console.log('Error Message: ' + error_0['Message']);
  }
}

function onError(error) {
  console.log('Error calling PA-API 5.0!');
  console.log('Printing Full Error Object:\n' + JSON.stringify(error, null, 1));
  console.log('Status Code: ' + error['status']);
  if (error['response'] !== undefined && error['response']['text'] !== undefined) {
    console.log('Error Object: ' + JSON.stringify(error['response']['text'], null, 1));
  }
}

api.searchItems(searchItemsRequest).then(
  function(data) {
    onSuccess(data);
  },
  function(error) {
    onError(error);
  }
);
```

Complete documentation, installation instructions, and examples are available [here](https://webservices.amazon.com/paapi5/documentation/index.html).

## License
This SDK is distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0), see LICENSE.txt and NOTICE.txt for more information.
