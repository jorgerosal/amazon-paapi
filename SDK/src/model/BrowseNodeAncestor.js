/**
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
    root.ProductAdvertisingAPIv1.BrowseNodeAncestor = factory(root.ProductAdvertisingAPIv1.ApiClient);
  }
}(this, function(ApiClient, BrowseNodeAncestor) {
  'use strict';




  /**
   * The BrowseNodeAncestor model module.
   * @module model/BrowseNodeAncestor
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BrowseNodeAncestor</code>.
   * @alias module:model/BrowseNodeAncestor
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>BrowseNodeAncestor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrowseNodeAncestor} obj Optional instance to populate.
   * @return {module:model/BrowseNodeAncestor} The populated <code>BrowseNodeAncestor</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Ancestor')) {
        obj['Ancestor'] = this.constructFromObject(data['Ancestor']);
      }
      if (data.hasOwnProperty('ContextFreeName')) {
        obj['ContextFreeName'] = ApiClient.convertToType(data['ContextFreeName'], 'String');
      }
      if (data.hasOwnProperty('DisplayName')) {
        obj['DisplayName'] = ApiClient.convertToType(data['DisplayName'], 'String');
      }
      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BrowseNodeAncestor} Ancestor
   */
  exports.prototype['Ancestor'] = undefined;
  /**
   * @member {String} ContextFreeName
   */
  exports.prototype['ContextFreeName'] = undefined;
  /**
   * @member {String} DisplayName
   */
  exports.prototype['DisplayName'] = undefined;
  /**
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;



  return exports;
}));


