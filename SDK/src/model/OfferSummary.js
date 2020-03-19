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
    define(['ApiClient', 'model/OfferCondition', 'model/OfferPrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OfferCondition'), require('./OfferPrice'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.OfferSummary = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.OfferCondition, root.ProductAdvertisingAPIv1.OfferPrice);
  }
}(this, function(ApiClient, OfferCondition, OfferPrice) {
  'use strict';




  /**
   * The OfferSummary model module.
   * @module model/OfferSummary
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OfferSummary</code>.
   * @alias module:model/OfferSummary
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OfferSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferSummary} obj Optional instance to populate.
   * @return {module:model/OfferSummary} The populated <code>OfferSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Condition')) {
        obj['Condition'] = OfferCondition.constructFromObject(data['Condition']);
      }
      if (data.hasOwnProperty('HighestPrice')) {
        obj['HighestPrice'] = OfferPrice.constructFromObject(data['HighestPrice']);
      }
      if (data.hasOwnProperty('LowestPrice')) {
        obj['LowestPrice'] = OfferPrice.constructFromObject(data['LowestPrice']);
      }
      if (data.hasOwnProperty('OfferCount')) {
        obj['OfferCount'] = ApiClient.convertToType(data['OfferCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OfferCondition} Condition
   */
  exports.prototype['Condition'] = undefined;
  /**
   * @member {module:model/OfferPrice} HighestPrice
   */
  exports.prototype['HighestPrice'] = undefined;
  /**
   * @member {module:model/OfferPrice} LowestPrice
   */
  exports.prototype['LowestPrice'] = undefined;
  /**
   * @member {Number} OfferCount
   */
  exports.prototype['OfferCount'] = undefined;



  return exports;
}));


