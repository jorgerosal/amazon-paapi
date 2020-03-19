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
    define(['ApiClient', 'model/ImageType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImageType'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.Images = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.ImageType);
  }
}(this, function(ApiClient, ImageType) {
  'use strict';




  /**
   * The Images model module.
   * @module model/Images
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Images</code>.
   * @alias module:model/Images
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Images</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Images} obj Optional instance to populate.
   * @return {module:model/Images} The populated <code>Images</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Primary')) {
        obj['Primary'] = ImageType.constructFromObject(data['Primary']);
      }
      if (data.hasOwnProperty('Variants')) {
        obj['Variants'] = ApiClient.convertToType(data['Variants'], [ImageType]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ImageType} Primary
   */
  exports.prototype['Primary'] = undefined;
  /**
   * @member {Array.<module:model/ImageType>} Variants
   */
  exports.prototype['Variants'] = undefined;



  return exports;
}));


