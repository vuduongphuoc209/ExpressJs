const express = require("express");
const app = express();
const port = 4001;
var router1 = require("./router/router");

app.get("/", (req, res) => {
    res.send("Server is running in local 4001!");
});

app.use("/api/v1", router1);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
