// const amazonPaapi = require('amazon-paapi');
const amazonPaapi = require('../app.js')
const ck = require('ckey');


const commonParameters = { 
  'AccessKey'  : ck.AWS_ACCESS_KEY,
  'SecretKey'  : ck.AWS_SECRET_KEY,
  'PartnerTag' : ck.AWS_TAG, // yourtag-20
  'PartnerType': 'Associates', // Optional. Default value is Associates. 
  'Marketplace': 'www.amazon.com' // Optional. Default value is US.
}

const requestParameters = {
  'BrowseNodeIds' : ['3040', '3045'],
  'LanguagesOfPreference' : ['es_US'],
  'Resources' : ['BrowseNodes.Ancestor', 'BrowseNodes.Children']
};

/** Promise */
amazonPaapi.GetBrowseNodes(commonParameters, requestParameters)
    .then(data => {
        // do something with the success response.
        console.log(data);
    })
    .catch(error => {
        // catch an error.
        console.log(error)
    });
