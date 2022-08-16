
const key ="test_sk_5AfEMD4z8I4bcbU8g6GW"
const sdk = require('api')('@mono/v1.0#33hmc2izkyejmoej');


const fetchAllTransactions= (account_holder,account,card,page,from,to)=>{
    let response;
sdk.getTransactions({
    account_holder: account_holder,
    account: account,
    card: card,
    page: page,
    from: from,
    to: to,
    'mono-sec-key': key
  })
    .then(res => response = res)
        .catch(err => response = err);
        return response;
}




