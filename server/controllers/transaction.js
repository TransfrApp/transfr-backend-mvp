// Controller file for the Transactions Model
const Transaction = require('../models').Transaction;

module.exports = {

    // POST ~> Create a Transaction
    create(req, res) {
        const { to, from, amount, items, tax, discount, UserId, payment_method } = req.body;
        return Transaction
            .create({ to, from, amount, items, tax, discount, payment_method, UserId })
            .then(transactions => res.status(201).send(transactions))
            .catch(err => res.status(400).send(err));
    },

    // GET/{id} ~> All Transactions
    list(req, res) {
        const { id } = req.body;
        return Transaction
            .findAll({ where: { UserId: id } })
            .then(txs => res.status(201).send(txs))
            .catch(err => res.status(400).send(err));
    },

    // POST/{id} ~> Delete a Transaction
    // NEEDS TO BE TESTED
    delete(req, res) {
        const { id } = req.body;
        return Transaction.destroy({ where: { id } })
            .then(() => res.status(201).send({ message: `Item with id ${id} successfully destroyed` }))
            .catch(err => req.status(400).send(err))
    },

    // PATCH/{id} ~> Updates the Transaction
    update(req, res) {
        const { id, to, from, amount, items, user_id } = req.body;
        return Transaction
            .update({
                to, from, amount, items, user_id
            }, { where: { id } })
            .then(transaction => res.status(201).send(transaction))
            .catch(err => res.status(400).send(err))
    }
}