


const key ="test_sk_5AfEMD4z8I4bcbU8g6GW"
const sdk = require('api')('@mono/v1.0#33hmc2izkyejmoej');


const createVirtualCard= (account_holder,currency,amount,fund_source)=>{
    let response;
   
    sdk.createVirtualCard({
        account_holder: account_holder,
        currency: currency,
        amount: amount,
        fund_source: fund_source
      }, {'mono-sec-key': key})
    .then(res => response = res)
        .catch(err => response = err);
        return response;
}




