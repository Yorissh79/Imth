import basketModel from "../models/basketModel.js";

const getBasket = async (req, res) => {
    const basket = await basketModel.find()
    res.json(basket)
}

const findIt = async (it) => {
    const item = basketModel.findOne({it:it})
    return item
}

const postBasket = async (req, res) => {

    const exist = await findIt(req.body.it)

    if (exist) {
        if (Number(exist.count) >= 1 && Number(req.body.count) === 1) {
            const data = {
                it: req.body.it,
                name: req.body.name,
                price: req.body.price,
                image: req.body.image,
                description: req.body.description,
                count: String(Number(exist.count) + Number(req.body.count)),
            }
            basketModel.findOneAndUpdate(
                {_id: req.body._id},
                data,
                {new: true}
            )
            res.json("basket updated")
        }
        if (Number(exist.count) > 1 && Number(req.body.count) === -1) {
            const data = {
                it: req.body.it,
                name: req.body.name,
                price: req.body.price,
                image: req.body.image,
                description: req.body.description,
                count: String(Number(exist.count) + Number(req.body.count)),
            }
            basketModel.findOneAndUpdate(
                {_id: req.body._id},
                data,
                {new: true}
            )
            res.json("basket updated")
        }
    }
    else {
        const data = {
            it: req.body.it,
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description,
            count: "1"
        }
        await basketModel.create(data)
        res.json("basket created")
    }

}

const deleteBasket = async (req, res) => {
    await basketModel.findById(req.params.id)
    res.json("Basket Deleted")
}

export {getBasket, postBasket, deleteBasket}