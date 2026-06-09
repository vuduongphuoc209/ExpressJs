const express = require("express");
var router1 = express.Router();

router1.get("/", (req, res) => {
    res.send("This is user router");
});

router1.get("/product", (req, res) => {
    res.send("This is product route");
});

router1.get("/category", (req, res) => {
    res.send("This is category route");
});

// luon de cuoi cung de tranh bi loi khi co nhieu route trung nhau, vd: /api1/product va /api1/:id
router1.get("/:id", (req, res) => {
    res.send("This is user :" + req.params.id);
});

module.exports = router1;
