
const key ="test_sk_5AfEMD4z8I4bcbU8g6GW"
const sdk = require('api')('@mono/v1.0#33hmc2izkyejmoej');


const fetchAllVirtualAccounts = (page,account_holder)=>{
    let response;
    sdk.allVirtualAccounts({
        account_holder: account_holder,
        page: page,
        'mono-sec-key': key
      })
        .then(res => response = res)
        .catch(err => response = err);

        return response;
}




