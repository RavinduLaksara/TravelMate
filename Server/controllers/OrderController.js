import Order from "../models/OrderSchema.js";
import Product from "../models/ProductSchema.js";

// Create a order
export async function createOrder(req, res) {
  try {
    // Create Order ID
    const latestOrder = await Order.find().sort({ createdAt: -1 }).limit(1);
    let orderId;

    if (latestOrder.length === 0) {
      orderId = "TMO0001";
    } else {
      const currentId = latestOrder[0].orderId;
      orderId =
        "TMO" + (parseInt(currentId.slice(3)) + 1).toString().padStart(4, "0");
    }

    // get data
    const newOrderdata = req.body;
    newOrderdata.orderId = orderId;
    newOrderdata.email = req.user.email;

    // Get product data (frontend - productId, object array name: products -->(productId: "",  quantity: 5 ))

    const productIds = newOrderdata.products.map((p) => p.productId);
    const productsData = await Product.find({ productId: { $in: productIds } });

    if (productsData.length !== newOrderdata.products.length) {
      return res.status(409).json({ message: "Some products are not found" });
    }

    // create orderedItems array
    newOrderdata.orderedItems = newOrderdata.products.map((item) => {
      const product = productsData.find((p) => p.productId === item.productId);

      return {
        productId: product.productId,
        name: product.productName,
        quantity: item.quantity,
        price: product.actualPrice,
        image: product.images[0],
      };
    });

    const order = new Order(newOrderdata);
    await order.save();

    // Update stock
    for (const item of newOrderdata.products) {
      await Product.updateOne(
        { productId: item.productId },
        { $inc: { stock: -item.quantity } }
      );
    }

    res.status(200).json({ message: "Order Created !" });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
