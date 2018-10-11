// Controller File for the Coupon Model
const Coupon = require('../models').Coupon;

module.exports = {
    // POST ~> Create a Coupon
    create(req, res) {
        const { name, code, discount_amount, discount_percent, user_id } = req.body;
        return Coupon
            .create({ name, code, discount_amount, discount_percent, user_id })
            .then(coupon => res.status(201).send(coupon))
            .catch(err => res.status(400).send(err));
    },

    // GET/{user_id} ~> Get all Coupons for the Active User
    list(req, res) {
        const { user_id } = req.body
        return Coupon
            .findAll({ where: { user_id } })
            .then(coupons => res.status(201).send(coupons))
            .catch(err => res.status(401).send(err));
    },

    // PATCH/{id} ~> Update a coupon
    update(req, res) {
        const { id, name, code, discount_amount, discount_percent, user_id } = req.body;
        return Coupon
            .update(
                { id, name, code, discount_amount, discount_percent, user_id },
                { where: { id } })
            .then(coupon => res.status(201).send(coupon))
            .catch(err => res.status(400).send(err));
    },

    // DELETE/{id} ~> Delete a coupon
    delete(req, res) {
        const { id } = req.body;
        return Coupon
            .destroy({ where: { id } })
            .then(coupon => res.status(201).send(coupon))
            .catch(err => res.status(400).send(err));
    }
}