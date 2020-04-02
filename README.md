# amazon-paapi

Amazon Associate Product Advertising API for NodeJs. A PAAPI 5.0 Extension.

This module is a wrapper for amazon's NodeJs SDK. Main purpose of this module is to jumpstart development with easy to understand and familiar syntax inspired with the amazon [scratchpad](https://webservices.amazon.com/paapi5/scratchpad/index.html)-like testing.

[![Amazon Product API](https://d15ljbth6loks9.cloudfront.net/assets/logos/paapi5_documentation_logo.png)](https://webservices.amazon.com/paapi5/documentation/)

## Installation
```bash
npm install amazon-paapi --save
```
## Usage
```js
const amazonPaapi = require('amazon-paapi');

const commonParameters = {
	'AccessKey' : '<YOUR  ACCESS  KEY>',
	'SecretKey' : '<YOUR  SECRET  KEY>',
	'PartnerTag' : '<YOUR  PARTNER  TAG>', // yourtag-20
	'PartnerType': 'Associates', // Optional. Default value is Associates.
	'Marketplace': 'www.amazon.com' // Optional. Default value is US.
};
```

### GetBrowseNodes
```js
const requestParameters = {
  'BrowseNodeIds' : ['3040', '3045'],
  'LanguagesOfPreference' : ['es_US'],
  'Resources' : ['BrowseNodes.Ancestor', 'BrowseNodes.Children']
};

/** Promise */
amazonPaapi.GetBrowseNodes(commonParameters, requestParameters)
    .then(data => {
        // do something with the success response.
        console.log(data);
    })
    .catch(error => {
        // catch an error.
        console.log(error)
    });
```


### GetItems
```js
const requestParameters = {
	'ItemIds' : ['B00X4WHP5E', 'B00ZV9RDKK'],
	'ItemIdType': 'ASIN', 
	'Condition' : 'New',
	'Resources' : [ 
		'Images.Primary.Medium',
		'ItemInfo.Title',
		'Offers.Listings.Price'
	]
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
```

###  GetVariations
```js
const requestParameters = {
    'ASIN' : 'B07H65KP63',
    'Resources' : [
        'Images.Primary.Medium',
        'ItemInfo.Title',
        'Offers.Listings.Price',
        'VariationSummary.VariationDimension'
      ]
};

/** Promise */
amazonPaapi.GetVariations(commonParameters, requestParameters)
    .then(data => {
        // do something with the success response.
        console.log(data);
    })
    .catch(error => {
        // catch an error.
        console.log(error)
    });
```

###  SearchItems
```js
const requestParameters = {
    'Keywords' : 'Harry Potter',
    'SearchIndex' : 'Books',
    'ItemCount' : 2,
    'Resource': [
	    'Images.Primary.Medium',
	    'ItemInfo.Title', 
	    'Offers.Listings.Price']
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
```
