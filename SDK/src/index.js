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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Availability', 'model/BigDecimal', 'model/BrowseNode', 'model/BrowseNodeAncestor', 'model/BrowseNodeChild', 'model/BrowseNodeInfo', 'model/BrowseNodesResult', 'model/ByLineInfo', 'model/Classifications', 'model/Condition', 'model/ContentInfo', 'model/ContentRating', 'model/Contributor', 'model/CustomerReviews', 'model/DealDetails', 'model/DeliveryFlag', 'model/DimensionBasedAttribute', 'model/DurationPrice', 'model/ErrorData', 'model/ExternalIds', 'model/GetBrowseNodesRequest', 'model/GetBrowseNodesResource', 'model/GetBrowseNodesResponse', 'model/GetItemsRequest', 'model/GetItemsResource', 'model/GetItemsResponse', 'model/GetVariationsRequest', 'model/GetVariationsResource', 'model/GetVariationsResponse', 'model/ImageSize', 'model/ImageType', 'model/Images', 'model/Item', 'model/ItemIdType', 'model/ItemInfo', 'model/ItemsResult', 'model/LanguageType', 'model/Languages', 'model/ManufactureInfo', 'model/MaxPrice', 'model/Merchant', 'model/MinPrice', 'model/MinReviewsRating', 'model/MinSavingPercent', 'model/Money', 'model/MultiValuedAttribute', 'model/OfferAvailability', 'model/OfferAvailabilityV2', 'model/OfferCondition', 'model/OfferConditionNote', 'model/OfferConditionV2', 'model/OfferCount', 'model/OfferDeliveryInfo', 'model/OfferListing', 'model/OfferListingV2', 'model/OfferListings', 'model/OfferListingsV2', 'model/OfferLoyaltyPoints', 'model/OfferLoyaltyPointsV2', 'model/OfferMerchantInfo', 'model/OfferMerchantInfoV2', 'model/OfferPrice', 'model/OfferPriceV2', 'model/OfferProgramEligibility', 'model/OfferPromotion', 'model/OfferSavingBasis', 'model/OfferSavings', 'model/OfferSavingsV2', 'model/OfferShippingCharge', 'model/OfferSubCondition', 'model/OfferSummary', 'model/OfferType', 'model/Offers', 'model/OffersV2', 'model/PartnerType', 'model/Price', 'model/PriceType', 'model/ProductAdvertisingAPIClientException', 'model/ProductAdvertisingAPIServiceException', 'model/ProductInfo', 'model/Properties', 'model/Rating', 'model/Refinement', 'model/RefinementBin', 'model/RentalOfferListing', 'model/RentalOffers', 'model/SavingBasisType', 'model/SearchIndex', 'model/SearchItemsRequest', 'model/SearchItemsResource', 'model/SearchItemsResponse', 'model/SearchRefinements', 'model/SearchResult', 'model/SingleBooleanValuedAttribute', 'model/SingleIntegerValuedAttribute', 'model/SingleStringValuedAttribute', 'model/SortBy', 'model/TechnicalInfo', 'model/TradeInInfo', 'model/TradeInPrice', 'model/UnitBasedAttribute', 'model/VariationAttribute', 'model/VariationDimension', 'model/VariationSummary', 'model/VariationsResult', 'model/WebsiteSalesRank', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Availability'), require('./model/BigDecimal'), require('./model/BrowseNode'), require('./model/BrowseNodeAncestor'), require('./model/BrowseNodeChild'), require('./model/BrowseNodeInfo'), require('./model/BrowseNodesResult'), require('./model/ByLineInfo'), require('./model/Classifications'), require('./model/Condition'), require('./model/ContentInfo'), require('./model/ContentRating'), require('./model/Contributor'), require('./model/CustomerReviews'), require('./model/DealDetails'), require('./model/DeliveryFlag'), require('./model/DimensionBasedAttribute'), require('./model/DurationPrice'), require('./model/ErrorData'), require('./model/ExternalIds'), require('./model/GetBrowseNodesRequest'), require('./model/GetBrowseNodesResource'), require('./model/GetBrowseNodesResponse'), require('./model/GetItemsRequest'), require('./model/GetItemsResource'), require('./model/GetItemsResponse'), require('./model/GetVariationsRequest'), require('./model/GetVariationsResource'), require('./model/GetVariationsResponse'), require('./model/ImageSize'), require('./model/ImageType'), require('./model/Images'), require('./model/Item'), require('./model/ItemIdType'), require('./model/ItemInfo'), require('./model/ItemsResult'), require('./model/LanguageType'), require('./model/Languages'), require('./model/ManufactureInfo'), require('./model/MaxPrice'), require('./model/Merchant'), require('./model/MinPrice'), require('./model/MinReviewsRating'), require('./model/MinSavingPercent'), require('./model/Money'), require('./model/MultiValuedAttribute'), require('./model/OfferAvailability'), require('./model/OfferAvailabilityV2'), require('./model/OfferCondition'), require('./model/OfferConditionNote'), require('./model/OfferConditionV2'), require('./model/OfferCount'), require('./model/OfferDeliveryInfo'), require('./model/OfferListing'), require('./model/OfferListingV2'), require('./model/OfferListings'), require('./model/OfferListingsV2'), require('./model/OfferLoyaltyPoints'), require('./model/OfferLoyaltyPointsV2'), require('./model/OfferMerchantInfo'), require('./model/OfferMerchantInfoV2'), require('./model/OfferPrice'), require('./model/OfferPriceV2'), require('./model/OfferProgramEligibility'), require('./model/OfferPromotion'), require('./model/OfferSavingBasis'), require('./model/OfferSavings'), require('./model/OfferSavingsV2'), require('./model/OfferShippingCharge'), require('./model/OfferSubCondition'), require('./model/OfferSummary'), require('./model/OfferType'), require('./model/Offers'), require('./model/OffersV2'), require('./model/PartnerType'), require('./model/Price'), require('./model/PriceType'), require('./model/ProductAdvertisingAPIClientException'), require('./model/ProductAdvertisingAPIServiceException'), require('./model/ProductInfo'), require('./model/Properties'), require('./model/Rating'), require('./model/Refinement'), require('./model/RefinementBin'), require('./model/RentalOfferListing'), require('./model/RentalOffers'), require('./model/SavingBasisType'), require('./model/SearchIndex'), require('./model/SearchItemsRequest'), require('./model/SearchItemsResource'), require('./model/SearchItemsResponse'), require('./model/SearchRefinements'), require('./model/SearchResult'), require('./model/SingleBooleanValuedAttribute'), require('./model/SingleIntegerValuedAttribute'), require('./model/SingleStringValuedAttribute'), require('./model/SortBy'), require('./model/TechnicalInfo'), require('./model/TradeInInfo'), require('./model/TradeInPrice'), require('./model/UnitBasedAttribute'), require('./model/VariationAttribute'), require('./model/VariationDimension'), require('./model/VariationSummary'), require('./model/VariationsResult'), require('./model/WebsiteSalesRank'), require('./api/DefaultApi'));
  }
}(function(ApiClient, Availability, BigDecimal, BrowseNode, BrowseNodeAncestor, BrowseNodeChild, BrowseNodeInfo, BrowseNodesResult, ByLineInfo, Classifications, Condition, ContentInfo, ContentRating, Contributor, CustomerReviews, DealDetails, DeliveryFlag, DimensionBasedAttribute, DurationPrice, ErrorData, ExternalIds, GetBrowseNodesRequest, GetBrowseNodesResource, GetBrowseNodesResponse, GetItemsRequest, GetItemsResource, GetItemsResponse, GetVariationsRequest, GetVariationsResource, GetVariationsResponse, ImageSize, ImageType, Images, Item, ItemIdType, ItemInfo, ItemsResult, LanguageType, Languages, ManufactureInfo, MaxPrice, Merchant, MinPrice, MinReviewsRating, MinSavingPercent, Money, MultiValuedAttribute, OfferAvailability, OfferAvailabilityV2, OfferCondition, OfferConditionNote, OfferConditionV2, OfferCount, OfferDeliveryInfo, OfferListing, OfferListingV2, OfferListings, OfferListingsV2, OfferLoyaltyPoints, OfferLoyaltyPointsV2, OfferMerchantInfo, OfferMerchantInfoV2, OfferPrice, OfferPriceV2, OfferProgramEligibility, OfferPromotion, OfferSavingBasis, OfferSavings, OfferSavingsV2, OfferShippingCharge, OfferSubCondition, OfferSummary, OfferType, Offers, OffersV2, PartnerType, Price, PriceType, ProductAdvertisingAPIClientException, ProductAdvertisingAPIServiceException, ProductInfo, Properties, Rating, Refinement, RefinementBin, RentalOfferListing, RentalOffers, SavingBasisType, SearchIndex, SearchItemsRequest, SearchItemsResource, SearchItemsResponse, SearchRefinements, SearchResult, SingleBooleanValuedAttribute, SingleIntegerValuedAttribute, SingleStringValuedAttribute, SortBy, TechnicalInfo, TradeInInfo, TradeInPrice, UnitBasedAttribute, VariationAttribute, VariationDimension, VariationSummary, VariationsResult, WebsiteSalesRank, DefaultApi) {
  'use strict';

  /**
   * ProductAdvertisingAPI 5.0 NodeJS SDK.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ProductAdvertisingAPIv1 = require('index'); // See note below*.
   * var xxxSvc = new ProductAdvertisingAPIv1.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ProductAdvertisingAPIv1.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ProductAdvertisingAPIv1.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ProductAdvertisingAPIv1.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Availability model constructor.
     * @property {module:model/Availability}
     */
    Availability: Availability,
    /**
     * The BigDecimal model constructor.
     * @property {module:model/BigDecimal}
     */
    BigDecimal: BigDecimal,
    /**
     * The BrowseNode model constructor.
     * @property {module:model/BrowseNode}
     */
    BrowseNode: BrowseNode,
    /**
     * The BrowseNodeAncestor model constructor.
     * @property {module:model/BrowseNodeAncestor}
     */
    BrowseNodeAncestor: BrowseNodeAncestor,
    /**
     * The BrowseNodeChild model constructor.
     * @property {module:model/BrowseNodeChild}
     */
    BrowseNodeChild: BrowseNodeChild,
    /**
     * The BrowseNodeInfo model constructor.
     * @property {module:model/BrowseNodeInfo}
     */
    BrowseNodeInfo: BrowseNodeInfo,
    /**
     * The BrowseNodesResult model constructor.
     * @property {module:model/BrowseNodesResult}
     */
    BrowseNodesResult: BrowseNodesResult,
    /**
     * The ByLineInfo model constructor.
     * @property {module:model/ByLineInfo}
     */
    ByLineInfo: ByLineInfo,
    /**
     * The Classifications model constructor.
     * @property {module:model/Classifications}
     */
    Classifications: Classifications,
    /**
     * The Condition model constructor.
     * @property {module:model/Condition}
     */
    Condition: Condition,
    /**
     * The ContentInfo model constructor.
     * @property {module:model/ContentInfo}
     */
    ContentInfo: ContentInfo,
    /**
     * The ContentRating model constructor.
     * @property {module:model/ContentRating}
     */
    ContentRating: ContentRating,
    /**
     * The Contributor model constructor.
     * @property {module:model/Contributor}
     */
    Contributor: Contributor,
    /**
     * The CustomerReviews model constructor.
     * @property {module:model/CustomerReviews}
     */
    CustomerReviews: CustomerReviews,
    /**
     * The DealDetails model constructor.
     * @property {module:model/DealDetails}
     */
    DealDetails: DealDetails,
    /**
     * The DeliveryFlag model constructor.
     * @property {module:model/DeliveryFlag}
     */
    DeliveryFlag: DeliveryFlag,
    /**
     * The DimensionBasedAttribute model constructor.
     * @property {module:model/DimensionBasedAttribute}
     */
    DimensionBasedAttribute: DimensionBasedAttribute,
    /**
     * The DurationPrice model constructor.
     * @property {module:model/DurationPrice}
     */
    DurationPrice: DurationPrice,
    /**
     * The ErrorData model constructor.
     * @property {module:model/ErrorData}
     */
    ErrorData: ErrorData,
    /**
     * The ExternalIds model constructor.
     * @property {module:model/ExternalIds}
     */
    ExternalIds: ExternalIds,
    /**
     * The GetBrowseNodesRequest model constructor.
     * @property {module:model/GetBrowseNodesRequest}
     */
    GetBrowseNodesRequest: GetBrowseNodesRequest,
    /**
     * The GetBrowseNodesResource model constructor.
     * @property {module:model/GetBrowseNodesResource}
     */
    GetBrowseNodesResource: GetBrowseNodesResource,
    /**
     * The GetBrowseNodesResponse model constructor.
     * @property {module:model/GetBrowseNodesResponse}
     */
    GetBrowseNodesResponse: GetBrowseNodesResponse,
    /**
     * The GetItemsRequest model constructor.
     * @property {module:model/GetItemsRequest}
     */
    GetItemsRequest: GetItemsRequest,
    /**
     * The GetItemsResource model constructor.
     * @property {module:model/GetItemsResource}
     */
    GetItemsResource: GetItemsResource,
    /**
     * The GetItemsResponse model constructor.
     * @property {module:model/GetItemsResponse}
     */
    GetItemsResponse: GetItemsResponse,
    /**
     * The GetVariationsRequest model constructor.
     * @property {module:model/GetVariationsRequest}
     */
    GetVariationsRequest: GetVariationsRequest,
    /**
     * The GetVariationsResource model constructor.
     * @property {module:model/GetVariationsResource}
     */
    GetVariationsResource: GetVariationsResource,
    /**
     * The GetVariationsResponse model constructor.
     * @property {module:model/GetVariationsResponse}
     */
    GetVariationsResponse: GetVariationsResponse,
    /**
     * The ImageSize model constructor.
     * @property {module:model/ImageSize}
     */
    ImageSize: ImageSize,
    /**
     * The ImageType model constructor.
     * @property {module:model/ImageType}
     */
    ImageType: ImageType,
    /**
     * The Images model constructor.
     * @property {module:model/Images}
     */
    Images: Images,
    /**
     * The Item model constructor.
     * @property {module:model/Item}
     */
    Item: Item,
    /**
     * The ItemIdType model constructor.
     * @property {module:model/ItemIdType}
     */
    ItemIdType: ItemIdType,
    /**
     * The ItemInfo model constructor.
     * @property {module:model/ItemInfo}
     */
    ItemInfo: ItemInfo,
    /**
     * The ItemsResult model constructor.
     * @property {module:model/ItemsResult}
     */
    ItemsResult: ItemsResult,
    /**
     * The LanguageType model constructor.
     * @property {module:model/LanguageType}
     */
    LanguageType: LanguageType,
    /**
     * The Languages model constructor.
     * @property {module:model/Languages}
     */
    Languages: Languages,
    /**
     * The ManufactureInfo model constructor.
     * @property {module:model/ManufactureInfo}
     */
    ManufactureInfo: ManufactureInfo,
    /**
     * The MaxPrice model constructor.
     * @property {module:model/MaxPrice}
     */
    MaxPrice: MaxPrice,
    /**
     * The Merchant model constructor.
     * @property {module:model/Merchant}
     */
    Merchant: Merchant,
    /**
     * The MinPrice model constructor.
     * @property {module:model/MinPrice}
     */
    MinPrice: MinPrice,
    /**
     * The MinReviewsRating model constructor.
     * @property {module:model/MinReviewsRating}
     */
    MinReviewsRating: MinReviewsRating,
    /**
     * The MinSavingPercent model constructor.
     * @property {module:model/MinSavingPercent}
     */
    MinSavingPercent: MinSavingPercent,
    /**
     * The Money model constructor.
     * @property {module:model/Money}
     */
    Money: Money,
    /**
     * The MultiValuedAttribute model constructor.
     * @property {module:model/MultiValuedAttribute}
     */
    MultiValuedAttribute: MultiValuedAttribute,
    /**
     * The OfferAvailability model constructor.
     * @property {module:model/OfferAvailability}
     */
    OfferAvailability: OfferAvailability,
    /**
     * The OfferAvailabilityV2 model constructor.
     * @property {module:model/OfferAvailabilityV2}
     */
    OfferAvailabilityV2: OfferAvailabilityV2,
    /**
     * The OfferCondition model constructor.
     * @property {module:model/OfferCondition}
     */
    OfferCondition: OfferCondition,
    /**
     * The OfferConditionNote model constructor.
     * @property {module:model/OfferConditionNote}
     */
    OfferConditionNote: OfferConditionNote,
    /**
     * The OfferConditionV2 model constructor.
     * @property {module:model/OfferConditionV2}
     */
    OfferConditionV2: OfferConditionV2,
    /**
     * The OfferCount model constructor.
     * @property {module:model/OfferCount}
     */
    OfferCount: OfferCount,
    /**
     * The OfferDeliveryInfo model constructor.
     * @property {module:model/OfferDeliveryInfo}
     */
    OfferDeliveryInfo: OfferDeliveryInfo,
    /**
     * The OfferListing model constructor.
     * @property {module:model/OfferListing}
     */
    OfferListing: OfferListing,
    /**
     * The OfferListingV2 model constructor.
     * @property {module:model/OfferListingV2}
     */
    OfferListingV2: OfferListingV2,
    /**
     * The OfferListings model constructor.
     * @property {module:model/OfferListings}
     */
    OfferListings: OfferListings,
    /**
     * The OfferListingsV2 model constructor.
     * @property {module:model/OfferListingsV2}
     */
    OfferListingsV2: OfferListingsV2,
    /**
     * The OfferLoyaltyPoints model constructor.
     * @property {module:model/OfferLoyaltyPoints}
     */
    OfferLoyaltyPoints: OfferLoyaltyPoints,
    /**
     * The OfferLoyaltyPointsV2 model constructor.
     * @property {module:model/OfferLoyaltyPointsV2}
     */
    OfferLoyaltyPointsV2: OfferLoyaltyPointsV2,
    /**
     * The OfferMerchantInfo model constructor.
     * @property {module:model/OfferMerchantInfo}
     */
    OfferMerchantInfo: OfferMerchantInfo,
    /**
     * The OfferMerchantInfoV2 model constructor.
     * @property {module:model/OfferMerchantInfoV2}
     */
    OfferMerchantInfoV2: OfferMerchantInfoV2,
    /**
     * The OfferPrice model constructor.
     * @property {module:model/OfferPrice}
     */
    OfferPrice: OfferPrice,
    /**
     * The OfferPriceV2 model constructor.
     * @property {module:model/OfferPriceV2}
     */
    OfferPriceV2: OfferPriceV2,
    /**
     * The OfferProgramEligibility model constructor.
     * @property {module:model/OfferProgramEligibility}
     */
    OfferProgramEligibility: OfferProgramEligibility,
    /**
     * The OfferPromotion model constructor.
     * @property {module:model/OfferPromotion}
     */
    OfferPromotion: OfferPromotion,
    /**
     * The OfferSavingBasis model constructor.
     * @property {module:model/OfferSavingBasis}
     */
    OfferSavingBasis: OfferSavingBasis,
    /**
     * The OfferSavings model constructor.
     * @property {module:model/OfferSavings}
     */
    OfferSavings: OfferSavings,
    /**
     * The OfferSavingsV2 model constructor.
     * @property {module:model/OfferSavingsV2}
     */
    OfferSavingsV2: OfferSavingsV2,
    /**
     * The OfferShippingCharge model constructor.
     * @property {module:model/OfferShippingCharge}
     */
    OfferShippingCharge: OfferShippingCharge,
    /**
     * The OfferSubCondition model constructor.
     * @property {module:model/OfferSubCondition}
     */
    OfferSubCondition: OfferSubCondition,
    /**
     * The OfferSummary model constructor.
     * @property {module:model/OfferSummary}
     */
    OfferSummary: OfferSummary,
    /**
     * The OfferType model constructor.
     * @property {module:model/OfferType}
     */
    OfferType: OfferType,
    /**
     * The Offers model constructor.
     * @property {module:model/Offers}
     */
    Offers: Offers,
    /**
     * The OffersV2 model constructor.
     * @property {module:model/OffersV2}
     */
    OffersV2: OffersV2,
    /**
     * The PartnerType model constructor.
     * @property {module:model/PartnerType}
     */
    PartnerType: PartnerType,
    /**
     * The Price model constructor.
     * @property {module:model/Price}
     */
    Price: Price,
    /**
     * The PriceType model constructor.
     * @property {module:model/PriceType}
     */
    PriceType: PriceType,
    /**
     * The ProductAdvertisingAPIClientException model constructor.
     * @property {module:model/ProductAdvertisingAPIClientException}
     */
    ProductAdvertisingAPIClientException: ProductAdvertisingAPIClientException,
    /**
     * The ProductAdvertisingAPIServiceException model constructor.
     * @property {module:model/ProductAdvertisingAPIServiceException}
     */
    ProductAdvertisingAPIServiceException: ProductAdvertisingAPIServiceException,
    /**
     * The ProductInfo model constructor.
     * @property {module:model/ProductInfo}
     */
    ProductInfo: ProductInfo,
    /**
     * The Properties model constructor.
     * @property {module:model/Properties}
     */
    Properties: Properties,
    /**
     * The Rating model constructor.
     * @property {module:model/Rating}
     */
    Rating: Rating,
    /**
     * The Refinement model constructor.
     * @property {module:model/Refinement}
     */
    Refinement: Refinement,
    /**
     * The RefinementBin model constructor.
     * @property {module:model/RefinementBin}
     */
    RefinementBin: RefinementBin,
    /**
     * The RentalOfferListing model constructor.
     * @property {module:model/RentalOfferListing}
     */
    RentalOfferListing: RentalOfferListing,
    /**
     * The RentalOffers model constructor.
     * @property {module:model/RentalOffers}
     */
    RentalOffers: RentalOffers,
    /**
     * The SavingBasisType model constructor.
     * @property {module:model/SavingBasisType}
     */
    SavingBasisType: SavingBasisType,
    /**
     * The SearchIndex model constructor.
     * @property {module:model/SearchIndex}
     */
    SearchIndex: SearchIndex,
    /**
     * The SearchItemsRequest model constructor.
     * @property {module:model/SearchItemsRequest}
     */
    SearchItemsRequest: SearchItemsRequest,
    /**
     * The SearchItemsResource model constructor.
     * @property {module:model/SearchItemsResource}
     */
    SearchItemsResource: SearchItemsResource,
    /**
     * The SearchItemsResponse model constructor.
     * @property {module:model/SearchItemsResponse}
     */
    SearchItemsResponse: SearchItemsResponse,
    /**
     * The SearchRefinements model constructor.
     * @property {module:model/SearchRefinements}
     */
    SearchRefinements: SearchRefinements,
    /**
     * The SearchResult model constructor.
     * @property {module:model/SearchResult}
     */
    SearchResult: SearchResult,
    /**
     * The SingleBooleanValuedAttribute model constructor.
     * @property {module:model/SingleBooleanValuedAttribute}
     */
    SingleBooleanValuedAttribute: SingleBooleanValuedAttribute,
    /**
     * The SingleIntegerValuedAttribute model constructor.
     * @property {module:model/SingleIntegerValuedAttribute}
     */
    SingleIntegerValuedAttribute: SingleIntegerValuedAttribute,
    /**
     * The SingleStringValuedAttribute model constructor.
     * @property {module:model/SingleStringValuedAttribute}
     */
    SingleStringValuedAttribute: SingleStringValuedAttribute,
    /**
     * The SortBy model constructor.
     * @property {module:model/SortBy}
     */
    SortBy: SortBy,
    /**
     * The TechnicalInfo model constructor.
     * @property {module:model/TechnicalInfo}
     */
    TechnicalInfo: TechnicalInfo,
    /**
     * The TradeInInfo model constructor.
     * @property {module:model/TradeInInfo}
     */
    TradeInInfo: TradeInInfo,
    /**
     * The TradeInPrice model constructor.
     * @property {module:model/TradeInPrice}
     */
    TradeInPrice: TradeInPrice,
    /**
     * The UnitBasedAttribute model constructor.
     * @property {module:model/UnitBasedAttribute}
     */
    UnitBasedAttribute: UnitBasedAttribute,
    /**
     * The VariationAttribute model constructor.
     * @property {module:model/VariationAttribute}
     */
    VariationAttribute: VariationAttribute,
    /**
     * The VariationDimension model constructor.
     * @property {module:model/VariationDimension}
     */
    VariationDimension: VariationDimension,
    /**
     * The VariationSummary model constructor.
     * @property {module:model/VariationSummary}
     */
    VariationSummary: VariationSummary,
    /**
     * The VariationsResult model constructor.
     * @property {module:model/VariationsResult}
     */
    VariationsResult: VariationsResult,
    /**
     * The WebsiteSalesRank model constructor.
     * @property {module:model/WebsiteSalesRank}
     */
    WebsiteSalesRank: WebsiteSalesRank,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
