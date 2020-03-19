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
    define(['ApiClient', 'model/Availability', 'model/Condition', 'model/DeliveryFlag', 'model/MaxPrice', 'model/Merchant', 'model/MinPrice', 'model/MinReviewsRating', 'model/MinSavingPercent', 'model/OfferCount', 'model/PartnerType', 'model/Properties', 'model/SearchItemsResource', 'model/SortBy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Availability'), require('./Condition'), require('./DeliveryFlag'), require('./MaxPrice'), require('./Merchant'), require('./MinPrice'), require('./MinReviewsRating'), require('./MinSavingPercent'), require('./OfferCount'), require('./PartnerType'), require('./Properties'), require('./SearchItemsResource'), require('./SortBy'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.SearchItemsRequest = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.Availability, root.ProductAdvertisingAPIv1.Condition, root.ProductAdvertisingAPIv1.DeliveryFlag, root.ProductAdvertisingAPIv1.MaxPrice, root.ProductAdvertisingAPIv1.Merchant, root.ProductAdvertisingAPIv1.MinPrice, root.ProductAdvertisingAPIv1.MinReviewsRating, root.ProductAdvertisingAPIv1.MinSavingPercent, root.ProductAdvertisingAPIv1.OfferCount, root.ProductAdvertisingAPIv1.PartnerType, root.ProductAdvertisingAPIv1.Properties, root.ProductAdvertisingAPIv1.SearchItemsResource, root.ProductAdvertisingAPIv1.SortBy);
  }
}(this, function(ApiClient, Availability, Condition, DeliveryFlag, MaxPrice, Merchant, MinPrice, MinReviewsRating, MinSavingPercent, OfferCount, PartnerType, Properties, SearchItemsResource, SortBy) {
  'use strict';




  /**
   * The SearchItemsRequest model module.
   * @module model/SearchItemsRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SearchItemsRequest</code>.
   * @alias module:model/SearchItemsRequest
   * @class
   * @param partnerTag {String} 
   * @param partnerType {module:model/PartnerType} 
   */
  var exports = function(partnerTag, partnerType) {
    var _this = this;





















    _this['PartnerTag'] = partnerTag;
    _this['PartnerType'] = partnerType;





  };

  /**
   * Constructs a <code>SearchItemsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchItemsRequest} obj Optional instance to populate.
   * @return {module:model/SearchItemsRequest} The populated <code>SearchItemsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Actor')) {
        obj['Actor'] = ApiClient.convertToType(data['Actor'], 'String');
      }
      if (data.hasOwnProperty('Artist')) {
        obj['Artist'] = ApiClient.convertToType(data['Artist'], 'String');
      }
      if (data.hasOwnProperty('Author')) {
        obj['Author'] = ApiClient.convertToType(data['Author'], 'String');
      }
      if (data.hasOwnProperty('Availability')) {
        obj['Availability'] = Availability.constructFromObject(data['Availability']);
      }
      if (data.hasOwnProperty('Brand')) {
        obj['Brand'] = ApiClient.convertToType(data['Brand'], 'String');
      }
      if (data.hasOwnProperty('BrowseNodeId')) {
        obj['BrowseNodeId'] = ApiClient.convertToType(data['BrowseNodeId'], 'String');
      }
      if (data.hasOwnProperty('Condition')) {
        obj['Condition'] = Condition.constructFromObject(data['Condition']);
      }
      if (data.hasOwnProperty('CurrencyOfPreference')) {
        obj['CurrencyOfPreference'] = ApiClient.convertToType(data['CurrencyOfPreference'], 'String');
      }
      if (data.hasOwnProperty('DeliveryFlags')) {
        obj['DeliveryFlags'] = ApiClient.convertToType(data['DeliveryFlags'], [DeliveryFlag]);
      }
      if (data.hasOwnProperty('ItemCount')) {
        obj['ItemCount'] = ApiClient.convertToType(data['ItemCount'], 'Number');
      }
      if (data.hasOwnProperty('ItemPage')) {
        obj['ItemPage'] = ApiClient.convertToType(data['ItemPage'], 'Number');
      }
      if (data.hasOwnProperty('Keywords')) {
        obj['Keywords'] = ApiClient.convertToType(data['Keywords'], 'String');
      }
      if (data.hasOwnProperty('LanguagesOfPreference')) {
        obj['LanguagesOfPreference'] = ApiClient.convertToType(data['LanguagesOfPreference'], ['String']);
      }
      if (data.hasOwnProperty('Marketplace')) {
        obj['Marketplace'] = ApiClient.convertToType(data['Marketplace'], 'String');
      }
      if (data.hasOwnProperty('MaxPrice')) {
        obj['MaxPrice'] = MaxPrice.constructFromObject(data['MaxPrice']);
      }
      if (data.hasOwnProperty('Merchant')) {
        obj['Merchant'] = Merchant.constructFromObject(data['Merchant']);
      }
      if (data.hasOwnProperty('MinPrice')) {
        obj['MinPrice'] = MinPrice.constructFromObject(data['MinPrice']);
      }
      if (data.hasOwnProperty('MinReviewsRating')) {
        obj['MinReviewsRating'] = MinReviewsRating.constructFromObject(data['MinReviewsRating']);
      }
      if (data.hasOwnProperty('MinSavingPercent')) {
        obj['MinSavingPercent'] = MinSavingPercent.constructFromObject(data['MinSavingPercent']);
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
        obj['Resources'] = ApiClient.convertToType(data['Resources'], [SearchItemsResource]);
      }
      if (data.hasOwnProperty('SearchIndex')) {
        obj['SearchIndex'] = ApiClient.convertToType(data['SearchIndex'], 'String');
      }
      if (data.hasOwnProperty('SortBy')) {
        obj['SortBy'] = SortBy.constructFromObject(data['SortBy']);
      }
      if (data.hasOwnProperty('Title')) {
        obj['Title'] = ApiClient.convertToType(data['Title'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Actor
   */
  exports.prototype['Actor'] = undefined;
  /**
   * @member {String} Artist
   */
  exports.prototype['Artist'] = undefined;
  /**
   * @member {String} Author
   */
  exports.prototype['Author'] = undefined;
  /**
   * @member {module:model/Availability} Availability
   */
  exports.prototype['Availability'] = undefined;
  /**
   * @member {String} Brand
   */
  exports.prototype['Brand'] = undefined;
  /**
   * @member {String} BrowseNodeId
   */
  exports.prototype['BrowseNodeId'] = undefined;
  /**
   * @member {module:model/Condition} Condition
   */
  exports.prototype['Condition'] = undefined;
  /**
   * @member {String} CurrencyOfPreference
   */
  exports.prototype['CurrencyOfPreference'] = undefined;
  /**
   * @member {Array.<module:model/DeliveryFlag>} DeliveryFlags
   */
  exports.prototype['DeliveryFlags'] = undefined;
  /**
   * @member {Number} ItemCount
   */
  exports.prototype['ItemCount'] = undefined;
  /**
   * @member {Number} ItemPage
   */
  exports.prototype['ItemPage'] = undefined;
  /**
   * @member {String} Keywords
   */
  exports.prototype['Keywords'] = undefined;
  /**
   * @member {Array.<String>} LanguagesOfPreference
   */
  exports.prototype['LanguagesOfPreference'] = undefined;
  /**
   * @member {String} Marketplace
   */
  exports.prototype['Marketplace'] = undefined;
  /**
   * @member {module:model/MaxPrice} MaxPrice
   */
  exports.prototype['MaxPrice'] = undefined;
  /**
   * @member {module:model/Merchant} Merchant
   */
  exports.prototype['Merchant'] = undefined;
  /**
   * @member {module:model/MinPrice} MinPrice
   */
  exports.prototype['MinPrice'] = undefined;
  /**
   * @member {module:model/MinReviewsRating} MinReviewsRating
   */
  exports.prototype['MinReviewsRating'] = undefined;
  /**
   * @member {module:model/MinSavingPercent} MinSavingPercent
   */
  exports.prototype['MinSavingPercent'] = undefined;
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
   * @member {Array.<module:model/SearchItemsResource>} Resources
   */
  exports.prototype['Resources'] = undefined;
  /**
   * @member {String} SearchIndex
   */
  exports.prototype['SearchIndex'] = undefined;
  /**
   * @member {module:model/SortBy} SortBy
   */
  exports.prototype['SortBy'] = undefined;
  /**
   * @member {String} Title
   */
  exports.prototype['Title'] = undefined;



  return exports;
}));


