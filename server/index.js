const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const { v4: uuidv4 } = require("uuid");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/create", (req, res) => {
  const DOWNLOAD_DIR = path.join(
    process.env.HOME || process.env.USERPROFILE,
    "downloads/"
  );
  const filename = `${uuidv4()}.html`;
  var file_path = path.join(DOWNLOAD_DIR, filename);

  const data = req.body;
  fs.writeFile(file_path, data.template, (err) => {
    if (err) throw new Error(err);
    else {
      res.download(file_path);
    }
  });
});

app.post("/download", (req, res) => {
  const DOWNLOAD_DIR = path.join(
    process.env.HOME || process.env.USERPROFILE,
    "downloads/"
  );
  const filename = `${uuidv4()}.js`;
  var file_path = path.join(DOWNLOAD_DIR, filename);

  const data = JSON.stringify(req.body.template);

  fs.writeFile(file_path, data, (err) => {
    if (err) throw new Error(err);
    else {
      res.download(file_path);
    }
  });
});

app.listen(5000, () => {
  console.log("Listening on port 5000!");
});
