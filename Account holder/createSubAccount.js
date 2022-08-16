
const key ="test_sk_5AfEMD4z8I4bcbU8g6GW"
const sdk = require('api')('@mono/v1.0#33hmc2izkyejmoej');

const createSubAccount = (first_name, last_name,phone,email,main_account)=>{
    let response;
    sdk.createSubAccountHolder({
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        email: email,
        main_account: main_account
      }, {
        'mono-sec-key': key
      })
        .then(res => response = res)
        .catch(err => response = err);

        return response;
}