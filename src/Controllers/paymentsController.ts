import PaytmChecksum from '../payments/PaytmChecksum'

export class paymentsController{
     static async paytm(req,res,next){
        


var paytmParams = {
    "requestType"   : "Payment",
    "mid"           : "YOUR_MID_HERE",
    "websiteName"   : "WEBSTAGING",
    "orderId"       : "ORDERID_98765",
    "callbackUrl"   : "https://merchant.com/callback",
    "txnAmount"     : {
        "value"     : "1.00",
        "currency"  : "INR",
    },
    "userInfo"      : {
        "custId"    : "CUST_001",
    },
    
};

PaytmChecksum.generateSignature(paytmParams, "YOUR_MERCHANT_KEY").then(function(checksum){

  var   paytmParams = {
    "requestType"   : "Payment",
    "mid"           : "YOUR_MID_HERE",
    "websiteName"   : "WEBSTAGING",
    "orderId"       : "ORDERID_98765",
    "callbackUrl"   : "https://merchant.com/callback",
    "txnAmount"     : {
        "value"     : "1.00",
        "currency"  : "INR",
    },
    "userInfo"      : {
        "custId"    : "CUST_001",
    },
        "signature"	: checksum
    };

    var post_data = paytmParams;

   

   res.send(post_data)
  
});
    }
    
   
 }