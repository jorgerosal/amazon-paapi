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
    define(['ApiClient', 'model/Contributor', 'model/SingleStringValuedAttribute'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Contributor'), require('./SingleStringValuedAttribute'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.ByLineInfo = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.Contributor, root.ProductAdvertisingAPIv1.SingleStringValuedAttribute);
  }
}(this, function(ApiClient, Contributor, SingleStringValuedAttribute) {
  'use strict';




  /**
   * The ByLineInfo model module.
   * @module model/ByLineInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ByLineInfo</code>.
   * @alias module:model/ByLineInfo
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ByLineInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ByLineInfo} obj Optional instance to populate.
   * @return {module:model/ByLineInfo} The populated <code>ByLineInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Brand')) {
        obj['Brand'] = SingleStringValuedAttribute.constructFromObject(data['Brand']);
      }
      if (data.hasOwnProperty('Contributors')) {
        obj['Contributors'] = ApiClient.convertToType(data['Contributors'], [Contributor]);
      }
      if (data.hasOwnProperty('Manufacturer')) {
        obj['Manufacturer'] = SingleStringValuedAttribute.constructFromObject(data['Manufacturer']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SingleStringValuedAttribute} Brand
   */
  exports.prototype['Brand'] = undefined;
  /**
   * @member {Array.<module:model/Contributor>} Contributors
   */
  exports.prototype['Contributors'] = undefined;
  /**
   * @member {module:model/SingleStringValuedAttribute} Manufacturer
   */
  exports.prototype['Manufacturer'] = undefined;



  return exports;
}));


