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
    define(['ApiClient', 'model/Money', 'model/SavingBasisType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Money'), require('./SavingBasisType'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.OfferSavingBasis = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.Money, root.ProductAdvertisingAPIv1.SavingBasisType);
  }
}(this, function(ApiClient, Money, SavingBasisType) {
  'use strict';




  /**
   * The OfferSavingBasis model module.
   * @module model/OfferSavingBasis
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OfferSavingBasis</code>.
   * @alias module:model/OfferSavingBasis
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>OfferSavingBasis</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferSavingBasis} obj Optional instance to populate.
   * @return {module:model/OfferSavingBasis} The populated <code>OfferSavingBasis</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Money')) {
        obj['Money'] = Money.constructFromObject(data['Money']);
      }
      if (data.hasOwnProperty('SavingBasisType')) {
        obj['SavingBasisType'] = SavingBasisType.constructFromObject(data['SavingBasisType']);
      }
      if (data.hasOwnProperty('SavingBasisTypeLabel')) {
        obj['SavingBasisTypeLabel'] = ApiClient.convertToType(data['SavingBasisTypeLabel'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Money} Money
   */
  exports.prototype['Money'] = undefined;
  /**
   * @member {module:model/SavingBasisType} SavingBasisType
   */
  exports.prototype['SavingBasisType'] = undefined;
  /**
   * @member {String} SavingBasisTypeLabel
   */
  exports.prototype['SavingBasisTypeLabel'] = undefined;



  return exports;
}));


