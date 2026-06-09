const express = require("express");
const router = express.Router();
const AccountModel = require("../models/account");

// lay du lieu tu database + lay tat ca
router.get("/", (req, res, next) => {
    AccountModel.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.status(500).json("Loi xu ly get" + error.message);
        });
});

// lay du lieu tu database + lay 1 phan tu theo id
router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    AccountModel.findById(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.status(500).json("Loi xu ly get" + error.message);
        });
});

// them du lieu vao database
router.post("/", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    AccountModel.create({
        username: username,
        password: password,
    })
        .then((data) => {
            res.json("Dang ky thanh cong");
        })
        .catch((error) => {
            res.status(500).json("Dang ky that bai: " + error.message);
        });
});

// sua du lieu trong database
router.put("/:id", (req, res, next) => {
    const id = req.params.id;
    const newPassword = req.body.newPassword;

    AccountModel.findByIdAndUpdate(id, {
        password: newPassword,
    })
        .then((data) => {
            res.json("Update tin thanh cong");
        })
        .catch((error) => {
            res.status(500).json("Update that bai: " + error.message);
        });
});

// xoa du lieu trong database
router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    AccountModel.deleteOne({ _id: id })
        .then((data) => {
            res.json("Xoa du lieu thanh cong");
        })
        .catch((error) => {
            res.status(500).json("Xoa du lieu that bai: " + error.message);
        });
});

module.exports = router;
