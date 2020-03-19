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
    define(['ApiClient', 'model/MultiValuedAttribute'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MultiValuedAttribute'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.ExternalIds = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.MultiValuedAttribute);
  }
}(this, function(ApiClient, MultiValuedAttribute) {
  'use strict';




  /**
   * The ExternalIds model module.
   * @module model/ExternalIds
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ExternalIds</code>.
   * @alias module:model/ExternalIds
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ExternalIds</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalIds} obj Optional instance to populate.
   * @return {module:model/ExternalIds} The populated <code>ExternalIds</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('EANs')) {
        obj['EANs'] = MultiValuedAttribute.constructFromObject(data['EANs']);
      }
      if (data.hasOwnProperty('ISBNs')) {
        obj['ISBNs'] = MultiValuedAttribute.constructFromObject(data['ISBNs']);
      }
      if (data.hasOwnProperty('UPCs')) {
        obj['UPCs'] = MultiValuedAttribute.constructFromObject(data['UPCs']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MultiValuedAttribute} EANs
   */
  exports.prototype['EANs'] = undefined;
  /**
   * @member {module:model/MultiValuedAttribute} ISBNs
   */
  exports.prototype['ISBNs'] = undefined;
  /**
   * @member {module:model/MultiValuedAttribute} UPCs
   */
  exports.prototype['UPCs'] = undefined;



  return exports;
}));


