

const key ="test_sk_5AfEMD4z8I4bcbU8g6GW"
const sdk = require('api')('@mono/v1.0#33hmc2izkyejmoej');


const fetchAllAccount = (page,bvn,phone_number)=>{
    let response;
    sdk.getAccountHolders({
        page: page,
        bvn: bvn,
        phone_number: phone_number,
        'mono-sec-key': key
      })
        .then(res => response = res)
        .catch(err => response = err);

        return response;
}




