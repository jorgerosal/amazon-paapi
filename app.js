const paapiSdk = require('./SDK/src/index'); // This is downloaded straight from PAAPI website.
const marketplaceList = require('./marketplace.json');

const defaultClient = paapiSdk.ApiClient.instance;
const api = new paapiSdk.DefaultApi();
const OPERATIONS = {
  getItems: paapiSdk.GetItemsRequest,
  getBrowseNodes: paapiSdk.GetBrowseNodesRequest,
  getVariations: paapiSdk.GetVariationsRequest,
  searchItems: paapiSdk.SearchItemsRequest,
};

const OFFERS_V1_RESOURCE_PREFIX = 'Offers.';
const OFFERS_V2_RESOURCE_PREFIX = 'OffersV2.';

const apiRequest = async (Options) => {
  let commonParameters = Options.commonParameters;
  defaultClient.accessKey = commonParameters.AccessKey;
  defaultClient.secretKey = commonParameters.SecretKey;

  let marketPlaceDetails = await getMarketplaceDetails(commonParameters.Marketplace);
  defaultClient.host = marketPlaceDetails.Host;
  defaultClient.region = marketPlaceDetails.Region;

  let operationOptions = getDefaultOperation(Options.Operations);
  operationOptions['PartnerTag'] = commonParameters.PartnerTag;
  operationOptions['PartnerType'] = isUndefined(commonParameters.PartnerType)
    ? 'Associates'
    : commonParameters.PartnerType;
  Object.assign(operationOptions, Options.requestParameters);

  return await api[Options.Operations](operationOptions);
};

const GetItems = async (commonParameters, requestParameters) => {
  let Options = { commonParameters, requestParameters, Operations : "getItems" };
  return await apiRequest(Options);
};

const GetBrowseNodes = async (commonParameters, requestParameters) => {
  let Options = { commonParameters, requestParameters, Operations : "getBrowseNodes" };
  return await apiRequest(Options);
};

const GetVariations = async (commonParameters, requestParameters) => {
  let Options = { commonParameters, requestParameters, Operations : "getVariations" };
  return await apiRequest(Options);
};

const SearchItems = async (commonParameters, requestParameters) => {
  let Options = { commonParameters, requestParameters, Operations : "searchItems" };
  return await apiRequest(Options);
};

const GetItemsV2 = async (commonParameters, requestParameters) => {
  let Options = {
    commonParameters,
    requestParameters: upgradeOffersResources(requestParameters),
    Operations: "getItems",
  };
  return await apiRequest(Options);
};

const GetVariationsV2 = async (commonParameters, requestParameters) => {
  let Options = {
    commonParameters,
    requestParameters: upgradeOffersResources(requestParameters),
    Operations: "getVariations",
  };
  return await apiRequest(Options);
};

const SearchItemsV2 = async (commonParameters, requestParameters) => {
  let Options = {
    commonParameters,
    requestParameters: upgradeOffersResources(requestParameters),
    Operations: "searchItems",
  };
  return await apiRequest(Options);
};

const getDefaultOperation = method => {
  let RequestConstructor = OPERATIONS[method];

  if (RequestConstructor) {
    return new RequestConstructor();
  }

  throw new Error(`Unsupported operation: ${method}`);
};

const getMarketplaceDetails = marketplace => new Promise ((resolve, reject) => {
  if(isUndefined(marketplace)) { // set US as default
    let marketPlaceDetail = marketplaceList.Marketplace.filter(x => x.Web === "www.amazon.com")[0];
    resolve(marketPlaceDetail); 
  } else { 
    let marketPlaceDetail = marketplaceList.Marketplace.filter(x => x.Web === marketplace.toLowerCase())[0];
    if(isUndefined(marketPlaceDetail)) reject("Invalid Marketplace Value.");
    resolve(marketPlaceDetail);
  }
});

const upgradeOffersResources = requestParameters => {
  if (isUndefined(requestParameters)) {
    return {};
  }

  let upgradedRequestParameters = { ...requestParameters };

  if (Array.isArray(requestParameters.Resources)) {
    upgradedRequestParameters.Resources = requestParameters.Resources.map(resource => {
      if (
        typeof resource === 'string' &&
        resource.startsWith(OFFERS_V1_RESOURCE_PREFIX)
      ) {
        return `${OFFERS_V2_RESOURCE_PREFIX}${resource.slice(OFFERS_V1_RESOURCE_PREFIX.length)}`;
      }

      return resource;
    });
  }

  return upgradedRequestParameters;
};

const isUndefined = value => typeof value === 'undefined'; 

const amazonPaapi = {
  GetItems,
  GetBrowseNodes,
  GetVariations,
  SearchItems,
  GetItemsV2,
  GetVariationsV2,
  SearchItemsV2,
};

module.exports = { ...amazonPaapi, default : amazonPaapi}; // Allow use of default import syntax in TypeScript.
