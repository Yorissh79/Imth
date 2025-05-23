import wishlistModel from "../models/wishlistModel.js";

const getWishlist = async (req, res) => {
    const wishlist = await wishlistModel.find()
    res.json(wishlist)
}

const findIt = async (it) => {
    const item = wishlistModel.findOne({it:it})
    return item
}

const postWishlist = async (req, res) => {
    const exist = await findIt(req.body.it)

    if (!exist) {
        const data = {
            it: req.body.it,
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description
        }
        await wishlistModel.create(data)
        res.json("wishlist created")
    }
    else {
        res.json("wish")
    }
}

const deleteWishlist = async (req, res) => {
    await wishlistModel.findById(req.params.id)
    res.json("Wishlist Deleted")
}

export {getWishlist, postWishlist, deleteWishlist}