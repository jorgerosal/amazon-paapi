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
    define(['ApiClient', 'model/OfferConditionNote', 'model/OfferSubCondition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OfferConditionNote'), require('./OfferSubCondition'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.OfferCondition = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.OfferConditionNote, root.ProductAdvertisingAPIv1.OfferSubCondition);
  }
}(this, function(ApiClient, OfferConditionNote, OfferSubCondition) {
  'use strict';




  /**
   * The OfferCondition model module.
   * @module model/OfferCondition
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OfferCondition</code>.
   * @alias module:model/OfferCondition
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>OfferCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferCondition} obj Optional instance to populate.
   * @return {module:model/OfferCondition} The populated <code>OfferCondition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DisplayValue')) {
        obj['DisplayValue'] = ApiClient.convertToType(data['DisplayValue'], 'String');
      }
      if (data.hasOwnProperty('Label')) {
        obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
      }
      if (data.hasOwnProperty('Locale')) {
        obj['Locale'] = ApiClient.convertToType(data['Locale'], 'String');
      }
      if (data.hasOwnProperty('Value')) {
        obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
      }
      if (data.hasOwnProperty('SubCondition')) {
        obj['SubCondition'] = OfferSubCondition.constructFromObject(data['SubCondition']);
      }
      if (data.hasOwnProperty('ConditionNote')) {
        obj['ConditionNote'] = OfferConditionNote.constructFromObject(data['ConditionNote']);
      }
    }
    return obj;
  }

  /**
   * @member {String} DisplayValue
   */
  exports.prototype['DisplayValue'] = undefined;
  /**
   * @member {String} Label
   */
  exports.prototype['Label'] = undefined;
  /**
   * @member {String} Locale
   */
  exports.prototype['Locale'] = undefined;
  /**
   * @member {String} Value
   */
  exports.prototype['Value'] = undefined;
  /**
   * @member {module:model/OfferSubCondition} SubCondition
   */
  exports.prototype['SubCondition'] = undefined;
  /**
   * @member {module:model/OfferConditionNote} ConditionNote
   */
  exports.prototype['ConditionNote'] = undefined;



  return exports;
}));


