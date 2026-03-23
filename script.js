document.getElementById("payBtn").onclick = function () {
    var options = {
        "key": "211635",
        "amount": 50000, // ₹500
        "currency": "INR",
        "name": "N9NE Store",
        "description": "T-shirt Payment",
        "handler": function (response){
            alert("Payment Successful!");
        }
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
};
