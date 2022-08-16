

const key ="test_sk_5AfEMD4z8I4bcbU8g6GW"
const sdk = require('api')('@mono/v1.0#33hmc2izkyejmoej');


const updateAccount = (type,entity,first_name,last_name,email,phone_number, bvn,id)=>{
    let response;
    sdk.updateAccount({
        identity: {type: type},
        entity: entity,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
        bvn: bvn
      }, {id: id, 'mono-sec-key': key})
        .then(res => response = res)
        .catch(err => response = err);

        return response;
}




