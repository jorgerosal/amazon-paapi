/**
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
    define(['ApiClient', 'model/Item', 'model/VariationSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Item'), require('./VariationSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.VariationsResult = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.Item, root.ProductAdvertisingAPIv1.VariationSummary);
  }
}(this, function(ApiClient, Item, VariationSummary) {
  'use strict';




  /**
   * The VariationsResult model module.
   * @module model/VariationsResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VariationsResult</code>.
   * @alias module:model/VariationsResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>VariationsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariationsResult} obj Optional instance to populate.
   * @return {module:model/VariationsResult} The populated <code>VariationsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Item]);
      }
      if (data.hasOwnProperty('VariationSummary')) {
        obj['VariationSummary'] = VariationSummary.constructFromObject(data['VariationSummary']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Item>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/VariationSummary} VariationSummary
   */
  exports.prototype['VariationSummary'] = undefined;



  return exports;
}));


