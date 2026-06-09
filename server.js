const express = require("express");
const app = express();
const port = 4001;
const bodyParser = require("body-parser");

var router1 = require("./router/router");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
// parse application/json
app.use(bodyParser.json());

app.use("/admin/api/v1", router1);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
