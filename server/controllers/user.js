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

      res.status(200).send({ token, user: req.user });
    },
  ]),

  // PATCH/{id} ~> Update the User
  update(req, res) {
    const { id, name, business_name, email, wallet_address, account_type } = req.body;
    return User
      .update({ name, business_name, email, wallet_address, account_type }, { where: { id } })
      .then(user => res.status(201).send(user))
      .catch(err => res.status(400).send(err))
  },

  // GET/{id} ~> Get a single Users data

  getUser(req, res) {
    const { id } = req.body;
    return User
      .findOne({ where: { id } })
      .then(user => res.status(201).send(user))
      .catch(err => res.status(401).send(err));
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
