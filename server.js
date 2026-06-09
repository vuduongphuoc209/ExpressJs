const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("dotenv").config();
const PORT = process.env.PORT || null;

const AccountModel = require("./models/account");
const connectDB = require("./config/database");

// Connect to MongoDB Atlas
connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
// parse application/json
app.use(bodyParser.json());

// Register
app.post("/register", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    // console.log(username, password);
    AccountModel.findOne({ username: username })
        .then((data) => {
            if (data) {
                res.json("Username da ton tai");
            } else {
                return AccountModel.create({
                    username: username,
                    password: password,
                });
            }
        })
        .then((data) => {
            res.json("Account created successfully");
        })
        .catch((error) => {
            res.status(500).json("Error creating account: " + error.message);
        });
});
// Login
app.post("/login", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    AccountModel.findOne({ username: username, password: password })
        .then((data) => {
            if (data) {
                res.json("Login successful");
            } else {
                res.status(400).json("Accout khong dung");
            }
        })
        .catch((error) => {
            res.status(500).json("Dang nhap that bai: " + error.message);
        });
});

app.get("/", (req, res, next) => {
    res.send("Home page");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
