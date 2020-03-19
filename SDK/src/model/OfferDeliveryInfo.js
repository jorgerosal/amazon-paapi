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
    define(['ApiClient', 'model/OfferShippingCharge'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OfferShippingCharge'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.OfferDeliveryInfo = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.OfferShippingCharge);
  }
}(this, function(ApiClient, OfferShippingCharge) {
  'use strict';




  /**
   * The OfferDeliveryInfo model module.
   * @module model/OfferDeliveryInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OfferDeliveryInfo</code>.
   * @alias module:model/OfferDeliveryInfo
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OfferDeliveryInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferDeliveryInfo} obj Optional instance to populate.
   * @return {module:model/OfferDeliveryInfo} The populated <code>OfferDeliveryInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('IsAmazonFulfilled')) {
        obj['IsAmazonFulfilled'] = ApiClient.convertToType(data['IsAmazonFulfilled'], 'Boolean');
      }
      if (data.hasOwnProperty('IsFreeShippingEligible')) {
        obj['IsFreeShippingEligible'] = ApiClient.convertToType(data['IsFreeShippingEligible'], 'Boolean');
      }
      if (data.hasOwnProperty('IsPrimeEligible')) {
        obj['IsPrimeEligible'] = ApiClient.convertToType(data['IsPrimeEligible'], 'Boolean');
      }
      if (data.hasOwnProperty('ShippingCharges')) {
        obj['ShippingCharges'] = ApiClient.convertToType(data['ShippingCharges'], [OfferShippingCharge]);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} IsAmazonFulfilled
   */
  exports.prototype['IsAmazonFulfilled'] = undefined;
  /**
   * @member {Boolean} IsFreeShippingEligible
   */
  exports.prototype['IsFreeShippingEligible'] = undefined;
  /**
   * @member {Boolean} IsPrimeEligible
   */
  exports.prototype['IsPrimeEligible'] = undefined;
  /**
   * @member {Array.<module:model/OfferShippingCharge>} ShippingCharges
   */
  exports.prototype['ShippingCharges'] = undefined;



  return exports;
}));


