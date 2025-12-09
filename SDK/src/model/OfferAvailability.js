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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.OfferAvailability = factory(root.ProductAdvertisingAPIv1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OfferAvailability model module.
   * @module model/OfferAvailability
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OfferAvailability</code>.
   * @alias module:model/OfferAvailability
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OfferAvailability</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferAvailability} obj Optional instance to populate.
   * @return {module:model/OfferAvailability} The populated <code>OfferAvailability</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('MaxOrderQuantity')) {
        obj['MaxOrderQuantity'] = ApiClient.convertToType(data['MaxOrderQuantity'], 'Number');
      }
      if (data.hasOwnProperty('Message')) {
        obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
      }
      if (data.hasOwnProperty('MinOrderQuantity')) {
        obj['MinOrderQuantity'] = ApiClient.convertToType(data['MinOrderQuantity'], 'Number');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} MaxOrderQuantity
   */
  exports.prototype['MaxOrderQuantity'] = undefined;
  /**
   * @member {String} Message
   */
  exports.prototype['Message'] = undefined;
  /**
   * @member {Number} MinOrderQuantity
   */
  exports.prototype['MinOrderQuantity'] = undefined;
  /**
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;



  return exports;
}));


