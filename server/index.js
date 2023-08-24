const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const { v4: uuidv4 } = require("uuid");

app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

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

app.post("/image", (req, res) => {
  const DOWNLOAD_DIR = path.join(
    process.env.HOME || process.env.USERPROFILE,
    "downloads/"
  );
  const filename = `${uuidv4()}.png`;
  var file_path = path.join(DOWNLOAD_DIR, filename);

  const data = req.body.image.replace(/^data:image\/\w+;base64,/, "");
  const buf = Buffer.from(data, "base64");

  fs.writeFile(file_path, buf, (err) => {
    if (err) throw new Error(err);
    else {
      res.download(file_path);
    }
  });
});

app.listen(5000, () => {
  console.log("Listening on port 5000!");
});
