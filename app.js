const paapiSdk = require('./SDK/src/index'); // Official SDK from NPM is currently not working. This is downloaded straight from PAAPI website.
const marketplaceList = require('./marketplace.json');

const defaultClient = paapiSdk.ApiClient.instance;
const api = new paapiSdk.DefaultApi();

const apiRequest = async (Options) => {
  let commonParameters = Options.commonParameters;
  defaultClient.accessKey = commonParameters.AccessKey;
  defaultClient.secretKey = commonParameters.SecretKey;

  let marketPlaceDetails = await getMarketplaceDetails(commonParameters.Marketplace);
  defaultClient.host = marketPlaceDetails.Host;
  defaultClient.region = marketPlaceDetails.Region;

  let operationOptions = getDefaultOperation(Options.Operations);
  operationOptions['PartnerTag'] = commonParameters.PartnerTag;
  operationOptions['PartnerType'] = commonParameters.PartnerType;
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

const getDefaultOperation = method => {
  switch (method) {
    case 'getItems':
      return new paapiSdk.GetItemsRequest();
      break;
    case 'getBrowseNodes':
      return new paapiSdk.GetBrowseNodesRequest();
      break;
    case 'getVariations':
      return new paapiSdk.GetVariationsRequest();
      break;
    case 'searchItems':
      return new paapiSdk.SearchItemsRequest();
  }
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

const getPartnerType = partnerType =>  new Promise ((resolve, reject) => {
  if (isUndefined(partnerType)) resolve('Associates');
  else resolve(partnerType);
});

const isUndefined = value => typeof value === 'undefined'; 

const amazonPaapi = { GetItems, GetBrowseNodes, GetVariations, SearchItems };

module.exports = { ...amazonPaapi, default : amazonPaapi}; // Allow use of default import syntax in TypeScript.

