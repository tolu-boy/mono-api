
const key ="test_sk_5AfEMD4z8I4bcbU8g6GW"
const sdk = require('api')('@mono/v1.0#33hmc2izkyejmoej');


const createAccount = (address,city,state,lga,identity,entity,first_name,last_name, phone, email,  bvn)=>{
    let response;
    sdk.createAccountHolder({
        address: {
          address_line1: address,
          city: city,
          state: state,
          lga: lga
        },
        identity: identity,
        entity: entity,
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        email: email,
        bvn: bvn
      }, {
        'mono-sec-key': key
      })
        .then(res => response = res)
        .catch(err => response = err);

        return response;
}




