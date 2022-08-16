




const key ="test_sk_5AfEMD4z8I4bcbU8g6GW"
const sdk = require('api')('@mono/v1.0#33hmc2izkyejmoej');


const transferToOtherAccount= (amount,narration,reference,account_number,bank_code,id)=>{
    let response;
    sdk.bankTransfer({
        amount: amount,
        narration: narration,
        reference: reference,
        account_number: account_number,
        bank_code: bank_code
      }, {id: id, 'mono-sec-key': key})
    .then(res => response = res)
        .catch(err => response = err);
        return response;
}




