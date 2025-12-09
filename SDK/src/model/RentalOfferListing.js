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
    define(['ApiClient', 'model/DurationPrice', 'model/OfferAvailability', 'model/OfferCondition', 'model/OfferDeliveryInfo', 'model/OfferMerchantInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DurationPrice'), require('./OfferAvailability'), require('./OfferCondition'), require('./OfferDeliveryInfo'), require('./OfferMerchantInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.RentalOfferListing = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.DurationPrice, root.ProductAdvertisingAPIv1.OfferAvailability, root.ProductAdvertisingAPIv1.OfferCondition, root.ProductAdvertisingAPIv1.OfferDeliveryInfo, root.ProductAdvertisingAPIv1.OfferMerchantInfo);
  }
}(this, function(ApiClient, DurationPrice, OfferAvailability, OfferCondition, OfferDeliveryInfo, OfferMerchantInfo) {
  'use strict';




  /**
   * The RentalOfferListing model module.
   * @module model/RentalOfferListing
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RentalOfferListing</code>.
   * @alias module:model/RentalOfferListing
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>RentalOfferListing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RentalOfferListing} obj Optional instance to populate.
   * @return {module:model/RentalOfferListing} The populated <code>RentalOfferListing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Availability')) {
        obj['Availability'] = OfferAvailability.constructFromObject(data['Availability']);
      }
      if (data.hasOwnProperty('BasePrice')) {
        obj['BasePrice'] = DurationPrice.constructFromObject(data['BasePrice']);
      }
      if (data.hasOwnProperty('Condition')) {
        obj['Condition'] = OfferCondition.constructFromObject(data['Condition']);
      }
      if (data.hasOwnProperty('DeliveryInfo')) {
        obj['DeliveryInfo'] = OfferDeliveryInfo.constructFromObject(data['DeliveryInfo']);
      }
      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('MerchantInfo')) {
        obj['MerchantInfo'] = OfferMerchantInfo.constructFromObject(data['MerchantInfo']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OfferAvailability} Availability
   */
  exports.prototype['Availability'] = undefined;
  /**
   * @member {module:model/DurationPrice} BasePrice
   */
  exports.prototype['BasePrice'] = undefined;
  /**
   * @member {module:model/OfferCondition} Condition
   */
  exports.prototype['Condition'] = undefined;
  /**
   * @member {module:model/OfferDeliveryInfo} DeliveryInfo
   */
  exports.prototype['DeliveryInfo'] = undefined;
  /**
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * @member {module:model/OfferMerchantInfo} MerchantInfo
   */
  exports.prototype['MerchantInfo'] = undefined;



  return exports;
}));


