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
    define(['ApiClient', 'model/OfferAvailability', 'model/OfferCondition', 'model/OfferDeliveryInfo', 'model/OfferLoyaltyPoints', 'model/OfferMerchantInfo', 'model/OfferPrice', 'model/OfferProgramEligibility', 'model/OfferPromotion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OfferAvailability'), require('./OfferCondition'), require('./OfferDeliveryInfo'), require('./OfferLoyaltyPoints'), require('./OfferMerchantInfo'), require('./OfferPrice'), require('./OfferProgramEligibility'), require('./OfferPromotion'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.OfferListing = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.OfferAvailability, root.ProductAdvertisingAPIv1.OfferCondition, root.ProductAdvertisingAPIv1.OfferDeliveryInfo, root.ProductAdvertisingAPIv1.OfferLoyaltyPoints, root.ProductAdvertisingAPIv1.OfferMerchantInfo, root.ProductAdvertisingAPIv1.OfferPrice, root.ProductAdvertisingAPIv1.OfferProgramEligibility, root.ProductAdvertisingAPIv1.OfferPromotion);
  }
}(this, function(ApiClient, OfferAvailability, OfferCondition, OfferDeliveryInfo, OfferLoyaltyPoints, OfferMerchantInfo, OfferPrice, OfferProgramEligibility, OfferPromotion) {
  'use strict';




  /**
   * The OfferListing model module.
   * @module model/OfferListing
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OfferListing</code>.
   * @alias module:model/OfferListing
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>OfferListing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferListing} obj Optional instance to populate.
   * @return {module:model/OfferListing} The populated <code>OfferListing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Availability')) {
        obj['Availability'] = OfferAvailability.constructFromObject(data['Availability']);
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
      if (data.hasOwnProperty('IsBuyBoxWinner')) {
        obj['IsBuyBoxWinner'] = ApiClient.convertToType(data['IsBuyBoxWinner'], 'Boolean');
      }
      if (data.hasOwnProperty('LoyaltyPoints')) {
        obj['LoyaltyPoints'] = OfferLoyaltyPoints.constructFromObject(data['LoyaltyPoints']);
      }
      if (data.hasOwnProperty('MerchantInfo')) {
        obj['MerchantInfo'] = OfferMerchantInfo.constructFromObject(data['MerchantInfo']);
      }
      if (data.hasOwnProperty('Price')) {
        obj['Price'] = OfferPrice.constructFromObject(data['Price']);
      }
      if (data.hasOwnProperty('ProgramEligibility')) {
        obj['ProgramEligibility'] = OfferProgramEligibility.constructFromObject(data['ProgramEligibility']);
      }
      if (data.hasOwnProperty('Promotions')) {
        obj['Promotions'] = ApiClient.convertToType(data['Promotions'], [OfferPromotion]);
      }
      if (data.hasOwnProperty('SavingBasis')) {
        obj['SavingBasis'] = OfferPrice.constructFromObject(data['SavingBasis']);
      }
      if (data.hasOwnProperty('ViolatesMAP')) {
        obj['ViolatesMAP'] = ApiClient.convertToType(data['ViolatesMAP'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OfferAvailability} Availability
   */
  exports.prototype['Availability'] = undefined;
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
   * @member {Boolean} IsBuyBoxWinner
   */
  exports.prototype['IsBuyBoxWinner'] = undefined;
  /**
   * @member {module:model/OfferLoyaltyPoints} LoyaltyPoints
   */
  exports.prototype['LoyaltyPoints'] = undefined;
  /**
   * @member {module:model/OfferMerchantInfo} MerchantInfo
   */
  exports.prototype['MerchantInfo'] = undefined;
  /**
   * @member {module:model/OfferPrice} Price
   */
  exports.prototype['Price'] = undefined;
  /**
   * @member {module:model/OfferProgramEligibility} ProgramEligibility
   */
  exports.prototype['ProgramEligibility'] = undefined;
  /**
   * @member {Array.<module:model/OfferPromotion>} Promotions
   */
  exports.prototype['Promotions'] = undefined;
  /**
   * @member {module:model/OfferPrice} SavingBasis
   */
  exports.prototype['SavingBasis'] = undefined;
  /**
   * @member {Boolean} ViolatesMAP
   */
  exports.prototype['ViolatesMAP'] = undefined;



  return exports;
}));


