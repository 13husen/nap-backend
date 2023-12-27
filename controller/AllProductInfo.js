const User = require("../models/User");
const Cart = require("../models/Cart");
const Wishlist = require("../models/Wishlist");
const Review = require("../models/Review");
const Product = require("../models/Product")


const chartData = async (req, res) => {
    try {
        const cart = await Cart.find().populate("productId");
        const wishlist = await Wishlist.find().populate("productId");

        const payment = [];
        const product = await Product.find();
        const review = await Review.find();
        res.send({ review, product, payment, wishlist, cart });
    } catch (error) {
        res.send(error);

    }
}
module.exports = { chartData }