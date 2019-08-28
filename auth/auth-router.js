const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets.js");

const Users = require("../users/users-model.js");

function createToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "24h"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

router.post("/register", (req, res) => {
  if (req.body.name && req.body.email && req.body.password) {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12); // hash the password
    user.password = hash; // reset password as hashed password

    Users.addUser(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error adding that user."
        });
      });
  } else {
    res
      .status(400)
      .json({ message: "Please enter name, email, and password." });
  }
});

router.post("/login", (req, res) => {
  if (req.body.email && req.body.password) {
    let { email, password } = req.body;
    Users.findBy({ email })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = createToken(user);
          res.status(200).json({ message: `Welcome, ${user.name}.`, token });
        } else {
          res.status(401).json({ message: "Those credentials aren't valid." });
        }
      });
  } else {
    res.status(400).json({ message: "Please enter email and password." });
  }
});

module.exports = router;
