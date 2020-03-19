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
    define(['ApiClient', 'model/DimensionBasedAttribute', 'model/SingleBooleanValuedAttribute', 'model/SingleIntegerValuedAttribute', 'model/SingleStringValuedAttribute'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DimensionBasedAttribute'), require('./SingleBooleanValuedAttribute'), require('./SingleIntegerValuedAttribute'), require('./SingleStringValuedAttribute'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.ProductInfo = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.DimensionBasedAttribute, root.ProductAdvertisingAPIv1.SingleBooleanValuedAttribute, root.ProductAdvertisingAPIv1.SingleIntegerValuedAttribute, root.ProductAdvertisingAPIv1.SingleStringValuedAttribute);
  }
}(this, function(ApiClient, DimensionBasedAttribute, SingleBooleanValuedAttribute, SingleIntegerValuedAttribute, SingleStringValuedAttribute) {
  'use strict';




  /**
   * The ProductInfo model module.
   * @module model/ProductInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProductInfo</code>.
   * @alias module:model/ProductInfo
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ProductInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductInfo} obj Optional instance to populate.
   * @return {module:model/ProductInfo} The populated <code>ProductInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Color')) {
        obj['Color'] = SingleStringValuedAttribute.constructFromObject(data['Color']);
      }
      if (data.hasOwnProperty('IsAdultProduct')) {
        obj['IsAdultProduct'] = SingleBooleanValuedAttribute.constructFromObject(data['IsAdultProduct']);
      }
      if (data.hasOwnProperty('ItemDimensions')) {
        obj['ItemDimensions'] = DimensionBasedAttribute.constructFromObject(data['ItemDimensions']);
      }
      if (data.hasOwnProperty('ReleaseDate')) {
        obj['ReleaseDate'] = SingleStringValuedAttribute.constructFromObject(data['ReleaseDate']);
      }
      if (data.hasOwnProperty('Size')) {
        obj['Size'] = SingleStringValuedAttribute.constructFromObject(data['Size']);
      }
      if (data.hasOwnProperty('UnitCount')) {
        obj['UnitCount'] = SingleIntegerValuedAttribute.constructFromObject(data['UnitCount']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SingleStringValuedAttribute} Color
   */
  exports.prototype['Color'] = undefined;
  /**
   * @member {module:model/SingleBooleanValuedAttribute} IsAdultProduct
   */
  exports.prototype['IsAdultProduct'] = undefined;
  /**
   * @member {module:model/DimensionBasedAttribute} ItemDimensions
   */
  exports.prototype['ItemDimensions'] = undefined;
  /**
   * @member {module:model/SingleStringValuedAttribute} ReleaseDate
   */
  exports.prototype['ReleaseDate'] = undefined;
  /**
   * @member {module:model/SingleStringValuedAttribute} Size
   */
  exports.prototype['Size'] = undefined;
  /**
   * @member {module:model/SingleIntegerValuedAttribute} UnitCount
   */
  exports.prototype['UnitCount'] = undefined;



  return exports;
}));


