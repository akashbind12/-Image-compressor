const express = require("express")
const app = express();
const db = require("./models");
const { Op } = require("sequelize");

app.use(express.json());

const fileupload = require("./routers/fileupload.router");


app.use('/api', fileupload);


db.sequelize.sync().then((req) => {
    app.listen(3000, () => {
        console.log("server running at port 3000")
    })
})