// Controller File for the Inventory Model
const Inventory = require('../models').Inventory;

module.exports = {

    // POST ~> Creates Inventory Items
    create(req, res) {
        const { name, price, quantity, UserId, meta_tags, image } = req.body;
        console.log("Req Body", req.body);
        return Inventory
            .create({ name, price, quantity, meta_tags, UserId, image })
            .then(inv => res.status(201).send(inv))
            .catch(err => res.status(400).send(err))
    },

    // GET/{id} ~> Returns all Items in Inventory that belong to user
    list(req, res) {
        const { id } = req.body;
        return Inventory
            .findAll({ where: { UserId: id } })
            .then(inv => res.status(201).send(inv))
            .catch(err => {
                console.log("Raw Error Message", err)
                res.status(400).send(err)
            });
    },

    // PATCH/{id} ~> Update the Inventory Item
    update(req, res) {
        const { id, name, price, quantity, meta_tags, user_id } = req.body;
        return Inventory
            .update({ name, price, quantity, meta_tags, user_id }, { where: { id } })
            .then(inventory => res.status(201).send(inventory))
            .catch(err => res.status(400).send(err))
    },

    // DELETE/{id} ~> Deletes an Inventory Item
    delete(req, res) {
        const { id } = req.body;
        return Inventory
            .destroy({ where: { id } })
            .then(inventory => res.status(201).send(inventory))
            .catch(err => res.status(400).send(err))
    }
}