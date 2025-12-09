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
    define(['ApiClient', 'model/Price', 'model/VariationDimension'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Price'), require('./VariationDimension'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.VariationSummary = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.Price, root.ProductAdvertisingAPIv1.VariationDimension);
  }
}(this, function(ApiClient, Price, VariationDimension) {
  'use strict';




  /**
   * The VariationSummary model module.
   * @module model/VariationSummary
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VariationSummary</code>.
   * @alias module:model/VariationSummary
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>VariationSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariationSummary} obj Optional instance to populate.
   * @return {module:model/VariationSummary} The populated <code>VariationSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('PageCount')) {
        obj['PageCount'] = ApiClient.convertToType(data['PageCount'], 'Number');
      }
      if (data.hasOwnProperty('Price')) {
        obj['Price'] = Price.constructFromObject(data['Price']);
      }
      if (data.hasOwnProperty('VariationCount')) {
        obj['VariationCount'] = ApiClient.convertToType(data['VariationCount'], 'Number');
      }
      if (data.hasOwnProperty('VariationDimensions')) {
        obj['VariationDimensions'] = ApiClient.convertToType(data['VariationDimensions'], [VariationDimension]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} PageCount
   */
  exports.prototype['PageCount'] = undefined;
  /**
   * @member {module:model/Price} Price
   */
  exports.prototype['Price'] = undefined;
  /**
   * @member {Number} VariationCount
   */
  exports.prototype['VariationCount'] = undefined;
  /**
   * @member {Array.<module:model/VariationDimension>} VariationDimensions
   */
  exports.prototype['VariationDimensions'] = undefined;



  return exports;
}));


