const express = require('express');
const fs = require("fs");
const notes = require('./db/db.json');
const path = require("path");
const uuid = require("uuid");

const api = require("./routes/api");
const html = require("./routes/html");

const app = express();
var PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static('public'));

app.use("/api", api);

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  