const express = require("express");
const Razorpay = require("razorpay");
const app = express();

app.use(express.json());

const razorpay = new Razorpay({
    key_id: "YOUR_KEY_ID",
    key_secret: "YOUR_KEY_SECRET"
});

app.post("/create-order", async (req, res) => {
    const options = {
        amount: 50000,
        currency: "INR"
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
