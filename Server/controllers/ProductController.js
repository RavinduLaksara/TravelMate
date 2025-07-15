import Product from "../models/ProductSchema.js";

// Add Products
export async function createProduct(req, res) {
  if (!isAdmin(req)) {
    return res.json({
      message: "Please login as a Administrater to add products !",
    });
  }
  try {
    // Create Product ID
    const latestProduct = await Product.find().sort({ createdAt: -1 }).limit(1);
    let productId;

    if (latestProduct.length === 0) {
      productId = "TMP0001";
    } else {
      const currentId = latestProduct[0].productId;
      productId =
        "TMP" + (parseInt(currentId.slice(3)) + 1).toString().padStart(4, "0");
    }

    const newProductData = req.body;
    newProductData.productId = productId;

    const newProduct = new Product(newProductData);
    await newProduct.save();
    res.status(201).json({ message: "New Product Added" });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}

// get all products
export async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ message: "Error fetching products", e });
  }
}

// check user is admin
export function isAdmin(req) {
  if (!req.user) {
    return false;
  }
  if (req.user.role != "admin") {
    return false;
  }
  return true;
}
