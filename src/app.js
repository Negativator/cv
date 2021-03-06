const path = require("path");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.use('/', express.static(path.join(__dirname, "./static")));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Application running at:${port}`))