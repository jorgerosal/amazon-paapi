/**
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

// Run `npm install` locally before executing following code with `node sampleGetVariationsApi.js`

/**
 * This sample code snippet is for ProductAdvertisingAPI 5.0's GetVariations API
 * For more details, refer:
 * https://webservices.amazon.com/paapi5/documentation/get-variations.html
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

var getVariationsRequest = new ProductAdvertisingAPIv1.GetVariationsRequest();

/** Enter your partner tag (store/tracking id) and partner type */
getVariationsRequest['PartnerTag'] = '<YOUR PARTNER TAG>';
getVariationsRequest['PartnerType'] = 'Associates';

/** Specify ASIN for which variations are desired */
getVariationsRequest['ASIN'] = 'B07H65KP63';

/**
 * Choose resources you want from GetVariationsResource enum
 * For more details, refer: https://webservices.amazon.com/paapi5/documentation/get-variations.html#resources-parameter
 */
getVariationsRequest['Resources'] = [
  'Images.Primary.Medium',
  'ItemInfo.Title',
  'Offers.Listings.Price',
  'VariationSummary.VariationDimension'
];

function onSuccess(data) {
  console.log('API called successfully.');
  var getVariationsResponse = ProductAdvertisingAPIv1.GetVariationsResponse.constructFromObject(data);
  console.log('Complete Response: \n' + JSON.stringify(getVariationsResponse, null, 1));
  if (getVariationsResponse['VariationsResult'] !== undefined) {
    //console.log('Complete VariationsResult: \n' + JSON.stringify(getVariationsResponse['VariationsResult'], null, 1));
    console.log('Printing Variation Summary:');
    if (
      getVariationsResponse['VariationsResult']['VariationSummary'] !== undefined &&
      getVariationsResponse['VariationsResult']['VariationSummary']['VariationCount'] !== undefined
    ) {
      console.log('VariationCount: ' + getVariationsResponse['VariationsResult']['VariationSummary']['VariationCount']);
    }
    console.log('Printing First Item Information in VariationsResult:');
    var item_0 = getVariationsResponse['VariationsResult']['Items'][0];
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
  if (getVariationsResponse['Errors'] !== undefined) {
    console.log('Errors:');
    console.log('Complete Error Response: ' + JSON.stringify(getVariationsResponse['Errors'], null, 1));
    console.log('Printing 1st Error:');
    var error_0 = getVariationsResponse['Errors'][0];
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

api.getVariations(getVariationsRequest).then(
  function(data) {
    onSuccess(data);
  },
  function(error) {
    onError(error);
  }
);
