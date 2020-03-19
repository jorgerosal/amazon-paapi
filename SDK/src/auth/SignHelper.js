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
 * This file is for signing PAAPI request with AWS V4 Signing. For more details, see
 * https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html
 *
 * Do not edit the class manually.
 *
 */

'use strict';

// sources of inspiration:
// http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html

var crypto = require('crypto-js');

exports.createAuthorizationHeader = function(
  accessKey,
  secretKey,
  requestHeaders,
  httpMethod,
  path,
  payload,
  region,
  service,
  timestamp
) {
  /* Step 1: Create Signed Headers */
  var signedHeaders = exports.createSignedHeaders(requestHeaders);

  /* Step 2: Create Canonical Request */
  var canonicalRequest = exports.createCanonicalRequest(httpMethod, path, {}, requestHeaders, payload);

  /* Step 3: Create String To Sign */
  var stringToSign = exports.createStringToSign(timestamp, region, service, canonicalRequest);

  /* Step 4: Create Signature Headers */
  var signature = exports.createSignature(secretKey, timestamp, region, service, stringToSign);

  /* Step 5: Create Authorization Header */
  var authorizationHeader = exports.createAuthorizationHeaders(
    timestamp,
    accessKey,
    region,
    service,
    signedHeaders,
    signature
  );

  return authorizationHeader;
};

exports.createAuthorizationHeaders = function(timestamp, accessKey, region, service, signedHeaders, signature) {
  return (
    'AWS4-HMAC-SHA256' +
    ' ' +
    'Credential=' +
    accessKey +
    '/' +
    exports.createCredentialScope(timestamp, region, service) +
    ', ' +
    'SignedHeaders=' +
    signedHeaders +
    ', ' +
    'Signature=' +
    signature
  );
};

exports.createCanonicalRequest = function(method, pathname, query, headers, payload) {
  var payloadJson = JSON.stringify(payload);
  return [
    method.toUpperCase(),
    pathname,
    exports.createCanonicalQueryString(query),
    exports.createCanonicalHeaders(headers),
    exports.createSignedHeaders(headers),
    hexEncodedHash(String(payloadJson))
  ].join('\n');
};

exports.createCanonicalQueryString = function(params) {
  return Object.keys(params)
    .sort()
    .map(function(key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    })
    .join('&');
};

exports.createCanonicalHeaders = function(headers) {
  return Object.keys(headers)
    .sort()
    .map(function(name) {
      return name.toLowerCase().trim() + ':' + headers[name].toString().trim() + '\n';
    })
    .join('');
};

exports.createSignedHeaders = function(headers) {
  return Object.keys(headers)
    .sort()
    .map(function(name) {
      return name.toLowerCase().trim();
    })
    .join(';');
};

exports.createCredentialScope = function(time, region, service) {
  return [toDate(time), region, service, 'aws4_request'].join('/');
};

exports.createStringToSign = function(time, region, service, request) {
  return [
    'AWS4-HMAC-SHA256',
    toTime(time),
    exports.createCredentialScope(time, region, service),
    hexEncodedHash(request)
  ].join('\n');
};

exports.createSignature = function(secret, time, region, service, stringToSign) {
  var h1 = hmac('AWS4' + secret, toDate(time)); // date-key
  var h2 = hmac(h1, region); // region-key
  var h3 = hmac(h2, service); // service-key
  var h4 = hmac(h3, 'aws4_request'); // signing-key
  return hmac(h4, stringToSign).toString(crypto.enc.Hex);
};

exports.toAmzDate = function(time) {
  return new Date(time).toISOString().replace(/[:\-]|\.\d{3}/g, '');
};

function toTime(time) {
  return new Date(time).toISOString().replace(/[:\-]|\.\d{3}/g, '');
}

function toDate(time) {
  return toTime(time).substring(0, 8);
}

function hmac(key, data) {
  return crypto.HmacSHA256(data, key);
}

function hexEncodedHash(data) {
  return crypto.SHA256(data).toString(crypto.enc.Hex);
}
