const { static } = require("express");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname,"../public")));

const homePath = path.join(__dirname,'../public/index.html');

app.get("/", (req,res) => {
    res.sendFile(homePath);
})

app.get("*",(req,res) => {
    res.status(404).send("<h1>404 Page does not exist</h1>");
})

app.listen(8000, () => console.log("Listening to port 8000..."));