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
    define(['ApiClient', 'model/Condition', 'model/GetVariationsResource', 'model/Merchant', 'model/OfferCount', 'model/PartnerType', 'model/Properties'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Condition'), require('./GetVariationsResource'), require('./Merchant'), require('./OfferCount'), require('./PartnerType'), require('./Properties'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.GetVariationsRequest = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.Condition, root.ProductAdvertisingAPIv1.GetVariationsResource, root.ProductAdvertisingAPIv1.Merchant, root.ProductAdvertisingAPIv1.OfferCount, root.ProductAdvertisingAPIv1.PartnerType, root.ProductAdvertisingAPIv1.Properties);
  }
}(this, function(ApiClient, Condition, GetVariationsResource, Merchant, OfferCount, PartnerType, Properties) {
  'use strict';




  /**
   * The GetVariationsRequest model module.
   * @module model/GetVariationsRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetVariationsRequest</code>.
   * @alias module:model/GetVariationsRequest
   * @class
   * @param ASIN {String} 
   * @param partnerTag {String} 
   * @param partnerType {module:model/PartnerType} 
   */
  var exports = function(ASIN, partnerTag, partnerType) {
    var _this = this;

    _this['ASIN'] = ASIN;






    _this['PartnerTag'] = partnerTag;
    _this['PartnerType'] = partnerType;




  };

  /**
   * Constructs a <code>GetVariationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetVariationsRequest} obj Optional instance to populate.
   * @return {module:model/GetVariationsRequest} The populated <code>GetVariationsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ASIN')) {
        obj['ASIN'] = ApiClient.convertToType(data['ASIN'], 'String');
      }
      if (data.hasOwnProperty('Condition')) {
        obj['Condition'] = Condition.constructFromObject(data['Condition']);
      }
      if (data.hasOwnProperty('CurrencyOfPreference')) {
        obj['CurrencyOfPreference'] = ApiClient.convertToType(data['CurrencyOfPreference'], 'String');
      }
      if (data.hasOwnProperty('LanguagesOfPreference')) {
        obj['LanguagesOfPreference'] = ApiClient.convertToType(data['LanguagesOfPreference'], ['String']);
      }
      if (data.hasOwnProperty('Marketplace')) {
        obj['Marketplace'] = ApiClient.convertToType(data['Marketplace'], 'String');
      }
      if (data.hasOwnProperty('Merchant')) {
        obj['Merchant'] = Merchant.constructFromObject(data['Merchant']);
      }
      if (data.hasOwnProperty('OfferCount')) {
        obj['OfferCount'] = OfferCount.constructFromObject(data['OfferCount']);
      }
      if (data.hasOwnProperty('PartnerTag')) {
        obj['PartnerTag'] = ApiClient.convertToType(data['PartnerTag'], 'String');
      }
      if (data.hasOwnProperty('PartnerType')) {
        obj['PartnerType'] = PartnerType.constructFromObject(data['PartnerType']);
      }
      if (data.hasOwnProperty('Properties')) {
        obj['Properties'] = Properties.constructFromObject(data['Properties']);
      }
      if (data.hasOwnProperty('Resources')) {
        obj['Resources'] = ApiClient.convertToType(data['Resources'], [GetVariationsResource]);
      }
      if (data.hasOwnProperty('VariationCount')) {
        obj['VariationCount'] = ApiClient.convertToType(data['VariationCount'], 'Number');
      }
      if (data.hasOwnProperty('VariationPage')) {
        obj['VariationPage'] = ApiClient.convertToType(data['VariationPage'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} ASIN
   */
  exports.prototype['ASIN'] = undefined;
  /**
   * @member {module:model/Condition} Condition
   */
  exports.prototype['Condition'] = undefined;
  /**
   * @member {String} CurrencyOfPreference
   */
  exports.prototype['CurrencyOfPreference'] = undefined;
  /**
   * @member {Array.<String>} LanguagesOfPreference
   */
  exports.prototype['LanguagesOfPreference'] = undefined;
  /**
   * @member {String} Marketplace
   */
  exports.prototype['Marketplace'] = undefined;
  /**
   * @member {module:model/Merchant} Merchant
   */
  exports.prototype['Merchant'] = undefined;
  /**
   * @member {module:model/OfferCount} OfferCount
   */
  exports.prototype['OfferCount'] = undefined;
  /**
   * @member {String} PartnerTag
   */
  exports.prototype['PartnerTag'] = undefined;
  /**
   * @member {module:model/PartnerType} PartnerType
   */
  exports.prototype['PartnerType'] = undefined;
  /**
   * @member {module:model/Properties} Properties
   */
  exports.prototype['Properties'] = undefined;
  /**
   * @member {Array.<module:model/GetVariationsResource>} Resources
   */
  exports.prototype['Resources'] = undefined;
  /**
   * @member {Number} VariationCount
   */
  exports.prototype['VariationCount'] = undefined;
  /**
   * @member {Number} VariationPage
   */
  exports.prototype['VariationPage'] = undefined;



  return exports;
}));


