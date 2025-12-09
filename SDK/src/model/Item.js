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
    define(['ApiClient', 'model/BrowseNodeInfo', 'model/CustomerReviews', 'model/Images', 'model/ItemInfo', 'model/Offers', 'model/OffersV2', 'model/RentalOffers', 'model/VariationAttribute'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BrowseNodeInfo'), require('./CustomerReviews'), require('./Images'), require('./ItemInfo'), require('./Offers'), require('./OffersV2'), require('./RentalOffers'), require('./VariationAttribute'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.Item = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.BrowseNodeInfo, root.ProductAdvertisingAPIv1.CustomerReviews, root.ProductAdvertisingAPIv1.Images, root.ProductAdvertisingAPIv1.ItemInfo, root.ProductAdvertisingAPIv1.Offers, root.ProductAdvertisingAPIv1.OffersV2, root.ProductAdvertisingAPIv1.RentalOffers, root.ProductAdvertisingAPIv1.VariationAttribute);
  }
}(this, function(ApiClient, BrowseNodeInfo, CustomerReviews, Images, ItemInfo, Offers, OffersV2, RentalOffers, VariationAttribute) {
  'use strict';




  /**
   * The Item model module.
   * @module model/Item
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Item</code>.
   * @alias module:model/Item
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Item} obj Optional instance to populate.
   * @return {module:model/Item} The populated <code>Item</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ASIN')) {
        obj['ASIN'] = ApiClient.convertToType(data['ASIN'], 'String');
      }
      if (data.hasOwnProperty('BrowseNodeInfo')) {
        obj['BrowseNodeInfo'] = BrowseNodeInfo.constructFromObject(data['BrowseNodeInfo']);
      }
      if (data.hasOwnProperty('CustomerReviews')) {
        obj['CustomerReviews'] = CustomerReviews.constructFromObject(data['CustomerReviews']);
      }
      if (data.hasOwnProperty('DetailPageURL')) {
        obj['DetailPageURL'] = ApiClient.convertToType(data['DetailPageURL'], 'String');
      }
      if (data.hasOwnProperty('Images')) {
        obj['Images'] = Images.constructFromObject(data['Images']);
      }
      if (data.hasOwnProperty('ItemInfo')) {
        obj['ItemInfo'] = ItemInfo.constructFromObject(data['ItemInfo']);
      }
      if (data.hasOwnProperty('Offers')) {
        obj['Offers'] = Offers.constructFromObject(data['Offers']);
      }
      if (data.hasOwnProperty('OffersV2')) {
        obj['OffersV2'] = OffersV2.constructFromObject(data['OffersV2']);
      }
      if (data.hasOwnProperty('ParentASIN')) {
        obj['ParentASIN'] = ApiClient.convertToType(data['ParentASIN'], 'String');
      }
      if (data.hasOwnProperty('RentalOffers')) {
        obj['RentalOffers'] = RentalOffers.constructFromObject(data['RentalOffers']);
      }
      if (data.hasOwnProperty('Score')) {
        obj['Score'] = ApiClient.convertToType(data['Score'], 'Number');
      }
      if (data.hasOwnProperty('VariationAttributes')) {
        obj['VariationAttributes'] = ApiClient.convertToType(data['VariationAttributes'], [VariationAttribute]);
      }
    }
    return obj;
  }

  /**
   * @member {String} ASIN
   */
  exports.prototype['ASIN'] = undefined;
  /**
   * @member {module:model/BrowseNodeInfo} BrowseNodeInfo
   */
  exports.prototype['BrowseNodeInfo'] = undefined;
  /**
   * @member {module:model/CustomerReviews} CustomerReviews
   */
  exports.prototype['CustomerReviews'] = undefined;
  /**
   * @member {String} DetailPageURL
   */
  exports.prototype['DetailPageURL'] = undefined;
  /**
   * @member {module:model/Images} Images
   */
  exports.prototype['Images'] = undefined;
  /**
   * @member {module:model/ItemInfo} ItemInfo
   */
  exports.prototype['ItemInfo'] = undefined;
  /**
   * @member {module:model/Offers} Offers
   */
  exports.prototype['Offers'] = undefined;
  /**
   * @member {module:model/OffersV2} OffersV2
   */
  exports.prototype['OffersV2'] = undefined;
  /**
   * @member {String} ParentASIN
   */
  exports.prototype['ParentASIN'] = undefined;
  /**
   * @member {module:model/RentalOffers} RentalOffers
   */
  exports.prototype['RentalOffers'] = undefined;
  /**
   * @member {Number} Score
   */
  exports.prototype['Score'] = undefined;
  /**
   * @member {Array.<module:model/VariationAttribute>} VariationAttributes
   */
  exports.prototype['VariationAttributes'] = undefined;



  return exports;
}));


