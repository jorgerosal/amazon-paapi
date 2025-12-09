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
    define(['ApiClient', 'model/DealDetails', 'model/OfferAvailabilityV2', 'model/OfferConditionV2', 'model/OfferLoyaltyPointsV2', 'model/OfferMerchantInfoV2', 'model/OfferPriceV2', 'model/OfferType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DealDetails'), require('./OfferAvailabilityV2'), require('./OfferConditionV2'), require('./OfferLoyaltyPointsV2'), require('./OfferMerchantInfoV2'), require('./OfferPriceV2'), require('./OfferType'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.OfferListingV2 = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.DealDetails, root.ProductAdvertisingAPIv1.OfferAvailabilityV2, root.ProductAdvertisingAPIv1.OfferConditionV2, root.ProductAdvertisingAPIv1.OfferLoyaltyPointsV2, root.ProductAdvertisingAPIv1.OfferMerchantInfoV2, root.ProductAdvertisingAPIv1.OfferPriceV2, root.ProductAdvertisingAPIv1.OfferType);
  }
}(this, function(ApiClient, DealDetails, OfferAvailabilityV2, OfferConditionV2, OfferLoyaltyPointsV2, OfferMerchantInfoV2, OfferPriceV2, OfferType) {
  'use strict';




  /**
   * The OfferListingV2 model module.
   * @module model/OfferListingV2
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OfferListingV2</code>.
   * @alias module:model/OfferListingV2
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>OfferListingV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferListingV2} obj Optional instance to populate.
   * @return {module:model/OfferListingV2} The populated <code>OfferListingV2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Availability')) {
        obj['Availability'] = OfferAvailabilityV2.constructFromObject(data['Availability']);
      }
      if (data.hasOwnProperty('Condition')) {
        obj['Condition'] = OfferConditionV2.constructFromObject(data['Condition']);
      }
      if (data.hasOwnProperty('DealDetails')) {
        obj['DealDetails'] = DealDetails.constructFromObject(data['DealDetails']);
      }
      if (data.hasOwnProperty('IsBuyBoxWinner')) {
        obj['IsBuyBoxWinner'] = ApiClient.convertToType(data['IsBuyBoxWinner'], 'Boolean');
      }
      if (data.hasOwnProperty('LoyaltyPoints')) {
        obj['LoyaltyPoints'] = OfferLoyaltyPointsV2.constructFromObject(data['LoyaltyPoints']);
      }
      if (data.hasOwnProperty('MerchantInfo')) {
        obj['MerchantInfo'] = OfferMerchantInfoV2.constructFromObject(data['MerchantInfo']);
      }
      if (data.hasOwnProperty('Price')) {
        obj['Price'] = OfferPriceV2.constructFromObject(data['Price']);
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = OfferType.constructFromObject(data['Type']);
      }
      if (data.hasOwnProperty('ViolatesMAP')) {
        obj['ViolatesMAP'] = ApiClient.convertToType(data['ViolatesMAP'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OfferAvailabilityV2} Availability
   */
  exports.prototype['Availability'] = undefined;
  /**
   * @member {module:model/OfferConditionV2} Condition
   */
  exports.prototype['Condition'] = undefined;
  /**
   * @member {module:model/DealDetails} DealDetails
   */
  exports.prototype['DealDetails'] = undefined;
  /**
   * @member {Boolean} IsBuyBoxWinner
   */
  exports.prototype['IsBuyBoxWinner'] = undefined;
  /**
   * @member {module:model/OfferLoyaltyPointsV2} LoyaltyPoints
   */
  exports.prototype['LoyaltyPoints'] = undefined;
  /**
   * @member {module:model/OfferMerchantInfoV2} MerchantInfo
   */
  exports.prototype['MerchantInfo'] = undefined;
  /**
   * @member {module:model/OfferPriceV2} Price
   */
  exports.prototype['Price'] = undefined;
  /**
   * @member {module:model/OfferType} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {Boolean} ViolatesMAP
   */
  exports.prototype['ViolatesMAP'] = undefined;



  return exports;
}));


