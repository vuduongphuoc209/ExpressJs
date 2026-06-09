const express = require("express");
const app = express();
const port = 4001;
var router1 = require("./router/router");

var dangnhap = true;

var checkAdmin = (req, res, next) => {
    if (dangnhap) {
        user.role = "admin";
        next();
    } else {
        res.send("Ban chua dang nhap");
    }
};

var checkMiddleware = (req, res, next) => {
    if (dangnhap) {
        next();
    } else {
        res.send("Ban chua dang nhap");
    }
};

app.get("/", checkMiddleware, (req, res, next) => {
    res.send("Server is running in local 4001!");
});

app.use("/admin/api/v1", checkAdmin, router1);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
