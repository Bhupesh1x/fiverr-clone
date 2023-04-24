import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";

export const createOrder = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.body.gigId);
    const newOrder = new Order({
      gigId: gig._id,
      img: gig.coverImg,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: "temporary",
    });
    await newOrder.save();
    res.status(200).send("Sucessfull");
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });
    const newOrder = orders.map((order) => ({
      id: order._id,
      img: order.img,
      title: order.title,
      price: order.price,
      isCompleted: order.isCompleted,
      messageImage:
        "https://res.cloudinary.com/atm1x/image/upload/v1682322691/message_n60siq.png",
    }));
    res.status(200).send(newOrder);
  } catch (error) {
    next(error);
  }
};
