


const key ="test_sk_5AfEMD4z8I4bcbU8g6GW"
const sdk = require('api')('@mono/v1.0#33hmc2izkyejmoej');


const fetchAllBankAccounts= (page,from,to,account_holder)=>{
    let response;
    sdk.fetchAllBankAccounts({
        page: page,
        from: from,
        to: to,
        account_holder: account_holder,
        'mono-sec-key': key
      })    .then(res => response = res)
        .catch(err => response = err);
        return response;
}




