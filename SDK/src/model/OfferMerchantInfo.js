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
    root.ProductAdvertisingAPIv1.OfferMerchantInfo = factory(root.ProductAdvertisingAPIv1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OfferMerchantInfo model module.
   * @module model/OfferMerchantInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OfferMerchantInfo</code>.
   * @alias module:model/OfferMerchantInfo
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>OfferMerchantInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferMerchantInfo} obj Optional instance to populate.
   * @return {module:model/OfferMerchantInfo} The populated <code>OfferMerchantInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DefaultShippingCountry')) {
        obj['DefaultShippingCountry'] = ApiClient.convertToType(data['DefaultShippingCountry'], 'String');
      }
      if (data.hasOwnProperty('FeedbackCount')) {
        obj['FeedbackCount'] = ApiClient.convertToType(data['FeedbackCount'], 'Number');
      }
      if (data.hasOwnProperty('FeedbackRating')) {
        obj['FeedbackRating'] = ApiClient.convertToType(data['FeedbackRating'], 'Number');
      }
      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} DefaultShippingCountry
   */
  exports.prototype['DefaultShippingCountry'] = undefined;
  /**
   * @member {Number} FeedbackCount
   */
  exports.prototype['FeedbackCount'] = undefined;
  /**
   * @member {Number} FeedbackRating
   */
  exports.prototype['FeedbackRating'] = undefined;
  /**
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;



  return exports;
}));


