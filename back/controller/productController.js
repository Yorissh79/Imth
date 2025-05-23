import productModel from "../models/productModel.js";

const getProduct = async (req, res) => {
    const product = await productModel.find()
    res.json(product)
}

const postProduct = async (req, res) => {
    await productModel.create(req.body)
    res.json("Product Created")
}

const deleteProduct = async (req, res) => {
    await productModel.findById(req.params.id)
    res.json("Product Deleted")
}

export {getProduct, postProduct, deleteProduct}