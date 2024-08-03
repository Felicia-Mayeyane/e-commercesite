const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Running- Can't catch this"))
  .catch((err) => {
    console.log(err);
  });


  app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

  app.listen(process.env.PORT || 8012, () => {
    console.log("Port is running mate!");
  });


