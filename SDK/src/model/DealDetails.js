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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.DealDetails = factory(root.ProductAdvertisingAPIv1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DealDetails model module.
   * @module model/DealDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DealDetails</code>.
   * @alias module:model/DealDetails
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>DealDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DealDetails} obj Optional instance to populate.
   * @return {module:model/DealDetails} The populated <code>DealDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('AccessType')) {
        obj['AccessType'] = ApiClient.convertToType(data['AccessType'], 'String');
      }
      if (data.hasOwnProperty('Badge')) {
        obj['Badge'] = ApiClient.convertToType(data['Badge'], 'String');
      }
      if (data.hasOwnProperty('EarlyAccessDurationInMilliseconds')) {
        obj['EarlyAccessDurationInMilliseconds'] = ApiClient.convertToType(data['EarlyAccessDurationInMilliseconds'], 'Number');
      }
      if (data.hasOwnProperty('EndTime')) {
        obj['EndTime'] = ApiClient.convertToType(data['EndTime'], 'String');
      }
      if (data.hasOwnProperty('PercentClaimed')) {
        obj['PercentClaimed'] = ApiClient.convertToType(data['PercentClaimed'], 'Number');
      }
      if (data.hasOwnProperty('StartTime')) {
        obj['StartTime'] = ApiClient.convertToType(data['StartTime'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} AccessType
   */
  exports.prototype['AccessType'] = undefined;
  /**
   * @member {String} Badge
   */
  exports.prototype['Badge'] = undefined;
  /**
   * @member {Number} EarlyAccessDurationInMilliseconds
   */
  exports.prototype['EarlyAccessDurationInMilliseconds'] = undefined;
  /**
   * @member {String} EndTime
   */
  exports.prototype['EndTime'] = undefined;
  /**
   * @member {Number} PercentClaimed
   */
  exports.prototype['PercentClaimed'] = undefined;
  /**
   * @member {String} StartTime
   */
  exports.prototype['StartTime'] = undefined;



  return exports;
}));


