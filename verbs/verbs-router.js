const router = require("express").Router();

const Verbs = require("./verbs-model.js");

router.get("/", (req, res) => {
  Verbs.findAll().then(verbs => {
    res.send(verbs);
  });
});

module.exports = router;
