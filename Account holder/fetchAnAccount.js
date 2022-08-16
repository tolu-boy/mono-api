


const key ="test_sk_5AfEMD4z8I4bcbU8g6GW"
const sdk = require('api')('@mono/v1.0#33hmc2izkyejmoej');


const fetchAnAccount = (id)=>{
    let response;
    sdk.getAccountHolder({id: id, 'mono-sec-key': 
   key})
        .then(res => response = res)
        .catch(err => response = err);

        return response;
}




