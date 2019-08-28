const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/auth-middleware.js");

router.get("/", (req, res) => {
  Users.findAll().then(users => {
    res.send(users);
  });
});

router.get("/:id", restricted, (req, res) => {
  // console.log(req.params.id);
  Users.findUser(req.params.id)
    .then(userObj => {
      // console.log(userObj);
      res.status(200).json(userObj);
    })
    .catch(err => {
      res.status(500).json({ message: "There was an error." });
    });
});

router.put("/:id", restricted, async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  console.log(req.params.id);
  console.log(req.body);
  if (req.body.password || req.body.id) {
    res
      .status(500)
      .json({ message: "Do not include id or password in request body." });
  } else {
    try {
      const user = await Users.findUser(id);
      if (user) {
        const updatedUser = await Users.update(changes, id);
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: "Could not find that user." });
      }
    } catch (err) {
      res.status(500).json({ message: "Failed to update user." });
    }
  }
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;
  Users.remove(id)
    .then(() => {
      res.status(200).json({ message: "Removed!" });
    })
    .catch(err => {
      res.status(500).json({ message: "Could not remove." });
    });
});

module.exports = router;
