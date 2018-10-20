const User = require('../models').User;

const jwt = require('jwt-simple');
const passport = require('passport');
const { compose } = require('compose-middleware');

const {
  JWT_TOKEN,
  TOKEN_EXPIRATION_TIME,
} = require('../config/config.js');


module.exports = {
  /*
  login:
  passport.authenticate('local', {session: false}),
  function(req, res) {
    console.log("im in login");
    res.send({message: 'hello'});
    //res.redirect('/users/' + req.user.username);
  },
  */

  login: compose([
    passport.authenticate('local'),
    (req, res) => {
      const token = jwt.encode({
        id: req.user.id,
        expirationDate: new Date(Date.now() + TOKEN_EXPIRATION_TIME),
      }, JWT_TOKEN);

      res.status(200).send({ token });
    },
  ]),

  // PATCH/{id} ~> Update the User
  update(req, res) {
    console.log("req body", req.body);
    const { id, name, business_name, email, wallet_address, account_type } = req.body;
    console.log("User Id in DB", id);
    return User
      .update({ name, business_name, email, wallet_address, account_type }, { where: { id } })
      .then(user => res.status(201).send(user))
      .catch(err => res.status(400).send(err))
  },

  // POST
  create(req, res) {
    const { name, email, password, business_name, wallet_address } = req.body;
    return User
      .create({
        name, email, password, business_name, wallet_address
      })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return User
      .all()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
};
