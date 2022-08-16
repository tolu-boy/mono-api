



const key ="test_sk_5AfEMD4z8I4bcbU8g6GW"
const sdk = require('api')('@mono/v1.0#33hmc2izkyejmoej');


const fundVirtualCard = (my_reference,amount,fund_source,id)=>{
    let response;
    sdk.fundVirtualCard({
        meta: {my_reference: my_reference},
        amount: amount,
        fund_source: fund_source
      }, {id: id, 'mono-sec-key': key})
        .then(res => response = res)
        .catch(err => response = err);

        return response;
}




