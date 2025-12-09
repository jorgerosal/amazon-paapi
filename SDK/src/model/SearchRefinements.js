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
    define(['ApiClient', 'model/Refinement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Refinement'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.SearchRefinements = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.Refinement);
  }
}(this, function(ApiClient, Refinement) {
  'use strict';




  /**
   * The SearchRefinements model module.
   * @module model/SearchRefinements
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SearchRefinements</code>.
   * @alias module:model/SearchRefinements
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SearchRefinements</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchRefinements} obj Optional instance to populate.
   * @return {module:model/SearchRefinements} The populated <code>SearchRefinements</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('BrowseNode')) {
        obj['BrowseNode'] = Refinement.constructFromObject(data['BrowseNode']);
      }
      if (data.hasOwnProperty('OtherRefinements')) {
        obj['OtherRefinements'] = ApiClient.convertToType(data['OtherRefinements'], [Refinement]);
      }
      if (data.hasOwnProperty('SearchIndex')) {
        obj['SearchIndex'] = Refinement.constructFromObject(data['SearchIndex']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Refinement} BrowseNode
   */
  exports.prototype['BrowseNode'] = undefined;
  /**
   * @member {Array.<module:model/Refinement>} OtherRefinements
   */
  exports.prototype['OtherRefinements'] = undefined;
  /**
   * @member {module:model/Refinement} SearchIndex
   */
  exports.prototype['SearchIndex'] = undefined;



  return exports;
}));


