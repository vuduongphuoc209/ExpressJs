const express = require("express");
var router1 = express.Router();

router1.get("/", (req, res) => {
    res.send("This is get");
});

router1.post("/", (req, res) => {
    console.log(req.body);
    res.send("This is post" + req.body.username + "" + req.headers.subname);
});

router1.put("/", (req, res) => {
    // res.send("This is put");
    res.send("This is post" + req.body.username + "" + req.headers.subname);
});

router1.delete("/", (req, res) => {
    res.send("This is delete");
});

module.exports = router1;
