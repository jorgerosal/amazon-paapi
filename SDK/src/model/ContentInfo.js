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
    define(['ApiClient', 'model/Languages', 'model/SingleIntegerValuedAttribute', 'model/SingleStringValuedAttribute'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Languages'), require('./SingleIntegerValuedAttribute'), require('./SingleStringValuedAttribute'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.ContentInfo = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.Languages, root.ProductAdvertisingAPIv1.SingleIntegerValuedAttribute, root.ProductAdvertisingAPIv1.SingleStringValuedAttribute);
  }
}(this, function(ApiClient, Languages, SingleIntegerValuedAttribute, SingleStringValuedAttribute) {
  'use strict';




  /**
   * The ContentInfo model module.
   * @module model/ContentInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ContentInfo</code>.
   * @alias module:model/ContentInfo
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ContentInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentInfo} obj Optional instance to populate.
   * @return {module:model/ContentInfo} The populated <code>ContentInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Edition')) {
        obj['Edition'] = SingleStringValuedAttribute.constructFromObject(data['Edition']);
      }
      if (data.hasOwnProperty('Languages')) {
        obj['Languages'] = Languages.constructFromObject(data['Languages']);
      }
      if (data.hasOwnProperty('PagesCount')) {
        obj['PagesCount'] = SingleIntegerValuedAttribute.constructFromObject(data['PagesCount']);
      }
      if (data.hasOwnProperty('PublicationDate')) {
        obj['PublicationDate'] = SingleStringValuedAttribute.constructFromObject(data['PublicationDate']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SingleStringValuedAttribute} Edition
   */
  exports.prototype['Edition'] = undefined;
  /**
   * @member {module:model/Languages} Languages
   */
  exports.prototype['Languages'] = undefined;
  /**
   * @member {module:model/SingleIntegerValuedAttribute} PagesCount
   */
  exports.prototype['PagesCount'] = undefined;
  /**
   * @member {module:model/SingleStringValuedAttribute} PublicationDate
   */
  exports.prototype['PublicationDate'] = undefined;



  return exports;
}));


