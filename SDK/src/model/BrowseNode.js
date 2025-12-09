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
    define(['ApiClient', 'model/BrowseNodeAncestor', 'model/BrowseNodeChild'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BrowseNodeAncestor'), require('./BrowseNodeChild'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.BrowseNode = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.BrowseNodeAncestor, root.ProductAdvertisingAPIv1.BrowseNodeChild);
  }
}(this, function(ApiClient, BrowseNodeAncestor, BrowseNodeChild) {
  'use strict';




  /**
   * The BrowseNode model module.
   * @module model/BrowseNode
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BrowseNode</code>.
   * @alias module:model/BrowseNode
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>BrowseNode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrowseNode} obj Optional instance to populate.
   * @return {module:model/BrowseNode} The populated <code>BrowseNode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Ancestor')) {
        obj['Ancestor'] = BrowseNodeAncestor.constructFromObject(data['Ancestor']);
      }
      if (data.hasOwnProperty('Children')) {
        obj['Children'] = ApiClient.convertToType(data['Children'], [BrowseNodeChild]);
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
      if (data.hasOwnProperty('IsRoot')) {
        obj['IsRoot'] = ApiClient.convertToType(data['IsRoot'], 'Boolean');
      }
      if (data.hasOwnProperty('SalesRank')) {
        obj['SalesRank'] = ApiClient.convertToType(data['SalesRank'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BrowseNodeAncestor} Ancestor
   */
  exports.prototype['Ancestor'] = undefined;
  /**
   * @member {Array.<module:model/BrowseNodeChild>} Children
   */
  exports.prototype['Children'] = undefined;
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
  /**
   * @member {Boolean} IsRoot
   */
  exports.prototype['IsRoot'] = undefined;
  /**
   * @member {Number} SalesRank
   */
  exports.prototype['SalesRank'] = undefined;



  return exports;
}));


