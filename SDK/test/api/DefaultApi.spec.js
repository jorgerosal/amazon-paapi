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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProductAdvertisingAPIv1);
  }
}(this, function(expect, ProductAdvertisingAPIv1) {
  'use strict';

  var instance;
  var DUMMY_ACCESS_KEY = 'DUMMY_ACCESS_KEY';
  var DUMMY_SECRET_KEY = 'DUMMY_SECRET_KEY';
  var DUMMY_REGION = 'DUMMY_REGION';
  var INVALID_SIGNATURE = 'InvalidSignature';
  var UNRECOGNIZED_CLIENT = 'UnrecognizedClient';
  var HOST = 'webservices.amazon.com';
  var REGION = 'us-east-1';

  beforeEach(function() {
    instance = new ProductAdvertisingAPIv1.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('getBrowseNodes', function() {
      it('should throw error if GetBrowseNodesRequest is not provided', function(done) {
        //var getBrowseNodesRequest = new ProductAdvertisingAPIv1.GetBrowseNodesRequest();
        try {
          instance.getBrowseNodes();
        } catch (e) {
          expect(e).to.be.a(Error);
          expect(e.message).to.be('Missing the required parameter \'getBrowseNodesRequest\' when calling getBrowseNodes');
          done();
        }
      });

      it('PA-API 5.0 call should fail with InvalidSignature error when GetBrowseNodes request has invalid region', function(done) {
        var getBrowseNodesRequest = new ProductAdvertisingAPIv1.GetBrowseNodesRequest();
        var defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;
        defaultClient.accessKey = DUMMY_ACCESS_KEY;
        defaultClient.secretKey = DUMMY_SECRET_KEY;
        defaultClient.host = HOST;
        defaultClient.region = DUMMY_REGION;

        instance.getBrowseNodes(getBrowseNodesRequest).then(
          {},
          function(error) {
            expect(error['status']).to.be(401);
            expect(JSON.parse(error['response']['text'])['Errors'][0]['Code']).to.be(INVALID_SIGNATURE);
            done();
          }
        );
      });

      it('PA-API 5.0 call should fail with UnrecognizedClient error when GetBrowseNodes request has dummy credentials', function(done) {
        var getBrowseNodesRequest = new ProductAdvertisingAPIv1.GetBrowseNodesRequest();
        var defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;
        defaultClient.accessKey = DUMMY_ACCESS_KEY;
        defaultClient.secretKey = DUMMY_SECRET_KEY;
        defaultClient.host = HOST;
        defaultClient.region = REGION;

        instance.getBrowseNodes(getBrowseNodesRequest).then(
          {},
          function(error) {
            expect(error['status']).to.be(401);
            expect(JSON.parse(error['response']['text'])['Errors'][0]['Code']).to.be(UNRECOGNIZED_CLIENT);
            done();
          }
        );
      });
    });

    describe('getItems', function() {
      it('should throw error if GetItemsRequest is not provided', function(done) {
        try {
          instance.getItems();
        } catch (e) {
          expect(e).to.be.a(Error);
          expect(e.message).to.be('Missing the required parameter \'getItemsRequest\' when calling getItems');
          done();
        }
      });

      it('PA-API 5.0 call should fail with InvalidSignature error when GetItems request has invalid region', function(done) {
        var getItemsRequest = new ProductAdvertisingAPIv1.GetItemsRequest();
        var defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;
        defaultClient.accessKey = DUMMY_ACCESS_KEY;
        defaultClient.secretKey = DUMMY_SECRET_KEY;
        defaultClient.host = HOST;
        defaultClient.region = DUMMY_REGION;

        instance.getItems(getItemsRequest).then(
          {},
          function(error) {
            expect(error['status']).to.be(401);
            expect(JSON.parse(error['response']['text'])['Errors'][0]['Code']).to.be(INVALID_SIGNATURE);
            done();
          }
        );
      });

      it('PA-API 5.0 call should fail with UnrecognizedClient error when GetItems request has dummy credentials', function(done) {
        var getItemsRequest = new ProductAdvertisingAPIv1.GetItemsRequest();
        var defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;
        defaultClient.accessKey = DUMMY_ACCESS_KEY;
        defaultClient.secretKey = DUMMY_SECRET_KEY;
        defaultClient.host = HOST;
        defaultClient.region = REGION;

        instance.getItems(getItemsRequest).then(
          {},
          function(error) {
            expect(error['status']).to.be(401);
            expect(JSON.parse(error['response']['text'])['Errors'][0]['Code']).to.be(UNRECOGNIZED_CLIENT);
            done();
          }
        );
      });
    });

    describe('getVariations', function() {
      it('should throw error if GetVariationsRequest is not provided', function(done) {
        try {
          instance.getVariations();
        } catch (e) {
          expect(e).to.be.a(Error);
          expect(e.message).to.be('Missing the required parameter \'getVariationsRequest\' when calling getVariations');
          done();
        }
      });

      it('PA-API 5.0 call should fail with InvalidSignature error when GetVariations request has invalid region', function(done) {
        var getVariationsRequest = new ProductAdvertisingAPIv1.GetVariationsRequest();
        var defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;
        defaultClient.accessKey = DUMMY_ACCESS_KEY;
        defaultClient.secretKey = DUMMY_SECRET_KEY;
        defaultClient.host = HOST;
        defaultClient.region = DUMMY_REGION;

        instance.getVariations(getVariationsRequest).then(
          {},
          function(error) {
            expect(error['status']).to.be(401);
            expect(JSON.parse(error['response']['text'])['Errors'][0]['Code']).to.be(INVALID_SIGNATURE);
            done();
          }
        );
      });

      it('PA-API 5.0 call should fail with UnrecognizedClient error when GetVariations request has dummy credentials', function(done) {
        var getVariationsRequest = new ProductAdvertisingAPIv1.GetVariationsRequest();
        var defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;
        defaultClient.accessKey = DUMMY_ACCESS_KEY;
        defaultClient.secretKey = DUMMY_SECRET_KEY;
        defaultClient.host = HOST;
        defaultClient.region = REGION;

        instance.getVariations(getVariationsRequest).then(
          {},
          function(error) {
            expect(error['status']).to.be(401);
            expect(JSON.parse(error['response']['text'])['Errors'][0]['Code']).to.be(UNRECOGNIZED_CLIENT);
            done();
          }
        );
      });
    });

    describe('searchItems', function() {
      it('should throw error if SearchItemsRequest is not provided', function(done) {
        try {
          instance.searchItems();
        } catch (e) {
          expect(e).to.be.a(Error);
          expect(e.message).to.be('Missing the required parameter \'searchItemsRequest\' when calling searchItems');
          done();
        }
      });

      it('PA-API 5.0 call should fail with InvalidSignature error when SearchItems request has invalid region', function(done) {
        var searchItemsRequest = new ProductAdvertisingAPIv1.SearchItemsRequest();
        var defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;
        defaultClient.accessKey = DUMMY_ACCESS_KEY;
        defaultClient.secretKey = DUMMY_SECRET_KEY;
        defaultClient.host = HOST;
        defaultClient.region = DUMMY_REGION;

        instance.searchItems(searchItemsRequest).then(
          {},
          function(error) {
            expect(error['status']).to.be(401);
            expect(JSON.parse(error['response']['text'])['Errors'][0]['Code']).to.be(INVALID_SIGNATURE);
            done();
          }
        );
      });

      it('PA-API 5.0 call should fail with UnrecognizedClient error when SearchItems request has dummy credentials', function(done) {
        var searchItemsRequest = new ProductAdvertisingAPIv1.SearchItemsRequest();
        var defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;
        defaultClient.accessKey = DUMMY_ACCESS_KEY;
        defaultClient.secretKey = DUMMY_SECRET_KEY;
        defaultClient.host = HOST;
        defaultClient.region = REGION;

        instance.searchItems(searchItemsRequest).then(
          {},
          function(error) {
            expect(error['status']).to.be(401);
            expect(JSON.parse(error['response']['text'])['Errors'][0]['Code']).to.be(UNRECOGNIZED_CLIENT);
            done();
          }
        );
      });
    });
  });

}));
