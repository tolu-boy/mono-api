
const key ="test_sk_5AfEMD4z8I4bcbU8g6GW"
const sdk = require('api')('@mono/v1.0#33hmc2izkyejmoej');


const createVirtualAccount = (account_holder, account_type,disposable,provider)=>{
    let response;
    sdk.createVirtualAccount({
      account_holder: account_holder,
      account_type:account_type,
      disposable: disposable,
      provider: provider
    }, {
      'mono-sec-key': key
    })
        .then(res => response = res)
        .catch(err => response = err);

        return response;
}




