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

// Run `npm install` locally before executing following code with `node sampleGetBrowseNodesApi.js`

/**
 * This sample code snippet is for ProductAdvertisingAPI 5.0's GetBrowseNodes API
 * For more details, refer:
 * https://webservices.amazon.com/paapi5/documentation/getbrowsenodes.html
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

var getBrowseNodesRequest = new ProductAdvertisingAPIv1.GetBrowseNodesRequest();

/** Enter your partner tag (store/tracking id) and partner type */
getBrowseNodesRequest['PartnerTag'] = '<YOUR PARTNER TAG>';
getBrowseNodesRequest['PartnerType'] = 'Associates';

/** Specify browse node id(s) */
getBrowseNodesRequest['BrowseNodeIds'] = ['3040', '0', '3045'];

/** Specify the item count to be returned in search result */
/**
 * Specify the language code in which you want the information to be returned.
 * For more information and valid values for each locale, refer https://webservices.amazon.com/paapi5/documentation/locale-reference.html
 */
getBrowseNodesRequest['LanguagesOfPreference'] = ['es_US'];

/**
 * Choose resources you want from GetBrowseNodesResource enum
 * For more details, refer: https://webservices.amazon.com/paapi5/documentation/getbrowsenodes.html#resources-parameter
 */
getBrowseNodesRequest['Resources'] = ['BrowseNodes.Ancestor', 'BrowseNodes.Children'];

/**
 * Function to parse GetBrowseNodesResponse into an object with key as BrowseNodeId
 */
function parseResponse(browseNodesResponseList) {
  var mappedResponse = {};
  for (var i in browseNodesResponseList) {
    if (browseNodesResponseList.hasOwnProperty(i)) {
      mappedResponse[browseNodesResponseList[i]['Id']] = browseNodesResponseList[i];
    }
  }
  return mappedResponse;
}

function onSuccess(data) {
  console.log('API called successfully.');
  var getBrowseNodesResponse = ProductAdvertisingAPIv1.GetBrowseNodesResponse.constructFromObject(data);
  console.log('Complete Response: \n' + JSON.stringify(getBrowseNodesResponse, null, 1));
  if (getBrowseNodesResponse['BrowseNodesResult'] !== undefined) {
    console.log('Printing all browse node information in BrowseNodesResult:');
    var response_list = parseResponse(getBrowseNodesResponse['BrowseNodesResult']['BrowseNodes']);
    for (var i in getBrowseNodesRequest['BrowseNodeIds']) {
      if (getBrowseNodesRequest['BrowseNodeIds'].hasOwnProperty(i)) {
        var browseNodeId = getBrowseNodesRequest['BrowseNodeIds'][i];
        console.log('\nPrinting information about the browse node with Id: ' + browseNodeId);
        if (browseNodeId in response_list) {
          var browseNode = response_list[browseNodeId];
          if (browseNode !== undefined) {
            if (browseNode['Id'] !== undefined) {
              console.log('BrowseNode ID: ' + browseNode['Id']);
            }
            if (browseNode['DisplayName'] !== undefined) {
              console.log('DisplayName: ' + browseNode['DisplayName']);
            }
            if (browseNode['ContextFreeName'] !== undefined) {
              console.log('ContextFreeName: ' + browseNode['ContextFreeName']);
            }
          }
        } else {
          console.log('BrowseNode not found, check errors');
        }
      }
    }
  }
  if (getBrowseNodesResponse['Errors'] !== undefined) {
    console.log('\nErrors:');
    console.log('Complete Error Response: ' + JSON.stringify(getBrowseNodesResponse['Errors'], null, 1));
    console.log('Printing 1st Error:');
    var error_0 = getBrowseNodesResponse['Errors'][0];
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

api.getBrowseNodes(getBrowseNodesRequest).then(
  function(data) {
    onSuccess(data);
  },
  function(error) {
    onError(error);
  }
);
