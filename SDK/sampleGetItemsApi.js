/**
 * Copyright 2025 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

// Run `npm install` locally before executing following code with `node sampleGetItemsApi.js`

/**
 * This sample code snippet is for ProductAdvertisingAPI 5.0's GetItems API
 * For more details, refer:
 * https://webservices.amazon.com/paapi5/documentation/get-items.html
 */

var ProductAdvertisingAPIv1 = require('./src/index');

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

var getItemsRequest = new ProductAdvertisingAPIv1.GetItemsRequest();

/** Enter your partner tag (store/tracking id) and partner type */
getItemsRequest['PartnerTag'] = '<YOUR PARTNER TAG>';
getItemsRequest['PartnerType'] = 'Associates';

/** Enter the Item IDs for which item information is desired */
getItemsRequest['ItemIds'] =  ['B09BWFX1L6', 'B0CFPJYX7P'];

getItemsRequest['Condition'] = 'New';

/**
 * Choose resources you want from GetItemsResource enum
 * For more details, refer: https://webservices.amazon.com/paapi5/documentation/get-items.html#resources-parameter
 */
getItemsRequest['Resources'] = ['Images.Primary.Medium', 'ItemInfo.Title', 'OffersV2.Listings.Price'];

/**
 * Function to parse GetItemsResponse into an object with key as ASIN
 */
function parseResponse(itemsResponseList) {
  var mappedResponse = {};
  for (var i in itemsResponseList) {
    if (itemsResponseList.hasOwnProperty(i)) {
      mappedResponse[itemsResponseList[i]['ASIN']] = itemsResponseList[i];
    }
  }
  return mappedResponse;
}

function onSuccess(data) {
  console.log('API called successfully.');
  var getItemsResponse = ProductAdvertisingAPIv1.GetItemsResponse.constructFromObject(data);
  console.log('Complete Response: \n' + JSON.stringify(getItemsResponse, null, 1));
  if (getItemsResponse['ItemsResult'] !== undefined) {
    console.log('Printing All Item Information in ItemsResult:');
    var response_list = parseResponse(getItemsResponse['ItemsResult']['Items']);
    for (var i in getItemsRequest['ItemIds']) {
      if (getItemsRequest['ItemIds'].hasOwnProperty(i)) {
        var itemId = getItemsRequest['ItemIds'][i];
        console.log('\nPrinting information about the Item with Id: ' + itemId);
        if (itemId in response_list) {
          var item = response_list[itemId];
          if (item !== undefined) {
            if (item['ASIN'] !== undefined) {
              console.log('ASIN: ' + item['ASIN']);
            }
            if (item['DetailPageURL'] !== undefined) {
              console.log('DetailPageURL: ' + item['DetailPageURL']);
            }
            if (
              item['ItemInfo'] !== undefined &&
              item['ItemInfo']['Title'] !== undefined &&
              item['ItemInfo']['Title']['DisplayValue'] !== undefined
            ) {
              console.log('Title: ' + item['ItemInfo']['Title']['DisplayValue']);
            }
            if (
              item['OffersV2'] !== undefined &&
              item['OffersV2']['Listings'] !== undefined &&
              item['OffersV2']['Listings'][0] !== undefined &&
              item['OffersV2']['Listings'][0]['Price'] !== undefined &&
              item['OffersV2']['Listings'][0]['Price']['Money'] !== undefined &&
              item['OffersV2']['Listings'][0]['Price']['Money']['DisplayAmount'] !== undefined
            ) {
              console.log('Buying Price: ' + item['OffersV2']['Listings'][0]['Price']['Money']['DisplayAmount']);
            }
          }
        } else {
          console.log('Item not found, check errors');
        }
      }
    }
  }
  if (getItemsResponse['Errors'] !== undefined) {
    console.log('\nErrors:');
    console.log('Complete Error Response: ' + JSON.stringify(getItemsResponse['Errors'], null, 1));
    console.log('Printing 1st Error:');
    var error_0 = getItemsResponse['Errors'][0];
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

api.getItems(getItemsRequest).then(
  function(data) {
    onSuccess(data);
  },
  function(error) {
    onError(error);
  }
);
