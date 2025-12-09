/**
 * Copyright 2024 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

 /**
 * ProductAdvertisingAPI
 * https://webservices.amazon.com/paapi5/documentation/index.html
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorData', 'model/ItemsResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorData'), require('./ItemsResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.GetItemsResponse = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.ErrorData, root.ProductAdvertisingAPIv1.ItemsResult);
  }
}(this, function(ApiClient, ErrorData, ItemsResult) {
  'use strict';




  /**
   * The GetItemsResponse model module.
   * @module model/GetItemsResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetItemsResponse</code>.
   * @alias module:model/GetItemsResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetItemsResponse} obj Optional instance to populate.
   * @return {module:model/GetItemsResponse} The populated <code>GetItemsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Errors')) {
        obj['Errors'] = ApiClient.convertToType(data['Errors'], [ErrorData]);
      }
      if (data.hasOwnProperty('ItemsResult')) {
        obj['ItemsResult'] = ItemsResult.constructFromObject(data['ItemsResult']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ErrorData>} Errors
   */
  exports.prototype['Errors'] = undefined;
  /**
   * @member {module:model/ItemsResult} ItemsResult
   */
  exports.prototype['ItemsResult'] = undefined;



  return exports;
}));


