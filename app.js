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

  let operationOptions = getDefaultOperationOptions(Options.Operations);
  operationOptions['PartnerTag'] = commonParameters.PartnerTag;
  operationOptions['PartnerType'] = commonParameters.PartnerType;
  Object.assign(operationOptions, Options.requestParameters);

  return await api.getItems(operationOptions);
};

const GetItems = async (commonParameters, requestParameters) => {
  let Options = { commonParameters, requestParameters, Operations : "GetItems" };
  return await apiRequest(Options);
};

const GetBrowseItems = async (commonParameters, requestParameters) => {
  let Options = { commonParameters, requestParameters, Operations : "GetBrowseItems" };
  return await apiRequest(Options);
};

const GetVariations = async (commonParameters, requestParameters) => {
  let Options = { commonParameters, requestParameters, Operations : "GetVariations" };
  return await apiRequest(Options);
};

const SearchItems = async (commonParameters, requestParameters) => {
  let Options = { commonParameters, requestParameters, Operations : "SearchItems" };
  return await apiRequest(Options);
};

const getDefaultOperationOptions = method => {
  switch (method) {
    case 'GetItems':
      return new paapiSdk.GetItemsRequest();
      break;
    case 'GetBrowseItems':
      return new paapiSdk.GetBrowseNodesRequest();
      break;
    case 'GetVariations':
      return new paapiSdk.GetVariationsRequest();
      break;
    case 'SearchItems':
      return new paapiSdk.SearchItemsRequest();
  }
};

const getMarketplaceDetails = marketplace => new Promise ((resolve, reject) => {
  if(isUndefined(marketplace)) { // set US as default
    let marketPlaceDetail = marketplaceList.Marketplace.filter(x => x.Web === "www.amazon.com")[0];
    resolve(marketPlaceDetail); // default value if not defined.
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


module.exports = { GetItems, GetBrowseItems, GetVariations, SearchItems };