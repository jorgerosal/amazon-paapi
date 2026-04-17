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
    root.ProductAdvertisingAPIv1.Condition = factory(root.ProductAdvertisingAPIv1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class Condition.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "Any"
     * @const
     */
    "Any": "Any",
    /**
     * value: "Collectible"
     * @const
     */
    "Collectible": "Collectible",
    /**
     * value: "New"
     * @const
     */
    "New": "New",
    /**
     * value: "Refurbished"
     * @const
     */
    "Refurbished": "Refurbished",
    /**
     * value: "Used"
     * @const
     */
    "Used": "Used"  };

  /**
   * Returns a <code>Condition</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/Condition} The enum <code>Condition</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


