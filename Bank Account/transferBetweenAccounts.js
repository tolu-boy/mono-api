



const key ="test_sk_5AfEMD4z8I4bcbU8g6GW"
const sdk = require('api')('@mono/v1.0#33hmc2izkyejmoej');


const transferBetweenAccounts= (my_reference,amount,narration,reference,account_id,id)=>{
    let response;
    sdk.transferBetweenAccounts({
        meta: {my_reference: my_reference},
        amount:amount,
        narration: narration,
        reference: reference,
        account_id: account_id
      }, {
        id: id,
        'mono-sec-key': key
      })
    .then(res => response = res)
        .catch(err => response = err);
        return response;
}




