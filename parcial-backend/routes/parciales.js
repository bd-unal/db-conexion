var express = require("express");
var router = express.Router();
const parciales = require("../services/parciales");

/* GET parciales listing. */
router.get("/", async function (req, res, next) {
  try {
    const resp = await parciales.getMultiple(req.query.page);
    res.json(resp);
  } catch (err) {
    console.error(`Error while getting parciales `, err.message);
    next(err);
  }
});

module.exports = router;
