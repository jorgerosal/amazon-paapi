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
    define(['ApiClient', 'model/GetBrowseNodesResource', 'model/PartnerType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetBrowseNodesResource'), require('./PartnerType'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.GetBrowseNodesRequest = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.GetBrowseNodesResource, root.ProductAdvertisingAPIv1.PartnerType);
  }
}(this, function(ApiClient, GetBrowseNodesResource, PartnerType) {
  'use strict';




  /**
   * The GetBrowseNodesRequest model module.
   * @module model/GetBrowseNodesRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetBrowseNodesRequest</code>.
   * @alias module:model/GetBrowseNodesRequest
   * @class
   * @param browseNodeIds {Array.<String>} 
   * @param partnerTag {String} 
   * @param partnerType {module:model/PartnerType} 
   */
  var exports = function(browseNodeIds, partnerTag, partnerType) {
    var _this = this;

    _this['BrowseNodeIds'] = browseNodeIds;


    _this['PartnerTag'] = partnerTag;
    _this['PartnerType'] = partnerType;

  };

  /**
   * Constructs a <code>GetBrowseNodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBrowseNodesRequest} obj Optional instance to populate.
   * @return {module:model/GetBrowseNodesRequest} The populated <code>GetBrowseNodesRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('BrowseNodeIds')) {
        obj['BrowseNodeIds'] = ApiClient.convertToType(data['BrowseNodeIds'], ['String']);
      }
      if (data.hasOwnProperty('LanguagesOfPreference')) {
        obj['LanguagesOfPreference'] = ApiClient.convertToType(data['LanguagesOfPreference'], ['String']);
      }
      if (data.hasOwnProperty('Marketplace')) {
        obj['Marketplace'] = ApiClient.convertToType(data['Marketplace'], 'String');
      }
      if (data.hasOwnProperty('PartnerTag')) {
        obj['PartnerTag'] = ApiClient.convertToType(data['PartnerTag'], 'String');
      }
      if (data.hasOwnProperty('PartnerType')) {
        obj['PartnerType'] = PartnerType.constructFromObject(data['PartnerType']);
      }
      if (data.hasOwnProperty('Resources')) {
        obj['Resources'] = ApiClient.convertToType(data['Resources'], [GetBrowseNodesResource]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} BrowseNodeIds
   */
  exports.prototype['BrowseNodeIds'] = undefined;
  /**
   * @member {Array.<String>} LanguagesOfPreference
   */
  exports.prototype['LanguagesOfPreference'] = undefined;
  /**
   * @member {String} Marketplace
   */
  exports.prototype['Marketplace'] = undefined;
  /**
   * @member {String} PartnerTag
   */
  exports.prototype['PartnerTag'] = undefined;
  /**
   * @member {module:model/PartnerType} PartnerType
   */
  exports.prototype['PartnerType'] = undefined;
  /**
   * @member {Array.<module:model/GetBrowseNodesResource>} Resources
   */
  exports.prototype['Resources'] = undefined;



  return exports;
}));


