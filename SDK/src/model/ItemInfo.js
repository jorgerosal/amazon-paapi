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
    define(['ApiClient', 'model/ByLineInfo', 'model/Classifications', 'model/ContentInfo', 'model/ContentRating', 'model/ExternalIds', 'model/ManufactureInfo', 'model/MultiValuedAttribute', 'model/ProductInfo', 'model/SingleStringValuedAttribute', 'model/TechnicalInfo', 'model/TradeInInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ByLineInfo'), require('./Classifications'), require('./ContentInfo'), require('./ContentRating'), require('./ExternalIds'), require('./ManufactureInfo'), require('./MultiValuedAttribute'), require('./ProductInfo'), require('./SingleStringValuedAttribute'), require('./TechnicalInfo'), require('./TradeInInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.ItemInfo = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.ByLineInfo, root.ProductAdvertisingAPIv1.Classifications, root.ProductAdvertisingAPIv1.ContentInfo, root.ProductAdvertisingAPIv1.ContentRating, root.ProductAdvertisingAPIv1.ExternalIds, root.ProductAdvertisingAPIv1.ManufactureInfo, root.ProductAdvertisingAPIv1.MultiValuedAttribute, root.ProductAdvertisingAPIv1.ProductInfo, root.ProductAdvertisingAPIv1.SingleStringValuedAttribute, root.ProductAdvertisingAPIv1.TechnicalInfo, root.ProductAdvertisingAPIv1.TradeInInfo);
  }
}(this, function(ApiClient, ByLineInfo, Classifications, ContentInfo, ContentRating, ExternalIds, ManufactureInfo, MultiValuedAttribute, ProductInfo, SingleStringValuedAttribute, TechnicalInfo, TradeInInfo) {
  'use strict';




  /**
   * The ItemInfo model module.
   * @module model/ItemInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ItemInfo</code>.
   * @alias module:model/ItemInfo
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>ItemInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemInfo} obj Optional instance to populate.
   * @return {module:model/ItemInfo} The populated <code>ItemInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ByLineInfo')) {
        obj['ByLineInfo'] = ByLineInfo.constructFromObject(data['ByLineInfo']);
      }
      if (data.hasOwnProperty('Classifications')) {
        obj['Classifications'] = Classifications.constructFromObject(data['Classifications']);
      }
      if (data.hasOwnProperty('ContentInfo')) {
        obj['ContentInfo'] = ContentInfo.constructFromObject(data['ContentInfo']);
      }
      if (data.hasOwnProperty('ContentRating')) {
        obj['ContentRating'] = ContentRating.constructFromObject(data['ContentRating']);
      }
      if (data.hasOwnProperty('ExternalIds')) {
        obj['ExternalIds'] = ExternalIds.constructFromObject(data['ExternalIds']);
      }
      if (data.hasOwnProperty('Features')) {
        obj['Features'] = MultiValuedAttribute.constructFromObject(data['Features']);
      }
      if (data.hasOwnProperty('ManufactureInfo')) {
        obj['ManufactureInfo'] = ManufactureInfo.constructFromObject(data['ManufactureInfo']);
      }
      if (data.hasOwnProperty('ProductInfo')) {
        obj['ProductInfo'] = ProductInfo.constructFromObject(data['ProductInfo']);
      }
      if (data.hasOwnProperty('TechnicalInfo')) {
        obj['TechnicalInfo'] = TechnicalInfo.constructFromObject(data['TechnicalInfo']);
      }
      if (data.hasOwnProperty('Title')) {
        obj['Title'] = SingleStringValuedAttribute.constructFromObject(data['Title']);
      }
      if (data.hasOwnProperty('TradeInInfo')) {
        obj['TradeInInfo'] = TradeInInfo.constructFromObject(data['TradeInInfo']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ByLineInfo} ByLineInfo
   */
  exports.prototype['ByLineInfo'] = undefined;
  /**
   * @member {module:model/Classifications} Classifications
   */
  exports.prototype['Classifications'] = undefined;
  /**
   * @member {module:model/ContentInfo} ContentInfo
   */
  exports.prototype['ContentInfo'] = undefined;
  /**
   * @member {module:model/ContentRating} ContentRating
   */
  exports.prototype['ContentRating'] = undefined;
  /**
   * @member {module:model/ExternalIds} ExternalIds
   */
  exports.prototype['ExternalIds'] = undefined;
  /**
   * @member {module:model/MultiValuedAttribute} Features
   */
  exports.prototype['Features'] = undefined;
  /**
   * @member {module:model/ManufactureInfo} ManufactureInfo
   */
  exports.prototype['ManufactureInfo'] = undefined;
  /**
   * @member {module:model/ProductInfo} ProductInfo
   */
  exports.prototype['ProductInfo'] = undefined;
  /**
   * @member {module:model/TechnicalInfo} TechnicalInfo
   */
  exports.prototype['TechnicalInfo'] = undefined;
  /**
   * @member {module:model/SingleStringValuedAttribute} Title
   */
  exports.prototype['Title'] = undefined;
  /**
   * @member {module:model/TradeInInfo} TradeInInfo
   */
  exports.prototype['TradeInInfo'] = undefined;



  return exports;
}));


