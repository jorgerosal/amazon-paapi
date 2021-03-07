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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.SearchItemsResource = factory(root.ProductAdvertisingAPIv1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class SearchItemsResource.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "BrowseNodeInfo.BrowseNodes"
     * @const
     */
    "BrowseNodeInfo.BrowseNodes": "BrowseNodeInfo.BrowseNodes",
    /**
     * value: "BrowseNodeInfo.BrowseNodes.Ancestor"
     * @const
     */
    "BrowseNodeInfo.BrowseNodes.Ancestor": "BrowseNodeInfo.BrowseNodes.Ancestor",
    /**
     * value: "BrowseNodeInfo.BrowseNodes.SalesRank"
     * @const
     */
    "BrowseNodeInfo.BrowseNodes.SalesRank": "BrowseNodeInfo.BrowseNodes.SalesRank",
    /**
     * value: "BrowseNodeInfo.WebsiteSalesRank"
     * @const
     */
    "BrowseNodeInfo.WebsiteSalesRank": "BrowseNodeInfo.WebsiteSalesRank",
    /**
     * value: "CustomerReviews.Count"
     * @const
     */
    "CustomerReviews.Count": "CustomerReviews.Count",
    /**
     * value: "CustomerReviews.StarRating"
     * @const
     */
    "CustomerReviews.StarRating": "CustomerReviews.StarRating",
    /**
     * value: "Images.Primary.Small"
     * @const
     */
    "Images.Primary.Small": "Images.Primary.Small",
    /**
     * value: "Images.Primary.Medium"
     * @const
     */
    "Images.Primary.Medium": "Images.Primary.Medium",
    /**
     * value: "Images.Primary.Large"
     * @const
     */
    "Images.Primary.Large": "Images.Primary.Large",
    /**
     * value: "Images.Variants.Small"
     * @const
     */
    "Images.Variants.Small": "Images.Variants.Small",
    /**
     * value: "Images.Variants.Medium"
     * @const
     */
    "Images.Variants.Medium": "Images.Variants.Medium",
    /**
     * value: "Images.Variants.Large"
     * @const
     */
    "Images.Variants.Large": "Images.Variants.Large",
    /**
     * value: "ItemInfo.ByLineInfo"
     * @const
     */
    "ItemInfo.ByLineInfo": "ItemInfo.ByLineInfo",
    /**
     * value: "ItemInfo.ContentInfo"
     * @const
     */
    "ItemInfo.ContentInfo": "ItemInfo.ContentInfo",
    /**
     * value: "ItemInfo.ContentRating"
     * @const
     */
    "ItemInfo.ContentRating": "ItemInfo.ContentRating",
    /**
     * value: "ItemInfo.Classifications"
     * @const
     */
    "ItemInfo.Classifications": "ItemInfo.Classifications",
    /**
     * value: "ItemInfo.ExternalIds"
     * @const
     */
    "ItemInfo.ExternalIds": "ItemInfo.ExternalIds",
    /**
     * value: "ItemInfo.Features"
     * @const
     */
    "ItemInfo.Features": "ItemInfo.Features",
    /**
     * value: "ItemInfo.ManufactureInfo"
     * @const
     */
    "ItemInfo.ManufactureInfo": "ItemInfo.ManufactureInfo",
    /**
     * value: "ItemInfo.ProductInfo"
     * @const
     */
    "ItemInfo.ProductInfo": "ItemInfo.ProductInfo",
    /**
     * value: "ItemInfo.TechnicalInfo"
     * @const
     */
    "ItemInfo.TechnicalInfo": "ItemInfo.TechnicalInfo",
    /**
     * value: "ItemInfo.Title"
     * @const
     */
    "ItemInfo.Title": "ItemInfo.Title",
    /**
     * value: "ItemInfo.TradeInInfo"
     * @const
     */
    "ItemInfo.TradeInInfo": "ItemInfo.TradeInInfo",
    /**
     * value: "Offers.Listings.Availability.MaxOrderQuantity"
     * @const
     */
    "Offers.Listings.Availability.MaxOrderQuantity": "Offers.Listings.Availability.MaxOrderQuantity",
    /**
     * value: "Offers.Listings.Availability.Message"
     * @const
     */
    "Offers.Listings.Availability.Message": "Offers.Listings.Availability.Message",
    /**
     * value: "Offers.Listings.Availability.MinOrderQuantity"
     * @const
     */
    "Offers.Listings.Availability.MinOrderQuantity": "Offers.Listings.Availability.MinOrderQuantity",
    /**
     * value: "Offers.Listings.Availability.Type"
     * @const
     */
    "Offers.Listings.Availability.Type": "Offers.Listings.Availability.Type",
    /**
     * value: "Offers.Listings.Condition"
     * @const
     */
    "Offers.Listings.Condition": "Offers.Listings.Condition",
    /**
     * value: "Offers.Listings.Condition.ConditionNote"
     * @const
     */
    "Offers.Listings.Condition.ConditionNote": "Offers.Listings.Condition.ConditionNote",
    /**
     * value: "Offers.Listings.Condition.SubCondition"
     * @const
     */
    "Offers.Listings.Condition.SubCondition": "Offers.Listings.Condition.SubCondition",
    /**
     * value: "Offers.Listings.DeliveryInfo.IsAmazonFulfilled"
     * @const
     */
    "Offers.Listings.DeliveryInfo.IsAmazonFulfilled": "Offers.Listings.DeliveryInfo.IsAmazonFulfilled",
    /**
     * value: "Offers.Listings.DeliveryInfo.IsFreeShippingEligible"
     * @const
     */
    "Offers.Listings.DeliveryInfo.IsFreeShippingEligible": "Offers.Listings.DeliveryInfo.IsFreeShippingEligible",
    /**
     * value: "Offers.Listings.DeliveryInfo.IsPrimeEligible"
     * @const
     */
    "Offers.Listings.DeliveryInfo.IsPrimeEligible": "Offers.Listings.DeliveryInfo.IsPrimeEligible",
    /**
     * value: "Offers.Listings.DeliveryInfo.ShippingCharges"
     * @const
     */
    "Offers.Listings.DeliveryInfo.ShippingCharges": "Offers.Listings.DeliveryInfo.ShippingCharges",
    /**
     * value: "Offers.Listings.IsBuyBoxWinner"
     * @const
     */
    "Offers.Listings.IsBuyBoxWinner": "Offers.Listings.IsBuyBoxWinner",
    /**
     * value: "Offers.Listings.LoyaltyPoints.Points"
     * @const
     */
    "Offers.Listings.LoyaltyPoints.Points": "Offers.Listings.LoyaltyPoints.Points",
    /**
     * value: "Offers.Listings.MerchantInfo"
     * @const
     */
    "Offers.Listings.MerchantInfo": "Offers.Listings.MerchantInfo",
    /**
     * value: "Offers.Listings.Price"
     * @const
     */
    "Offers.Listings.Price": "Offers.Listings.Price",
    /**
     * value: "Offers.Listings.ProgramEligibility.IsPrimeExclusive"
     * @const
     */
    "Offers.Listings.ProgramEligibility.IsPrimeExclusive": "Offers.Listings.ProgramEligibility.IsPrimeExclusive",
    /**
     * value: "Offers.Listings.ProgramEligibility.IsPrimePantry"
     * @const
     */
    "Offers.Listings.ProgramEligibility.IsPrimePantry": "Offers.Listings.ProgramEligibility.IsPrimePantry",
    /**
     * value: "Offers.Listings.Promotions"
     * @const
     */
    "Offers.Listings.Promotions": "Offers.Listings.Promotions",
    /**
     * value: "Offers.Listings.SavingBasis"
     * @const
     */
    "Offers.Listings.SavingBasis": "Offers.Listings.SavingBasis",
    /**
     * value: "Offers.Summaries.HighestPrice"
     * @const
     */
    "Offers.Summaries.HighestPrice": "Offers.Summaries.HighestPrice",
    /**
     * value: "Offers.Summaries.LowestPrice"
     * @const
     */
    "Offers.Summaries.LowestPrice": "Offers.Summaries.LowestPrice",
    /**
     * value: "Offers.Summaries.OfferCount"
     * @const
     */
    "Offers.Summaries.OfferCount": "Offers.Summaries.OfferCount",
    /**
     * value: "ParentASIN"
     * @const
     */
    "ParentASIN": "ParentASIN",
    /**
     * value: "RentalOffers.Listings.Availability.MaxOrderQuantity"
     * @const
     */
    "RentalOffers.Listings.Availability.MaxOrderQuantity": "RentalOffers.Listings.Availability.MaxOrderQuantity",
    /**
     * value: "RentalOffers.Listings.Availability.Message"
     * @const
     */
    "RentalOffers.Listings.Availability.Message": "RentalOffers.Listings.Availability.Message",
    /**
     * value: "RentalOffers.Listings.Availability.MinOrderQuantity"
     * @const
     */
    "RentalOffers.Listings.Availability.MinOrderQuantity": "RentalOffers.Listings.Availability.MinOrderQuantity",
    /**
     * value: "RentalOffers.Listings.Availability.Type"
     * @const
     */
    "RentalOffers.Listings.Availability.Type": "RentalOffers.Listings.Availability.Type",
    /**
     * value: "RentalOffers.Listings.BasePrice"
     * @const
     */
    "RentalOffers.Listings.BasePrice": "RentalOffers.Listings.BasePrice",
    /**
     * value: "RentalOffers.Listings.Condition"
     * @const
     */
    "RentalOffers.Listings.Condition": "RentalOffers.Listings.Condition",
    /**
     * value: "RentalOffers.Listings.Condition.ConditionNote"
     * @const
     */
    "RentalOffers.Listings.Condition.ConditionNote": "RentalOffers.Listings.Condition.ConditionNote",
    /**
     * value: "RentalOffers.Listings.Condition.SubCondition"
     * @const
     */
    "RentalOffers.Listings.Condition.SubCondition": "RentalOffers.Listings.Condition.SubCondition",
    /**
     * value: "RentalOffers.Listings.DeliveryInfo.IsAmazonFulfilled"
     * @const
     */
    "RentalOffers.Listings.DeliveryInfo.IsAmazonFulfilled": "RentalOffers.Listings.DeliveryInfo.IsAmazonFulfilled",
    /**
     * value: "RentalOffers.Listings.DeliveryInfo.IsFreeShippingEligible"
     * @const
     */
    "RentalOffers.Listings.DeliveryInfo.IsFreeShippingEligible": "RentalOffers.Listings.DeliveryInfo.IsFreeShippingEligible",
    /**
     * value: "RentalOffers.Listings.DeliveryInfo.IsPrimeEligible"
     * @const
     */
    "RentalOffers.Listings.DeliveryInfo.IsPrimeEligible": "RentalOffers.Listings.DeliveryInfo.IsPrimeEligible",
    /**
     * value: "RentalOffers.Listings.DeliveryInfo.ShippingCharges"
     * @const
     */
    "RentalOffers.Listings.DeliveryInfo.ShippingCharges": "RentalOffers.Listings.DeliveryInfo.ShippingCharges",
    /**
     * value: "RentalOffers.Listings.MerchantInfo"
     * @const
     */
    "RentalOffers.Listings.MerchantInfo": "RentalOffers.Listings.MerchantInfo",
    /**
     * value: "SearchRefinements"
     * @const
     */
    "SearchRefinements": "SearchRefinements"  };

  /**
   * Returns a <code>SearchItemsResource</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/SearchItemsResource} The enum <code>SearchItemsResource</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


