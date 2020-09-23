 const axios=require('axios')

 axios({
      method: "POST",
      url: "https://api.razorpay.com/v1/orders",
      headers: {
        "content-type": "application/json",
        authorization:
          "Basic cnpwX3Rlc3RfUjM1Y3dNMlo1aUhqdmI6d0NZUUdtN3ZNZWZHdmtSckFGb05lUWQw"
      },
      data: JSON.stringify({
        amount: 100000,
        currency: "INR",
        receipt: "receipt81",
        payment_capture: 1
      })
    })
      .then((res) => {
        console.warn(res);
        setorderId(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });