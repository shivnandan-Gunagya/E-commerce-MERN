const Product = require("../Modals/productModal");
const mongoose = require("mongoose");
const catchAsyncErrors = require("../middleWare/catchAsyncErros");

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}


//Create product-- Admin

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);
  
    res.status(201).json({ success: true, data: product });
});

//GET All products

exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({ success: true, data: products });
});
 
//GET Single Product

exports.getProduceDetails = catchAsyncErrors(async (req, res, next) => {
  
    if (!(isValidObjectId(req.params.id))) {
        return res
        .status(400)
        .send({ status: false, message: "please provide valid object Id" });
    }
    
  
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
});

//Update Product --Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product --Admin

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not fount!",
    });
  }

  await Product.remove();
  res.status(200).json({
    success: true,
    message: "Product Delete",
  });
});
