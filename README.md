# amazon-paapi

[![npm version](https://badge.fury.io/js/amazon-paapi.svg)](https://badge.fury.io/js/amazon-paapi)
[![NPM](https://nodei.co/npm/amazon-paapi.png)](https://nodei.co/npm/amazon-paapi/)

Amazon Associate Product Advertising API for NodeJs. A PAAPI 5.0 Extension.

A **clean** wrapper for amazon's [NodeJs SDK.](https://webservices.amazon.com/paapi5/documentation/with-sdk.html#nodejs) Main purpose of this module is to jumpstart development with easy to understand and clean syntax inspired with the amazon [scratchpad](https://webservices.amazon.com/paapi5/scratchpad/index.html)-like operation.

[![Amazon Product API](https://d15ljbth6loks9.cloudfront.net/assets/logos/paapi5_documentation_logo.png)](https://webservices.amazon.com/paapi5/documentation/)

## Installation

```bash
npm install amazon-paapi --save
```

## Quickstart

```js
const amazonPaapi = require('amazon-paapi');

const commonParameters = {
  AccessKey: '<YOUR  ACCESS  KEY>',
  SecretKey: '<YOUR  SECRET  KEY>',
  PartnerTag: '<YOUR  PARTNER  TAG>', // yourtag-20
  PartnerType: 'Associates', // Default value is Associates.
  Marketplace: 'www.amazon.com', // Default value is US. Note: Host and Region are predetermined based on the marketplace value. There is no need for you to add Host and Region as soon as you specify the correct Marketplace value. If your region is not US or .com, please make sure you add the correct Marketplace value.
};

const requestParameters = {
  ASIN: 'B07H65KP63',
  Resources: [
    'ItemInfo.Title',
    'Offers.Listings.Price',
    'VariationSummary.VariationDimension',
  ],
};

/** Promise */
amazonPaapi
  .GetVariations(commonParameters, requestParameters)
  .then((data) => {
    // do something with the success response.
    console.log(data);
  })
  .catch((error) => {
    // catch an error.
    console.log(error);
  });
```

## Usage

```js
const amazonPaapi = require('amazon-paapi');

const commonParameters = {
  AccessKey: '<YOUR  ACCESS  KEY>',
  SecretKey: '<YOUR  SECRET  KEY>',
  PartnerTag: '<YOUR  PARTNER  TAG>', // yourtag-20
  PartnerType: 'Associates', // Default value is Associates.
  Marketplace: 'www.amazon.com', // Default value is US. Note: Host and Region are predetermined based on the marketplace value. There is no need for you to add Host and Region as soon as you specify the correct Marketplace value. If your region is not US or .com, please make sure you add the correct Marketplace value.
};
```

### [GetBrowseNodes](https://webservices.amazon.com/paapi5/documentation/getbrowsenodes.html)

Lookup information for a Browse Node. Please see sample script [here](https://github.com/jorgerosal/amazon-paapi/blob/master/sample/getBrowseNodes.js).

```js
const requestParameters = {
  BrowseNodeIds: ['3040', '3045'],
  LanguagesOfPreference: ['es_US'],
  Resources: ['BrowseNodes.Ancestor', 'BrowseNodes.Children'],
};

/** Promise */
amazonPaapi
  .GetBrowseNodes(commonParameters, requestParameters)
  .then((data) => {
    // do something with the success response.
    console.log(data);
  })
  .catch((error) => {
    // catch an error.
    console.log(error);
  });
```

### [GetItems](https://webservices.amazon.com/paapi5/documentation/get-items.html)

Lookup item information for an item. Please see sample script [here](https://github.com/jorgerosal/amazon-paapi/blob/master/sample/getItems.js).

> Note: This operation only supports ASIN as id Type. If you need to
> lookup using UPC or EAN, you can do so under `SearchItems` operation.

```js
const requestParameters = {
  ItemIds: ['B00X4WHP5E', 'B00ZV9RDKK'],
  ItemIdType: 'ASIN',
  Condition: 'New',
  Resources: [
    'Images.Primary.Medium',
    'ItemInfo.Title',
    'Offers.Listings.Price',
  ],
};

/** Promise */
amazonPaapi
  .GetItems(commonParameters, requestParameters)
  .then((data) => {
    // do something with the success response.
    console.log(data);
  })
  .catch((error) => {
    // catch an error.
    console.log(error);
  });
```

### [GetVariations](https://webservices.amazon.com/paapi5/documentation/get-variations.html)

Lookup information for variations. Please see sample script [here](https://github.com/jorgerosal/amazon-paapi/blob/master/sample/getVariations.js).

```js
const requestParameters = {
  ASIN: 'B07H65KP63',
  Resources: [
    'Images.Primary.Medium',
    'ItemInfo.Title',
    'Offers.Listings.Price',
    'VariationSummary.VariationDimension',
  ],
};

/** Promise */
amazonPaapi
  .GetVariations(commonParameters, requestParameters)
  .then((data) => {
    // do something with the success response.
    console.log(data);
  })
  .catch((error) => {
    // catch an error.
    console.log(error);
  });
```

### [SearchItems](https://webservices.amazon.com/paapi5/documentation/search-items.html)

Searches for items on Amazon. Please see sample script [here](https://github.com/jorgerosal/amazon-paapi/blob/master/sample/searchItems.js).

```js
const requestParameters = {
  Keywords: 'Harry Potter',
  SearchIndex: 'Books',
  ItemCount: 2,
  Resources: [
    'Images.Primary.Medium',
    'ItemInfo.Title',
    'Offers.Listings.Price',
  ],
};

/** Promise */
amazonPaapi
  .SearchItems(commonParameters, requestParameters)
  .then((data) => {
    // do something with the success response.
    console.log(data);
  })
  .catch((error) => {
    // catch an error.
    console.log(error);
  });
```

### [Common Request Parameters](https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html)

- **AccessKey** - An alphanumeric token that uniquely identifies you. For information about getting an Access Key, see [Register for Product Advertising API](https://webservices.amazon.com/paapi5/documentation/register-for-pa-api.html).
- **SecretKey** - A key that is used in conjunction with the Access Key to cryptographically sign an API request. To retrieve your Access Key or Secret Access Key, refer [Register for Product Advertising API](https://webservices.amazon.com/paapi5/documentation/register-for-pa-api.html).
- **PartnerTag** - An alphanumeric token that uniquely identifies a partner. In case of an associate, this token is the means by which Amazon identifies the Associate to credit for a sale. If the value for `PartnerType` is `Associate`, specify the `store ID` or `tracking ID` of a valid associate store from the requested marketplace as the value for `PartnerTag`. For example, If `store-20` and `store-21` are store id or tracking id of customer in United States and United Kingdom marketplaces respectively, then customer needs to pass `store-20` as `PartnerTag` in all PAAPI requests for United States marketplace and `store-21` as `PartnerTag` in all PAAPI requests for United Kingdom marketplace. To obtain an Partner Tag, see [Sign up as an Amazon Associate](https://webservices.amazon.com/paapi5/documentation/troubleshooting/sign-up-as-an-associate.html).
- **PartnerType** - The type of Amazon program. For more information on valid values, refer [PartnerType Parameter](https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html#partnertype).
- **Marketplace** - Default value is US. Note: Host and Region are predetermined based on the marketplace value. There's is no need for you to add Host and Region as soon as you specify correct Marketplace value. If your region is not US or .com, please make sure you add the correct Marketplace value.

### [V4.0 to V5.0 Mapping](%28https://webservices.amazon.com/paapi5/documentation/migration-guide/pa-api-40-to-50-mapping.html)

Due to major change from V4.0 to V5.0, most of the legacy application may not work properly since V4.0 is not supported anymore.

We're currently working on mapping some commonly used operations from the V4.0 and make it available soon to work with the V5.0.

In the mean time, please check amazon [documentation](https://webservices.amazon.com/paapi5/documentation/migration-guide/pa-api-40-to-50-mapping.html) on how to map.

### FAQ

- What are the available resources I can add in the parameter?
  _Please refer to this [page](https://webservices.amazon.com/paapi5/documentation/resources.html)._

- How can I do itemLookup using a UPC or EAN?
  _You can lookup using searchItems operation. Add your UPC or EAN under the keyword parameter. More details [here](https://webservices.amazon.com/paapi5/documentation/use-cases/search-with-external-identifiers.html)._

- What if I included an invalid ASIN value in ASIN array parameter?
  _You will get an error response but the result of the valid ASINs are still included in the response data. Please refer to the last portion of this [page](https://webservices.amazon.com/paapi5/documentation/troubleshooting/processing-of-errors.html)._

- Is the addCart Operation still supported in V5.0?
  _It is deprecated, But you can use [Add to Cart form](https://webservices.amazon.com/paapi5/documentation/add-to-cart-form.html) to integrate cart on your websites._

### Donation

If this somehow makes your job a bit easier, please consider dropping few bucks.
Your contribution allows me to spend more time improving features of this project.

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2N243HNZCXY7J&source=url)

### License

[MIT](https://github.com/jorgerosal/amazon-paapi/blob/master/LICENSE)
